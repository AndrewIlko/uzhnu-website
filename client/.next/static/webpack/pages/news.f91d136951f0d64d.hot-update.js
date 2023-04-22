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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data */ \"./src/data.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst CategoriesFilter = (param)=>{\n    let { newsCategories , filter , setFilter  } = param;\n    const handleClick = (id)=>{\n        setFilter((prev)=>{\n            const copy = {\n                ...prev\n            };\n            if (copy[\"category\"].includes(id)) {\n                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", prev[\"category\"].filter((el)=>el != id));\n            } else {\n                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", [\n                    ...prev[\"category\"],\n                    id\n                ]);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex gap-x-[10px] gap-y-[10px] flex-wrap\",\n            children: newsCategories.data.map((category)=>{\n                const { _id: id , name , posts  } = category;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[20px] py-[8px] border-[2px] rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 \".concat(filter[\"category\"].includes(id) ? \"border-teal-500\" : \"\"),\n                    onClick: ()=>handleClick(id),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: posts.length\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CategoriesFilter;\nconst TitleInput = (param)=>{\n    let { filter , setFilter  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-[15px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"px-[15px] py-[5px] rounded-tl-[4px] rounded-bl-[4px] w-full text-[24px] border\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Пошук\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(TitleInput, \"1GNs5BG/zBCkOIT6WAuxDpPLhMw=\");\n_c1 = TitleInput;\nconst NewsFilter = ()=>{\n    _s1();\n    const { push , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const query = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.urlToQuery)(asPath);\n    const newsCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.global[\"news-categories\"]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        category: query.category ? query.category : [],\n        title: query.title ? query.title[0] : \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const queryCategory = filter.category.length != 0 ? filter.category.map((category)=>\"category=\".concat(category)).join(\"&\") : \"\";\n        const queryTitle = filter.title.length != 0 ? \"&title=\".concat(filter.title) : \"\";\n        const url = \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL, \"/news\").concat(queryCategory.length != 0 ? \"?\" : \"\").concat(queryCategory).concat(queryTitle);\n        if (url != _data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL + asPath) {\n            push(url, undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        filter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                newsCategories.data.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoriesFilter, {\n                    newsCategories: newsCategories,\n                    filter: filter,\n                    setFilter: setFilter\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleInput, {\n                    filter: filter,\n                    setFilter: setFilter\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(NewsFilter, \"PdD6lRuRgNuUfOhJq7mg8uHw6MI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c2 = NewsFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFilter);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CategoriesFilter\");\n$RefreshReg$(_c1, \"TitleInput\");\n$RefreshReg$(_c2, \"NewsFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixNQUFNLElBQUksSUFBSSxNQUFNLEVBQUUsRUFDbkJlLE9BQWhCRixlQUEyQixPQUFYRTtRQUVuQixJQUFJQyxPQUFPckMsMkNBQVFBLEdBQUc4QixRQUFRO1lBQzVCRCxLQUFLUSxLQUFLQyxXQUFXO2dCQUFFQyxTQUFTLElBQUk7WUFBQztRQUN2QyxDQUFDO0lBQ0gsR0FBRztRQUFDcEM7S0FBTztJQUVYLHFCQUNFO2tCQUNFLDRFQUFDUTtZQUFJQyxXQUFVOztnQkFDWlYsZUFBZVcsSUFBSSxDQUFDUSxNQUFNLElBQUksbUJBQzdCLDhEQUFDcEI7b0JBQ0NDLGdCQUFnQkE7b0JBQ2hCQyxRQUFRQTtvQkFDUkMsV0FBV0E7Ozs7Ozs4QkFHZiw4REFBQ2tCO29CQUFXbkIsUUFBUUE7b0JBQVFDLFdBQVdBOzs7Ozs7Ozs7Ozs7O0FBSS9DO0lBMUNNd0I7O1FBQ3FCakMsa0RBQVNBO1FBR1hELG9EQUFXQTs7O01BSjlCa0M7QUE0Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3cy9OZXdzRmlsdGVyLnRzeD82NzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IENhdGVnb3J5LCBOZXdzQ2F0ZWdvcmllcywgTmV3c0ZpbHRlciB9IGZyb20gXCJAL3RzL3R5cGVzL2FwcF90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVPYmosIHVybFRvUXVlcnkgfSBmcm9tIFwiQC9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFBBR0VfVVJMIH0gZnJvbSBcIkAvZGF0YVwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllc0ZpbHRlciA9ICh7XHJcbiAgbmV3c0NhdGVnb3JpZXMsXHJcbiAgZmlsdGVyLFxyXG4gIHNldEZpbHRlcixcclxufToge1xyXG4gIG5ld3NDYXRlZ29yaWVzOiBOZXdzQ2F0ZWdvcmllcztcclxuICBmaWx0ZXI6IE5ld3NGaWx0ZXI7XHJcbiAgc2V0RmlsdGVyOiBGdW5jdGlvbjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEZpbHRlcigocHJldjogTmV3c0ZpbHRlcikgPT4ge1xyXG4gICAgICBjb25zdCBjb3B5ID0geyAuLi5wcmV2IH07XHJcbiAgICAgIGlmIChjb3B5W1wiY2F0ZWdvcnlcIl0uaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU9iaihcclxuICAgICAgICAgIGNvcHksXHJcbiAgICAgICAgICBcImNhdGVnb3J5XCIsXHJcbiAgICAgICAgICBwcmV2W1wiY2F0ZWdvcnlcIl0uZmlsdGVyKChlbCkgPT4gZWwgIT0gaWQpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlT2JqKGNvcHksIFwiY2F0ZWdvcnlcIiwgWy4uLnByZXZbXCJjYXRlZ29yeVwiXSwgaWRdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZ2FwLXgtWzEwcHhdIGdhcC15LVsxMHB4XSBmbGV4LXdyYXBcIj5cclxuICAgICAgICB7bmV3c0NhdGVnb3JpZXMuZGF0YS5tYXAoKGNhdGVnb3J5OiBDYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBfaWQ6IGlkLCBuYW1lLCBwb3N0cyB9ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCB3aGl0ZXNwYWNlLW5vcm1hbCB0ZXh0LVsxNHB4XSBmb250LVs1MDBdIGdhcC1bMTVweF0gcHgtWzIwcHhdIHB5LVs4cHhdIGJvcmRlci1bMnB4XSByb3VuZGVkLVs4cHhdIGJnLXdoaXRlIHNlbGVjdC1ub25lIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYm9yZGVyIGR1cmF0aW9uLTIwMCAke1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyW1wiY2F0ZWdvcnlcIl0uaW5jbHVkZXMoaWQpID8gXCJib3JkZXItdGVhbC01MDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpZCl9XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57cG9zdHMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUaXRsZUlucHV0ID0gKHtcclxuICBmaWx0ZXIsXHJcbiAgc2V0RmlsdGVyLFxyXG59OiB7XHJcbiAgZmlsdGVyOiBOZXdzRmlsdGVyO1xyXG4gIHNldEZpbHRlcjogRnVuY3Rpb247XHJcbn0pID0+IHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bMTVweF1cIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicHgtWzE1cHhdIHB5LVs1cHhdIHJvdW5kZWQtdGwtWzRweF0gcm91bmRlZC1ibC1bNHB4XSB3LWZ1bGwgdGV4dC1bMjRweF0gYm9yZGVyXCIgLz5cclxuICAgICAgICAgIDxidXR0b24+0J/QvtGI0YPQujwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmV3c0ZpbHRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IHB1c2gsIGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcXVlcnkgPSB1cmxUb1F1ZXJ5KGFzUGF0aCk7XHJcblxyXG4gIGNvbnN0IG5ld3NDYXRlZ29yaWVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuZ2xvYmFsW1wibmV3cy1jYXRlZ29yaWVzXCJdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPE5ld3NGaWx0ZXI+KHtcclxuICAgIGNhdGVnb3J5OiBxdWVyeS5jYXRlZ29yeSA/IHF1ZXJ5LmNhdGVnb3J5IDogW10sXHJcbiAgICB0aXRsZTogcXVlcnkudGl0bGUgPyBxdWVyeS50aXRsZVswXSA6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeUNhdGVnb3J5ID1cclxuICAgICAgZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCAhPSAwXHJcbiAgICAgICAgPyBmaWx0ZXIuY2F0ZWdvcnkubWFwKChjYXRlZ29yeSkgPT4gYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCkuam9pbihcIiZcIilcclxuICAgICAgICA6IFwiXCI7XHJcbiAgICBjb25zdCBxdWVyeVRpdGxlID0gZmlsdGVyLnRpdGxlLmxlbmd0aCAhPSAwID8gYCZ0aXRsZT0ke2ZpbHRlci50aXRsZX1gIDogXCJcIjtcclxuICAgIGNvbnN0IHVybCA9IGAke1BBR0VfVVJMfS9uZXdzJHtcclxuICAgICAgcXVlcnlDYXRlZ29yeS5sZW5ndGggIT0gMCA/IFwiP1wiIDogXCJcIlxyXG4gICAgfSR7cXVlcnlDYXRlZ29yeX0ke3F1ZXJ5VGl0bGV9YDtcclxuXHJcbiAgICBpZiAodXJsICE9IFBBR0VfVVJMICsgYXNQYXRoKSB7XHJcbiAgICAgIHB1c2godXJsLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9LCBbZmlsdGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICB7bmV3c0NhdGVnb3JpZXMuZGF0YS5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgICA8Q2F0ZWdvcmllc0ZpbHRlclxyXG4gICAgICAgICAgICBuZXdzQ2F0ZWdvcmllcz17bmV3c0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxyXG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8VGl0bGVJbnB1dCBmaWx0ZXI9e2ZpbHRlcn0gc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NGaWx0ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXBkYXRlT2JqIiwidXJsVG9RdWVyeSIsIlBBR0VfVVJMIiwiQ2F0ZWdvcmllc0ZpbHRlciIsIm5ld3NDYXRlZ29yaWVzIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJpZCIsInByZXYiLCJjb3B5IiwiaW5jbHVkZXMiLCJlbCIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJtYXAiLCJjYXRlZ29yeSIsIl9pZCIsIm5hbWUiLCJwb3N0cyIsIm9uQ2xpY2siLCJzcGFuIiwibGVuZ3RoIiwiVGl0bGVJbnB1dCIsInRpdGxlIiwic2V0VGl0bGUiLCJmb3JtIiwiaW5wdXQiLCJidXR0b24iLCJOZXdzRmlsdGVyIiwicHVzaCIsImFzUGF0aCIsInF1ZXJ5Iiwic3RhdGUiLCJnbG9iYWwiLCJxdWVyeUNhdGVnb3J5Iiwiam9pbiIsInF1ZXJ5VGl0bGUiLCJ1cmwiLCJ1bmRlZmluZWQiLCJzaGFsbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/News/NewsFilter.tsx\n"));

/***/ })

});