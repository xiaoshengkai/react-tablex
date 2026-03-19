/** @format */

import { CheckboxProps } from 'antd/lib/checkbox';
import {
  InternalRuleItem,
  RuleItem,
  SyncValidateResult,
  ValidateOption,
  Values,
} from 'async-validator';
import React, {
  ComponentType,
  JSXElementConstructor,
  NamedExoticComponent,
  ReactElement,
  RefAttributes,
} from 'react';
import { Layout, Operate, Way } from '../constants';
import { Type } from '../constants/type';

export type RecordType = Record<string, any>;

export interface TableCellProps {
  cellData: any;
  rowData: RecordType;
  rowIndex: number;
}

export interface IConfig {
  ssid: number | string;
  fieldkey: string;
  path?: string;
}
export interface IOperateProps {
  type: Operate;
  /** 当前字段行唯一标识 */
  ssid?: number;
  /** 唯一标识 */
  fieldkey?: string;
  value?: number | string;
  error?: Object;
}

export interface WatchPropsHandleConfig {
  /**
   * 当前表格数据
   * @defaultValue  -
   */
  store: RecordType[];
  /**
   * 当前字段所在行数
   * @defaultValue -
   */
  rowIndex: number;
  /**
   * 当前字段行唯一标识
   * @defaultValue -
   */
  ssid: string;
  /**
   * 监听当前列所有field模式下，显示触发行唯一标识
   * @defaultValue -
   */
  emitSsid?: string;
  /**
   * 更新当前字段配置
   * @defaultValue -
   */
  updateSelfConfig: (params: any) => void;
  /**
   * 更新当前字段数据
   * @defaultValue -
   */
  updateCellData: (value: any) => void;
  /**
   * 更新当前列所有此字段数据
   *  @defaultValue -
   */
  updateColData: (value: any) => void;
  /**
   * 检验当前列所有此字段规则
   *  @defaultValue -
   */
  validateCol: () => void;
  /**
   * 检验当前字段规则
   *  @defaultValue -
   */
  validateSelf: () => void;
}

/** “观察对象” */
export interface WatchProps {
  /** 执行函数 */
  handle: (value: any, config: WatchPropsHandleConfig) => void;
  /** 依赖的fieldkey */
  deps: string[];
  /**
   * 是否立即执行
   * * @defaultValue false
   */
  immediately?: boolean;
  /**
   * 具体监听方式有如下4种，
   * 第一种cell     表示监听当前field，
   * 第二种col      表示监听当前列所有field，
   * 第三种[number] 表示静态指定行field，
   * 第四种[function] 表示动态指定行field，参数index为每一行行下标。
   * 第五种 pre 表示动态指监听上一行指定字段。
   * 第六种 next 表示动态指监听下一行指定字段。
   * @defaultValue field
   */
  way?:
    | Way.Cell
    | Way.Col
    | Way.Pre
    | Way.Next
    | number
    | ((index: number) => boolean);
}

export interface IFieldsStore {
  /** 校验的错误对象 */
  error?: undefined | { field: string; message: string; rowIndex: number };
  /** 收集的“依赖”函数 */
  fns?: Array<{
    sourceName: string;
    fn: (value: any, config: WatchPropsHandleConfig) => void;
  }>;
  /* 是否立即执行 */
  immediately?: boolean;
  /** “依赖”触发器 */
  emitFns: ({
    value,
    fns,
    ssid,
    store,
  }: {
    value: any;
    fns: any;
    ssid: any;
    store: any;
  }) => void;
  /** 检验方法 */
  validate?: (value: any) => any;
  /** 值 */
  value: any;
  /**  监听方式 */
  way?: Way | number | ((index: number) => boolean);
  /** 当前字段行唯一标识 */
  ssid: number;
  /** 当前字段所在行数 */
  rowIndex: number;
  // 当前单元格是否显示
  fieldShow?: boolean;
  // 当前单元格是否禁用
  fieldDisabled?: boolean;
  // 是否第一次渲染
  firstRender?: boolean;
  // 控制当前field强制更新
  fieldForceUpdate?: () => void;
  /** 选择组件，名称留存 */
  selectName?: string;
}

export interface RuleExtendProps {
  /** 当前字段行唯一标识 */
  ssid: number;
  /** 当前字段所在行数 */
  rowIndex: number;
  /** 唯一标识 */
  fieldkey: string;
  /** 获取更新前的表格数据 */
  getStore: () => Value;
}

/** 规则校验 */
export interface RuleProps extends Omit<RuleItem, 'validator'> {
  validator?: (
    rule: InternalRuleItem & RuleExtendProps,
    value: any,
    callback: (error?: string | Error) => void,
    source: Values,
    options: ValidateOption,
  ) => SyncValidateResult | Promise<any> | void;
}

interface ISlotProps {
  rowIndex: number;
  ssid: number;
  store: RecordType[];
}

interface IBaseItem {
  /** 初始化数据 */
  initialValue?: any;
  /** 唯一标识 */
  fieldkey: string;
  /** 列名 */
  label?: string | React.ReactNode;
  /**
   * 布局方式, 'horizontal' | 'vertical'
   * @defaultValue vertical
   */
  layoutMode?: Layout;
  /** 当前列是否禁用 */
  columnDisabled?: boolean;
  /** 当前单元格是否禁用，跟watch一起使用 */
  fieldDisabled?: boolean;
  /** 当前列是否显示 */
  columnShow?: boolean;
  /** 当前单元格是否显示，跟watch一起使用 */
  fieldShow?: boolean;
  /** 单元格固定宽度 */
  width?: number;
  /** 样式 */
  style?: React.CSSProperties;
  /**
   * 校验规则，
   * 具体使用，参照https://github.com/yiminghe/async-validator#rules
   */
  rules?: RuleProps[];
  /** 单元格底部插槽 */
  bottomContent?:
    | string
    | React.ReactNode
    | ((v: any, config: ISlotProps) => string | React.ReactNode);
  /** 单元格顶部插槽 */
  topContent?:
    | string
    | React.ReactNode
    | ((v: any, config: ISlotProps) => string | React.ReactNode);
  /** 单元格操作元素前端缀 */
  prefix?:
    | string
    | React.ReactNode
    | ((v: any, config: ISlotProps) => string | React.ReactNode);
  /** 单元格操作元素后缀 */
  suffix?:
    | string
    | React.ReactNode
    | ((v: any, config: ISlotProps) => string | React.ReactNode);
  /** 组件属性，除value, onChange外 */
  attrs?: Record<string, any>;
  /** 支持 “观察对象” 或者 “观察对象”集合 */
  watch?: WatchProps | WatchProps[];
  /**
   * 支持的排序方式
   * @defaultValue [ascend, descend]
   */
  sortDirections?: Array<string>;
  /**
   * 排序函数
   * @defaultValue [ascend, descend]
   */
  sorter?: Function | boolean | { compare: Function; multiple: number };
  /** 自定义 sort 图标 */
  sortIcon?: (props: { sortOrder }) => React.ReactNode;
  /** 表头的筛选菜单项 */
  filters?: object[];
  /** 筛选的运行函数 */
  onFilter?: (value: any, record: RecordType) => boolean;
  /** 筛选菜单项是否可搜索 */
  filterSearch?: boolean | ((value: any, record: RecordType) => boolean);
  /** 自定义 filter 图标 */
  filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
  /**
   * 设置固定列, left 或者 right
   * @defaultValue false
   */
  fixed?: boolean | string;
  /** 表头列合并，设置为 0 时，不渲染 */
  colSpan?: number;
  /** 设置单元格属性 */
  onCell?: (
    record,
    rowIndex,
  ) => React.HTMLAttributes<any> & React.TdHTMLAttributes<any>;
}

export interface IVirtualItemProps extends IBaseItem {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  defaultValue: string | number | boolean;
  ssid: number;
  className?: string;
  fieldkey: string;
  require?: boolean;
  disabled?: boolean;
}

/**
 * 主要接受 value, onChange 实现，包括其他辅助参数
 */
export type CustomReactNode = (
  props: TableCellProps &
    IBaseItem['attrs'] & { value: any; onChange: (value: any) => void },
) => React.ReactNode | React.JSX.Element;

/** 下拉选项 */
export interface OptionProps {
  label: string;
  value: any;
  disabled?: boolean;
  children?: OptionProps[];
}

export interface ColumnProps extends IBaseItem {
  /**
   * 表单类型，支持哆啦A梦表单组件类型 以及 内置扩展组件
   */
  type?: Type | `${Type}`;
  /** 自定义组件, TableCellProps来自 https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#cellrenderer*/
  custom?:
    | ComponentType<any>
    | CustomReactNode
    | {
        edit: CustomReactNode;
        display: CustomReactNode;
      };
  /** 下拉选项 */
  options?: OptionProps;
  /** 是否必填 */
  require?: boolean;
  /** 子项列配置 */
  children?: ColumnProps[];
}

/** 值 */
export type IValue = RecordType;
export type Value = Array<IValue & { ssid?: number }>;

export interface OperateItemsProps {
  /** 快捷操作按钮 */
  type?: Operate.Add | Operate.Del | Operate.MoveDown | Operate.MoveUp;
  /** 自定义操作按钮 */
  custom?: (
    props: {
      disabled: boolean;
      delRow: () => void;
      moveRowUp: () => void;
      moveDownUp: () => void;
      changeRowValue: (value: RecordType) => void;
      changeCellValue: (fieldkey: string, value: RecordType) => void;
    } & TableCellProps,
  ) => React.ReactNode;
  /** 禁用 */
  disabled?: boolean | ((cellProps: TableCellProps) => boolean);
}

export interface OperateConfigProps {
  /** 操作列名称 */
  label?: string;
  /** 操作列key */
  fieldkey?: string;
  /** 操作列宽度 */
  width?: number;
  /** 操作按钮布局方式 */
  layout?: Layout;
  /** 操作列是否设置固定列 - 向右*/
  isFixedOperate?: boolean;
}

/**
 * 选择功能的配置
 * 后续可增加
 */
export interface RowSelectionProps {
  /** 自定义列表选择框宽度 */
  columnWidth?: number;
  /** 选择列类型 */
  type?: 'radio' | 'checkbox';
  /** 选中值 */
  selectedRowKeys?: number[];
  /** 选中回调 */
  onChange?: (I: number[], D: Value) => void;
  /** 选择框的默认属性配置 */
  getCheckboxProps?: (
    record: RecordType,
  ) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>;
  /** 自定义选择项 配置项 */
  selections?:
    | Array<
        | {
            key: string;
            text: React.ReactNode;
            onSelect?: (currentRowKeys: React.Key[]) => void;
          }
        | 'SELECT_ALL'
        | 'SELECT_INVERT'
        | 'SELECT_NONE'
      >
    | boolean;
}

export interface ExpandableProps {
  /** 额外的展开行 */
  expandedRowRender: (
    record: RecordType,
    index: number,
    indent: number,
    expanded: boolean,
  ) => React.ReactNode;
  /** 设置是否允许行展开 */
  rowExpandable?: (record: RecordType) => boolean;
  /** 展开的行，控制属性 */
  expandedRowKeys?: string[];
  /** 默认展开的行	 */
  defaultExpandedRowKeys?: string[];
  /** 初始时，是否展开所有行 */
  defaultExpandAllRows?: boolean;
  /** 通过点击行来展开子行 */
  expandRowByClick?: boolean;
  /** 点击展开图标时触发 */
  onExpand?: (expanded: boolean, record: RecordType) => void;
}

export interface IVirtualTableProps {
  /** 虚拟表格默认值 */
  defaultValue?: Value;
  /** 虚拟表格值 */
  value?: Value;
  /** 表格值变化的回调函数 */
  onChange?: (v: Value) => void;
  /**
   * 表格配置项
   */
  columns: ColumnProps[];
  /** 基础UI表单组件 */
  BaseComponents?: Record<
    Type,
    {
      edit: React.ReactNode | ((options?: any) => React.ReactNode);
      display: React.ReactNode | ((options?: any) => React.ReactNode);
    }
  >;
  /**
   * 全局禁用
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * 全局只读
   * @defaultValue false
   */
  readonly?: boolean;
  /**
   * 滑动宽度
   * @defaultValue 0
   * */
  scrollWidth?: number;
  /**
   * 最大表格高度
   * @defaultValue 500
   */
  maxHeight?: number;
  /**
   * 显示的操作项
   * @defaultValue [{ type: Operate.Del, disabled: false }; { type: Operate.Add, disabled: false }]
   * */
  operateItems?: OperateItemsProps[];
  /**
   * 操作列配置项
   * */
  operateConfig?: OperateConfigProps;
  /**
   * 是否关闭表格操作
   * @defaultValue false
   * */
  isOperationBtnVisible?: boolean;
  /**
   * 添加行自定义文案
   * @defaultValue 添加行
   */
  addText?: string;
  /**
   * 删除行自定义文案
   * @defaultValue 删除
   * */
  delText?: string;
  /** 添加子行自定义文案 */
  // addChildText?: string;
  /**
   * 向上移动行自定义文案
   * @defaultValue 上移
   * */
  moveUpText?: string;
  /**
   * 向下移动行自定义文案
   * @defaultValue 下移
   * */
  moveDownText?: string;
  /** 空数据状态 */
  empty?: React.ReactNode | string;
  /** 添加上限 */
  addLimit?: number;
  /** 添加上限文案 */
  addLimitText?: (() => void) | string;
  /** 选择功能配置 */
  rowSelection?: RowSelectionProps;
  /** 展开功能的配置 */
  expandable?: ExpandableProps;
  /** 注册一个回调函数，在组件挂载完成后执行 */
  onMounted?: () => void;
  /** 监听当前滑动 */
  onScroll?: (v: {
    clientHeight: number;
    scrollHeight: number;
    scrollTop: number;
  }) => void;
}

export interface IVirtualTableExtendProps {
  /** 暴露的给“自定义Field”的钩子函数 */
  customCellRender?: (props: TableCellProps) => React.ReactNode;
  /** 暴露的给“跨组件监听使用的”钩子函数  */
  getRefAndMethod?: any;
}

export interface IVirtualTableImperativeReturn {
  validate: () => Promise<RecordType[]>;
  updateData: (data: RecordType[]) => void;
  getDataSource: () => RecordType[];
  fieldsStore: React.MutableRefObject<any>;
  dom: Element;
  scrollToY: any;
  addRow: (value: any) => { value: any; type: Operate.Add };
  listens: any;
}

export interface IMergeWatchToSource {
  watch: WatchProps & {
    emitFns: (v: any) => void;
    store?: Record<any, string>[];
  };
  sourceName?: string;
  result: RecordType;
}

export interface IGetListensProps {
  config: ColumnProps[];
  store: RecordType[];
}

export interface IGetListensItemReturn {
  store: RecordType[];
  fns: Array<any>;
  sourceName: string;
  emitFns: ({
    value,
    fns,
    ssid,
    store,
  }: {
    value: any;
    fns: any;
    ssid: any;
    store: any;
  }) => void;
  immediately?: boolean;
  way: Way;
}

export type IGetListensReturn = Record<string, IGetListensItemReturn>;

export interface IReactionRegister {
  dataSource: RecordType[];
  sourceConfig: ColumnProps[];
  operate: (...rest: any) => void;
  setConfig: (...rest: any) => void;
  register?: boolean;
  immediately?: boolean;
  fieldsStoreRef: { current: Record<number, IFieldsStore> };
}

export interface IEmitListensProps {
  fieldsStoreRef: { current: IFieldsStore[] };
  ssid: number;
  fieldkey: string;
  store: any;
  /** 是否被动触发 */
  isPassive?: boolean;
}

export type MyVirtualTable = NamedExoticComponent<
  IVirtualTableProps & RefAttributes<unknown>
> & {
  VirtualNo: ComponentType<any>;
};
