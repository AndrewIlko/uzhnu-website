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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data */ \"./src/data.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst CategoriesFilter = (param)=>{\n    let { newsCategories , filter , setFilter  } = param;\n    const handleClick = (id)=>{\n        setFilter((prev)=>{\n            const copy = {\n                ...prev\n            };\n            if (copy[\"category\"].includes(id)) {\n                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", prev[\"category\"].filter((el)=>el != id));\n            } else {\n                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", [\n                    ...prev[\"category\"],\n                    id\n                ]);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex gap-x-[10px] gap-y-[10px] flex-wrap\",\n            children: newsCategories.data.map((category)=>{\n                const { _id: id , name , posts  } = category;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[20px] py-[8px] border-[2px] rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 \".concat(filter[\"category\"].includes(id) ? \"border-teal-500\" : \"\"),\n                    onClick: ()=>handleClick(id),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: posts.length\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CategoriesFilter;\nconst TitleInput = (param)=>{\n    let { filter , setFilter  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-[15px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"px-[15px] py-[5px] rounded-tl-[6px] rounded-bl-[6px] w-full text-[24px] outline-none\",\n                        placeholder: \"Введіть назву посту\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-[25px] bg-teal-500 rounded-tr-[6px] rounded-br-[6px] font-[500] text-white\",\n                        children: \"Пошук\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(TitleInput, \"1GNs5BG/zBCkOIT6WAuxDpPLhMw=\");\n_c1 = TitleInput;\nconst NewsFilter = ()=>{\n    _s1();\n    const { push , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const query = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.urlToQuery)(asPath);\n    const newsCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.global[\"news-categories\"]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        category: query.category ? query.category : [],\n        title: query.title ? query.title[0] : \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const queryCategory = filter.category.length != 0 ? filter.category.map((category)=>\"category=\".concat(category)).join(\"&\") : \"\";\n        const queryTitle = filter.title.length != 0 ? \"&title=\".concat(filter.title) : \"\";\n        const url = \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL, \"/news\").concat(queryCategory.length != 0 ? \"?\" : \"\").concat(queryCategory).concat(queryTitle);\n        if (url != _data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL + asPath) {\n            push(url, undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        filter\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                newsCategories.data.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoriesFilter, {\n                    newsCategories: newsCategories,\n                    filter: filter,\n                    setFilter: setFilter\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleInput, {\n                    filter: filter,\n                    setFilter: setFilter\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(NewsFilter, \"PdD6lRuRgNuUfOhJq7mg8uHw6MI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c2 = NewsFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFilter);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CategoriesFilter\");\n$RefreshReg$(_c1, \"TitleInput\");\n$RefreshReg$(_c2, \"NewsFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUFDLFNBRXJCbUMsT0FEREEsY0FBY2QsTUFBTSxJQUFJLElBQUksTUFBTSxFQUFFLEVBQ25CZ0IsT0FBaEJGLGVBQTJCLE9BQVhFO1FBRW5CLElBQUlDLE9BQU90QywyQ0FBUUEsR0FBRytCLFFBQVE7WUFDNUJELEtBQUtRLEtBQUtDLFdBQVc7Z0JBQUVDLFNBQVMsSUFBSTtZQUFDO1FBQ3ZDLENBQUM7SUFDSCxHQUFHO1FBQUNyQztLQUFPO0lBRVgscUJBQ0U7a0JBQ0UsNEVBQUNRO1lBQUlDLFdBQVU7O2dCQUNaVixlQUFlVyxJQUFJLENBQUNRLE1BQU0sSUFBSSxtQkFDN0IsOERBQUNwQjtvQkFDQ0MsZ0JBQWdCQTtvQkFDaEJDLFFBQVFBO29CQUNSQyxXQUFXQTs7Ozs7OzhCQUdmLDhEQUFDa0I7b0JBQVduQixRQUFRQTtvQkFBUUMsV0FBV0E7Ozs7Ozs7Ozs7Ozs7QUFJL0M7SUExQ015Qjs7UUFDcUJsQyxrREFBU0E7UUFHWEQsb0RBQVdBOzs7TUFKOUJtQztBQTRDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdzL05ld3NGaWx0ZXIudHN4PzY3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnksIE5ld3NDYXRlZ29yaWVzLCBOZXdzRmlsdGVyIH0gZnJvbSBcIkAvdHMvdHlwZXMvYXBwX3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZU9iaiwgdXJsVG9RdWVyeSB9IGZyb20gXCJAL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgUEFHRV9VUkwgfSBmcm9tIFwiQC9kYXRhXCI7XHJcblxyXG5jb25zdCBDYXRlZ29yaWVzRmlsdGVyID0gKHtcclxuICBuZXdzQ2F0ZWdvcmllcyxcclxuICBmaWx0ZXIsXHJcbiAgc2V0RmlsdGVyLFxyXG59OiB7XHJcbiAgbmV3c0NhdGVnb3JpZXM6IE5ld3NDYXRlZ29yaWVzO1xyXG4gIGZpbHRlcjogTmV3c0ZpbHRlcjtcclxuICBzZXRGaWx0ZXI6IEZ1bmN0aW9uO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0RmlsdGVyKChwcmV2OiBOZXdzRmlsdGVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvcHkgPSB7IC4uLnByZXYgfTtcclxuICAgICAgaWYgKGNvcHlbXCJjYXRlZ29yeVwiXS5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlT2JqKFxyXG4gICAgICAgICAgY29weSxcclxuICAgICAgICAgIFwiY2F0ZWdvcnlcIixcclxuICAgICAgICAgIHByZXZbXCJjYXRlZ29yeVwiXS5maWx0ZXIoKGVsKSA9PiBlbCAhPSBpZClcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVPYmooY29weSwgXCJjYXRlZ29yeVwiLCBbLi4ucHJldltcImNhdGVnb3J5XCJdLCBpZF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBnYXAteC1bMTBweF0gZ2FwLXktWzEwcHhdIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtuZXdzQ2F0ZWdvcmllcy5kYXRhLm1hcCgoY2F0ZWdvcnk6IENhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IF9pZDogaWQsIG5hbWUsIHBvc3RzIH0gPSBjYXRlZ29yeTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHdoaXRlc3BhY2Utbm9ybWFsIHRleHQtWzE0cHhdIGZvbnQtWzUwMF0gZ2FwLVsxNXB4XSBweC1bMjBweF0gcHktWzhweF0gYm9yZGVyLVsycHhdIHJvdW5kZWQtWzhweF0gYmctd2hpdGUgc2VsZWN0LW5vbmUgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1ib3JkZXIgZHVyYXRpb24tMjAwICR7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJbXCJjYXRlZ29yeVwiXS5pbmNsdWRlcyhpZCkgPyBcImJvcmRlci10ZWFsLTUwMFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGlkKX1cclxuICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntwb3N0cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRpdGxlSW5wdXQgPSAoe1xyXG4gIGZpbHRlcixcclxuICBzZXRGaWx0ZXIsXHJcbn06IHtcclxuICBmaWx0ZXI6IE5ld3NGaWx0ZXI7XHJcbiAgc2V0RmlsdGVyOiBGdW5jdGlvbjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVsxNXB4XVwiPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC1bMTVweF0gcHktWzVweF0gcm91bmRlZC10bC1bNnB4XSByb3VuZGVkLWJsLVs2cHhdIHctZnVsbCB0ZXh0LVsyNHB4XSBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC90LDQt9Cy0YMg0L/QvtGB0YLRg1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC1bMjVweF0gYmctdGVhbC01MDAgcm91bmRlZC10ci1bNnB4XSByb3VuZGVkLWJyLVs2cHhdIGZvbnQtWzUwMF0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQn9C+0YjRg9C6XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5ld3NGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwdXNoLCBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gdXJsVG9RdWVyeShhc1BhdGgpO1xyXG5cclxuICBjb25zdCBuZXdzQ2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLmdsb2JhbFtcIm5ld3MtY2F0ZWdvcmllc1wiXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxOZXdzRmlsdGVyPih7XHJcbiAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnkgPyBxdWVyeS5jYXRlZ29yeSA6IFtdLFxyXG4gICAgdGl0bGU6IHF1ZXJ5LnRpdGxlID8gcXVlcnkudGl0bGVbMF0gOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnlDYXRlZ29yeSA9XHJcbiAgICAgIGZpbHRlci5jYXRlZ29yeS5sZW5ndGggIT0gMFxyXG4gICAgICAgID8gZmlsdGVyLmNhdGVnb3J5Lm1hcCgoY2F0ZWdvcnkpID0+IGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApLmpvaW4oXCImXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgY29uc3QgcXVlcnlUaXRsZSA9IGZpbHRlci50aXRsZS5sZW5ndGggIT0gMCA/IGAmdGl0bGU9JHtmaWx0ZXIudGl0bGV9YCA6IFwiXCI7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtQQUdFX1VSTH0vbmV3cyR7XHJcbiAgICAgIHF1ZXJ5Q2F0ZWdvcnkubGVuZ3RoICE9IDAgPyBcIj9cIiA6IFwiXCJcclxuICAgIH0ke3F1ZXJ5Q2F0ZWdvcnl9JHtxdWVyeVRpdGxlfWA7XHJcblxyXG4gICAgaWYgKHVybCAhPSBQQUdFX1VSTCArIGFzUGF0aCkge1xyXG4gICAgICBwdXNoKHVybCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2ZpbHRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAge25ld3NDYXRlZ29yaWVzLmRhdGEubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgICAgPENhdGVnb3JpZXNGaWx0ZXJcclxuICAgICAgICAgICAgbmV3c0NhdGVnb3JpZXM9e25ld3NDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgICAgc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFRpdGxlSW5wdXQgZmlsdGVyPXtmaWx0ZXJ9IHNldEZpbHRlcj17c2V0RmlsdGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzRmlsdGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVwZGF0ZU9iaiIsInVybFRvUXVlcnkiLCJQQUdFX1VSTCIsIkNhdGVnb3JpZXNGaWx0ZXIiLCJuZXdzQ2F0ZWdvcmllcyIsImZpbHRlciIsInNldEZpbHRlciIsImhhbmRsZUNsaWNrIiwiaWQiLCJwcmV2IiwiY29weSIsImluY2x1ZGVzIiwiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwibWFwIiwiY2F0ZWdvcnkiLCJfaWQiLCJuYW1lIiwicG9zdHMiLCJvbkNsaWNrIiwic3BhbiIsImxlbmd0aCIsIlRpdGxlSW5wdXQiLCJ0aXRsZSIsInNldFRpdGxlIiwiZm9ybSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJOZXdzRmlsdGVyIiwicHVzaCIsImFzUGF0aCIsInF1ZXJ5Iiwic3RhdGUiLCJnbG9iYWwiLCJxdWVyeUNhdGVnb3J5Iiwiam9pbiIsInF1ZXJ5VGl0bGUiLCJ1cmwiLCJ1bmRlZmluZWQiLCJzaGFsbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/News/NewsFilter.tsx\n"));

/***/ })

});