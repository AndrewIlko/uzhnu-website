"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./src/pages/news/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/news/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Main/Main */ \"./src/components/Main/Main.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Posts_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Posts/Post */ \"./src/components/Posts/Post.tsx\");\n/* harmony import */ var _custom_hooks_useFetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/custom-hooks/useFetchData */ \"./src/custom-hooks/useFetchData.ts\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data */ \"./src/data.ts\");\n/* harmony import */ var _components_News_NewsFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/News/NewsFilter */ \"./src/components/News/NewsFilter.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst NewsPage = ()=>{\n    _s();\n    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const createFetchStr = (basicURL, asPath)=>{\n        return \"\".concat(basicURL).concat(asPath.split(\"?\")[1] ? \"?\".concat(asPath.split(\"?\")[1], \"&limit=10\") : \"\");\n    };\n    const { data: posts , setURL  } = (0,_custom_hooks_useFetchData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(createFetchStr(\"\".concat(_data__WEBPACK_IMPORTED_MODULE_7__.URL, \"/posts\"), asPath));\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        setURL(\"\".concat(_data__WEBPACK_IMPORTED_MODULE_7__.URL, \"/posts\").concat(asPath.split(\"?\")[1] ? \"?\".concat(asPath.split(\"?\")[1], \"&limit=10\") : \"\"));\n    }, [\n        asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Новини | UZHNU\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col flex-1 py-[30px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col flex-1 px-[25px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-[15px] max-w-[800px] w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_News_NewsFilter__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    posts && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-[15px]\",\n                                            children: posts.map((post)=>{\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    data: post\n                                                }, react_uuid__WEBPACK_IMPORTED_MODULE_6___default()(), false, {\n                                                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 32\n                                                }, undefined);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\pages\\\\news\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(NewsPage, \"kzJp50p4ng1ZSXbqNSmdnTUPFJQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter,\n        _custom_hooks_useFetchData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = NewsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmV3cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNMO0FBQ2I7QUFJYztBQUNZO0FBQ3pCO0FBQ0Q7QUFFeUI7QUFDZDtBQUNOO0FBRWxDLE1BQU1VLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0gsc0RBQVNBO0lBRTVCLE1BQU1JLGlCQUFpQixDQUFDQyxVQUFrQkYsU0FBbUI7UUFDM0QsT0FBTyxHQUNMQSxPQURRRSxVQUVULE9BRENGLE9BQU9HLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQXlCLE9BQXJCSCxPQUFPRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxlQUFhLEVBQUU7SUFFbkU7SUFFQSxNQUFNLEVBQUVDLE1BQU1DLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUdiLHNFQUFZQSxDQUMxQ1EsZUFBZSxHQUFPLE9BQUpOLHNDQUFHQSxFQUFDLFdBQVNLO0lBR2pDRixpREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLE9BQ0UsR0FDRU4sT0FEQ0wsc0NBQUdBLEVBQUMsVUFFTixPQURDSyxPQUFPRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUF5QixPQUFyQkgsT0FBT0csS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsZUFBYSxFQUFFO0lBR3JFLEdBQUc7UUFBQ0g7S0FBTztJQUVYLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOztrQ0FDSCw4REFBQ2dCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUN2Qiw2REFBSUE7MEJBQ0gsNEVBQUNELDZEQUFTQTs4QkFDUiw0RUFBQ3lCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDbkIsbUVBQVVBOzs7OztvQ0FDVlMsdUJBQ0M7a0RBQ0UsNEVBQUNTOzRDQUFJQyxXQUFVO3NEQUNaVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MsT0FBbUI7Z0RBQzdCLHFCQUFPLDhEQUFDekIsOERBQUlBO29EQUFjWSxNQUFNYTttREFBZHZCLGlEQUFJQTs7Ozs7NENBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd0QjtHQW5ETUs7O1FBQ2VGLGtEQUFTQTtRQVFJSixrRUFBWUE7OztLQVR4Q007QUFxRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25ld3MvaW5kZXgudHN4PzI4NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiQC9jb21wb25lbnRzL01haW4vTWFpblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIkAvdHMvdHlwZXMvYXBwX3R5cGVzXCI7XHJcbmltcG9ydCB7IFBvc3QgYXMgUG9zdFR5cGUgfSBmcm9tIFwiQC90cy90eXBlcy9hcHBfdHlwZXNcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0cy9Qb3N0XCI7XHJcbmltcG9ydCB1c2VGZXRjaERhdGEgZnJvbSBcIkAvY3VzdG9tLWhvb2tzL3VzZUZldGNoRGF0YVwiO1xyXG5pbXBvcnQgdXVpZCBmcm9tIFwicmVhY3QtdXVpZFwiO1xyXG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwiQC9kYXRhXCI7XHJcblxyXG5pbXBvcnQgTmV3c0ZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL05ld3MvTmV3c0ZpbHRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOZXdzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUZldGNoU3RyID0gKGJhc2ljVVJMOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7YmFzaWNVUkx9JHtcclxuICAgICAgYXNQYXRoLnNwbGl0KFwiP1wiKVsxXSA/IGA/JHthc1BhdGguc3BsaXQoXCI/XCIpWzFdfSZsaW1pdD0xMGAgOiBcIlwiXHJcbiAgICB9YDtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHBvc3RzLCBzZXRVUkwgfSA9IHVzZUZldGNoRGF0YShcclxuICAgIGNyZWF0ZUZldGNoU3RyKGAke1VSTH0vcG9zdHNgLCBhc1BhdGgpXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFVSTChcclxuICAgICAgYCR7VVJMfS9wb3N0cyR7XHJcbiAgICAgICAgYXNQYXRoLnNwbGl0KFwiP1wiKVsxXSA/IGA/JHthc1BhdGguc3BsaXQoXCI/XCIpWzFdfSZsaW1pdD0xMGAgOiBcIlwiXHJcbiAgICAgIH1gXHJcbiAgICApO1xyXG4gIH0sIFthc1BhdGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7QndC+0LLQuNC90LggfCBVWkhOVTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIHB5LVszMHB4XVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIHB4LVsyNXB4XVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtWzE1cHhdIG1heC13LVs4MDBweF0gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8TmV3c0ZpbHRlciAvPlxyXG4gICAgICAgICAgICAgICAge3Bvc3RzICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLVsxNXB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogUG9zdFR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQb3N0IGtleT17dXVpZCgpfSBkYXRhPXtwb3N0fSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzUGFnZTtcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIk1haW4iLCJIZWFkIiwiUG9zdCIsInVzZUZldGNoRGF0YSIsInV1aWQiLCJVUkwiLCJOZXdzRmlsdGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTmV3c1BhZ2UiLCJhc1BhdGgiLCJjcmVhdGVGZXRjaFN0ciIsImJhc2ljVVJMIiwic3BsaXQiLCJkYXRhIiwicG9zdHMiLCJzZXRVUkwiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/news/index.tsx\n"));

/***/ })

});