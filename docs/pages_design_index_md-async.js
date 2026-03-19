((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] || []).push([
        ['pages/design/index.md'],
{ "pages/design/index.md": function (module, exports, __mako_require__){
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
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/API/index.js"));
var _index1 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/Badge/index.js"));
var _index2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/CodeGroup/index.js"));
var _index3 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/Container/index.js"));
var _index4 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/Previewer/index.js"));
var _index5 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/SourceCode/index.js"));
var _index6 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/Table/index.js"));
var _index7 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi/theme-default/builtins/Tree/index.js"));
var _index8 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/builtins/Alert/index.js"));
var _index9 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/builtins/BashOSPlatform/index.js"));
var _index10 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/builtins/BashTabs/index.js"));
var _index11 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/builtins/HomeBaseLayout/index.js"));
var _index12 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/builtins/ImagePreview/index.js"));
var _index13 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dumi-theme-antd/dist/builtins/InstallDependencies/index.js"));
var _indextsx = /*#__PURE__*/ _interop_require_default._(__mako_require__(".dumi/theme/builtins/TsInfo/index.tsx"));
var _dumi = __mako_require__(".dumi/tmp/dumi/exports.ts");
var _loading = /*#__PURE__*/ _interop_require_default._(__mako_require__(".dumi/tmp/dumi/theme/loading.tsx"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _indexmdtypetext = __mako_require__("pages/design/index.md?type=text");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
// export named function for fastRefresh
// ref: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
function DumiMarkdownContent() {
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.DumiPage, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_loading.default, {}, void 0, false, {
                fileName: "pages/design/index.md",
                lineNumber: 30,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "markdown",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                            id: "核心设计详解",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#核心设计详解",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 104
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 53
                                }, this),
                                "核心设计详解"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 37
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                            id: "整体架构设计",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#整体架构设计",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 225
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 174
                                }, this),
                                "整体架构设计"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/3f048c27-81a3-4ee5-85f6-dff5e42b30ca.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 279
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                            id: "组件渲染",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#组件渲染",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 490
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 441
                                }, this),
                                "组件渲染"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 427
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: _indexmdtypetext.texts[0].value
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 542
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                            id: "表格表单渲染",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#表格表单渲染",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 641
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 590
                                }, this),
                                "表格表单渲染"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 574
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/e28c9754-7fe5-4af1-b287-20c8b15ad47a.jpeg",
                                alt: "画板"
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 698
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 695
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[1].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[2].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 874
                                }, this),
                                _indexmdtypetext.texts[3].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 846
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[4].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[5].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 969
                                }, this),
                                _indexmdtypetext.texts[6].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[7].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1032
                                }, this),
                                _indexmdtypetext.texts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[9].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1095
                                }, this),
                                _indexmdtypetext.texts[10].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[11].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1159
                                }, this),
                                _indexmdtypetext.texts[12].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[13].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1224
                                }, this),
                                _indexmdtypetext.texts[14].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[15].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1289
                                }, this),
                                _indexmdtypetext.texts[16].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[17].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1354
                                }, this),
                                _indexmdtypetext.texts[18].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[19].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1419
                                }, this),
                                _indexmdtypetext.texts[20].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 941
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/570dbfd7-4801-4fcc-bc17-b5b5e445ca85.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 1491
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 1488
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                            id: "行自适应高度",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#行自适应高度",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 1703
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1652
                                }, this),
                                "行自适应高度"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 1636
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/a5d9f31d-e49b-4a38-a852-5af86635c51c.jpeg",
                                alt: "画板"
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 1760
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 1757
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[21].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[22].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 1937
                                }, this),
                                _indexmdtypetext.texts[23].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[24].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2002
                                }, this),
                                _indexmdtypetext.texts[25].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 1908
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[26].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[27].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2100
                                }, this),
                                _indexmdtypetext.texts[28].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[29].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2165
                                }, this),
                                _indexmdtypetext.texts[30].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 2071
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: _indexmdtypetext.texts[31].value
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 2234
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                            id: "filedstore-注册",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#filedstore-注册",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 2348
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2290
                                }, this),
                                "FiledStore 注册"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 2267
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/0e807225-5bcf-4084-ad09-62825cb703c0.jpeg",
                                alt: "画板"
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 2412
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 2409
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[32].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[33].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2589
                                }, this),
                                _indexmdtypetext.texts[34].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 2560
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[35].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[36].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2687
                                }, this),
                                _indexmdtypetext.texts[37].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[38].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2752
                                }, this),
                                _indexmdtypetext.texts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[40].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2817
                                }, this),
                                _indexmdtypetext.texts[41].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[42].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2882
                                }, this),
                                _indexmdtypetext.texts[43].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[44].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 2947
                                }, this),
                                _indexmdtypetext.texts[45].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 2658
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/a6bd63fc-e017-4758-ba57-4b0dd332818e.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 3019
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 3016
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                            id: "watch-依赖收集--触发",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    "aria-hidden": "true",
                                    tabIndex: "-1",
                                    href: "#watch-依赖收集--触发",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        className: "icon icon-link"
                                    }, void 0, false, {
                                        fileName: "pages/design/index.md",
                                        lineNumber: 31,
                                        columnNumber: 3247
                                    }, this)
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3188
                                }, this),
                                "watch 依赖收集 & 触发"
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 3164
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                src: "https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/c440d710-d4d5-4842-9a90-6151dae43ff4.jpeg",
                                alt: "画板"
                            }, void 0, false, {
                                fileName: "pages/design/index.md",
                                lineNumber: 31,
                                columnNumber: 3313
                            }, this)
                        }, void 0, false, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 3310
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                _indexmdtypetext.texts[46].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[47].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3490
                                }, this),
                                _indexmdtypetext.texts[48].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[49].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3555
                                }, this),
                                _indexmdtypetext.texts[50].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[51].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3620
                                }, this),
                                _indexmdtypetext.texts[52].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[53].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3685
                                }, this),
                                _indexmdtypetext.texts[54].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[55].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3750
                                }, this),
                                _indexmdtypetext.texts[56].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[57].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3815
                                }, this),
                                _indexmdtypetext.texts[58].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[59].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3880
                                }, this),
                                _indexmdtypetext.texts[60].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[61].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 3945
                                }, this),
                                _indexmdtypetext.texts[62].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: _indexmdtypetext.texts[63].value
                                }, void 0, false, {
                                    fileName: "pages/design/index.md",
                                    lineNumber: 31,
                                    columnNumber: 4010
                                }, this),
                                _indexmdtypetext.texts[64].value
                            ]
                        }, void 0, true, {
                            fileName: "pages/design/index.md",
                            lineNumber: 31,
                            columnNumber: 3461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "pages/design/index.md",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        }, void 0, false, {
            fileName: "pages/design/index.md",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "pages/design/index.md",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = DumiMarkdownContent;
var _default = DumiMarkdownContent;
var _c;
$RefreshReg$(_c, "DumiMarkdownContent");
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
//# sourceMappingURL=pages_design_index_md-async.js.map