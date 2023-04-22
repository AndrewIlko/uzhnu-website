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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data */ \"./src/data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CategoriesFilter = (param)=>{\n    let { newsCategories , filter , setFilter  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex gap-x-[10px] gap-y-[10px] flex-wrap\",\n            children: newsCategories.data.map((category)=>{\n                const { _id: id , name , posts  } = category;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[20px] py-[8px] border-[2px] rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 \".concat(filter[\"category\"].includes(id) ? \"border-teal-500\" : \"\"),\n                    onClick: ()=>setFilter((prev)=>{\n                            const copy = {\n                                ...prev\n                            };\n                            if (copy[\"category\"].includes(id)) {\n                                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", prev[\"category\"].filter((el)=>el != id));\n                            } else {\n                                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", [\n                                    ...prev[\"category\"],\n                                    id\n                                ]);\n                            }\n                        }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: posts.length\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CategoriesFilter;\nconst NewsFilter = ()=>{\n    _s();\n    const { push , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const query = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.urlToQuery)(asPath);\n    const newsCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.global[\"news-categories\"]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        category: query.category ? query.category : []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const queryStr = filter.category.length != 0 ? filter.category.map((category)=>\"category=\".concat(category)).join(\"&\") : \"\";\n        const url = \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL, \"/news\").concat(queryStr.length != 0 ? \"?\" : \"\").concat(queryStr);\n        if (url != _data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL + asPath) {\n            push(url, undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        filter\n    ]);\n    console.log(newsCategories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: newsCategories.data.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoriesFilter, {\n            newsCategories: newsCategories,\n            filter: filter,\n            setFilter: setFilter\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(NewsFilter, \"JW1ZIfj8dqS6U92ZBzUihUcScMw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c1 = NewsFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFilter);\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoriesFilter\");\n$RefreshReg$(_c1, \"NewsFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzL05ld3NGaWx0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUVGO0FBQ0k7QUFDTTtBQUNoQjtBQUVsQyxNQUFNTyxtQkFBbUIsU0FRbkI7UUFSb0IsRUFDeEJDLGVBQWMsRUFDZEMsT0FBTSxFQUNOQyxVQUFTLEVBS1Y7SUFDQyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDWkosZUFBZUssSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsV0FBdUI7Z0JBQy9DLE1BQU0sRUFBRUMsS0FBS0MsR0FBRSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHSjtnQkFDakMscUJBQ0UsOERBQUNKO29CQUNDQyxXQUFXLDZLQUVWLE9BRENILE1BQU0sQ0FBQyxXQUFXLENBQUNXLFFBQVEsQ0FBQ0gsTUFBTSxvQkFBb0IsRUFBRTtvQkFFMURJLFNBQVMsSUFDUFgsVUFBVSxDQUFDWSxPQUFxQjs0QkFDOUIsTUFBTUMsT0FBTztnQ0FBRSxHQUFHRCxJQUFJOzRCQUFDOzRCQUN2QixJQUFJQyxJQUFJLENBQUMsV0FBVyxDQUFDSCxRQUFRLENBQUNILEtBQUs7Z0NBQ2pDLE9BQU9iLG1EQUFTQSxDQUNkbUIsTUFDQSxZQUNBRCxJQUFJLENBQUMsV0FBVyxDQUFDYixNQUFNLENBQUMsQ0FBQ2UsS0FBT0EsTUFBTVA7NEJBRTFDLE9BQU87Z0NBQ0wsT0FBT2IsbURBQVNBLENBQUNtQixNQUFNLFlBQVk7dUNBQzlCRCxJQUFJLENBQUMsV0FBVztvQ0FDbkJMO2lDQUNEOzRCQUNILENBQUM7d0JBQ0g7O3NDQUlGLDhEQUFDUTs0QkFBS2IsV0FBVTtzQ0FBSU07Ozs7OztzQ0FDcEIsOERBQUNPOzRCQUFLYixXQUFVO3NDQUFJTyxNQUFNTyxNQUFNOzs7Ozs7O21CQUgzQlQ7Ozs7O1lBTVg7Ozs7Ozs7QUFJUjtLQTlDTVY7QUFnRE4sTUFBTW9CLGFBQWEsSUFBTTs7SUFDdkIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFHNUIsc0RBQVNBO0lBQ2xDLE1BQU02QixRQUFRekIsb0RBQVVBLENBQUN3QjtJQUV6QixNQUFNckIsaUJBQWlCUix3REFBV0EsQ0FDaEMsQ0FBQytCLFFBQWVBLE1BQU1DLE1BQU0sQ0FBQyxrQkFBa0I7SUFHakQsTUFBTSxDQUFDdkIsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUMvQ1ksVUFBVWUsTUFBTWYsUUFBUSxHQUFHZSxNQUFNZixRQUFRLEdBQUcsRUFBRTtJQUNoRDtJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTStCLFdBQ0p4QixPQUFPTSxRQUFRLENBQUNXLE1BQU0sSUFBSSxJQUN0QmpCLE9BQU9NLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDLENBQUNDLFdBQWEsWUFBcUIsT0FBVEEsV0FBWW1CLElBQUksQ0FBQyxPQUMvRCxFQUFFO1FBQ1IsTUFBTUMsTUFBTSxHQUFtQkYsT0FBaEIzQiwyQ0FBUUEsRUFBQyxTQUF5QzJCLE9BQWxDQSxTQUFTUCxNQUFNLElBQUksSUFBSSxNQUFNLEVBQUUsRUFBWSxPQUFUTztRQUVqRSxJQUFJRSxPQUFPN0IsMkNBQVFBLEdBQUd1QixRQUFRO1lBQzVCRCxLQUFLTyxLQUFLQyxXQUFXO2dCQUFFQyxTQUFTLElBQUk7WUFBQztRQUN2QyxDQUFDO0lBQ0gsR0FBRztRQUFDNUI7S0FBTztJQUVYNkIsUUFBUUMsR0FBRyxDQUFDL0I7SUFDWixxQkFDRTtrQkFDR0EsZUFBZUssSUFBSSxDQUFDYSxNQUFNLElBQUksbUJBQzdCLDhEQUFDbkI7WUFDQ0MsZ0JBQWdCQTtZQUNoQkMsUUFBUUE7WUFDUkMsV0FBV0E7Ozs7Ozs7QUFLckI7R0FwQ01pQjs7UUFDcUIxQixrREFBU0E7UUFHWEQsb0RBQVdBOzs7TUFKOUIyQjtBQXNDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdzL05ld3NGaWx0ZXIudHN4PzY3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnksIE5ld3NDYXRlZ29yaWVzLCBOZXdzRmlsdGVyIH0gZnJvbSBcIkAvdHMvdHlwZXMvYXBwX3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZU9iaiwgdXJsVG9RdWVyeSB9IGZyb20gXCJAL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgUEFHRV9VUkwgfSBmcm9tIFwiQC9kYXRhXCI7XHJcblxyXG5jb25zdCBDYXRlZ29yaWVzRmlsdGVyID0gKHtcclxuICBuZXdzQ2F0ZWdvcmllcyxcclxuICBmaWx0ZXIsXHJcbiAgc2V0RmlsdGVyLFxyXG59OiB7XHJcbiAgbmV3c0NhdGVnb3JpZXM6IE5ld3NDYXRlZ29yaWVzO1xyXG4gIGZpbHRlcjogTmV3c0ZpbHRlcjtcclxuICBzZXRGaWx0ZXI6IEZ1bmN0aW9uO1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZ2FwLXgtWzEwcHhdIGdhcC15LVsxMHB4XSBmbGV4LXdyYXBcIj5cclxuICAgICAgICB7bmV3c0NhdGVnb3JpZXMuZGF0YS5tYXAoKGNhdGVnb3J5OiBDYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBfaWQ6IGlkLCBuYW1lLCBwb3N0cyB9ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCB3aGl0ZXNwYWNlLW5vcm1hbCB0ZXh0LVsxNHB4XSBmb250LVs1MDBdIGdhcC1bMTVweF0gcHgtWzIwcHhdIHB5LVs4cHhdIGJvcmRlci1bMnB4XSByb3VuZGVkLVs4cHhdIGJnLXdoaXRlIHNlbGVjdC1ub25lIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYm9yZGVyIGR1cmF0aW9uLTIwMCAke1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyW1wiY2F0ZWdvcnlcIl0uaW5jbHVkZXMoaWQpID8gXCJib3JkZXItdGVhbC01MDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKChwcmV2OiBOZXdzRmlsdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB7IC4uLnByZXYgfTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNvcHlbXCJjYXRlZ29yeVwiXS5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlT2JqKFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29weSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHByZXZbXCJjYXRlZ29yeVwiXS5maWx0ZXIoKGVsKSA9PiBlbCAhPSBpZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVPYmooY29weSwgXCJjYXRlZ29yeVwiLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2W1wiY2F0ZWdvcnlcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57cG9zdHMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBOZXdzRmlsdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcHVzaCwgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBxdWVyeSA9IHVybFRvUXVlcnkoYXNQYXRoKTtcclxuXHJcbiAgY29uc3QgbmV3c0NhdGVnb3JpZXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5nbG9iYWxbXCJuZXdzLWNhdGVnb3JpZXNcIl1cclxuICApO1xyXG5cclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8TmV3c0ZpbHRlcj4oe1xyXG4gICAgY2F0ZWdvcnk6IHF1ZXJ5LmNhdGVnb3J5ID8gcXVlcnkuY2F0ZWdvcnkgOiBbXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyID1cclxuICAgICAgZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCAhPSAwXHJcbiAgICAgICAgPyBmaWx0ZXIuY2F0ZWdvcnkubWFwKChjYXRlZ29yeSkgPT4gYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCkuam9pbihcIiZcIilcclxuICAgICAgICA6IFwiXCI7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtQQUdFX1VSTH0vbmV3cyR7cXVlcnlTdHIubGVuZ3RoICE9IDAgPyBcIj9cIiA6IFwiXCJ9JHtxdWVyeVN0cn1gO1xyXG5cclxuICAgIGlmICh1cmwgIT0gUEFHRV9VUkwgKyBhc1BhdGgpIHtcclxuICAgICAgcHVzaCh1cmwsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtmaWx0ZXJdKTtcclxuXHJcbiAgY29uc29sZS5sb2cobmV3c0NhdGVnb3JpZXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bmV3c0NhdGVnb3JpZXMuZGF0YS5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgPENhdGVnb3JpZXNGaWx0ZXJcclxuICAgICAgICAgIG5ld3NDYXRlZ29yaWVzPXtuZXdzQ2F0ZWdvcmllc31cclxuICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxyXG4gICAgICAgICAgc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzRmlsdGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVwZGF0ZU9iaiIsInVybFRvUXVlcnkiLCJQQUdFX1VSTCIsIkNhdGVnb3JpZXNGaWx0ZXIiLCJuZXdzQ2F0ZWdvcmllcyIsImZpbHRlciIsInNldEZpbHRlciIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJtYXAiLCJjYXRlZ29yeSIsIl9pZCIsImlkIiwibmFtZSIsInBvc3RzIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwicHJldiIsImNvcHkiLCJlbCIsInNwYW4iLCJsZW5ndGgiLCJOZXdzRmlsdGVyIiwicHVzaCIsImFzUGF0aCIsInF1ZXJ5Iiwic3RhdGUiLCJnbG9iYWwiLCJxdWVyeVN0ciIsImpvaW4iLCJ1cmwiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News/NewsFilter.tsx\n"));

/***/ })

});