import { IApi } from 'dumi';
import path from 'path';
import {
  InterfaceDeclaration,
  Project,
  PropertySignature,
  SourceFile,
  SyntaxKind,
  Type,
  TypeAliasDeclaration,
} from 'ts-morph';

interface PropertyDoc {
  name: string;
  description: string;
  type: string;
  defaultValue?: string;
}

interface InterfaceDoc {
  [name: string]: PropertyDoc[];
}

class EnhancedTypeResolver {
  private project: Project;
  private sourceFile: SourceFile;
  private visitedTypes: Set<string> = new Set();
  private maxDepth: number = 4;
  private maxProperties: number = 4;
  private typeCache: Map<string, string> = new Map();
  private knownTypes: Set<string> = new Set();
  private importPattern = /import\(["'][^"']+["']\)\./g;

  constructor(sourceFilePath: string) {
    this.project = new Project();
    this.sourceFile = this.project.addSourceFileAtPath(sourceFilePath);
    this.collectKnownTypes();
  }

  private collectKnownTypes() {
    // 收集所有接口和类型别名
    this.sourceFile.getInterfaces().forEach((intf) => {
      this.knownTypes.add(intf.getName());
    });

    this.sourceFile.getTypeAliases().forEach((typeAlias) => {
      this.knownTypes.add(typeAlias.getName());
    });

    // 收集所有导出的常量
    this.sourceFile.getVariableDeclarations().forEach((decl) => {
      this.knownTypes.add(decl.getName());
    });
  }

  resolveAllInterfaces(): InterfaceDoc {
    const interfaces = this.sourceFile.getInterfaces();
    const typeAliases = this.sourceFile.getTypeAliases();
    const json: InterfaceDoc = {};

    // 解析接口
    interfaces.forEach((intf) => {
      json[intf.getName()] = this.resolveInterface(intf);
    });

    // 解析类型别名
    typeAliases.forEach((typeAlias) => {
      json[typeAlias.getName()] = this.resolveTypeAlias(typeAlias);
    });

    return json;
  }

  private resolveInterface(intf: InterfaceDeclaration): PropertyDoc[] {
    return intf.getProperties().map((prop) => this.resolveProperty(prop));
  }

  private resolveTypeAlias(typeAlias: TypeAliasDeclaration): PropertyDoc[] {
    const type = typeAlias.getType();

    if (type.isObject()) {
      return type.getProperties().map((symbol) => {
        const declarations = symbol.getDeclarations();
        if (
          declarations.length > 0 &&
          declarations[0].getKind() === SyntaxKind.PropertySignature
        ) {
          const prop = declarations[0] as PropertySignature;
          return this.resolveProperty(prop);
        }
        return {
          name: symbol.getName(),
          description: '',
          type: this.resolveType(symbol.getTypeAtLocation(this.sourceFile)),
        };
      });
    }

    return [
      {
        name: 'type',
        description: '',
        type: this.resolveType(type),
      },
    ];
  }

  private resolveProperty(prop: PropertySignature): PropertyDoc {
    const type = prop.getType();
    const jsDocs = prop.getJsDocs();

    return {
      name: prop.getName(),
      description: this.getJsDocDescription(prop),
      type: this.resolveType(type),
      defaultValue: this.getDefaultValueFromJsDoc(jsDocs),
    };
  }

  public resolveType(type: Type, depth = 0): string {
    if (depth > this.maxDepth) {
      return this.cleanTypeString(type.getText());
    }

    const typeId = this.getTypeId(type);

    if (this.typeCache.has(typeId)) {
      return this.typeCache.get(typeId)!;
    }

    if (this.visitedTypes.has(typeId)) {
      return '...';
    }

    this.visitedTypes.add(typeId);

    try {
      let result: string;

      // 处理基础类型
      if (type.isString()) result = 'string';
      else if (type.isNumber()) result = 'number';
      else if (type.isBoolean()) result = 'boolean';
      else if (type.isVoid()) result = 'void';
      else if (type.isUndefined()) result = 'undefined';
      else if (type.isNull()) result = 'null';
      else if (type.isAny()) result = 'any';
      else if (type.isUnknown()) result = 'unknown';
      else if (type.isNever()) result = 'never';
      // 处理字面量类型
      else if (type.isLiteral()) {
        result = this.cleanTypeString(type.getText());
      }
      // 处理枚举类型
      else if (type.isEnum()) {
        result =
          type.getSymbol()?.getName() || this.cleanTypeString(type.getText());
      }
      // 处理联合类型 - 优化表示
      else if (type.isUnion()) {
        const types = type.getUnionTypes();
        const uniqueTypes = new Set<string>();

        types.forEach((t) => {
          const resolved = this.resolveType(t, depth + 1);
          // 过滤掉重复类型和 any
          if (resolved !== 'any' && !uniqueTypes.has(resolved)) {
            uniqueTypes.add(resolved);
          }
        });

        result = Array.from(uniqueTypes).join(' | ');
      }
      // 处理数组类型
      else if (type.isArray()) {
        const elementType = type.getArrayElementType();
        result = elementType
          ? `${this.resolveType(elementType, depth + 1)}[]`
          : 'any[]';
      }
      // 处理元组类型
      else if (type.isTuple()) {
        const elements = type
          .getTupleElements()
          .map((t) => this.resolveType(t, depth + 1));
        result = `[${elements.join(', ')}]`;
      }
      // 处理函数类型 - 简化表示
      else if (type.getCallSignatures().length > 0) {
        result = 'function';
      }
      // 处理对象类型 - 精确表示
      else if (type.isObject()) {
        const properties = type.getProperties();
        if (properties.length > 0) {
          const propStrings = properties
            .slice(0, this.maxProperties)
            .map((symbol) => {
              const name = symbol.getName();
              const propType = symbol.getTypeAtLocation(this.sourceFile);
              return `${name}: ${this.resolveType(propType, depth + 1)}`;
            });
          result = `{ ${propStrings.join('; ')} }`;
        } else {
          result = 'object';
        }
      }
      // 处理类型引用 - 使用已知类型名称
      else if (type.getSymbol()) {
        const symbol = type.getSymbol();
        const name = symbol.getName();

        // 检查是否是已知类型
        if (this.knownTypes.has(name)) {
          result = name;
        }
        // 处理导入的类型
        else {
          const aliasSymbol = type.getAliasSymbol();
          result = aliasSymbol ? aliasSymbol.getName() : name;
        }
      }
      // 默认返回清理后的类型文本
      else {
        result = this.cleanTypeString(type.getText());
      }

      // 再次清理结果
      result = this.cleanTypeString(result);

      // 缓存结果
      this.typeCache.set(typeId, result);
      return result;
    } finally {
      this.visitedTypes.delete(typeId);
    }
  }

  private cleanTypeString(typeString: string): string {
    // 更彻底地清理导入路径
    return typeString
      .replace(this.importPattern, '') // 移除 import(...).
      .replace(/import\s+[\w*{}\s,]*\s+from\s+["'][^"']+["'];/g, '') // 移除 import 语句
      .replace(/\w+\./g, '') // 移除命名空间前缀
      .replace(/\s*\|\s*/g, ' | ') // 统一联合类型格式
      .replace(/\s*,\s*/g, ', ') // 统一元组格式
      .replace(/\s+/g, ' ') // 压缩多余空格
      .replace(
        /\b(?:import|typeof)\s+[\w*{}\s,]*\s+from\s+["'][^"']+["'];/g,
        '',
      ); // 移除 import 和 typeof 语句
  }

  private getTypeId(type: Type): string {
    const symbol = type.getSymbol();
    return symbol ? symbol.getName() : type.getText();
  }

  private getJsDocDescription(node: { getJsDocs(): any[] }): string {
    const jsDocs = node.getJsDocs();
    return jsDocs.length > 0 ? (jsDocs[0].getDescription() || '').trim() : '';
  }

  private getDefaultValueFromJsDoc(jsDocs: any[]): string | undefined {
    for (const jsDoc of jsDocs) {
      const tags = jsDoc.getTags();
      const defaultValueTag = tags.find(
        (tag) => tag.getTagName() === 'defaultValue',
      );

      if (defaultValueTag) {
        return defaultValueTag.getComment() || '';
      }
    }
    return undefined;
  }
}

const sourceFilePath = path.resolve(
  __dirname,
  '../../src/common/type/index.ts',
);

export default (api: IApi) => {
  // 编写插件内容
  // api.addBeforeMiddlewares(DevProxyMiddleware);
  // api.onBuildComplete(() => {
  //   const resolver = new EnhancedTypeResolver(sourceFilePath);
  //   const json = resolver.resolveAllInterfaces();
  //   const filePath = path.resolve(
  //     __dirname,
  //     '../theme/builtins/TsInfo/interface.json',
  //   );
  //   const preJson = fs.readFileSync(filePath).toString();
  //   if (JSON.stringify(json) !== JSON.stringify(preJson)) {
  //     console.log('不同', json, preJson);
  //     // console.log('不同')
  //     // 写入文件
  //     fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  //   }
  // });
};
