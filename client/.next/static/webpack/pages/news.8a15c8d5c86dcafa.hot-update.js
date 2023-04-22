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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data */ \"./src/data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CategoriesFilter = (param)=>{\n    let { newsCategories  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex gap-x-[10px] gap-y-[10px] flex-wrap\",\n            children: newsCategories.data.map((category)=>{\n                const { _id: id , name , posts  } = category;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex whitespace-normal text-[14px] font-[500] gap-[15px] px-[20px] py-[8px] border-[2px] rounded-[8px] bg-white select-none cursor-pointer transition-border duration-200 \".concat(filter[\"category\"].includes(id) ? \"border-teal-500\" : \"\"),\n                    onClick: ()=>setFilter((prev)=>{\n                            const copy = {\n                                ...prev\n                            };\n                            if (copy[\"category\"].includes(id)) {\n                                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", prev[\"category\"].filter((el)=>el != id));\n                            } else {\n                                return (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.updateObj)(copy, \"category\", [\n                                    ...prev[\"category\"],\n                                    id\n                                ]);\n                            }\n                        }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: posts.length\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CategoriesFilter;\nconst NewsFilter = ()=>{\n    _s();\n    const { push , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const query = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.urlToQuery)(asPath);\n    const newsCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.global[\"news-categories\"]);\n    const [filter1, setFilter1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        category: query.category ? query.category : []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const queryStr = filter1.category.length != 0 ? filter1.category.map((category)=>\"category=\".concat(category)).join(\"&\") : \"\";\n        const url = \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL, \"/news\").concat(queryStr.length != 0 ? \"?\" : \"\").concat(queryStr);\n        if (url != _data__WEBPACK_IMPORTED_MODULE_5__.PAGE_URL + asPath) {\n            push(url, undefined, {\n                shallow: true\n            });\n        }\n    }, [\n        filter1\n    ]);\n    console.log(newsCategories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: newsCategories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoriesFilter, {\n            newsCategories: newsCategories\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andrew\\\\Desktop\\\\uzhnu\\\\client\\\\src\\\\components\\\\News\\\\NewsFilter.tsx\",\n            lineNumber: 79,\n            columnNumber: 26\n        }, undefined)\n    }, void 0, false);\n};\n_s(NewsFilter, \"JW1ZIfj8dqS6U92ZBzUihUcScMw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c1 = NewsFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFilter);\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoriesFilter\");\n$RefreshReg$(_c1, \"NewsFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzL05ld3NGaWx0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUVGO0FBQ0k7QUFDTTtBQUNoQjtBQUVsQyxNQUFNTyxtQkFBbUIsU0FJbkI7UUFKb0IsRUFDeEJDLGVBQWMsRUFHZjtJQUNDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNaRixlQUFlRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxXQUF1QjtnQkFDL0MsTUFBTSxFQUFFQyxLQUFLQyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdKO2dCQUNqQyxxQkFDRSw4REFBQ0o7b0JBQ0NDLFdBQVcsNktBRVYsT0FEQ1EsTUFBTSxDQUFDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDSixNQUFNLG9CQUFvQixFQUFFO29CQUUxREssU0FBUyxJQUNQQyxVQUFVLENBQUNDLE9BQVM7NEJBQ2xCLE1BQU1DLE9BQU87Z0NBQUUsR0FBR0QsSUFBSTs0QkFBQzs0QkFDdkIsSUFBSUMsSUFBSSxDQUFDLFdBQVcsQ0FBQ0osUUFBUSxDQUFDSixLQUFLO2dDQUNqQyxPQUFPWCxtREFBU0EsQ0FDZG1CLE1BQ0EsWUFDQUQsSUFBSSxDQUFDLFdBQVcsQ0FBQ0osTUFBTSxDQUFDLENBQUNNLEtBQU9BLE1BQU1UOzRCQUUxQyxPQUFPO2dDQUNMLE9BQU9YLG1EQUFTQSxDQUFDbUIsTUFBTSxZQUFZO3VDQUM5QkQsSUFBSSxDQUFDLFdBQVc7b0NBQ25CUDtpQ0FDRDs0QkFDSCxDQUFDO3dCQUNIOztzQ0FJRiw4REFBQ1U7NEJBQUtmLFdBQVU7c0NBQUlNOzs7Ozs7c0NBQ3BCLDhEQUFDUzs0QkFBS2YsV0FBVTtzQ0FBSU8sTUFBTVMsTUFBTTs7Ozs7OzttQkFIM0JYOzs7OztZQU1YOzs7Ozs7O0FBSVI7S0ExQ01SO0FBNENOLE1BQU1vQixhQUFhLElBQU07O0lBQ3ZCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUUsR0FBRzVCLHNEQUFTQTtJQUNsQyxNQUFNNkIsUUFBUXpCLG9EQUFVQSxDQUFDd0I7SUFFekIsTUFBTXJCLGlCQUFpQlIsd0RBQVdBLENBQ2hDLENBQUMrQixRQUFlQSxNQUFNQyxNQUFNLENBQUMsa0JBQWtCO0lBR2pELE1BQU0sQ0FBQ2QsU0FBUUcsV0FBVSxHQUFHbEIsK0NBQVFBLENBQXlCO1FBQzNEVSxVQUFVaUIsTUFBTWpCLFFBQVEsR0FBR2lCLE1BQU1qQixRQUFRLEdBQUcsRUFBRTtJQUNoRDtJQUVBWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTStCLFdBQ0pmLFFBQU9MLFFBQVEsQ0FBQ2EsTUFBTSxJQUFJLElBQ3RCUixRQUFPTCxRQUFRLENBQUNELEdBQUcsQ0FBQyxDQUFDQyxXQUFhLFlBQXFCLE9BQVRBLFdBQVlxQixJQUFJLENBQUMsT0FDL0QsRUFBRTtRQUNSLE1BQU1DLE1BQU0sR0FBbUJGLE9BQWhCM0IsMkNBQVFBLEVBQUMsU0FBeUMyQixPQUFsQ0EsU0FBU1AsTUFBTSxJQUFJLElBQUksTUFBTSxFQUFFLEVBQVksT0FBVE87UUFFakUsSUFBSUUsT0FBTzdCLDJDQUFRQSxHQUFHdUIsUUFBUTtZQUM1QkQsS0FBS08sS0FBS0MsV0FBVztnQkFBRUMsU0FBUyxJQUFJO1lBQUM7UUFDdkMsQ0FBQztJQUNILEdBQUc7UUFBQ25CO0tBQU87SUFFWG9CLFFBQVFDLEdBQUcsQ0FBQy9CO0lBQ1oscUJBQ0U7a0JBQ0dBLGdDQUFrQiw4REFBQ0Q7WUFBaUJDLGdCQUFnQkE7Ozs7Ozs7QUFHM0Q7R0E5Qk1tQjs7UUFDcUIxQixrREFBU0E7UUFHWEQsb0RBQVdBOzs7TUFKOUIyQjtBQWdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdzL05ld3NGaWx0ZXIudHN4PzY3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQC90cy90eXBlcy9hcHBfdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBkYXRlT2JqLCB1cmxUb1F1ZXJ5IH0gZnJvbSBcIkAvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQQUdFX1VSTCB9IGZyb20gXCJAL2RhdGFcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXNGaWx0ZXIgPSAoe1xyXG4gIG5ld3NDYXRlZ29yaWVzLFxyXG59OiB7XHJcbiAgbmV3c0NhdGVnb3JpZXM6IHsgZGF0YTogQ2F0ZWdvcnlbXTsgZXJyb3I6IHN0cmluZyB8IG51bGwgfTtcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGdhcC14LVsxMHB4XSBnYXAteS1bMTBweF0gZmxleC13cmFwXCI+XHJcbiAgICAgICAge25ld3NDYXRlZ29yaWVzLmRhdGEubWFwKChjYXRlZ29yeTogQ2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgX2lkOiBpZCwgbmFtZSwgcG9zdHMgfSA9IGNhdGVnb3J5O1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggd2hpdGVzcGFjZS1ub3JtYWwgdGV4dC1bMTRweF0gZm9udC1bNTAwXSBnYXAtWzE1cHhdIHB4LVsyMHB4XSBweS1bOHB4XSBib3JkZXItWzJweF0gcm91bmRlZC1bOHB4XSBiZy13aGl0ZSBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWJvcmRlciBkdXJhdGlvbi0yMDAgJHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcltcImNhdGVnb3J5XCJdLmluY2x1ZGVzKGlkKSA/IFwiYm9yZGVyLXRlYWwtNTAwXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcigocHJldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0geyAuLi5wcmV2IH07XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjb3B5W1wiY2F0ZWdvcnlcIl0uaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZU9iaihcclxuICAgICAgICAgICAgICAgICAgICAgIGNvcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2W1wiY2F0ZWdvcnlcIl0uZmlsdGVyKChlbCkgPT4gZWwgIT0gaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlT2JqKGNvcHksIFwiY2F0ZWdvcnlcIiwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ucHJldltcImNhdGVnb3J5XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e3Bvc3RzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmV3c0ZpbHRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IHB1c2gsIGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcXVlcnkgPSB1cmxUb1F1ZXJ5KGFzUGF0aCk7XHJcblxyXG4gIGNvbnN0IG5ld3NDYXRlZ29yaWVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUuZ2xvYmFsW1wibmV3cy1jYXRlZ29yaWVzXCJdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPHsgY2F0ZWdvcnk6IHN0cmluZ1tdIH0+KHtcclxuICAgIGNhdGVnb3J5OiBxdWVyeS5jYXRlZ29yeSA/IHF1ZXJ5LmNhdGVnb3J5IDogW10sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeVN0ciA9XHJcbiAgICAgIGZpbHRlci5jYXRlZ29yeS5sZW5ndGggIT0gMFxyXG4gICAgICAgID8gZmlsdGVyLmNhdGVnb3J5Lm1hcCgoY2F0ZWdvcnkpID0+IGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApLmpvaW4oXCImXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgY29uc3QgdXJsID0gYCR7UEFHRV9VUkx9L25ld3Mke3F1ZXJ5U3RyLmxlbmd0aCAhPSAwID8gXCI/XCIgOiBcIlwifSR7cXVlcnlTdHJ9YDtcclxuXHJcbiAgICBpZiAodXJsICE9IFBBR0VfVVJMICsgYXNQYXRoKSB7XHJcbiAgICAgIHB1c2godXJsLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9LCBbZmlsdGVyXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKG5ld3NDYXRlZ29yaWVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge25ld3NDYXRlZ29yaWVzICYmIDxDYXRlZ29yaWVzRmlsdGVyIG5ld3NDYXRlZ29yaWVzPXtuZXdzQ2F0ZWdvcmllc30gLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0ZpbHRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1cGRhdGVPYmoiLCJ1cmxUb1F1ZXJ5IiwiUEFHRV9VUkwiLCJDYXRlZ29yaWVzRmlsdGVyIiwibmV3c0NhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwibWFwIiwiY2F0ZWdvcnkiLCJfaWQiLCJpZCIsIm5hbWUiLCJwb3N0cyIsImZpbHRlciIsImluY2x1ZGVzIiwib25DbGljayIsInNldEZpbHRlciIsInByZXYiLCJjb3B5IiwiZWwiLCJzcGFuIiwibGVuZ3RoIiwiTmV3c0ZpbHRlciIsInB1c2giLCJhc1BhdGgiLCJxdWVyeSIsInN0YXRlIiwiZ2xvYmFsIiwicXVlcnlTdHIiLCJqb2luIiwidXJsIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/News/NewsFilter.tsx\n"));

/***/ })

});