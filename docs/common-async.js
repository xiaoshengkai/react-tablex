((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] || []).push([
        ['common'],
{ ".dumi/theme/builtins/TsInfo/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _interfacejson = /*#__PURE__*/ _interop_require_default._(__mako_require__(".dumi/theme/builtins/TsInfo/interface.json"));
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const Panel = _antd.Collapse.Panel;
const TsInfo = ({ name })=>{
    const dataSource = _interfacejson.default[name];
    console.log('json', _interfacejson.default);
    const columns = [
        {
            width: 150,
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            width: 200,
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'DefaultValue',
            dataIndex: 'defaultValue',
            key: 'defaultValue',
            width: 150
        }
    ];
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "tsInfo",
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table, {
            pagination: false,
            columns: columns,
            dataSource: dataSource
        }, void 0, false, {
            fileName: ".dumi/theme/builtins/TsInfo/index.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: ".dumi/theme/builtins/TsInfo/index.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_c = TsInfo;
var _default = TsInfo;
var _c;
$RefreshReg$(_c, "TsInfo");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
".dumi/theme/builtins/TsInfo/interface.json": function (module, exports, __mako_require__){
module.exports = {
    "IVirtualTableProps": [
        {
            "name": "defaultValue",
            "description": "虚拟表格默认值",
            "type": "Value",
            "defaultValue": ""
        },
        {
            "name": "value",
            "description": "虚拟表格值",
            "type": "Value",
            "defaultValue": ""
        },
        {
            "name": "onChange",
            "description": "表格值变化的回调函数",
            "type": "(v: Value) => void",
            "defaultValue": ""
        },
        {
            "name": "columns",
            "description": "表格配置项",
            "type": "ColumnProps[]",
            "defaultValue": ""
        },
        {
            "name": "disabled",
            "description": "全局禁用",
            "type": "boolean",
            "defaultValue": "false"
        },
        {
            "name": "readonly",
            "description": "全局只读",
            "type": "boolean",
            "defaultValue": "false"
        },
        {
            "name": "scrollWidth",
            "description": "滑动宽度",
            "type": "number",
            "defaultValue": "0"
        },
        {
            "name": "maxHeight",
            "description": "最大表格高度",
            "type": "number",
            "defaultValue": "500"
        },
        {
            "name": "operateItems",
            "description": "显示的操作项",
            "type": "OperateItemsProps[]",
            "defaultValue": "[{ type: Operate.Del, disabled: false }; { type: Operate.Add, disabled: false }]"
        },
        {
            "name": "operateConfig",
            "description": "操作列配置项",
            "type": "OperateConfigProps",
            "defaultValue": ""
        },
        {
            "name": "isOperationBtnVisible",
            "description": "是否关闭表格操作",
            "type": "boolean",
            "defaultValue": "false"
        },
        {
            "name": "addText",
            "description": "添加行自定义文案",
            "type": "string",
            "defaultValue": "添加行"
        },
        {
            "name": "delText",
            "description": "删除行自定义文案",
            "type": "string",
            "defaultValue": "删除"
        },
        {
            "name": "moveUpText",
            "description": "向上移动行自定义文案",
            "type": "string",
            "defaultValue": "上移"
        },
        {
            "name": "moveDownText",
            "description": "向下移动行自定义文案",
            "type": "string",
            "defaultValue": "下移"
        },
        {
            "name": "empty",
            "description": "空数据状态",
            "type": "React.ReactNode | string",
            "defaultValue": ""
        },
        {
            "name": "addLimit",
            "description": "添加上限",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "addLimitText",
            "description": "添加上限文案",
            "type": "(() => void) | string",
            "defaultValue": ""
        },
        {
            "name": "rowSelection",
            "description": "选择功能配置",
            "type": "RowSelectionProps",
            "defaultValue": ""
        },
        {
            "name": "expandable",
            "description": "展开功能的配置",
            "type": "ExpandableProps",
            "defaultValue": ""
        },
        {
            "name": "onMounted",
            "description": "注册一个回调函数，在组件挂载完成后执行",
            "type": "() => void",
            "defaultValue": ""
        },
        {
            "name": "onScroll",
            "description": "监听当前滑动",
            "type": "(v: {clientHeight: number;scrollHeight: number;scrollTop: number;})",
            "defaultValue": ""
        }
    ],
    "IValue": [
        {
            "name": "Value",
            "description": "值",
            "type": "RecordType",
            "defaultValue": ""
        }
    ],
    "ColumnProps": [
        {
            "name": "initialValue",
            "description": "初始化数据",
            "type": "any",
            "defaultValue": ""
        },
        {
            "name": "fieldkey",
            "description": "唯一标识",
            "type": "string",
            "defaultValue": ""
        },
        {
            "name": "label",
            "description": "列名",
            "type": "string | React.ReactNode",
            "defaultValue": ""
        },
        {
            "name": "layoutMode",
            "description": "布局方式",
            "type": "Layout",
            "defaultValue": "vertical"
        },
        {
            "name": "columnDisabled",
            "description": "当前列是否禁用",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "fieldDisabled",
            "description": "当前单元格是否禁用",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "columnShow",
            "description": "当前列是否显示",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "fieldShow",
            "description": "当前单元格是否显示",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "width",
            "description": "单元格固定宽度",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "style",
            "description": "样式",
            "type": "React.CSSProperties",
            "defaultValue": ""
        },
        {
            "name": "rules",
            "description": "校验规则",
            "type": "RuleProps[]",
            "defaultValue": ""
        },
        {
            "name": "bottomContent",
            "description": "单元格底部插槽",
            "type": "string | React.ReactNode | ((v: any, config: ISlotProps) => string | React.ReactNode)",
            "defaultValue": ""
        },
        {
            "name": "topContent",
            "description": "单元格顶部插槽",
            "type": "string | React.ReactNode | ((v: any, config: ISlotProps) => string | React.ReactNode)",
            "defaultValue": ""
        },
        {
            "name": "prefix",
            "description": "单元格操作元素前端缀",
            "type": "string | React.ReactNode | ((v: any, config: ISlotProps) => string | React.ReactNode)",
            "defaultValue": ""
        },
        {
            "name": "suffix",
            "description": "单元格操作元素后缀",
            "type": "string | React.ReactNode | ((v: any, config: ISlotProps) => string | React.ReactNode)",
            "defaultValue": ""
        },
        {
            "name": "attrs",
            "description": "组件属性",
            "type": "AttrsProps",
            "defaultValue": ""
        },
        {
            "name": "watch",
            "description": "支持观察对象",
            "type": "WatchProps | WatchProps[]",
            "defaultValue": ""
        },
        {
            "name": "sortDirections",
            "description": "支持的排序方式",
            "type": "Array<string>",
            "defaultValue": "[ascend, descend]"
        },
        {
            "name": "sorter",
            "description": "排序函数",
            "type": "Function | boolean | { compare: Function, multiple: number }",
            "defaultValue": ""
        },
        {
            "name": "sortIcon",
            "description": "自定义 sort 图标",
            "type": "(props: { sortOrder }) => React.ReactNode",
            "defaultValue": ""
        },
        {
            "name": "filters",
            "description": "表头的筛选菜单项",
            "type": "object[]",
            "defaultValue": ""
        },
        {
            "name": "onFilter",
            "description": "筛选的运行函数",
            "type": "(value: any, record: RecordType) => boolean",
            "defaultValue": ""
        },
        {
            "name": "filterSearch",
            "description": "筛选菜单项是否可搜索",
            "type": "boolean | ((value: any, record: RecordType) => boolean)",
            "defaultValue": ""
        },
        {
            "name": "filterIcon",
            "description": "自定义 filter 图标",
            "type": "React.ReactNode | ((filtered: boolean) => React.ReactNode)",
            "defaultValue": ""
        },
        {
            "name": "fixed",
            "description": "设置固定列",
            "type": "boolean | string",
            "defaultValue": "false"
        },
        {
            "name": "colSpan",
            "description": "表头列合并",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "onCell",
            "description": "设置单元格属性",
            "type": "(record, rowIndex) => React.HTMLAttributes<any> & React.TdHTMLAttributes<any>",
            "defaultValue": ""
        },
        {
            "name": "type",
            "description": "表单类型",
            "type": "Type | `${Type}`",
            "defaultValue": ""
        },
        {
            "name": "custom",
            "description": "自定义组件",
            "type": "ComponentType<any> | CustomReactNode | { edit: CustomReactNode; display: CustomReactNode }",
            "defaultValue": ""
        },
        {
            "name": "options",
            "description": "下拉选项",
            "type": "OptionProps[]",
            "defaultValue": ""
        },
        {
            "name": "require",
            "description": "是否必填",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "children",
            "description": "子项列配置",
            "type": "ColumnProps[]",
            "defaultValue": ""
        }
    ],
    "OperateItemsProps": [
        {
            "name": "type",
            "description": "快捷操作按钮类型",
            "type": "Operate.Add | Operate.Del | Operate.MoveDown | Operate.MoveUp",
            "defaultValue": ""
        },
        {
            "name": "custom",
            "description": "自定义操作按钮",
            "type": "(props: { disabled: boolean; delRow: () => void; moveRowUp: () => void; moveDownUp: () => void; changeRowValue: (value: RecordType) => void; changeCellValue: (fieldkey: string, value: RecordType) => void; } & TableCellProps) => React.ReactNode",
            "defaultValue": ""
        },
        {
            "name": "disabled",
            "description": "禁用状态",
            "type": "boolean | ((cellProps: TableCellProps) => boolean)",
            "defaultValue": ""
        }
    ],
    "OperateConfigProps": [
        {
            "name": "label",
            "description": "操作列名称",
            "type": "string",
            "defaultValue": ""
        },
        {
            "name": "fieldkey",
            "description": "操作列key",
            "type": "string",
            "defaultValue": ""
        },
        {
            "name": "width",
            "description": "操作列宽度",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "layout",
            "description": "操作按钮布局方式",
            "type": "Layout",
            "defaultValue": ""
        },
        {
            "name": "isFixedOperate",
            "description": "操作列是否设置固定列 - 向右",
            "type": "boolean",
            "defaultValue": ""
        }
    ],
    "CustomReactNode": [
        {
            "name": "CustomReactNode",
            "description": "主要接受 value, onChange 实现，包括其他辅助参数",
            "type": "(props: TableCellProps & IBaseItem['attrs'] & { value: any; onChange: (value: any) => void }) => React.ReactNode | React.JSX.Element",
            "defaultValue": ""
        }
    ],
    "WatchProps": [
        {
            "name": "handle",
            "description": "执行函数",
            "type": "(value: any, config: WatchPropsHandleConfig) => void",
            "defaultValue": ""
        },
        {
            "name": "deps",
            "description": "依赖的fieldkey",
            "type": "string[]",
            "defaultValue": ""
        },
        {
            "name": "immediately",
            "description": "是否立即执行",
            "type": "boolean",
            "defaultValue": "false"
        },
        {
            "name": "way",
            "description": "监听方式",
            "type": "Way.Cell | Way.Col | Way.Pre | Way.Next | number | ((index: number) => boolean)",
            "defaultValue": "field"
        }
    ],
    "WatchPropsHandleConfig": [
        {
            "name": "store",
            "description": "当前表格数据",
            "type": "RecordType[]",
            "defaultValue": ""
        },
        {
            "name": "rowIndex",
            "description": "当前字段所在行数",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "ssid",
            "description": "当前字段行唯一标识",
            "type": "string",
            "defaultValue": ""
        },
        {
            "name": "emitSsid",
            "description": "监听当前列所有field模式下，显示触发行唯一标识",
            "type": "string",
            "defaultValue": ""
        },
        {
            "name": "updateSelfConfig",
            "description": "更新当前字段配置",
            "type": "(params: any) => void",
            "defaultValue": ""
        },
        {
            "name": "updateCellData",
            "description": "更新当前字段数据",
            "type": "(value: any) => void",
            "defaultValue": ""
        },
        {
            "name": "updateColData",
            "description": "更新当前列所有此字段数据",
            "type": "(value: any) => void",
            "defaultValue": ""
        },
        {
            "name": "validateCol",
            "description": "检验当前列所有此字段规则",
            "type": "() => void",
            "defaultValue": ""
        },
        {
            "name": "validateSelf",
            "description": "检验当前字段规则",
            "type": "() => void",
            "defaultValue": ""
        }
    ],
    "RowSelectionProps": [
        {
            "name": "columnWidth",
            "description": "自定义列表选择框宽度",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "type",
            "description": "选择列类型",
            "type": "'radio' | 'checkbox'",
            "defaultValue": ""
        },
        {
            "name": "selectedRowKeys",
            "description": "选中值",
            "type": "number[]",
            "defaultValue": ""
        },
        {
            "name": "onChange",
            "description": "选中回调",
            "type": "(I: number[], D: Value) => void",
            "defaultValue": ""
        },
        {
            "name": "getCheckboxProps",
            "description": "选择框的默认属性配置",
            "type": "(record: RecordType) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>",
            "defaultValue": ""
        },
        {
            "name": "selections",
            "description": "自定义选择项配置项",
            "type": "Array<{ key: string; text: React.ReactNode; onSelect?: (currentRowKeys: React.Key[]) => void; } | 'SELECT_ALL' | 'SELECT_INVERT' | 'SELECT_NONE'> | boolean",
            "defaultValue": ""
        }
    ],
    "ExpandableProps": [
        {
            "name": "expandedRowRender",
            "description": "额外的展开行",
            "type": "(record: RecordType, index: number, indent: number, expanded: boolean) => React.ReactNode",
            "defaultValue": ""
        },
        {
            "name": "rowExpandable",
            "description": "设置是否允许行展开",
            "type": "(record: RecordType) => boolean",
            "defaultValue": ""
        },
        {
            "name": "expandedRowKeys",
            "description": "展开的行，控制属性",
            "type": "string[]",
            "defaultValue": ""
        },
        {
            "name": "defaultExpandedRowKeys",
            "description": "默认展开的行",
            "type": "string[]",
            "defaultValue": ""
        },
        {
            "name": "defaultExpandAllRows",
            "description": "初始时，是否展开所有行",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "expandRowByClick",
            "description": "通过点击行来展开子行",
            "type": "boolean",
            "defaultValue": ""
        },
        {
            "name": "onExpand",
            "description": "点击展开图标时触发",
            "type": "(expanded: boolean, record: RecordType) => void",
            "defaultValue": ""
        }
    ],
    "RuleExtendProps": [
        {
            "name": "ssid",
            "description": "当前字段行唯一标识",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "rowIndex",
            "description": "当前字段所在行数",
            "type": "number",
            "defaultValue": ""
        },
        {
            "name": "fieldkey",
            "description": "唯一标识",
            "type": "string",
            "defaultValue": ""
        },
        {
            "name": "getStore",
            "description": "获取更新前的表格数据",
            "type": "() => Value",
            "defaultValue": ""
        }
    ]
};

},
".dumi/tmp/dumi/theme/slots/SiteContext.ts": function (module, exports, __mako_require__){
// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _SiteContext.default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _SiteContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/slots/SiteContext.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/changelog.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/changelog.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "增加单测",
        "paraId": 0,
        "tocIndex": 2
    },
    {
        "value": "API 展示优化",
        "paraId": 0,
        "tocIndex": 2
    },
    {
        "value": "增加表格基本功能\n",
        "paraId": 1,
        "tocIndex": 4
    },
    {
        "value": "筛选和排序",
        "paraId": 2,
        "tocIndex": 4
    },
    {
        "value": "可展开",
        "paraId": 2,
        "tocIndex": 4
    },
    {
        "value": "固定列",
        "paraId": 2,
        "tocIndex": 4
    },
    {
        "value": "表格行/列合并",
        "paraId": 2,
        "tocIndex": 4
    },
    {
        "value": "虚拟表格依赖替换为rc-table(antd版)",
        "paraId": 1,
        "tocIndex": 4
    },
    {
        "value": "单测接入",
        "paraId": 3,
        "tocIndex": 5
    },
    {
        "value": "文档优化",
        "paraId": 3,
        "tocIndex": 5
    },
    {
        "value": "修复 金额组件只读态问题",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "修复 自更新 updateConfig",
        "paraId": 5,
        "tocIndex": 9
    },
    {
        "value": "修复 校验值从有到无异常问题",
        "paraId": 6,
        "tocIndex": 11
    },
    {
        "value": "修复 添加行，删除行未触发事件消费",
        "paraId": 6,
        "tocIndex": 11
    },
    {
        "value": "修复 重新设置value，未触发校验",
        "paraId": 6,
        "tocIndex": 11
    },
    {
        "value": "修复 外部控制数据为空情况",
        "paraId": 6,
        "tocIndex": 11
    },
    {
        "value": "增加 金额输入框",
        "paraId": 7,
        "tocIndex": 13
    },
    {
        "value": "修复报错部分表单元素不标红情况",
        "paraId": 8,
        "tocIndex": 15
    },
    {
        "value": "修复 class 组件 使用表格多选列，全选报错",
        "paraId": 8,
        "tocIndex": 15
    },
    {
        "value": "修复 无数据状态下，检验不会触发回调",
        "paraId": 8,
        "tocIndex": 15
    },
    {
        "value": "修复 增加表格多选列全选问题",
        "paraId": 8,
        "tocIndex": 15
    },
    {
        "value": "增加 VirtualLink props 扩展",
        "paraId": 9,
        "tocIndex": 16
    },
    {
        "value": "增加 VirtualItem className",
        "paraId": 9,
        "tocIndex": 16
    },
    {
        "value": "增加 ",
        "paraId": 10,
        "tocIndex": 18
    },
    {
        "value": "设计详解",
        "paraId": 10,
        "tocIndex": 18
    },
    {
        "value": " 说明页面",
        "paraId": 10,
        "tocIndex": 18
    },
    {
        "value": "修复初始化一条数据时,删除不触发onChange",
        "paraId": 11,
        "tocIndex": 20
    },
    {
        "value": "增加表格单选列, 多选列",
        "paraId": 12,
        "tocIndex": 22
    },
    {
        "value": "watchs去掉，只保留 watch 并 支持数组形式",
        "paraId": 13,
        "tocIndex": 24
    },
    {
        "value": "readOnly 重命名 readonly",
        "paraId": 13,
        "tocIndex": 24
    },
    {
        "value": "删除事件：beforeChange & afterChange",
        "paraId": 13,
        "tocIndex": 24
    },
    {
        "value": "属性重命名 hideDefaultOperateConfig，改为 isOperationBtnVisible",
        "paraId": 13,
        "tocIndex": 24
    },
    {
        "value": "修复 addRow 传参为 0,显示 - 问题",
        "paraId": 14,
        "tocIndex": 26
    },
    {
        "value": "修复 监听当前列触发watch报错问题",
        "paraId": 14,
        "tocIndex": 26
    },
    {
        "value": "优化 addRow 入参方式",
        "paraId": 15,
        "tocIndex": 27
    },
    {
        "value": "优化 校验field table全更新问题",
        "paraId": 15,
        "tocIndex": 27
    },
    {
        "value": "插槽增加出参",
        "paraId": 16,
        "tocIndex": 29
    },
    {
        "value": "性能优化，更新配置项、数据重置拦截",
        "paraId": 17,
        "tocIndex": 31
    },
    {
        "value": "firstRender控制重复组件渲染",
        "paraId": 17,
        "tocIndex": 31
    },
    {
        "value": "脚手架打包功能替换优化",
        "paraId": 17,
        "tocIndex": 31
    },
    {
        "value": "修复 同一字段不同方式监听问题",
        "paraId": 18,
        "tocIndex": 33
    },
    {
        "value": "修复 监听前一行, 监听下一行，监听失败问题",
        "paraId": 18,
        "tocIndex": 33
    },
    {
        "value": "增加监听回参",
        "paraId": 19,
        "tocIndex": 34
    },
    {
        "value": "emitSsid",
        "paraId": 19,
        "tocIndex": 34
    },
    {
        "value": "，表示监听当前列所有field模式下，显示触发行唯一标识",
        "paraId": 19,
        "tocIndex": 34
    },
    {
        "value": "支持操作项按钮竖排",
        "paraId": 20,
        "tocIndex": 36
    },
    {
        "value": "支持自定义操作按钮",
        "paraId": 20,
        "tocIndex": 36
    },
    {
        "value": "修复 三方组件 replace-in-files-cli 升级为v3版本不兼容问题；工程锁死 v2.2.0 版本",
        "paraId": 21,
        "tocIndex": 38
    },
    {
        "value": "增加内置扩展组件：文本组件 Text，跳转组件 Link",
        "paraId": 22,
        "tocIndex": 40
    },
    {
        "value": "增加单元格 prefix 和 suffix",
        "paraId": 23,
        "tocIndex": 42
    },
    {
        "value": "修复单元格字段值为 0 情况下，展示空问题",
        "paraId": 24,
        "tocIndex": 44
    },
    {
        "value": "onChange 逻辑修复",
        "paraId": 25,
        "tocIndex": 46
    },
    {
        "value": "支持全局只读模式",
        "paraId": 26,
        "tocIndex": 48
    },
    {
        "value": "全局禁用修复",
        "paraId": 27,
        "tocIndex": 49
    },
    {
        "value": "快捷键移动，第2行移动到第一行显示错误修复",
        "paraId": 27,
        "tocIndex": 49
    },
    {
        "value": "修复 组件受控问题",
        "paraId": 28,
        "tocIndex": 51
    },
    {
        "value": "升级 doraemon v4",
        "paraId": 29,
        "tocIndex": 53
    },
    {
        "value": "修复 多children监听问题",
        "paraId": 30,
        "tocIndex": 55
    },
    {
        "value": "支持大数据表格渲染",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持滑动定位",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "提供钩子 before & afterChange",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "增加快捷操作项: 上移，下移，添加，删除，添加",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "watch 监听式编程",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "watch 类型支持全列 & 指定行 & 上一个 & 下一个",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "watch 支持 多deps",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "watch 支持 立即执行",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持全局 ｜ 自定义，行禁用",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持 无数据状态",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持 外部更新数据API",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持表格表头宽度动态自适应",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持表格单元格行高动态自适应",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持改变当前单元格数据",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持改变当前列数据",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持多field字段，行/列布局",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持单元格检验 & 自定义检验",
        "paraId": 31,
        "tocIndex": 57
    },
    {
        "value": "支持自定义组件",
        "paraId": 31,
        "tocIndex": 57
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/design/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/design/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "整个表格采用 antd rc-table 模式进行二次扩展开发",
        "paraId": 0,
        "tocIndex": 2
    },
    {
        "value": "通过定义 ",
        "paraId": 1,
        "tocIndex": 3
    },
    {
        "value": "JSON",
        "paraId": 1,
        "tocIndex": 3
    },
    {
        "value": " 的方式来配置 最终表格表单展示形态。",
        "paraId": 1,
        "tocIndex": 3
    },
    {
        "value": "首先拿到 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "JSON",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 进行遍历，提取每一项的 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "，其中根据 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 或者 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "custom",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 来渲染 单元格 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Field",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "，返回组装出 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "cellRenderer",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 表格表单渲染。其中，单元格",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Field",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 渲染会由 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "VirtualItem",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 来承接渲染，这个具体下面会讲到！",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "利用 ",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "antd rc-table",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": " 中的特性 ",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "rowHeight",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "来控制表格每一行的高度特性，那么我只要能够得到每一行的真实高度即可设置虚拟表格行动态高度！",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "首先设置",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "relHeaderHeight",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " ， ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "relRowHeights",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "两个状态来分别控制表头高度和行高度，然后通过监听当前表格DOM的变化来触发计算，通过计算出每一行的中的单元格高度，最后通过比较，以最高的单元格高度作为当前行的高度，重新渲染表格！",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "优化：通过节流的方式，限制表格DOM变化触发的副作用次数",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "整个表格表单会被解析成 ",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "FiledStore",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "对象，它是对表单每个字段的描述。",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "首先，在组件初始化（",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "dataSource\\columns",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "更新）的情况下，触发全字段的注册，调用",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "registerFieldsStore",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "方法，遍历",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "columns",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "，如果",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "columns",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "存在",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "子columns",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "嵌套的情况，会递归继续遍历，在遍历的过程中，会去定义一些方法，比如：获取当前表格数据、更新当前当前单元格参数、校验、当前字段所在行标识ssid，收集的方法等等；然后对 dataSource进行遍历，为每一个字段（Field）进行挂载上述方法。",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "接上述：遍历",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "columns",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "过程中，存在",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "watch",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "配置，获取",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "deps",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "然后遍历，将执行函数注册到对应 ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Field",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " 上；在后续用户通过交互触发组件 ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "onChange",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "或者 ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "watch",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "监听受 ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Emit",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " 触发",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "updateCellData",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "，此时会去执行 ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Fn",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "，执行的过程为队列，先注册的先执行，后执行的会覆盖前者。",
        "paraId": 8,
        "tocIndex": 6
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/introduc.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/introduc.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "react-tablex",
        "paraId": 0
    },
    {
        "value": "是基于 ",
        "paraId": 0
    },
    {
        "value": "rc-table",
        "paraId": 0
    },
    {
        "value": " + ",
        "paraId": 0
    },
    {
        "value": "自定义表格表单系统",
        "paraId": 0
    },
    {
        "value": " + ",
        "paraId": 0
    },
    {
        "value": "自定义UI库",
        "paraId": 0
    },
    {
        "value": " 编写的 React UI 组件库，用于快速编写表格表单业务，解决大数据渲染瓶颈。",
        "paraId": 0
    },
    {
        "value": "📦 支持大数据渲染，解决大数据表格性能问题",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "🎪 支持表格表单配置化编写，快速编写表格表单业务场景",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "⚡ ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "数据监听",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "的设计体系，监听式处理业务逻辑",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "🦌 内置Antd4UI组件库，方便快速接入",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "npm install -D react-tablex\n",
        "paraId": 2
    },
    {
        "value": "yarn add -D react-tablex\n",
        "paraId": 3
    },
    {
        "value": "pnpm add -D react-tablex\n",
        "paraId": 4
    },
    {
        "value": "import React from 'react';\nimport VirtualTable from 'react-tablex';\n\nconst columns = [\n  {\n    label: '序号',\n    fieldkey: 'index',\n    custom: VirtualTable.VirtualNo,\n    width: 80,\n  },\n  {\n    label: '名称',\n    fieldkey: 'type',\n    type: 'Input',\n  },\n];\n\nconst App = () => {\n  return <VirtualTable columns={columns} />;\n};\n\nexport default App;\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "具体例子 🌰，看",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "列描述数据对象描述\n",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "操作列按钮配置\n",
        "paraId": 9,
        "tocIndex": 8
    },
    {
        "value": "操作列样式配置\n",
        "paraId": 10,
        "tocIndex": 9
    },
    {
        "value": "自定义组件定义\n",
        "paraId": 11,
        "tocIndex": 10
    },
    {
        "value": "“观察对象”，侦听一个或多个",
        "paraId": 12,
        "tocIndex": 11
    },
    {
        "value": "fieldkey",
        "paraId": 12,
        "tocIndex": 11
    },
    {
        "value": "，并在数据源变化时调用所给的回调函数\n",
        "paraId": 12,
        "tocIndex": 11
    },
    {
        "value": "“观察对象”，回调函数操作项\n",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "选择功能配置\n",
        "paraId": 14,
        "tocIndex": 13
    },
    {
        "value": "展开功能的配置\n",
        "paraId": 15,
        "tocIndex": 14
    },
    {
        "value": "Type",
        "paraId": 16,
        "tocIndex": 14
    },
    {
        "value": "类型枚举，所有支持的",
        "paraId": 16,
        "tocIndex": 14
    },
    {
        "value": "哆啦A梦表单组件类型",
        "paraId": 16,
        "tocIndex": 14
    },
    {
        "value": "说明如下：",
        "paraId": 16,
        "tocIndex": 14
    },
    {
        "value": "export enum Type {\n  /**\n   * 输入框\n   * @description Input\n   */\n  InputName = 'Input',\n  /**\n   * 多行文本输入框\n   * @description Input.TextArea\n   */\n  TextAreaName = 'TextArea',\n  /**\n   * 数字输入框\n   * @description InputNumber\n   */\n  InputNumberName = 'InputNumber',\n  /**\n   * 单选框\n   * @description Radio\n   */\n  RadioName = 'Radio',\n  /**\n   * 选择器\n   * @description Select\n   */\n  SelectName = 'Select',\n  /**\n   * 多选框\n   * @description Checkbox\n   */\n  CheckboxName = 'Checkbox',\n  /**\n   * 级联选择\n   * @description Cascader\n   */\n  CascaderName = 'Cascader',\n  /**\n   * 日期选择框\n   * @description DatePicker\n   */\n  DatePickerName = 'DatePicker',\n  /**\n   * 月选择框\n   * @description DatePicker.MonthPicker\n   */\n  MonthPickerName = 'MonthPicker',\n  /**\n   * 日期范围选择框\n   * @description DatePicker.RangePicker\n   */\n  RangePickerName = 'RangePicker',\n  /**\n   * 周选择框\n   * @description DatePicker.WeekPicker\n   */\n  WeekPickerName = 'WeekPicker',\n  /**\n   * 时间选择框\n   * @description TimePicker\n   */\n  TimePickerName = 'TimePicker',\n  /**\n   * 级联多选\n   * @description MultiCascader\n   */\n  MultiCascaderName = 'MultiCascader',\n  /**\n   * 评分\n   * @description Rate\n   */\n  RateName = 'Rate',\n  /**\n   * 开关\n   * @description Switch\n   */\n  SwitchName = 'Switch',\n  /**\n   * 滑动输入条\n   * @description Slider\n   */\n  SliderName = 'Slider',\n\n  /*** 以下为扩展内置组件 */\n  /** 文本 */\n  Text = 'Text',\n  /** 链接跳转，默认新开页 */\n  Link = 'Link',\n}\n",
        "paraId": 17,
        "tocIndex": 14
    },
    {
        "value": "OptionProps",
        "paraId": 18,
        "tocIndex": 14
    },
    {
        "value": "下拉对象数据 和 ",
        "paraId": 18,
        "tocIndex": 14
    },
    {
        "value": "AttrsProps",
        "paraId": 18,
        "tocIndex": 14
    },
    {
        "value": "支持的组件属性说明如下 :",
        "paraId": 18,
        "tocIndex": 14
    },
    {
        "value": "import { InputProps, TextAreaProps, SearchProps } from \"antd/lib/input\";\nimport { InputNumberProps } from \"antd/lib/input-number\";\nimport { SelectProps } from \"antd/lib/select\";\nimport { RadioProps } from \"antd/lib/radio\";\nimport { CheckboxProps } from \"antd/lib/checkbox\";\nimport { CascaderOptionType } from \"antd/lib/multi-cascader/Menus\";\nimport { ZcyEditorProps } from \"antd/lib/editor\";\nimport {\n  DatePickerProps,\n  MonthPickerProps,\n  RangePickerProps,\n  WeekPickerProps,\n} from \"antd/lib/date-picker\";\nimport { CascaderProps } from \"antd/lib/cascader\";\nimport { MultiCascaderProps } from \"antd/lib/multi-cascader\";\nimport { MentionProps } from \"antd/lib/mention\";\nimport { AutoCompleteProps } from \"antd/lib/auto-complete\";\n\nexport type OptionProps = Omit<CascaderOptionType, 'value'>;\n\nexport type AttrsProps =\n  | InputProps\n  | InputNumberProps\n  | SearchProps\n  | TextAreaProps\n  | CheckboxProps\n  | SelectProps\n  | RadioProps\n  | MentionProps\n  | ZcyEditorProps\n  | CascaderProps\n  | MultiCascaderProps\n  | DatePickerProps\n  | RangePickerProps\n  | MonthPickerProps\n  | WeekPickerProps\n  | AutoCompleteProps;\n",
        "paraId": 19,
        "tocIndex": 14
    },
    {
        "value": "虚拟表格表单的校验规则是使用 ",
        "paraId": 20,
        "tocIndex": 15
    },
    {
        "value": "async-validator",
        "paraId": 20,
        "tocIndex": 15
    },
    {
        "value": " 来实现，并从中加了一些",
        "paraId": 20,
        "tocIndex": 15
    },
    {
        "value": "额外配置",
        "paraId": 20,
        "tocIndex": 15
    },
    {
        "value": "import {\n  InternalRuleItem,\n  RuleItem,\n  SyncValidateResult,\n  ValidateOption,\n  Values,\n} from 'async-validator';\n\nexport interface RuleProps extends RuleItem {\n  validator: (\n    rule: InternalRuleItem & RuleExtendProps,\n    value: Value,\n    callback: (error?: string | Error) => void,\n    source: Values,\n    options: ValidateOption,\n  ) => SyncValidateResult | void;\n}\n",
        "paraId": 21,
        "tocIndex": 16
    },
    {
        "value": "额外配置",
        "paraId": 22,
        "tocIndex": 17
    },
    {
        "value": "关于校验规则的一些使用场景，",
        "paraId": 23,
        "tocIndex": 17
    },
    {
        "value": "跳转",
        "paraId": 24,
        "tocIndex": 17
    },
    {
        "value": "-----------------------------------|---------|----------|---------|---------|-------------------\nFile                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s \n-----------------------------------|---------|----------|---------|---------|-------------------\nAll files                          |    98.6 |     79.4 |   98.43 |   98.45 |                   \n src                               |   97.82 |    71.63 |   97.43 |   97.61 |                   \n  index.tsx                        |   97.82 |    71.63 |   97.43 |   97.61 | 245-246,265       \n src/common/config                 |   97.74 |    85.71 |   98.21 |   97.36 |                   \n  field.ts                         |   98.68 |     77.5 |     100 |   98.43 | 16                \n  index.ts                         |     100 |      100 |     100 |     100 |                   \n  operate.ts                       |     100 |    86.66 |     100 |     100 | 55-69             \n  render.tsx                       |   95.29 |    89.41 |   95.23 |   94.93 | 217,304,308,320   \n src/common/constants              |     100 |      100 |     100 |     100 |                   \n  element.tsx                      |     100 |      100 |     100 |     100 |                   \n  index.ts                         |     100 |      100 |     100 |     100 |                   \n  type.ts                          |     100 |      100 |     100 |     100 |                   \n src/common/hooks                  |     100 |      100 |     100 |     100 |                   \n  useForceUpdate.ts                |     100 |      100 |     100 |     100 |                   \n src/common/type                   |     100 |      100 |     100 |     100 |                   \n  index.ts                         |     100 |      100 |     100 |     100 |                   \n  static.d.ts                      |       0 |        0 |       0 |       0 |                   \n src/common/util                   |   99.37 |    80.85 |     100 |   99.32 |                   \n  index.ts                         |     100 |      100 |     100 |     100 |                   \n  watcher.ts                       |   99.26 |       80 |     100 |   99.21 | 171               \n src/components/VirtualItem        |   97.29 |    76.78 |   94.11 |   97.22 |                   \n  index.tsx                        |   97.29 |    76.78 |   94.11 |   97.22 | 110-111           \n src/components/VirtualLayout      |     100 |    81.25 |     100 |     100 |                   \n  index.tsx                        |     100 |    81.25 |     100 |     100 | 10-13             \n src/components/VirtualLink        |     100 |      100 |     100 |     100 |                   \n  index.tsx                        |     100 |      100 |     100 |     100 |                   \n src/components/VirtualNo          |     100 |      100 |     100 |     100 |                   \n  index.tsx                        |     100 |      100 |     100 |     100 |                   \n src/components/VirtualRequireItem |     100 |      100 |     100 |     100 |                   \n  index.tsx                        |     100 |      100 |     100 |     100 |                   \n src/components/VirtualText        |     100 |    70.83 |     100 |     100 |                   \n  index.tsx                        |     100 |    70.83 |     100 |     100 | 11-49             \n src/components/VirtualText/common |     100 |     87.5 |     100 |     100 |                   \n  util.ts                          |     100 |     87.5 |     100 |     100 | 12-16             \n src/methods                       |     100 |      100 |     100 |     100 |                   \n  index.ts                         |     100 |      100 |     100 |     100 |                   \n-----------------------------------|---------|----------|---------|---------|-------------------\n",
        "paraId": 25,
        "tocIndex": 18
    },
    {
        "value": "实践过程中发现数据有ssid，其代表当前行唯一id",
        "paraId": 26,
        "tocIndex": 19
    },
    {
        "value": "如果在使用过程中发现任何问题、或者有改善建议，欢迎钉钉@小盛开",
        "paraId": 27,
        "tocIndex": 20
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/base/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/base/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/base/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个",
        "paraId": 0
    },
    {
        "value": "带有表单元素",
        "paraId": 0
    },
    {
        "value": "的简单动态表格",
        "paraId": 0
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/check/code/asyncValidator.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/check/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/check/code/validator.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/check/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/check/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "主要是基于 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "async-validator",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 来实现，",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这是一个基本校验的动态表格\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "这是一个",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "自定义校验",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "的动态表格\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "这是一个",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "异步自定义校验",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "的动态表格\n",
        "paraId": 3,
        "tocIndex": 3
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/custom/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/custom/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/custom/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个带有",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "自定义组件",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "的动态表格\n",
        "paraId": 0,
        "tocIndex": 0
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/deployable/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/deployable/code/children.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/deployable/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/deployable/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "可展开",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "的动态表格\n",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这是一个",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "嵌套子表格",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "的动态表格\n",
        "paraId": 1,
        "tocIndex": 1
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/disabledAndShow/code/disabled.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/disabledAndShow/code/fieldDisabledAndShow.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/disabledAndShow/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/disabledAndShow/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个支持",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "禁用当前列",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "或 ",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "显示当前列",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "的动态表格\n",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "这是一个支持",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "禁用当前列",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "或 ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "显示当前列",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "的动态表格，需要配合",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "watch",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "使用\n",
        "paraId": 1,
        "tocIndex": 2
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/filteringAndSorting/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/filteringAndSorting/code/filters.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/filteringAndSorting/code/multiple.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/fixed/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/fixed/code/plural.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/fixed/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/fixed/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "固定列",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "的动态表格，使用 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "，操作列使用 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "isFixedOperate",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这是一个",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "堆叠固定列",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "的动态表格，隔列使用 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "，操作列使用 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "isFixedOperate",
        "paraId": 1,
        "tocIndex": 1
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/formEle/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/formEle/code/extend.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/formEle/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/formEle/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个",
        "paraId": 0
    },
    {
        "value": "form表单元素全字段",
        "paraId": 0
    },
    {
        "value": "的动态表格\n",
        "paraId": 0
    },
    {
        "value": "这是一个",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "form表单扩展元素字段",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "的动态表格\n",
        "paraId": 1,
        "tocIndex": 0
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/layout/code/children.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/layout/code/layoutMode.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/layout/code/nest.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/layout/code/slot.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/layout/code/suffixAndPrefix.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/layout/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/layout/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个支持",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "多元素",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "的动态表格\n",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这是一个支持",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "多元素横向布局",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "的动态表格\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "这是一个综合布局的动态表格\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "这是一个支持",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "prefix 和 suffix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "的动态表格\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "这是一个支持单元格前后",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "插槽",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "的动态表格\n",
        "paraId": 4,
        "tocIndex": 4
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/mergeRowsAndColumns/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/mergeRowsAndColumns/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/mergeRowsAndColumns/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "表头只支持列合并，使用 ",
        "paraId": 0
    },
    {
        "value": "column",
        "paraId": 0
    },
    {
        "value": " 里的 ",
        "paraId": 0
    },
    {
        "value": "colSpan",
        "paraId": 0
    },
    {
        "value": " 进行设置。",
        "paraId": 0
    },
    {
        "value": "表格支持行/列合并，当 ",
        "paraId": 0
    },
    {
        "value": "onCell",
        "paraId": 0
    },
    {
        "value": " 里的单元格属性 ",
        "paraId": 0
    },
    {
        "value": "colSpan",
        "paraId": 0
    },
    {
        "value": " 或者  ",
        "paraId": 0
    },
    {
        "value": "rowSpan",
        "paraId": 0
    },
    {
        "value": " 设值为 ",
        "paraId": 0
    },
    {
        "value": "0",
        "paraId": 0
    },
    {
        "value": " 时，设置的表格不会渲染。",
        "paraId": 0
    },
    {
        "value": "注意动态添加行 ",
        "paraId": 0
    },
    {
        "value": "onCell",
        "paraId": 0
    },
    {
        "value": " 处理",
        "paraId": 0
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/operate/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/operate/code/custom.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/operate/code/disabled.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/operate/code/hide.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/operate/code/vertical.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/operate/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/operate/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "这是一个自带",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "快捷操作表头",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "的动态表格, 支持",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "添加",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "，",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "删除",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "，",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "移动",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这是一个",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "操作栏纵向排布",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "的动态表格\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "这是一个如何定义",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "快捷操作表头",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "禁用的动态表格：第一行不能删除\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "隐藏表格中，",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "添加",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "，",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "删除",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "，",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "移动",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "操作项\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "允许用户",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "自定义操作项",
        "paraId": 4,
        "tocIndex": 4
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/readonly/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/readonly/code/custom.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/readonly/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/readonly/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/rowSelection/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/rowSelection/code/class.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/rowSelection/code/selectedRowKeys.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/rowSelection/code/type.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/rowSelection/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/rowSelection/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "选择后进行操作，完成后清空选择，通过 rowSelection.selectedRowKeys 来控制选中项",
        "paraId": 0,
        "tocIndex": 0
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/appointOfWay.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/base.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/colOfWay.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/deps.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/immediately.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/next.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/code/pre.tsx?watch=parent": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"pages/pages/reference/watch/index.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("pages/pages/reference/watch/index.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "编码思维上的改变，由原来的处理逻辑",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "我触发A事件, 处理B、C、D逻辑",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "，改为",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "我处理B逻辑，受触发A变化；我处理C逻辑，受触发A变化；我处理D逻辑，受触发A变化",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这是一个支持",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "监听数据key变化，触发事件回调",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "的动态表格\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "这是一个",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "watch 立即执行",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "的动态表格",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "注意：如果值为underfind 不会执行",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "这是一个支持",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "多监听",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "的动态表格\n",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "这是一个支持",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "监听指定行单元格",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "的动态表格\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "这是一个支持",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "监听指定行单元格",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "的动态表格\n",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "这是一个支持",
        "paraId": 7,
        "tocIndex": 6
    },
    {
        "value": "监听指定行单元格",
        "paraId": 7,
        "tocIndex": 6
    },
    {
        "value": "的动态表格\n",
        "paraId": 7,
        "tocIndex": 6
    },
    {
        "value": "这是一个支持",
        "paraId": 8,
        "tocIndex": 7
    },
    {
        "value": "监听整列单元格",
        "paraId": 8,
        "tocIndex": 7
    },
    {
        "value": "的动态表格，当前列中有一个单元格field变化就触发\n",
        "paraId": 8,
        "tocIndex": 7
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/builtInUI/antd/element.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    Components: function() {
        return Components;
    },
    Type: function() {
        return _type.Type;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _dayjs = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dayjs/dayjs.min.js"));
var _type = __mako_require__("src/common/constants/type.ts");
var _VirtualText = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualText/index.tsx"));
var _VirtualLink = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualLink/index.tsx"));
__mako_require__("node_modules/dayjs/locale/zh-cn.js");
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
_dayjs.default.locale('zh-cn');
const Components = {
    [_type.Type.InputName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 31,
        columnNumber: 21
    }, this),
    [_type.Type.TextAreaName]: (props)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input.TextArea, {
            ...props,
            showCountFloat: false,
            autoSize: true,
            autosize: true,
            allowClear: false
        }, void 0, false, {
            fileName: "src/builtInUI/antd/element.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, this),
    [_type.Type.InputNumberName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.InputNumber, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 41,
        columnNumber: 27
    }, this),
    [_type.Type.RadioName]: (options)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio.Group, {
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                direction: "horizontal",
                size: "middle",
                children: options.map(({ value, label, disabled })=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio, {
                        value: value,
                        disabled: disabled,
                        children: label
                    }, String(value), false, {
                        fileName: "src/builtInUI/antd/element.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "src/builtInUI/antd/element.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "src/builtInUI/antd/element.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this),
    [_type.Type.SelectName]: (options)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select, {
            children: options.map(({ value, label, disabled })=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select.Option, {
                    value: value,
                    disabled: disabled,
                    children: label
                }, String(value), false, {
                    fileName: "src/builtInUI/antd/element.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "src/builtInUI/antd/element.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, this),
    [_type.Type.CheckboxName]: (options)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Checkbox.Group, {
            options: options
        }, void 0, false, {
            fileName: "src/builtInUI/antd/element.tsx",
            lineNumber: 63,
            columnNumber: 5
        }, this),
    [_type.Type.CascaderName]: (options)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Cascader, {
            options: options
        }, void 0, false, {
            fileName: "src/builtInUI/antd/element.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, this),
    [_type.Type.DatePickerName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.DatePicker, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 68,
        columnNumber: 26
    }, this),
    [_type.Type.MonthPickerName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.DatePicker.MonthPicker, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 69,
        columnNumber: 27
    }, this),
    [_type.Type.RangePickerName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.DatePicker.RangePicker, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 70,
        columnNumber: 27
    }, this),
    [_type.Type.WeekPickerName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.DatePicker.WeekPicker, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 71,
        columnNumber: 26
    }, this),
    [_type.Type.TimePickerName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.TimePicker, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 72,
        columnNumber: 26
    }, this),
    [_type.Type.SwitchName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Switch, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 74,
        columnNumber: 22
    }, this),
    [_type.Type.SliderName]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Slider, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 75,
        columnNumber: 22
    }, this),
    /*** 以下为扩展内置组件 */ // @ts-ignore
    [_type.Type.Text]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualText.default, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 79,
        columnNumber: 16
    }, this),
    // @ts-ignore
    [_type.Type.Link]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualLink.default, {}, void 0, false, {
        fileName: "src/builtInUI/antd/element.tsx",
        lineNumber: 81,
        columnNumber: 16
    }, this)
};
/**
 * 设置基本元素
 * edit    编辑态
 * display 只读态
 */ Object.keys(Components).forEach((name)=>{
    const element = Components[name];
    Components[name] = {
        edit: element,
        display: (props)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualText.default, {
                ...props,
                componentName: name
            }, void 0, false, {
                fileName: "src/builtInUI/antd/element.tsx",
                lineNumber: 94,
                columnNumber: 23
            }, this)
    };
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/config/field.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    allFieldsOperate: function() {
        return allFieldsOperate;
    },
    getMaxSSID: function() {
        return getMaxSSID;
    },
    registerFieldsStore: function() {
        return registerFieldsStore;
    },
    setSSIDForDate: function() {
        return setSSIDForDate;
    },
    setStoreField: function() {
        return setStoreField;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _asyncvalidator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/async-validator/dist-web/index.js"));
var _lodash = __mako_require__("node_modules/lodash/lodash.js");
var _watcher = __mako_require__("src/common/util/watcher.ts");
var _constants = __mako_require__("src/common/constants/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const setSSIDForDate = (data, customCellRender)=>{
    // 外部覆盖场景，不做数据处理
    if (customCellRender) return data;
    return data.map((params, index)=>({
            ...params,
            ssid: params.ssid ?? index
        }));
};
const getMaxSSID = (data)=>{
    if (!data.length) return -1;
    const ssids = data.map(({ ssid } = {})=>ssid);
    return (0, _lodash.max)(ssids);
};
const setStoreField = (fieldsStore, { ssid, fieldkey, path }, params)=>{
    const objectPath = path || [
        ssid,
        fieldkey
    ];
    const item = (0, _lodash.get)(fieldsStore === null || fieldsStore === void 0 ? void 0 : fieldsStore.current, objectPath) || {};
    (0, _lodash.set)(fieldsStore === null || fieldsStore === void 0 ? void 0 : fieldsStore.current, objectPath, {
        ...item,
        ...params
    });
};
/**
 * @todo 能否优化
 * 获取最新数据
 */ const getStoreRegister = (fieldsStoreRef)=>()=>fieldsStoreRef.current.reduce((total, item)=>{
            if (item) total.push(Object.keys(item).reduce((total, key)=>{
                total[key] = item[key].value;
                total[_constants.SSID] = item[key].ssid;
                return total;
            }, {}));
            return total;
        }, []);
/** 校验注册 */ const validateRegister = ({ fieldkey, ssid, rules, fieldsStoreRef, rowIndex, getStore })=>{
    const descriptor = {
        [fieldkey]: rules.map((item)=>{
            /**
       * validator 改造
       * 注入当前表格数据
       */ if (item['validator']) return {
                validator: (_, ...rest)=>item['validator']({
                        ..._,
                        ssid,
                        rowIndex,
                        fieldkey,
                        getStore
                    }, ...rest)
            };
            return item;
        })
    };
    const validator = new _asyncvalidator.default(descriptor);
    /** 校验执行 */ return (value)=>{
        const { fieldShow = true } = (0, _lodash.get)(fieldsStoreRef.current, [
            ssid,
            fieldkey
        ]);
        return fieldShow ? new Promise((resolve)=>{
            validator.validate({
                [fieldkey]: value
            }, {
                first: true
            }).then(()=>{
                setStoreField(fieldsStoreRef, {
                    ssid,
                    fieldkey
                }, {
                    error: null
                });
                resolve(null);
            }).catch(({ errors })=>{
                const [err] = errors || [];
                const error = err ? {
                    ...err,
                    rowIndex
                } : err;
                setStoreField(fieldsStoreRef, {
                    ssid,
                    fieldkey
                }, {
                    error
                });
                resolve(error);
            });
        }) : null;
    };
};
const registerFieldsStore = (params, fieldsKeys = [], fieldsStore = [])=>{
    const { dataSource, operate, config, sourceConfig, setConfig, fieldsStoreRef } = params;
    const getStore = getStoreRegister(fieldsStoreRef);
    const listens = (0, _watcher.collectListens)(params);
    config.forEach(({ fieldkey, rules, children, initialValue })=>{
        if (children) return registerFieldsStore({
            dataSource,
            fieldsStoreRef,
            operate,
            config: children,
            sourceConfig,
            setConfig,
            listens
        }, fieldsKeys, fieldsStore);
        if (fieldkey) dataSource.forEach(({ ssid, ...rest }, rowIndex)=>{
            const item = (0, _lodash.get)(fieldsStoreRef.current, [
                ssid,
                fieldkey
            ]) || {};
            const params = {
                ...item || {},
                ssid,
                value: rest[fieldkey],
                ...listens[fieldkey] || {},
                rowIndex,
                initialValue
            };
            if (rules) {
                const validate = validateRegister({
                    fieldkey,
                    ssid,
                    rules,
                    fieldsStoreRef,
                    rowIndex,
                    getStore
                });
                params.validate = validate;
            }
            (0, _lodash.set)(fieldsStore, [
                ssid,
                fieldkey
            ], params);
            fieldsKeys.push(`${ssid}.${fieldkey}`);
        });
    });
    return {
        fieldsKeys,
        fieldsStore,
        listens
    };
};
const allFieldsOperate = async (fieldsStore, fn)=>{
    for (let item of fieldsStore)if (item) {
        const keys = Object.keys(item);
        for (let fieldkey of keys)await fn(item[fieldkey], fieldkey);
    }
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/config/index.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _export_star = __mako_require__("@swc/helpers/_/_export_star");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
_export_star._(__mako_require__("src/common/config/field.ts"), exports);
_export_star._(__mako_require__("src/common/config/operate.ts"), exports);
_export_star._(__mako_require__("src/common/config/render.tsx"), exports);
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/config/operate.ts": function (module, exports, __mako_require__){
/**
 * 表格数据 - 增，删，改，移动
 */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    add: function() {
        return add;
    },
    change: function() {
        return change;
    },
    changeCol: function() {
        return changeCol;
    },
    changeRow: function() {
        return changeRow;
    },
    del: function() {
        return del;
    },
    move: function() {
        return move;
    },
    moveDown: function() {
        return moveDown;
    },
    moveUp: function() {
        return moveUp;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _watcher = __mako_require__("src/common/util/watcher.ts");
var _field = __mako_require__("src/common/config/field.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const add = ({ dataSource, config, value = {} })=>{
    const con = (0, _watcher.getAllConfig)(config);
    const rowData = con.reduce((total, { fieldkey, initialValue })=>{
        total[fieldkey] = value[fieldkey] ?? initialValue;
        return total;
    }, {});
    return [
        ...dataSource,
        {
            ssid: (0, _field.getMaxSSID)(dataSource) + 1,
            ...rowData
        }
    ];
};
const del = ({ ssid, dataSource })=>{
    return dataSource.filter((element)=>element.ssid !== ssid);
};
const change = ({ ssid, fieldkey, value, dataSource })=>{
    const index = dataSource.findIndex((element)=>element.ssid === ssid);
    dataSource[index] = {
        ...dataSource[index],
        [fieldkey]: value
    };
    return dataSource;
};
const changeRow = ({ ssid, value, dataSource })=>{
    const index = dataSource.findIndex((element)=>element.ssid === ssid);
    dataSource[index] = {
        ...dataSource[index],
        ...value
    };
    return dataSource;
};
const changeCol = ({ fieldkey, value, dataSource })=>{
    const fieldkeyOfvalue = value.reduce((total, { ssid, ...rest })=>{
        total[ssid] = rest[fieldkey];
        return total;
    }, {});
    return dataSource.reduce((total, item)=>{
        total.push({
            ...item,
            [fieldkey]: fieldkeyOfvalue[item.ssid] ?? item[fieldkey]
        });
        return total;
    }, []);
};
const move = ({ ssid, dataSource })=>{
    let leftIndex = 0;
    let rightIndex = 0;
    const newDataSource = [
        ...dataSource
    ];
    for(let rowIndex = 0; rowIndex < dataSource.length; rowIndex++){
        const item = dataSource[rowIndex];
        if (ssid === (item === null || item === void 0 ? void 0 : item.ssid)) {
            rightIndex = rowIndex;
            break;
        }
        if (item) leftIndex = rowIndex;
    }
    const leftEle = newDataSource[leftIndex];
    newDataSource[leftIndex] = newDataSource[rightIndex];
    newDataSource[rightIndex] = leftEle;
    return newDataSource;
};
const moveUp = ({ ssid, dataSource })=>{
    return move({
        ssid,
        dataSource
    });
};
const moveDown = ({ ssid, dataSource })=>{
    return move({
        ssid,
        dataSource: [
            ...dataSource
        ].reverse()
    }).reverse();
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/config/render.tsx": function (module, exports, __mako_require__){
/**
 * 渲染器
 *
 * @format
 */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    getColumns: function() {
        return getColumns;
    },
    getComponent: function() {
        return getComponent;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _lodash = __mako_require__("node_modules/lodash/lodash.js");
var _constants = __mako_require__("src/common/constants/index.ts");
var _VirtualItem = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualItem/index.tsx"));
var _VirtualLayout = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualLayout/index.tsx"));
var _VirtualRequireItem = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualRequireItem/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/** 单选 option 处理 */ const formatOptions = ({ options = [], value, fieldkey, ssid, fieldsStore })=>{
    const { selectName } = (0, _lodash.get)(fieldsStore, [
        ssid,
        fieldkey
    ]) || {};
    const ids = options.map(({ value })=>value);
    if ((0, _lodash.isUndefined)(value)) return options;
    if (ids.includes(value)) return options;
    // 保留值处理
    return [
        {
            label: selectName,
            value
        },
        ...options
    ];
};
const getComponent = ({ label, type, require, options, custom, fieldkey, ssid, width, style, attrs, initialValue, fieldShow = true, disabled, columnDisabled = false, readonly = false, topContent, bottomContent, prefix, suffix, className, cellProps, fieldsStore, BaseComponents })=>{
    const { cellData, rowData } = cellProps;
    let element = null;
    // 编辑态
    if (!readonly) {
        var _BaseComponents_type;
        element = ((_BaseComponents_type = BaseComponents[type]) === null || _BaseComponents_type === void 0 ? void 0 : _BaseComponents_type.edit) || null;
        // 基础组件-特殊处理
        if ([
            _constants.Type.RadioName,
            _constants.Type.SelectName,
            _constants.Type.TextAreaName,
            _constants.Type.CascaderName
        ].includes(type)) element = BaseComponents[type].edit(formatOptions({
            options,
            value: cellData,
            fieldkey,
            ssid,
            fieldsStore
        }));
        if ([
            _constants.Type.CheckboxName
        ].includes(type)) element = BaseComponents[type].edit(options);
        // 自定义组件
        if (custom) element = /*#__PURE__*/ (0, _react.createElement)((custom === null || custom === void 0 ? void 0 : custom.edit) || custom, cellProps);
    } else {
        var _BaseComponents_type1;
        /*
     * 只读态
     * 优先级判断：自定义 > 基础组件
     */ element = /*#__PURE__*/ (0, _react.createElement)((custom === null || custom === void 0 ? void 0 : custom.display) || custom || ((_BaseComponents_type1 = BaseComponents[type]) === null || _BaseComponents_type1 === void 0 ? void 0 : _BaseComponents_type1.display), {
            ...cellProps,
            options,
            BaseComponents
        });
    }
    return /*#__PURE__*/ (0, _react.isValidElement)(element) && fieldkey ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualItem.default, {
        fieldkey: fieldkey,
        ssid: ssid,
        label: label,
        require: require,
        width: width,
        style: style,
        attrs: attrs,
        defaultValue: rowData[fieldkey] || initialValue,
        fieldShow: fieldShow,
        disabled: disabled,
        columnDisabled: columnDisabled,
        topContent: topContent,
        bottomContent: bottomContent,
        prefix: prefix,
        suffix: suffix,
        className: className,
        children: element
    }, void 0, false, {
        fileName: "src/common/config/render.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this) : element;
};
const getColumns = (columns, operate, fieldsStore, { delText, moveUpText, moveDownText, operateItems, operateConfig, isOperationBtnVisible, customCellRender, disabled, readonly, // addChildText,
BaseComponents })=>{
    const formatColumns = columns.reduce((total, item)=>{
        const { columnShow = true, label, require, children, ...rest } = item;
        if (!columnShow) return total;
        // 支持多层 children嵌套
        const renderComponent = ({ props, ssid, cellProps, fieldsStore, children, BaseComponents })=>{
            const { label, require, layoutMode = _constants.Layout.Vertical, bottomContent, topContent } = props;
            if (children) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualLayout.default, {
                layoutMode: layoutMode,
                label: label,
                require: require,
                bottomContent: bottomContent,
                topContent: topContent,
                children: children.map(({ children, ...column })=>renderComponent({
                        props: column,
                        ssid,
                        cellProps,
                        fieldsStore,
                        children,
                        BaseComponents
                    }))
            }, void 0, false, {
                fileName: "src/common/config/render.tsx",
                lineNumber: 177,
                columnNumber: 11
            }, this);
            // 全局禁用或者field存在禁用，则禁用
            const tableConfigDisabled = typeof disabled === 'function' ? disabled(cellProps) : disabled;
            return getComponent({
                ...props,
                ssid,
                cellProps,
                fieldsStore,
                disabled: tableConfigDisabled || props.disabled,
                readonly,
                BaseComponents
            });
        };
        total.push({
            ...rest,
            dataIndex: rest.fieldkey,
            key: rest.fieldkey,
            title: require ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualRequireItem.default, {
                label: label
            }, void 0, false, {
                fileName: "src/common/config/render.tsx",
                lineNumber: 210,
                columnNumber: 24
            }, this) : label,
            /** 渲染器 */ render (cellData, rowData, index) {
                const cellProps = {
                    cellData,
                    rowData,
                    rowIndex: index
                };
                const { ssid } = rowData;
                if (customCellRender) return customCellRender(cellProps);
                return renderComponent({
                    props: rest,
                    ssid,
                    cellProps,
                    fieldsStore,
                    children,
                    BaseComponents
                });
            }
        });
        return total;
    }, []);
    /**
   * 不显示操作项
   */ if (isOperationBtnVisible || readonly) return formatColumns;
    return [
        ...formatColumns,
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            width: 100,
            ...operateConfig || {},
            ...(operateConfig === null || operateConfig === void 0 ? void 0 : operateConfig.isFixedOperate) ? {
                fixed: 'right'
            } : {},
            render (cellData, rowData, index) {
                const cellProps = {
                    cellData,
                    rowData,
                    rowIndex: index
                };
                const { ssid } = rowData;
                /** 处理操作禁用 */ const getDisabled = (operateDisabled)=>disabled || (typeof operateDisabled === 'function' ? operateDisabled(cellProps) : operateDisabled);
                const itemList = operateItems.map(({ type, custom, disabled: itemDisabled = false })=>{
                    if (type && typeof type === 'string') return ({
                        [_constants.Operate.Del]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "link",
                            onClick: ()=>operate({
                                    type: _constants.Operate.Del,
                                    ssid
                                }),
                            disabled: getDisabled(itemDisabled),
                            children: delText
                        }, void 0, false, {
                            fileName: "src/common/config/render.tsx",
                            lineNumber: 268,
                            columnNumber: 21
                        }, this),
                        [_constants.Operate.MoveUp]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "link",
                            onClick: ()=>operate({
                                    type: _constants.Operate.MoveUp,
                                    ssid
                                }),
                            disabled: getDisabled(itemDisabled),
                            children: moveUpText
                        }, void 0, false, {
                            fileName: "src/common/config/render.tsx",
                            lineNumber: 277,
                            columnNumber: 21
                        }, this),
                        [_constants.Operate.MoveDown]: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "link",
                            onClick: ()=>operate({
                                    type: _constants.Operate.MoveDown,
                                    ssid
                                }),
                            disabled: getDisabled(itemDisabled),
                            children: moveDownText
                        }, void 0, false, {
                            fileName: "src/common/config/render.tsx",
                            lineNumber: 286,
                            columnNumber: 21
                        }, this)
                    })[type] || null;
                    if (custom) {
                        const props = {
                            ...cellProps,
                            disabled: getDisabled(itemDisabled),
                            delRow: ()=>operate({
                                    type: _constants.Operate.Del,
                                    ssid
                                }),
                            moveRowUp: ()=>operate({
                                    type: _constants.Operate.MoveUp,
                                    ssid
                                }),
                            moveDownUp: ()=>operate({
                                    type: _constants.Operate.MoveDown,
                                    ssid
                                }),
                            changeRowValue: (value)=>operate({
                                    value,
                                    type: _constants.Operate.ChangeRow,
                                    ssid
                                }),
                            changeCellValue: (fieldkey, value)=>operate({
                                    value,
                                    fieldkey,
                                    type: _constants.Operate.Change,
                                    ssid
                                })
                        };
                        if (/*#__PURE__*/ (0, _react.isValidElement)(custom)) return /*#__PURE__*/ (0, _react.cloneElement)(custom, {
                            ...props
                        });
                        if (typeof custom === 'function') return /*#__PURE__*/ (0, _react.createElement)(custom, {
                            ...props
                        });
                    }
                }).filter((v)=>v);
                // 无操作
                if (itemList.length < 0) return '-';
                // 单操作项
                const [item] = itemList;
                if (itemList.length === 1) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "virtualTable_operate",
                    children: item
                }, void 0, false, {
                    fileName: "src/common/config/render.tsx",
                    lineNumber: 331,
                    columnNumber: 18
                }, this);
                // 多单操作项
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: `virtualTable_operate ${// @ts-ignore
                    (operateConfig === null || operateConfig === void 0 ? void 0 : operateConfig.layout) === _constants.Layout.Vertical ? 'virtualTable_operate__vertical' : ''}`,
                    children: itemList.map((item, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                marginRight: '8px'
                            },
                            children: item
                        }, index, false, {
                            fileName: "src/common/config/render.tsx",
                            lineNumber: 345,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "src/common/config/render.tsx",
                    lineNumber: 336,
                    columnNumber: 11
                }, this);
            }
        }
    ];
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/constants/index.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    ADD_CHILD_TEXT: function() {
        return ADD_CHILD_TEXT;
    },
    ADD_TEXT: function() {
        return ADD_TEXT;
    },
    COMPONENT_NAME: function() {
        return COMPONENT_NAME;
    },
    DDE_TEXT: function() {
        return DDE_TEXT;
    },
    Layout: function() {
        return Layout;
    },
    MAX_HEIGHT: function() {
        return MAX_HEIGHT;
    },
    MOVE_DOWN_TEXT: function() {
        return MOVE_DOWN_TEXT;
    },
    MOVE_UP_TEXT: function() {
        return MOVE_UP_TEXT;
    },
    Operate: function() {
        return Operate;
    },
    ROW_HEIGHT: function() {
        return ROW_HEIGHT;
    },
    SSID: function() {
        return SSID;
    },
    Way: function() {
        return Way;
    }
});
var _export_star = __mako_require__("@swc/helpers/_/_export_star");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
_export_star._(__mako_require__("src/common/constants/type.ts"), exports);
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const ROW_HEIGHT = 44;
const MAX_HEIGHT = 500;
const SSID = 'ssid';
var Operate;
(function(Operate) {
    Operate["Add"] = "add";
    Operate["Change"] = "change";
    Operate["ChangeRow"] = "changeRow";
    Operate["ChangeCol"] = "changeCol";
    Operate["Del"] = "del";
    Operate["MoveUp"] = "moveUp";
    Operate["MoveDown"] = "moveDown";
})(Operate || (Operate = {}));
const ADD_TEXT = '添加行';
const DDE_TEXT = '删除';
const ADD_CHILD_TEXT = '添加子行';
const MOVE_UP_TEXT = '上移';
const MOVE_DOWN_TEXT = '下移';
const COMPONENT_NAME = 'virtualTable';
var Way;
(function(Way) {
    /** 监听当前field（默认） */ Way["Cell"] = "cell";
    /** 监听当前列所有field */ Way["Col"] = "col";
    /** 监听前一行 */ Way["Pre"] = "pre";
    /** 监听下一行 */ Way["Next"] = "next";
})(Way || (Way = {}));
var Layout;
(function(Layout) {
    /** 水平 */ Layout["Horizontal"] = "horizontal";
    /** 垂直 */ Layout["Vertical"] = "vertical";
})(Layout || (Layout = {}));
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/constants/type.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "Type", {
    enumerable: true,
    get: function() {
        return Type;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var Type;
(function(Type) {
    /**
   * 输入框
   * @description Input
   */ Type["InputName"] = "Input";
    /**
   * 多行文本输入框
   * @description Input.TextArea
   */ Type["TextAreaName"] = "TextArea";
    /**
   * 数字输入框
   * @description InputNumber
   */ Type["InputNumberName"] = "InputNumber";
    /**
   * 单选框
   * @description Radio
   */ Type["RadioName"] = "Radio";
    /**
   * 选择器
   * @description Select
   */ Type["SelectName"] = "Select";
    /**
   * 多选框
   * @description Checkbox
   */ Type["CheckboxName"] = "Checkbox";
    /**
   * 级联选择
   * @description Cascader
   */ Type["CascaderName"] = "Cascader";
    /**
   * 日期选择框
   * @description DatePicker
   */ Type["DatePickerName"] = "DatePicker";
    /**
   * 月选择框
   * @description DatePicker.MonthPicker
   */ Type["MonthPickerName"] = "MonthPicker";
    /**
   * 日期范围选择框
   * @description DatePicker.RangePicker
   */ Type["RangePickerName"] = "RangePicker";
    /**
   * 周选择框
   * @description DatePicker.WeekPicker
   */ Type["WeekPickerName"] = "WeekPicker";
    /**
   * 时间选择框
   * @description TimePicker
   */ Type["TimePickerName"] = "TimePicker";
    /**
   * 开关
   * @description Switch
   */ Type["SwitchName"] = "Switch";
    /**
   * 滑动输入条
   * @description Slider
   */ Type["SliderName"] = "Slider";
    /*** 以下为扩展内置组件 */ /** 文本 */ Type["Text"] = "Text";
    /** 链接跳转，默认新开页 */ Type["Link"] = "Link";
})(Type || (Type = {}));
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/hooks/useForceUpdate.ts": function (module, exports, __mako_require__){
/**
 * 强制更新
*/ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _util = __mako_require__("src/common/util/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const nextTick = (0, _util.createNextTick)(10);
const useForceUpdate = ()=>{
    _s();
    const [key, update] = _react.default.useReducer((x)=>x + 1, 0);
    const forceUpdate = ()=>nextTick(()=>update());
    return {
        key,
        forceUpdate
    };
};
_s(useForceUpdate, "R8caZrWoDXkOcodHj8q7jUOgrgQ=");
var _default = useForceUpdate;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/type/index.ts": function (module, exports, __mako_require__){
/** @format */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/util/index.ts": function (module, exports, __mako_require__){
/**
 * nextTick
 */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "createNextTick", {
    enumerable: true,
    get: function() {
        return createNextTick;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const createNextTick = (time = 10)=>{
    let callback = []; // 任务集合
    let padding = false; // 当前执行状态
    function flushCallbacks() {
        padding = false;
        const copies = callback.slice(0);
        callback.length = 0;
        for(let i = 0; i < copies.length; i++)copies[i]();
    }
    // 这里直接宏任务作为一个事件循环
    let timerFun = ()=>{
        setTimeout(flushCallbacks, time);
    };
    return function nextTick(cb, ctx) {
        let _resolve;
        callback.push(()=>{
            if (cb) cb.call(ctx);
            else if (_resolve) _resolve(ctx);
        });
        if (!padding) {
            padding = true;
            timerFun();
        }
        if (!cb) return new Promise((resolve)=>{
            _resolve = resolve;
        });
    };
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/common/util/watcher.ts": function (module, exports, __mako_require__){
/** @format */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    collectListens: function() {
        return collectListens;
    },
    emitListens: function() {
        return emitListens;
    },
    getAllConfig: function() {
        return getAllConfig;
    },
    getListens: function() {
        return getListens;
    },
    updateCellDataRegister: function() {
        return updateCellDataRegister;
    },
    updateConfigRegister: function() {
        return updateConfigRegister;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _lodash = __mako_require__("node_modules/lodash/lodash.js");
var _config = __mako_require__("src/common/config/index.ts");
var _constants = __mako_require__("src/common/constants/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getAllConfig = (config, obj = [], level = 0)=>{
    config === null || config === void 0 || config.forEach((item)=>{
        if (item.children) {
            getAllConfig(item.children, obj, level + 1);
            return;
        }
        obj.push({
            ...item,
            level
        });
    });
    return obj;
};
/** 修改config */ const genConfig = (config, name, value)=>config.reduce((total, item)=>{
        if (name === item.fieldkey) {
            total.push({
                ...item,
                ...value
            });
            return total;
        }
        if (item.children) {
            total.push({
                ...item,
                children: genConfig(item.children, name, value)
            });
            return total;
        }
        total.push(item);
        return total;
    }, []);
const updateConfigRegister = ({ config, setConfig, fieldsStoreRef })=>{
    return (params, name, ssid)=>{
        // fieldShow 控制元素显隐，单独处理
        if (!(0, _lodash.isUndefined)(params.fieldShow)) (0, _config.setStoreField)(fieldsStoreRef, {
            ssid,
            fieldkey: name
        }, {
            fieldShow: params.fieldShow
        });
        // fieldDisabled 控制元素显隐，单独处理
        if (!(0, _lodash.isUndefined)(params.fieldDisabled)) (0, _config.setStoreField)(fieldsStoreRef, {
            ssid,
            fieldkey: name
        }, {
            fieldDisabled: params.fieldDisabled
        });
        const newConfig = genConfig(config, name, (0, _lodash.omit)(params, 'fieldShow', 'fieldDisabled'));
        setConfig(newConfig);
        const { fieldForceUpdate } = (0, _lodash.get)((fieldsStoreRef === null || fieldsStoreRef === void 0 ? void 0 : fieldsStoreRef.current) || {}, [
            ssid,
            name
        ]);
        fieldForceUpdate === null || fieldForceUpdate === void 0 || fieldForceUpdate({
            emitWatch: false
        });
    };
};
const updateCellDataRegister = ({ operate, dataSource, fieldsStoreRef })=>{
    /** 更新当前单元格数据 */ const updateCellData = async (value, { ssid, name, store })=>{
        const field = (0, _lodash.get)(fieldsStoreRef.current, [
            ssid,
            name
        ]);
        if ((0, _lodash.isEqual)([
            value
        ], [
            field.value
        ])) return;
        await operate({
            type: _constants.Operate.Change,
            fieldkey: name,
            ssid,
            value,
            dataSource
        });
        /** 触发链式监听 */ emitListens(value, {
            fieldsStoreRef,
            ssid,
            fieldkey: name,
            store,
            isPassive: true
        });
    };
    /** 更新当前列数据 */ const updateColData = (value, { name, store })=>{
        operate({
            type: _constants.Operate.ChangeCol,
            fieldkey: name,
            value,
            dataSource
        });
    };
    return {
        updateCellData,
        updateColData
    };
};
/** 校验当前项 */ const validateSelf = async ({ name, ssid, fieldsStoreRef })=>{
    const { validate, value } = (0, _lodash.get)(fieldsStoreRef.current, [
        ssid,
        name
    ]);
    !(0, _lodash.isUndefined)(value) && await (validate === null || validate === void 0 ? void 0 : validate(value));
};
/** 校验当前列所有项 */ const validateCol = ({ name, fieldsStoreRef })=>{
    fieldsStoreRef.current.forEach(async (item)=>{
        const { validate, value } = item[name];
        !(0, _lodash.isUndefined)(value) && await (validate === null || validate === void 0 ? void 0 : validate(value));
    });
};
/** 合并成为field */ const mergeWatchToSource = ({ watch, sourceName, result })=>{
    const { store, handle, deps = [], way = _constants.Way.Cell, ...rest } = watch;
    //当前项依赖对应的值
    const getDepOfValue = (ssid)=>{
        const rowData = store.find((item)=>item.ssid === ssid);
        return deps.reduce((total, key)=>{
            total[key] = rowData[key];
            return total;
        }, {});
    };
    return deps.forEach((name)=>{
        const fn = (value, config)=>{
            if (deps.length === 0) throw new Error('依赖项必须存在至少一项');
            if (deps.length === 1) return handle(value, config);
            const depOfValue = getDepOfValue(config.ssid);
            return handle({
                ...depOfValue,
                [name]: value
            }, config);
        };
        if (result[name]) {
            result[name].fns.push({
                fn,
                sourceName,
                way
            });
            return;
        }
        result[name] = {
            store,
            fns: [
                {
                    fn,
                    sourceName,
                    way
                }
            ],
            ...rest
        };
    });
};
const getListens = ({ config, store, emitFns }, result = {})=>{
    config === null || config === void 0 || config.forEach(({ watch, children, fieldkey })=>{
        if (watch && typeof watch === 'object') {
            if (!Array.isArray(watch)) mergeWatchToSource({
                watch: {
                    store,
                    emitFns,
                    ...watch
                },
                sourceName: fieldkey,
                result
            });
            else watch.forEach((watch)=>mergeWatchToSource({
                    watch: {
                        store,
                        emitFns,
                        ...watch
                    },
                    sourceName: fieldkey,
                    result
                }));
        }
        if (children) return getListens({
            config: children,
            store,
            emitFns
        }, result);
    });
    return result;
};
const collectListens = ({ dataSource, operate, sourceConfig: config, setConfig, fieldsStoreRef })=>{
    /** 更新当前列config配置 */ const updateSelfConfig = updateConfigRegister({
        config,
        setConfig,
        fieldsStoreRef
    });
    /** 更新当前行数据 */ const { updateCellData, updateColData } = updateCellDataRegister({
        operate,
        dataSource,
        fieldsStoreRef
    });
    /**
   * 执行handle
   *
   * 核心字段解读：
   * sourceName - 被更改的字段
   * ssid - 被更改的字段所在行ssid
   * emitSsid - 被触发的字段所在行ssid
   */ const emitFns = (params)=>{
        const { value, fn, ssid, sourceName, emitSsid, store, rowIndex } = params || {};
        fn(value, {
            updateSelfConfig: (params)=>updateSelfConfig(params, sourceName, ssid),
            updateCellData: (value)=>updateCellData(value, {
                    ssid,
                    name: sourceName,
                    store
                }),
            updateColData: (value)=>updateColData(value, {
                    store,
                    name: sourceName
                }),
            validateCol: ()=>validateCol({
                    name: sourceName,
                    fieldsStoreRef
                }),
            validateSelf: ()=>validateSelf({
                    ssid,
                    name: sourceName,
                    fieldsStoreRef
                }),
            store,
            ssid,
            rowIndex,
            emitSsid
        });
    };
    /** 收集 watch */ const listens = getListens({
        config,
        store: dataSource,
        emitFns
    });
    return listens;
};
const emitListens = (valueProps, { fieldsStoreRef, ssid, fieldkey, store, isPassive }, coverListensProps)=>{
    const { fns = (coverListensProps === null || coverListensProps === void 0 ? void 0 : coverListensProps.fns) || [], emitFns = coverListensProps === null || coverListensProps === void 0 ? void 0 : coverListensProps.emitFns, rowIndex, ...rest } = (0, _lodash.get)(fieldsStoreRef === null || fieldsStoreRef === void 0 ? void 0 : fieldsStoreRef.current, [
        ssid,
        fieldkey
    ]) || {};
    const value = !(0, _lodash.isUndefined)(valueProps) ? valueProps : rest.value;
    for (const { fn, sourceName, way } of fns){
        // 如果是被动消费事件更新，判断是否为同一个字段，防止死循环
        if (isPassive && fieldkey === sourceName) return;
        /** 当前行消费事件 */ if (way === _constants.Way.Cell) emitFns === null || emitFns === void 0 || emitFns({
            value,
            fn,
            sourceName,
            ssid,
            store,
            rowIndex,
            way
        });
        /**
     * 指定列消费事件 
     * ---------------------
     * 遍历指定列所有行的事件消费
    */ if (way === _constants.Way.Col) for (const row of fieldsStoreRef.current)row === null || row === void 0 || row[fieldkey].emitFns({
            ...row[fieldkey],
            fn,
            sourceName,
            value,
            emitSsid: rest.ssid
        });
        /**
     * 静态指定行数消费事件
    */ if (typeof way === 'number' && rowIndex === way) emitFns === null || emitFns === void 0 || emitFns({
            value,
            fn,
            sourceName,
            ssid,
            store,
            way
        });
        /**
     * 动态指定行数消费事件
    */ if (typeof way === 'function' && way(rowIndex)) emitFns === null || emitFns === void 0 || emitFns({
            value,
            fn,
            sourceName,
            ssid,
            store,
            rowIndex,
            way
        });
        /**
     * 指定列当前行监听上一行，进行消费事件 
     * ---------------------
     * 遍历当前行之下的所有行事件进行消费 
    */ if (way === _constants.Way.Pre) {
            const compactStore = (0, _lodash.compact)(fieldsStoreRef.current);
            const sliceArr = compactStore.slice(rowIndex + 1);
            for (const [index, row] of sliceArr.entries())/** 第一个执行直接取当前值 */ if (index === 0) {
                /** 初始值为当前触发行的值 */ const value = compactStore[rowIndex][fieldkey].value || null;
                /** 执行 */ row === null || row === void 0 || row[fieldkey].emitFns({
                    ...row[fieldkey],
                    fn,
                    sourceName,
                    value
                });
            } else {
                var _newCompactStore_;
                /** 实时的获取上一个值 */ const newCompactStore = (0, _lodash.compact)(fieldsStoreRef.current);
                const { value } = ((_newCompactStore_ = newCompactStore[rowIndex + index]) === null || _newCompactStore_ === void 0 ? void 0 : _newCompactStore_[fieldkey]) || {};
                /** 执行 */ row === null || row === void 0 || row[fieldkey].emitFns({
                    ...row[fieldkey],
                    fn,
                    sourceName,
                    value
                });
            }
        }
        /**
     * 指定列当前行监听下一行，进行消费事件 
     * ---------------------
     * 遍历当前行之上的所有行事件进行消费 
    */ if (way === _constants.Way.Next) {
            const compactStore = (0, _lodash.compact)(fieldsStoreRef.current);
            /** 数组反转处理 */ const sliceArr = compactStore.slice(0, rowIndex).reverse();
            for (const [index, row] of sliceArr.entries())/** 第一个执行直接取当前值 */ if (index === 0) /** 执行 */ row === null || row === void 0 || row[fieldkey].emitFns({
                ...row[fieldkey],
                fn,
                sourceName,
                value
            });
            else {
                var _newCompactStore_1;
                /** 实时的获取下一个值 */ const newCompactStore = (0, _lodash.compact)(fieldsStoreRef.current);
                const { value } = ((_newCompactStore_1 = newCompactStore[rowIndex - index]) === null || _newCompactStore_1 === void 0 ? void 0 : _newCompactStore_1[fieldkey]) || {};
                /** 执行 */ row === null || row === void 0 || row[fieldkey].emitFns({
                    ...row[fieldkey],
                    fn,
                    sourceName,
                    value
                });
            }
        }
    }
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualItem/index.tsx": function (module, exports, __mako_require__){
/** @format */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _lodash = __mako_require__("node_modules/lodash/lodash.js");
var _ahooks = __mako_require__("node_modules/ahooks/es/index.js");
var _innerVFTable = __mako_require__("src/innerVFTable.tsx");
var _constants = __mako_require__("src/common/constants/index.ts");
var _watcher = __mako_require__("src/common/util/watcher.ts");
var _config = __mako_require__("src/common/config/index.ts");
var _VirtualRequireItem = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualRequireItem/index.tsx"));
var _useForceUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/common/hooks/useForceUpdate.ts"));
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const VirtualItem = ({ children, fieldkey, defaultValue, ssid, label, require, style, className, topContent, bottomContent, prefix, suffix, attrs, columnDisabled, disabled, fieldShow: configFieldShow })=>{
    _s();
    const { operate, fieldsStoreRef, dataSourceMemo } = (0, _react.useContext)(_innerVFTable.VirtualContext);
    const { validate, error, immediately, store, fieldShow = configFieldShow, firstRender = true, fieldDisabled, rowIndex } = (0, _lodash.get)((fieldsStoreRef === null || fieldsStoreRef === void 0 ? void 0 : fieldsStoreRef.current) || {}, [
        ssid,
        fieldkey
    ]) || {};
    const timerRef = (0, _react.useRef)(null);
    const initialValue = (0, _react.useMemo)(()=>{
        var _dataSourceMemo_find;
        return (dataSourceMemo === null || dataSourceMemo === void 0 ? void 0 : (_dataSourceMemo_find = dataSourceMemo.find((record)=>(record === null || record === void 0 ? void 0 : record.ssid) === ssid)) === null || _dataSourceMemo_find === void 0 ? void 0 : _dataSourceMemo_find[fieldkey]) ?? defaultValue;
    }, [
        dataSourceMemo,
        defaultValue,
        ssid,
        fieldkey
    ]);
    const [selfValue, setSelfValue] = (0, _react.useState)(initialValue);
    const { forceUpdate } = (0, _useForceUpdate.default)();
    const { run } = (0, _ahooks.useDebounceFn)(async (value)=>{
        const store = await (operate === null || operate === void 0 ? void 0 : operate({
            type: _constants.Operate.Change,
            fieldkey,
            ssid,
            value
        })) || [];
        /** 校验 */ await (validate === null || validate === void 0 ? void 0 : validate(value));
        /** 触发当前field监听 */ (0, _watcher.emitListens)(value, {
            fieldsStoreRef,
            ssid,
            fieldkey,
            store
        });
        /** 更新 */ forceUpdate();
    }, {
        wait: 120
    });
    /**
   * 劫持表单字段【change】事件
   * 将值透传
   */ const onChange = (e)=>{
        let value = e;
        /** 兼容 e?.target 处理 */ if (typeof (e === null || e === void 0 ? void 0 : e.target) === 'object') value = e.target.value;
        setSelfValue(value);
        run(value);
    };
    /**
   * 选择项的label留存
   */ const onSelect = (_, params)=>{
        if (fieldsStoreRef === null || fieldsStoreRef === void 0 ? void 0 : fieldsStoreRef.current) {
            var _params_props;
            (0, _lodash.set)(fieldsStoreRef.current, [
                ssid,
                fieldkey
            ], {
                ...(0, _lodash.get)(fieldsStoreRef.current, [
                    ssid,
                    fieldkey
                ]),
                selectName: params === null || params === void 0 ? void 0 : (_params_props = params.props) === null || _params_props === void 0 ? void 0 : _params_props.children
            });
        }
    };
    /**
   * 更新 Field
   * *****************************
   * emitValid 是否触发校验
   * emitWatch 是否触发监听
  */ const fieldForceUpdate = async ({ emitValid = false, emitWatch = true } = {})=>{
        const { value, immediately } = (0, _lodash.get)(fieldsStoreRef.current, [
            ssid,
            fieldkey
        ]);
        if (emitValid) await (validate === null || validate === void 0 ? void 0 : validate(value));
        /** 重新触发监听事件 */ if (emitWatch && immediately) (0, _watcher.emitListens)(value, {
            fieldsStoreRef,
            ssid,
            fieldkey,
            store
        });
        /** 更新组件状态 */ forceUpdate();
    };
    /**
   * 自身数据更新
   */ (0, _react.useEffect)(()=>{
        setSelfValue(initialValue);
    }, [
        initialValue,
        setSelfValue
    ]);
    /**
   * 定时器，防止快速滑动无效执行
   * 执行 watch
   */ (0, _react.useEffect)(()=>{
        timerRef.current = setTimeout(async ()=>{
            /**
       * 只执行一次，触发当前field监听
      */ if (firstRender && immediately) (0, _watcher.emitListens)(selfValue, {
                fieldsStoreRef,
                ssid,
                fieldkey,
                store
            });
            (0, _config.setStoreField)(fieldsStoreRef, {
                ssid,
                fieldkey
            }, {
                firstRender: false
            });
        }, 150);
    }, [
        fieldkey,
        fieldsStoreRef,
        firstRender,
        immediately,
        selfValue,
        ssid,
        store
    ]);
    (0, _react.useEffect)(()=>{
        /** 
     * 注册 - fieldForceUpdate
     * 控制当前field强制更新
    */ if (fieldsStoreRef === null || fieldsStoreRef === void 0 ? void 0 : fieldsStoreRef.current) (0, _lodash.set)(fieldsStoreRef.current, [
            ssid,
            fieldkey
        ], {
            ...(0, _lodash.get)(fieldsStoreRef.current, [
                ssid,
                fieldkey
            ]),
            fieldForceUpdate
        });
        return ()=>{
            /**
       * 卸载重置状态
       * firstRender 变为初始化
       */ // setStoreField(fieldsStoreRef, { ssid, fieldkey }, { firstRender: true });
            clearTimeout(timerRef.current);
        };
    }, []);
    /** 渲染元素 */ const renderChildren = /*#__PURE__*/ _react.default.cloneElement(children, {
        ...attrs || {},
        style: {
            ...style || {}
        },
        disabled: disabled || columnDisabled || fieldDisabled,
        onChange,
        onSelect,
        value: selfValue,
        checked: selfValue,
        className: `${className || ''} ${(error === null || error === void 0 ? void 0 : error.message) ? 'virtual_item--children' : ''}`
    });
    /** 插槽出参 */ const slotPropsMemo = (0, _react.useMemo)(()=>{
        return {
            rowIndex,
            ssid,
            store: dataSourceMemo
        };
    }, [
        rowIndex,
        ssid,
        dataSourceMemo
    ]);
    /** prefix 和 suffix组装 */ const renderChildrenMemo = (0, _react.useMemo)(()=>{
        const realRender = [];
        const columnStyle = [];
        if (prefix) {
            realRender.push(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "virtual_item_children--prefix",
                children: (0, _lodash.isFunction)(prefix) ? prefix(selfValue, slotPropsMemo) : prefix
            }, void 0, false, {
                fileName: "src/components/VirtualItem/index.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this));
            columnStyle.push('auto');
        }
        realRender.push(renderChildren);
        columnStyle.push('1fr');
        if (suffix) {
            realRender.push(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "virtual_item_children--suffix",
                children: (0, _lodash.isFunction)(suffix) ? suffix(selfValue, slotPropsMemo) : suffix
            }, void 0, false, {
                fileName: "src/components/VirtualItem/index.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this));
            columnStyle.push('auto');
        }
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            className: "virtual_item_children--wrap",
            style: {
                gridTemplateColumns: columnStyle.join(' '),
                width: realRender.length > 1 ? 'auto' : '100%'
            },
            children: realRender
        }, void 0, false, {
            fileName: "src/components/VirtualItem/index.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this);
    }, [
        prefix,
        renderChildren,
        suffix,
        selfValue,
        slotPropsMemo
    ]);
    return fieldShow ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "virtual_item",
        children: [
            (0, _lodash.isFunction)(topContent) ? topContent(selfValue, slotPropsMemo) : topContent,
            label ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "virtual_item_label--wrap",
                children: [
                    require ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualRequireItem.default, {
                        label: label
                    }, void 0, false, {
                        fileName: "src/components/VirtualItem/index.tsx",
                        lineNumber: 271,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("label", {
                        children: [
                            label,
                            "："
                        ]
                    }, void 0, true, {
                        fileName: "src/components/VirtualItem/index.tsx",
                        lineNumber: 273,
                        columnNumber: 13
                    }, this),
                    renderChildrenMemo
                ]
            }, void 0, true, {
                fileName: "src/components/VirtualItem/index.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, this) : renderChildrenMemo,
            (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "virtual_item--error",
                children: [
                    error === null || error === void 0 ? void 0 : error.message,
                    " "
                ]
            }, void 0, true, {
                fileName: "src/components/VirtualItem/index.tsx",
                lineNumber: 282,
                columnNumber: 9
            }, this),
            (0, _lodash.isFunction)(bottomContent) ? bottomContent(selfValue, slotPropsMemo) : bottomContent
        ]
    }, void 0, true, {
        fileName: "src/components/VirtualItem/index.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this) : null;
};
_s(VirtualItem, "WQxCbQAJLhO+gL3C6pOrHuOyVH8=", false, function() {
    return [
        _useForceUpdate.default,
        _ahooks.useDebounceFn
    ];
});
_c = VirtualItem;
var _default = /*#__PURE__*/ _c1 = (0, _react.memo)(VirtualItem);
var _c;
var _c1;
$RefreshReg$(_c, "VirtualItem");
$RefreshReg$(_c1, "%default%");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualLayout/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _lodash = __mako_require__("node_modules/lodash/lodash.js");
var _VirtualRequireItem = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualRequireItem/index.tsx"));
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const VirtualLayout = ({ children, layoutMode, label, require, bottomContent, topContent })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "virtualLayout",
        children: [
            (0, _lodash.isFunction)(topContent) ? topContent === null || topContent === void 0 ? void 0 : topContent() : topContent,
            label && (require ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualRequireItem.default, {
                label: label
            }, void 0, false, {
                fileName: "src/components/VirtualLayout/index.tsx",
                lineNumber: 11,
                columnNumber: 28
            }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("label", {
                children: [
                    label,
                    "："
                ]
            }, void 0, true, {
                fileName: "src/components/VirtualLayout/index.tsx",
                lineNumber: 11,
                columnNumber: 67
            }, this)),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: `virtual_item--${layoutMode}`,
                children: children
            }, void 0, false, {
                fileName: "src/components/VirtualLayout/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            (0, _lodash.isFunction)(bottomContent) ? bottomContent === null || bottomContent === void 0 ? void 0 : bottomContent() : bottomContent
        ]
    }, void 0, true, {
        fileName: "src/components/VirtualLayout/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = VirtualLayout;
var _default = VirtualLayout;
var _c;
$RefreshReg$(_c, "VirtualLayout");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualLink/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const VirtualLink = ({ value, onClick, ...restProps })=>{
    const { text, url } = value || {};
    const onJump = ()=>{
        if (onClick) return onClick(url);
        window.open(url);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
        ...restProps,
        type: "link",
        onClick: onJump,
        children: text
    }, void 0, false, {
        fileName: "src/components/VirtualLink/index.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = VirtualLink;
var _default = VirtualLink;
var _c;
$RefreshReg$(_c, "VirtualLink");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualNo/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const VirtualNo = ({ rowIndex })=>{
    const value = rowIndex + 1;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "virtualNo",
        children: value
    }, void 0, false, {
        fileName: "src/components/VirtualNo/index.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
};
_c = VirtualNo;
var _default = VirtualNo;
var _c;
$RefreshReg$(_c, "VirtualNo");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualRequireItem/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/** 必填样式 */ const VirtualRequireItem = ({ label })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "virtual-require-item",
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                className: "x",
                children: "*"
            }, void 0, false, {
                fileName: "src/components/VirtualRequireItem/index.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                children: label
            }, void 0, false, {
                fileName: "src/components/VirtualRequireItem/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/VirtualRequireItem/index.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = VirtualRequireItem;
var _default = VirtualRequireItem;
var _c;
$RefreshReg$(_c, "VirtualRequireItem");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/ContextIsolator.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const ContextIsolator = (props)=>{
    const { space, form, children } = props;
    if (children === undefined || children === null) return null;
    let result = children;
    form;
    space;
    return result;
};
_c = ContextIsolator;
var _default = ContextIsolator;
var _c;
$RefreshReg$(_c, "ContextIsolator");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/easings.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "easeInOutCubic", {
    enumerable: true,
    get: function() {
        return easeInOutCubic;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function easeInOutCubic(t, b, c, d) {
    const cc = c - b;
    t /= d / 2;
    if (t < 1) return cc / 2 * t * t * t + b;
    // biome-ignore lint: it is a common easing function
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/extendsObject.ts": function (module, exports, __mako_require__){
// @ts-nocheck
// copied https://github.com/ant-design/ant-design-mobile/blob/d3b3bae/src/utils/with-default-props.tsx
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function mergeProps(...items) {
    const ret = {};
    items.forEach((item)=>{
        if (item) Object.keys(item).forEach((key)=>{
            if (item[key] !== undefined) ret[key] = item[key];
        });
    });
    return ret;
}
var _default = mergeProps;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/getScroll.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    isWindow: function() {
        return isWindow;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function isWindow(obj) {
    return obj !== null && obj !== undefined && obj === obj.window;
}
const getScroll = (target)=>{
    if (typeof window === 'undefined') /* istanbul ignore next */ return 0;
    let result = 0;
    if (isWindow(target)) result = target.pageYOffset;
    else if (target instanceof Document) result = target.documentElement.scrollTop;
    else if (target instanceof HTMLElement) result = target.scrollTop;
    else if (target) // According to the type inference, the `target` is `never` type.
    // Since we configured the loose mode type checking, and supports mocking the target with such shape below::
    //    `{ documentElement: { scrollLeft: 200, scrollTop: 400 } }`,
    //    the program may falls into this branch.
    // Check the corresponding tests for details. Don't sure what is the real scenario this happens.
    /* biome-ignore lint/complexity/useLiteralKeys: target is a never type */ /* eslint-disable-next-line dot-notation */ result = target['scrollTop'];
    if (target && !isWindow(target) && typeof result !== 'number') {
        var _documentElement;
        result = (_documentElement = (target.ownerDocument ?? target).documentElement) === null || _documentElement === void 0 ? void 0 : _documentElement.scrollTop;
    }
    return result;
};
var _default = getScroll;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/hooks/useForceUpdate.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useForceUpdate;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function useForceUpdate() {
    _s();
    const [, forceUpdate] = _react.useReducer((x)=>x + 1, 0);
    return forceUpdate;
}
_s(useForceUpdate, "OYvExaf+rzzVf06crq8byWAi7Rk=");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/hooks/useMultipleSelect.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, /**
 * @title multipleSelect hooks
 * @description multipleSelect by hold down shift key
 */ "default", {
    enumerable: true,
    get: function() {
        return useMultipleSelect;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function useMultipleSelect(getKey) {
    _s();
    const [prevSelectedIndex, setPrevSelectedIndex] = (0, _react.useState)(null);
    const multipleSelect = (0, _react.useCallback)((currentSelectedIndex, data, selectedKeys)=>{
        const configPrevSelectedIndex = prevSelectedIndex ?? currentSelectedIndex;
        // add/delete the selected range
        const startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
        const endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
        const rangeKeys = data.slice(startIndex, endIndex + 1).map((item)=>getKey(item));
        const shouldSelected = rangeKeys.some((rangeKey)=>!selectedKeys.has(rangeKey));
        const changedKeys = [];
        rangeKeys.forEach((item)=>{
            if (shouldSelected) {
                if (!selectedKeys.has(item)) changedKeys.push(item);
                selectedKeys.add(item);
            } else {
                selectedKeys.delete(item);
                changedKeys.push(item);
            }
        });
        setPrevSelectedIndex(shouldSelected ? endIndex : null);
        return changedKeys;
    }, [
        prevSelectedIndex
    ]);
    const updatePrevSelectedIndex = (val)=>{
        setPrevSelectedIndex(val);
    };
    return [
        multipleSelect,
        updatePrevSelectedIndex
    ];
}
_s(useMultipleSelect, "aLYbQQMew2NOQlIU2NSoRbdDCJA=");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/hooks/useProxyImperativeHandle.ts": function (module, exports, __mako_require__){
// @ts-nocheck
// Proxy the dom ref with `{ nativeElement, otherFn }` type
// ref: https://github.com/ant-design/ant-design/discussions/45242
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useProxyImperativeHandle;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function fillProxy(element, handler) {
    element._antProxy = element._antProxy || {};
    Object.keys(handler).forEach((key)=>{
        if (!(key in element._antProxy)) {
            const ori = element[key];
            element._antProxy[key] = ori;
            element[key] = handler[key];
        }
    });
    return element;
}
function useProxyImperativeHandle(ref, init) {
    _s();
    return (0, _react.useImperativeHandle)(ref, ()=>{
        const refObj = init();
        const { nativeElement } = refObj;
        if (typeof Proxy !== 'undefined') return new Proxy(nativeElement, {
            get (obj, prop) {
                if (refObj[prop]) return refObj[prop];
                return Reflect.get(obj, prop);
            }
        });
        // Fallback of IE
        return fillProxy(nativeElement, refObj);
    });
}
_s(useProxyImperativeHandle, "PYzlZ2AGFM0KxtNOGoZVRb5EOEw=");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/hooks/useSyncState.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useSyncState;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _useForceUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/hooks/useForceUpdate.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function useSyncState(initialValue) {
    _s();
    const ref = _react.useRef(initialValue);
    const forceUpdate = (0, _useForceUpdate.default)();
    return [
        ()=>ref.current,
        (newValue)=>{
            ref.current = newValue;
            // re-render
            forceUpdate();
        }
    ];
}
_s(useSyncState, "znfgE8rvzU4MukJMB/QjcATla/0=", false, function() {
    return [
        _useForceUpdate.default
    ];
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/hooks/useZIndex.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    CONTAINER_MAX_OFFSET: function() {
        return CONTAINER_MAX_OFFSET;
    },
    consumerBaseZIndexOffset: function() {
        return consumerBaseZIndexOffset;
    },
    containerBaseZIndexOffset: function() {
        return containerBaseZIndexOffset;
    },
    useZIndex: function() {
        return useZIndex;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _useToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/useToken.ts"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _zindexContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/zindexContext.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
/**
 * Static function will default be the `CONTAINER_MAX_OFFSET`.
 * But it still may have children component like Select, Dropdown.
 * So the warning zIndex should exceed the `CONTAINER_MAX_OFFSET`.
 */ const CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
};
function isContainerType(type) {
    return type in containerBaseZIndexOffset;
}
const useZIndex = (componentType, customZIndex)=>{
    _s();
    const [, token] = (0, _useToken.default)();
    const parentZIndex = _react.default.useContext(_zindexContext.default);
    const isContainer = isContainerType(componentType);
    let result;
    if (customZIndex !== undefined) result = [
        customZIndex,
        customZIndex
    ];
    else {
        let zIndex = parentZIndex ?? 0;
        if (isContainer) zIndex += // Use preset token zIndex by default but not stack when has parent container
        (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
        containerBaseZIndexOffset[componentType];
        else zIndex += consumerBaseZIndexOffset[componentType];
        result = [
            parentZIndex === undefined ? customZIndex : zIndex,
            zIndex
        ];
    }
    {
        const warning = (0, _warning.devUseWarning)(componentType);
        const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
        const currentZIndex = result[0] || 0;
        warning(customZIndex !== undefined || currentZIndex <= maxZIndex, 'usage', '`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.');
    }
    return result;
};
_s(useZIndex, "ryld4bldpDXWtIG9FI5rIAOZBLI=", false, function() {
    return [
        _useToken.default
    ];
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/mediaQueryUtil.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    addMediaQueryListener: function() {
        return addMediaQueryListener;
    },
    removeMediaQueryListener: function() {
        return removeMediaQueryListener;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const addMediaQueryListener = (mql, handler)=>{
    // Don't delete here, please keep the code compatible
    if (typeof (mql === null || mql === void 0 ? void 0 : mql.addEventListener) !== 'undefined') mql.addEventListener('change', handler);
    else if (typeof (mql === null || mql === void 0 ? void 0 : mql.addListener) !== 'undefined') mql.addListener(handler);
};
const removeMediaQueryListener = (mql, handler)=>{
    // Don't delete here, please keep the code compatible
    if (typeof (mql === null || mql === void 0 ? void 0 : mql.removeEventListener) !== 'undefined') mql.removeEventListener('change', handler);
    else if (typeof (mql === null || mql === void 0 ? void 0 : mql.removeListener) !== 'undefined') mql.removeListener(handler);
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/motion.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    getTransitionName: function() {
        return getTransitionName;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _configprovider = __mako_require__("src/components/VirtualTable/config-provider/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
// ================== Collapse Motion ==================
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>{
    const { scrollHeight } = node;
    return {
        height: scrollHeight,
        opacity: 1
    };
};
const getCurrentHeight = (node)=>({
        height: node ? node.offsetHeight : 0
    });
const skipOpacityTransition = (_, event)=>(event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = (rootCls = _configprovider.defaultPrefixCls)=>({
        motionName: `${rootCls}-motion-collapse`,
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    });
const _SelectPlacements = [
    'bottomLeft',
    'bottomRight',
    'topLeft',
    'topRight'
];
const getTransitionName = (rootPrefixCls, motion, transitionName)=>{
    if (transitionName !== undefined) return transitionName;
    return `${rootPrefixCls}-${motion}`;
};
var _default = initCollapseMotion;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/reactNode.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    cloneElement: function() {
        return cloneElement;
    },
    isFragment: function() {
        return isFragment;
    },
    replaceElement: function() {
        return replaceElement;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function isFragment(child) {
    return child && /*#__PURE__*/ _react.default.isValidElement(child) && child.type === _react.default.Fragment;
}
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ _react.default.isValidElement(element)) return replacement;
    return /*#__PURE__*/ _react.default.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/responsiveObserver.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    matchScreen: function() {
        return matchScreen;
    },
    responsiveArray: function() {
        return responsiveArray;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var _mediaQueryUtil = __mako_require__("src/components/VirtualTable/_util/mediaQueryUtil.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const responsiveArray = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const getResponsiveMap = (token)=>({
        xs: `(max-width: ${token.screenXSMax}px)`,
        sm: `(min-width: ${token.screenSM}px)`,
        md: `(min-width: ${token.screenMD}px)`,
        lg: `(min-width: ${token.screenLG}px)`,
        xl: `(min-width: ${token.screenXL}px)`,
        xxl: `(min-width: ${token.screenXXL}px)`
    });
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */ const validateBreakpoints = (token)=>{
    const indexableToken = token;
    const revBreakpoints = [
        ...responsiveArray
    ].reverse();
    revBreakpoints.forEach((breakpoint, i)=>{
        const breakpointUpper = breakpoint.toUpperCase();
        const screenMin = `screen${breakpointUpper}Min`;
        const screen = `screen${breakpointUpper}`;
        if (!(indexableToken[screenMin] <= indexableToken[screen])) throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
        if (i < revBreakpoints.length - 1) {
            const screenMax = `screen${breakpointUpper}Max`;
            if (!(indexableToken[screen] <= indexableToken[screenMax])) throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
            const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
            const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
            if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
        }
    });
    return token;
};
const matchScreen = (screens, screenSizes)=>{
    if (!screenSizes) return;
    for (const breakpoint of responsiveArray){
        if (screens[breakpoint] && (screenSizes === null || screenSizes === void 0 ? void 0 : screenSizes[breakpoint]) !== undefined) return screenSizes[breakpoint];
    }
};
const useResponsiveObserver = ()=>{
    _s();
    const [, token] = (0, _internal.useToken)();
    const responsiveMap = getResponsiveMap(validateBreakpoints(token));
    // To avoid repeat create instance, we add `useMemo` here.
    return _react.default.useMemo(()=>{
        const subscribers = new Map();
        let subUid = -1;
        let screens = {};
        return {
            responsiveMap,
            matchHandlers: {},
            dispatch (pointMap) {
                screens = pointMap;
                subscribers.forEach((func)=>func(screens));
                return subscribers.size >= 1;
            },
            subscribe (func) {
                if (!subscribers.size) this.register();
                subUid += 1;
                subscribers.set(subUid, func);
                func(screens);
                return subUid;
            },
            unsubscribe (paramToken) {
                subscribers.delete(paramToken);
                if (!subscribers.size) this.unregister();
            },
            register () {
                Object.entries(responsiveMap).forEach(([screen, mediaQuery])=>{
                    const listener = ({ matches })=>{
                        this.dispatch({
                            ...screens,
                            [screen]: matches
                        });
                    };
                    const mql = window.matchMedia(mediaQuery);
                    (0, _mediaQueryUtil.addMediaQueryListener)(mql, listener);
                    this.matchHandlers[mediaQuery] = {
                        mql,
                        listener
                    };
                    listener(mql);
                });
            },
            unregister () {
                Object.values(responsiveMap).forEach((mediaQuery)=>{
                    const handler = this.matchHandlers[mediaQuery];
                    (0, _mediaQueryUtil.removeMediaQueryListener)(handler === null || handler === void 0 ? void 0 : handler.mql, handler === null || handler === void 0 ? void 0 : handler.listener);
                });
                subscribers.clear();
            }
        };
    }, [
        token
    ]);
};
_s(useResponsiveObserver, "7s99d5NrJSMQyr3Dii1iRayxYSg=", false, function() {
    return [
        _internal.useToken
    ];
});
var _default = useResponsiveObserver;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/scrollTo.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return scrollTo;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _raf = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/raf.js"));
var _easings = __mako_require__("src/components/VirtualTable/_util/easings.ts");
var _getScroll = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/_util/getScroll.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function scrollTo(y, options = {}) {
    const { getContainer = ()=>window, callback, duration = 450 } = options;
    const container = getContainer();
    const scrollTop = (0, _getScroll.default)(container);
    const startTime = Date.now();
    const frameFunc = ()=>{
        const timestamp = Date.now();
        const time = timestamp - startTime;
        const nextScrollTop = (0, _easings.easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);
        if ((0, _getScroll.isWindow)(container)) container.scrollTo(window.pageXOffset, nextScrollTop);
        else if (container instanceof Document || container.constructor.name === 'HTMLDocument') container.documentElement.scrollTop = nextScrollTop;
        else container.scrollTop = nextScrollTop;
        if (time < duration) (0, _raf.default)(frameFunc);
        else if (typeof callback === 'function') callback();
    };
    (0, _raf.default)(frameFunc);
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/warning.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    WarningContext: function() {
        return WarningContext;
    },
    default: function() {
        return _default;
    },
    devUseWarning: function() {
        return devUseWarning;
    },
    noop: function() {
        return noop;
    },
    resetWarned: function() {
        return resetWarned;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _warning = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/rc-util/lib/warning.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function noop() {}
let deprecatedWarnList = null;
function resetWarned() {
    deprecatedWarnList = null;
    (0, _warning.resetWarned)();
}
let _warning1 = noop;
_warning1 = (valid, component, message)=>{
    (0, _warning.default)(valid, `[antd: ${component}] ${message}`);
};
const warning = _warning1;
const WarningContext = /*#__PURE__*/ _react.createContext({});
const devUseWarning = _s((component)=>{
    _s();
    const { strict } = _react.useContext(WarningContext);
    const typeWarning = (valid, type, message)=>{
        if (!valid) {
            if (strict === false && type === 'deprecated') {
                const existWarning = deprecatedWarnList;
                if (!deprecatedWarnList) deprecatedWarnList = {};
                deprecatedWarnList[component] = deprecatedWarnList[component] || [];
                if (!deprecatedWarnList[component].includes(message || '')) deprecatedWarnList[component].push(message || '');
                // Warning for the first time
                if (!existWarning) console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
            } else warning(valid, component, message);
        }
    };
    typeWarning.deprecated = (valid, oldProp, newProp, message)=>{
        typeWarning(valid, 'deprecated', `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ''}`);
    };
    return typeWarning;
}, "uP4GRP3cWmFd2a3mcmwEzIg4+4A=");
var _default = warning;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/_util/zindexContext.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const zIndexContext = /*#__PURE__*/ _react.default.createContext(undefined);
zIndexContext.displayName = 'zIndexContext';
var _default = zIndexContext;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/components/Todo/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const Todo = ()=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: "TODO"
    }, void 0, false, {
        fileName: "src/components/VirtualTable/components/Todo/index.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
};
_c = Todo;
var _default = Todo;
var _c;
$RefreshReg$(_c, "Todo");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/DisabledContext.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    DisabledContextProvider: function() {
        return DisabledContextProvider;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const DisabledContext = /*#__PURE__*/ _react.createContext(false);
const DisabledContextProvider = ({ children, disabled })=>{
    _s();
    const originDisabled = _react.useContext(DisabledContext);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DisabledContext.Provider, {
        value: disabled ?? originDisabled,
        children: children
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/DisabledContext.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_s(DisabledContextProvider, "zun7RWZ/g9AxYGmHrOs9Q/XXcXA=");
_c = DisabledContextProvider;
var _default = DisabledContext;
var _c;
$RefreshReg$(_c, "DisabledContextProvider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/MotionWrapper.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return MotionWrapper;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _rcmotion = __mako_require__("node_modules/rc-motion/es/index.js");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const MotionCacheContext = /*#__PURE__*/ _react.createContext(true);
MotionCacheContext.displayName = 'MotionCacheContext';
function MotionWrapper(props) {
    var _needWrapMotionProviderRef;
    _s();
    const parentMotion = _react.useContext(MotionCacheContext);
    const { children } = props;
    const [, token] = (0, _internal.useToken)();
    const { motion } = token;
    const needWrapMotionProviderRef = _react.useRef(false);
    (_needWrapMotionProviderRef = needWrapMotionProviderRef).current || (_needWrapMotionProviderRef.current = parentMotion !== motion);
    if (needWrapMotionProviderRef.current) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(MotionCacheContext.Provider, {
        value: motion,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_rcmotion.Provider, {
            motion: motion,
            children: children
        }, void 0, false, {
            fileName: "src/components/VirtualTable/config-provider/MotionWrapper.tsx",
            lineNumber: 29,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/MotionWrapper.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, this);
    return children;
}
_s(MotionWrapper, "n8qgk+rDj3Ew3Fm98Osg3kxTHoc=", false, function() {
    return [
        _internal.useToken
    ];
});
_c = MotionWrapper;
var _c;
$RefreshReg$(_c, "MotionWrapper");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/PropWarning.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */ const PropWarning = /*#__PURE__*/ _react.memo(_c = ({ dropdownMatchSelectWidth })=>{
    const warning = (0, _warning.devUseWarning)('ConfigProvider');
    warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
    return null;
});
_c1 = PropWarning;
PropWarning.displayName = 'PropWarning';
var _default = PropWarning;
var _c;
var _c1;
$RefreshReg$(_c, "PropWarning$React.memo");
$RefreshReg$(_c1, "PropWarning");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/SizeContext.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    SizeContextProvider: function() {
        return SizeContextProvider;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const SizeContext = /*#__PURE__*/ _react.createContext(undefined);
const SizeContextProvider = ({ children, size })=>{
    _s();
    const originSize = _react.useContext(SizeContext);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(SizeContext.Provider, {
        value: size || originSize,
        children: children
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/SizeContext.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
};
_s(SizeContextProvider, "ry43Ro2D+57GvbbX6v6luGyIw5E=");
_c = SizeContextProvider;
var _default = SizeContext;
var _c;
$RefreshReg$(_c, "SizeContextProvider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/context.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    ConfigConsumer: function() {
        return ConfigConsumer;
    },
    ConfigContext: function() {
        return ConfigContext;
    },
    Variants: function() {
        return Variants;
    },
    defaultIconPrefixCls: function() {
        return defaultIconPrefixCls;
    },
    defaultPrefixCls: function() {
        return defaultPrefixCls;
    },
    useComponentConfig: function() {
        return useComponentConfig;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const defaultPrefixCls = 'ant';
const defaultIconPrefixCls = 'anticon';
const Variants = [
    'outlined',
    'borderless',
    'filled',
    'underlined'
];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
const ConfigContext = /*#__PURE__*/ _react.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    _s();
    const context = _react.useContext(ConfigContext);
    const { getPrefixCls, direction, getPopupContainer } = context;
    const propValue = context[propName];
    return {
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT,
        ...propValue,
        getPrefixCls,
        direction,
        getPopupContainer
    };
}
_s(useComponentConfig, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/cssVariables.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    getStyle: function() {
        return getStyle;
    },
    registerTheme: function() {
        return registerTheme;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _colors = __mako_require__("node_modules/@ant-design/colors/es/index.js");
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var _canUseDom = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/Dom/canUseDom.js"));
var _dynamicCSS = __mako_require__("node_modules/rc-util/lib/Dom/dynamicCSS.js");
var _warning = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/warning.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
    const variables = {};
    const formatColor = (color, updater)=>{
        let clone = color.clone();
        clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
        return clone.toRgbString();
    };
    const fillColor = (colorVal, type)=>{
        const baseColor = new _fastcolor.FastColor(colorVal);
        const colorPalettes = (0, _colors.generate)(baseColor.toRgbString());
        variables[`${type}-color`] = formatColor(baseColor);
        variables[`${type}-color-disabled`] = colorPalettes[1];
        variables[`${type}-color-hover`] = colorPalettes[4];
        variables[`${type}-color-active`] = colorPalettes[6];
        variables[`${type}-color-outline`] = baseColor.clone().setA(0.2).toRgbString();
        variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
        variables[`${type}-color-deprecated-border`] = colorPalettes[2];
    };
    // ================ Primary Color ================
    if (theme.primaryColor) {
        fillColor(theme.primaryColor, 'primary');
        const primaryColor = new _fastcolor.FastColor(theme.primaryColor);
        const primaryColors = (0, _colors.generate)(primaryColor.toRgbString());
        // Legacy - We should use semantic naming standard
        primaryColors.forEach((color, index)=>{
            variables[`primary-${index + 1}`] = color;
        });
        // Deprecated
        variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, (c)=>c.lighten(35));
        variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, (c)=>c.lighten(20));
        variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, (c)=>c.tint(20));
        variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, (c)=>c.tint(50));
        variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, (c)=>c.setA(c.a * 0.12));
        const primaryActiveColor = new _fastcolor.FastColor(primaryColors[0]);
        variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, (c)=>c.setA(c.a * 0.3));
        variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, (c)=>c.darken(2));
    }
    // ================ Success Color ================
    if (theme.successColor) fillColor(theme.successColor, 'success');
    // ================ Warning Color ================
    if (theme.warningColor) fillColor(theme.warningColor, 'warning');
    // ================= Error Color =================
    if (theme.errorColor) fillColor(theme.errorColor, 'error');
    // ================= Info Color ==================
    if (theme.infoColor) fillColor(theme.infoColor, 'info');
    // Convert to css variables
    const cssList = Object.keys(variables).map((key)=>`--${globalPrefixCls}-${key}: ${variables[key]};`);
    return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
    const style = getStyle(globalPrefixCls, theme);
    if ((0, _canUseDom.default)()) (0, _dynamicCSS.updateCSS)(style, `${dynamicStyleMark}-dynamic-theme`);
    else (0, _warning.default)(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.');
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/defaultRenderEmpty.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _ = __mako_require__("src/components/VirtualTable/config-provider/index.tsx");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const DefaultRenderEmpty = (props)=>{
    _s();
    const { componentName } = props;
    const { getPrefixCls } = (0, _react.useContext)(_.ConfigContext);
    const prefix = getPrefixCls('empty');
    switch(componentName){
        case 'Table':
        case 'List':
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Empty, {
                image: _antd.Empty.PRESENTED_IMAGE_SIMPLE
            }, void 0, false, {
                fileName: "src/components/VirtualTable/config-provider/defaultRenderEmpty.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this);
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Empty, {
                image: _antd.Empty.PRESENTED_IMAGE_SIMPLE,
                className: `${prefix}-small`
            }, void 0, false, {
                fileName: "src/components/VirtualTable/config-provider/defaultRenderEmpty.tsx",
                lineNumber: 36,
                columnNumber: 14
            }, this);
        /**
     * This type of component should satisfy the nullish coalescing operator(??) on the left-hand side.
     * to let the component itself implement the logic.
     * For example `Table.filter`.
     */ case 'Table.filter':
            // why `null`? legacy react16 node type `undefined` is not allowed.
            return null;
        default:
            // Should never hit if we take all the component into consider.
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Empty, {}, void 0, false, {
                fileName: "src/components/VirtualTable/config-provider/defaultRenderEmpty.tsx",
                lineNumber: 47,
                columnNumber: 14
            }, this);
    }
};
_s(DefaultRenderEmpty, "QPvnHA/t8P1+0n/GS/E1eBl083I=");
_c = DefaultRenderEmpty;
var _default = DefaultRenderEmpty;
var _c;
$RefreshReg$(_c, "DefaultRenderEmpty");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/hooks/useCSSVarCls.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */ const useCSSVarCls = (prefixCls)=>{
    _s();
    const [, , , , cssVar] = (0, _internal.useToken)();
    return cssVar ? `${prefixCls}-css-var` : '';
};
_s(useCSSVarCls, "T7P92hagPukk5wXYVFxXQxna7Ik=", false, function() {
    return [
        _internal.useToken
    ];
});
var _default = useCSSVarCls;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/hooks/useConfig.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _DisabledContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/DisabledContext.tsx"));
var _SizeContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/SizeContext.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function useConfig() {
    _s();
    const componentDisabled = (0, _react.useContext)(_DisabledContext.default);
    const componentSize = (0, _react.useContext)(_SizeContext.default);
    return {
        componentDisabled,
        componentSize
    };
}
_s(useConfig, "KNSeEnQWp2c+soJs/e12f3G+EZ4=");
var _default = useConfig;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/hooks/useSize.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _SizeContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/SizeContext.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const useSize = (customSize)=>{
    _s();
    const size = _react.default.useContext(_SizeContext.default);
    const mergedSize = _react.default.useMemo(()=>{
        if (!customSize) return size;
        if (typeof customSize === 'string') return customSize ?? size;
        if (typeof customSize === 'function') return customSize(size);
        return size;
    }, [
        customSize,
        size
    ]);
    return mergedSize;
};
_s(useSize, "kVZ3yu5kp0iNw7JJxgd1fBLUVUU=");
var _default = useSize;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/hooks/useTheme.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useTheme;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _useMemo = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/hooks/useMemo.js"));
var _isEqual = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/isEqual.js"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var _useThemeKey = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/hooks/useThemeKey.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function useTheme(theme, parentTheme, config) {
    _s();
    const warning = (0, _warning.devUseWarning)('ConfigProvider');
    const themeConfig = theme || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? {
        ..._internal.defaultConfig,
        hashed: (parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) ?? _internal.defaultConfig.hashed,
        cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
    } : parentTheme;
    const themeKey = (0, _useThemeKey.default)();
    {
        var _themeConfig_cssVar;
        const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
        const validKey = !!(typeof themeConfig.cssVar === 'object' && ((_themeConfig_cssVar = themeConfig.cssVar) === null || _themeConfig_cssVar === void 0 ? void 0 : _themeConfig_cssVar.key) || themeKey);
        warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.');
    }
    return (0, _useMemo.default)(()=>{
        var _themeConfig_cssVar;
        if (!theme) return parentTheme;
        // Override
        const mergedComponents = {
            ...parentThemeConfig.components
        };
        Object.keys(theme.components || {}).forEach((componentName)=>{
            mergedComponents[componentName] = {
                ...mergedComponents[componentName],
                ...theme.components[componentName]
            };
        });
        const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
        const mergedCssVar = (themeConfig.cssVar ?? parentThemeConfig.cssVar) && {
            prefix: config === null || config === void 0 ? void 0 : config.prefixCls,
            ...typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {},
            ...typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {},
            key: typeof themeConfig.cssVar === 'object' && ((_themeConfig_cssVar = themeConfig.cssVar) === null || _themeConfig_cssVar === void 0 ? void 0 : _themeConfig_cssVar.key) || cssVarKey
        };
        // Base token
        return {
            ...parentThemeConfig,
            ...themeConfig,
            token: {
                ...parentThemeConfig.token,
                ...themeConfig.token
            },
            components: mergedComponents,
            cssVar: mergedCssVar
        };
    }, [
        themeConfig,
        parentThemeConfig
    ], (prev, next)=>prev.some((prevTheme, index)=>{
            const nextTheme = next[index];
            return !(0, _isEqual.default)(prevTheme, nextTheme, true);
        }));
}
_s(useTheme, "Wx98IoaqdtgSIpxwo8fIYja4Dus=", false, function() {
    return [
        _useThemeKey.default
    ];
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/hooks/useThemeKey.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const fullClone = {
    ..._react
};
const { useId } = fullClone;
const useEmptyId = ()=>'';
const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
var _default = useThemeKey;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    ConfigConsumer: function() {
        return _context2.ConfigConsumer;
    },
    ConfigContext: function() {
        return _context2.ConfigContext;
    },
    Variants: function() {
        return _context2.Variants;
    },
    configConsumerProps: function() {
        return configConsumerProps;
    },
    default: function() {
        return _default;
    },
    defaultIconPrefixCls: function() {
        return _context2.defaultIconPrefixCls;
    },
    defaultPrefixCls: function() {
        return _context2.defaultPrefixCls;
    },
    globalConfig: function() {
        return globalConfig;
    },
    warnContext: function() {
        return warnContext;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _useMemo = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/hooks/useMemo.js"));
var _set = __mako_require__("node_modules/rc-util/lib/utils/set.js");
var _warning = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/_util/warning.ts"));
var _locale = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/locale/index.tsx"));
var _context = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/locale/context.ts"));
var _en_US = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/locale/en_US.ts"));
var _context1 = __mako_require__("src/components/VirtualTable/theme/context.ts");
var _seed = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/seed.ts"));
var _context2 = __mako_require__("src/components/VirtualTable/config-provider/context.ts");
var _cssVariables = __mako_require__("src/components/VirtualTable/config-provider/cssVariables.ts");
var _DisabledContext = __mako_require__("src/components/VirtualTable/config-provider/DisabledContext.tsx");
var _useConfig = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/hooks/useConfig.ts"));
var _useTheme = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/hooks/useTheme.ts"));
var _MotionWrapper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/MotionWrapper.tsx"));
var _PropWarning = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/PropWarning.tsx"));
var _SizeContext = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/config-provider/SizeContext.tsx"));
var _style = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/style/index.ts"));
var _Todo = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/components/Todo/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
const ValidateMessagesContext = /*#__PURE__*/ _react.createContext(undefined);
/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */ let existThemeConfig = false;
const warnContext = (componentName)=>{
    (0, _warning.default)(!existThemeConfig, componentName, `Static function can not consume context like dynamic theme. Please use 'App' component instead.`);
};
const configConsumerProps = [
    'getTargetContainer',
    'getPopupContainer',
    'rootPrefixCls',
    'getPrefixCls',
    'renderEmpty',
    'csp',
    'autoInsertSpaceInButton',
    'locale'
];
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'input',
    'pagination',
    'form',
    'select',
    'button'
];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
    return globalPrefixCls || _context2.defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
    return globalIconPrefixCls || _context2.defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
    return Object.keys(theme).some((key)=>key.endsWith('Color'));
}
const setGlobalConfig = (props)=>{
    const { prefixCls, iconPrefixCls, theme, holderRender } = props;
    if (prefixCls !== undefined) globalPrefixCls = prefixCls;
    if (iconPrefixCls !== undefined) globalIconPrefixCls = iconPrefixCls;
    if ('holderRender' in props) globalHolderRender = holderRender;
    if (theme) {
        if (isLegacyTheme(theme)) {
            (0, _warning.default)(false, 'ConfigProvider', '`config` of css variable theme is not work in v5. Please use new `theme` config instead.');
            (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), theme);
        } else globalTheme = theme;
    }
};
const globalConfig = ()=>({
        getPrefixCls: (suffixCls, customizePrefixCls)=>{
            if (customizePrefixCls) return customizePrefixCls;
            return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
        },
        getIconPrefixCls: getGlobalIconPrefixCls,
        getRootPrefixCls: ()=>{
            // If Global prefixCls provided, use this
            if (globalPrefixCls) return globalPrefixCls;
            // Fallback to default prefixCls
            return getGlobalPrefixCls();
        },
        getTheme: ()=>globalTheme,
        holderRender: globalHolderRender
    });
const ProviderChildren = (props)=>{
    _s();
    const { children, csp: customCsp, autoInsertSpaceInButton, alert, anchor, form, locale, componentSize, direction, space, splitter, virtual, dropdownMatchSelectWidth, popupMatchSelectWidth, popupOverflow, legacyLocale, parentContext, iconPrefixCls: customIconPrefixCls, theme, componentDisabled, segmented, statistic, spin, calendar, carousel, cascader, collapse, typography, checkbox, descriptions, divider, drawer, skeleton, steps, image, layout, list, mentions, modal, progress, result, slider, breadcrumb, menu, pagination, input, textArea, empty, badge, radio, rate, switch: SWITCH, transfer, avatar, message, tag, table, card, tabs, timeline, timePicker, upload, notification, tree, colorPicker, datePicker, rangePicker, flex, wave, dropdown, warning: warningConfig, tour, tooltip, popover, popconfirm, floatButton, floatButtonGroup, variant, inputNumber, treeSelect } = props;
    // =================================== Context ===================================
    const getPrefixCls = _react.useCallback((suffixCls, customizePrefixCls)=>{
        const { prefixCls } = props;
        if (customizePrefixCls) return customizePrefixCls;
        const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
        return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    }, [
        parentContext.getPrefixCls,
        props.prefixCls
    ]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || _context2.defaultIconPrefixCls;
    const csp = customCsp || parentContext.csp;
    (0, _style.default)(iconPrefixCls, csp);
    const mergedTheme = (0, _useTheme.default)(theme, parentContext.theme, {
        prefixCls: getPrefixCls('')
    });
    existThemeConfig = existThemeConfig || !!mergedTheme;
    const baseConfig = {
        csp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        locale: locale || legacyLocale,
        direction,
        space,
        splitter,
        virtual,
        popupMatchSelectWidth: popupMatchSelectWidth ?? dropdownMatchSelectWidth,
        popupOverflow,
        getPrefixCls,
        iconPrefixCls,
        theme: mergedTheme,
        segmented,
        statistic,
        spin,
        calendar,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        input,
        textArea,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        tooltip,
        popover,
        popconfirm,
        floatButton,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
    };
    {
        const warningFn = (0, _warning.devUseWarning)('ConfigProvider');
        warningFn(!('autoInsertSpaceInButton' in props), 'deprecated', '`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.');
    }
    const config = {
        ...parentContext
    };
    Object.keys(baseConfig).forEach((key)=>{
        if (baseConfig[key] !== undefined) config[key] = baseConfig[key];
    });
    // Pass the props used by `useContext` directly with child component.
    // These props should merged into `config`.
    PASSED_PROPS.forEach((propName)=>{
        const propValue = props[propName];
        if (propValue) config[propName] = propValue;
    });
    if (typeof autoInsertSpaceInButton !== 'undefined') // merge deprecated api
    config.button = {
        autoInsertSpace: autoInsertSpaceInButton,
        ...config.button
    };
    // https://github.com/ant-design/ant-design/issues/27617
    const memoedConfig = (0, _useMemo.default)(()=>config, config, (prevConfig, currentConfig)=>{
        const prevKeys = Object.keys(prevConfig);
        const currentKeys = Object.keys(currentConfig);
        return prevKeys.length !== currentKeys.length || prevKeys.some((key)=>prevConfig[key] !== currentConfig[key]);
    });
    const { layer } = _react.useContext(_cssinjs.StyleContext);
    _react.useMemo(()=>({
            prefixCls: iconPrefixCls,
            csp,
            layer: layer ? 'antd' : undefined
        }), [
        iconPrefixCls,
        csp,
        layer
    ]);
    let childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_PropWarning.default, {
                dropdownMatchSelectWidth: dropdownMatchSelectWidth
            }, void 0, false, {
                fileName: "src/components/VirtualTable/config-provider/index.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
    const validateMessages = _react.useMemo(()=>{
        var _defaultLocale_Form, _memoedConfig_locale_Form, _memoedConfig_locale, _memoedConfig_form;
        return (0, _set.merge)(((_defaultLocale_Form = _en_US.default.Form) === null || _defaultLocale_Form === void 0 ? void 0 : _defaultLocale_Form.defaultValidateMessages) || {}, ((_memoedConfig_locale = memoedConfig.locale) === null || _memoedConfig_locale === void 0 ? void 0 : (_memoedConfig_locale_Form = _memoedConfig_locale.Form) === null || _memoedConfig_locale_Form === void 0 ? void 0 : _memoedConfig_locale_Form.defaultValidateMessages) || {}, ((_memoedConfig_form = memoedConfig.form) === null || _memoedConfig_form === void 0 ? void 0 : _memoedConfig_form.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
    }, [
        memoedConfig,
        form === null || form === void 0 ? void 0 : form.validateMessages
    ]);
    if (Object.keys(validateMessages).length > 0) childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ValidateMessagesContext.Provider, {
        value: validateMessages,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 598,
        columnNumber: 7
    }, this);
    if (locale) childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_locale.default, {
        locale: locale,
        _ANT_MARK__: _locale.ANT_MARK,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 606,
        columnNumber: 7
    }, this);
    if (iconPrefixCls || csp) // childNode = (
    //   <IconContext.Provider value={memoIconContextValue}>{childNode}</IconContext.Provider>
    // );
    childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Todo.default, {}, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 616,
        columnNumber: 18
    }, this);
    if (componentSize) childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_SizeContext.SizeContextProvider, {
        size: componentSize,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 620,
        columnNumber: 17
    }, this);
    // =================================== Motion ===================================
    childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_MotionWrapper.default, {
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 624,
        columnNumber: 15
    }, this);
    // ================================ Dynamic theme ================================
    const memoTheme = _react.useMemo(()=>{
        const { algorithm, token, components, cssVar, ...rest } = mergedTheme || {};
        const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0, _cssinjs.createTheme)(algorithm) : _context1.defaultTheme;
        const parsedComponents = {};
        Object.entries(components || {}).forEach(([componentName, componentToken])=>{
            const parsedToken = {
                ...componentToken
            };
            if ('algorithm' in parsedToken) {
                if (parsedToken.algorithm === true) parsedToken.theme = themeObj;
                else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') parsedToken.theme = (0, _cssinjs.createTheme)(parsedToken.algorithm);
                delete parsedToken.algorithm;
            }
            parsedComponents[componentName] = parsedToken;
        });
        const mergedToken = {
            ..._seed.default,
            ...token
        };
        return {
            ...rest,
            theme: themeObj,
            token: mergedToken,
            components: parsedComponents,
            override: {
                override: mergedToken,
                ...parsedComponents
            },
            cssVar: cssVar
        };
    }, [
        mergedTheme
    ]);
    if (theme) childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_context1.DesignTokenContext.Provider, {
        value: memoTheme,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 674,
        columnNumber: 7
    }, this);
    // ================================== Warning ===================================
    if (memoedConfig.warning) childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_warning.WarningContext.Provider, {
        value: memoedConfig.warning,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 681,
        columnNumber: 7
    }, this);
    // =================================== Render ===================================
    if (componentDisabled !== undefined) childNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_DisabledContext.DisabledContextProvider, {
        disabled: componentDisabled,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 688,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_context2.ConfigContext.Provider, {
        value: memoedConfig,
        children: childNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 692,
        columnNumber: 10
    }, this);
};
_s(ProviderChildren, "kRiqmjVSfM4uAF+jfOFQGEH+lnY=", false, function() {
    return [
        _style.default,
        _useTheme.default
    ];
});
_c = ProviderChildren;
const ConfigProvider = (props)=>{
    _s1();
    const context = _react.useContext(_context2.ConfigContext);
    const antLocale = _react.useContext(_context.default);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProviderChildren, {
        parentContext: context,
        legacyLocale: antLocale,
        ...props
    }, void 0, false, {
        fileName: "src/components/VirtualTable/config-provider/index.tsx",
        lineNumber: 705,
        columnNumber: 10
    }, this);
};
_s1(ConfigProvider, "5XMMgkz9YsQr1JkHJlLt1Jxn/S8=");
_c1 = ConfigProvider;
ConfigProvider.ConfigContext = _context2.ConfigContext;
ConfigProvider.SizeContext = _SizeContext.default;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = _useConfig.default;
Object.defineProperty(ConfigProvider, 'SizeContext', {
    get: ()=>{
        (0, _warning.default)(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.');
        return _SizeContext.default;
    }
});
ConfigProvider.displayName = 'ConfigProvider';
var _default = ConfigProvider;
var _c;
var _c1;
$RefreshReg$(_c, "ProviderChildren");
$RefreshReg$(_c1, "ConfigProvider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/config-provider/style/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _internal.useResetIconStyle;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/grid/hooks/useBreakpoint.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _useLayoutEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/hooks/useLayoutEffect.js"));
var _useForceUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/hooks/useForceUpdate.ts"));
var _responsiveObserver = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/responsiveObserver.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function useBreakpoint(refreshOnChange = true, defaultScreens = {}) {
    _s();
    const screensRef = (0, _react.useRef)(defaultScreens);
    const forceUpdate = (0, _useForceUpdate.default)();
    const responsiveObserver = (0, _responsiveObserver.default)();
    (0, _useLayoutEffect.default)(()=>{
        const token = responsiveObserver.subscribe((supportScreens)=>{
            screensRef.current = supportScreens;
            if (refreshOnChange) forceUpdate();
        });
        return ()=>responsiveObserver.unsubscribe(token);
    }, []);
    return screensRef.current;
}
_s(useBreakpoint, "9kaMWThEfnjTCds8/EkDMwk5s6U=", false, function() {
    return [
        _useForceUpdate.default,
        _responsiveObserver.default
    ];
});
var _default = useBreakpoint;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _Table = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/Table.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = _Table.default;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/layout/Sider.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    SiderContext: function() {
        return SiderContext;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/omit.js"));
var _mediaQueryUtil = __mako_require__("src/components/VirtualTable/_util/mediaQueryUtil.ts");
var _configprovider = __mako_require__("src/components/VirtualTable/config-provider/index.tsx");
var _context = __mako_require__("src/components/VirtualTable/layout/context.ts");
var _sider = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/layout/style/sider.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px'
};
const isNumeric = (value)=>!Number.isNaN(Number.parseFloat(value)) && isFinite(value);
const SiderContext = /*#__PURE__*/ _react.createContext({});
const generateId = (()=>{
    let i = 0;
    return (prefix = '')=>{
        i += 1;
        return `${prefix}${i}`;
    };
})();
const Sider = /*#__PURE__*/ _s(_react.forwardRef(_c = _s((props, ref)=>{
    _s();
    const { prefixCls: customizePrefixCls, className, trigger, children, defaultCollapsed = false, theme = 'dark', style = {}, collapsible = false, reverseArrow = false, width = 200, collapsedWidth = 80, zeroWidthTriggerStyle, breakpoint, onCollapse, onBreakpoint, ...otherProps } = props;
    const { siderHook } = (0, _react.useContext)(_context.LayoutContext);
    const [collapsed, setCollapsed] = (0, _react.useState)('collapsed' in props ? props.collapsed : defaultCollapsed);
    const [below, setBelow] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        if ('collapsed' in props) setCollapsed(props.collapsed);
    }, [
        props.collapsed
    ]);
    const handleSetCollapsed = (value, type)=>{
        if (!('collapsed' in props)) setCollapsed(value);
        onCollapse === null || onCollapse === void 0 || onCollapse(value, type);
    };
    // =========================== Prefix ===========================
    const { getPrefixCls, direction } = (0, _react.useContext)(_configprovider.ConfigContext);
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, _sider.default)(prefixCls);
    // ========================= Responsive =========================
    const responsiveHandlerRef = (0, _react.useRef)(null);
    responsiveHandlerRef.current = (mql)=>{
        setBelow(mql.matches);
        onBreakpoint === null || onBreakpoint === void 0 || onBreakpoint(mql.matches);
        if (collapsed !== mql.matches) handleSetCollapsed(mql.matches, 'responsive');
    };
    (0, _react.useEffect)(()=>{
        var _window;
        function responsiveHandler(mql) {
            var _responsiveHandlerRef_current;
            return (_responsiveHandlerRef_current = responsiveHandlerRef.current) === null || _responsiveHandlerRef_current === void 0 ? void 0 : _responsiveHandlerRef_current.call(responsiveHandlerRef, mql);
        }
        let mql;
        if (typeof ((_window = window) === null || _window === void 0 ? void 0 : _window.matchMedia) !== 'undefined' && breakpoint && breakpoint in dimensionMaxMap) {
            mql = window.matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
            (0, _mediaQueryUtil.addMediaQueryListener)(mql, responsiveHandler);
            responsiveHandler(mql);
        }
        return ()=>{
            (0, _mediaQueryUtil.removeMediaQueryListener)(mql, responsiveHandler);
        };
    }, [
        breakpoint
    ]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
    (0, _react.useEffect)(()=>{
        const uniqueId = generateId('ant-sider-');
        siderHook.addSider(uniqueId);
        return ()=>siderHook.removeSider(uniqueId);
    }, []);
    const toggle = ()=>{
        handleSetCollapsed(!collapsed, 'clickTrigger');
    };
    const divProps = (0, _omit.default)(otherProps, [
        'collapsed'
    ]);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
        onClick: toggle,
        className: (0, _classnames.default)(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`),
        style: zeroWidthTriggerStyle,
        children: trigger || /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.BarsOutlined, {}, void 0, false, {
            fileName: "src/components/VirtualTable/layout/Sider.tsx",
            lineNumber: 161,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/layout/Sider.tsx",
        lineNumber: 152,
        columnNumber: 7
    }, this) : null;
    const reverseIcon = direction === 'rtl' === !reverseArrow;
    const iconObj = {
        // expanded: reverseIcon ? <Icon type="right" /> : <Icon type="left" />,
        // collapsed: reverseIcon ? <Icon type="left" /> : <Icon type="right" />,
        expanded: reverseIcon ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RightOutlined, {}, void 0, false, {
            fileName: "src/components/VirtualTable/layout/Sider.tsx",
            lineNumber: 170,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LeftOutlined, {}, void 0, false, {
            fileName: "src/components/VirtualTable/layout/Sider.tsx",
            lineNumber: 170,
            columnNumber: 49
        }, this),
        collapsed: reverseIcon ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LeftOutlined, {}, void 0, false, {
            fileName: "src/components/VirtualTable/layout/Sider.tsx",
            lineNumber: 171,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RightOutlined, {}, void 0, false, {
            fileName: "src/components/VirtualTable/layout/Sider.tsx",
            lineNumber: 171,
            columnNumber: 49
        }, this)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: `${prefixCls}-trigger`,
        onClick: toggle,
        style: {
            width: siderWidth
        },
        children: trigger || defaultTrigger
    }, void 0, false, {
        fileName: "src/components/VirtualTable/layout/Sider.tsx",
        lineNumber: 179,
        columnNumber: 11
    }, this) : null;
    const divStyle = {
        ...style,
        flex: `0 0 ${siderWidth}`,
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
    };
    const siderCls = (0, _classnames.default)(prefixCls, `${prefixCls}-${theme}`, {
        [`${prefixCls}-collapsed`]: !!collapsed,
        [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
        [`${prefixCls}-below`]: !!below,
        [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    }, className, hashId, cssVarCls);
    const contextValue = _react.useMemo(()=>({
            siderCollapsed: collapsed
        }), [
        collapsed
    ]);
    return wrapCSSVar(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(SiderContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("aside", {
            className: siderCls,
            ...divProps,
            style: divStyle,
            ref: ref,
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: `${prefixCls}-children`,
                    children: children
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/layout/Sider.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                collapsible || below && zeroWidthTrigger ? triggerDom : null
            ]
        }, void 0, true, {
            fileName: "src/components/VirtualTable/layout/Sider.tsx",
            lineNumber: 214,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/layout/Sider.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this));
}, "sYry/KfdHFmBCVMHJGHHq7B7Knw=", false, function() {
    return [
        _sider.default
    ];
})), "sYry/KfdHFmBCVMHJGHHq7B7Knw=", false, function() {
    return [
        _sider.default
    ];
});
_c1 = Sider;
Sider.displayName = 'Sider';
var _default = Sider;
var _c;
var _c1;
$RefreshReg$(_c, "Sider$React.forwardRef");
$RefreshReg$(_c1, "Sider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/layout/context.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "LayoutContext", {
    enumerable: true,
    get: function() {
        return LayoutContext;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const LayoutContext = /*#__PURE__*/ _react.createContext({
    siderHook: {
        addSider: ()=>null,
        removeSider: ()=>null
    }
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/layout/style/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    DEPRECATED_TOKENS: function() {
        return DEPRECATED_TOKENS;
    },
    default: function() {
        return _default;
    },
    prepareComponentToken: function() {
        return prepareComponentToken;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genLayoutStyle = (token)=>{
    const { antCls, componentCls, colorText, footerBg, headerHeight, headerPadding, headerColor, footerPadding, fontSize, bodyBg, headerBg } = token;
    return {
        [componentCls]: {
            display: 'flex',
            flex: 'auto',
            flexDirection: 'column',
            /* fix firefox can't set height smaller than content on flex item */ minHeight: 0,
            background: bodyBg,
            '&, *': {
                boxSizing: 'border-box'
            },
            [`&${componentCls}-has-sider`]: {
                flexDirection: 'row',
                [`> ${componentCls}, > ${componentCls}-content`]: {
                    // https://segmentfault.com/a/1190000019498300
                    width: 0
                }
            },
            [`${componentCls}-header, &${componentCls}-footer`]: {
                flex: '0 0 auto'
            },
            // RTL
            '&-rtl': {
                direction: 'rtl'
            }
        },
        // ==================== Header ====================
        [`${componentCls}-header`]: {
            height: headerHeight,
            padding: headerPadding,
            color: headerColor,
            lineHeight: (0, _cssinjs.unit)(headerHeight),
            background: headerBg,
            // Other components/menu/style/index.less line:686
            // Integration with header element so menu items have the same height
            [`${antCls}-menu`]: {
                lineHeight: 'inherit'
            }
        },
        // ==================== Footer ====================
        [`${componentCls}-footer`]: {
            padding: footerPadding,
            color: colorText,
            fontSize,
            background: footerBg
        },
        // =================== Content ====================
        [`${componentCls}-content`]: {
            flex: 'auto',
            color: colorText,
            // fix firefox can't set height smaller than content on flex item
            minHeight: 0
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorBgLayout, controlHeight, controlHeightLG, colorText, controlHeightSM, marginXXS, colorTextLightSolid, colorBgContainer } = token;
    const paddingInline = controlHeightLG * 1.25;
    return {
        // Deprecated
        colorBgHeader: '#001529',
        colorBgBody: colorBgLayout,
        colorBgTrigger: '#002140',
        bodyBg: colorBgLayout,
        headerBg: '#001529',
        headerHeight: controlHeight * 2,
        headerPadding: `0 ${paddingInline}px`,
        headerColor: colorText,
        footerPadding: `${controlHeightSM}px ${paddingInline}px`,
        footerBg: colorBgLayout,
        siderBg: '#001529',
        triggerHeight: controlHeightLG + marginXXS * 2,
        triggerBg: '#002140',
        triggerColor: colorTextLightSolid,
        zeroTriggerWidth: controlHeightLG,
        zeroTriggerHeight: controlHeightLG,
        lightSiderBg: colorBgContainer,
        lightTriggerBg: colorBgContainer,
        lightTriggerColor: colorText
    };
};
const DEPRECATED_TOKENS = [
    [
        'colorBgBody',
        'bodyBg'
    ],
    [
        'colorBgHeader',
        'headerBg'
    ],
    [
        'colorBgTrigger',
        'triggerBg'
    ]
];
var _default = (0, _internal.genStyleHooks)('Layout', genLayoutStyle, prepareComponentToken, {
    deprecatedTokens: DEPRECATED_TOKENS
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/layout/style/sider.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _ = __mako_require__("src/components/VirtualTable/layout/style/index.ts");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genSiderStyle = (token)=>{
    const { componentCls, siderBg, motionDurationMid, motionDurationSlow, antCls, triggerHeight, triggerColor, triggerBg, headerHeight, zeroTriggerWidth, zeroTriggerHeight, borderRadiusLG, lightSiderBg, lightTriggerColor, lightTriggerBg, bodyBg } = token;
    return {
        [componentCls]: {
            position: 'relative',
            // fix firefox can't set width smaller than content on flex item
            minWidth: 0,
            background: siderBg,
            transition: `all ${motionDurationMid}, background 0s`,
            '&-has-trigger': {
                paddingBottom: triggerHeight
            },
            '&-right': {
                order: 1
            },
            [`${componentCls}-children`]: {
                height: '100%',
                // Hack for fixing margin collapse bug
                // https://github.com/ant-design/ant-design/issues/7967
                // solution from https://stackoverflow.com/a/33132624/3040605
                marginTop: -0.1,
                paddingTop: 0.1,
                [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
                    width: 'auto'
                }
            },
            [`&-zero-width ${componentCls}-children`]: {
                overflow: 'hidden'
            },
            [`${componentCls}-trigger`]: {
                position: 'fixed',
                bottom: 0,
                zIndex: 1,
                height: triggerHeight,
                color: triggerColor,
                lineHeight: (0, _cssinjs.unit)(triggerHeight),
                textAlign: 'center',
                background: triggerBg,
                cursor: 'pointer',
                transition: `all ${motionDurationMid}`
            },
            [`${componentCls}-zero-width-trigger`]: {
                position: 'absolute',
                top: headerHeight,
                insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
                zIndex: 1,
                width: zeroTriggerWidth,
                height: zeroTriggerHeight,
                color: triggerColor,
                fontSize: token.fontSizeXL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: siderBg,
                borderRadius: `0 ${(0, _cssinjs.unit)(borderRadiusLG)} ${(0, _cssinjs.unit)(borderRadiusLG)} 0`,
                cursor: 'pointer',
                transition: `background ${motionDurationSlow} ease`,
                '&::after': {
                    position: 'absolute',
                    inset: 0,
                    background: 'transparent',
                    transition: `all ${motionDurationSlow}`,
                    content: '""'
                },
                '&:hover::after': {
                    background: `rgba(255, 255, 255, 0.2)`
                },
                '&-right': {
                    insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
                    borderRadius: `${(0, _cssinjs.unit)(borderRadiusLG)} 0 0 ${(0, _cssinjs.unit)(borderRadiusLG)}`
                }
            },
            // Light
            '&-light': {
                background: lightSiderBg,
                [`${componentCls}-trigger`]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg
                },
                [`${componentCls}-zero-width-trigger`]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg,
                    border: `1px solid ${bodyBg}`,
                    borderInlineStart: 0
                }
            }
        }
    };
};
var _default = (0, _internal.genStyleHooks)([
    'Layout',
    'Sider'
], genSiderStyle, _.prepareComponentToken, {
    deprecatedTokens: _.DEPRECATED_TOKENS
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/locale/context.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const LocaleContext = /*#__PURE__*/ (0, _react.createContext)(undefined);
var _default = LocaleContext;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/locale/en_US.ts": function (module, exports, __mako_require__){
// @ts-nocheck
// import Pagination from 'rc-pagination/lib/locale/en_US';
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
// import Calendar from '../calendar/locale/en_US';
// import DatePicker from '../date-picker/locale/en_US';
// import TimePicker from '../time-picker/locale/en_US';
const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
    locale: 'en',
    // Pagination,
    // DatePicker,
    // TimePicker,
    // Calendar,
    global: {
        placeholder: 'Please select',
        close: 'Close'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckAll: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting'
    },
    Tour: {
        Next: 'Next',
        Previous: 'Previous',
        Finish: 'Finish'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: [
            '',
            ''
        ],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        deselectAll: 'Deselect all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse'
    },
    Form: {
        optional: '(optional)',
        defaultValidateMessages: {
            default: 'Field validation error for ${label}',
            required: 'Please enter ${label}',
            enum: '${label} must be one of [${enum}]',
            whitespace: '${label} cannot be a blank character',
            date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
            },
            number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
            },
            array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
            },
            pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
            }
        }
    },
    Image: {
        preview: 'Preview'
    },
    QRCode: {
        expired: 'QR code expired',
        refresh: 'Refresh',
        scanned: 'Scanned'
    },
    ColorPicker: {
        presetEmpty: 'Empty',
        transparent: 'Transparent',
        singleColor: 'Single',
        gradientColor: 'Gradient'
    }
};
var _default = localeValues;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/locale/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    ANT_MARK: function() {
        return ANT_MARK;
    },
    default: function() {
        return _default;
    },
    useLocale: function() {
        return _useLocale.default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _context = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/locale/context.ts"));
var _useLocale = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/locale/useLocale.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const ANT_MARK = 'internalMark';
const LocaleProvider = (props)=>{
    _s();
    const { locale = {}, children, _ANT_MARK__ } = props;
    {
        const warning = (0, _warning.devUseWarning)('LocaleProvider');
        warning(_ANT_MARK__ === ANT_MARK, 'deprecated', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    }
    // TODO
    // React.useEffect(() => {
    //   const clearLocale = changeConfirmLocale(locale?.Modal);
    //   return clearLocale;
    // }, [locale]);
    const getMemoizedContextValue = _react.useMemo(()=>({
            ...locale,
            exist: true
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_context.default.Provider, {
        value: getMemoizedContextValue,
        children: children
    }, void 0, false, {
        fileName: "src/components/VirtualTable/locale/index.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
};
_s(LocaleProvider, "/gu+DZrHwAs5af3kZgKlwh1xCLU=");
_c = LocaleProvider;
LocaleProvider.displayName = 'LocaleProvider';
var _default = LocaleProvider;
var _c;
$RefreshReg$(_c, "LocaleProvider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/locale/useLocale.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _context = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/locale/context.ts"));
var _en_US = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/locale/en_US.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const useLocale = (componentName, defaultLocale)=>{
    _s();
    const fullLocale = _react.useContext(_context.default);
    const getLocale = _react.useMemo(()=>{
        const locale = defaultLocale || _en_US.default[componentName];
        const localeFromContext = (fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) ?? {};
        return {
            ...typeof locale === 'function' ? locale() : locale,
            ...localeFromContext || {}
        };
    }, [
        componentName,
        defaultLocale,
        fullLocale
    ]);
    const getLocaleCode = _react.useMemo(()=>{
        const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
        // Had use LocaleProvide but didn't set locale
        if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) return _en_US.default.locale;
        return localeCode;
    }, [
        fullLocale
    ]);
    return [
        getLocale,
        getLocaleCode
    ];
};
_s(useLocale, "wZnP33jicSontzWxT8J7bK0Pd3M=");
var _default = useLocale;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/MenuContext.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const MenuContext = /*#__PURE__*/ (0, _react.createContext)({
    prefixCls: '',
    firstLevel: true,
    inlineCollapsed: false
});
var _default = MenuContext;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/MenuDivider.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rcmenu = __mako_require__("node_modules/rc-menu/es/index.js");
var _configprovider = __mako_require__("src/components/VirtualTable/config-provider/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const MenuDivider = (props)=>{
    _s();
    const { prefixCls: customizePrefixCls, className, dashed, ...restProps } = props;
    const { getPrefixCls } = _react.useContext(_configprovider.ConfigContext);
    const prefixCls = getPrefixCls('menu', customizePrefixCls);
    const classString = (0, _classnames.default)({
        [`${prefixCls}-item-divider-dashed`]: !!dashed
    }, className);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_rcmenu.Divider, {
        className: classString,
        ...restProps
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/MenuDivider.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
};
_s(MenuDivider, "QPvnHA/t8P1+0n/GS/E1eBl083I=");
_c = MenuDivider;
var _default = MenuDivider;
var _c;
$RefreshReg$(_c, "MenuDivider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/MenuItem.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rcmenu = __mako_require__("node_modules/rc-menu/es/index.js");
var _toArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/Children/toArray.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/omit.js"));
var _reactNode = __mako_require__("src/components/VirtualTable/_util/reactNode.ts");
var _Sider = __mako_require__("src/components/VirtualTable/layout/Sider.tsx");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _MenuContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuContext.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const MenuItem = (props)=>{
    var _icon_props;
    _s();
    const { className, children, icon, title, danger, extra } = props;
    const { prefixCls, firstLevel, direction, disableMenuItemTitleTooltip, inlineCollapsed: isInlineCollapsed } = _react.useContext(_MenuContext.default);
    const renderItemChildren = (inlineCollapsed)=>{
        var _this;
        const label = (_this = children) === null || _this === void 0 ? void 0 : _this[0];
        const wrapNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
            className: (0, _classnames.default)(`${prefixCls}-title-content`, {
                [`${prefixCls}-title-content-with-extra`]: !!extra || extra === 0
            }),
            children: children
        }, void 0, false, {
            fileName: "src/components/VirtualTable/menu/MenuItem.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
        // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456
        if (!icon || /*#__PURE__*/ _react.isValidElement(children) && children.type === 'span') {
            if (children && inlineCollapsed && firstLevel && typeof label === 'string') return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: `${prefixCls}-inline-collapsed-noicon`,
                children: label.charAt(0)
            }, void 0, false, {
                fileName: "src/components/VirtualTable/menu/MenuItem.tsx",
                lineNumber: 65,
                columnNumber: 16
            }, this);
        }
        return wrapNode;
    };
    const { siderCollapsed } = _react.useContext(_Sider.SiderContext);
    let tooltipTitle = title;
    if (typeof title === 'undefined') tooltipTitle = firstLevel ? children : '';
    else if (title === false) tooltipTitle = '';
    const tooltipProps = {
        title: tooltipTitle
    };
    if (!siderCollapsed && !isInlineCollapsed) {
        tooltipProps.title = null;
        // Reset `open` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742
        tooltipProps.open = false;
    }
    const childrenLength = (0, _toArray.default)(children).length;
    let returnNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_rcmenu.Item, {
        ...(0, _omit.default)(props, [
            'title',
            'icon',
            'danger'
        ]),
        className: (0, _classnames.default)({
            [`${prefixCls}-item-danger`]: danger,
            [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
        }, className),
        title: typeof title === 'string' ? title : undefined,
        children: [
            (0, _reactNode.cloneElement)(icon, {
                className: (0, _classnames.default)(/*#__PURE__*/ _react.isValidElement(icon) ? (_icon_props = icon.props) === null || _icon_props === void 0 ? void 0 : _icon_props.className : undefined, `${prefixCls}-item-icon`)
            }),
            renderItemChildren(isInlineCollapsed)
        ]
    }, void 0, true, {
        fileName: "src/components/VirtualTable/menu/MenuItem.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
    if (!disableMenuItemTitleTooltip) returnNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tooltip, {
        ...tooltipProps,
        placement: direction === 'rtl' ? 'left' : 'right',
        classNames: {
            root: `${prefixCls}-inline-collapsed-tooltip`
        },
        children: returnNode
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/MenuItem.tsx",
        lineNumber: 116,
        columnNumber: 7
    }, this);
    return returnNode;
};
_s(MenuItem, "3c4nhn2EXiySa+O9zeE5MAb+fxQ=");
_c = MenuItem;
var _default = MenuItem;
var _c;
$RefreshReg$(_c, "MenuItem");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/OverrideContext.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    OverrideProvider: function() {
        return OverrideProvider;
    },
    /** @internal Only used for Dropdown component. Do not use this in your production. */ default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _ref = __mako_require__("node_modules/rc-util/lib/ref.js");
var _ContextIsolator = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/ContextIsolator.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const OverrideContext = /*#__PURE__*/ _react.createContext(null);
const OverrideProvider = /*#__PURE__*/ _s(_react.forwardRef(_c = _s((props, ref)=>{
    _s();
    const { children, ...restProps } = props;
    const override = _react.useContext(OverrideContext);
    const context = _react.useMemo(()=>({
            ...override,
            ...restProps
        }), [
        override,
        restProps.prefixCls,
        // restProps.expandIcon, Not mark as deps since this is a ReactNode
        restProps.mode,
        restProps.selectable,
        restProps.rootClassName
    ]);
    const canRef = (0, _ref.supportNodeRef)(children);
    const mergedRef = (0, _ref.useComposeRef)(ref, canRef ? (0, _ref.getNodeRef)(children) : null);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(OverrideContext.Provider, {
        value: context,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_ContextIsolator.default, {
            space: true,
            children: canRef ? /*#__PURE__*/ _react.cloneElement(children, {
                ref: mergedRef
            }) : children
        }, void 0, false, {
            fileName: "src/components/VirtualTable/menu/OverrideContext.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/OverrideContext.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}, "x0mKrXDAR71TdzNL8CrHv8t3DgA=", false, function() {
    return [
        _ref.useComposeRef
    ];
})), "x0mKrXDAR71TdzNL8CrHv8t3DgA=", false, function() {
    return [
        _ref.useComposeRef
    ];
});
_c1 = OverrideProvider;
var _default = OverrideContext;
var _c;
var _c1;
$RefreshReg$(_c, "OverrideProvider$React.forwardRef");
$RefreshReg$(_c1, "OverrideProvider");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/SubMenu.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rcmenu = __mako_require__("node_modules/rc-menu/es/index.js");
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/omit.js"));
var _useZIndex = __mako_require__("src/components/VirtualTable/_util/hooks/useZIndex.ts");
var _reactNode = __mako_require__("src/components/VirtualTable/_util/reactNode.ts");
var _MenuContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuContext.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const SubMenu = (props)=>{
    _s();
    const { popupClassName, icon, title, theme: customTheme } = props;
    const context = _react.useContext(_MenuContext.default);
    const { prefixCls, inlineCollapsed, theme: contextTheme } = context;
    const parentPath = (0, _rcmenu.useFullPath)();
    let titleNode;
    if (!icon) titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: `${prefixCls}-inline-collapsed-noicon`,
        children: title.charAt(0)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/SubMenu.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
        className: `${prefixCls}-title-content`,
        children: title
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/SubMenu.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
    else {
        var _icon_props;
        // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456
        const titleIsSpan = /*#__PURE__*/ _react.isValidElement(title) && title.type === 'span';
        titleNode = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
            children: [
                (0, _reactNode.cloneElement)(icon, {
                    className: (0, _classnames.default)(/*#__PURE__*/ _react.isValidElement(icon) ? (_icon_props = icon.props) === null || _icon_props === void 0 ? void 0 : _icon_props.className : undefined, `${prefixCls}-item-icon`)
                }),
                titleIsSpan ? title : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    className: `${prefixCls}-title-content`,
                    children: title
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/menu/SubMenu.tsx",
                    lineNumber: 51,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true);
    }
    const contextValue = _react.useMemo(()=>({
            ...context,
            firstLevel: false
        }), [
        context
    ]);
    // ============================ zIndex ============================
    const [zIndex] = (0, _useZIndex.useZIndex)('Menu');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_MenuContext.default.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_rcmenu.SubMenu, {
            ...(0, _omit.default)(props, [
                'icon'
            ]),
            title: titleNode,
            popupClassName: (0, _classnames.default)(prefixCls, popupClassName, `${prefixCls}-${customTheme || contextTheme}`),
            popupStyle: {
                zIndex,
                // fix: https://github.com/ant-design/ant-design/issues/47826#issuecomment-2360737237
                ...props.popupStyle
            }
        }, void 0, false, {
            fileName: "src/components/VirtualTable/menu/SubMenu.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/SubMenu.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_s(SubMenu, "jymLJBFfUMSVkbIbaISZe3BlBus=", false, function() {
    return [
        _rcmenu.useFullPath,
        _useZIndex.useZIndex
    ];
});
_c = SubMenu;
var _default = SubMenu;
var _c;
$RefreshReg$(_c, "SubMenu");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    SiderContext: function() {
        return SiderContext;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _rcmenu = __mako_require__("node_modules/rc-menu/es/index.js");
var _menu = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/menu.tsx"));
var _MenuDivider = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuDivider.tsx"));
var _MenuItem = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuItem.tsx"));
var _SubMenu = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/SubMenu.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const SiderContext = /*#__PURE__*/ _react.createContext({});
const Menu = /*#__PURE__*/ _s((0, _react.forwardRef)(_c = _s((props, ref)=>{
    _s();
    const menuRef = (0, _react.useRef)(null);
    const context = _react.useContext(SiderContext);
    (0, _react.useImperativeHandle)(ref, ()=>({
            menu: menuRef.current,
            focus: (options)=>{
                var _menuRef_current;
                (_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 || _menuRef_current.focus(options);
            }
        }));
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_menu.default, {
        ref: menuRef,
        ...props,
        ...context
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/index.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}, "9gcHKt2zziXvTV+TOgY76H2WVEs=")), "9gcHKt2zziXvTV+TOgY76H2WVEs=");
_c1 = Menu;
Menu.Item = _MenuItem.default;
Menu.SubMenu = _SubMenu.default;
Menu.Divider = _MenuDivider.default;
Menu.ItemGroup = _rcmenu.ItemGroup;
Menu.displayName = 'Menu';
var _default = Menu;
var _c;
var _c1;
$RefreshReg$(_c, "Menu$forwardRef");
$RefreshReg$(_c1, "Menu");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/menu.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rcmenu = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-menu/es/index.js"));
var _useEvent = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/hooks/useEvent.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/omit.js"));
var _motion = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/motion.ts"));
var _reactNode = __mako_require__("src/components/VirtualTable/_util/reactNode.ts");
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _configprovider = __mako_require__("src/components/VirtualTable/config-provider/index.tsx");
var _useCSSVarCls = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/hooks/useCSSVarCls.ts"));
var _MenuContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuContext.tsx"));
var _MenuDivider = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuDivider.tsx"));
var _MenuItem = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/MenuItem.tsx"));
var _OverrideContext = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/OverrideContext.tsx"));
var _style = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/style/index.ts"));
var _SubMenu = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/SubMenu.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function isEmptyIcon(icon) {
    return icon === null || icon === false;
}
const MENU_COMPONENTS = {
    item: _MenuItem.default,
    submenu: _SubMenu.default,
    divider: _MenuDivider.default
};
const InternalMenu = /*#__PURE__*/ _s((0, _react.forwardRef)(_c = _s((props, ref)=>{
    var _overrideObj_validator;
    _s();
    const override = _react.useContext(_OverrideContext.default);
    const overrideObj = override || {};
    const { getPrefixCls, getPopupContainer, direction, menu } = _react.useContext(_configprovider.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const { prefixCls: customizePrefixCls, className, style, theme = 'light', expandIcon, _internalDisableMenuItemTitleTooltip, inlineCollapsed, siderCollapsed, rootClassName, mode, selectable, onClick, overflowedIndicatorPopupClassName, ...restProps } = props;
    const passedProps = (0, _omit.default)(restProps, [
        'collapsedWidth'
    ]);
    {
        const warning = (0, _warning.devUseWarning)('Menu');
        warning(!('inlineCollapsed' in props && mode !== 'inline'), 'usage', '`inlineCollapsed` should only be used when `mode` is inline.');
        warning.deprecated('items' in props && !props.children, 'children', 'items');
    }
    (_overrideObj_validator = overrideObj.validator) === null || _overrideObj_validator === void 0 || _overrideObj_validator.call(overrideObj, {
        mode
    });
    // ========================== Click ==========================
    // Tell dropdown that item clicked
    const onItemClick = (0, _useEvent.default)((...args)=>{
        var _overrideObj_onClick;
        onClick === null || onClick === void 0 || onClick(...args);
        (_overrideObj_onClick = overrideObj.onClick) === null || _overrideObj_onClick === void 0 || _overrideObj_onClick.call(overrideObj);
    });
    // ========================== Mode ===========================
    const mergedMode = overrideObj.mode || mode;
    // ======================= Selectable ========================
    const mergedSelectable = selectable ?? overrideObj.selectable;
    // ======================== Collapsed ========================
    // Inline Collapsed
    const mergedInlineCollapsed = inlineCollapsed ?? siderCollapsed;
    const defaultMotions = {
        horizontal: {
            motionName: `${rootPrefixCls}-slide-up`
        },
        inline: (0, _motion.default)(rootPrefixCls),
        other: {
            motionName: `${rootPrefixCls}-zoom-big`
        }
    };
    const prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
    const rootCls = (0, _useCSSVarCls.default)(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls, rootCls, !override);
    const menuClassName = (0, _classnames.default)(`${prefixCls}-${theme}`, menu === null || menu === void 0 ? void 0 : menu.className, className);
    // ====================== ExpandIcon ========================
    const mergedExpandIcon = _react.useMemo(()=>{
        var _mergedIcon_props;
        if (typeof expandIcon === 'function' || isEmptyIcon(expandIcon)) return expandIcon || null;
        if (typeof overrideObj.expandIcon === 'function' || isEmptyIcon(overrideObj.expandIcon)) return overrideObj.expandIcon || null;
        if (typeof (menu === null || menu === void 0 ? void 0 : menu.expandIcon) === 'function' || isEmptyIcon(menu === null || menu === void 0 ? void 0 : menu.expandIcon)) return (menu === null || menu === void 0 ? void 0 : menu.expandIcon) || null;
        const mergedIcon = expandIcon ?? (overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon) ?? (menu === null || menu === void 0 ? void 0 : menu.expandIcon);
        return (0, _reactNode.cloneElement)(mergedIcon, {
            className: (0, _classnames.default)(`${prefixCls}-submenu-expand-icon`, /*#__PURE__*/ _react.isValidElement(mergedIcon) ? (_mergedIcon_props = mergedIcon.props) === null || _mergedIcon_props === void 0 ? void 0 : _mergedIcon_props.className : undefined)
        });
    }, [
        expandIcon,
        overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon,
        menu === null || menu === void 0 ? void 0 : menu.expandIcon,
        prefixCls
    ]);
    // ======================== Context ==========================
    const contextValue = _react.useMemo(()=>({
            prefixCls,
            inlineCollapsed: mergedInlineCollapsed || false,
            direction,
            firstLevel: true,
            theme,
            mode: mergedMode,
            disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
        }), [
        prefixCls,
        mergedInlineCollapsed,
        direction,
        _internalDisableMenuItemTitleTooltip,
        theme
    ]);
    // ========================= Render ==========================
    return wrapCSSVar(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_OverrideContext.default.Provider, {
        value: null,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_MenuContext.default.Provider, {
            value: contextValue,
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_rcmenu.default, {
                getPopupContainer: getPopupContainer,
                // overflowedIndicator={<Icon type="ellipsis" />}
                overflowedIndicator: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.EllipsisOutlined, {}, void 0, false, {
                    fileName: "src/components/VirtualTable/menu/menu.tsx",
                    lineNumber: 170,
                    columnNumber: 32
                }, void 0),
                overflowedIndicatorPopupClassName: (0, _classnames.default)(prefixCls, `${prefixCls}-${theme}`, overflowedIndicatorPopupClassName),
                mode: mergedMode,
                selectable: mergedSelectable,
                onClick: onItemClick,
                ...passedProps,
                inlineCollapsed: mergedInlineCollapsed,
                style: {
                    ...menu === null || menu === void 0 ? void 0 : menu.style,
                    ...style
                },
                className: menuClassName,
                prefixCls: prefixCls,
                direction: direction,
                defaultMotions: defaultMotions,
                expandIcon: mergedExpandIcon,
                ref: ref,
                rootClassName: (0, _classnames.default)(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls),
                _internalComponents: MENU_COMPONENTS
            }, void 0, false, {
                fileName: "src/components/VirtualTable/menu/menu.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/components/VirtualTable/menu/menu.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/menu/menu.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this));
}, "vfbAjesiIQg9yvWPRtIM/0EWdH8=", false, function() {
    return [
        _useEvent.default,
        _useCSSVarCls.default,
        _style.default
    ];
})), "vfbAjesiIQg9yvWPRtIM/0EWdH8=", false, function() {
    return [
        _useEvent.default,
        _useCSSVarCls.default,
        _style.default
    ];
});
_c1 = InternalMenu;
var _default = InternalMenu;
var _c;
var _c1;
$RefreshReg$(_c, "InternalMenu$forwardRef");
$RefreshReg$(_c1, "InternalMenu");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/style/horizontal.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getHorizontalStyle = (token)=>{
    const { componentCls, motionDurationSlow, horizontalLineHeight, colorSplit, lineWidth, lineType, itemPaddingInline } = token;
    return {
        [`${componentCls}-horizontal`]: {
            lineHeight: horizontalLineHeight,
            border: 0,
            borderBottom: `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${colorSplit}`,
            boxShadow: 'none',
            '&::after': {
                display: 'block',
                clear: 'both',
                height: 0,
                content: '"\\20"'
            },
            // ======================= Item =======================
            [`${componentCls}-item, ${componentCls}-submenu`]: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'bottom',
                paddingInline: itemPaddingInline
            },
            [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
                backgroundColor: 'transparent'
            },
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
                transition: [
                    `border-color ${motionDurationSlow}`,
                    `background ${motionDurationSlow}`
                ].join(',')
            },
            // ===================== Sub Menu =====================
            [`${componentCls}-submenu-arrow`]: {
                display: 'none'
            }
        }
    };
};
var _default = getHorizontalStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/style/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return Component$$;
    },
    prepareComponentToken: function() {
        return prepareComponentToken;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var _motion = __mako_require__("src/components/VirtualTable/style/motion/index.ts");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var _horizontal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/style/horizontal.ts"));
var _rtl = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/style/rtl.ts"));
var _theme = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/style/theme.ts"));
var _vertical = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/style/vertical.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const genMenuItemStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionDurationMid, motionEaseInOut, motionEaseOut, iconCls, iconSize, iconMarginInlineEnd } = token;
    return {
        // >>>>> Item
        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            position: 'relative',
            display: 'block',
            margin: 0,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: [
                `border-color ${motionDurationSlow}`,
                `background ${motionDurationSlow}`,
                `padding calc(${motionDurationSlow} + 0.1s) ${motionEaseInOut}`
            ].join(','),
            [`${componentCls}-item-icon, ${iconCls}`]: {
                minWidth: iconSize,
                fontSize: iconSize,
                transition: [
                    `font-size ${motionDurationMid} ${motionEaseOut}`,
                    `margin ${motionDurationSlow} ${motionEaseInOut}`,
                    `color ${motionDurationSlow}`
                ].join(','),
                '+ span': {
                    marginInlineStart: iconMarginInlineEnd,
                    opacity: 1,
                    transition: [
                        `opacity ${motionDurationSlow} ${motionEaseInOut}`,
                        `margin ${motionDurationSlow}`,
                        `color ${motionDurationSlow}`
                    ].join(',')
                }
            },
            [`${componentCls}-item-icon`]: {
                ...(0, _style.resetIcon)()
            },
            [`&${componentCls}-item-only-child`]: {
                [`> ${iconCls}, > ${componentCls}-item-icon`]: {
                    marginInlineEnd: 0
                }
            }
        },
        // Disabled state sets text to gray and nukes hover/tab effects
        [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
            background: 'none !important',
            cursor: 'not-allowed',
            '&::after': {
                borderColor: 'transparent !important'
            },
            a: {
                color: 'inherit !important',
                cursor: 'not-allowed',
                pointerEvents: 'none'
            },
            [`> ${componentCls}-submenu-title`]: {
                color: 'inherit !important',
                cursor: 'not-allowed'
            }
        }
    };
};
const genSubMenuArrowStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionEaseInOut, borderRadius, menuArrowSize, menuArrowOffset } = token;
    return {
        [`${componentCls}-submenu`]: {
            '&-expand-icon, &-arrow': {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: token.margin,
                width: menuArrowSize,
                color: 'currentcolor',
                transform: 'translateY(-50%)',
                transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
            },
            '&-arrow': {
                // →
                '&::before, &::after': {
                    position: 'absolute',
                    width: token.calc(menuArrowSize).mul(0.6).equal(),
                    height: token.calc(menuArrowSize).mul(0.15).equal(),
                    backgroundColor: 'currentcolor',
                    borderRadius,
                    transition: [
                        `background ${motionDurationSlow} ${motionEaseInOut}`,
                        `transform ${motionDurationSlow} ${motionEaseInOut}`,
                        `top ${motionDurationSlow} ${motionEaseInOut}`,
                        `color ${motionDurationSlow} ${motionEaseInOut}`
                    ].join(','),
                    content: '""'
                },
                '&::before': {
                    transform: `rotate(45deg) translateY(${(0, _cssinjs.unit)(token.calc(menuArrowOffset).mul(-1).equal())})`
                },
                '&::after': {
                    transform: `rotate(-45deg) translateY(${(0, _cssinjs.unit)(menuArrowOffset)})`
                }
            }
        }
    };
};
// =============================== Base ===============================
const getBaseStyle = (token)=>{
    const { antCls, componentCls, fontSize, motionDurationSlow, motionDurationMid, motionEaseInOut, paddingXS, padding, colorSplit, lineWidth, zIndexPopup, borderRadiusLG, subMenuItemBorderRadius, menuArrowSize, menuArrowOffset, lineType, groupTitleLineHeight, groupTitleFontSize } = token;
    return [
        // Misc
        {
            '': {
                [componentCls]: {
                    ...(0, _style.clearFix)(),
                    // Hidden
                    '&-hidden': {
                        display: 'none'
                    }
                }
            },
            [`${componentCls}-submenu-hidden`]: {
                display: 'none'
            }
        },
        {
            [componentCls]: {
                ...(0, _style.resetComponent)(token),
                ...(0, _style.clearFix)(),
                marginBottom: 0,
                paddingInlineStart: 0,
                fontSize,
                lineHeight: 0,
                listStyle: 'none',
                outline: 'none',
                // Magic cubic here but smooth transition
                transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
                'ul, ol': {
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                // Overflow ellipsis
                '&-overflow': {
                    display: 'flex',
                    [`${componentCls}-item`]: {
                        flex: 'none'
                    }
                },
                [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
                    borderRadius: token.itemBorderRadius
                },
                [`${componentCls}-item-group-title`]: {
                    padding: `${(0, _cssinjs.unit)(paddingXS)} ${(0, _cssinjs.unit)(padding)}`,
                    fontSize: groupTitleFontSize,
                    lineHeight: groupTitleLineHeight,
                    transition: `all ${motionDurationSlow}`
                },
                [`&-horizontal ${componentCls}-submenu`]: {
                    transition: [
                        `border-color ${motionDurationSlow} ${motionEaseInOut}`,
                        `background ${motionDurationSlow} ${motionEaseInOut}`
                    ].join(',')
                },
                [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
                    transition: [
                        `border-color ${motionDurationSlow} ${motionEaseInOut}`,
                        `background ${motionDurationSlow} ${motionEaseInOut}`,
                        `padding ${motionDurationMid} ${motionEaseInOut}`
                    ].join(',')
                },
                [`${componentCls}-submenu ${componentCls}-sub`]: {
                    cursor: 'initial',
                    transition: [
                        `background ${motionDurationSlow} ${motionEaseInOut}`,
                        `padding ${motionDurationSlow} ${motionEaseInOut}`
                    ].join(',')
                },
                [`${componentCls}-title-content`]: {
                    transition: `color ${motionDurationSlow}`,
                    '&-with-extra': {
                        display: 'inline-flex',
                        alignItems: 'center',
                        width: '100%'
                    },
                    // https://github.com/ant-design/ant-design/issues/41143
                    [`> ${antCls}-typography-ellipsis-single-line`]: {
                        display: 'inline',
                        verticalAlign: 'unset'
                    },
                    [`${componentCls}-item-extra`]: {
                        marginInlineStart: 'auto',
                        paddingInlineStart: token.padding
                    }
                },
                [`${componentCls}-item a`]: {
                    '&::before': {
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'transparent',
                        content: '""'
                    }
                },
                // Removed a Badge related style seems it's safe
                // https://github.com/ant-design/ant-design/issues/19809
                // >>>>> Divider
                [`${componentCls}-item-divider`]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: colorSplit,
                    borderStyle: lineType,
                    borderWidth: 0,
                    borderTopWidth: lineWidth,
                    marginBlock: lineWidth,
                    padding: 0,
                    '&-dashed': {
                        borderStyle: 'dashed'
                    }
                },
                // Item
                ...genMenuItemStyle(token),
                [`${componentCls}-item-group`]: {
                    [`${componentCls}-item-group-list`]: {
                        margin: 0,
                        padding: 0,
                        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
                            paddingInline: `${(0, _cssinjs.unit)(token.calc(fontSize).mul(2).equal())} ${(0, _cssinjs.unit)(padding)}`
                        }
                    }
                },
                // ======================= Sub Menu =======================
                '&-submenu': {
                    '&-popup': {
                        position: 'absolute',
                        zIndex: zIndexPopup,
                        borderRadius: borderRadiusLG,
                        boxShadow: 'none',
                        transformOrigin: '0 0',
                        [`&${componentCls}-submenu`]: {
                            background: 'transparent'
                        },
                        // https://github.com/ant-design/ant-design/issues/13955
                        '&::before': {
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            content: '""'
                        },
                        [`> ${componentCls}`]: {
                            borderRadius: borderRadiusLG,
                            ...genMenuItemStyle(token),
                            ...genSubMenuArrowStyle(token),
                            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
                                borderRadius: subMenuItemBorderRadius
                            },
                            [`${componentCls}-submenu-title::after`]: {
                                transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
                            }
                        }
                    },
                    [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
                        transformOrigin: '100% 0'
                    },
                    [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
                        transformOrigin: '100% 100%'
                    },
                    [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
                        transformOrigin: '0 100%'
                    },
                    [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
                        transformOrigin: '0 0'
                    },
                    [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
                        paddingInlineEnd: token.paddingXS
                    },
                    [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
                        paddingInlineStart: token.paddingXS
                    },
                    [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
                        paddingBottom: token.paddingXS
                    },
                    [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
                        paddingTop: token.paddingXS
                    }
                },
                ...genSubMenuArrowStyle(token),
                [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
                    // ↓
                    '&::before': {
                        transform: `rotate(-45deg) translateX(${(0, _cssinjs.unit)(menuArrowOffset)})`
                    },
                    '&::after': {
                        transform: `rotate(45deg) translateX(${(0, _cssinjs.unit)(token.calc(menuArrowOffset).mul(-1).equal())})`
                    }
                },
                [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
                    // ↑
                    transform: `translateY(${(0, _cssinjs.unit)(token.calc(menuArrowSize).mul(0.2).mul(-1).equal())})`,
                    '&::after': {
                        transform: `rotate(-45deg) translateX(${(0, _cssinjs.unit)(token.calc(menuArrowOffset).mul(-1).equal())})`
                    },
                    '&::before': {
                        transform: `rotate(45deg) translateX(${(0, _cssinjs.unit)(menuArrowOffset)})`
                    }
                }
            }
        },
        // Integration with header element so menu items have the same height
        {
            [`${antCls}-layout-header`]: {
                [componentCls]: {
                    lineHeight: 'inherit'
                }
            }
        }
    ];
};
const prepareComponentToken = (token)=>{
    const { colorPrimary, colorError, colorTextDisabled, colorErrorBg, colorText, colorTextDescription, colorBgContainer, colorFillAlter, colorFillContent, lineWidth, lineWidthBold, controlItemBgActive, colorBgTextHover, controlHeightLG, lineHeight, colorBgElevated, marginXXS, padding, fontSize, controlHeightSM, fontSizeLG, colorTextLightSolid, colorErrorHover } = token;
    const activeBarWidth = token.activeBarWidth ?? 0;
    const activeBarBorderWidth = token.activeBarBorderWidth ?? lineWidth;
    const itemMarginInline = token.itemMarginInline ?? token.marginXXS;
    const colorTextDark = new _fastcolor.FastColor(colorTextLightSolid).setA(0.65).toRgbString();
    return {
        dropdownWidth: 160,
        zIndexPopup: token.zIndexPopupBase + 50,
        radiusItem: token.borderRadiusLG,
        itemBorderRadius: token.borderRadiusLG,
        radiusSubMenuItem: token.borderRadiusSM,
        subMenuItemBorderRadius: token.borderRadiusSM,
        colorItemText: colorText,
        itemColor: colorText,
        colorItemTextHover: colorText,
        itemHoverColor: colorText,
        colorItemTextHoverHorizontal: colorPrimary,
        horizontalItemHoverColor: colorPrimary,
        colorGroupTitle: colorTextDescription,
        groupTitleColor: colorTextDescription,
        colorItemTextSelected: colorPrimary,
        itemSelectedColor: colorPrimary,
        subMenuItemSelectedColor: colorPrimary,
        colorItemTextSelectedHorizontal: colorPrimary,
        horizontalItemSelectedColor: colorPrimary,
        colorItemBg: colorBgContainer,
        itemBg: colorBgContainer,
        colorItemBgHover: colorBgTextHover,
        itemHoverBg: colorBgTextHover,
        colorItemBgActive: colorFillContent,
        itemActiveBg: controlItemBgActive,
        colorSubItemBg: colorFillAlter,
        subMenuItemBg: colorFillAlter,
        colorItemBgSelected: controlItemBgActive,
        itemSelectedBg: controlItemBgActive,
        colorItemBgSelectedHorizontal: 'transparent',
        horizontalItemSelectedBg: 'transparent',
        colorActiveBarWidth: 0,
        activeBarWidth,
        colorActiveBarHeight: lineWidthBold,
        activeBarHeight: lineWidthBold,
        colorActiveBarBorderSize: lineWidth,
        activeBarBorderWidth,
        // Disabled
        colorItemTextDisabled: colorTextDisabled,
        itemDisabledColor: colorTextDisabled,
        // Danger
        colorDangerItemText: colorError,
        dangerItemColor: colorError,
        colorDangerItemTextHover: colorError,
        dangerItemHoverColor: colorError,
        colorDangerItemTextSelected: colorError,
        dangerItemSelectedColor: colorError,
        colorDangerItemBgActive: colorErrorBg,
        dangerItemActiveBg: colorErrorBg,
        colorDangerItemBgSelected: colorErrorBg,
        dangerItemSelectedBg: colorErrorBg,
        itemMarginInline,
        horizontalItemBorderRadius: 0,
        horizontalItemHoverBg: 'transparent',
        itemHeight: controlHeightLG,
        groupTitleLineHeight: lineHeight,
        collapsedWidth: controlHeightLG * 2,
        popupBg: colorBgElevated,
        itemMarginBlock: marginXXS,
        itemPaddingInline: padding,
        horizontalLineHeight: `${controlHeightLG * 1.15}px`,
        iconSize: fontSize,
        iconMarginInlineEnd: controlHeightSM - fontSize,
        collapsedIconSize: fontSizeLG,
        groupTitleFontSize: fontSize,
        // Disabled
        darkItemDisabledColor: new _fastcolor.FastColor(colorTextLightSolid).setA(0.25).toRgbString(),
        // Dark
        darkItemColor: colorTextDark,
        darkDangerItemColor: colorError,
        darkItemBg: '#001529',
        darkPopupBg: '#001529',
        darkSubMenuItemBg: '#000c17',
        darkItemSelectedColor: colorTextLightSolid,
        darkItemSelectedBg: colorPrimary,
        darkDangerItemSelectedBg: colorError,
        darkItemHoverBg: 'transparent',
        darkGroupTitleColor: colorTextDark,
        darkItemHoverColor: colorTextLightSolid,
        darkDangerItemHoverColor: colorErrorHover,
        darkDangerItemSelectedColor: colorTextLightSolid,
        darkDangerItemActiveBg: colorError,
        // internal
        itemWidth: activeBarWidth ? `calc(100% + ${activeBarBorderWidth}px)` : `calc(100% - ${itemMarginInline * 2}px)`
    };
};
function Component$$(prefixCls, rootCls = prefixCls, injectStyle = true) {
    _s();
    const useStyle = (0, _internal.genStyleHooks)('Menu', (token)=>{
        const { colorBgElevated, controlHeightLG, fontSize, darkItemColor, darkDangerItemColor, darkItemBg, darkSubMenuItemBg, darkItemSelectedColor, darkItemSelectedBg, darkDangerItemSelectedBg, darkItemHoverBg, darkGroupTitleColor, darkItemHoverColor, darkItemDisabledColor, darkDangerItemHoverColor, darkDangerItemSelectedColor, darkDangerItemActiveBg, popupBg, darkPopupBg } = token;
        const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
        // Menu Token
        const menuToken = (0, _internal.mergeToken)(token, {
            menuArrowSize,
            menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
            menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
            menuSubMenuBg: colorBgElevated,
            calc: token.calc,
            popupBg
        });
        const menuDarkToken = (0, _internal.mergeToken)(menuToken, {
            itemColor: darkItemColor,
            itemHoverColor: darkItemHoverColor,
            groupTitleColor: darkGroupTitleColor,
            itemSelectedColor: darkItemSelectedColor,
            subMenuItemSelectedColor: darkItemSelectedColor,
            itemBg: darkItemBg,
            popupBg: darkPopupBg,
            subMenuItemBg: darkSubMenuItemBg,
            itemActiveBg: 'transparent',
            itemSelectedBg: darkItemSelectedBg,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: darkItemHoverBg,
            // Disabled
            itemDisabledColor: darkItemDisabledColor,
            // Danger
            dangerItemColor: darkDangerItemColor,
            dangerItemHoverColor: darkDangerItemHoverColor,
            dangerItemSelectedColor: darkDangerItemSelectedColor,
            dangerItemActiveBg: darkDangerItemActiveBg,
            dangerItemSelectedBg: darkDangerItemSelectedBg,
            menuSubMenuBg: darkSubMenuItemBg,
            // Horizontal
            horizontalItemSelectedColor: darkItemSelectedColor,
            horizontalItemSelectedBg: darkItemSelectedBg
        });
        return [
            // Basic
            getBaseStyle(menuToken),
            // Horizontal
            (0, _horizontal.default)(menuToken),
            // Vertical
            (0, _vertical.default)(menuToken),
            // Theme
            (0, _theme.default)(menuToken, 'light'),
            (0, _theme.default)(menuDarkToken, 'dark'),
            // RTL
            (0, _rtl.default)(menuToken),
            // Motion
            (0, _motion.genCollapseMotion)(menuToken),
            (0, _motion.initSlideMotion)(menuToken, 'slide-up'),
            (0, _motion.initSlideMotion)(menuToken, 'slide-down'),
            (0, _motion.initZoomMotion)(menuToken, 'zoom-big')
        ];
    }, prepareComponentToken, {
        deprecatedTokens: [
            [
                'colorGroupTitle',
                'groupTitleColor'
            ],
            [
                'radiusItem',
                'itemBorderRadius'
            ],
            [
                'radiusSubMenuItem',
                'subMenuItemBorderRadius'
            ],
            [
                'colorItemText',
                'itemColor'
            ],
            [
                'colorItemTextHover',
                'itemHoverColor'
            ],
            [
                'colorItemTextHoverHorizontal',
                'horizontalItemHoverColor'
            ],
            [
                'colorItemTextSelected',
                'itemSelectedColor'
            ],
            [
                'colorItemTextSelectedHorizontal',
                'horizontalItemSelectedColor'
            ],
            [
                'colorItemTextDisabled',
                'itemDisabledColor'
            ],
            [
                'colorDangerItemText',
                'dangerItemColor'
            ],
            [
                'colorDangerItemTextHover',
                'dangerItemHoverColor'
            ],
            [
                'colorDangerItemTextSelected',
                'dangerItemSelectedColor'
            ],
            [
                'colorDangerItemBgActive',
                'dangerItemActiveBg'
            ],
            [
                'colorDangerItemBgSelected',
                'dangerItemSelectedBg'
            ],
            [
                'colorItemBg',
                'itemBg'
            ],
            [
                'colorItemBgHover',
                'itemHoverBg'
            ],
            [
                'colorSubItemBg',
                'subMenuItemBg'
            ],
            [
                'colorItemBgActive',
                'itemActiveBg'
            ],
            [
                'colorItemBgSelectedHorizontal',
                'horizontalItemSelectedBg'
            ],
            [
                'colorActiveBarWidth',
                'activeBarWidth'
            ],
            [
                'colorActiveBarHeight',
                'activeBarHeight'
            ],
            [
                'colorActiveBarBorderSize',
                'activeBarBorderWidth'
            ],
            [
                'colorItemBgSelected',
                'itemSelectedBg'
            ]
        ],
        // Dropdown will handle menu style self. We do not need to handle this.
        injectStyle,
        unitless: {
            groupTitleLineHeight: true
        }
    });
    return useStyle(prefixCls, rootCls);
}
_s(Component$$, "AniA8RSjZxnebI5dYsYaENQ1HaE=", true);
_c = Component$$;
var _c;
$RefreshReg$(_c, "Component$$");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/style/rtl.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getRTLStyle = ({ componentCls, menuArrowOffset, calc })=>({
        [`${componentCls}-rtl`]: {
            direction: 'rtl'
        },
        [`${componentCls}-submenu-rtl`]: {
            transformOrigin: '100% 0'
        },
        // Vertical Arrow
        [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
            [`${componentCls}-submenu-arrow`]: {
                '&::before': {
                    transform: `rotate(-45deg) translateY(${(0, _cssinjs.unit)(calc(menuArrowOffset).mul(-1).equal())})`
                },
                '&::after': {
                    transform: `rotate(45deg) translateY(${(0, _cssinjs.unit)(menuArrowOffset)})`
                }
            }
        }
    });
var _default = getRTLStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/style/theme.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const accessibilityFocus = (token)=>(0, _style.genFocusOutline)(token);
const getThemeStyle = (token, themeSuffix)=>{
    const { componentCls, itemColor, itemSelectedColor, subMenuItemSelectedColor, groupTitleColor, itemBg, subMenuItemBg, itemSelectedBg, activeBarHeight, activeBarWidth, activeBarBorderWidth, motionDurationSlow, motionEaseInOut, motionEaseOut, itemPaddingInline, motionDurationMid, itemHoverColor, lineType, colorSplit, // Disabled
    itemDisabledColor, // Danger
    dangerItemColor, dangerItemHoverColor, dangerItemSelectedColor, dangerItemActiveBg, dangerItemSelectedBg, // Bg
    popupBg, itemHoverBg, itemActiveBg, menuSubMenuBg, // Horizontal
    horizontalItemSelectedColor, horizontalItemSelectedBg, horizontalItemBorderRadius, horizontalItemHoverBg } = token;
    return {
        [`${componentCls}-${themeSuffix}, ${componentCls}-${themeSuffix} > ${componentCls}`]: {
            color: itemColor,
            background: itemBg,
            [`&${componentCls}-root:focus-visible`]: {
                ...accessibilityFocus(token)
            },
            // ======================== Item ========================
            [`${componentCls}-item`]: {
                '&-group-title, &-extra': {
                    color: groupTitleColor
                }
            },
            [`${componentCls}-submenu-selected > ${componentCls}-submenu-title`]: {
                color: subMenuItemSelectedColor
            },
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
                color: itemColor,
                [`&:not(${componentCls}-item-disabled):focus-visible`]: {
                    ...accessibilityFocus(token)
                }
            },
            // Disabled
            [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
                color: `${itemDisabledColor} !important`
            },
            // Hover
            [`${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
                [`&:hover, > ${componentCls}-submenu-title:hover`]: {
                    color: itemHoverColor
                }
            },
            [`&:not(${componentCls}-horizontal)`]: {
                [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
                    '&:hover': {
                        backgroundColor: itemHoverBg
                    },
                    '&:active': {
                        backgroundColor: itemActiveBg
                    }
                },
                [`${componentCls}-submenu-title`]: {
                    '&:hover': {
                        backgroundColor: itemHoverBg
                    },
                    '&:active': {
                        backgroundColor: itemActiveBg
                    }
                }
            },
            // Danger - only Item has
            [`${componentCls}-item-danger`]: {
                color: dangerItemColor,
                [`&${componentCls}-item:hover`]: {
                    [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
                        color: dangerItemHoverColor
                    }
                },
                [`&${componentCls}-item:active`]: {
                    background: dangerItemActiveBg
                }
            },
            [`${componentCls}-item a`]: {
                '&, &:hover': {
                    color: 'inherit'
                }
            },
            [`${componentCls}-item-selected`]: {
                color: itemSelectedColor,
                // Danger
                [`&${componentCls}-item-danger`]: {
                    color: dangerItemSelectedColor
                },
                'a, a:hover': {
                    color: 'inherit'
                }
            },
            [`& ${componentCls}-item-selected`]: {
                backgroundColor: itemSelectedBg,
                // Danger
                [`&${componentCls}-item-danger`]: {
                    backgroundColor: dangerItemSelectedBg
                }
            },
            [`&${componentCls}-submenu > ${componentCls}`]: {
                backgroundColor: menuSubMenuBg
            },
            // ===== 设置浮层的颜色 =======
            // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
            [`&${componentCls}-popup > ${componentCls}`]: {
                backgroundColor: popupBg
            },
            [`&${componentCls}-submenu-popup > ${componentCls}`]: {
                backgroundColor: popupBg
            },
            // ===== 设置浮层的颜色 end =======
            // ====================== Horizontal ======================
            [`&${componentCls}-horizontal`]: {
                ...themeSuffix === 'dark' ? {
                    borderBottom: 0
                } : {},
                [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
                    top: activeBarBorderWidth,
                    marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
                    marginBottom: 0,
                    borderRadius: horizontalItemBorderRadius,
                    '&::after': {
                        position: 'absolute',
                        insetInline: itemPaddingInline,
                        bottom: 0,
                        borderBottom: `${(0, _cssinjs.unit)(activeBarHeight)} solid transparent`,
                        transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
                        content: '""'
                    },
                    '&:hover, &-active, &-open': {
                        background: horizontalItemHoverBg,
                        '&::after': {
                            borderBottomWidth: activeBarHeight,
                            borderBottomColor: horizontalItemSelectedColor
                        }
                    },
                    '&-selected': {
                        color: horizontalItemSelectedColor,
                        backgroundColor: horizontalItemSelectedBg,
                        '&:hover': {
                            backgroundColor: horizontalItemSelectedBg
                        },
                        '&::after': {
                            borderBottomWidth: activeBarHeight,
                            borderBottomColor: horizontalItemSelectedColor
                        }
                    }
                }
            },
            // ================== Inline & Vertical ===================
            //
            [`&${componentCls}-root`]: {
                [`&${componentCls}-inline, &${componentCls}-vertical`]: {
                    borderInlineEnd: `${(0, _cssinjs.unit)(activeBarBorderWidth)} ${lineType} ${colorSplit}`
                }
            },
            // ======================== Inline ========================
            [`&${componentCls}-inline`]: {
                // Sub
                [`${componentCls}-sub${componentCls}-inline`]: {
                    background: subMenuItemBg
                },
                [`${componentCls}-item`]: {
                    position: 'relative',
                    '&::after': {
                        position: 'absolute',
                        insetBlock: 0,
                        insetInlineEnd: 0,
                        borderInlineEnd: `${(0, _cssinjs.unit)(activeBarWidth)} solid ${itemSelectedColor}`,
                        transform: 'scaleY(0.0001)',
                        opacity: 0,
                        transition: [
                            `transform ${motionDurationMid} ${motionEaseOut}`,
                            `opacity ${motionDurationMid} ${motionEaseOut}`
                        ].join(','),
                        content: '""'
                    },
                    // Danger
                    [`&${componentCls}-item-danger`]: {
                        '&::after': {
                            borderInlineEndColor: dangerItemSelectedColor
                        }
                    }
                },
                [`${componentCls}-selected, ${componentCls}-item-selected`]: {
                    '&::after': {
                        transform: 'scaleY(1)',
                        opacity: 1,
                        transition: [
                            `transform ${motionDurationMid} ${motionEaseInOut}`,
                            `opacity ${motionDurationMid} ${motionEaseInOut}`
                        ].join(',')
                    }
                }
            }
        }
    };
};
var _default = getThemeStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/menu/style/vertical.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getVerticalInlineStyle = (token)=>{
    const { componentCls, itemHeight, itemMarginInline, padding, menuArrowSize, marginXS, itemMarginBlock, itemWidth, itemPaddingInline } = token;
    const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
    return {
        [`${componentCls}-item`]: {
            position: 'relative',
            overflow: 'hidden'
        },
        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            height: itemHeight,
            lineHeight: (0, _cssinjs.unit)(itemHeight),
            paddingInline: itemPaddingInline,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginInline: itemMarginInline,
            marginBlock: itemMarginBlock,
            width: itemWidth
        },
        [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
            height: itemHeight,
            lineHeight: (0, _cssinjs.unit)(itemHeight)
        },
        [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
            paddingInlineEnd: paddingWithArrow
        }
    };
};
const getVerticalStyle = (token)=>{
    const { componentCls, iconCls, itemHeight, colorTextLightSolid, dropdownWidth, controlHeightLG, motionEaseOut, paddingXL, itemMarginInline, fontSizeLG, motionDurationFast, motionDurationSlow, paddingXS, boxShadowSecondary, collapsedWidth, collapsedIconSize } = token;
    const inlineItemStyle = {
        height: itemHeight,
        lineHeight: (0, _cssinjs.unit)(itemHeight),
        listStylePosition: 'inside',
        listStyleType: 'disc'
    };
    return [
        {
            [componentCls]: {
                '&-inline, &-vertical': {
                    [`&${componentCls}-root`]: {
                        boxShadow: 'none'
                    },
                    ...getVerticalInlineStyle(token)
                }
            },
            [`${componentCls}-submenu-popup`]: {
                [`${componentCls}-vertical`]: {
                    ...getVerticalInlineStyle(token),
                    boxShadow: boxShadowSecondary
                }
            }
        },
        // Vertical only
        {
            [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
                minWidth: dropdownWidth,
                maxHeight: `calc(100vh - ${(0, _cssinjs.unit)(token.calc(controlHeightLG).mul(2.5).equal())})`,
                padding: '0',
                overflow: 'hidden',
                borderInlineEnd: 0,
                // https://github.com/ant-design/ant-design/issues/22244
                // https://github.com/ant-design/ant-design/issues/26812
                "&:not([class*='-active'])": {
                    overflowX: 'hidden',
                    overflowY: 'auto'
                }
            }
        },
        // Inline Only
        {
            [`${componentCls}-inline`]: {
                width: '100%',
                // Motion enhance for first level
                [`&${componentCls}-root`]: {
                    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
                        display: 'flex',
                        alignItems: 'center',
                        transition: [
                            `border-color ${motionDurationSlow}`,
                            `background ${motionDurationSlow}`,
                            `padding ${motionDurationFast} ${motionEaseOut}`
                        ].join(','),
                        [`> ${componentCls}-title-content`]: {
                            flex: 'auto',
                            minWidth: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        },
                        '> *': {
                            flex: 'none'
                        }
                    }
                },
                // >>>>> Sub
                [`${componentCls}-sub${componentCls}-inline`]: {
                    padding: 0,
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 'none',
                    [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
                    [`& ${componentCls}-item-group-title`]: {
                        paddingInlineStart: paddingXL
                    }
                },
                // >>>>> Item
                [`${componentCls}-item`]: inlineItemStyle
            }
        },
        // Inline Collapse Only
        {
            [`${componentCls}-inline-collapsed`]: {
                width: collapsedWidth,
                [`&${componentCls}-root`]: {
                    [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
                        [`> ${componentCls}-inline-collapsed-noicon`]: {
                            fontSize: fontSizeLG,
                            textAlign: 'center'
                        }
                    }
                },
                [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
                    insetInlineStart: 0,
                    paddingInline: `calc(50% - ${(0, _cssinjs.unit)(token.calc(collapsedIconSize).div(2).equal())} - ${(0, _cssinjs.unit)(itemMarginInline)})`,
                    textOverflow: 'clip',
                    [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
                        opacity: 0
                    },
                    [`${componentCls}-item-icon, ${iconCls}`]: {
                        margin: 0,
                        fontSize: collapsedIconSize,
                        lineHeight: (0, _cssinjs.unit)(itemHeight),
                        '+ span': {
                            display: 'inline-block',
                            opacity: 0
                        }
                    }
                },
                [`${componentCls}-item-icon, ${iconCls}`]: {
                    display: 'inline-block'
                },
                '&-tooltip': {
                    pointerEvents: 'none',
                    [`${componentCls}-item-icon, ${iconCls}`]: {
                        display: 'none'
                    },
                    'a, a:hover': {
                        color: colorTextLightSolid
                    }
                },
                [`${componentCls}-item-group-title`]: {
                    ..._style.textEllipsis,
                    paddingInline: paddingXS
                }
            }
        }
    ];
};
var _default = getVerticalStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    clearFix: function() {
        return clearFix;
    },
    genCommonStyle: function() {
        return genCommonStyle;
    },
    genFocusOutline: function() {
        return genFocusOutline;
    },
    genFocusStyle: function() {
        return genFocusStyle;
    },
    genIconStyle: function() {
        return genIconStyle;
    },
    genLinkStyle: function() {
        return genLinkStyle;
    },
    operationUnit: function() {
        return operationUnit;
    },
    resetComponent: function() {
        return resetComponent;
    },
    resetIcon: function() {
        return resetIcon;
    },
    textEllipsis: function() {
        return textEllipsis;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const textEllipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
};
const resetComponent = (token, needInheritFontFamily = false)=>({
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: token.colorText,
        fontSize: token.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token.lineHeight,
        listStyle: 'none',
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    });
const resetIcon = ()=>({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textAlign: 'center',
        textTransform: 'none',
        // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
        verticalAlign: '-0.125em',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '> *': {
            lineHeight: 1
        },
        svg: {
            display: 'inline-block'
        }
    });
const clearFix = ()=>({
        // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
        '&::before': {
            display: 'table',
            content: '""'
        },
        '&::after': {
            // https://github.com/ant-design/ant-design/issues/21864
            display: 'table',
            clear: 'both',
            content: '""'
        }
    });
const genLinkStyle = (token)=>({
        a: {
            color: token.colorLink,
            textDecoration: token.linkDecoration,
            backgroundColor: 'transparent',
            outline: 'none',
            cursor: 'pointer',
            transition: `color ${token.motionDurationSlow}`,
            '-webkit-text-decoration-skip': 'objects',
            '&:hover': {
                color: token.colorLinkHover
            },
            '&:active': {
                color: token.colorLinkActive
            },
            '&:active, &:hover': {
                textDecoration: token.linkHoverDecoration,
                outline: 0
            },
            // https://github.com/ant-design/ant-design/issues/22503
            '&:focus': {
                textDecoration: token.linkFocusDecoration,
                outline: 0
            },
            '&[disabled]': {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    });
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont)=>{
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
        boxSizing: 'border-box',
        '&::before, &::after': {
            boxSizing: 'border-box'
        }
    };
    let resetFontStyle = {};
    if (resetFont !== false) resetFontStyle = {
        fontFamily: token.fontFamily,
        fontSize: token.fontSize
    };
    return {
        [rootPrefixSelector]: {
            ...resetFontStyle,
            ...resetStyle,
            [prefixSelector]: resetStyle
        }
    };
};
const genFocusOutline = (token, offset)=>({
        outline: `${(0, _cssinjs.unit)(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
        outlineOffset: offset ?? 1,
        transition: 'outline-offset 0s, outline 0s'
    });
const genFocusStyle = (token, offset)=>({
        '&:focus-visible': genFocusOutline(token, offset)
    });
const genIconStyle = (iconPrefixCls)=>({
        [`.${iconPrefixCls}`]: {
            ...resetIcon(),
            [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
                display: 'block'
            }
        }
    });
const operationUnit = (token)=>({
        // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
        // And Typography use this to generate link style which should not do this.
        color: token.colorLink,
        textDecoration: token.linkDecoration,
        outline: 'none',
        cursor: 'pointer',
        transition: `all ${token.motionDurationSlow}`,
        border: 0,
        padding: 0,
        background: 'none',
        userSelect: 'none',
        ...genFocusStyle(token),
        '&:focus, &:hover': {
            color: token.colorLinkHover
        },
        '&:active': {
            color: token.colorLinkActive
        }
    });
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/collapse.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genCollapseMotion = (token)=>({
        [token.componentCls]: {
            // For common/openAnimation
            [`${token.antCls}-motion-collapse-legacy`]: {
                overflow: 'hidden',
                '&-active': {
                    transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
                }
            },
            [`${token.antCls}-motion-collapse`]: {
                overflow: 'hidden',
                transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
            }
        }
    });
var _default = genCollapseMotion;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/fade.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    fadeIn: function() {
        return fadeIn;
    },
    fadeOut: function() {
        return fadeOut;
    },
    initFadeMotion: function() {
        return initFadeMotion;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _motion = __mako_require__("src/components/VirtualTable/style/motion/motion.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const fadeIn = new _cssinjs.Keyframes('antFadeIn', {
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
const fadeOut = new _cssinjs.Keyframes('antFadeOut', {
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
const initFadeMotion = (token, sameLevel = false)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-fade`;
    const sameLevelPrefix = sameLevel ? '&' : '';
    return [
        (0, _motion.initMotion)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel),
        {
            [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: 'linear'
            },
            [`${sameLevelPrefix}${motionCls}-leave`]: {
                animationTimingFunction: 'linear'
            }
        }
    ];
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    fadeIn: function() {
        return _fade.fadeIn;
    },
    fadeOut: function() {
        return _fade.fadeOut;
    },
    genCollapseMotion: function() {
        return _collapse.default;
    },
    initFadeMotion: function() {
        return _fade.initFadeMotion;
    },
    initMoveMotion: function() {
        return _move.initMoveMotion;
    },
    initSlideMotion: function() {
        return _slide.initSlideMotion;
    },
    initZoomMotion: function() {
        return _zoom.initZoomMotion;
    },
    moveDownIn: function() {
        return _move.moveDownIn;
    },
    moveDownOut: function() {
        return _move.moveDownOut;
    },
    moveLeftIn: function() {
        return _move.moveLeftIn;
    },
    moveLeftOut: function() {
        return _move.moveLeftOut;
    },
    moveRightIn: function() {
        return _move.moveRightIn;
    },
    moveRightOut: function() {
        return _move.moveRightOut;
    },
    moveUpIn: function() {
        return _move.moveUpIn;
    },
    moveUpOut: function() {
        return _move.moveUpOut;
    },
    slideDownIn: function() {
        return _slide.slideDownIn;
    },
    slideDownOut: function() {
        return _slide.slideDownOut;
    },
    slideLeftIn: function() {
        return _slide.slideLeftIn;
    },
    slideLeftOut: function() {
        return _slide.slideLeftOut;
    },
    slideRightIn: function() {
        return _slide.slideRightIn;
    },
    slideRightOut: function() {
        return _slide.slideRightOut;
    },
    slideUpIn: function() {
        return _slide.slideUpIn;
    },
    slideUpOut: function() {
        return _slide.slideUpOut;
    },
    zoomBigIn: function() {
        return _zoom.zoomBigIn;
    },
    zoomBigOut: function() {
        return _zoom.zoomBigOut;
    },
    zoomDownIn: function() {
        return _zoom.zoomDownIn;
    },
    zoomDownOut: function() {
        return _zoom.zoomDownOut;
    },
    zoomIn: function() {
        return _zoom.zoomIn;
    },
    zoomLeftIn: function() {
        return _zoom.zoomLeftIn;
    },
    zoomLeftOut: function() {
        return _zoom.zoomLeftOut;
    },
    zoomOut: function() {
        return _zoom.zoomOut;
    },
    zoomRightIn: function() {
        return _zoom.zoomRightIn;
    },
    zoomRightOut: function() {
        return _zoom.zoomRightOut;
    },
    zoomUpIn: function() {
        return _zoom.zoomUpIn;
    },
    zoomUpOut: function() {
        return _zoom.zoomUpOut;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _collapse = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/style/motion/collapse.ts"));
var _fade = __mako_require__("src/components/VirtualTable/style/motion/fade.ts");
var _move = __mako_require__("src/components/VirtualTable/style/motion/move.ts");
var _slide = __mako_require__("src/components/VirtualTable/style/motion/slide.ts");
var _zoom = __mako_require__("src/components/VirtualTable/style/motion/zoom.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/motion.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "initMotion", {
    enumerable: true,
    get: function() {
        return initMotion;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const initMotionCommon = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false)=>{
    const sameLevelPrefix = sameLevel ? '&' : '';
    return {
        [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
            ...initMotionCommon(duration),
            animationPlayState: 'paused'
        },
        [`${sameLevelPrefix}${motionCls}-leave`]: {
            ...initMotionCommonLeave(duration),
            animationPlayState: 'paused'
        },
        [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
            animationName: inKeyframes,
            animationPlayState: 'running'
        },
        [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
            animationName: outKeyframes,
            animationPlayState: 'running',
            pointerEvents: 'none'
        }
    };
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/move.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    initMoveMotion: function() {
        return initMoveMotion;
    },
    moveDownIn: function() {
        return moveDownIn;
    },
    moveDownOut: function() {
        return moveDownOut;
    },
    moveLeftIn: function() {
        return moveLeftIn;
    },
    moveLeftOut: function() {
        return moveLeftOut;
    },
    moveRightIn: function() {
        return moveRightIn;
    },
    moveRightOut: function() {
        return moveRightOut;
    },
    moveUpIn: function() {
        return moveUpIn;
    },
    moveUpOut: function() {
        return moveUpOut;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _motion = __mako_require__("src/components/VirtualTable/style/motion/motion.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const moveDownIn = new _cssinjs.Keyframes('antMoveDownIn', {
    '0%': {
        transform: 'translate3d(0, 100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveDownOut = new _cssinjs.Keyframes('antMoveDownOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(0, 100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveLeftIn = new _cssinjs.Keyframes('antMoveLeftIn', {
    '0%': {
        transform: 'translate3d(-100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveLeftOut = new _cssinjs.Keyframes('antMoveLeftOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(-100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveRightIn = new _cssinjs.Keyframes('antMoveRightIn', {
    '0%': {
        transform: 'translate3d(100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveRightOut = new _cssinjs.Keyframes('antMoveRightOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveUpIn = new _cssinjs.Keyframes('antMoveUpIn', {
    '0%': {
        transform: 'translate3d(0, -100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveUpOut = new _cssinjs.Keyframes('antMoveUpOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(0, -100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveMotion = {
    'move-up': {
        inKeyframes: moveUpIn,
        outKeyframes: moveUpOut
    },
    'move-down': {
        inKeyframes: moveDownIn,
        outKeyframes: moveDownOut
    },
    'move-left': {
        inKeyframes: moveLeftIn,
        outKeyframes: moveLeftOut
    },
    'move-right': {
        inKeyframes: moveRightIn,
        outKeyframes: moveRightOut
    }
};
const initMoveMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = moveMotion[motionName];
    return [
        (0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/slide.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    initSlideMotion: function() {
        return initSlideMotion;
    },
    slideDownIn: function() {
        return slideDownIn;
    },
    slideDownOut: function() {
        return slideDownOut;
    },
    slideLeftIn: function() {
        return slideLeftIn;
    },
    slideLeftOut: function() {
        return slideLeftOut;
    },
    slideRightIn: function() {
        return slideRightIn;
    },
    slideRightOut: function() {
        return slideRightOut;
    },
    slideUpIn: function() {
        return slideUpIn;
    },
    slideUpOut: function() {
        return slideUpOut;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _motion = __mako_require__("src/components/VirtualTable/style/motion/motion.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const slideUpIn = new _cssinjs.Keyframes('antSlideUpIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideUpOut = new _cssinjs.Keyframes('antSlideUpOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideDownIn = new _cssinjs.Keyframes('antSlideDownIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    }
});
const slideDownOut = new _cssinjs.Keyframes('antSlideDownOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    }
});
const slideLeftIn = new _cssinjs.Keyframes('antSlideLeftIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideLeftOut = new _cssinjs.Keyframes('antSlideLeftOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideRightIn = new _cssinjs.Keyframes('antSlideRightIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    }
});
const slideRightOut = new _cssinjs.Keyframes('antSlideRightOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    }
});
const slideMotion = {
    'slide-up': {
        inKeyframes: slideUpIn,
        outKeyframes: slideUpOut
    },
    'slide-down': {
        inKeyframes: slideDownIn,
        outKeyframes: slideDownOut
    },
    'slide-left': {
        inKeyframes: slideLeftIn,
        outKeyframes: slideLeftOut
    },
    'slide-right': {
        inKeyframes: slideRightIn,
        outKeyframes: slideRightOut
    }
};
const initSlideMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = slideMotion[motionName];
    return [
        (0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
                transform: 'scale(0)',
                transformOrigin: '0% 0%',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutQuint,
                '&-prepare': {
                    transform: 'scale(1)'
                }
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInQuint
            }
        }
    ];
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/style/motion/zoom.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    initZoomMotion: function() {
        return initZoomMotion;
    },
    zoomBigIn: function() {
        return zoomBigIn;
    },
    zoomBigOut: function() {
        return zoomBigOut;
    },
    zoomDownIn: function() {
        return zoomDownIn;
    },
    zoomDownOut: function() {
        return zoomDownOut;
    },
    zoomIn: function() {
        return zoomIn;
    },
    zoomLeftIn: function() {
        return zoomLeftIn;
    },
    zoomLeftOut: function() {
        return zoomLeftOut;
    },
    zoomOut: function() {
        return zoomOut;
    },
    zoomRightIn: function() {
        return zoomRightIn;
    },
    zoomRightOut: function() {
        return zoomRightOut;
    },
    zoomUpIn: function() {
        return zoomUpIn;
    },
    zoomUpOut: function() {
        return zoomUpOut;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _motion = __mako_require__("src/components/VirtualTable/style/motion/motion.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const zoomIn = new _cssinjs.Keyframes('antZoomIn', {
    '0%': {
        transform: 'scale(0.2)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomOut = new _cssinjs.Keyframes('antZoomOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.2)',
        opacity: 0
    }
});
const zoomBigIn = new _cssinjs.Keyframes('antZoomBigIn', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomBigOut = new _cssinjs.Keyframes('antZoomBigOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const zoomUpIn = new _cssinjs.Keyframes('antZoomUpIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    }
});
const zoomUpOut = new _cssinjs.Keyframes('antZoomUpOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    }
});
const zoomLeftIn = new _cssinjs.Keyframes('antZoomLeftIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    }
});
const zoomLeftOut = new _cssinjs.Keyframes('antZoomLeftOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    }
});
const zoomRightIn = new _cssinjs.Keyframes('antZoomRightIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    }
});
const zoomRightOut = new _cssinjs.Keyframes('antZoomRightOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    }
});
const zoomDownIn = new _cssinjs.Keyframes('antZoomDownIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    }
});
const zoomDownOut = new _cssinjs.Keyframes('antZoomDownOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    }
});
const zoomMotion = {
    zoom: {
        inKeyframes: zoomIn,
        outKeyframes: zoomOut
    },
    'zoom-big': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-left': {
        inKeyframes: zoomLeftIn,
        outKeyframes: zoomLeftOut
    },
    'zoom-right': {
        inKeyframes: zoomRightIn,
        outKeyframes: zoomRightOut
    },
    'zoom-up': {
        inKeyframes: zoomUpIn,
        outKeyframes: zoomUpOut
    },
    'zoom-down': {
        inKeyframes: zoomDownIn,
        outKeyframes: zoomDownOut
    }
};
const initZoomMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = zoomMotion[motionName];
    return [
        (0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid),
        {
            [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
                transform: 'scale(0)',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc,
                '&-prepare': {
                    transform: 'none'
                }
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/Column.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/* istanbul ignore next */ /** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */ const Column = (_)=>null;
_c = Column;
var _default = Column;
var _c;
$RefreshReg$(_c, "Column");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/ColumnGroup.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/* istanbul ignore next */ /** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */ const ColumnGroup = (_)=>null;
_c = ColumnGroup;
var _default = ColumnGroup;
var _c;
$RefreshReg$(_c, "ColumnGroup");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/ExpandIcon.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function renderExpandIcon(locale) {
    return (props)=>{
        const { prefixCls, onExpand, record, expanded, expandable } = props;
        const iconPrefix = `${prefixCls}-row-expand-icon`;
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
            type: "button",
            onClick: (e)=>{
                onExpand(record, e);
                e.stopPropagation();
            },
            className: (0, _classnames.default)(iconPrefix, {
                [`${iconPrefix}-spaced`]: !expandable,
                [`${iconPrefix}-expanded`]: expandable && expanded,
                [`${iconPrefix}-collapsed`]: expandable && !expanded
            }),
            "aria-label": expanded ? locale.collapse : locale.expand,
            "aria-expanded": expanded
        }, void 0, false, {
            fileName: "src/components/VirtualTable/table/ExpandIcon.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    };
}
var _default = renderExpandIcon;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/InternalTable.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rctable = __mako_require__("node_modules/rc-table/es/index.js");
var _useColumns = __mako_require__("node_modules/rc-table/lib/hooks/useColumns/index.js");
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/omit.js"));
var _useProxyImperativeHandle = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/hooks/useProxyImperativeHandle.ts"));
var _scrollTo = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/scrollTo.ts"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _context = __mako_require__("src/components/VirtualTable/config-provider/context.ts");
var _defaultRenderEmpty = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/defaultRenderEmpty.tsx"));
var _useCSSVarCls = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/hooks/useCSSVarCls.ts"));
var _useSize = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/config-provider/hooks/useSize.ts"));
var _useBreakpoint = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/grid/hooks/useBreakpoint.tsx"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var _ExpandIcon = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/ExpandIcon.tsx"));
var _useContainerWidth = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/hooks/useContainerWidth.ts"));
var _useFilter = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/table/hooks/useFilter/index.tsx"));
var _useLazyKVMap = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/hooks/useLazyKVMap.ts"));
var _usePagination = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/table/hooks/usePagination.ts"));
var _useSelection = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/hooks/useSelection.tsx"));
var _useSorter = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/table/hooks/useSorter.tsx"));
var _useTitleColumns = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/hooks/useTitleColumns.ts"));
var _RcTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/RcTable/index.tsx"));
var _VirtualTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/RcTable/VirtualTable.tsx"));
var _style = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/index.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const EMPTY_LIST = [];
const InternalTable = (props, ref)=>{
    var _table_expandable;
    _s();
    const { prefixCls: customizePrefixCls, className, rootClassName, style, size: customizeSize, bordered, dropdownPrefixCls: customizeDropdownPrefixCls, dataSource, pagination, rowSelection, rowKey = 'key', rowClassName, columns, children, childrenColumnName: legacyChildrenColumnName, onChange, getPopupContainer, loading, expandIcon, expandable, expandedRowRender, expandIconColumnIndex, indentSize, scroll, sortDirections, locale, showSorterTooltip = {
        target: 'full-header'
    } } = props;
    let { virtual } = props;
    virtual = true;
    const warning = (0, _warning.devUseWarning)('Table');
    warning(!(typeof rowKey === 'function' && rowKey.length > 1), 'usage', '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.');
    const baseColumns = _react.useMemo(()=>columns || (0, _useColumns.convertChildrenToColumns)(children), [
        columns,
        children
    ]);
    const needResponsive = _react.useMemo(()=>baseColumns.some((col)=>col.responsive), [
        baseColumns
    ]);
    const screens = (0, _useBreakpoint.default)(needResponsive);
    const mergedColumns = _react.useMemo(()=>{
        const matched = new Set(Object.keys(screens).filter((m)=>screens[m]));
        return baseColumns.filter((c)=>!c.responsive || c.responsive.some((r)=>matched.has(r)));
    }, [
        baseColumns,
        screens
    ]);
    const tableProps = (0, _omit.default)(props, [
        'className',
        'style',
        'columns'
    ]);
    const { locale: contextLocale = {}, direction, table, renderEmpty, getPrefixCls, getPopupContainer: getContextPopupContainer } = _react.useContext(_context.ConfigContext);
    const mergedSize = (0, _useSize.default)(customizeSize);
    const tableLocale = {
        ...contextLocale.Table,
        ...locale
    };
    const rawData = dataSource || EMPTY_LIST;
    const prefixCls = getPrefixCls('table', customizePrefixCls);
    const dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
    const [, token] = (0, _internal.useToken)();
    const rootCls = (0, _useCSSVarCls.default)(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls, rootCls);
    const mergedExpandable = {
        childrenColumnName: legacyChildrenColumnName,
        expandIconColumnIndex,
        ...expandable,
        expandIcon: (expandable === null || expandable === void 0 ? void 0 : expandable.expandIcon) ?? (table === null || table === void 0 ? void 0 : (_table_expandable = table.expandable) === null || _table_expandable === void 0 ? void 0 : _table_expandable.expandIcon)
    };
    const { childrenColumnName = 'children' } = mergedExpandable;
    const expandType = _react.useMemo(()=>{
        if (rawData.some((item)=>item === null || item === void 0 ? void 0 : item[childrenColumnName])) return 'nest';
        if (expandedRowRender || (expandable === null || expandable === void 0 ? void 0 : expandable.expandedRowRender)) return 'row';
        return null;
    }, [
        rawData
    ]);
    const internalRefs = {
        body: _react.useRef(null)
    };
    // ============================ Width =============================
    const getContainerWidth = (0, _useContainerWidth.default)(prefixCls);
    // ============================= Refs =============================
    const rootRef = _react.useRef(null);
    const tblRef = _react.useRef(null);
    (0, _useProxyImperativeHandle.default)(ref, ()=>({
            ...tblRef.current,
            nativeElement: rootRef.current
        }));
    // ============================ RowKey ============================
    const getRowKey = _react.useMemo(()=>{
        if (typeof rowKey === 'function') return rowKey;
        return (record)=>record === null || record === void 0 ? void 0 : record[rowKey];
    }, [
        rowKey
    ]);
    const [getRecordByKey] = (0, _useLazyKVMap.default)(rawData, childrenColumnName, getRowKey);
    // ============================ Events =============================
    const changeEventInfo = {};
    const triggerOnChange = (info, action, reset = false)=>{
        const changeInfo = {
            ...changeEventInfo,
            ...info
        };
        if (reset) {
            var _changeEventInfo_resetPagination, _changeInfo_pagination;
            (_changeEventInfo_resetPagination = changeEventInfo.resetPagination) === null || _changeEventInfo_resetPagination === void 0 || _changeEventInfo_resetPagination.call(changeEventInfo);
            // Reset event param
            if ((_changeInfo_pagination = changeInfo.pagination) === null || _changeInfo_pagination === void 0 ? void 0 : _changeInfo_pagination.current) changeInfo.pagination.current = 1;
            // Trigger pagination events
            if (pagination) {
                var _changeInfo_pagination1, _pagination_onChange;
                (_pagination_onChange = pagination.onChange) === null || _pagination_onChange === void 0 || _pagination_onChange.call(pagination, 1, (_changeInfo_pagination1 = changeInfo.pagination) === null || _changeInfo_pagination1 === void 0 ? void 0 : _changeInfo_pagination1.pageSize);
            }
        }
        if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) (0, _scrollTo.default)(0, {
            getContainer: ()=>internalRefs.body.current
        });
        onChange === null || onChange === void 0 || onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
            currentDataSource: (0, _useFilter.getFilterData)((0, _useSorter.getSortData)(rawData, changeInfo.sorterStates, childrenColumnName), changeInfo.filterStates, childrenColumnName),
            action
        });
    };
    /**
     * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?) to read
     * state out and then put it back to title render. Move these code into `hooks` but still too
     * complex. We should provides Table props like `sorter` & `filter` to handle control in next big
     * version.
     */ // ============================ Sorter =============================
    const onSorterChange = (sorter, sorterStates)=>{
        triggerOnChange({
            sorter,
            sorterStates
        }, 'sort', false);
    };
    const [transformSorterColumns, sortStates, sorterTitleProps, getSorters] = (0, _useSorter.default)({
        prefixCls,
        mergedColumns,
        onSorterChange,
        sortDirections: sortDirections || [
            'ascend',
            'descend'
        ],
        tableLocale,
        showSorterTooltip
    });
    const sortedData = _react.useMemo(()=>(0, _useSorter.getSortData)(rawData, sortStates, childrenColumnName), [
        rawData,
        sortStates
    ]);
    changeEventInfo.sorter = getSorters();
    changeEventInfo.sorterStates = sortStates;
    // ============================ Filter ============================
    const onFilterChange = (filters, filterStates)=>{
        triggerOnChange({
            filters,
            filterStates
        }, 'filter', true);
    };
    const [transformFilterColumns, filterStates, filters] = (0, _useFilter.default)({
        prefixCls,
        locale: tableLocale,
        dropdownPrefixCls,
        mergedColumns,
        onFilterChange,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        rootClassName: (0, _classnames.default)(rootClassName, rootCls)
    });
    const mergedData = (0, _useFilter.getFilterData)(sortedData, filterStates, childrenColumnName);
    changeEventInfo.filters = filters;
    changeEventInfo.filterStates = filterStates;
    // ============================ Column ============================
    const columnTitleProps = _react.useMemo(()=>{
        const mergedFilters = {};
        Object.keys(filters).forEach((filterKey)=>{
            if (filters[filterKey] !== null) mergedFilters[filterKey] = filters[filterKey];
        });
        return {
            ...sorterTitleProps,
            filters: mergedFilters
        };
    }, [
        sorterTitleProps,
        filters
    ]);
    const [transformTitleColumns] = (0, _useTitleColumns.default)(columnTitleProps);
    // ========================== Pagination ==========================
    const onPaginationChange = (current, pageSize)=>{
        triggerOnChange({
            pagination: {
                ...changeEventInfo.pagination,
                current,
                pageSize
            }
        }, 'paginate');
    };
    const [mergedPagination, resetPagination] = (0, _usePagination.default)(mergedData.length, onPaginationChange, pagination);
    changeEventInfo.pagination = pagination === false ? {} : (0, _usePagination.getPaginationParam)(mergedPagination, pagination);
    changeEventInfo.resetPagination = resetPagination;
    // ============================= Data =============================
    const pageData = _react.useMemo(()=>{
        if (pagination === false || !mergedPagination.pageSize) return mergedData;
        const { current = 1, total, pageSize = _usePagination.DEFAULT_PAGE_SIZE } = mergedPagination;
        warning(current > 0, 'usage', '`current` should be positive number.');
        // Dynamic table data
        if (mergedData.length < total) {
            if (mergedData.length > pageSize) {
                warning(false, 'usage', '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.');
                return mergedData.slice((current - 1) * pageSize, current * pageSize);
            }
            return mergedData;
        }
        return mergedData.slice((current - 1) * pageSize, current * pageSize);
    }, [
        !!pagination,
        mergedData,
        mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.current,
        mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize,
        mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total
    ]);
    // ========================== Selections ==========================
    const [transformSelectionColumns, selectedKeySet] = (0, _useSelection.default)({
        prefixCls,
        data: mergedData,
        pageData,
        getRowKey,
        getRecordByKey,
        expandType,
        childrenColumnName,
        locale: tableLocale,
        getPopupContainer: getPopupContainer || getContextPopupContainer
    }, rowSelection);
    const internalRowClassName = (record, index, indent)=>{
        let mergedRowClassName;
        if (typeof rowClassName === 'function') mergedRowClassName = (0, _classnames.default)(rowClassName(record, index, indent));
        else mergedRowClassName = (0, _classnames.default)(rowClassName);
        return (0, _classnames.default)({
            [`${prefixCls}-row-selected`]: selectedKeySet.has(getRowKey(record, index))
        }, mergedRowClassName);
    };
    // ========================== Expandable ==========================
    // Pass origin render status into `rc-table`, this can be removed when refactor with `rc-table`
    mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon;
    // Customize expandable icon
    mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || (0, _ExpandIcon.default)(tableLocale);
    // Adjust expand icon index, no overwrite expandIconColumnIndex if set.
    if (expandType === 'nest' && mergedExpandable.expandIconColumnIndex === undefined) mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
    else if (mergedExpandable.expandIconColumnIndex > 0 && rowSelection) mergedExpandable.expandIconColumnIndex -= 1;
    // Indent size
    if (typeof mergedExpandable.indentSize !== 'number') mergedExpandable.indentSize = typeof indentSize === 'number' ? indentSize : 15;
    // ============================ Render ============================
    const transformColumns = _react.useCallback((innerColumns)=>transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns)))), [
        transformSorterColumns,
        transformFilterColumns,
        transformSelectionColumns
    ]);
    let topPaginationNode;
    let bottomPaginationNode;
    if (pagination !== false && (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total)) {
        let paginationSize;
        if (mergedPagination.size) paginationSize = mergedPagination.size;
        else paginationSize = mergedSize === 'small' || mergedSize === 'middle' ? 'small' : undefined;
        const renderPagination = (position)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Pagination, {
                ...mergedPagination,
                className: (0, _classnames.default)(`${prefixCls}-pagination ${prefixCls}-pagination-${position}`, mergedPagination.className),
                size: paginationSize
            }, void 0, false, {
                fileName: "src/components/VirtualTable/table/InternalTable.tsx",
                lineNumber: 470,
                columnNumber: 13
            }, this);
        const defaultPosition = direction === 'rtl' ? 'left' : 'right';
        const { position } = mergedPagination;
        if (position !== null && Array.isArray(position)) {
            const topPos = position.find((p)=>p.includes('top'));
            const bottomPos = position.find((p)=>p.includes('bottom'));
            const isDisable = position.every((p)=>`${p}` === 'none');
            if (!topPos && !bottomPos && !isDisable) bottomPaginationNode = renderPagination(defaultPosition);
            if (topPos) topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''));
            if (bottomPos) bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''));
        } else bottomPaginationNode = renderPagination(defaultPosition);
    }
    // >>>>>>>>> Spinning
    let spinProps;
    if (typeof loading === 'boolean') spinProps = {
        spinning: loading
    };
    else if (typeof loading === 'object') spinProps = {
        spinning: true,
        ...loading
    };
    const wrapperClassNames = (0, _classnames.default)(cssVarCls, rootCls, `${prefixCls}-wrapper`, table === null || table === void 0 ? void 0 : table.className, {
        [`${prefixCls}-wrapper-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId);
    const mergedStyle = {
        ...table === null || table === void 0 ? void 0 : table.style,
        ...style
    };
    const emptyText = typeof (locale === null || locale === void 0 ? void 0 : locale.emptyText) !== 'undefined' ? locale.emptyText : (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Table')) || /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_defaultRenderEmpty.default, {
        componentName: "Table"
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/InternalTable.tsx",
        lineNumber: 530,
        columnNumber: 41
    }, this);
    // ========================== Render ==========================
    const TableComponent = virtual ? _VirtualTable.default : _RcTable.default;
    // >>> Virtual Table props. We set height here since it will affect height collection
    const virtualProps = {};
    const listItemHeight = _react.useMemo(()=>{
        const { fontSize, lineHeight, lineWidth, padding, paddingXS, paddingSM } = token;
        const fontHeight = Math.floor(fontSize * lineHeight);
        switch(mergedSize){
            case 'middle':
                return paddingSM * 2 + fontHeight + lineWidth;
            case 'small':
                return paddingXS * 2 + fontHeight + lineWidth;
            default:
                return padding * 2 + fontHeight + lineWidth;
        }
    }, [
        token,
        mergedSize
    ]);
    if (virtual) virtualProps.listItemHeight = listItemHeight;
    return wrapCSSVar(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        ref: rootRef,
        className: wrapperClassNames,
        style: mergedStyle,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
            spinning: false,
            ...spinProps,
            children: [
                topPaginationNode,
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(TableComponent, {
                    ...virtualProps,
                    ...tableProps,
                    ref: tblRef,
                    columns: mergedColumns,
                    direction: direction,
                    expandable: mergedExpandable,
                    prefixCls: prefixCls,
                    className: (0, _classnames.default)({
                        [`${prefixCls}-middle`]: mergedSize === 'middle',
                        [`${prefixCls}-small`]: mergedSize === 'small',
                        [`${prefixCls}-bordered`]: bordered,
                        [`${prefixCls}-empty`]: rawData.length === 0
                    }, cssVarCls, rootCls, hashId),
                    data: pageData,
                    rowKey: getRowKey,
                    rowClassName: internalRowClassName,
                    emptyText: emptyText,
                    // Internal
                    internalHooks: _rctable.INTERNAL_HOOKS,
                    internalRefs: internalRefs,
                    transformColumns: transformColumns,
                    getContainerWidth: getContainerWidth
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/InternalTable.tsx",
                    lineNumber: 561,
                    columnNumber: 17
                }, this),
                bottomPaginationNode
            ]
        }, void 0, true, {
            fileName: "src/components/VirtualTable/table/InternalTable.tsx",
            lineNumber: 559,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/InternalTable.tsx",
        lineNumber: 558,
        columnNumber: 9
    }, this));
};
_s(InternalTable, "0xXhgszObP0WZF5iibGrFN9utHQ=", false, function() {
    return [
        _useBreakpoint.default,
        _useSize.default,
        _internal.useToken,
        _useCSSVarCls.default,
        _style.default,
        _useContainerWidth.default,
        _useProxyImperativeHandle.default,
        _useLazyKVMap.default,
        _useSorter.default,
        _useFilter.default,
        _useTitleColumns.default,
        _usePagination.default,
        _useSelection.default
    ];
});
_c = InternalTable;
var _default = /*#__PURE__*/ _c1 = _react.forwardRef(InternalTable);
var _c;
var _c1;
$RefreshReg$(_c, "InternalTable");
$RefreshReg$(_c1, "%default%");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/RcTable/VirtualTable.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _rctable = __mako_require__("node_modules/rc-table/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/**
 * Same as `rc-table` but we modify trigger children update logic instead.
 */ const RcVirtualTable = (0, _rctable.genVirtualTable)(_c = (prev, next)=>{
    const { _renderTimes: prevRenderTimes } = prev;
    const { _renderTimes: nextRenderTimes } = next;
    return prevRenderTimes !== nextRenderTimes;
});
_c1 = RcVirtualTable;
var _default = RcVirtualTable;
var _c;
var _c1;
$RefreshReg$(_c, "RcVirtualTable$genVirtualTable");
$RefreshReg$(_c1, "RcVirtualTable");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/RcTable/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _rctable = __mako_require__("node_modules/rc-table/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/**
 * Same as `rc-table` but we modify trigger children update logic instead.
 */ const RcTable = (0, _rctable.genTable)(_c = (prev, next)=>{
    const { _renderTimes: prevRenderTimes } = prev;
    const { _renderTimes: nextRenderTimes } = next;
    return prevRenderTimes !== nextRenderTimes;
});
_c1 = RcTable;
var _default = RcTable;
var _c;
var _c1;
$RefreshReg$(_c, "RcTable$genTable");
$RefreshReg$(_c1, "RcTable");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/Table.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _rctable = __mako_require__("node_modules/rc-table/es/index.js");
var _Column = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/Column.ts"));
var _ColumnGroup = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/ColumnGroup.ts"));
var _useSelection = __mako_require__("src/components/VirtualTable/table/hooks/useSelection.tsx");
var _InternalTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/InternalTable.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const Table = (props, ref)=>{
    _s();
    const renderTimesRef = _react.useRef(0);
    renderTimesRef.current += 1;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_InternalTable.default, {
        ...props,
        ref: ref,
        _renderTimes: renderTimesRef.current
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/Table.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
};
_s(Table, "p3cdKvDxfUCp/VxWUlbb/bA2740=");
_c = Table;
const ForwardTable = /*#__PURE__*/ _react.forwardRef(Table);
_c1 = ForwardTable;
ForwardTable.SELECTION_COLUMN = _useSelection.SELECTION_COLUMN;
ForwardTable.EXPAND_COLUMN = _rctable.EXPAND_COLUMN;
ForwardTable.SELECTION_ALL = _useSelection.SELECTION_ALL;
ForwardTable.SELECTION_INVERT = _useSelection.SELECTION_INVERT;
ForwardTable.SELECTION_NONE = _useSelection.SELECTION_NONE;
ForwardTable.Column = _Column.default;
ForwardTable.ColumnGroup = _ColumnGroup.default;
ForwardTable.Summary = _rctable.Summary;
ForwardTable.displayName = 'Table';
var _default = ForwardTable;
var _c;
var _c1;
$RefreshReg$(_c, "Table");
$RefreshReg$(_c1, "ForwardTable");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useContainerWidth.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useContainerWidth;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function useContainerWidth(prefixCls) {
    const getContainerWidth = (ele, width)=>{
        const container = ele.querySelector(`.${prefixCls}-container`);
        let returnWidth = width;
        if (container) {
            const style = getComputedStyle(container);
            const borderLeft = parseInt(style.borderLeftWidth, 10);
            const borderRight = parseInt(style.borderRightWidth, 10);
            returnWidth = width - borderLeft - borderRight;
        }
        return returnWidth;
    };
    return getContainerWidth;
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    flattenKeys: function() {
        return flattenKeys;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _isEqual = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/isEqual.js"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _extendsObject = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/extendsObject.ts"));
var _useSyncState = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/hooks/useSyncState.ts"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _context = __mako_require__("src/components/VirtualTable/config-provider/context.ts");
var _menu = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/index.tsx"));
var _OverrideContext = __mako_require__("src/components/VirtualTable/menu/OverrideContext.tsx");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _FilterSearch = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/hooks/useFilter/FilterSearch.tsx"));
var _FilterWrapper = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/hooks/useFilter/FilterWrapper.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function flattenKeys(filters) {
    let keys = [];
    (filters || []).forEach(({ value, children })=>{
        keys.push(value);
        if (children) keys = [
            ...keys,
            ...flattenKeys(children)
        ];
    });
    return keys;
}
function hasSubMenu(filters) {
    return filters.some(({ children })=>children);
}
function searchValueMatched(searchValue, text) {
    if (typeof text === 'string' || typeof text === 'number') return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
    return false;
}
function renderFilterItems({ filters, prefixCls, filteredKeys, filterMultiple, searchValue, filterSearch }) {
    return filters.map((filter, index)=>{
        const key = String(filter.value);
        if (filter.children) return {
            key: key || index,
            label: filter.text,
            popupClassName: `${prefixCls}-dropdown-submenu`,
            children: renderFilterItems({
                filters: filter.children,
                prefixCls,
                filteredKeys,
                filterMultiple,
                searchValue,
                filterSearch
            })
        };
        const Component = filterMultiple ? _antd.Checkbox : _antd.Radio;
        const item = {
            key: filter.value !== undefined ? key : index,
            label: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Component, {
                        checked: filteredKeys.includes(key)
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                        children: filter.text
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        };
        if (searchValue.trim()) {
            if (typeof filterSearch === 'function') return filterSearch(searchValue, filter) ? item : null;
            return searchValueMatched(searchValue, filter.text) ? item : null;
        }
        return item;
    });
}
function wrapStringListType(keys) {
    return keys || [];
}
const FilterDropdown = (props)=>{
    var _filterState_filteredKeys;
    _s();
    const { tablePrefixCls, prefixCls, column, dropdownPrefixCls, columnKey, filterOnClose, filterMultiple, filterMode = 'menu', filterSearch = false, filterState, triggerFilter, locale, children, getPopupContainer, rootClassName } = props;
    const { filterResetToDefaultFilteredValue, defaultFilteredValue, filterDropdownProps = {}, // Deprecated
    filterDropdownOpen, filterDropdownVisible, onFilterDropdownVisibleChange, onFilterDropdownOpenChange } = column;
    const [visible, setVisible] = _react.useState(false);
    const filtered = !!(filterState && (((_filterState_filteredKeys = filterState.filteredKeys) === null || _filterState_filteredKeys === void 0 ? void 0 : _filterState_filteredKeys.length) || filterState.forceFiltered));
    const triggerVisible = (newVisible)=>{
        var _filterDropdownProps_onOpenChange;
        setVisible(newVisible);
        (_filterDropdownProps_onOpenChange = filterDropdownProps.onOpenChange) === null || _filterDropdownProps_onOpenChange === void 0 || _filterDropdownProps_onOpenChange.call(filterDropdownProps, newVisible);
        // deprecated
        onFilterDropdownOpenChange === null || onFilterDropdownOpenChange === void 0 || onFilterDropdownOpenChange(newVisible);
        onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 || onFilterDropdownVisibleChange(newVisible);
    };
    {
        const warning = (0, _warning.devUseWarning)('Table');
        const deprecatedList = [
            [
                'filterDropdownOpen',
                'filterDropdownProps.open'
            ],
            [
                'filterDropdownVisible',
                'filterDropdownProps.open'
            ],
            [
                'onFilterDropdownOpenChange',
                'filterDropdownProps.onOpenChange'
            ],
            [
                'onFilterDropdownVisibleChange',
                'filterDropdownProps.onOpenChange'
            ]
        ];
        deprecatedList.forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in column), deprecatedName, newName);
        });
        warning.deprecated(!('filterCheckall' in locale), 'filterCheckall', 'locale.filterCheckAll');
    }
    const mergedVisible = filterDropdownProps.open ?? filterDropdownOpen ?? // deprecated
    filterDropdownVisible ?? // deprecated
    visible; // inner state
    // ===================== Select Keys =====================
    const propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;
    const [getFilteredKeysSync, setFilteredKeysSync] = (0, _useSyncState.default)(wrapStringListType(propFilteredKeys));
    const onSelectKeys = ({ selectedKeys })=>{
        setFilteredKeysSync(selectedKeys);
    };
    const onCheck = (keys, { node, checked })=>{
        if (!filterMultiple) onSelectKeys({
            selectedKeys: checked && node.key ? [
                node.key
            ] : []
        });
        else onSelectKeys({
            selectedKeys: keys
        });
    };
    _react.useEffect(()=>{
        if (!visible) return;
        onSelectKeys({
            selectedKeys: wrapStringListType(propFilteredKeys)
        });
    }, [
        propFilteredKeys
    ]);
    // ====================== Open Keys ======================
    const [openKeys, setOpenKeys] = _react.useState([]);
    const onOpenChange = (keys)=>{
        setOpenKeys(keys);
    };
    // search in tree mode column filter
    const [searchValue, setSearchValue] = _react.useState('');
    const onSearch = (e)=>{
        const { value } = e.target;
        setSearchValue(value);
    };
    // clear search value after close filter dropdown
    _react.useEffect(()=>{
        if (!visible) setSearchValue('');
    }, [
        visible
    ]);
    // ======================= Submit ========================
    const internalTriggerFilter = (keys)=>{
        const mergedKeys = (keys === null || keys === void 0 ? void 0 : keys.length) ? keys : null;
        if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) return null;
        if ((0, _isEqual.default)(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys, true)) return null;
        triggerFilter({
            column,
            key: columnKey,
            filteredKeys: mergedKeys
        });
    };
    const onConfirm = ()=>{
        triggerVisible(false);
        internalTriggerFilter(getFilteredKeysSync());
    };
    const onReset = ({ confirm, closeDropdown } = {
        confirm: false,
        closeDropdown: false
    })=>{
        if (confirm) internalTriggerFilter([]);
        if (closeDropdown) triggerVisible(false);
        setSearchValue('');
        if (filterResetToDefaultFilteredValue) setFilteredKeysSync((defaultFilteredValue || []).map((key)=>String(key)));
        else setFilteredKeysSync([]);
    };
    const doFilter = ({ closeDropdown } = {
        closeDropdown: true
    })=>{
        if (closeDropdown) triggerVisible(false);
        internalTriggerFilter(getFilteredKeysSync());
    };
    const onVisibleChange = (newVisible, info)=>{
        if (info.source === 'trigger') {
            if (newVisible && propFilteredKeys !== undefined) // Sync filteredKeys on appear in controlled mode (propFilteredKeys !== undefined)
            setFilteredKeysSync(wrapStringListType(propFilteredKeys));
            triggerVisible(newVisible);
            if (!newVisible && !column.filterDropdown && filterOnClose) onConfirm();
        }
    };
    // ======================== Style ========================
    const dropdownMenuClass = (0, _classnames.default)({
        [`${dropdownPrefixCls}-menu-without-submenu`]: !hasSubMenu(column.filters || [])
    });
    const onCheckAll = (e)=>{
        if (e.target.checked) {
            const allFilterKeys = flattenKeys(column === null || column === void 0 ? void 0 : column.filters).map((key)=>String(key));
            setFilteredKeysSync(allFilterKeys);
        } else setFilteredKeysSync([]);
    };
    const getTreeData = ({ filters })=>(filters || []).map((filter, index)=>{
            const key = String(filter.value);
            const item = {
                title: filter.text,
                key: filter.value !== undefined ? key : String(index)
            };
            if (filter.children) item.children = getTreeData({
                filters: filter.children
            });
            return item;
        });
    const getFilterData = (node)=>{
        var _node_children;
        return {
            ...node,
            text: node.title,
            value: node.key,
            children: ((_node_children = node.children) === null || _node_children === void 0 ? void 0 : _node_children.map((item)=>getFilterData(item))) || []
        };
    };
    let dropdownContent;
    const { direction, renderEmpty } = _react.useContext(_context.ConfigContext);
    if (typeof column.filterDropdown === 'function') dropdownContent = column.filterDropdown({
        prefixCls: `${dropdownPrefixCls}-custom`,
        setSelectedKeys: (selectedKeys)=>onSelectKeys({
                selectedKeys: selectedKeys
            }),
        selectedKeys: getFilteredKeysSync(),
        confirm: doFilter,
        clearFilters: onReset,
        filters: column.filters,
        visible: mergedVisible,
        close: ()=>{
            triggerVisible(false);
        }
    });
    else if (column.filterDropdown) dropdownContent = column.filterDropdown;
    else {
        const selectedKeys = getFilteredKeysSync() || [];
        const getFilterComponent = ()=>{
            const empty = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Table.filter')) ?? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Empty, {
                image: _antd.Empty.PRESENTED_IMAGE_SIMPLE,
                description: locale.filterEmptyText,
                styles: {
                    image: {
                        height: 24
                    }
                },
                style: {
                    margin: 0,
                    padding: '16px 0'
                }
            }, void 0, false, {
                fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                lineNumber: 398,
                columnNumber: 9
            }, this);
            if ((column.filters || []).length === 0) return empty;
            if (filterMode === 'tree') return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_FilterSearch.default, {
                        filterSearch: filterSearch,
                        value: searchValue,
                        onChange: onSearch,
                        tablePrefixCls: tablePrefixCls,
                        locale: locale
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                        lineNumber: 418,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: `${tablePrefixCls}-filter-dropdown-tree`,
                        children: [
                            filterMultiple ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Checkbox, {
                                checked: selectedKeys.length === flattenKeys(column.filters).length,
                                indeterminate: selectedKeys.length > 0 && selectedKeys.length < flattenKeys(column.filters).length,
                                className: `${tablePrefixCls}-filter-dropdown-checkall`,
                                onChange: onCheckAll,
                                children: (locale === null || locale === void 0 ? void 0 : locale.filterCheckall) ?? (locale === null || locale === void 0 ? void 0 : locale.filterCheckAll)
                            }, void 0, false, {
                                fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                                lineNumber: 427,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tree, {
                                checkable: true,
                                selectable: false,
                                blockNode: true,
                                multiple: filterMultiple,
                                checkStrictly: !filterMultiple,
                                className: `${dropdownPrefixCls}-menu`,
                                onCheck: onCheck,
                                checkedKeys: selectedKeys,
                                selectedKeys: selectedKeys,
                                showIcon: false,
                                treeData: getTreeData({
                                    filters: column.filters
                                }),
                                autoExpandParent: true,
                                defaultExpandAll: true,
                                filterTreeNode: searchValue.trim() ? (node)=>{
                                    if (typeof filterSearch === 'function') return filterSearch(searchValue, getFilterData(node));
                                    return searchValueMatched(searchValue, node.title);
                                } : undefined
                            }, void 0, false, {
                                fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                        lineNumber: 425,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true);
            const items = renderFilterItems({
                filters: column.filters || [],
                filterSearch,
                prefixCls,
                filteredKeys: getFilteredKeysSync(),
                filterMultiple,
                searchValue
            });
            const isEmpty = items.every((item)=>item === null);
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_FilterSearch.default, {
                        filterSearch: filterSearch,
                        value: searchValue,
                        onChange: onSearch,
                        tablePrefixCls: tablePrefixCls,
                        locale: locale
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this),
                    isEmpty ? empty : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_menu.default, {
                        selectable: true,
                        multiple: filterMultiple,
                        prefixCls: `${dropdownPrefixCls}-menu`,
                        className: dropdownMenuClass,
                        onSelect: onSelectKeys,
                        onDeselect: onSelectKeys,
                        selectedKeys: selectedKeys,
                        getPopupContainer: getPopupContainer,
                        openKeys: openKeys,
                        onOpenChange: onOpenChange,
                        items: items
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                        lineNumber: 490,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true);
        };
        const getResetDisabled = ()=>{
            if (filterResetToDefaultFilteredValue) return (0, _isEqual.default)((defaultFilteredValue || []).map((key)=>String(key)), selectedKeys, true);
            return selectedKeys.length === 0;
        };
        dropdownContent = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
            children: [
                getFilterComponent(),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: `${prefixCls}-dropdown-btns`,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            size: "small",
                            disabled: getResetDisabled(),
                            onClick: ()=>onReset(),
                            children: "重置"
                        }, void 0, false, {
                            fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            size: "small",
                            type: "primary",
                            onClick: onConfirm,
                            children: "确认"
                        }, void 0, false, {
                            fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    // We should not block customize Menu with additional props
    if (column.filterDropdown) dropdownContent = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_OverrideContext.OverrideProvider, {
        selectable: undefined,
        children: dropdownContent
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
        lineNumber: 537,
        columnNumber: 23
    }, this);
    dropdownContent = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_FilterWrapper.default, {
        className: `${prefixCls}-dropdown`,
        children: dropdownContent
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
        lineNumber: 541,
        columnNumber: 5
    }, this);
    const getDropdownTrigger = ()=>{
        let filterIcon;
        if (typeof column.filterIcon === 'function') filterIcon = column.filterIcon(filtered);
        else if (column.filterIcon) filterIcon = column.filterIcon;
        else filterIcon = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FilterFilled, {}, void 0, false, {
            fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
            lineNumber: 553,
            columnNumber: 20
        }, this);
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
            role: "button",
            tabIndex: -1,
            className: (0, _classnames.default)(`${prefixCls}-trigger`, {
                active: filtered
            }),
            onClick: (e)=>{
                e.stopPropagation();
            },
            children: filterIcon
        }, void 0, false, {
            fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
            lineNumber: 558,
            columnNumber: 7
        }, this);
    };
    const mergedDropdownProps = (0, _extendsObject.default)({
        trigger: [
            'click'
        ],
        placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight',
        children: getDropdownTrigger(),
        getPopupContainer
    }, {
        ...filterDropdownProps,
        rootClassName: (0, _classnames.default)(rootClassName, filterDropdownProps.rootClassName),
        open: mergedVisible,
        onOpenChange: onVisibleChange,
        popupRender: ()=>{
            if (typeof (filterDropdownProps === null || filterDropdownProps === void 0 ? void 0 : filterDropdownProps.dropdownRender) === 'function') return filterDropdownProps.dropdownRender(dropdownContent);
            return dropdownContent;
        }
    });
    const zcyDropdownProps = {
        onVisibleChange: (props)=>{
            triggerVisible(props);
        },
        visible,
        placement: mergedDropdownProps.placement,
        trigger: mergedDropdownProps.trigger,
        overlay: dropdownContent
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: `${prefixCls}-column`,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                className: `${tablePrefixCls}-column-title`,
                children: children
            }, void 0, false, {
                fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Dropdown, {
                ...zcyDropdownProps,
                children: mergedDropdownProps.children
            }, void 0, false, {
                fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, this);
};
_s(FilterDropdown, "toLX5UcnNcyDNp8UbwFo9EKn+rU=", false, function() {
    return [
        _useSyncState.default
    ];
});
_c = FilterDropdown;
var _default = FilterDropdown;
var _c;
$RefreshReg$(_c, "FilterDropdown");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useFilter/FilterSearch.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const FilterSearch = (props)=>{
    const { value, filterSearch, tablePrefixCls, locale, onChange } = props;
    if (!filterSearch) return null;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: `${tablePrefixCls}-filter-dropdown-search`,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
            // prefix={<Icon type="search" />}
            prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.SearchOutlined, {}, void 0, false, {
                fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterSearch.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, void 0),
            placeholder: locale.filterSearchPlaceholder,
            onChange: onChange,
            value: value,
            // for skip min-width of input
            htmlSize: 1,
            className: `${tablePrefixCls}-filter-dropdown-search-input`
        }, void 0, false, {
            fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterSearch.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterSearch.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = FilterSearch;
var _default = FilterSearch;
var _c;
$RefreshReg$(_c, "FilterSearch");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useFilter/FilterWrapper.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _KeyCode = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/KeyCode.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const onKeyDown = (event)=>{
    const { keyCode } = event;
    if (keyCode === _KeyCode.default.ENTER) event.stopPropagation();
};
const FilterDropdownMenuWrapper = /*#__PURE__*/ _react.forwardRef(_c = (props, ref)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: props.className,
        onClick: (e)=>e.stopPropagation(),
        onKeyDown: onKeyDown,
        ref: ref,
        children: props.children
    }, void 0, false, {
        fileName: "src/components/VirtualTable/table/hooks/useFilter/FilterWrapper.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, this));
_c1 = FilterDropdownMenuWrapper;
FilterDropdownMenuWrapper.displayName = 'FilterDropdownMenuWrapper';
var _default = FilterDropdownMenuWrapper;
var _c;
var _c1;
$RefreshReg$(_c, "FilterDropdownMenuWrapper$React.forwardRef");
$RefreshReg$(_c1, "FilterDropdownMenuWrapper");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useFilter/index.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    flattenKeys: function() {
        return _FilterDropdown.flattenKeys;
    },
    getFilterData: function() {
        return getFilterData;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _util = __mako_require__("src/components/VirtualTable/table/util.ts");
var _FilterDropdown = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/table/hooks/useFilter/FilterDropdown.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const collectFilterStates = (columns, init, pos)=>{
    let filterStates = [];
    (columns || []).forEach((column, index)=>{
        const columnPos = (0, _util.getColumnPos)(index, pos);
        const filterDropdownIsDefined = column.filterDropdown !== undefined;
        if (column.filters || filterDropdownIsDefined || 'onFilter' in column) {
            if ('filteredValue' in column) {
                // Controlled
                let filteredValues = column.filteredValue;
                if (!filterDropdownIsDefined) filteredValues = (filteredValues === null || filteredValues === void 0 ? void 0 : filteredValues.map(String)) ?? filteredValues;
                filterStates.push({
                    column,
                    key: (0, _util.getColumnKey)(column, columnPos),
                    filteredKeys: filteredValues,
                    forceFiltered: column.filtered
                });
            } else // Uncontrolled
            filterStates.push({
                column,
                key: (0, _util.getColumnKey)(column, columnPos),
                filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
                forceFiltered: column.filtered
            });
        }
        if ('children' in column) filterStates = [
            ...filterStates,
            ...collectFilterStates(column.children, init, columnPos)
        ];
    });
    return filterStates;
};
function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, locale, triggerFilter, getPopupContainer, pos, rootClassName) {
    return columns.map((column, index)=>{
        const columnPos = (0, _util.getColumnPos)(index, pos);
        const { filterOnClose = true, filterMultiple = true, filterMode, filterSearch } = column;
        let newColumn = column;
        if (newColumn.filters || newColumn.filterDropdown) {
            const columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
            const filterState = filterStates.find(({ key })=>columnKey === key);
            newColumn = {
                ...newColumn,
                title: (renderProps)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_FilterDropdown.default, {
                        tablePrefixCls: prefixCls,
                        prefixCls: `${prefixCls}-filter`,
                        dropdownPrefixCls: dropdownPrefixCls,
                        column: newColumn,
                        columnKey: columnKey,
                        filterState: filterState,
                        filterOnClose: filterOnClose,
                        filterMultiple: filterMultiple,
                        filterMode: filterMode,
                        filterSearch: filterSearch,
                        triggerFilter: triggerFilter,
                        locale: locale,
                        getPopupContainer: getPopupContainer,
                        rootClassName: rootClassName,
                        children: (0, _util.renderColumnTitle)(column.title, renderProps)
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useFilter/index.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
            };
        }
        if ('children' in newColumn) newColumn = {
            ...newColumn,
            children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, locale, triggerFilter, getPopupContainer, columnPos, rootClassName)
        };
        return newColumn;
    });
}
const generateFilterInfo = (filterStates)=>{
    const currentFilters = {};
    filterStates.forEach(({ key, filteredKeys, column })=>{
        const keyAsString = key;
        const { filters, filterDropdown } = column;
        if (filterDropdown) currentFilters[keyAsString] = filteredKeys || null;
        else if (Array.isArray(filteredKeys)) {
            const keys = (0, _FilterDropdown.flattenKeys)(filters);
            currentFilters[keyAsString] = keys.filter((originKey)=>filteredKeys.includes(String(originKey)));
        } else currentFilters[keyAsString] = null;
    });
    return currentFilters;
};
const getFilterData = (data, filterStates, childrenColumnName)=>{
    const filterDatas = filterStates.reduce((currentData, filterState)=>{
        const { column: { onFilter, filters }, filteredKeys } = filterState;
        if (onFilter && filteredKeys && filteredKeys.length) return currentData// shallow copy
        .map((record)=>({
                ...record
            })).filter((record)=>filteredKeys.some((key)=>{
                const keys = (0, _FilterDropdown.flattenKeys)(filters);
                const keyIndex = keys.findIndex((k)=>String(k) === String(key));
                const realKey = keyIndex !== -1 ? keys[keyIndex] : key;
                // filter children
                if (record[childrenColumnName]) record[childrenColumnName] = getFilterData(record[childrenColumnName], filterStates, childrenColumnName);
                return onFilter(realKey, record);
            }));
        return currentData;
    }, data);
    return filterDatas;
};
const getMergedColumns = (rawMergedColumns)=>rawMergedColumns.flatMap((column)=>{
        if ('children' in column) return [
            column,
            ...getMergedColumns(column.children || [])
        ];
        return [
            column
        ];
    });
const useFilter = (props)=>{
    _s();
    const { prefixCls, dropdownPrefixCls, mergedColumns: rawMergedColumns, onFilterChange, getPopupContainer, locale: tableLocale, rootClassName } = props;
    const warning = (0, _warning.devUseWarning)('Table');
    const mergedColumns = _react.useMemo(()=>getMergedColumns(rawMergedColumns || []), [
        rawMergedColumns
    ]);
    const [filterStates, setFilterStates] = _react.useState(()=>collectFilterStates(mergedColumns, true));
    const mergedFilterStates = _react.useMemo(()=>{
        const collectedStates = collectFilterStates(mergedColumns, false);
        if (collectedStates.length === 0) return collectedStates;
        let filteredKeysIsAllNotControlled = true;
        let filteredKeysIsAllControlled = true;
        collectedStates.forEach(({ filteredKeys })=>{
            if (filteredKeys !== undefined) filteredKeysIsAllNotControlled = false;
            else filteredKeysIsAllControlled = false;
        });
        // Return if not controlled
        if (filteredKeysIsAllNotControlled) {
            // Filter column may have been removed
            const keyList = (mergedColumns || []).map((column, index)=>(0, _util.getColumnKey)(column, (0, _util.getColumnPos)(index)));
            return filterStates.filter(({ key })=>keyList.includes(key)).map((item)=>{
                const col = mergedColumns[keyList.findIndex((key)=>key === item.key)];
                return {
                    ...item,
                    column: {
                        ...item.column,
                        ...col
                    },
                    forceFiltered: col.filtered
                };
            });
        }
        warning(filteredKeysIsAllControlled, 'usage', 'Columns should all contain `filteredValue` or not contain `filteredValue`.');
        return collectedStates;
    }, [
        mergedColumns,
        filterStates
    ]);
    const filters = _react.useMemo(()=>generateFilterInfo(mergedFilterStates), [
        mergedFilterStates
    ]);
    const triggerFilter = (filterState)=>{
        const newFilterStates = mergedFilterStates.filter(({ key })=>key !== filterState.key);
        newFilterStates.push(filterState);
        setFilterStates(newFilterStates);
        onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
    };
    const transformColumns = (innerColumns)=>injectFilter(prefixCls, dropdownPrefixCls, innerColumns, mergedFilterStates, tableLocale, triggerFilter, getPopupContainer, undefined, rootClassName);
    return [
        transformColumns,
        mergedFilterStates,
        filters
    ];
};
_s(useFilter, "Vl38NozJ1tEmeCdfaxuzapkRtWQ=");
var _default = useFilter;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useLazyKVMap.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const useLazyKVMap = (data, childrenColumnName, getRowKey)=>{
    _s();
    const mapCacheRef = _react.useRef({});
    function getRecordByKey(key) {
        var _mapCacheRef_current_kvMap;
        if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
            const kvMap = new Map();
            function dig(records) {
                records.forEach((record, index)=>{
                    const rowKey = getRowKey(record, index);
                    kvMap.set(rowKey, record);
                    if (record && typeof record === 'object' && childrenColumnName in record) dig(record[childrenColumnName] || []);
                });
            }
            dig(data);
            mapCacheRef.current = {
                data,
                childrenColumnName,
                kvMap,
                getRowKey
            };
        }
        return (_mapCacheRef_current_kvMap = mapCacheRef.current.kvMap) === null || _mapCacheRef_current_kvMap === void 0 ? void 0 : _mapCacheRef_current_kvMap.get(key);
    }
    return [
        getRecordByKey
    ];
};
_s(useLazyKVMap, "V6YhlHsx4+zcFkbLu9Qh0xdYQ8o=");
var _default = useLazyKVMap;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/usePagination.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    DEFAULT_PAGE_SIZE: function() {
        return DEFAULT_PAGE_SIZE;
    },
    default: function() {
        return _default;
    },
    getPaginationParam: function() {
        return getPaginationParam;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _extendsObject = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/extendsObject.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const DEFAULT_PAGE_SIZE = 10;
function getPaginationParam(mergedPagination, pagination) {
    const param = {
        current: mergedPagination.current,
        pageSize: mergedPagination.pageSize
    };
    const paginationObj = pagination && typeof pagination === 'object' ? pagination : {};
    Object.keys(paginationObj).forEach((pageProp)=>{
        const value = mergedPagination[pageProp];
        if (typeof value !== 'function') param[pageProp] = value;
    });
    return param;
}
function usePagination(total, onChange, pagination) {
    _s();
    const { total: paginationTotal = 0, ...paginationObj } = pagination && typeof pagination === 'object' ? pagination : {};
    const [innerPagination, setInnerPagination] = (0, _react.useState)(()=>({
            current: 'defaultCurrent' in paginationObj ? paginationObj.defaultCurrent : 1,
            pageSize: 'defaultPageSize' in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
        }));
    // ============ Basic Pagination Config ============
    const mergedPagination = (0, _extendsObject.default)(innerPagination, paginationObj, {
        total: paginationTotal > 0 ? paginationTotal : total
    });
    // Reset `current` if data length or pageSize changed
    const maxPage = Math.ceil((paginationTotal || total) / mergedPagination.pageSize);
    if (mergedPagination.current > maxPage) // Prevent a maximum page count of 0
    mergedPagination.current = maxPage || 1;
    const refreshPagination = (current, pageSize)=>{
        setInnerPagination({
            current: current ?? 1,
            pageSize: pageSize || mergedPagination.pageSize
        });
    };
    const onInternalChange = (current, pageSize)=>{
        if (pagination) {
            var _pagination_onChange;
            (_pagination_onChange = pagination.onChange) === null || _pagination_onChange === void 0 || _pagination_onChange.call(pagination, current, pageSize);
        }
        refreshPagination(current, pageSize);
        onChange(current, pageSize || (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize));
    };
    if (pagination === false) return [
        {},
        ()=>{}
    ];
    return [
        {
            ...mergedPagination,
            onChange: onInternalChange
        },
        refreshPagination
    ];
}
_s(usePagination, "hun9lz6StevqTxdqx2+Zw1O1SDc=");
var _default = usePagination;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useSelection.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    SELECTION_ALL: function() {
        return SELECTION_ALL;
    },
    SELECTION_COLUMN: function() {
        return SELECTION_COLUMN;
    },
    SELECTION_INVERT: function() {
        return SELECTION_INVERT;
    },
    SELECTION_NONE: function() {
        return SELECTION_NONE;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rctable = __mako_require__("node_modules/rc-table/es/index.js");
var _util = __mako_require__("node_modules/rc-tree/lib/util.js");
var _conductUtil = __mako_require__("node_modules/rc-tree/lib/utils/conductUtil.js");
var _treeUtil = __mako_require__("node_modules/rc-tree/lib/utils/treeUtil.js");
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/hooks/useMergedState.js"));
var _useMultipleSelect = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/_util/hooks/useMultipleSelect.ts"));
var _warning = __mako_require__("src/components/VirtualTable/_util/warning.ts");
var _menu = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/menu/index.tsx"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const SELECTION_COLUMN = {};
const SELECTION_ALL = 'SELECT_ALL';
const SELECTION_INVERT = 'SELECT_INVERT';
const SELECTION_NONE = 'SELECT_NONE';
const EMPTY_LIST = [];
const flattenData = (childrenColumnName, data, list = [])=>{
    (data || []).forEach((record)=>{
        list.push(record);
        if (record && typeof record === 'object' && childrenColumnName in record) flattenData(childrenColumnName, record[childrenColumnName], list);
    });
    return list;
};
const useSelection = (config, rowSelection)=>{
    _s();
    const { preserveSelectedRowKeys, selectedRowKeys, defaultSelectedRowKeys, getCheckboxProps, getTitleCheckboxProps, onChange: onSelectionChange, onSelect, onSelectAll, onSelectInvert, onSelectNone, onSelectMultiple, columnWidth: selectionColWidth, type: selectionType, selections, fixed, renderCell: customizeRenderCell, hideSelectAll, checkStrictly = true } = rowSelection || {};
    const { prefixCls, data, pageData, getRecordByKey, getRowKey, expandType, childrenColumnName, locale: tableLocale, getPopupContainer } = config;
    const warning = (0, _warning.devUseWarning)('Table');
    // ========================= MultipleSelect =========================
    const [multipleSelect, updatePrevSelectedIndex] = (0, _useMultipleSelect.default)((item)=>item);
    // ========================= Keys =========================
    const [mergedSelectedKeys, setMergedSelectedKeys] = (0, _useMergedState.default)(selectedRowKeys || defaultSelectedRowKeys || EMPTY_LIST, {
        value: selectedRowKeys
    });
    // ======================== Caches ========================
    const preserveRecordsRef = _react.useRef(new Map());
    const updatePreserveRecordsCache = (0, _react.useCallback)((keys)=>{
        if (preserveSelectedRowKeys) {
            const newCache = new Map();
            // Keep key if mark as preserveSelectedRowKeys
            keys.forEach((key)=>{
                let record = getRecordByKey(key);
                if (!record && preserveRecordsRef.current.has(key)) record = preserveRecordsRef.current.get(key);
                newCache.set(key, record);
            });
            // Refresh to new cache
            preserveRecordsRef.current = newCache;
        }
    }, [
        getRecordByKey,
        preserveSelectedRowKeys
    ]);
    // Update cache with selectedKeys
    _react.useEffect(()=>{
        updatePreserveRecordsCache(mergedSelectedKeys);
    }, [
        mergedSelectedKeys
    ]);
    // Get flatten data
    const flattedData = (0, _react.useMemo)(()=>flattenData(childrenColumnName, pageData), [
        childrenColumnName,
        pageData
    ]);
    const { keyEntities } = (0, _react.useMemo)(()=>{
        if (checkStrictly) return {
            keyEntities: null
        };
        let convertData = data;
        if (preserveSelectedRowKeys) {
            // use flattedData keys
            const keysSet = new Set(flattedData.map((record, index)=>getRowKey(record, index)));
            // remove preserveRecords that duplicate data
            const preserveRecords = Array.from(preserveRecordsRef.current).reduce((total, [key, value])=>keysSet.has(key) ? total : total.concat(value), []);
            convertData = [
                ...convertData,
                ...preserveRecords
            ];
        }
        return (0, _treeUtil.convertDataToEntities)(convertData, {
            externalGetKey: getRowKey,
            childrenPropName: childrenColumnName
        });
    }, [
        data,
        getRowKey,
        checkStrictly,
        childrenColumnName,
        preserveSelectedRowKeys,
        flattedData
    ]);
    // Get all checkbox props
    const checkboxPropsMap = (0, _react.useMemo)(()=>{
        const map = new Map();
        flattedData.forEach((record, index)=>{
            const key = getRowKey(record, index);
            const checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
            map.set(key, checkboxProps);
            warning(!('checked' in checkboxProps || 'defaultChecked' in checkboxProps), 'usage', 'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.');
        });
        return map;
    }, [
        flattedData,
        getRowKey,
        getCheckboxProps
    ]);
    const isCheckboxDisabled = (0, _react.useCallback)((r)=>{
        const rowKey = getRowKey(r);
        let checkboxProps;
        if (checkboxPropsMap.has(rowKey)) checkboxProps = checkboxPropsMap.get(getRowKey(r));
        else checkboxProps = getCheckboxProps ? getCheckboxProps(r) : undefined;
        return !!(checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.disabled);
    }, [
        checkboxPropsMap,
        getRowKey
    ]);
    const [derivedSelectedKeys, derivedHalfSelectedKeys] = (0, _react.useMemo)(()=>{
        if (checkStrictly) return [
            mergedSelectedKeys || [],
            []
        ];
        const { checkedKeys, halfCheckedKeys } = (0, _conductUtil.conductCheck)(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled);
        return [
            checkedKeys || [],
            halfCheckedKeys
        ];
    }, [
        mergedSelectedKeys,
        checkStrictly,
        keyEntities,
        isCheckboxDisabled
    ]);
    const derivedSelectedKeySet = (0, _react.useMemo)(()=>{
        const keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
        return new Set(keys);
    }, [
        derivedSelectedKeys,
        selectionType
    ]);
    const derivedHalfSelectedKeySet = (0, _react.useMemo)(()=>selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys), [
        derivedHalfSelectedKeys,
        selectionType
    ]);
    // Reset if rowSelection reset
    _react.useEffect(()=>{
        if (!rowSelection) setMergedSelectedKeys(EMPTY_LIST);
    }, [
        !!rowSelection
    ]);
    const setSelectedKeys = (0, _react.useCallback)((keys, method)=>{
        let availableKeys;
        let records;
        updatePreserveRecordsCache(keys);
        if (preserveSelectedRowKeys) {
            availableKeys = keys;
            records = keys.map((key)=>preserveRecordsRef.current.get(key));
        } else {
            // Filter key which not exist in the `dataSource`
            availableKeys = [];
            records = [];
            keys.forEach((key)=>{
                const record = getRecordByKey(key);
                if (record !== undefined) {
                    availableKeys.push(key);
                    records.push(record);
                }
            });
        }
        setMergedSelectedKeys(availableKeys);
        onSelectionChange === null || onSelectionChange === void 0 || onSelectionChange(availableKeys, records, {
            type: method
        });
    }, [
        setMergedSelectedKeys,
        getRecordByKey,
        onSelectionChange,
        preserveSelectedRowKeys
    ]);
    // ====================== Selections ======================
    // Trigger single `onSelect` event
    const triggerSingleSelection = (0, _react.useCallback)((key, selected, keys, event)=>{
        if (onSelect) {
            const rows = keys.map((k)=>getRecordByKey(k));
            onSelect(getRecordByKey(key), selected, rows, event);
        }
        setSelectedKeys(keys, 'single');
    }, [
        onSelect,
        getRecordByKey,
        setSelectedKeys
    ]);
    const mergedSelections = (0, _react.useMemo)(()=>{
        if (!selections || hideSelectAll) return null;
        const selectionList = selections === true ? [
            SELECTION_ALL,
            SELECTION_INVERT,
            SELECTION_NONE
        ] : selections;
        return selectionList.map((selection)=>{
            if (selection === SELECTION_ALL) return {
                key: 'all',
                text: '全选所有',
                onSelect () {
                    setSelectedKeys(data.map((record, index)=>getRowKey(record, index)).filter((key)=>{
                        const checkProps = checkboxPropsMap.get(key);
                        return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.has(key);
                    }), 'all');
                }
            };
            if (selection === SELECTION_INVERT) return {
                key: 'invert',
                text: '反选单页',
                onSelect () {
                    const keySet = new Set(derivedSelectedKeySet);
                    pageData.forEach((record, index)=>{
                        const key = getRowKey(record, index);
                        const checkProps = checkboxPropsMap.get(key);
                        if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                            if (keySet.has(key)) keySet.delete(key);
                            else keySet.add(key);
                        }
                    });
                    const keys = Array.from(keySet);
                    if (onSelectInvert) {
                        warning.deprecated(false, 'onSelectInvert', 'onChange');
                        onSelectInvert(keys);
                    }
                    setSelectedKeys(keys, 'invert');
                }
            };
            if (selection === SELECTION_NONE) return {
                key: 'none',
                text: '清空所有',
                onSelect () {
                    onSelectNone === null || onSelectNone === void 0 || onSelectNone();
                    setSelectedKeys(Array.from(derivedSelectedKeySet).filter((key)=>{
                        const checkProps = checkboxPropsMap.get(key);
                        return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
                    }), 'none');
                }
            };
            return selection;
        }).map((selection)=>({
                ...selection,
                onSelect: (...rest)=>{
                    var _selection_onSelect;
                    (_selection_onSelect = selection.onSelect) === null || _selection_onSelect === void 0 || _selection_onSelect.call(selection, ...rest);
                    updatePrevSelectedIndex(null);
                }
            }));
    }, [
        selections,
        derivedSelectedKeySet,
        pageData,
        getRowKey,
        onSelectInvert,
        setSelectedKeys
    ]);
    // ======================= Columns ========================
    const transformColumns = (0, _react.useCallback)((columns)=>{
        var _prevCol_INTERNAL_COL_DEFINE;
        // >>>>>>>>>>> Skip if not exists `rowSelection`
        if (!rowSelection) {
            warning(!columns.includes(SELECTION_COLUMN), 'usage', '`rowSelection` is not config but `SELECTION_COLUMN` exists in the `columns`.');
            return columns.filter((col)=>col !== SELECTION_COLUMN);
        }
        // >>>>>>>>>>> Support selection
        let cloneColumns = [
            ...columns
        ];
        const keySet = new Set(derivedSelectedKeySet);
        // Record key only need check with enabled
        const recordKeys = flattedData.map(getRowKey).filter((key)=>!checkboxPropsMap.get(key).disabled);
        const checkedCurrentAll = recordKeys.every((key)=>keySet.has(key));
        const checkedCurrentSome = recordKeys.some((key)=>keySet.has(key));
        const onSelectAllChange = ()=>{
            const changeKeys = [];
            if (checkedCurrentAll) recordKeys.forEach((key)=>{
                keySet.delete(key);
                changeKeys.push(key);
            });
            else recordKeys.forEach((key)=>{
                if (!keySet.has(key)) {
                    keySet.add(key);
                    changeKeys.push(key);
                }
            });
            const keys = Array.from(keySet);
            onSelectAll === null || onSelectAll === void 0 || onSelectAll(!checkedCurrentAll, keys.map((k)=>getRecordByKey(k)), changeKeys.map((k)=>getRecordByKey(k)));
            setSelectedKeys(keys, 'all');
            updatePrevSelectedIndex(null);
        };
        // ===================== Render =====================
        // Title Cell
        let title;
        let columnTitleCheckbox;
        if (selectionType !== 'radio') {
            let customizeSelections;
            if (mergedSelections) {
                const menu = {
                    getPopupContainer,
                    items: mergedSelections.map((selection, index)=>{
                        const { key, text, onSelect: onSelectionClick } = selection;
                        return {
                            key: key ?? index,
                            onClick: ()=>{
                                onSelectionClick === null || onSelectionClick === void 0 || onSelectionClick(recordKeys);
                            },
                            label: text
                        };
                    })
                };
                // 魔改
                const overlay = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_menu.default, {
                    mode: "horizontal",
                    items: menu.items
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                    lineNumber: 457,
                    columnNumber: 27
                }, this);
                customizeSelections = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: `${prefixCls}-selection-extra`,
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Dropdown, {
                        menu: overlay,
                        getPopupContainer: getPopupContainer,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DownOutlined, {}, void 0, false, {
                                fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                                lineNumber: 464,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                            lineNumber: 463,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                        lineNumber: 462,
                        columnNumber: 16
                    }, this)
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                    lineNumber: 460,
                    columnNumber: 13
                }, this);
            }
            const allDisabledData = flattedData.map((record, index)=>{
                const key = getRowKey(record, index);
                const checkboxProps = checkboxPropsMap.get(key) || {};
                return {
                    checked: keySet.has(key),
                    ...checkboxProps
                };
            }).filter(({ disabled })=>disabled);
            const allDisabled = !!allDisabledData.length && allDisabledData.length === flattedData.length;
            const allDisabledAndChecked = allDisabled && allDisabledData.every(({ checked })=>checked);
            const allDisabledSomeChecked = allDisabled && allDisabledData.some(({ checked })=>checked);
            const customCheckboxProps = (getTitleCheckboxProps === null || getTitleCheckboxProps === void 0 ? void 0 : getTitleCheckboxProps()) || {};
            const { onChange, disabled } = customCheckboxProps;
            columnTitleCheckbox = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Checkbox, {
                "aria-label": customizeSelections ? 'Custom selection' : 'Select all',
                ...customCheckboxProps,
                checked: !allDisabled ? !!flattedData.length && checkedCurrentAll : allDisabledAndChecked,
                indeterminate: !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
                onChange: (e)=>{
                    onSelectAllChange();
                    onChange === null || onChange === void 0 || onChange(e);
                },
                disabled: disabled ?? (flattedData.length === 0 || allDisabled),
                skipGroup: true
            }, void 0, false, {
                fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                lineNumber: 489,
                columnNumber: 11
            }, this);
            title = !hideSelectAll && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: `${prefixCls}-selection`,
                children: [
                    columnTitleCheckbox,
                    customizeSelections
                ]
            }, void 0, true, {
                fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                lineNumber: 510,
                columnNumber: 11
            }, this);
        }
        // Body Cell
        let renderCell;
        if (selectionType === 'radio') renderCell = (_, record, index)=>{
            const key = getRowKey(record, index);
            const checked = keySet.has(key);
            const checkboxProps = checkboxPropsMap.get(key);
            return {
                node: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio, {
                    ...checkboxProps,
                    checked: checked,
                    onClick: (e)=>{
                        var _checkboxProps_onClick;
                        e.stopPropagation();
                        checkboxProps === null || checkboxProps === void 0 || (_checkboxProps_onClick = checkboxProps.onClick) === null || _checkboxProps_onClick === void 0 || _checkboxProps_onClick.call(checkboxProps, e);
                    },
                    onChange: (event)=>{
                        var _checkboxProps_onChange;
                        if (!keySet.has(key)) triggerSingleSelection(key, true, [
                            key
                        ], event.nativeEvent);
                        checkboxProps === null || checkboxProps === void 0 || (_checkboxProps_onChange = checkboxProps.onChange) === null || _checkboxProps_onChange === void 0 || _checkboxProps_onChange.call(checkboxProps, event);
                    }
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                    lineNumber: 530,
                    columnNumber: 15
                }, this),
                checked
            };
        };
        else renderCell = (_, record, index)=>{
            const key = getRowKey(record, index);
            const checked = keySet.has(key);
            const indeterminate = derivedHalfSelectedKeySet.has(key);
            const checkboxProps = checkboxPropsMap.get(key);
            let mergedIndeterminate;
            if (expandType === 'nest') {
                mergedIndeterminate = indeterminate;
                warning(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== 'boolean', 'usage', 'set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.');
            } else mergedIndeterminate = (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) ?? indeterminate;
            // Record checked
            return {
                node: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Checkbox, {
                    ...checkboxProps,
                    indeterminate: mergedIndeterminate,
                    checked: checked,
                    skipGroup: true,
                    onClick: (e)=>{
                        var _checkboxProps_onClick;
                        e.stopPropagation();
                        checkboxProps === null || checkboxProps === void 0 || (_checkboxProps_onClick = checkboxProps.onClick) === null || _checkboxProps_onClick === void 0 || _checkboxProps_onClick.call(checkboxProps, e);
                    },
                    onChange: (event)=>{
                        var _checkboxProps_onChange;
                        const { nativeEvent } = event;
                        const { shiftKey } = nativeEvent;
                        const currentSelectedIndex = recordKeys.findIndex((item)=>item === key);
                        const isMultiple = derivedSelectedKeys.some((item)=>recordKeys.includes(item));
                        if (shiftKey && checkStrictly && isMultiple) {
                            const changedKeys = multipleSelect(currentSelectedIndex, recordKeys, keySet);
                            const keys = Array.from(keySet);
                            onSelectMultiple === null || onSelectMultiple === void 0 || onSelectMultiple(!checked, keys.map((recordKey)=>getRecordByKey(recordKey)), changedKeys.map((recordKey)=>getRecordByKey(recordKey)));
                            setSelectedKeys(keys, 'multiple');
                        } else {
                            // Single record selected
                            const originCheckedKeys = derivedSelectedKeys;
                            if (checkStrictly) {
                                const checkedKeys = checked ? (0, _util.arrDel)(originCheckedKeys, key) : (0, _util.arrAdd)(originCheckedKeys, key);
                                triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                            } else {
                                // Always fill first
                                const result = (0, _conductUtil.conductCheck)([
                                    ...originCheckedKeys,
                                    key
                                ], true, keyEntities, isCheckboxDisabled);
                                const { checkedKeys, halfCheckedKeys } = result;
                                let nextCheckedKeys = checkedKeys;
                                // If remove, we do it again to correction
                                if (checked) {
                                    const tempKeySet = new Set(checkedKeys);
                                    tempKeySet.delete(key);
                                    nextCheckedKeys = (0, _conductUtil.conductCheck)(Array.from(tempKeySet), {
                                        checked: false,
                                        halfCheckedKeys
                                    }, keyEntities, isCheckboxDisabled).checkedKeys;
                                }
                                triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                            }
                        }
                        if (checked) updatePrevSelectedIndex(null);
                        else updatePrevSelectedIndex(currentSelectedIndex);
                        checkboxProps === null || checkboxProps === void 0 || (_checkboxProps_onChange = checkboxProps.onChange) === null || _checkboxProps_onChange === void 0 || _checkboxProps_onChange.call(checkboxProps, event);
                    }
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSelection.tsx",
                    lineNumber: 568,
                    columnNumber: 15
                }, this),
                checked
            };
        };
        const renderSelectionCell = (_, record, index)=>{
            const { node, checked } = renderCell(_, record, index);
            if (customizeRenderCell) return customizeRenderCell(checked, record, index, node);
            return node;
        };
        // Insert selection column if not exist
        if (!cloneColumns.includes(SELECTION_COLUMN)) {
            // Always after expand icon
            if (cloneColumns.findIndex((col)=>{
                var _col_INTERNAL_COL_DEFINE;
                return ((_col_INTERNAL_COL_DEFINE = col[_rctable.INTERNAL_COL_DEFINE]) === null || _col_INTERNAL_COL_DEFINE === void 0 ? void 0 : _col_INTERNAL_COL_DEFINE.columnType) === 'EXPAND_COLUMN';
            }) === 0) {
                const [expandColumn, ...restColumns] = cloneColumns;
                cloneColumns = [
                    expandColumn,
                    SELECTION_COLUMN,
                    ...restColumns
                ];
            } else // Normal insert at first column
            cloneColumns = [
                SELECTION_COLUMN,
                ...cloneColumns
            ];
        }
        // Deduplicate selection column
        const selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
        warning(cloneColumns.filter((col)=>col === SELECTION_COLUMN).length <= 1, 'usage', 'Multiple `SELECTION_COLUMN` exist in `columns`.');
        cloneColumns = cloneColumns.filter((column, index)=>column !== SELECTION_COLUMN || index === selectionColumnIndex);
        // Fixed column logic
        const prevCol = cloneColumns[selectionColumnIndex - 1];
        const nextCol = cloneColumns[selectionColumnIndex + 1];
        let mergedFixed = fixed;
        if (mergedFixed === undefined) {
            if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== undefined) mergedFixed = nextCol.fixed;
            else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== undefined) mergedFixed = prevCol.fixed;
        }
        if (mergedFixed && prevCol && ((_prevCol_INTERNAL_COL_DEFINE = prevCol[_rctable.INTERNAL_COL_DEFINE]) === null || _prevCol_INTERNAL_COL_DEFINE === void 0 ? void 0 : _prevCol_INTERNAL_COL_DEFINE.columnType) === 'EXPAND_COLUMN' && prevCol.fixed === undefined) prevCol.fixed = mergedFixed;
        const columnCls = (0, _classnames.default)(`${prefixCls}-selection-col`, {
            [`${prefixCls}-selection-col-with-dropdown`]: selections && selectionType === 'checkbox'
        });
        const renderColumnTitle = ()=>{
            if (!(rowSelection === null || rowSelection === void 0 ? void 0 : rowSelection.columnTitle)) return title;
            if (typeof rowSelection.columnTitle === 'function') return rowSelection.columnTitle(columnTitleCheckbox);
            return rowSelection.columnTitle;
        };
        // Replace with real selection column
        const selectionColumn = {
            fixed: mergedFixed,
            width: selectionColWidth,
            className: `${prefixCls}-selection-column`,
            title: renderColumnTitle(),
            render: renderSelectionCell,
            onCell: rowSelection.onCell,
            align: rowSelection.align,
            [_rctable.INTERNAL_COL_DEFINE]: {
                className: columnCls
            }
        };
        return cloneColumns.map((col)=>col === SELECTION_COLUMN ? selectionColumn : col);
    }, [
        getRowKey,
        flattedData,
        rowSelection,
        derivedSelectedKeys,
        derivedSelectedKeySet,
        derivedHalfSelectedKeySet,
        selectionColWidth,
        mergedSelections,
        expandType,
        checkboxPropsMap,
        onSelectMultiple,
        triggerSingleSelection,
        isCheckboxDisabled
    ]);
    return [
        transformColumns,
        derivedSelectedKeySet
    ];
};
_s(useSelection, "9ODY129qjHb1pWCyrfIqAfEnFr4=", false, function() {
    return [
        _useMultipleSelect.default,
        _useMergedState.default
    ];
});
var _default = useSelection;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useSorter.tsx": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    getSortData: function() {
        return getSortData;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _ = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _KeyCode = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/lib/KeyCode.js"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _util = __mako_require__("src/components/VirtualTable/table/util.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const ASCEND = 'ascend';
const DESCEND = 'descend';
const getMultiplePriority = (column)=>{
    if (typeof column.sorter === 'object' && typeof column.sorter.multiple === 'number') return column.sorter.multiple;
    return false;
};
const getSortFunction = (sorter)=>{
    if (typeof sorter === 'function') return sorter;
    if (sorter && typeof sorter === 'object' && sorter.compare) return sorter.compare;
    return false;
};
const nextSortDirection = (sortDirections, current)=>{
    if (!current) return sortDirections[0];
    return sortDirections[sortDirections.indexOf(current) + 1];
};
const collectSortStates = (columns, init, pos)=>{
    let sortStates = [];
    const pushState = (column, columnPos)=>{
        sortStates.push({
            column,
            key: (0, _util.getColumnKey)(column, columnPos),
            multiplePriority: getMultiplePriority(column),
            sortOrder: column.sortOrder
        });
    };
    (columns || []).forEach((column, index)=>{
        const columnPos = (0, _util.getColumnPos)(index, pos);
        if (column.children) {
            if ('sortOrder' in column) // Controlled
            pushState(column, columnPos);
            sortStates = [
                ...sortStates,
                ...collectSortStates(column.children, init, columnPos)
            ];
        } else if (column.sorter) {
            if ('sortOrder' in column) // Controlled
            pushState(column, columnPos);
            else if (init && column.defaultSortOrder) // Default sorter
            sortStates.push({
                column,
                key: (0, _util.getColumnKey)(column, columnPos),
                multiplePriority: getMultiplePriority(column),
                sortOrder: column.defaultSortOrder
            });
        }
    });
    return sortStates;
};
const injectSorter = (prefixCls, columns, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos)=>{
    const finalColumns = (columns || []).map((column, index)=>{
        const columnPos = (0, _util.getColumnPos)(index, pos);
        let newColumn = column;
        if (newColumn.sorter) {
            const sortDirections = newColumn.sortDirections || defaultSortDirections;
            const showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
            const columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
            const sorterState = sorterStates.find(({ key })=>key === columnKey);
            const sortOrder = sorterState ? sorterState.sortOrder : null;
            const nextSortOrder = nextSortDirection(sortDirections, sortOrder);
            let sorter;
            if (column.sortIcon) sorter = column.sortIcon({
                sortOrder
            });
            else {
                const upNode = sortDirections.includes(ASCEND) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CaretUpOutlined, {
                    className: (0, _classnames.default)(`${prefixCls}-column-sorter-up`, {
                        active: sortOrder === ASCEND
                    })
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this);
                const downNode = sortDirections.includes(DESCEND) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CaretDownOutlined, {
                    className: (0, _classnames.default)(`${prefixCls}-column-sorter-down`, {
                        active: sortOrder === DESCEND
                    })
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this);
                sorter = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    className: (0, _classnames.default)(`${prefixCls}-column-sorter`, {
                        [`${prefixCls}-column-sorter-full`]: !!(upNode && downNode)
                    }),
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                        className: `${prefixCls}-column-sorter-inner`,
                        "aria-hidden": "true",
                        children: [
                            upNode,
                            downNode
                        ]
                    }, void 0, true, {
                        fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this);
            }
            const { cancelSort, triggerAsc, triggerDesc } = tableLocale || {};
            let sortTip = cancelSort;
            if (nextSortOrder === DESCEND) sortTip = triggerDesc;
            else if (nextSortOrder === ASCEND) sortTip = triggerAsc;
            const tooltipProps = typeof showSorterTooltip === 'object' ? {
                title: sortTip,
                ...showSorterTooltip
            } : {
                title: sortTip
            };
            newColumn = {
                ...newColumn,
                className: (0, _classnames.default)(newColumn.className, {
                    [`${prefixCls}-column-sort`]: sortOrder
                }),
                title: (renderProps)=>{
                    const columnSortersClass = `${prefixCls}-column-sorters`;
                    const renderColumnTitleWrapper = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                        className: `${prefixCls}-column-title`,
                        children: (0, _util.renderColumnTitle)(column.title, renderProps)
                    }, void 0, false, {
                        fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, this);
                    const renderSortTitle = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: columnSortersClass,
                        children: [
                            renderColumnTitleWrapper,
                            sorter
                        ]
                    }, void 0, true, {
                        fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this);
                    if (showSorterTooltip) {
                        if (typeof showSorterTooltip !== 'boolean' && (showSorterTooltip === null || showSorterTooltip === void 0 ? void 0 : showSorterTooltip.target) === 'sorter-icon') return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: `${columnSortersClass} ${prefixCls}-column-sorters-tooltip-target-sorter`,
                            children: [
                                renderColumnTitleWrapper,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_.Tooltip, {
                                    ...tooltipProps,
                                    children: sorter
                                }, void 0, false, {
                                    fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                                    lineNumber: 215,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                            lineNumber: 211,
                            columnNumber: 17
                        }, this);
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_.Tooltip, {
                            ...tooltipProps,
                            children: renderSortTitle
                        }, void 0, false, {
                            fileName: "src/components/VirtualTable/table/hooks/useSorter.tsx",
                            lineNumber: 219,
                            columnNumber: 20
                        }, this);
                    }
                    return renderSortTitle;
                },
                onHeaderCell: (col)=>{
                    var _column_onHeaderCell;
                    const cell = ((_column_onHeaderCell = column.onHeaderCell) === null || _column_onHeaderCell === void 0 ? void 0 : _column_onHeaderCell.call(column, col)) || {};
                    const originOnClick = cell.onClick;
                    const originOKeyDown = cell.onKeyDown;
                    cell.onClick = (event)=>{
                        triggerSorter({
                            column,
                            key: columnKey,
                            sortOrder: nextSortOrder,
                            multiplePriority: getMultiplePriority(column)
                        });
                        originOnClick === null || originOnClick === void 0 || originOnClick(event);
                    };
                    cell.onKeyDown = (event)=>{
                        if (event.keyCode === _KeyCode.default.ENTER) {
                            triggerSorter({
                                column,
                                key: columnKey,
                                sortOrder: nextSortOrder,
                                multiplePriority: getMultiplePriority(column)
                            });
                            originOKeyDown === null || originOKeyDown === void 0 || originOKeyDown(event);
                        }
                    };
                    const renderTitle = (0, _util.safeColumnTitle)(column.title, {});
                    const displayTitle = renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle.toString();
                    // Inform the screen-reader so it can tell the visually impaired user which column is sorted
                    if (sortOrder) cell['aria-sort'] = sortOrder === 'ascend' ? 'ascending' : 'descending';
                    cell['aria-label'] = displayTitle || '';
                    cell.className = (0, _classnames.default)(cell.className, `${prefixCls}-column-has-sorters`);
                    cell.tabIndex = 0;
                    if (column.ellipsis) cell.title = (renderTitle ?? '').toString();
                    return cell;
                }
            };
        }
        if ('children' in newColumn) newColumn = {
            ...newColumn,
            children: injectSorter(prefixCls, newColumn.children, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
        };
        return newColumn;
    });
    return finalColumns;
};
const stateToInfo = (sorterState)=>{
    const { column, sortOrder } = sorterState;
    return {
        column,
        order: sortOrder,
        field: column.dataIndex,
        columnKey: column.key
    };
};
const generateSorterInfo = (sorterStates)=>{
    const activeSorters = sorterStates.filter(({ sortOrder })=>sortOrder).map(stateToInfo);
    // =========== Legacy compatible support ===========
    // https://github.com/ant-design/ant-design/pull/19226
    if (activeSorters.length === 0 && sorterStates.length) {
        const lastIndex = sorterStates.length - 1;
        return {
            ...stateToInfo(sorterStates[lastIndex]),
            column: undefined,
            order: undefined,
            field: undefined,
            columnKey: undefined
        };
    }
    if (activeSorters.length <= 1) return activeSorters[0] || {};
    return activeSorters;
};
const getSortData = (data, sortStates, childrenColumnName)=>{
    const innerSorterStates = sortStates.slice().sort((a, b)=>b.multiplePriority - a.multiplePriority);
    const cloneData = data.slice();
    const runningSorters = innerSorterStates.filter(({ column: { sorter }, sortOrder })=>getSortFunction(sorter) && sortOrder);
    // Skip if no sorter needed
    if (!runningSorters.length) return cloneData;
    return cloneData.sort((record1, record2)=>{
        for(let i = 0; i < runningSorters.length; i += 1){
            const sorterState = runningSorters[i];
            const { column: { sorter }, sortOrder } = sorterState;
            const compareFn = getSortFunction(sorter);
            if (compareFn && sortOrder) {
                const compareResult = compareFn(record1, record2, sortOrder);
                if (compareResult !== 0) return sortOrder === ASCEND ? compareResult : -compareResult;
            }
        }
        return 0;
    }).map((record)=>{
        const subRecords = record[childrenColumnName];
        if (subRecords) return {
            ...record,
            [childrenColumnName]: getSortData(subRecords, sortStates, childrenColumnName)
        };
        return record;
    });
};
const useFilterSorter = (props)=>{
    _s();
    const { prefixCls, mergedColumns, sortDirections, tableLocale, showSorterTooltip, onSorterChange } = props;
    const [sortStates, setSortStates] = _react.useState(()=>collectSortStates(mergedColumns, true));
    const getColumnKeys = (columns, pos)=>{
        const newKeys = [];
        columns.forEach((item, index)=>{
            const columnPos = (0, _util.getColumnPos)(index, pos);
            newKeys.push((0, _util.getColumnKey)(item, columnPos));
            if (Array.isArray(item.children)) {
                const childKeys = getColumnKeys(item.children, columnPos);
                newKeys.push(...childKeys);
            }
        });
        return newKeys;
    };
    const mergedSorterStates = _react.useMemo(()=>{
        let validate = true;
        const collectedStates = collectSortStates(mergedColumns, false);
        // Return if not controlled
        if (!collectedStates.length) {
            const mergedColumnsKeys = getColumnKeys(mergedColumns);
            return sortStates.filter(({ key })=>mergedColumnsKeys.includes(key));
        }
        const validateStates = [];
        function patchStates(state) {
            if (validate) validateStates.push(state);
            else validateStates.push({
                ...state,
                sortOrder: null
            });
        }
        let multipleMode = null;
        collectedStates.forEach((state)=>{
            if (multipleMode === null) {
                patchStates(state);
                if (state.sortOrder) {
                    if (state.multiplePriority === false) validate = false;
                    else multipleMode = true;
                }
            } else if (multipleMode && state.multiplePriority !== false) patchStates(state);
            else {
                validate = false;
                patchStates(state);
            }
        });
        return validateStates;
    }, [
        mergedColumns,
        sortStates
    ]);
    // Get render columns title required props
    const columnTitleSorterProps = _react.useMemo(()=>{
        var _sortColumns_, _sortColumns_1;
        const sortColumns = mergedSorterStates.map(({ column, sortOrder })=>({
                column,
                order: sortOrder
            }));
        return {
            sortColumns,
            // Legacy
            sortColumn: (_sortColumns_ = sortColumns[0]) === null || _sortColumns_ === void 0 ? void 0 : _sortColumns_.column,
            sortOrder: (_sortColumns_1 = sortColumns[0]) === null || _sortColumns_1 === void 0 ? void 0 : _sortColumns_1.order
        };
    }, [
        mergedSorterStates
    ]);
    const triggerSorter = (sortState)=>{
        let newSorterStates;
        if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) newSorterStates = [
            sortState
        ];
        else newSorterStates = [
            ...mergedSorterStates.filter(({ key })=>key !== sortState.key),
            sortState
        ];
        setSortStates(newSorterStates);
        onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
    };
    const transformColumns = (innerColumns)=>injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
    const getSorters = ()=>generateSorterInfo(mergedSorterStates);
    return [
        transformColumns,
        mergedSorterStates,
        columnTitleSorterProps,
        getSorters
    ];
};
_s(useFilterSorter, "pvfRvB2RzagzDGNIyH9CVCHje1k=");
var _default = useFilterSorter;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/hooks/useTitleColumns.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _util = __mako_require__("src/components/VirtualTable/table/util.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const fillTitle = (columns, columnTitleProps)=>{
    const finalColumns = columns.map((column)=>{
        const cloneColumn = {
            ...column
        };
        cloneColumn.title = (0, _util.renderColumnTitle)(column.title, columnTitleProps);
        if ('children' in cloneColumn) cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
        return cloneColumn;
    });
    return finalColumns;
};
const useTitleColumns = (columnTitleProps)=>{
    _s();
    const filledColumns = _react.useCallback((columns)=>fillTitle(columns, columnTitleProps), [
        columnTitleProps
    ]);
    return [
        filledColumns
    ];
};
_s(useTitleColumns, "jGqU1ovkSCOhe82RlC+Xvx4IbJU=");
var _default = useTitleColumns;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/bordered.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genBorderedStyle = (token)=>{
    const { componentCls, lineWidth, lineType, tableBorderColor, tableHeaderBg, tablePaddingVertical, tablePaddingHorizontal, calc } = token;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
    const getSizeBorderStyle = (size, paddingVertical, paddingHorizontal)=>({
            [`&${componentCls}-${size}`]: {
                [`> ${componentCls}-container`]: {
                    [`> ${componentCls}-content, > ${componentCls}-body`]: {
                        [`
            > table > tbody > tr > th,
            > table > tbody > tr > td
          `]: {
                            [`> ${componentCls}-expanded-row-fixed`]: {
                                margin: `${(0, _cssinjs.unit)(calc(paddingVertical).mul(-1).equal())}
              ${(0, _cssinjs.unit)(calc(calc(paddingHorizontal).add(lineWidth)).mul(-1).equal())}`
                            }
                        }
                    }
                }
            }
        });
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}${componentCls}-bordered`]: {
                // ============================ Title =============================
                [`> ${componentCls}-title`]: {
                    border: tableBorder,
                    borderBottom: 0
                },
                // ============================ Content ============================
                [`> ${componentCls}-container`]: {
                    borderInlineStart: tableBorder,
                    borderTop: tableBorder,
                    [`
            > ${componentCls}-content,
            > ${componentCls}-header,
            > ${componentCls}-body,
            > ${componentCls}-summary
          `]: {
                        '> table': {
                            // ============================= Cell =============================
                            [`
                > thead > tr > th,
                > thead > tr > td,
                > tbody > tr > th,
                > tbody > tr > td,
                > tfoot > tr > th,
                > tfoot > tr > td
              `]: {
                                borderInlineEnd: tableBorder
                            },
                            // ============================ Header ============================
                            '> thead': {
                                '> tr:not(:last-child) > th': {
                                    borderBottom: tableBorder
                                },
                                '> tr > th::before': {
                                    backgroundColor: 'transparent !important'
                                }
                            },
                            // Fixed right should provides additional border
                            [`
                > thead > tr,
                > tbody > tr,
                > tfoot > tr
              `]: {
                                [`> ${componentCls}-cell-fix-right-first::after`]: {
                                    borderInlineEnd: tableBorder
                                }
                            },
                            // ========================== Expandable ==========================
                            [`
                > tbody > tr > th,
                > tbody > tr > td
              `]: {
                                [`> ${componentCls}-expanded-row-fixed`]: {
                                    margin: `${(0, _cssinjs.unit)(calc(tablePaddingVertical).mul(-1).equal())} ${(0, _cssinjs.unit)(calc(calc(tablePaddingHorizontal).add(lineWidth)).mul(-1).equal())}`,
                                    '&::after': {
                                        position: 'absolute',
                                        top: 0,
                                        insetInlineEnd: lineWidth,
                                        bottom: 0,
                                        borderInlineEnd: tableBorder,
                                        content: '""'
                                    }
                                }
                            }
                        }
                    }
                },
                // ============================ Scroll ============================
                [`&${componentCls}-scroll-horizontal`]: {
                    [`> ${componentCls}-container > ${componentCls}-body`]: {
                        '> table > tbody': {
                            [`
                > tr${componentCls}-expanded-row,
                > tr${componentCls}-placeholder
              `]: {
                                '> th, > td': {
                                    borderInlineEnd: 0
                                }
                            }
                        }
                    }
                },
                // ============================ Size ============================
                ...getSizeBorderStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle),
                ...getSizeBorderStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall),
                // ============================ Footer ============================
                [`> ${componentCls}-footer`]: {
                    border: tableBorder,
                    borderTop: 0
                }
            },
            // ============================ Nested ============================
            [`${componentCls}-cell`]: {
                [`${componentCls}-container:first-child`]: {
                    // :first-child to avoid the case when bordered and title is set
                    borderTop: 0
                },
                // https://github.com/ant-design/ant-design/issues/35577
                '&-scrollbar:not([rowspan])': {
                    boxShadow: `0 ${(0, _cssinjs.unit)(lineWidth)} 0 ${(0, _cssinjs.unit)(lineWidth)} ${tableHeaderBg}`
                }
            },
            [`${componentCls}-bordered ${componentCls}-cell-scrollbar`]: {
                borderInlineEnd: tableBorder
            }
        }
    };
};
var _default = genBorderedStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/ellipsis.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genEllipsisStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-cell-ellipsis`]: {
                ..._style.textEllipsis,
                wordBreak: 'keep-all',
                // Fixed first or last should special process
                [`
          &${componentCls}-cell-fix-left-last,
          &${componentCls}-cell-fix-right-first
        `]: {
                    overflow: 'visible',
                    [`${componentCls}-cell-content`]: {
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }
                },
                [`${componentCls}-column-title`]: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    wordBreak: 'keep-all'
                }
            }
        }
    };
};
var _default = genEllipsisStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/empty.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
// ========================= Placeholder ==========================
const genEmptyStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-tbody > tr${componentCls}-placeholder`]: {
                textAlign: 'center',
                color: token.colorTextDisabled,
                [`
          &:hover > th,
          &:hover > td,
        `]: {
                    background: token.colorBgContainer
                }
            }
        }
    };
};
var _default = genEmptyStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/expand.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genExpandStyle = (token)=>{
    const { componentCls, antCls, motionDurationSlow, lineWidth, paddingXS, lineType, tableBorderColor, tableExpandIconBg, tableExpandColumnWidth, borderRadius, tablePaddingVertical, tablePaddingHorizontal, tableExpandedRowBg, paddingXXS, expandIconMarginTop, expandIconSize, expandIconHalfInner, expandIconScale, calc } = token;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
    const expandIconLineOffset = calc(paddingXXS).sub(lineWidth).equal();
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-expand-icon-col`]: {
                width: tableExpandColumnWidth
            },
            [`${componentCls}-row-expand-icon-cell`]: {
                textAlign: 'center',
                [`${componentCls}-row-expand-icon`]: {
                    display: 'inline-flex',
                    float: 'none',
                    verticalAlign: 'sub'
                }
            },
            [`${componentCls}-row-indent`]: {
                height: 1,
                float: 'left'
            },
            [`${componentCls}-row-expand-icon`]: {
                ...(0, _style.operationUnit)(token),
                position: 'relative',
                float: 'left',
                width: expandIconSize,
                height: expandIconSize,
                color: 'inherit',
                lineHeight: (0, _cssinjs.unit)(expandIconSize),
                background: tableExpandIconBg,
                border: tableBorder,
                borderRadius,
                transform: `scale(${expandIconScale})`,
                '&:focus, &:hover, &:active': {
                    borderColor: 'currentcolor'
                },
                '&::before, &::after': {
                    position: 'absolute',
                    background: 'currentcolor',
                    transition: `transform ${motionDurationSlow} ease-out`,
                    content: '""'
                },
                '&::before': {
                    top: expandIconHalfInner,
                    insetInlineEnd: expandIconLineOffset,
                    insetInlineStart: expandIconLineOffset,
                    height: lineWidth
                },
                '&::after': {
                    top: expandIconLineOffset,
                    bottom: expandIconLineOffset,
                    insetInlineStart: expandIconHalfInner,
                    width: lineWidth,
                    transform: 'rotate(90deg)'
                },
                // Motion effect
                '&-collapsed::before': {
                    transform: 'rotate(-180deg)'
                },
                '&-collapsed::after': {
                    transform: 'rotate(0deg)'
                },
                '&-spaced': {
                    '&::before, &::after': {
                        display: 'none',
                        content: 'none'
                    },
                    background: 'transparent',
                    border: 0,
                    visibility: 'hidden'
                }
            },
            [`${componentCls}-row-indent + ${componentCls}-row-expand-icon`]: {
                marginTop: expandIconMarginTop,
                marginInlineEnd: paddingXS
            },
            [`tr${componentCls}-expanded-row`]: {
                '&, &:hover': {
                    '> th, > td': {
                        background: tableExpandedRowBg
                    }
                },
                // https://github.com/ant-design/ant-design/issues/25573
                [`${antCls}-descriptions-view`]: {
                    display: 'flex',
                    table: {
                        flex: 'auto',
                        width: '100%'
                    }
                }
            },
            // With fixed
            [`${componentCls}-expanded-row-fixed`]: {
                position: 'relative',
                margin: `${(0, _cssinjs.unit)(calc(tablePaddingVertical).mul(-1).equal())} ${(0, _cssinjs.unit)(calc(tablePaddingHorizontal).mul(-1).equal())}`,
                padding: `${(0, _cssinjs.unit)(tablePaddingVertical)} ${(0, _cssinjs.unit)(tablePaddingHorizontal)}`
            }
        }
    };
};
var _default = genExpandStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/filter.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genFilterStyle = (token)=>{
    const { componentCls, antCls, iconCls, tableFilterDropdownWidth, tableFilterDropdownSearchWidth, paddingXXS, paddingXS, colorText, lineWidth, lineType, tableBorderColor, headerIconColor, fontSizeSM, tablePaddingHorizontal, borderRadius, motionDurationSlow, colorIcon, colorPrimary, tableHeaderFilterActiveBg, colorTextDisabled, tableFilterDropdownBg, tableFilterDropdownHeight, controlItemBgHover, controlItemBgActive, boxShadowSecondary, filterDropdownMenuBg, calc } = token;
    const dropdownPrefixCls = `${antCls}-dropdown`;
    const tableFilterDropdownPrefixCls = `${componentCls}-filter-dropdown`;
    const treePrefixCls = `${antCls}-tree`;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
    return [
        {
            [`${componentCls}-wrapper`]: {
                [`${componentCls}-filter-column`]: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                [`${componentCls}-filter-trigger`]: {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    marginBlock: calc(paddingXXS).mul(-1).equal(),
                    marginInline: `${(0, _cssinjs.unit)(paddingXXS)} ${(0, _cssinjs.unit)(calc(tablePaddingHorizontal).div(2).mul(-1).equal())}`,
                    padding: `0 ${(0, _cssinjs.unit)(paddingXXS)}`,
                    color: headerIconColor,
                    fontSize: fontSizeSM,
                    borderRadius,
                    cursor: 'pointer',
                    transition: `all ${motionDurationSlow}`,
                    '&:hover': {
                        color: colorIcon,
                        background: tableHeaderFilterActiveBg
                    },
                    '&.active': {
                        color: colorPrimary
                    }
                }
            }
        },
        {
            // Dropdown
            [`${antCls}-dropdown`]: {
                [tableFilterDropdownPrefixCls]: {
                    ...(0, _style.resetComponent)(token),
                    minWidth: tableFilterDropdownWidth,
                    backgroundColor: tableFilterDropdownBg,
                    borderRadius,
                    boxShadow: boxShadowSecondary,
                    overflow: 'hidden',
                    // Reset menu
                    [`${dropdownPrefixCls}-menu`]: {
                        // https://github.com/ant-design/ant-design/issues/4916
                        // https://github.com/ant-design/ant-design/issues/19542
                        maxHeight: tableFilterDropdownHeight,
                        overflowX: 'hidden',
                        border: 0,
                        boxShadow: 'none',
                        borderRadius: 'unset',
                        backgroundColor: filterDropdownMenuBg,
                        '&:empty::after': {
                            display: 'block',
                            padding: `${(0, _cssinjs.unit)(paddingXS)} 0`,
                            color: colorTextDisabled,
                            fontSize: fontSizeSM,
                            textAlign: 'center',
                            content: '"Not Found"'
                        }
                    },
                    [`${tableFilterDropdownPrefixCls}-tree`]: {
                        paddingBlock: `${(0, _cssinjs.unit)(paddingXS)} 0`,
                        paddingInline: paddingXS,
                        [treePrefixCls]: {
                            padding: 0
                        },
                        [`${treePrefixCls}-treenode ${treePrefixCls}-node-content-wrapper:hover`]: {
                            backgroundColor: controlItemBgHover
                        },
                        [`${treePrefixCls}-treenode-checkbox-checked ${treePrefixCls}-node-content-wrapper`]: {
                            '&, &:hover': {
                                backgroundColor: controlItemBgActive
                            }
                        }
                    },
                    [`${tableFilterDropdownPrefixCls}-search`]: {
                        padding: paddingXS,
                        borderBottom: tableBorder,
                        '&-input': {
                            input: {
                                minWidth: tableFilterDropdownSearchWidth
                            },
                            [iconCls]: {
                                color: colorTextDisabled
                            }
                        }
                    },
                    [`${tableFilterDropdownPrefixCls}-checkall`]: {
                        width: '100%',
                        marginBottom: paddingXXS,
                        marginInlineStart: paddingXXS
                    },
                    // Operation
                    [`${tableFilterDropdownPrefixCls}-btns`]: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: `${(0, _cssinjs.unit)(calc(paddingXS).sub(lineWidth).equal())} ${(0, _cssinjs.unit)(paddingXS)}`,
                        overflow: 'hidden',
                        borderTop: tableBorder
                    }
                }
            }
        },
        // Dropdown Menu & SubMenu
        {
            // submenu of table filter dropdown
            [`${antCls}-dropdown ${tableFilterDropdownPrefixCls}, ${tableFilterDropdownPrefixCls}-submenu`]: {
                // Checkbox
                [`${antCls}-checkbox-wrapper + span`]: {
                    paddingInlineStart: paddingXS,
                    color: colorText
                },
                '> ul': {
                    maxHeight: 'calc(100vh - 130px)',
                    overflowX: 'hidden',
                    overflowY: 'auto'
                }
            }
        }
    ];
};
var _default = genFilterStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/fixed.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genFixedStyle = (token)=>{
    const { componentCls, lineWidth, colorSplit, motionDurationSlow, zIndexTableFixed, tableBg, zIndexTableSticky, calc } = token;
    const shadowColor = colorSplit;
    // Follow style is magic of shadow which should not follow token:
    return {
        [`${componentCls}-wrapper`]: {
            [`
        ${componentCls}-cell-fix-left,
        ${componentCls}-cell-fix-right
      `]: {
                position: 'sticky !important',
                zIndex: zIndexTableFixed,
                background: tableBg
            },
            [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after
      `]: {
                position: 'absolute',
                top: 0,
                right: {
                    _skip_check_: true,
                    value: 0
                },
                bottom: calc(lineWidth).mul(-1).equal(),
                width: 30,
                transform: 'translateX(100%)',
                transition: `box-shadow ${motionDurationSlow}`,
                content: '""',
                pointerEvents: 'none',
                // fix issues: https://github.com/ant-design/ant-design/issues/54587
                willChange: 'transform'
            },
            [`${componentCls}-cell-fix-left-all::after`]: {
                display: 'none'
            },
            [`
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
                position: 'absolute',
                top: 0,
                bottom: calc(lineWidth).mul(-1).equal(),
                left: {
                    _skip_check_: true,
                    value: 0
                },
                width: 30,
                transform: 'translateX(-100%)',
                transition: `box-shadow ${motionDurationSlow}`,
                content: '""',
                pointerEvents: 'none'
            },
            [`${componentCls}-container`]: {
                position: 'relative',
                '&::before, &::after': {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    zIndex: calc(zIndexTableSticky).add(1).equal({
                        unit: false
                    }),
                    width: 30,
                    transition: `box-shadow ${motionDurationSlow}`,
                    content: '""',
                    pointerEvents: 'none'
                },
                '&::before': {
                    insetInlineStart: 0
                },
                '&::after': {
                    insetInlineEnd: 0
                }
            },
            [`${componentCls}-ping-left`]: {
                [`&:not(${componentCls}-has-fix-left) ${componentCls}-container::before`]: {
                    boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
                },
                [`
          ${componentCls}-cell-fix-left-first::after,
          ${componentCls}-cell-fix-left-last::after
        `]: {
                    boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
                },
                [`${componentCls}-cell-fix-left-last::before`]: {
                    backgroundColor: 'transparent !important'
                }
            },
            [`${componentCls}-ping-right`]: {
                [`&:not(${componentCls}-has-fix-right) ${componentCls}-container::after`]: {
                    boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
                },
                [`
          ${componentCls}-cell-fix-right-first::after,
          ${componentCls}-cell-fix-right-last::after
        `]: {
                    boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
                }
            },
            // Gapped fixed Columns do not show the shadow
            [`${componentCls}-fixed-column-gapped`]: {
                [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after,
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
                    boxShadow: 'none'
                }
            }
        }
    };
};
var _default = genFixedStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    // ============================== Export ==============================
    default: function() {
        return _default;
    },
    prepareComponentToken: function() {
        return prepareComponentToken;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var _internal = __mako_require__("src/components/VirtualTable/theme/internal.ts");
var _bordered = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/bordered.ts"));
var _ellipsis = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/ellipsis.ts"));
var _empty = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/empty.ts"));
var _expand = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/expand.ts"));
var _filter = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/filter.ts"));
var _fixed = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/fixed.ts"));
var _pagination = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/pagination.ts"));
var _radius = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/radius.ts"));
var _rtl = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/rtl.ts"));
var _selection = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/selection.ts"));
var _size = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/size.ts"));
var _sorter = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/sorter.ts"));
var _sticky = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/sticky.ts"));
var _summary = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/summary.ts"));
var _virtual = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/table/style/virtual.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genTableStyle = (token)=>{
    const { componentCls, fontWeightStrong, tablePaddingVertical, tablePaddingHorizontal, tableExpandColumnWidth, lineWidth, lineType, tableBorderColor, tableFontSize, tableBg, tableRadius, tableHeaderTextColor, motionDurationMid, tableHeaderBg, tableHeaderCellSplitColor, tableFooterTextColor, tableFooterBg, calc } = token;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
    return {
        [`${componentCls}-wrapper`]: {
            clear: 'both',
            maxWidth: '100%',
            // fix https://github.com/ant-design/ant-design/issues/46177
            ['--rc-virtual-list-scrollbar-bg']: token.tableScrollBg,
            ...(0, _style.clearFix)(),
            [componentCls]: {
                ...(0, _style.resetComponent)(token),
                fontSize: tableFontSize,
                background: tableBg,
                borderRadius: `${(0, _cssinjs.unit)(tableRadius)} ${(0, _cssinjs.unit)(tableRadius)} 0 0`,
                // https://github.com/ant-design/ant-design/issues/47486
                scrollbarColor: `${token.tableScrollThumbBg} ${token.tableScrollBg}`
            },
            // https://github.com/ant-design/ant-design/issues/17611
            table: {
                width: '100%',
                textAlign: 'start',
                borderRadius: `${(0, _cssinjs.unit)(tableRadius)} ${(0, _cssinjs.unit)(tableRadius)} 0 0`,
                borderCollapse: 'separate',
                borderSpacing: 0
            },
            // ============================= Cell ==============================
            [`
          ${componentCls}-cell,
          ${componentCls}-thead > tr > th,
          ${componentCls}-tbody > tr > th,
          ${componentCls}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
                position: 'relative',
                padding: `${(0, _cssinjs.unit)(tablePaddingVertical)} ${(0, _cssinjs.unit)(tablePaddingHorizontal)}`,
                overflowWrap: 'break-word'
            },
            // ============================ Title =============================
            [`${componentCls}-title`]: {
                padding: `${(0, _cssinjs.unit)(tablePaddingVertical)} ${(0, _cssinjs.unit)(tablePaddingHorizontal)}`
            },
            // ============================ Header ============================
            [`${componentCls}-thead`]: {
                [`
          > tr > th,
          > tr > td
        `]: {
                    position: 'relative',
                    color: tableHeaderTextColor,
                    fontWeight: fontWeightStrong,
                    textAlign: 'start',
                    background: tableHeaderBg,
                    borderBottom: tableBorder,
                    transition: `background ${motionDurationMid} ease`,
                    "&[colspan]:not([colspan='1'])": {
                        textAlign: 'center'
                    },
                    [`&:not(:last-child):not(${componentCls}-selection-column):not(${componentCls}-row-expand-icon-cell):not([colspan])::before`]: {
                        position: 'absolute',
                        top: '50%',
                        insetInlineEnd: 0,
                        width: 1,
                        height: '1.6em',
                        backgroundColor: tableHeaderCellSplitColor,
                        transform: 'translateY(-50%)',
                        transition: `background-color ${motionDurationMid}`,
                        content: '""'
                    }
                },
                '> tr:not(:last-child) > th[colspan]': {
                    borderBottom: 0
                }
            },
            // ============================ Body ============================
            [`${componentCls}-tbody`]: {
                '> tr': {
                    '> th, > td': {
                        transition: `background ${motionDurationMid}, border-color ${motionDurationMid}`,
                        borderBottom: tableBorder,
                        // ========================= Nest Table ===========================
                        [`
              > ${componentCls}-wrapper:only-child,
              > ${componentCls}-expanded-row-fixed > ${componentCls}-wrapper:only-child
            `]: {
                            [componentCls]: {
                                marginBlock: (0, _cssinjs.unit)(calc(tablePaddingVertical).mul(-1).equal()),
                                marginInline: `${(0, _cssinjs.unit)(calc(tableExpandColumnWidth).sub(tablePaddingHorizontal).equal())}
                ${(0, _cssinjs.unit)(calc(tablePaddingHorizontal).mul(-1).equal())}`,
                                [`${componentCls}-tbody > tr:last-child > td`]: {
                                    borderBottomWidth: 0,
                                    '&:first-child, &:last-child': {
                                        borderRadius: 0
                                    }
                                }
                            }
                        }
                    },
                    '> th': {
                        position: 'relative',
                        color: tableHeaderTextColor,
                        fontWeight: fontWeightStrong,
                        textAlign: 'start',
                        background: tableHeaderBg,
                        borderBottom: tableBorder,
                        transition: `background ${motionDurationMid} ease`
                    }
                }
            },
            // ============================ Footer ============================
            [`${componentCls}-footer`]: {
                padding: `${(0, _cssinjs.unit)(tablePaddingVertical)} ${(0, _cssinjs.unit)(tablePaddingHorizontal)}`,
                color: tableFooterTextColor,
                background: tableFooterBg
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorFillAlter, colorBgContainer, colorTextHeading, colorFillSecondary, colorFillContent, controlItemBgActive, controlItemBgActiveHover, padding, paddingSM, paddingXS, colorBorderSecondary, borderRadiusLG, controlHeight, colorTextPlaceholder, fontSize, fontSizeSM, lineHeight, lineWidth, colorIcon, colorIconHover, opacityLoading, controlInteractiveSize } = token;
    const colorFillSecondarySolid = new _fastcolor.FastColor(colorFillSecondary).onBackground(colorBgContainer).toHexString();
    const colorFillContentSolid = new _fastcolor.FastColor(colorFillContent).onBackground(colorBgContainer).toHexString();
    const colorFillAlterSolid = new _fastcolor.FastColor(colorFillAlter).onBackground(colorBgContainer).toHexString();
    const baseColorAction = new _fastcolor.FastColor(colorIcon);
    const baseColorActionHover = new _fastcolor.FastColor(colorIconHover);
    const expandIconHalfInner = controlInteractiveSize / 2 - lineWidth;
    const expandIconSize = expandIconHalfInner * 2 + lineWidth * 3;
    return {
        headerBg: colorFillAlterSolid,
        headerColor: colorTextHeading,
        headerSortActiveBg: colorFillSecondarySolid,
        headerSortHoverBg: colorFillContentSolid,
        bodySortBg: colorFillAlterSolid,
        rowHoverBg: colorFillAlterSolid,
        rowSelectedBg: controlItemBgActive,
        rowSelectedHoverBg: controlItemBgActiveHover,
        rowExpandedBg: colorFillAlter,
        cellPaddingBlock: padding,
        cellPaddingInline: padding,
        cellPaddingBlockMD: paddingSM,
        cellPaddingInlineMD: paddingXS,
        cellPaddingBlockSM: paddingXS,
        cellPaddingInlineSM: paddingXS,
        borderColor: colorBorderSecondary,
        headerBorderRadius: borderRadiusLG,
        footerBg: colorFillAlterSolid,
        footerColor: colorTextHeading,
        cellFontSize: fontSize,
        cellFontSizeMD: fontSize,
        cellFontSizeSM: fontSize,
        headerSplitColor: colorBorderSecondary,
        fixedHeaderSortActiveBg: colorFillSecondarySolid,
        headerFilterHoverBg: colorFillContent,
        filterDropdownMenuBg: colorBgContainer,
        filterDropdownBg: colorBgContainer,
        expandIconBg: colorBgContainer,
        selectionColumnWidth: controlHeight,
        stickyScrollBarBg: colorTextPlaceholder,
        stickyScrollBarBorderRadius: 100,
        expandIconMarginTop: (fontSize * lineHeight - lineWidth * 3) / 2 - Math.ceil((fontSizeSM * 1.4 - lineWidth * 3) / 2),
        headerIconColor: baseColorAction.clone().setA(baseColorAction.a * opacityLoading).toRgbString(),
        headerIconHoverColor: baseColorActionHover.clone().setA(baseColorActionHover.a * opacityLoading).toRgbString(),
        expandIconHalfInner,
        expandIconSize,
        expandIconScale: controlInteractiveSize / expandIconSize
    };
};
const zIndexTableFixed = 2;
var _default = (0, _internal.genStyleHooks)('Table', (token)=>{
    const { colorTextHeading, colorSplit, colorBgContainer, controlInteractiveSize: checkboxSize, headerBg, headerColor, headerSortActiveBg, headerSortHoverBg, bodySortBg, rowHoverBg, rowSelectedBg, rowSelectedHoverBg, rowExpandedBg, cellPaddingBlock, cellPaddingInline, cellPaddingBlockMD, cellPaddingInlineMD, cellPaddingBlockSM, cellPaddingInlineSM, borderColor, footerBg, footerColor, headerBorderRadius, cellFontSize, cellFontSizeMD, cellFontSizeSM, headerSplitColor, fixedHeaderSortActiveBg, headerFilterHoverBg, filterDropdownBg, expandIconBg, selectionColumnWidth, stickyScrollBarBg, calc } = token;
    const tableToken = (0, _internal.mergeToken)(token, {
        tableFontSize: cellFontSize,
        tableBg: colorBgContainer,
        tableRadius: headerBorderRadius,
        tablePaddingVertical: cellPaddingBlock,
        tablePaddingHorizontal: cellPaddingInline,
        tablePaddingVerticalMiddle: cellPaddingBlockMD,
        tablePaddingHorizontalMiddle: cellPaddingInlineMD,
        tablePaddingVerticalSmall: cellPaddingBlockSM,
        tablePaddingHorizontalSmall: cellPaddingInlineSM,
        tableBorderColor: borderColor,
        tableHeaderTextColor: headerColor,
        tableHeaderBg: headerBg,
        tableFooterTextColor: footerColor,
        tableFooterBg: footerBg,
        tableHeaderCellSplitColor: headerSplitColor,
        tableHeaderSortBg: headerSortActiveBg,
        tableHeaderSortHoverBg: headerSortHoverBg,
        tableBodySortBg: bodySortBg,
        tableFixedHeaderSortActiveBg: fixedHeaderSortActiveBg,
        tableHeaderFilterActiveBg: headerFilterHoverBg,
        tableFilterDropdownBg: filterDropdownBg,
        tableRowHoverBg: rowHoverBg,
        tableSelectedRowBg: rowSelectedBg,
        tableSelectedRowHoverBg: rowSelectedHoverBg,
        zIndexTableFixed,
        zIndexTableSticky: calc(zIndexTableFixed).add(1).equal({
            unit: false
        }),
        tableFontSizeMiddle: cellFontSizeMD,
        tableFontSizeSmall: cellFontSizeSM,
        tableSelectionColumnWidth: selectionColumnWidth,
        tableExpandIconBg: expandIconBg,
        tableExpandColumnWidth: calc(checkboxSize).add(calc(token.padding).mul(2)).equal(),
        tableExpandedRowBg: rowExpandedBg,
        // Dropdown
        tableFilterDropdownWidth: 120,
        tableFilterDropdownHeight: 264,
        tableFilterDropdownSearchWidth: 140,
        // Virtual Scroll Bar
        tableScrollThumbSize: 8,
        tableScrollThumbBg: stickyScrollBarBg,
        tableScrollThumbBgHover: colorTextHeading,
        tableScrollBg: colorSplit
    });
    return [
        genTableStyle(tableToken),
        (0, _pagination.default)(tableToken),
        (0, _summary.default)(tableToken),
        (0, _sorter.default)(tableToken),
        (0, _filter.default)(tableToken),
        (0, _bordered.default)(tableToken),
        (0, _radius.default)(tableToken),
        (0, _expand.default)(tableToken),
        (0, _summary.default)(tableToken),
        (0, _empty.default)(tableToken),
        (0, _selection.default)(tableToken),
        (0, _fixed.default)(tableToken),
        (0, _sticky.default)(tableToken),
        (0, _ellipsis.default)(tableToken),
        (0, _size.default)(tableToken),
        (0, _rtl.default)(tableToken),
        (0, _virtual.default)(tableToken)
    ];
}, prepareComponentToken, {
    unitless: {
        expandIconScale: true
    }
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/pagination.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genPaginationStyle = (token)=>{
    const { componentCls, antCls, margin } = token;
    return {
        [`${componentCls}-wrapper`]: {
            // ========================== Pagination ==========================
            [`${componentCls}-pagination${antCls}-pagination`]: {
                margin: `${(0, _cssinjs.unit)(margin)} 0`
            },
            [`${componentCls}-pagination`]: {
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: token.paddingXS,
                '> *': {
                    flex: 'none'
                },
                '&-left': {
                    justifyContent: 'flex-start'
                },
                '&-center': {
                    justifyContent: 'center'
                },
                '&-right': {
                    justifyContent: 'flex-end'
                }
            }
        }
    };
};
var _default = genPaginationStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/radius.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genRadiusStyle = (token)=>{
    const { componentCls, tableRadius } = token;
    return {
        [`${componentCls}-wrapper`]: {
            [componentCls]: {
                // https://github.com/ant-design/ant-design/issues/39115#issuecomment-1362314574
                [`${componentCls}-title, ${componentCls}-header`]: {
                    borderRadius: `${(0, _cssinjs.unit)(tableRadius)} ${(0, _cssinjs.unit)(tableRadius)} 0 0`
                },
                [`${componentCls}-title + ${componentCls}-container`]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0,
                    // https://github.com/ant-design/ant-design/issues/41975
                    [`${componentCls}-header, table`]: {
                        borderRadius: 0
                    },
                    'table > thead > tr:first-child': {
                        'th:first-child, th:last-child, td:first-child, td:last-child': {
                            borderRadius: 0
                        }
                    }
                },
                '&-container': {
                    borderStartStartRadius: tableRadius,
                    borderStartEndRadius: tableRadius,
                    'table > thead > tr:first-child': {
                        '> *:first-child': {
                            borderStartStartRadius: tableRadius
                        },
                        '> *:last-child': {
                            borderStartEndRadius: tableRadius
                        }
                    }
                },
                '&-footer': {
                    borderRadius: `0 0 ${(0, _cssinjs.unit)(tableRadius)} ${(0, _cssinjs.unit)(tableRadius)}`
                }
            }
        }
    };
};
var _default = genRadiusStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/rtl.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-wrapper-rtl`]: {
            direction: 'rtl',
            table: {
                direction: 'rtl'
            },
            [`${componentCls}-pagination-left`]: {
                justifyContent: 'flex-end'
            },
            [`${componentCls}-pagination-right`]: {
                justifyContent: 'flex-start'
            },
            [`${componentCls}-row-expand-icon`]: {
                float: 'right',
                '&::after': {
                    transform: 'rotate(-90deg)'
                },
                '&-collapsed::before': {
                    transform: 'rotate(180deg)'
                },
                '&-collapsed::after': {
                    transform: 'rotate(0deg)'
                }
            },
            [`${componentCls}-container`]: {
                '&::before': {
                    insetInlineStart: 'unset',
                    insetInlineEnd: 0
                },
                '&::after': {
                    insetInlineStart: 0,
                    insetInlineEnd: 'unset'
                },
                [`${componentCls}-row-indent`]: {
                    float: 'right'
                }
            }
        }
    };
};
var _default = genStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/selection.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genSelectionStyle = (token)=>{
    const { componentCls, antCls, iconCls, fontSizeIcon, padding, paddingXS, headerIconColor, headerIconHoverColor, tableSelectionColumnWidth, tableSelectedRowBg, tableSelectedRowHoverBg, tableRowHoverBg, tablePaddingHorizontal, calc } = token;
    return {
        [`${componentCls}-wrapper`]: {
            // ========================== Selections ==========================
            [`${componentCls}-selection-col`]: {
                width: tableSelectionColumnWidth,
                [`&${componentCls}-selection-col-with-dropdown`]: {
                    width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).equal()
                }
            },
            [`${componentCls}-bordered ${componentCls}-selection-col`]: {
                width: calc(tableSelectionColumnWidth).add(calc(paddingXS).mul(2)).equal(),
                [`&${componentCls}-selection-col-with-dropdown`]: {
                    width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).add(calc(paddingXS).mul(2)).equal()
                }
            },
            [`
        table tr th${componentCls}-selection-column,
        table tr td${componentCls}-selection-column,
        ${componentCls}-selection-column
      `]: {
                paddingInlineEnd: token.paddingXS,
                paddingInlineStart: token.paddingXS,
                textAlign: 'center',
                [`${antCls}-radio-wrapper`]: {
                    marginInlineEnd: 0
                }
            },
            [`table tr th${componentCls}-selection-column${componentCls}-cell-fix-left`]: {
                zIndex: calc(token.zIndexTableFixed).add(1).equal({
                    unit: false
                })
            },
            [`table tr th${componentCls}-selection-column::after`]: {
                backgroundColor: 'transparent !important'
            },
            [`${componentCls}-selection`]: {
                position: 'relative',
                display: 'inline-flex',
                flexDirection: 'column'
            },
            [`${componentCls}-selection-extra`]: {
                position: 'absolute',
                top: 0,
                zIndex: 1,
                cursor: 'pointer',
                transition: `all ${token.motionDurationSlow}`,
                marginInlineStart: '100%',
                paddingInlineStart: (0, _cssinjs.unit)(calc(tablePaddingHorizontal).div(4).equal()),
                [iconCls]: {
                    color: headerIconColor,
                    fontSize: fontSizeIcon,
                    verticalAlign: 'baseline',
                    '&:hover': {
                        color: headerIconHoverColor
                    }
                }
            },
            // ============================= Rows =============================
            [`${componentCls}-tbody`]: {
                [`${componentCls}-row`]: {
                    [`&${componentCls}-row-selected`]: {
                        [`> ${componentCls}-cell`]: {
                            background: tableSelectedRowBg,
                            '&-row-hover': {
                                background: tableSelectedRowHoverBg
                            }
                        }
                    },
                    [`> ${componentCls}-cell-row-hover`]: {
                        background: tableRowHoverBg
                    }
                }
            }
        }
    };
};
var _default = genSelectionStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/size.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genSizeStyle = (token)=>{
    const { componentCls, tableExpandColumnWidth, calc } = token;
    const getSizeStyle = (size, paddingVertical, paddingHorizontal, fontSize)=>({
            [`${componentCls}${componentCls}-${size}`]: {
                fontSize,
                [`
        ${componentCls}-title,
        ${componentCls}-footer,
        ${componentCls}-cell,
        ${componentCls}-thead > tr > th,
        ${componentCls}-tbody > tr > th,
        ${componentCls}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
                    padding: `${(0, _cssinjs.unit)(paddingVertical)} ${(0, _cssinjs.unit)(paddingHorizontal)}`
                },
                [`${componentCls}-filter-trigger`]: {
                    marginInlineEnd: (0, _cssinjs.unit)(calc(paddingHorizontal).div(2).mul(-1).equal())
                },
                [`${componentCls}-expanded-row-fixed`]: {
                    margin: `${(0, _cssinjs.unit)(calc(paddingVertical).mul(-1).equal())} ${(0, _cssinjs.unit)(calc(paddingHorizontal).mul(-1).equal())}`
                },
                [`${componentCls}-tbody`]: {
                    // ========================= Nest Table ===========================
                    [`${componentCls}-wrapper:only-child ${componentCls}`]: {
                        marginBlock: (0, _cssinjs.unit)(calc(paddingVertical).mul(-1).equal()),
                        marginInline: `${(0, _cssinjs.unit)(calc(tableExpandColumnWidth).sub(paddingHorizontal).equal())} ${(0, _cssinjs.unit)(calc(paddingHorizontal).mul(-1).equal())}`
                    }
                },
                // https://github.com/ant-design/ant-design/issues/35167
                [`${componentCls}-selection-extra`]: {
                    paddingInlineStart: (0, _cssinjs.unit)(calc(paddingHorizontal).div(4).equal())
                }
            }
        });
    return {
        [`${componentCls}-wrapper`]: {
            ...getSizeStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle, token.tableFontSizeMiddle),
            ...getSizeStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall, token.tableFontSizeSmall)
        }
    };
};
var _default = genSizeStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/sorter.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genSorterStyle = (token)=>{
    const { componentCls, marginXXS, fontSizeIcon, headerIconColor, headerIconHoverColor } = token;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-thead th${componentCls}-column-has-sorters`]: {
                outline: 'none',
                cursor: 'pointer',
                // why left 0s? Avoid column header move with transition when left is changed
                // https://github.com/ant-design/ant-design/issues/50588
                transition: `all ${token.motionDurationSlow}, left 0s`,
                '&:hover': {
                    background: token.tableHeaderSortHoverBg,
                    '&::before': {
                        backgroundColor: 'transparent !important'
                    }
                },
                '&:focus-visible': {
                    color: token.colorPrimary
                },
                // https://github.com/ant-design/ant-design/issues/30969
                [`
          &${componentCls}-cell-fix-left:hover,
          &${componentCls}-cell-fix-right:hover
        `]: {
                    background: token.tableFixedHeaderSortActiveBg
                }
            },
            [`${componentCls}-thead th${componentCls}-column-sort`]: {
                background: token.tableHeaderSortBg,
                '&::before': {
                    backgroundColor: 'transparent !important'
                }
            },
            [`td${componentCls}-column-sort`]: {
                background: token.tableBodySortBg
            },
            [`${componentCls}-column-title`]: {
                position: 'relative',
                zIndex: 1,
                flex: 1,
                minWidth: 0
            },
            [`${componentCls}-column-sorters`]: {
                display: 'flex',
                flex: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&::after': {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    content: '""'
                }
            },
            [`${componentCls}-column-sorters-tooltip-target-sorter`]: {
                '&::after': {
                    content: 'none'
                }
            },
            [`${componentCls}-column-sorter`]: {
                marginInlineStart: marginXXS,
                color: headerIconColor,
                fontSize: 0,
                transition: `color ${token.motionDurationSlow}`,
                '&-inner': {
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                '&-up, &-down': {
                    fontSize: fontSizeIcon,
                    '&.active': {
                        color: token.colorPrimary
                    }
                },
                [`${componentCls}-column-sorter-up + ${componentCls}-column-sorter-down`]: {
                    marginTop: '-0.3em'
                }
            },
            [`${componentCls}-column-sorters:hover ${componentCls}-column-sorter`]: {
                color: headerIconHoverColor
            }
        }
    };
};
var _default = genSorterStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/sticky.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genStickyStyle = (token)=>{
    const { componentCls, opacityLoading, tableScrollThumbBg, tableScrollThumbBgHover, tableScrollThumbSize, tableScrollBg, zIndexTableSticky, stickyScrollBarBorderRadius, lineWidth, lineType, tableBorderColor } = token;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-sticky`]: {
                '&-holder': {
                    position: 'sticky',
                    zIndex: zIndexTableSticky,
                    background: token.colorBgContainer
                },
                '&-scroll': {
                    position: 'sticky',
                    bottom: 0,
                    height: `${(0, _cssinjs.unit)(tableScrollThumbSize)} !important`,
                    zIndex: zIndexTableSticky,
                    display: 'flex',
                    alignItems: 'center',
                    background: tableScrollBg,
                    borderTop: tableBorder,
                    opacity: opacityLoading,
                    '&:hover': {
                        transformOrigin: 'center bottom'
                    },
                    // fake scrollbar style of sticky
                    '&-bar': {
                        height: tableScrollThumbSize,
                        backgroundColor: tableScrollThumbBg,
                        borderRadius: stickyScrollBarBorderRadius,
                        transition: `all ${token.motionDurationSlow}, transform 0s`,
                        position: 'absolute',
                        bottom: 0,
                        '&:hover, &-active': {
                            backgroundColor: tableScrollThumbBgHover
                        }
                    }
                }
            }
        }
    };
};
var _default = genStickyStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/summary.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genSummaryStyle = (token)=>{
    const { componentCls, lineWidth, tableBorderColor, calc } = token;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${token.lineType} ${tableBorderColor}`;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-summary`]: {
                position: 'relative',
                zIndex: token.zIndexTableFixed,
                background: token.tableBg,
                '> tr': {
                    '> th, > td': {
                        borderBottom: tableBorder
                    }
                }
            },
            [`div${componentCls}-summary`]: {
                boxShadow: `0 ${(0, _cssinjs.unit)(calc(lineWidth).mul(-1).equal())} 0 ${tableBorderColor}`
            }
        }
    };
};
var _default = genSummaryStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/style/virtual.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genVirtualStyle = (token)=>{
    const { componentCls, motionDurationMid, lineWidth, lineType, tableBorderColor, calc } = token;
    const tableBorder = `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
    const rowCellCls = `${componentCls}-expanded-row-cell`;
    return {
        [`${componentCls}-wrapper`]: {
            // ========================== Row ==========================
            [`${componentCls}-tbody-virtual`]: {
                [`${componentCls}-tbody-virtual-holder-inner`]: {
                    [`
            & > ${componentCls}-row, 
            & > div:not(${componentCls}-row) > ${componentCls}-row
          `]: {
                        display: 'flex',
                        boxSizing: 'border-box',
                        width: '100%'
                    }
                },
                [`${componentCls}-cell`]: {
                    borderBottom: tableBorder,
                    transition: `background ${motionDurationMid}`
                },
                [`${componentCls}-expanded-row`]: {
                    [`${rowCellCls}${rowCellCls}-fixed`]: {
                        position: 'sticky',
                        insetInlineStart: 0,
                        overflow: 'hidden',
                        width: `calc(var(--virtual-width) - ${(0, _cssinjs.unit)(lineWidth)})`,
                        borderInlineEnd: 'none'
                    }
                }
            },
            // ======================== Border =========================
            [`${componentCls}-bordered`]: {
                [`${componentCls}-tbody-virtual`]: {
                    '&:after': {
                        content: '""',
                        insetInline: 0,
                        bottom: 0,
                        borderBottom: tableBorder,
                        position: 'absolute'
                    },
                    [`${componentCls}-cell`]: {
                        borderInlineEnd: tableBorder,
                        [`&${componentCls}-cell-fix-right-first:before`]: {
                            content: '""',
                            position: 'absolute',
                            insetBlock: 0,
                            insetInlineStart: calc(lineWidth).mul(-1).equal(),
                            borderInlineStart: tableBorder
                        }
                    }
                },
                // Empty placeholder
                [`&${componentCls}-virtual`]: {
                    [`${componentCls}-placeholder ${componentCls}-cell`]: {
                        borderInlineEnd: tableBorder,
                        borderBottom: tableBorder
                    }
                }
            }
        }
    };
};
var _default = genVirtualStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/table/util.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    getColumnKey: function() {
        return getColumnKey;
    },
    getColumnPos: function() {
        return getColumnPos;
    },
    renderColumnTitle: function() {
        return renderColumnTitle;
    },
    safeColumnTitle: function() {
        return safeColumnTitle;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getColumnKey = (column, defaultKey)=>{
    if ('key' in column && column.key !== undefined && column.key !== null) return column.key;
    if (column.dataIndex) return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
    return defaultKey;
};
function getColumnPos(index, pos) {
    return pos ? `${pos}-${index}` : `${index}`;
}
const renderColumnTitle = (title, props)=>{
    if (typeof title === 'function') return title(props);
    return title;
};
const safeColumnTitle = (title, props)=>{
    const res = renderColumnTitle(title, props);
    if (Object.prototype.toString.call(res) === '[object Object]') return '';
    return res;
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/context.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    DesignTokenContext: function() {
        return DesignTokenContext;
    },
    defaultConfig: function() {
        return defaultConfig;
    },
    defaultTheme: function() {
        return _theme.default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _seed = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/seed.ts"));
var _theme = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/default/theme.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const defaultConfig = {
    token: _seed.default,
    override: {
        override: _seed.default
    },
    hashed: true
};
const DesignTokenContext = /*#__PURE__*/ _react.default.createContext(defaultConfig);
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/interface/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "PresetColors", {
    enumerable: true,
    get: function() {
        return _presetColors.PresetColors;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _presetColors = __mako_require__("src/components/VirtualTable/theme/interface/presetColors.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/interface/presetColors.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "PresetColors", {
    enumerable: true,
    get: function() {
        return PresetColors;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const PresetColors = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/internal.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    DesignTokenContext: function() {
        return _context.DesignTokenContext;
    },
    // constant
    PresetColors: function() {
        return _interface.PresetColors;
    },
    calc: function() {
        return _cssinjsutils.genCalc;
    },
    defaultConfig: function() {
        return _context.defaultConfig;
    },
    // generators
    genComponentStyleHook: function() {
        return _genStyleUtils.genComponentStyleHook;
    },
    genPresetColor: function() {
        return _genPresetColor.default;
    },
    genStyleHooks: function() {
        return _genStyleUtils.genStyleHooks;
    },
    genSubStyleComponent: function() {
        return _genStyleUtils.genSubStyleComponent;
    },
    getLineHeight: function() {
        return _genFontSizes.getLineHeight;
    },
    // utils
    mergeToken: function() {
        return _cssinjsutils.mergeToken;
    },
    statistic: function() {
        return _cssinjsutils.statistic;
    },
    statisticToken: function() {
        return _cssinjsutils.statisticToken;
    },
    // hooks
    useResetIconStyle: function() {
        return _useResetIconStyle.default;
    },
    useStyleRegister: function() {
        return _cssinjs.useStyleRegister;
    },
    useToken: function() {
        return _useToken.default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _cssinjsutils = __mako_require__("node_modules/@ant-design/cssinjs-utils/es/index.js");
var _interface = __mako_require__("src/components/VirtualTable/theme/interface/index.ts");
var _genFontSizes = __mako_require__("src/components/VirtualTable/theme/themes/shared/genFontSizes.ts");
var _useToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/useToken.ts"));
var _genStyleUtils = __mako_require__("src/components/VirtualTable/theme/util/genStyleUtils.ts");
var _genPresetColor = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/util/genPresetColor.ts"));
var _useResetIconStyle = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/util/useResetIconStyle.ts"));
var _context = __mako_require__("src/components/VirtualTable/theme/context.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/default/colorAlgorithm.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    getAlphaColor: function() {
        return getAlphaColor;
    },
    getSolidColor: function() {
        return getSolidColor;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getAlphaColor = (baseColor, alpha)=>new _fastcolor.FastColor(baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new _fastcolor.FastColor(baseColor);
    return instance.darken(brightness).toHexString();
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/default/colors.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    generateColorPalettes: function() {
        return generateColorPalettes;
    },
    generateNeutralColorPalettes: function() {
        return generateNeutralColorPalettes;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _colors = __mako_require__("node_modules/@ant-design/colors/es/index.js");
var _colorAlgorithm = __mako_require__("src/components/VirtualTable/theme/themes/default/colorAlgorithm.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const generateColorPalettes = (baseColor)=>{
    const colors = (0, _colors.generate)(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorText: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.88),
        colorTextSecondary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.65),
        colorTextTertiary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.45),
        colorTextQuaternary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.25),
        colorFill: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.15),
        colorFillSecondary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.06),
        colorFillTertiary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.04),
        colorFillQuaternary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.02),
        colorBgSolid: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 1),
        colorBgSolidHover: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.75),
        colorBgSolidActive: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.95),
        colorBgLayout: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 4),
        colorBgContainer: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 0),
        colorBgElevated: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 0),
        colorBgSpotlight: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 15),
        colorBorderSecondary: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 6)
    };
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/default/index.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return derivative;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _colors = __mako_require__("node_modules/@ant-design/colors/es/index.js");
var _seed = __mako_require__("src/components/VirtualTable/theme/themes/seed.ts");
var _genColorMapToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genColorMapToken.ts"));
var _genCommonMapToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genCommonMapToken.ts"));
var _genControlHeight = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genControlHeight.ts"));
var _genFontMapToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genFontMapToken.ts"));
var _genSizeMapToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genSizeMapToken.ts"));
var _colors1 = __mako_require__("src/components/VirtualTable/theme/themes/default/colors.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function derivative(token) {
    // pink is deprecated name of magenta, keep this for backwards compatibility
    _colors.presetPrimaryColors.pink = _colors.presetPrimaryColors.magenta;
    _colors.presetPalettes.pink = _colors.presetPalettes.magenta;
    const colorPalettes = Object.keys(_seed.defaultPresetColors).map((colorKey)=>{
        const colors = token[colorKey] === _colors.presetPrimaryColors[colorKey] ? _colors.presetPalettes[colorKey] : (0, _colors.generate)(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev[`${colorKey}-${i + 1}`] = colors[i];
            prev[`${colorKey}${i + 1}`] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = {
            ...prev,
            ...cur
        };
        return prev;
    }, {});
    return {
        ...token,
        ...colorPalettes,
        // Colors
        ...(0, _genColorMapToken.default)(token, {
            generateColorPalettes: _colors1.generateColorPalettes,
            generateNeutralColorPalettes: _colors1.generateNeutralColorPalettes
        }),
        // Font
        ...(0, _genFontMapToken.default)(token.fontSize),
        // Size
        ...(0, _genSizeMapToken.default)(token),
        // Height
        ...(0, _genControlHeight.default)(token),
        // Others
        ...(0, _genCommonMapToken.default)(token)
    };
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/default/theme.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/default/index.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const defaultTheme = (0, _cssinjs.createTheme)(_index.default);
var _default = defaultTheme;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/seed.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    default: function() {
        return _default;
    },
    defaultPresetColors: function() {
        return defaultPresetColors;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
   * @deprecated Use magenta instead
   */ pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = {
    // preset color palettes
    ...defaultPresetColors,
    // Color
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: 'solid',
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
};
var _default = seedToken;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genColorMapToken.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return genColorMapToken;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function genColorMapToken(seed, { generateColorPalettes, generateNeutralColorPalettes }) {
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new _fastcolor.FastColor(errorColors[1]).mix(new _fastcolor.FastColor(errorColors[3]), 50).toHexString();
    return {
        ...neutralColors,
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new _fastcolor.FastColor('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    };
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genCommonMapToken.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return genCommonMapToken;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _genRadius = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genRadius.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return {
        // motion
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
        // line
        lineWidthBold: lineWidth + 1,
        // radius
        ...(0, _genRadius.default)(borderRadius)
    };
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genControlHeight.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
    };
};
var _default = genControlHeight;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genFontMapToken.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _genFontSizes = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/shared/genFontSizes.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = (0, _genFontSizes.default)(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
var _default = genFontMapToken;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genFontSizes.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    // https://zhuanlan.zhihu.com/p/32746810
    default: function() {
        return getFontSizes;
    },
    getLineHeight: function() {
        return getLineHeight;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.E ** (i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genRadius.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    // radiusLG
    if (radiusBase < 6 && radiusBase >= 5) radiusLG = radiusBase + 1;
    else if (radiusBase < 16 && radiusBase >= 6) radiusLG = radiusBase + 2;
    else if (radiusBase >= 16) radiusLG = 16;
    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) radiusSM = 4;
    else if (radiusBase < 8 && radiusBase >= 7) radiusSM = 5;
    else if (radiusBase < 14 && radiusBase >= 8) radiusSM = 6;
    else if (radiusBase < 16 && radiusBase >= 14) radiusSM = 7;
    else if (radiusBase >= 16) radiusSM = 8;
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) radiusXS = 1;
    else if (radiusBase >= 6) radiusXS = 2;
    // radiusOuter
    if (radiusBase > 4 && radiusBase < 8) radiusOuter = 4;
    else if (radiusBase >= 8) radiusOuter = 6;
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
var _default = genRadius;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/themes/shared/genSizeMapToken.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return genSizeMapToken;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        sizeXL: sizeUnit * (sizeStep + 4),
        sizeLG: sizeUnit * (sizeStep + 2),
        sizeMD: sizeUnit * (sizeStep + 1),
        sizeMS: sizeUnit * sizeStep,
        size: sizeUnit * sizeStep,
        sizeSM: sizeUnit * (sizeStep - 1),
        sizeXS: sizeUnit * (sizeStep - 2),
        sizeXXS: sizeUnit * (sizeStep - 3)
    };
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/useToken.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    // ================================== Hook ==================================
    default: function() {
        return useToken;
    },
    getComputedToken: function() {
        return getComputedToken;
    },
    ignore: function() {
        return ignore;
    },
    unitless: function() {
        return unitless;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _context = __mako_require__("src/components/VirtualTable/theme/context.ts");
var _seed = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/seed.ts"));
var _alias = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/util/alias.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const version = {};
const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const ignore = {
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override, ...components } = overrideToken;
    // Merge with override
    let mergedDerivativeToken = {
        ...derivativeToken,
        override
    };
    // Format if needed
    mergedDerivativeToken = (0, _alias.default)(mergedDerivativeToken);
    if (components) Object.entries(components).forEach(([key, value])=>{
        const { theme: componentTheme, ...componentTokens } = value;
        let mergedComponentToken = componentTokens;
        if (componentTheme) mergedComponentToken = getComputedToken({
            ...mergedDerivativeToken,
            ...componentTokens
        }, {
            override: componentTokens
        }, componentTheme);
        mergedDerivativeToken[key] = mergedComponentToken;
    });
    return mergedDerivativeToken;
};
function useToken() {
    _s();
    const { token: rootDesignToken, hashed, theme, override, cssVar } = _react.default.useContext(_context.DesignTokenContext);
    const salt = `${version}-${hashed || ''}`;
    const mergedTheme = theme || _context.defaultTheme;
    const [token, hashId, realToken] = (0, _cssinjs.useCacheToken)(mergedTheme, [
        _seed.default,
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken,
        // formatToken will not be consumed after 1.15.0 with getComputedToken.
        // But token will break if @ant-design/cssinjs is under 1.15.0 without it
        formatToken: _alias.default,
        cssVar: cssVar && {
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless,
            ignore,
            preserve
        }
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar
    ];
}
_s(useToken, "J8ZBtfo2BPobqAYoonFLBASwVvI=", false, function() {
    return [
        _cssinjs.useCacheToken
    ];
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/util/alias.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, /**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */ "default", {
    enumerable: true,
    get: function() {
        return formatToken;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var _seed = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/themes/seed.ts"));
var _getAlphaColor = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/util/getAlphaColor.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function formatToken(derivativeToken) {
    const { override, ...restToken } = derivativeToken;
    const overrideTokens = {
        ...override
    };
    Object.keys(_seed.default).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = {
        ...restToken,
        ...overrideTokens
    };
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    // Motion
    if (mergedToken.motion === false) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    // Generate alias token
    const aliasToken = {
        ...mergedToken,
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: (0, _getAlphaColor.default)(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: (0, _getAlphaColor.default)(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: (0, _getAlphaColor.default)(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: (0, _getAlphaColor.default)(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: `
      0 1px 2px -2px ${new _fastcolor.FastColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new _fastcolor.FastColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new _fastcolor.FastColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
        // Override AliasToken
        ...overrideTokens
    };
    return aliasToken;
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/util/genPresetColor.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return genPresetColor;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _interface = __mako_require__("src/components/VirtualTable/theme/interface/index.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function genPresetColor(token, genCss) {
    return _interface.PresetColors.reduce((prev, colorKey)=>{
        const lightColor = token[`${colorKey}1`];
        const lightBorderColor = token[`${colorKey}3`];
        const darkColor = token[`${colorKey}6`];
        const textColor = token[`${colorKey}7`];
        return {
            ...prev,
            ...genCss(colorKey, {
                lightColor,
                lightBorderColor,
                darkColor,
                textColor
            })
        };
    }, {});
}
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/util/genStyleUtils.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    genComponentStyleHook: function() {
        return genComponentStyleHook;
    },
    genStyleHooks: function() {
        return genStyleHooks;
    },
    genSubStyleComponent: function() {
        return genSubStyleComponent;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _cssinjsutils = __mako_require__("node_modules/@ant-design/cssinjs-utils/es/index.js");
var _context = __mako_require__("src/components/VirtualTable/config-provider/context.ts");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var _useToken = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/components/VirtualTable/theme/useToken.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
var _s2 = $RefreshSig$();
const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = (0, _cssinjsutils.genStyleUtils)({
    usePrefix: _s(()=>{
        _s();
        const { getPrefixCls, iconPrefixCls } = (0, _react.useContext)(_context.ConfigContext);
        const rootPrefixCls = getPrefixCls();
        return {
            rootPrefixCls,
            iconPrefixCls
        };
    }, "YmEfReHLi+yZPySTm3m+KCiLV4w="),
    useToken: _s1(()=>{
        _s1();
        const [theme, realToken, hashId, token, cssVar] = (0, _useToken.default)();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar
        };
    }, "jfvoy8Zrofn0yi0iTvH3dS9U73Q=", false, function() {
        return [
            _useToken.default
        ];
    }),
    useCSP: _s2(()=>{
        _s2();
        const { csp } = (0, _react.useContext)(_context.ConfigContext);
        return csp ?? {};
    }, "4e+cIAXX7o4U4TTCDutAiVbZdaU="),
    getResetStyles: (token, config)=>{
        const linkStyle = (0, _style.genLinkStyle)(token);
        return [
            linkStyle,
            {
                '&': linkStyle
            },
            (0, _style.genIconStyle)((config === null || config === void 0 ? void 0 : config.prefix.iconPrefixCls) ?? _context.defaultIconPrefixCls)
        ];
    },
    getCommonStyle: _style.genCommonStyle,
    getCompUnitless: ()=>_useToken.unitless
});
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/util/getAlphaColor.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _fastcolor = __mako_require__("node_modules/@ant-design/fast-color/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new _fastcolor.FastColor(frontColor).toRgb();
    if (originAlpha < 1) return frontColor;
    const { r: bR, g: bG, b: bB } = new _fastcolor.FastColor(backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) return new _fastcolor.FastColor({
            r,
            g,
            b,
            a: Math.round(fA * 100) / 100
        }).toRgbString();
    }
    // fallback
    /* istanbul ignore next */ return new _fastcolor.FastColor({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
var _default = getAlphaColor;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualTable/theme/util/useResetIconStyle.ts": function (module, exports, __mako_require__){
// @ts-nocheck
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _style = __mako_require__("src/components/VirtualTable/style/index.tsx");
var _useToken = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/theme/useToken.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const useResetIconStyle = (iconPrefixCls, csp)=>{
    _s();
    const [theme, token] = (0, _useToken.default)();
    // Generate style for icons
    return (0, _cssinjs.useStyleRegister)({
        theme,
        token,
        hashId: '',
        path: [
            'ant-design-icons',
            iconPrefixCls
        ],
        nonce: ()=>csp === null || csp === void 0 ? void 0 : csp.nonce,
        layer: {
            name: 'antd'
        }
    }, ()=>(0, _style.genIconStyle)(iconPrefixCls));
};
_s(useResetIconStyle, "BKMeGILdblOXTGys/1jjJSb/7Jk=", false, function() {
    return [
        _useToken.default,
        _cssinjs.useStyleRegister
    ];
});
var _default = useResetIconStyle;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualText/common/util.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    flattenChildrenForMap: function() {
        return flattenChildrenForMap;
    },
    getLabelsByRecursion: function() {
        return getLabelsByRecursion;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getLabelsByRecursion = (options, value, labels = [])=>{
    if (!(options === null || options === void 0 ? void 0 : options.length) || !(value === null || value === void 0 ? void 0 : value.length)) return labels;
    const { label, children } = options.find((ele)=>ele.value === value[0]) || {};
    labels.push(label);
    return getLabelsByRecursion(children, value.slice(1), labels);
};
const flattenChildrenForMap = (options, map = {})=>{
    if (!options) return map;
    options.forEach(({ value, label, children })=>{
        map[value] = label;
        return flattenChildrenForMap(children, map);
    });
    return map;
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/components/VirtualText/index.tsx": function (module, exports, __mako_require__){
/** @format */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return Component$$;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _util = __mako_require__("src/components/VirtualText/common/util.ts");
var _moment = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/moment/moment.js"));
var _type = __mako_require__("src/common/constants/type.ts");
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
/** 单选文本 */ const OptionTypeText = ({ value, options })=>{
    var _options_find;
    const text = ((_options_find = options.find((ele)=>ele.value === value)) === null || _options_find === void 0 ? void 0 : _options_find.label) || '-';
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: text
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
};
_c = OptionTypeText;
/** 多选文本 */ const OptionMultipleTypeText = ({ value = [], options })=>{
    const optionsMap = options.reduce((total, { label, value })=>{
        total[value] = label;
        return total;
    }, {});
    const text = value.map((v)=>optionsMap[v]).join('、');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: text
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
};
_c1 = OptionMultipleTypeText;
/** 树结构文本 */ const ChildrenTypeText = ({ value = [], options })=>{
    const text = (0, _util.getLabelsByRecursion)(options, value).join(' / ');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: text
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
};
_c2 = ChildrenTypeText;
/** 树结构多选文本 */ const ChildrenMultipleTypeText = ({ value = [], options })=>{
    var _value_map;
    const valueForLabel = (0, _util.flattenChildrenForMap)(options);
    const text = value === null || value === void 0 ? void 0 : (_value_map = value.map) === null || _value_map === void 0 ? void 0 : _value_map.call(value, (v)=>valueForLabel[v]).join('，');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: text
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
};
_c3 = ChildrenMultipleTypeText;
/** 日期时间文本 */ const DateText = ({ value = [], format })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: (0, _moment.default)(value).format(format)
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
};
_c4 = DateText;
/** 日期时间文本 */ const DateMultipleText = ({ value = [], format })=>{
    const text = value.map((v)=>(0, _moment.default)(v).format(format)).join(' ~ ');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: text
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
};
_c5 = DateMultipleText;
function Component$$({ componentName, value, options, format, BaseComponents = {} }) {
    let element = null;
    if ([
        '',
        undefined,
        null
    ].includes(value)) element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: "-"
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 60,
        columnNumber: 15
    }, this);
    if ([
        _type.Type.RadioName,
        _type.Type.SelectName
    ].includes(componentName)) element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(OptionTypeText, {
        value: value,
        options: options
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 64,
        columnNumber: 16
    }, this);
    if ([
        _type.Type.CheckboxName
    ].includes(componentName)) element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(OptionMultipleTypeText, {
        value: value,
        options: options
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 68,
        columnNumber: 16
    }, this);
    if ([
        _type.Type.CascaderName
    ].includes(componentName)) element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ChildrenTypeText, {
        value: value,
        options: options
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 72,
        columnNumber: 16
    }, this);
    const defaultFormat = {
        [_type.Type.DatePickerName]: 'YYYY-MM-DD',
        [_type.Type.MonthPickerName]: 'YYYY-MM',
        [_type.Type.RangePickerName]: 'YYYY-MM-DD HH:mm:ss',
        [_type.Type.WeekPickerName]: 'YYYY-wo',
        [_type.Type.TimePickerName]: 'HH:mm:ss'
    }[componentName];
    if ([
        _type.Type.DatePickerName,
        _type.Type.MonthPickerName,
        _type.Type.WeekPickerName,
        _type.Type.TimePickerName
    ].includes(componentName)) element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DateText, {
        value: value,
        format: format || defaultFormat
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 91,
        columnNumber: 16
    }, this);
    if ([
        _type.Type.RangePickerName
    ].includes(componentName)) element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DateMultipleText, {
        value: value,
        format: format || defaultFormat
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 99,
        columnNumber: 16
    }, this);
    if ([
        _type.Type.SwitchName,
        _type.Type.SliderName
    ].includes(componentName)) element = /*#__PURE__*/ _react.default.cloneElement(BaseComponents[componentName].edit, {
        value,
        disabled: true
    });
    element = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: value
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 112,
        columnNumber: 14
    }, this);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "virtual-text",
        children: element
    }, void 0, false, {
        fileName: "src/components/VirtualText/index.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
_c6 = Component$$;
var _c;
var _c1;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "OptionTypeText");
$RefreshReg$(_c1, "OptionMultipleTypeText");
$RefreshReg$(_c2, "ChildrenTypeText");
$RefreshReg$(_c3, "ChildrenMultipleTypeText");
$RefreshReg$(_c4, "DateText");
$RefreshReg$(_c5, "DateMultipleText");
$RefreshReg$(_c6, "Component$$");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _export_star = __mako_require__("@swc/helpers/_/_export_star");
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _VirtualNo = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualNo/index.tsx"));
var _innerVFTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/innerVFTable.tsx"));
_export_star._(__mako_require__("src/common/constants/index.ts"), exports);
_export_star._(__mako_require__("src/common/constants/type.ts"), exports);
_export_star._(__mako_require__("src/common/type/index.ts"), exports);
_export_star._(__mako_require__("src/methods/index.ts"), exports);
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const VirtualTable = /*#__PURE__*/ (0, _react.forwardRef)(_innerVFTable.default);
_c = VirtualTable;
VirtualTable.VirtualNo = _VirtualNo.default;
var _default = VirtualTable;
var _c;
$RefreshReg$(_c, "VirtualTable");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/innerVFTable.tsx": function (module, exports, __mako_require__){
/** @format */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    VirtualContext: function() {
        return VirtualContext;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _ahooks = __mako_require__("node_modules/ahooks/es/index.js");
var _lodash = __mako_require__("node_modules/lodash/lodash.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _config = __mako_require__("src/common/config/index.ts");
var _constants = __mako_require__("src/common/constants/index.ts");
var _util = __mako_require__("src/common/util/index.ts");
var _VirtualTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/VirtualTable/index.tsx"));
var _element = __mako_require__("src/builtInUI/antd/element.tsx");
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
// 支持大数据动态增减 [🆗]
// 支持滑动定位 [🆗]
// debounce change 优化 [🆗]
// 上移，下移，添加，删除，添加 [🆗]
// watch 基本 cell[🆗]
// 全列 & 指定列 [🆗]
// 支持 多deps [🆗]
// 支持 立即执行 [🆗]
// 支持 立即执行（父级） [🆗]
// 父子(跨 VirtualTable 监听，邦一块) [🆗]
// 支持全局 ｜ 自定义行禁用 [🆗]
// 支持 无数据状态 [🆗]
// 外部更新数据API [🆗]
// 页面宽度动态自适应 [🆗]
// 页面行高动态自适应 [🆗]
// 支持改变当前单元格数据 [🆗]
// 支持改变当前列数据 [🆗]
// 支持多field字段，行/列布局 [🆗]
// 支持单元格多children渲染嵌套 [🆗]
const nextTick = (0, _util.createNextTick)();
const VirtualContext = /*#__PURE__*/ _react.default.createContext({});
/** 虚拟表格 */ const InnerVFTable = ({ defaultValue, value, onChange, columns = [], scrollWidth, maxHeight = _constants.MAX_HEIGHT, addText = _constants.ADD_TEXT, delText = _constants.DDE_TEXT, // addChildText = ADD_CHILD_TEXT,
moveUpText = _constants.MOVE_UP_TEXT, moveDownText = _constants.MOVE_DOWN_TEXT, operateItems = [
    {
        type: _constants.Operate.Del
    },
    {
        type: _constants.Operate.Add
    }
], operateConfig, isOperationBtnVisible = false, customCellRender, disabled, readonly, // getRefAndMethod,
empty, addLimit, addLimitText, onMounted, BaseComponents = _element.Components, ...rest }, refInstance)=>{
    _s();
    const virtualRef = (0, _react.useRef)(null);
    const virtualTableRef = (0, _react.useRef)(null);
    const listensRef = (0, _react.useRef)(null);
    /** 表单字段集合 */ const fieldsStoreRef = (0, _react.useRef)([]);
    /** 表单字段key集合 */ const fieldsStoreKeysRef = (0, _react.useRef)([]);
    /** 当前滑动位置 */ const scrollTopRef = (0, _react.useRef)(0);
    /** 表格数据 */ const [dataSource, setDataSource] = (0, _react.useState)(()=>(0, _config.setSSIDForDate)(defaultValue || value || [], customCellRender));
    // 记录前次dataSource表格数据;
    const preDataSourceRef = (0, _react.useRef)(undefined);
    /** 表格配置 */ const [config, updateConfig] = (0, _react.useState)(columns || []);
    // 表格表单真实数据
    const dataSourceMemo = (0, _react.useMemo)(()=>{
        return (0, _lodash.compact)(dataSource);
    }, [
        dataSource
    ]);
    // 是否空态
    const isEmpty = (0, _react.useMemo)(()=>!(dataSourceMemo === null || dataSourceMemo === void 0 ? void 0 : dataSourceMemo.length), [
        dataSourceMemo
    ]);
    // 添加按钮展示项
    const addBtnProps = (0, _react.useMemo)(()=>{
        return operateItems.find(({ type })=>type === _constants.Operate.Add);
    }, [
        operateItems
    ]);
    // 设置表格配置数据
    const setConfig = (newConfig)=>{
        if (!(0, _lodash.isEqual)(config, newConfig)) updateConfig(newConfig);
    };
    // 滑动指定位置 | 指定行
    const scrollToY = (params)=>{
        nextTick(()=>{
            var _virtualTableRef_current, _virtualTableRef_current1;
            const { index, top } = params;
            (_virtualTableRef_current = virtualTableRef.current) === null || _virtualTableRef_current === void 0 || _virtualTableRef_current.scrollTo({
                index
            });
            top && ((_virtualTableRef_current1 = virtualTableRef.current) === null || _virtualTableRef_current1 === void 0 || _virtualTableRef_current1.scrollTo({
                top
            }));
        });
    };
    /**
   * 数据操作
   */ const operate = async ({ type, ...params })=>{
        const update = (fn)=>{
            if (type === _constants.Operate.Add && !(0, _lodash.isUndefined)(addLimit) && dataSourceMemo.length >= addLimit) {
                if (typeof addLimitText === 'function') {
                    addLimitText();
                    return dataSource;
                }
                _antd.message.warn(`超过指定数量${addLimit}条`);
                return dataSource;
            }
            if (type === _constants.Operate.Add) {
                const data = fn();
                scrollToY({
                    index: data.length + 1
                });
                return data;
            }
            return fn();
        };
        const handle = {
            [_constants.Operate.Add]: _config.add,
            [_constants.Operate.Change]: _config.change,
            [_constants.Operate.ChangeRow]: _config.changeRow,
            [_constants.Operate.ChangeCol]: _config.changeCol,
            [_constants.Operate.Del]: _config.del,
            [_constants.Operate.MoveUp]: _config.moveUp,
            [_constants.Operate.MoveDown]: _config.moveDown
        }[type];
        const data = update(()=>handle === null || handle === void 0 ? void 0 : handle({
                dataSource,
                ...params,
                config
            }));
        const compactData = (0, _lodash.compact)(data);
        // @ts-ignore
        setDataSource(compactData);
        const fieldsStore = registerFields(compactData);
        /**
     * 非字段编辑情况下，再次更新字段
     * -----------------------------------
     * 更新内容包括：
     * 1、重新渲染当前字段组件状态
     * 2、重新触发重新触发监听事件：emitListens
     */ if (![
            _constants.Operate.Change,
            _constants.Operate.ChangeRow
        ].includes(type)) /** 重新注册Field */ await allFieldsForceUpdate(fieldsStore);
        return compactData;
    };
    /**
   * 表单配置
   */ const columnsMemo = (0, _config.getColumns)(config, operate, fieldsStoreRef.current, {
        delText,
        moveUpText,
        moveDownText,
        operateItems,
        operateConfig,
        isOperationBtnVisible,
        customCellRender,
        disabled,
        readonly,
        BaseComponents
    });
    const provideMemo = ()=>({
            operate,
            dataSourceMemo,
            fieldsStoreRef
        });
    /**
   * 监听滑动
   */ const onScroll = (event)=>{
        var _rest_onScroll;
        scrollTopRef.current = event.target.scrollTop;
        rest === null || rest === void 0 || (_rest_onScroll = rest.onScroll) === null || _rest_onScroll === void 0 || _rest_onScroll.call(rest, {
            clientHeight: event.target.clientHeight,
            scrollHeight: event.target.scrollHeight,
            scrollTop: event.target.scrollTop
        });
    };
    /**
   * 校验
   */ const validate = ()=>{
        return new Promise((resolve)=>{
            /**
       * @todo Loading
       * 同步代码异步化，优化大数据问题
       */ let count = 0;
            let errors = [];
            if (!fieldsStoreKeysRef.current.length) return resolve(null);
            fieldsStoreKeysRef.current.forEach((key)=>{
                nextTick(async ()=>{
                    const field = (0, _lodash.get)(fieldsStoreRef.current, key);
                    const { value, validate } = field;
                    const error = await (validate === null || validate === void 0 ? void 0 : validate(value));
                    if (error) errors.push({
                        [key]: error,
                        field
                    });
                    count++;
                    if (fieldsStoreKeysRef.current.length === count) {
                        var _Object_values;
                        /** 滑动到错误行 */ const { rowIndex } = ((_Object_values = Object.values((errors === null || errors === void 0 ? void 0 : errors[0]) || {})) === null || _Object_values === void 0 ? void 0 : _Object_values[0]) || {};
                        !(0, _lodash.isUndefined)(rowIndex) ? scrollToY({
                            index: rowIndex
                        }) : scrollToY({
                            top: scrollTopRef.current
                        });
                        // 返回值
                        resolve(errors.length ? errors : null);
                        errors.forEach(({ field })=>{
                            var _field_fieldForceUpdate;
                            return (_field_fieldForceUpdate = field.fieldForceUpdate) === null || _field_fieldForceUpdate === void 0 ? void 0 : _field_fieldForceUpdate.call(field, {
                                emitWatch: false
                            });
                        });
                    }
                });
            });
        });
    };
    /**
   * 全字段校验 & 触发watch
   * 直接修改 fieldsStore
   */ const allFieldsForceUpdate = async (fieldsStore, updateOptions = {})=>{
        await (0, _config.allFieldsOperate)(fieldsStore, async (item)=>{
            var _item_fieldForceUpdate;
            (_item_fieldForceUpdate = item.fieldForceUpdate) === null || _item_fieldForceUpdate === void 0 || _item_fieldForceUpdate.call(item, updateOptions);
        });
    };
    /** 重新注册 fieldsStore */ const registerFields = (dataSource)=>{
        const params = {
            dataSource,
            operate,
            config,
            sourceConfig: config,
            setConfig,
            fieldsStoreRef
        };
        const { fieldsStore, fieldsKeys, listens } = (0, _config.registerFieldsStore)(params);
        fieldsStoreRef.current = fieldsStore;
        fieldsStoreKeysRef.current = fieldsKeys;
        listensRef.current = listens;
        return fieldsStore;
    };
    /**
   * 更新数据
   */ const updateData = (data)=>{
        const ssidData = (0, _config.setSSIDForDate)(data, customCellRender);
        setDataSource(ssidData);
    };
    /** column的变化，设置回内置的config的state里面 */ (0, _react.useEffect)(()=>{
        setConfig(columns);
    }, [
        columns
    ]);
    /** 受当前数据变化-更新 */ (0, _ahooks.useUpdateEffect)(()=>{
        if (dataSourceMemo.length && (0, _lodash.isEqual)(dataSourceMemo, preDataSourceRef.current)) return;
        preDataSourceRef.current = dataSourceMemo;
        onChange === null || onChange === void 0 || onChange(dataSourceMemo);
    }, [
        dataSourceMemo
    ]);
    /** 受控组件 */ (0, _react.useEffect)(()=>{
        (async ()=>{
            if (value && !(0, _lodash.isEqual)(preDataSourceRef.current, value)) {
                const ssidData = (0, _config.setSSIDForDate)(value, customCellRender);
                /** 外部value变化注册 */ const fieldsStore = registerFields(ssidData);
                await allFieldsForceUpdate(fieldsStore, {
                    emitValid: true
                });
                setDataSource(ssidData);
            }
        })();
    }, [
        value
    ]);
    /** 初始化 */ (0, _ahooks.useMount)(async ()=>{
        /** 生命周期 */ onMounted === null || onMounted === void 0 || onMounted();
    });
    /** 组件实例方法/变量 */ (0, _react.useImperativeHandle)(refInstance, ()=>({
            componentName: _constants.COMPONENT_NAME,
            validate,
            getDataSource: ()=>(0, _lodash.cloneDeep)(dataSourceMemo),
            updateData,
            listens: listensRef,
            fieldsStore: fieldsStoreRef,
            dom: virtualRef.current,
            scrollToY,
            addRow: (value)=>operate({
                    value,
                    type: _constants.Operate.Add
                })
        }));
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "virtualTable",
        ref: virtualRef,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: `virtualTable_wrap ${isEmpty ? 'virtualTable_wrap--empty' : ''}`,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(VirtualContext.Provider, {
                    value: provideMemo(),
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_VirtualTable.default, {
                        ref: virtualTableRef,
                        className: "table",
                        scroll: {
                            y: maxHeight,
                            x: scrollWidth
                        },
                        bordered: true,
                        rowKey: "ssid",
                        ...rest,
                        ...(rest === null || rest === void 0 ? void 0 : rest.rowSelection) ? {
                            rowSelection: {
                                columnWidth: 36,
                                ...(rest === null || rest === void 0 ? void 0 : rest.rowSelection) || {}
                            }
                        } : {},
                        ...(rest === null || rest === void 0 ? void 0 : rest.expandable) ? {
                            expandable: {
                                columnWidth: 52,
                                ...(rest === null || rest === void 0 ? void 0 : rest.expandable) || {}
                            }
                        } : {},
                        dataSource: dataSourceMemo,
                        onScroll: onScroll,
                        columns: columnsMemo,
                        pagination: false,
                        // 空数据状态
                        locale: {
                            emptyText: isEmpty && !readonly ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: "virtualTable_empty",
                                children: empty || /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Empty, {
                                    description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                children: [
                                                    "暂无数据 ",
                                                    isOperationBtnVisible ? '' : '，'
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/innerVFTable.tsx",
                                                lineNumber: 426,
                                                columnNumber: 29
                                            }, void 0),
                                            !isOperationBtnVisible && addBtnProps && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react.default.Fragment, {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                                    disabled: disabled || addBtnProps.disabled,
                                                    onClick: ()=>operate({
                                                            type: _constants.Operate.Add
                                                        }),
                                                    type: "link",
                                                    children: "新增一行"
                                                }, void 0, false, {
                                                    fileName: "src/innerVFTable.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 33
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "src/innerVFTable.tsx",
                                                lineNumber: 428,
                                                columnNumber: 31
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/innerVFTable.tsx",
                                        lineNumber: 425,
                                        columnNumber: 27
                                    }, void 0),
                                    imageStyle: {
                                        height: 72
                                    }
                                }, void 0, false, {
                                    fileName: "src/innerVFTable.tsx",
                                    lineNumber: 423,
                                    columnNumber: 23
                                }, void 0)
                            }, void 0, false, {
                                fileName: "src/innerVFTable.tsx",
                                lineNumber: 421,
                                columnNumber: 19
                            }, void 0) : null
                        }
                    }, void 0, false, {
                        fileName: "src/innerVFTable.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/innerVFTable.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/innerVFTable.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            addBtnProps && !isOperationBtnVisible && !readonly && !isEmpty ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "virtualTable_footer",
                onClick: ()=>operate({
                        type: _constants.Operate.Add
                    }),
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    type: "link",
                    disabled: disabled || addBtnProps.disabled,
                    children: [
                        "+ ",
                        addText
                    ]
                }, void 0, true, {
                    fileName: "src/innerVFTable.tsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/innerVFTable.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "src/innerVFTable.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
};
_s(InnerVFTable, "Z+PkJBBIc1exF/utPwupCoetavE=", false, function() {
    return [
        _ahooks.useUpdateEffect,
        _ahooks.useMount
    ];
});
_c = InnerVFTable;
var _default = InnerVFTable;
var _c;
$RefreshReg$(_c, "InnerVFTable");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/methods/index.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "pageConfigFormat", {
    enumerable: true,
    get: function() {
        return pageConfigFormat;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const pageConfigFormat = (columns, pageConfigMap)=>{
    return columns.map((item)=>{
        const { fixedDisable, fixType, label, require, ...atrrs } = pageConfigMap[item.fieldkey] || {};
        if (fixedDisable) item.columnDisabled = true;
        if (fixType === 'hide') item.fieldShow = false;
        // if (fixType === 'readOnly') {
        // }
        if (label) item.label = label;
        if (require) item.require = require;
        item.attrs = {
            ...item.attrs,
            ...atrrs
        };
        return item;
    });
};
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=common-async.js.map