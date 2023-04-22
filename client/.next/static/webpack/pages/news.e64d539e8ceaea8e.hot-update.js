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

/***/ "./src/components/News/NewsFilter.tsx":
/*!********************************************!*\
  !*** ./src/components/News/NewsFilter.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data */ \"./src/data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CategoriesFilter = (param)=>{\n    let { newsCategories , filter , setFilter  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex gap-x-[10px] gap-y-[10px] flex-wrap\",\n            children: newsCategories.data.map((category)=>{\n                const { _id: id , name , posts  } = category;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[20px] py-[8px] border-[2px] rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 \".concat(filter[\"category\"].includes(id) ? \"border-teal-500\" : \"\"),\n                    onClick: ()=>setFilter((prev)=>{\n                            const copy = {\n                                ...prev\n                            };\n                            if (copy[\"category\"].includes(id)) {\n                                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", prev[\"category\"].filter((el)=>el != id));\n                            } else {\n                                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", [\n                                    ...prev[\"category\"],\n                                    id\n                                ]);\n                            }\n                        }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: posts.length\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CategoriesFilter;\nconst NewsFilter = ()=>{\n    _s();\n    const { push , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const query = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.urlToQuery)(asPath);\n    const newsCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.global[\"news-categories\"]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        category: query.category ? query.category : []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const queryStr = filter.category.length != 0 ? filter.category.map((category)=>\"category=\".concat(category)).join(\"&\") : \"\";\n        const url = \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL, \"/news\").concat(queryStr.length != 0 ? \"?\" : \"\").concat(queryStr);\n        if (url != _data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL + asPath) {\n            push(url, undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        filter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: newsCategories.data.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoriesFilter, {\n            newsCategories: newsCategories,\n            filter: filter,\n            setFilter: setFilter\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 83,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(NewsFilter, \"JW1ZIfj8dqS6U92ZBzUihUcScMw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c1 = NewsFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFilter);\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoriesFilter\");\n$RefreshReg$(_c1, \"NewsFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzL05ld3NGaWx0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUVGO0FBQ0k7QUFDTTtBQUNoQjtBQUVsQyxNQUFNTyxtQkFBbUIsU0FRbkI7UUFSb0IsRUFDeEJDLGVBQWMsRUFDZEMsT0FBTSxFQUNOQyxVQUFTLEVBS1Y7SUFDQyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDWkosZUFBZUssSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsV0FBdUI7Z0JBQy9DLE1BQU0sRUFBRUMsS0FBS0MsR0FBRSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHSjtnQkFDakMscUJBQ0UsOERBQUNKO29CQUNDQyxXQUFXLDZLQUVWLE9BRENILE1BQU0sQ0FBQyxXQUFXLENBQUNXLFFBQVEsQ0FBQ0gsTUFBTSxvQkFBb0IsRUFBRTtvQkFFMURJLFNBQVMsSUFDUFgsVUFBVSxDQUFDWSxPQUFxQjs0QkFDOUIsTUFBTUMsT0FBTztnQ0FBRSxHQUFHRCxJQUFJOzRCQUFDOzRCQUN2QixJQUFJQyxJQUFJLENBQUMsV0FBVyxDQUFDSCxRQUFRLENBQUNILEtBQUs7Z0NBQ2pDLE9BQU9iLG1EQUFTQSxDQUNkbUIsTUFDQSxZQUNBRCxJQUFJLENBQUMsV0FBVyxDQUFDYixNQUFNLENBQUMsQ0FBQ2UsS0FBT0EsTUFBTVA7NEJBRTFDLE9BQU87Z0NBQ0wsT0FBT2IsbURBQVNBLENBQUNtQixNQUFNLFlBQVk7dUNBQzlCRCxJQUFJLENBQUMsV0FBVztvQ0FDbkJMO2lDQUNEOzRCQUNILENBQUM7d0JBQ0g7O3NDQUlGLDhEQUFDUTs0QkFBS2IsV0FBVTtzQ0FBSU07Ozs7OztzQ0FDcEIsOERBQUNPOzRCQUFLYixXQUFVO3NDQUFJTyxNQUFNTyxNQUFNOzs7Ozs7O21CQUgzQlQ7Ozs7O1lBTVg7Ozs7Ozs7QUFJUjtLQTlDTVY7QUFnRE4sTUFBTW9CLGFBQWEsSUFBTTs7SUFDdkIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFHNUIsc0RBQVNBO0lBQ2xDLE1BQU02QixRQUFRekIsb0RBQVVBLENBQUN3QjtJQUV6QixNQUFNckIsaUJBQWlCUix3REFBV0EsQ0FDaEMsQ0FBQytCLFFBQWVBLE1BQU1DLE1BQU0sQ0FBQyxrQkFBa0I7SUFHakQsTUFBTSxDQUFDdkIsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUMvQ1ksVUFBVWUsTUFBTWYsUUFBUSxHQUFHZSxNQUFNZixRQUFRLEdBQUcsRUFBRTtJQUNoRDtJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTStCLFdBQ0p4QixPQUFPTSxRQUFRLENBQUNXLE1BQU0sSUFBSSxJQUN0QmpCLE9BQU9NLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDLENBQUNDLFdBQWEsWUFBcUIsT0FBVEEsV0FBWW1CLElBQUksQ0FBQyxPQUMvRCxFQUFFO1FBQ1IsTUFBTUMsTUFBTSxHQUFtQkYsT0FBaEIzQiwyQ0FBUUEsRUFBQyxTQUF5QzJCLE9BQWxDQSxTQUFTUCxNQUFNLElBQUksSUFBSSxNQUFNLEVBQUUsRUFBWSxPQUFUTztRQUVqRSxJQUFJRSxPQUFPN0IsMkNBQVFBLEdBQUd1QixRQUFRO1lBQzVCRCxLQUFLTyxLQUFLQyxXQUFXO2dCQUFFQyxTQUFTLElBQUk7WUFBQztRQUN2QyxDQUFDO0lBQ0gsR0FBRztRQUFDNUI7S0FBTztJQUVYLHFCQUNFO2tCQUNHRCxlQUFlSyxJQUFJLENBQUNhLE1BQU0sSUFBSSxtQkFDN0IsOERBQUNuQjtZQUNDQyxnQkFBZ0JBO1lBQ2hCQyxRQUFRQTtZQUNSQyxXQUFXQTs7Ozs7OztBQUtyQjtHQW5DTWlCOztRQUNxQjFCLGtEQUFTQTtRQUdYRCxvREFBV0E7OztNQUo5QjJCO0FBcUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ld3MvTmV3c0ZpbHRlci50c3g/Njc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSwgTmV3c0NhdGVnb3JpZXMsIE5ld3NGaWx0ZXIgfSBmcm9tIFwiQC90cy90eXBlcy9hcHBfdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBkYXRlT2JqLCB1cmxUb1F1ZXJ5IH0gZnJvbSBcIkAvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQQUdFX1VSTCB9IGZyb20gXCJAL2RhdGFcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXNGaWx0ZXIgPSAoe1xyXG4gIG5ld3NDYXRlZ29yaWVzLFxyXG4gIGZpbHRlcixcclxuICBzZXRGaWx0ZXIsXHJcbn06IHtcclxuICBuZXdzQ2F0ZWdvcmllczogTmV3c0NhdGVnb3JpZXM7XHJcbiAgZmlsdGVyOiBOZXdzRmlsdGVyO1xyXG4gIHNldEZpbHRlcjogRnVuY3Rpb247XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBnYXAteC1bMTBweF0gZ2FwLXktWzEwcHhdIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtuZXdzQ2F0ZWdvcmllcy5kYXRhLm1hcCgoY2F0ZWdvcnk6IENhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IF9pZDogaWQsIG5hbWUsIHBvc3RzIH0gPSBjYXRlZ29yeTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHdoaXRlc3BhY2Utbm9ybWFsIHRleHQtWzE0cHhdIGZvbnQtWzUwMF0gZ2FwLVsxNXB4XSBweC1bMjBweF0gcHktWzhweF0gYm9yZGVyLVsycHhdIHJvdW5kZWQtWzhweF0gYmctd2hpdGUgc2VsZWN0LW5vbmUgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1ib3JkZXIgZHVyYXRpb24tMjAwICR7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJbXCJjYXRlZ29yeVwiXS5pbmNsdWRlcyhpZCkgPyBcImJvcmRlci10ZWFsLTUwMFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoKHByZXY6IE5ld3NGaWx0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHsgLi4ucHJldiB9O1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY29weVtcImNhdGVnb3J5XCJdLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVPYmooXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJldltcImNhdGVnb3J5XCJdLmZpbHRlcigoZWwpID0+IGVsICE9IGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZU9iaihjb3B5LCBcImNhdGVnb3J5XCIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZbXCJjYXRlZ29yeVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntwb3N0cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5ld3NGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwdXNoLCBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gdXJsVG9RdWVyeShhc1BhdGgpO1xyXG5cclxuICBjb25zdCBuZXdzQ2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmdsb2JhbFtcIm5ld3MtY2F0ZWdvcmllc1wiXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxOZXdzRmlsdGVyPih7XHJcbiAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnkgPyBxdWVyeS5jYXRlZ29yeSA6IFtdLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnlTdHIgPVxyXG4gICAgICBmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoICE9IDBcclxuICAgICAgICA/IGZpbHRlci5jYXRlZ29yeS5tYXAoKGNhdGVnb3J5KSA9PiBgY2F0ZWdvcnk9JHtjYXRlZ29yeX1gKS5qb2luKFwiJlwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgIGNvbnN0IHVybCA9IGAke1BBR0VfVVJMfS9uZXdzJHtxdWVyeVN0ci5sZW5ndGggIT0gMCA/IFwiP1wiIDogXCJcIn0ke3F1ZXJ5U3RyfWA7XHJcblxyXG4gICAgaWYgKHVybCAhPSBQQUdFX1VSTCArIGFzUGF0aCkge1xyXG4gICAgICBwdXNoKHVybCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2ZpbHRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge25ld3NDYXRlZ29yaWVzLmRhdGEubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgIDxDYXRlZ29yaWVzRmlsdGVyXHJcbiAgICAgICAgICBuZXdzQ2F0ZWdvcmllcz17bmV3c0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0ZpbHRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1cGRhdGVPYmoiLCJ1cmxUb1F1ZXJ5IiwiUEFHRV9VUkwiLCJDYXRlZ29yaWVzRmlsdGVyIiwibmV3c0NhdGVnb3JpZXMiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwibWFwIiwiY2F0ZWdvcnkiLCJfaWQiLCJpZCIsIm5hbWUiLCJwb3N0cyIsImluY2x1ZGVzIiwib25DbGljayIsInByZXYiLCJjb3B5IiwiZWwiLCJzcGFuIiwibGVuZ3RoIiwiTmV3c0ZpbHRlciIsInB1c2giLCJhc1BhdGgiLCJxdWVyeSIsInN0YXRlIiwiZ2xvYmFsIiwicXVlcnlTdHIiLCJqb2luIiwidXJsIiwidW5kZWZpbmVkIiwic2hhbGxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News/NewsFilter.tsx\n"));

/***/ })

});