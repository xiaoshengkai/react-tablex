((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] || []).push([
        ['demos'],
{ "pages/pages/reference/base/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/base/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const MAX = 100000;
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    marginBottom: '20px'
                },
                children: [
                    "指定数量：",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.InputNumber, {
                        value: dateSource.length,
                        onChange: (value)=>{
                            const num = value <= MAX ? value : MAX;
                            onChange(new Array(num).fill({}));
                        },
                        max: MAX
                    }, void 0, false, {
                        fileName: "pages/pages/reference/base/code/base.tsx?techStack=react",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "pages/pages/reference/base/code/base.tsx?techStack=react",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                columns: columns,
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/base/code/base.tsx?techStack=react",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/base/code/base.tsx?techStack=react",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Demo, "FA3o9+afR2wST4tZQKbUnOdaVkg=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/check/code/asyncValidator.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/check/code/asyncValidator.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '名字（不能重复）',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            },
            {
                validator: async (config, value, callback)=>{
                    const store = config.getStore();
                    /**
           * 模拟异步
           * 睡眠1秒钟
           */ await new Promise((resolve)=>{
                        setTimeout(resolve, 1000);
                    });
                    /** 判断是否存在重名 */ const exitRepeat = store.reduce((result, { ssid, type })=>{
                        if (config.ssid === ssid) return result;
                        if (type === value || result) return true;
                        return false;
                    }, false);
                    callback === null || callback === void 0 || callback(exitRepeat ? '名字不能重复' : undefined);
                }
            }
        ],
        type: 'InputNumber'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([]);
    const virtualTableRef = (0, _react.useRef)(null);
    const onChange = (value)=>{
        setDataSource(value);
    };
    const submit = ()=>{
        var _virtualTableRef_current;
        (_virtualTableRef_current = virtualTableRef.current) === null || _virtualTableRef_current === void 0 || _virtualTableRef_current.validate().then((error)=>{
            if (!error) _antd.message.success('检验通过');
        });
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                onClick: submit,
                style: {
                    marginBottom: '20px'
                },
                children: "提交"
            }, void 0, false, {
                fileName: "pages/pages/reference/check/code/asyncValidator.tsx?techStack=react",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                ref: virtualTableRef,
                columns: columns,
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/check/code/asyncValidator.tsx?techStack=react",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/check/code/asyncValidator.tsx?techStack=react",
        lineNumber: 68,
        columnNumber: 5
    }, this);
};
_s(Demo, "dy9ayQZf+ydd7J8pBB8Z9akZIu0=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/check/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/check/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '数字类型字符',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            },
            {
                type: 'string',
                message: '请填写数字',
                pattern: /^-?\d+\.?\d*$/
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([]);
    const virtualTableRef = (0, _react.useRef)(null);
    const onChange = (value)=>{
        setDataSource(value);
    };
    const submit = ()=>{
        var _virtualTableRef_current;
        (_virtualTableRef_current = virtualTableRef.current) === null || _virtualTableRef_current === void 0 || _virtualTableRef_current.validate().then((error)=>{
            if (!error) _antd.message.success('检验通过');
        });
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                onClick: submit,
                style: {
                    marginBottom: '20px'
                },
                children: "提交"
            }, void 0, false, {
                fileName: "pages/pages/reference/check/code/base.tsx?techStack=react",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                ref: virtualTableRef,
                columns: columns,
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/check/code/base.tsx?techStack=react",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/check/code/base.tsx?techStack=react",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_s(Demo, "dy9ayQZf+ydd7J8pBB8Z9akZIu0=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/check/code/validator.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/check/code/validator.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '价格',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            },
            {
                validator (_, value, callback) {
                    callback(value > 10 ? '不能大于10' : undefined);
                }
            }
        ],
        type: 'InputNumber'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([]);
    const virtualTableRef = (0, _react.useRef)(null);
    const onChange = (value)=>{
        setDataSource(value);
    };
    const submit = ()=>{
        var _virtualTableRef_current;
        (_virtualTableRef_current = virtualTableRef.current) === null || _virtualTableRef_current === void 0 || _virtualTableRef_current.validate().then((error)=>{
            if (!error) _antd.message.success('检验通过');
        });
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                onClick: submit,
                style: {
                    marginBottom: '20px'
                },
                children: "提交"
            }, void 0, false, {
                fileName: "pages/pages/reference/check/code/validator.tsx?techStack=react",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                ref: virtualTableRef,
                columns: columns,
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/check/code/validator.tsx?techStack=react",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/check/code/validator.tsx?techStack=react",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(Demo, "dy9ayQZf+ydd7J8pBB8Z9akZIu0=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/custom/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/custom/code/base.tsx?watch=parent");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const RadioGroup = _antd.Radio.Group;
/**
 * 自定义组件
 * 自动接收value, onChange
 */ const Custom = ({ value, onChange, width })=>{
    const { type, content } = value || {};
    const onSelfChange = (params)=>{
        onChange({
            ...value,
            ...params
        });
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "custom",
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(RadioGroup, {
                onChange: (e)=>onSelfChange({
                        type: e.target.value
                    }),
                value: type,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio, {
                        value: true,
                        children: "显示"
                    }, void 0, false, {
                        fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio, {
                        value: false,
                        children: "隐藏"
                    }, void 0, false, {
                        fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            type ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                value: content,
                onChange: (e)=>onSelfChange({
                        content: e.target.value
                    }),
                style: {
                    width: `${width}px`
                }
            }, void 0, false, {
                fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
                lineNumber: 29,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = Custom;
Custom.Display = ({ value })=>{
    const { type, content } = value || {};
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "custom-display",
        children: type ? content : '隐藏中'
    }, void 0, false, {
        fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
        lineNumber: 41,
        columnNumber: 10
    }, this);
};
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '自定义组件',
        fieldkey: 'custom',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        custom: {
            edit: Custom,
            display: Custom.Display
        },
        attrs: {
            width: 150
        }
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const [readonly, setReadonly] = (0, _react.useState)(false);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Switch, {
                style: {
                    marginBottom: '20px'
                },
                checkedChildren: "表格编辑",
                unCheckedChildren: "表格只读",
                checked: !readonly,
                onChange: (value)=>setReadonly(!value)
            }, void 0, false, {
                fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                readonly: readonly,
                columns: columns,
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/custom/code/base.tsx?techStack=react",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
_s(Demo, "yLgfLMW96bzK4AREly7wa0O32EI=");
_c1 = Demo;
var _default = Demo;
var _c;
var _c1;
$RefreshReg$(_c, "Custom");
$RefreshReg$(_c1, "Demo");
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
"pages/pages/reference/deployable/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/deployable/code/base.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {}
    ]);
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        expandable: {
            expandedRowRender: (record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    style: {
                        margin: '8px'
                    },
                    children: `我：你是我天边最美的云彩~~~~；唱！，你：${record.type || '-'}`
                }, void 0, false, {
                    fileName: "pages/pages/reference/deployable/code/base.tsx?techStack=react",
                    lineNumber: 35,
                    columnNumber: 11
                }, void 0),
            rowExpandable: (record)=>record.ssid !== 0
        }
    }, void 0, false, {
        fileName: "pages/pages/reference/deployable/code/base.tsx?techStack=react",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(Demo, "SBlHRza4tChkXcRSCX0xQ0/qGHs=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/deployable/code/children.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/deployable/code/children.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {}
    ]);
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    const expandedRowRender = ()=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: [
                {
                    type: '让我用心把你留下来'
                }
            ],
            readonly: true
        }, void 0, false, {
            fileName: "pages/pages/reference/deployable/code/children.tsx?techStack=react",
            lineNumber: 29,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        expandable: {
            expandedRowRender,
            defaultExpandedRowKeys: [
                '0'
            ]
        }
    }, void 0, false, {
        fileName: "pages/pages/reference/deployable/code/children.tsx?techStack=react",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_s(Demo, "SBlHRza4tChkXcRSCX0xQ0/qGHs=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {}
    ]);
    const [columnDisabled, setColumnDisabled] = (0, _react.useState)(false);
    const [columnShow, setColumnShow] = (0, _react.useState)(true);
    const getColumns = ()=>[
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: _reacttablex.default.VirtualNo
            },
            {
                label: '内容',
                fieldkey: 'type',
                require: true,
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input',
                columnDisabled,
                columnShow
            }
        ];
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Switch, {
                    style: {
                        marginBottom: '20px'
                    },
                    checkedChildren: "禁用内容列",
                    unCheckedChildren: "开启内容列",
                    checked: columnDisabled,
                    onChange: (value)=>setColumnDisabled(value)
                }, void 0, false, {
                    fileName: "pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Switch, {
                    style: {
                        marginBottom: '20px'
                    },
                    checkedChildren: "显示内容列",
                    unCheckedChildren: "关闭内容列",
                    checked: columnShow,
                    onChange: (value)=>setColumnShow(value)
                }, void 0, false, {
                    fileName: "pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                columns: getColumns(),
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/disabledAndShow/code/columnDisabledAndShow.tsx?techStack=react",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Demo, "J3B1kWklRXS88D9pFb4BlKUShfQ=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/disabledAndShow/code/disabled.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/disabledAndShow/code/disabled.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '输入框',
        fieldkey: 'Input',
        type: 'Input',
        width: 200
    },
    {
        label: '多行文本输入框',
        fieldkey: 'TextArea',
        type: 'TextArea',
        width: 200
    },
    {
        label: '数字输入框',
        fieldkey: 'InputNumber',
        type: 'InputNumber',
        width: 200
    },
    {
        label: '单选框',
        fieldkey: 'Radio',
        type: 'Radio',
        width: 200,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '选择器',
        fieldkey: 'Select',
        type: 'Select',
        width: 200,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '多选框',
        fieldkey: 'Checkbox',
        type: 'Checkbox',
        width: 200,
        options: [
            {
                label: '多选1',
                value: '1'
            },
            {
                label: '多选2',
                value: '2'
            }
        ]
    },
    {
        label: '级联选择',
        fieldkey: 'Cascader',
        type: 'Cascader',
        width: 200,
        options: [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: '日期选择框',
        fieldkey: 'DatePicker',
        type: 'DatePicker',
        width: 200
    },
    {
        label: '月选择框',
        fieldkey: 'MonthPicker',
        type: 'MonthPicker',
        width: 200
    },
    {
        label: '日期范围选择框',
        fieldkey: 'RangePicker',
        type: 'RangePicker',
        width: 200
    },
    {
        label: '周选择框',
        fieldkey: 'WeekPicker',
        type: 'WeekPicker',
        width: 200
    },
    {
        label: '时间选择框',
        fieldkey: 'TimePicker',
        type: 'TimePicker',
        width: 200
    },
    {
        label: '级联多选',
        fieldkey: 'MultiCascader',
        type: 'MultiCascader',
        width: 200,
        options: [
            {
                value: '330000',
                label: '浙江',
                children: [
                    {
                        value: '330100',
                        label: '杭州',
                        children: [
                            {
                                value: '330106',
                                label: '西湖区'
                            },
                            {
                                value: '330105',
                                label: '拱墅',
                                disabled: true
                            },
                            {
                                value: '330108',
                                label: '滨江'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: '评分',
        fieldkey: 'Rate',
        type: 'Rate',
        width: 200
    },
    {
        label: '开关',
        fieldkey: 'Switch',
        type: 'Switch',
        width: 200
    },
    {
        label: '滑动输入条',
        fieldkey: 'Slider',
        type: 'Slider',
        width: 200
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        disabled: true,
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/disabledAndShow/code/disabled.tsx?techStack=react",
        lineNumber: 190,
        columnNumber: 5
    }, this);
};
_s(Demo, "SBlHRza4tChkXcRSCX0xQ0/qGHs=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/disabledAndShow/code/fieldDisabledAndShow.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/disabledAndShow/code/fieldDisabledAndShow.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        fieldShow: false,
        watch: [
            {
                handle (value, { updateSelfConfig }) {
                    updateSelfConfig(value);
                },
                deps: [
                    'fieldDisabled',
                    'fieldShow'
                ],
                immediately: true
            }
        ]
    },
    {
        label: '控制',
        fieldkey: 'control',
        children: [
            {
                label: '是否禁用内容',
                fieldkey: 'fieldDisabled',
                type: 'Switch',
                options: [
                    {
                        label: '是',
                        value: 1
                    },
                    {
                        label: '否',
                        value: 0
                    }
                ]
            },
            {
                label: '是否显示内容',
                fieldkey: 'fieldShow',
                type: 'Switch',
                initialValue: 1,
                options: [
                    {
                        label: '是',
                        value: 1
                    },
                    {
                        label: '否',
                        value: 0
                    }
                ]
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/disabledAndShow/code/fieldDisabledAndShow.tsx?techStack=react",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(Demo, "SBlHRza4tChkXcRSCX0xQ0/qGHs=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/filteringAndSorting/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/filteringAndSorting/code/base.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '年龄',
        fieldkey: 'age',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        sortDirections: [
            'ascend',
            'descend'
        ],
        sorter: (a, b)=>a.age - b.age
    },
    {
        label: '姓名',
        fieldkey: 'name',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    },
    {
        label: '内容',
        fieldkey: 'content',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            age: 38,
            name: '喜羊羊',
            content: '我是一只狼'
        },
        {
            age: 28,
            name: '沸羊羊',
            content: '我是一只牛'
        },
        {
            age: 18,
            name: '美羊羊',
            content: '我是一只猪'
        },
        {
            age: 8,
            name: '懒羊羊',
            content: '我是一只小可爱'
        }
    ]);
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/filteringAndSorting/code/base.tsx?techStack=react",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(Demo, "jPkWcRLNmpdmAZm4CcWFxXOhktE=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/filteringAndSorting/code/filters.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/filteringAndSorting/code/filters.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '年龄',
        fieldkey: 'age',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber'
    },
    {
        label: '姓名',
        fieldkey: 'name',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        filters: [
            {
                text: '喜羊羊',
                value: '喜羊羊'
            },
            {
                text: '懒羊羊',
                value: '懒羊羊'
            }
        ],
        onFilter: (value, record)=>record.name.indexOf(value) === 0
    },
    {
        label: '内容',
        fieldkey: 'content',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        filterSearch: true,
        filters: [
            {
                text: '我是一只狼',
                value: '我是一只狼'
            },
            {
                text: '我是一只牛',
                value: '我是一只牛'
            },
            {
                text: '小可爱',
                value: '小可爱'
            }
        ],
        onFilter: (value, record)=>record.content.indexOf(value) > -1
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            age: 38,
            name: '喜羊羊',
            content: '我是一只狼'
        },
        {
            age: 28,
            name: '沸羊羊',
            content: '我是一只牛'
        },
        {
            age: 18,
            name: '美羊羊',
            content: '我是一只猪'
        },
        {
            age: 8,
            name: '懒羊羊',
            content: '我是一只小可爱'
        }
    ]);
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/filteringAndSorting/code/filters.tsx?techStack=react",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
_s(Demo, "jPkWcRLNmpdmAZm4CcWFxXOhktE=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/filteringAndSorting/code/multiple.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/filteringAndSorting/code/multiple.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '年龄(第一优先级)',
        fieldkey: 'age',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        sortDirections: [
            'ascend',
            'descend'
        ],
        sorter: {
            compare: (a, b)=>a.age - b.age,
            multiple: 2
        }
    },
    {
        label: '姓名',
        fieldkey: 'name',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    },
    {
        label: '分数(第一优先级)',
        fieldkey: 'score',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        sorter: {
            compare: (a, b)=>a.age - b.age,
            multiple: 1
        }
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            age: 38,
            score: 90,
            name: '喜羊羊'
        },
        {
            age: 28,
            score: 70,
            name: '沸羊羊'
        },
        {
            age: 18,
            score: 80,
            name: '美羊羊'
        },
        {
            age: 8,
            score: 100,
            name: '懒羊羊'
        }
    ]);
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/filteringAndSorting/code/multiple.tsx?techStack=react",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_s(Demo, "FUVgbFsUoSO3cuYOxEd8WiPVpbU=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/fixed/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/fixed/code/base.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo,
        fixed: 'left'
    },
    {
        label: '金',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: '木',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: '水',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: '火',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: '土',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)(new Array(100).fill({}));
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        operateConfig: {
            isFixedOperate: true
        }
    }, void 0, false, {
        fileName: "pages/pages/reference/fixed/code/base.tsx?techStack=react",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(Demo, "IfQbZuABgzpZpLHu/jX7Ao538EQ=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/fixed/code/plural.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/fixed/code/plural.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo,
        fixed: 'left'
    },
    {
        label: 'column1',
        fieldkey: 'column1',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column2',
        fieldkey: 'column2',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column3',
        fieldkey: 'column3',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200,
        fixed: 'left'
    },
    {
        label: 'column4',
        fieldkey: 'column4',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column5',
        fieldkey: 'column5',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column6',
        fieldkey: 'column6',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200,
        fixed: 'left'
    },
    {
        label: 'column7',
        fieldkey: 'column7',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column8',
        fieldkey: 'column8',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column9',
        fieldkey: 'column9',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column10',
        fieldkey: 'column10',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column11',
        fieldkey: 'column11',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column12',
        fieldkey: 'column12',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    },
    {
        label: 'column13',
        fieldkey: 'column13',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input',
        width: 200
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)(new Array(100).fill({}));
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        operateConfig: {
            isFixedOperate: true
        }
    }, void 0, false, {
        fileName: "pages/pages/reference/fixed/code/plural.tsx?techStack=react",
        lineNumber: 130,
        columnNumber: 5
    }, this);
};
_s(Demo, "IfQbZuABgzpZpLHu/jX7Ao538EQ=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/formEle/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/formEle/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '输入框',
        fieldkey: 'Input',
        type: 'Input',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '多行文本输入框',
        fieldkey: 'TextArea',
        type: 'TextArea',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '数字输入框',
        fieldkey: 'InputNumber',
        type: 'InputNumber',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '单选框',
        fieldkey: 'Radio',
        type: 'Radio',
        width: 200,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ],
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '选择器',
        fieldkey: 'Select',
        type: 'Select',
        width: 200,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ],
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '多选框',
        fieldkey: 'Checkbox',
        type: 'Checkbox',
        width: 200,
        options: [
            {
                label: '多选1',
                value: '1'
            },
            {
                label: '多选2',
                value: '2'
            }
        ],
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '级联选择',
        fieldkey: 'Cascader',
        type: 'Cascader',
        width: 200,
        options: [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men'
                            }
                        ]
                    }
                ]
            }
        ],
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '日期选择框',
        fieldkey: 'DatePicker',
        type: 'DatePicker',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '月选择框',
        fieldkey: 'MonthPicker',
        type: 'MonthPicker',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '日期范围选择框',
        fieldkey: 'RangePicker',
        type: 'RangePicker',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '周选择框',
        fieldkey: 'WeekPicker',
        type: 'WeekPicker',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '时间选择框',
        fieldkey: 'TimePicker',
        type: 'TimePicker',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '开关',
        fieldkey: 'Switch',
        type: 'Switch',
        width: 200,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ]
    },
    {
        label: '滑动输入条',
        fieldkey: 'Slider',
        type: 'Slider',
        width: 200
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/formEle/code/base.tsx?techStack=react",
        lineNumber: 166,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/formEle/code/extend.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/formEle/code/extend.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '文本',
        fieldkey: 'text',
        type: 'Text'
    },
    {
        label: '文本',
        fieldkey: 'link',
        type: 'Link'
    }
];
const Demo = ()=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: [
            {
                text: '你是谁',
                link: {
                    text: '跳转zcyutil2.0',
                    url: 'https://ipaas.cai-inc.com/quark-index/doc/%40zcy%2Futils/api/array?version=2.0.1-alpha.12&utm=quark.9d3b44.0.0.df6da540321d11efa4e2215e337bdc75'
                }
            }
        ],
        isOperationBtnVisible: true
    }, void 0, false, {
        fileName: "pages/pages/reference/formEle/code/extend.tsx?techStack=react",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/layout/code/children.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/layout/code/children.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        require: true,
        fieldkey: 'type',
        children: [
            {
                label: '你好',
                fieldkey: 'type1',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input'
            },
            {
                label: '你想吃什么呢？',
                fieldkey: 'type2',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input'
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange
        }, void 0, false, {
            fileName: "pages/pages/reference/layout/code/children.tsx?techStack=react",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/layout/code/children.tsx?techStack=react",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/layout/code/layoutMode.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/layout/code/layoutMode.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        require: true,
        fieldkey: 'type',
        layoutMode: _reacttablex.Layout.Horizontal,
        children: [
            {
                label: '你好',
                fieldkey: 'type1',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input'
            },
            {
                label: '你想吃什么呢？',
                fieldkey: 'type2',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input'
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange
        }, void 0, false, {
            fileName: "pages/pages/reference/layout/code/layoutMode.tsx?techStack=react",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/layout/code/layoutMode.tsx?techStack=react",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/layout/code/nest.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/layout/code/nest.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        require: true,
        fieldkey: 'type',
        children: [
            {
                label: '你好',
                fieldkey: 'type1',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input',
                style: {
                    width: '200px'
                }
            },
            {
                layoutMode: _reacttablex.Layout.Horizontal,
                children: [
                    {
                        label: '你想吃什么呢？',
                        fieldkey: 'type2',
                        rules: [
                            {
                                required: true,
                                message: '必填'
                            }
                        ],
                        type: 'Input'
                    },
                    {
                        label: '你想吃、喝什么呢？',
                        fieldkey: 'type2',
                        rules: [
                            {
                                required: true,
                                message: '必填'
                            }
                        ],
                        type: 'Input'
                    }
                ]
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange
        }, void 0, false, {
            fileName: "pages/pages/reference/layout/code/nest.tsx?techStack=react",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/layout/code/nest.tsx?techStack=react",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/layout/code/slot.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/layout/code/slot.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        require: true,
        fieldkey: 'type',
        topContent: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                margin: '20px'
            },
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: "床前明月光"
                }, void 0, false, {
                    fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: "疑是地上霜"
                }, void 0, false, {
                    fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: "举头望明月"
                }, void 0, false, {
                    fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: "低头思故乡"
                }, void 0, false, {
                    fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
            lineNumber: 16,
            columnNumber: 7
        }, this),
        children: [
            {
                label: '你有什么感悟呢？',
                fieldkey: 'type1',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'TextArea',
                bottomContent: (value, { rowIndex })=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        style: {
                            color: '#1677ff',
                            fontSize: '14px',
                            margin: '20px 0'
                        },
                        children: [
                            "我在第",
                            rowIndex + 1,
                            "山，感悟是: ",
                            value || '...'
                        ]
                    }, void 0, true, {
                        fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange
        }, void 0, false, {
            fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/layout/code/slot.tsx?techStack=react",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/layout/code/suffixAndPrefix.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/layout/code/suffixAndPrefix.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '中奖数量',
        fieldkey: 'index',
        type: 'Input',
        prefix: '我有',
        suffix: '个'
    },
    {
        label: '备注',
        fieldkey: 'tip',
        children: [
            {
                prefix: '注意事项：',
                fieldkey: 'tip1',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'TextArea'
            },
            {
                prefix: '通知：',
                fieldkey: 'tip2',
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'TextArea'
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange
        }, void 0, false, {
            fileName: "pages/pages/reference/layout/code/suffixAndPrefix.tsx?techStack=react",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/layout/code/suffixAndPrefix.tsx?techStack=react",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/mergeRowsAndColumns/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/mergeRowsAndColumns/code/base.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const colHideOnCell = (_, index)=>{
    if (index && index % 4 === 3) return {
        colSpan: 0
    };
    return {};
};
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            name: '张飞',
            feature: '嫉恶如仇，勇猛善战',
            ancientName: '冀州',
            modernName: '河北涿州'
        },
        {
            name: '赵云',
            feature: '忠勇无双，单骑救主',
            ancientName: '冀州',
            modernName: '河北正定'
        },
        {
            name: '张郃',
            feature: '用兵巧变，街亭建功',
            ancientName: '冀州',
            modernName: '河北任丘'
        },
        {
            name: '三人皆以勇武忠诚著称。张飞刚烈、赵云忠勇、张郃巧变，共塑北方豪迈气概，展现乱世中的坚韧与胆识。'
        },
        {
            name: '关羽',
            feature: '义薄云天，武圣之称',
            ancientName: '并州',
            modernName: '山西运城'
        },
        {
            name: '徐晃',
            feature: '治军严整，长驱直入',
            ancientName: '并州',
            modernName: '山西洪洞'
        },
        {
            name: '吕布',
            feature: '骁勇无敌，反复无常',
            ancientName: '并州',
            modernName: '内蒙古包头'
        },
        {
            name: '个性鲜明，勇冠三军。关羽重义、徐晃严整、吕布无双，体现并州人的强悍与复杂，留下深刻历史印记。'
        },
        {
            name: '典韦',
            feature: '力大无穷，护主殉职',
            ancientName: '豫州',
            modernName: '河南宁陵'
        },
        {
            name: '许褚',
            feature: '虎痴猛将，裸衣斗马超',
            ancientName: '豫州',
            modernName: '安徽亳州'
        },
        {
            name: '黄忠',
            feature: '老当益壮，百步穿杨',
            ancientName: '豫州',
            modernName: '河南南阳'
        },
        {
            name: '以忠勇顽强闻名。典韦护主、许褚悍勇、黄忠老辣，彰显豫州人的忠诚本色，用热血书写勇武传奇。'
        }
    ]);
    const columns = [
        {
            label: '三国猛将姓名',
            fieldkey: 'name',
            require: true,
            rules: [
                {
                    required: true,
                    message: '必填'
                }
            ],
            type: 'Input',
            width: 200,
            onCell: (_, index)=>({
                    colSpan: index && index % 4 === 3 ? 4 : 1
                })
        },
        {
            label: '特点',
            fieldkey: 'feature',
            require: true,
            rules: [
                {
                    required: true,
                    message: '必填'
                }
            ],
            type: 'Input',
            width: 200,
            onCell: colHideOnCell
        },
        {
            label: '籍贯',
            fieldkey: 'ancientName',
            require: true,
            rules: [
                {
                    required: true,
                    message: '必填'
                }
            ],
            type: 'Input',
            width: 200,
            colSpan: 2,
            onCell: (_, index)=>{
                // 合并行数
                const ROW_SPAN_NUM = 3;
                // 成组数
                const GROUP_NUM = 4;
                /**
         * 保证: 正常动态添加行，不成组数据不合并，否则会报错
        */ const remainderNum = dateSource.length % GROUP_NUM;
                if (index - (dateSource.length - remainderNum) >= 0) return {};
                // 行合并
                if (index % 4 === 0) return {
                    rowSpan: ROW_SPAN_NUM
                };
                if ([
                    1,
                    2
                ].includes(index % GROUP_NUM)) return {
                    rowSpan: 0
                };
                // 列合并
                if (index && index % GROUP_NUM === ROW_SPAN_NUM) return {
                    colSpan: 0
                };
                return {};
            }
        },
        {
            label: '现代名',
            fieldkey: 'modernName',
            require: true,
            rules: [
                {
                    required: true,
                    message: '必填'
                }
            ],
            type: 'Input',
            width: 200,
            colSpan: 0,
            onCell: colHideOnCell
        }
    ];
    const onChange = (value)=>{
        console.log('valuevalue', value);
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/mergeRowsAndColumns/code/base.tsx?techStack=react",
        lineNumber: 158,
        columnNumber: 5
    }, this);
};
_s(Demo, "3sxjWyp2a0Qomb64J5LFaA1vu2U=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/operate/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/operate/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        }
    ]);
    const [isOperationBtnVisible, setOperationBtnVisible] = (0, _react.useState)(false);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Switch, {
                style: {
                    marginBottom: '20px'
                },
                checkedChildren: "关闭表格操作项",
                unCheckedChildren: "开启表格操作项",
                checked: isOperationBtnVisible,
                onChange: (value)=>setOperationBtnVisible(value)
            }, void 0, false, {
                fileName: "pages/pages/reference/operate/code/base.tsx?techStack=react",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                columns: columns,
                value: dateSource,
                onChange: onChange,
                operateItems: [
                    {
                        type: _reacttablex.Operate.Add
                    },
                    {
                        type: _reacttablex.Operate.Del
                    },
                    {
                        type: _reacttablex.Operate.MoveUp
                    },
                    {
                        type: _reacttablex.Operate.MoveDown
                    }
                ],
                operateConfig: {
                    width: 160
                },
                isOperationBtnVisible: isOperationBtnVisible
            }, void 0, false, {
                fileName: "pages/pages/reference/operate/code/base.tsx?techStack=react",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/operate/code/base.tsx?techStack=react",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Demo, "ltZU2J/ncvM53mCpPs9HB6HAabI=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/operate/code/custom.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/operate/code/custom.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
var _s1 = $RefreshSig$();
const FormItem = _antd.Form.Item;
const TextArea = _antd.Input.TextArea;
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '名字',
        fieldkey: 'name',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Text'
    },
    {
        label: '年龄',
        fieldkey: 'age',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Text'
    },
    {
        label: '备注',
        fieldkey: 'remarks',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Text'
    }
];
const DelButton = ({ delRow, disabled })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
        disabled: disabled,
        type: "link",
        onClick: delRow,
        children: "删除"
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_c = DelButton;
const MoveRowUpButton = ({ moveRowUp, disabled })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
        disabled: disabled,
        type: "link",
        onClick: moveRowUp,
        children: "上移"
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_c1 = MoveRowUpButton;
const MoveRowDownButton = ({ moveDownUp, disabled })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
        disabled: disabled,
        type: "link",
        onClick: moveDownUp,
        children: "下移"
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
_c2 = MoveRowDownButton;
const FormModal = ({ onChange, onOk, onClose, value })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
        visible: true,
        title: "编辑内容",
        onOk: onOk,
        onCancel: onClose,
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormItem, {
                    label: "名字",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                        defaultValue: value.name,
                        width: 200,
                        onChange: (e)=>onChange('name', e.target.value)
                    }, void 0, false, {
                        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormItem, {
                    label: "年龄",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.InputNumber, {
                        width: 200,
                        defaultValue: value.age,
                        onChange: (value)=>onChange('age', value)
                    }, void 0, false, {
                        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormItem, {
                    label: "备注",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(TextArea, {
                        width: 200,
                        defaultValue: value.remarks,
                        onChange: (e)=>onChange('remarks', e.target.value)
                    }, void 0, false, {
                        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
_c3 = FormModal;
const Operate = ({ operateText = '编辑', btnType = 'link', addRwoValue, changeRowValue, rowData = {}, disabled = false })=>{
    _s();
    const [visible, setVisible] = (0, _react.useState)(false);
    const [rowDataValue, setRowDataValue] = (0, _react.useState)(rowData);
    const onOpen = ()=>{
        setVisible(true);
    };
    const onClose = ()=>{
        setVisible(false);
    };
    const onChange = (name, value)=>{
        setRowDataValue({
            ...rowDataValue,
            [name]: value
        });
    };
    const onOk = ()=>{
        addRwoValue === null || addRwoValue === void 0 || addRwoValue(rowDataValue);
        changeRowValue === null || changeRowValue === void 0 || changeRowValue(rowDataValue);
        onClose();
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                disabled: disabled,
                type: btnType,
                onClick: onOpen,
                children: operateText
            }, void 0, false, {
                fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            visible ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormModal, {
                onChange: onChange,
                onOk: onOk,
                onClose: onClose,
                value: rowData
            }, void 0, false, {
                fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                lineNumber: 143,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
        lineNumber: 137,
        columnNumber: 5
    }, this);
};
_s(Operate, "E8tZAgABOgP2eWyx1fnJzyJlNDI=");
_c4 = Operate;
const Demo = ()=>{
    _s1();
    const virtualTableRef = (0, _react.useRef)(null);
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            name: '小红',
            age: 18,
            remarks: '爱玩'
        },
        {
            name: '小蓝',
            age: 8,
            remarks: '就是爱玩儿'
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    const addRow = (value)=>{
        var _virtualTableRef_current;
        (_virtualTableRef_current = virtualTableRef.current) === null || _virtualTableRef_current === void 0 || _virtualTableRef_current.addRow(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    marginBottom: '20px'
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Operate, {
                    operateText: "添加行",
                    btnType: "primary",
                    addRwoValue: (value)=>addRow(value)
                }, void 0, false, {
                    fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                ref: virtualTableRef,
                columns: columns,
                value: dateSource,
                onChange: onChange,
                operateItems: [
                    {
                        custom: DelButton,
                        disabled: (cellProps)=>cellProps.rowIndex === 0
                    },
                    {
                        custom: MoveRowUpButton
                    },
                    {
                        custom: MoveRowDownButton
                    },
                    {
                        custom: Operate
                    }
                ],
                operateConfig: {
                    width: 180
                }
            }, void 0, false, {
                fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/operate/code/custom.tsx?techStack=react",
        lineNumber: 170,
        columnNumber: 5
    }, this);
};
_s1(Demo, "X2Kat9Jux3bDwIZOdteXcYEm0Rk=");
_c5 = Demo;
var _default = Demo;
var _c;
var _c1;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "DelButton");
$RefreshReg$(_c1, "MoveRowUpButton");
$RefreshReg$(_c2, "MoveRowDownButton");
$RefreshReg$(_c3, "FormModal");
$RefreshReg$(_c4, "Operate");
$RefreshReg$(_c5, "Demo");
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
"pages/pages/reference/operate/code/disabled.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/operate/code/disabled.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        },
        {
            type: '内容2'
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange,
            operateItems: [
                /**
           * 控制第一行删除禁用
          */ {
                    type: _reacttablex.Operate.Del,
                    disabled: (cellProps)=>cellProps.rowIndex === 0
                },
                {
                    type: _reacttablex.Operate.Add
                }
            ],
            operateConfig: {
                width: 160
            }
        }, void 0, false, {
            fileName: "pages/pages/reference/operate/code/disabled.tsx?techStack=react",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/disabled.tsx?techStack=react",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_s(Demo, "0w8hZfAEdiG1lwuF7o8sUJW3hQ0=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/operate/code/hide.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/operate/code/hide.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        },
        {
            type: '内容2'
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange,
            isOperationBtnVisible: true
        }, void 0, false, {
            fileName: "pages/pages/reference/operate/code/hide.tsx?techStack=react",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/hide.tsx?techStack=react",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_s(Demo, "0w8hZfAEdiG1lwuF7o8sUJW3hQ0=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/operate/code/vertical.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/operate/code/vertical.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        },
        {
            type: '内容2'
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        operateItems: [
            {
                type: _reacttablex.Operate.Add
            },
            {
                type: _reacttablex.Operate.Del
            },
            {
                type: _reacttablex.Operate.MoveUp
            },
            {
                type: _reacttablex.Operate.MoveDown
            }
        ],
        operateConfig: {
            width: 50,
            layout: _reacttablex.Layout.Vertical
        }
    }, void 0, false, {
        fileName: "pages/pages/reference/operate/code/vertical.tsx?techStack=react",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Demo, "0w8hZfAEdiG1lwuF7o8sUJW3hQ0=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/readonly/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/readonly/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '输入框',
        fieldkey: 'Input',
        type: 'Input',
        width: 200
    },
    {
        label: '多行文本输入框',
        fieldkey: 'TextArea',
        type: 'TextArea',
        width: 200
    },
    {
        label: '数字输入框',
        fieldkey: 'InputNumber',
        type: 'InputNumber',
        width: 200
    },
    {
        label: '单选框',
        fieldkey: 'Radio',
        type: 'Radio',
        width: 200,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '选择器',
        fieldkey: 'Select',
        type: 'Select',
        width: 200,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '多选框',
        fieldkey: 'Checkbox',
        type: 'Checkbox',
        width: 200,
        options: [
            {
                label: '多选1',
                value: '1'
            },
            {
                label: '多选2',
                value: '2'
            }
        ]
    },
    {
        label: '级联选择',
        fieldkey: 'Cascader',
        type: 'Cascader',
        width: 200,
        options: [
            {
                value: 'zhejiang',
                label: '浙江',
                children: [
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [
                            {
                                value: 'xihu',
                                label: '西湖'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: '中华门'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: '日期选择框',
        fieldkey: 'DatePicker',
        type: 'DatePicker',
        width: 200,
        attrs: {
            format: 'YYYY/MM/DD'
        }
    },
    {
        label: '月选择框',
        fieldkey: 'MonthPicker',
        type: 'MonthPicker',
        width: 200
    },
    {
        label: '日期范围选择框',
        fieldkey: 'RangePicker',
        type: 'RangePicker',
        width: 200
    },
    {
        label: '周选择框',
        fieldkey: 'WeekPicker',
        type: 'WeekPicker',
        width: 200
    },
    {
        label: '时间选择框',
        fieldkey: 'TimePicker',
        type: 'TimePicker',
        width: 200
    },
    {
        label: '开关',
        fieldkey: 'Switch',
        type: 'Switch',
        width: 200
    },
    {
        label: '滑动输入条',
        fieldkey: 'Slider',
        type: 'Slider',
        width: 200
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            Input: '有时候，人生就像一锅烧开的毒鸡汤，虽然满是苦味，但也许正因为如此，我们才能品尝到生命的酸甜苦辣',
            Search: '当你感到挫败时，记住你的努力不会白费，每一步都是向前迈进的动力',
            TextArea: `在城市的海岸边，有一只名叫Sharky的超级英雄鲨鱼。
        Sharky有着一双闪闪发光的牙齿，他以帮助别人刷牙为使命。
        每天，Sharky穿梭在城市的街道上，寻找需要帮助的人。
        他用自己的牙齿为小朋友们刷牙，让他们拥有健康洁白的笑容。
        每个人都爱戴着Sharky，他成为了城市里最受欢迎的超级英雄之一。`,
            InputNumber: 666,
            Radio: true,
            Select: true,
            Checkbox: [
                '1',
                '2'
            ],
            Cascader: [
                'zhejiang',
                'hangzhou',
                'xihu'
            ],
            DatePicker: 1714485734000,
            MonthPicker: 1721743336000,
            RangePicker: [
                1715090538000,
                1715436138000
            ],
            WeekPicker: 1713276142000,
            TimePicker: '2024-04-22T16:04:09.000Z',
            Switch: true,
            Slider: 26
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        readonly: true,
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/readonly/code/base.tsx?techStack=react",
        lineNumber: 178,
        columnNumber: 5
    }, this);
};
_s(Demo, "yl+HMsTlKyrIu/lN+QzAcLNVfaI=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/readonly/code/custom.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/readonly/code/custom.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const RadioGroup = _antd.Radio.Group;
/**
 * 自定义组件
 * 自动接收value, onChange
 */ const Custom = ({ value, onChange, width })=>{
    const { type, content } = value || {};
    const onSelfChange = (params)=>{
        onChange({
            ...value,
            ...params
        });
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "custom",
        style: {
            display: 'flex',
            alignItems: 'center',
            height: '30px'
        },
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(RadioGroup, {
                onChange: (e)=>onSelfChange({
                        type: e.target.value
                    }),
                value: type,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio, {
                        value: true,
                        children: "显示"
                    }, void 0, false, {
                        fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Radio, {
                        value: false,
                        children: "隐藏"
                    }, void 0, false, {
                        fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            type ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                value: content,
                onChange: (e)=>onSelfChange({
                        content: e.target.value
                    }),
                style: {
                    width: `${width}px`
                }
            }, void 0, false, {
                fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
                lineNumber: 33,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_c = Custom;
Custom.display = ({ value })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: value.type && value.content ? value.content : '-'
    }, void 0, false, {
        fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
        lineNumber: 44,
        columnNumber: 10
    }, this);
};
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '自定义组件',
        fieldkey: 'custom',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        custom: {
            edit: Custom,
            display: Custom.display
        },
        attrs: {
            width: 150
        }
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            custom: {
                type: true,
                content: '坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。'
            }
        },
        {
            custom: {
                type: false,
                content: '坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。'
            }
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        readonly: true,
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/readonly/code/custom.tsx?techStack=react",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s(Demo, "CECuIzbqgxhf/Ip/h9dhrInoqpg=");
_c1 = Demo;
var _default = Demo;
var _c;
var _c1;
$RefreshReg$(_c, "Custom");
$RefreshReg$(_c1, "Demo");
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
"pages/pages/reference/rowSelection/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/rowSelection/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        },
        {
            type: '内容2'
        },
        {
            type: '内容3'
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    const onSelectChange = (selectedRowKeys, selectedRows)=>{
        console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange,
            operateItems: [
                {
                    type: _reacttablex.Operate.Add
                },
                {
                    type: _reacttablex.Operate.Del
                },
                {
                    type: _reacttablex.Operate.MoveUp
                },
                {
                    type: _reacttablex.Operate.MoveDown
                }
            ],
            operateConfig: {
                width: 160
            },
            rowSelection: {
                onChange: onSelectChange
            }
        }, void 0, false, {
            fileName: "pages/pages/reference/rowSelection/code/base.tsx?techStack=react",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/rowSelection/code/base.tsx?techStack=react",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_s(Demo, "tqfTWXqEbJLxQkboNloY+il7R6o=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/rowSelection/code/class.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/rowSelection/code/class.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const columns = [
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
class Demo extends _react.default.Component {
    constructor(props){
        super(props);
    }
    state = {
        dateSource: []
    };
    onChange = (value)=>{
        this.setState({
            dateSource: value
        });
    };
    onSelectChange = (selectedRowKeys, selectedRows)=>{
        console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
    };
    render() {
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                columns: columns,
                defaultValue: this.state.dateSource,
                onChange: this.onChange,
                operateItems: [
                    {
                        type: _reacttablex.Operate.Add
                    },
                    {
                        type: _reacttablex.Operate.Del
                    },
                    {
                        type: _reacttablex.Operate.MoveUp
                    },
                    {
                        type: _reacttablex.Operate.MoveDown
                    }
                ],
                operateConfig: {
                    width: 160
                },
                rowSelection: {
                    onChange: this.onSelectChange
                }
            }, void 0, false, {
                fileName: "pages/pages/reference/rowSelection/code/class.tsx?techStack=react",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "pages/pages/reference/rowSelection/code/class.tsx?techStack=react",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
}
var _default = Demo;
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
"pages/pages/reference/rowSelection/code/selectedRowKeys.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/rowSelection/code/selectedRowKeys.tsx?watch=parent");
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
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
const columns = [
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        },
        {
            type: '内容2'
        },
        {
            type: '内容3'
        },
        {
            type: '内容4'
        },
        {
            type: '内容5'
        },
        {
            type: '内容6'
        },
        {
            type: '内容7'
        },
        {
            type: '内容8'
        },
        {
            type: '内容9'
        }
    ]);
    const [selectedRowKeys, setSelectedRowKeys] = (0, _react.useState)([
        1,
        2
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    const onSelectChange = (selectedRowKeys, selectedRows)=>{
        setSelectedRowKeys(selectedRowKeys);
        console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
            columns: columns,
            value: dateSource,
            onChange: onChange,
            operateItems: [
                {
                    type: _reacttablex.Operate.Add
                },
                {
                    type: _reacttablex.Operate.Del
                },
                {
                    type: _reacttablex.Operate.MoveUp
                },
                {
                    type: _reacttablex.Operate.MoveDown
                }
            ],
            isOperationBtnVisible: true,
            operateConfig: {
                width: 160
            },
            rowSelection: {
                selectedRowKeys,
                onChange: onSelectChange,
                getCheckboxProps: (record)=>{
                    return {
                        disabled: record.ssid === 0,
                        ssid: record.ssid
                    };
                }
            }
        }, void 0, false, {
            fileName: "pages/pages/reference/rowSelection/code/selectedRowKeys.tsx?techStack=react",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/pages/reference/rowSelection/code/selectedRowKeys.tsx?techStack=react",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
_s(Demo, "auvAGhWb0X1vNpeCppcuAxXjL14=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/rowSelection/code/type.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/rowSelection/code/type.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
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
const RadioButton = _antd.Radio.Button;
const RadioGroup = _antd.Radio.Group;
const columns = [
    {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            type: '内容1'
        },
        {
            type: '内容2'
        },
        {
            type: '内容3'
        },
        {
            type: '内容4'
        },
        {
            type: '内容5'
        },
        {
            type: '内容6'
        },
        {
            type: '内容7'
        },
        {
            type: '内容8'
        },
        {
            type: '内容9'
        }
    ]);
    const [selectedRowKeys, setSelectedRowKeys] = (0, _react.useState)([]);
    const [type, setType] = (0, _react.useState)('checkbox');
    const onChange = (value)=>{
        setDataSource(value);
    };
    const onSelectChange = (selectedRowKeys, selectedRows)=>{
        setSelectedRowKeys(selectedRowKeys);
        console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
    };
    const onTypeChange = (e)=>{
        setType(e.target.value);
        setSelectedRowKeys([]);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(RadioGroup, {
                onChange: onTypeChange,
                value: type,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(RadioButton, {
                        value: "checkbox",
                        children: "多选"
                    }, void 0, false, {
                        fileName: "pages/pages/reference/rowSelection/code/type.tsx?techStack=react",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(RadioButton, {
                        value: "radio",
                        children: "单选"
                    }, void 0, false, {
                        fileName: "pages/pages/reference/rowSelection/code/type.tsx?techStack=react",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "pages/pages/reference/rowSelection/code/type.tsx?techStack=react",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                fileName: "pages/pages/reference/rowSelection/code/type.tsx?techStack=react",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                columns: columns,
                value: dateSource,
                onChange: onChange,
                operateItems: [
                    {
                        type: _reacttablex.Operate.Add
                    },
                    {
                        type: _reacttablex.Operate.Del
                    },
                    {
                        type: _reacttablex.Operate.MoveUp
                    },
                    {
                        type: _reacttablex.Operate.MoveDown
                    }
                ],
                operateConfig: {
                    width: 160
                },
                isOperationBtnVisible: true,
                rowSelection: {
                    type,
                    selectedRowKeys,
                    onChange: onSelectChange
                }
            }, void 0, false, {
                fileName: "pages/pages/reference/rowSelection/code/type.tsx?techStack=react",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/rowSelection/code/type.tsx?techStack=react",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(Demo, "lUz7lzpl9MuUcgqm3nLXBDJnsUQ=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/appointOfWay.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/appointOfWay.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
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
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {}
    ]);
    const [num, setNum] = (0, _react.useState)(1);
    const getColumns = ()=>[
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: _reacttablex.default.VirtualNo
            },
            {
                label: '是否开启',
                fieldkey: 'type',
                require: true,
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Radio',
                options: [
                    {
                        label: '是',
                        value: true
                    },
                    {
                        label: '否',
                        value: false
                    }
                ]
            },
            {
                label: '内容',
                fieldkey: 'content',
                require: true,
                rules: [
                    {
                        required: true,
                        message: '必填'
                    }
                ],
                type: 'Input',
                watch: [
                    {
                        handle (value, { updateSelfConfig }) {
                            updateSelfConfig({
                                fieldShow: value
                            });
                        },
                        deps: [
                            'type'
                        ],
                        way: (index)=>index === num
                    }
                ]
            }
        ];
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    marginBottom: '20px'
                },
                children: [
                    "指定行触发watch：",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.InputNumber, {
                        value: num,
                        onChange: (value)=>setNum(value)
                    }, void 0, false, {
                        fileName: "pages/pages/reference/watch/code/appointOfWay.tsx?techStack=react",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "pages/pages/reference/watch/code/appointOfWay.tsx?techStack=react",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
                columns: getColumns(),
                value: dateSource,
                onChange: onChange
            }, void 0, false, {
                fileName: "pages/pages/reference/watch/code/appointOfWay.tsx?techStack=react",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/watch/code/appointOfWay.tsx?techStack=react",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_s(Demo, "PZPd38Kck5LuVXrpet/SiN1OsL8=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/base.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/base.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '是否开启',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Radio',
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '价格',
        fieldkey: 'price',
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        attrs: {
            min: 0,
            max: 10
        },
        fieldShow: false,
        watch: [
            {
                handle (value, { updateSelfConfig, updateCellData }) {
                    updateSelfConfig({
                        fieldShow: value
                    });
                    updateCellData(1);
                },
                deps: [
                    'type'
                ]
            }
        ]
    },
    {
        label: '备注',
        fieldkey: 'txt',
        type: 'TextArea',
        watch: [
            {
                handle (value, { updateCellData }) {
                    if (value === 1) updateCellData(`${value}块钱`);
                },
                deps: [
                    'price'
                ]
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/watch/code/base.tsx?techStack=react",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/colOfWay.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/colOfWay.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '角色',
        fieldkey: 'name',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Input'
    },
    {
        label: '路人（感受）',
        fieldkey: 'npc',
        type: 'Input',
        watch: [
            {
                handle (value, { updateCellData }) {
                    if (value) updateCellData(value ? '我喜欢' + value : '');
                },
                deps: [
                    'name'
                ],
                way: _reacttablex.Way.Col,
                immediately: true
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            name: '李小龙'
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/watch/code/colOfWay.tsx?techStack=react",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
_s(Demo, "dg34se0lqXizvAu3KzStf5E3LHY=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/deps.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/deps.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '第一道开关',
        fieldkey: 'type1',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Radio',
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '第二道开关',
        fieldkey: 'type2',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Radio',
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '两个开关开启才能显示',
        fieldkey: 'price1',
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        attrs: {
            min: 0,
            max: 10
        },
        fieldShow: false,
        watch: [
            {
                handle (value, { updateSelfConfig, store }) {
                    const { type1, type2 } = value;
                    updateSelfConfig({
                        fieldShow: type1 && type2
                    });
                },
                deps: [
                    'type1',
                    'type2'
                ]
            }
        ]
    },
    {
        label: '最后触发开关的为准',
        fieldkey: 'price2',
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        attrs: {
            min: 0,
            max: 10
        },
        fieldShow: false,
        watch: [
            {
                handle (value, { updateSelfConfig }) {
                    updateSelfConfig({
                        fieldShow: value
                    });
                },
                deps: [
                    'type1'
                ]
            },
            {
                handle (value, { updateSelfConfig }) {
                    updateSelfConfig({
                        fieldShow: value
                    });
                },
                deps: [
                    'type2'
                ]
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/watch/code/deps.tsx?techStack=react",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_s(Demo, "EYpUTCePYuFh4VkYbAGb8CQS/kk=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/immediately.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/immediately.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '是否开启',
        fieldkey: 'type',
        require: true,
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'Radio',
        initialValue: true,
        options: [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: false
            }
        ]
    },
    {
        label: '价格',
        fieldkey: 'price',
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        type: 'InputNumber',
        attrs: {
            min: 0,
            max: 10
        },
        fieldShow: false,
        watch: [
            {
                handle (value, { updateSelfConfig }) {
                    updateSelfConfig({
                        fieldShow: value
                    });
                },
                deps: [
                    'type'
                ],
                immediately: true
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange
    }, void 0, false, {
        fileName: "pages/pages/reference/watch/code/immediately.tsx?techStack=react",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(Demo, "FA3o9+afR2wST4tZQKbUnOdaVkg=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/next.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/next.tsx?watch=parent");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '权重',
        fieldkey: 'weight',
        require: true,
        type: 'InputNumber',
        rules: [
            {
                required: true,
                message: '必填'
            },
            {
                validator ({ getStore, rowIndex }, value, callback) {
                    var _store_;
                    if (rowIndex === 0) return callback();
                    const store = getStore();
                    if (((_store_ = store[rowIndex + 1]) === null || _store_ === void 0 ? void 0 : _store_.weight) >= value) return callback('当前权重小于下一列');
                    callback();
                }
            }
        ],
        watch: [
            {
                handle (value, { updateCellData }) {
                    updateCellData(value && Number(value) + 1);
                },
                deps: [
                    'weight'
                ],
                way: _reacttablex.Way.Next
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {},
        {},
        {}
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        operateItems: [
            {
                type: _reacttablex.Operate.Add
            },
            /**
         * 控制第一行删除禁用
         */ {
                type: _reacttablex.Operate.Del,
                disabled: (cellProps)=>cellProps.rowIndex === 0
            }
        ]
    }, void 0, false, {
        fileName: "pages/pages/reference/watch/code/next.tsx?techStack=react",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
_s(Demo, "ZV0p1QUHvykOLVCA1/BK//uF8dU=");
_c = Demo;
var _default = Demo;
var _c;
$RefreshReg$(_c, "Demo");
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
"pages/pages/reference/watch/code/pre.tsx?techStack=react": function (module, exports, __mako_require__){
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
__mako_require__("pages/pages/reference/watch/code/pre.tsx?watch=parent");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reacttablex = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const InputNumberRange = ({ value, onChange })=>{
    const [f, l] = value || [];
    const onChangeHandle = (l)=>{
        onChange([
            f,
            l
        ]);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        style: {
            display: 'flex',
            width: '300px'
        },
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.InputNumber, {
                disabled: true,
                value: f
            }, void 0, false, {
                fileName: "pages/pages/reference/watch/code/pre.tsx?techStack=react",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                children: "~"
            }, void 0, false, {
                fileName: "pages/pages/reference/watch/code/pre.tsx?techStack=react",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.InputNumber, {
                value: l,
                onChange: onChangeHandle
            }, void 0, false, {
                fileName: "pages/pages/reference/watch/code/pre.tsx?techStack=react",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "pages/pages/reference/watch/code/pre.tsx?techStack=react",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = InputNumberRange;
const columns = [
    {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: _reacttablex.default.VirtualNo
    },
    {
        label: '价格区间',
        fieldkey: 'range',
        rules: [
            {
                required: true,
                message: '必填'
            }
        ],
        custom: InputNumberRange,
        watch: [
            {
                handle (value, { updateCellData, store, rowIndex }) {
                    var _store_rowIndex;
                    // 获取当前field数据
                    const [, l] = ((_store_rowIndex = store[rowIndex]) === null || _store_rowIndex === void 0 ? void 0 : _store_rowIndex.range) || [];
                    // 获取上一个field数据
                    const [, perL] = value || [];
                    updateCellData([
                        perL && perL + 1,
                        l
                    ]);
                },
                deps: [
                    'range'
                ],
                way: _reacttablex.Way.Pre,
                immediately: true
            }
        ]
    }
];
const Demo = ()=>{
    _s();
    const [dateSource, setDataSource] = (0, _react.useState)([
        {
            range: [
                0,
                1
            ]
        },
        {
            range: []
        }
    ]);
    const onChange = (value)=>{
        setDataSource(value);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_reacttablex.default, {
        columns: columns,
        value: dateSource,
        onChange: onChange,
        operateItems: [
            {
                type: _reacttablex.Operate.Add
            },
            /**
         * 控制第一行删除禁用
         */ {
                type: _reacttablex.Operate.Del,
                disabled: (cellProps)=>cellProps.rowIndex === 0
            }
        ]
    }, void 0, false, {
        fileName: "pages/pages/reference/watch/code/pre.tsx?techStack=react",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
_s(Demo, "1PWwf7YEoj3AhbMZ6cwN3dqmTIY=");
_c1 = Demo;
var _default = Demo;
var _c;
var _c1;
$RefreshReg$(_c, "InputNumberRange");
$RefreshReg$(_c1, "Demo");
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
//# sourceMappingURL=demos-async.js.map