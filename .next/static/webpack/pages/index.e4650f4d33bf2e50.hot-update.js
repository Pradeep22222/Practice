"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/drop-zone/ReactDropZone.js":
/*!***************************************************!*\
  !*** ./src/components/drop-zone/ReactDropZone.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReactDropZone: function() { return /* binding */ ReactDropZone; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dropzone_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropzone.module.css */ \"./src/components/drop-zone/dropzone.module.css\");\n/* harmony import */ var _dropzone_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dropzone_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ReactDropZone = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), files = _useState[0], setFiles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), rejected = _useState1[0], setRejected = _useState1[1];\n    var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(acceptedFiles, rejectedFiles) {\n        var _acceptedFiles, _rejectedFiles;\n        if ((_acceptedFiles = acceptedFiles) === null || _acceptedFiles === void 0 ? void 0 : _acceptedFiles.length) {\n            setFiles(function(previousFiles) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(previousFiles).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(acceptedFiles.map(function(file) {\n                    return Object.assign(file, {\n                        preview: URL.createObjectURL(file)\n                    });\n                })));\n            });\n        }\n        if ((_rejectedFiles = rejectedFiles) === null || _rejectedFiles === void 0 ? void 0 : _rejectedFiles.length) {\n            setRejected(function(previousFiles) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(previousFiles).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(rejectedFiles));\n            });\n        }\n    }, []);\n    var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)({\n        accept: {\n            \"image/*\": []\n        },\n        maxSize: 1024 * 1000,\n        onDrop: onDrop\n    }), getRootProps = _useDropzone.getRootProps, getInputProps = _useDropzone.getInputProps, isDragActive = _useDropzone.isDragActive;\n    var removeFile = function(name) {\n        setFiles(function(files) {\n            return files.filter(function(file) {\n                return file.name !== name;\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, getRootProps({\n                className: (_dropzone_module_css__WEBPACK_IMPORTED_MODULE_8___default().border)\n            })), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, getInputProps()), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    isDragActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Drop the files here ...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Drag 'n' drop some files here, or click to select files\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }), void 0, true, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"accepted files\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: files.map(function(file) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: file.preview,\n                                alt: \"\",\n                                width: 100,\n                                height: 100,\n                                onLoad: function() {\n                                    return URL.revokeObjectURL(file.preview);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return removeFile(file.name);\n                                },\n                                children: \"Cross\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, file.name, true, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"rejected files\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-6 flex flex-col\",\n                children: rejected.map(function(param) {\n                    var file = param.file, errors = param.errors;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-start justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-2 text-neutral-500 text-sm font-medium\",\n                                        children: file.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"text-[12px] text-red-400\",\n                                        children: errors.map(function(error) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: error.message\n                                            }, error.code, false, {\n                                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return removeFile(file.name);\n                                },\n                                children: \"Cross\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, file.name, true, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(ReactDropZone, \"YMbMk1EuNnePefSx/zTgUcE84BQ=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone\n    ];\n});\n_c = ReactDropZone;\nvar _c;\n$RefreshReg$(_c, \"ReactDropZone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcm9wLXpvbmUvUmVhY3REcm9wWm9uZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDVjtBQUNFO0FBQ2Q7QUFDeEIsSUFBTU0sZ0JBQWdCOztJQUMzQixJQUEwQkosWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBOUJLLFFBQW1CTCxjQUFaTSxXQUFZTjtJQUN6QixJQUFnQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBcENPLFdBQXlCUCxlQUFmUSxjQUFlUjtJQUNsQyxJQUFNUyxTQUFTVixrREFBV0EsQ0FBQyxTQUFDVyxlQUFlQztZQUNyQ0QsZ0JBU0FDO1FBVEosS0FBSUQsaUJBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZUUsTUFBTSxFQUFFO1lBQ3pCTixTQUFTLFNBQUNPO3VCQUFrQixvRUFDdkJBLHNCQUNILG9FQUFHSCxjQUFjSSxHQUFHLENBQUMsU0FBQ0M7MkJBQ3BCQyxPQUFPQyxNQUFNLENBQUNGLE1BQU07d0JBQUVHLFNBQVNDLElBQUlDLGVBQWUsQ0FBQ0w7b0JBQU07OztRQUcvRDtRQUVBLEtBQUlKLGlCQUFBQSwyQkFBQUEscUNBQUFBLGVBQWVDLE1BQU0sRUFBRTtZQUN6QkosWUFBWSxTQUFDSzt1QkFBa0Isb0VBQUlBLHNCQUFlLG9FQUFHRjs7UUFDdkQ7SUFDRixHQUFHLEVBQUU7SUFDSixJQUFzRFQsZUFBQUEsMkRBQVdBLENBQUM7UUFDaEVtQixRQUFRO1lBQ04sV0FBVyxFQUFFO1FBQ2Y7UUFDQUMsU0FBUyxPQUFPO1FBQ2hCYixRQUFBQTtJQUNGLElBTlFjLGVBQThDckIsYUFBOUNxQixjQUFjQyxnQkFBZ0N0QixhQUFoQ3NCLGVBQWVDLGVBQWlCdkIsYUFBakJ1QjtJQU9yQyxJQUFNQyxhQUFhLFNBQUNDO1FBQ2xCckIsU0FBUyxTQUFDRDttQkFBVUEsTUFBTXVCLE1BQU0sQ0FBQyxTQUFDYjt1QkFBU0EsS0FBS1ksSUFBSSxLQUFLQTs7O0lBQzNEO0lBQ0EscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0MsT0FBQUEsbUVBQUFBLENBQUFBLDZEQUFBQSxLQUFRUCxhQUFhO2dCQUFFUSxXQUFXOUIsb0VBQWE7WUFBQzs7a0NBQy9DLDhEQUFDZ0MsU0FBQUEsNkRBQUFBLEtBQVVUOzs7OztvQkFFVkMsNkJBQ0MsOERBQUNTO2tDQUFFOzs7Ozs4Q0FFSCw4REFBQ0E7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFJUCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0UvQixNQUFNUyxHQUFHLENBQUMsU0FBQ0M7eUNBQ1YsOERBQUNzQjs7MENBRUcsOERBQUNsQyxtREFBS0E7Z0NBQ0ptQyxLQUFLdkIsS0FBS0csT0FBTztnQ0FDakJxQixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxRQUFROzJDQUFNdkIsSUFBSXdCLGVBQWUsQ0FBQzVCLEtBQUtHLE9BQU87Ozs7Ozs7MENBR2xELDhEQUFDMEI7Z0NBQUtDLFNBQVM7MkNBQU1uQixXQUFXWCxLQUFLWSxJQUFJOzswQ0FBRzs7Ozs7Ozt1QkFWckNaLEtBQUtZLElBQUk7Ozs7Ozs7Ozs7OzBCQWV0Qiw4REFBQ1E7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUdMLFdBQVU7MEJBQ1h4QixTQUFTTyxHQUFHLENBQUM7d0JBQUdDLGFBQUFBLE1BQU0rQixlQUFBQTt5Q0FDckIsOERBQUNUO3dCQUFtQk4sV0FBVTs7MENBQzVCLDhEQUFDRDs7a0RBQ0MsOERBQUNJO3dDQUFFSCxXQUFVO2tEQUNWaEIsS0FBS1ksSUFBSTs7Ozs7O2tEQUVaLDhEQUFDUzt3Q0FBR0wsV0FBVTtrREFDWGUsT0FBT2hDLEdBQUcsQ0FBQyxTQUFDaUM7aUVBQ1gsOERBQUNWOzBEQUFxQlUsTUFBTUMsT0FBTzsrQ0FBMUJELE1BQU1FLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl6Qiw4REFBQ0w7Z0NBQUtDLFNBQVM7MkNBQU1uQixXQUFXWCxLQUFLWSxJQUFJOzswQ0FBRzs7Ozs7Ozt1QkFYckNaLEtBQUtZLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI1QixFQUFFO0dBN0VXdkI7O1FBaUIyQ0YsdURBQVdBOzs7S0FqQnRERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kcm9wLXpvbmUvUmVhY3REcm9wWm9uZS5qcz9kZmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN5dGxlcyBmcm9tIFwiLi9kcm9wem9uZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5leHBvcnQgY29uc3QgUmVhY3REcm9wWm9uZSA9ICgpID0+IHtcclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgY29uc3QgW3JlamVjdGVkLCBzZXRSZWplY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjaygoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xyXG4gICBpZiAoYWNjZXB0ZWRGaWxlcz8ubGVuZ3RoKSB7XHJcbiAgICAgc2V0RmlsZXMoKHByZXZpb3VzRmlsZXMpID0+IFtcclxuICAgICAgIC4uLnByZXZpb3VzRmlsZXMsXHJcbiAgICAgICAuLi5hY2NlcHRlZEZpbGVzLm1hcCgoZmlsZSkgPT5cclxuICAgICAgICAgT2JqZWN0LmFzc2lnbihmaWxlLCB7IHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgfSlcclxuICAgICAgICksXHJcbiAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChyZWplY3RlZEZpbGVzPy5sZW5ndGgpIHtcclxuICAgICBzZXRSZWplY3RlZCgocHJldmlvdXNGaWxlcykgPT4gWy4uLnByZXZpb3VzRmlsZXMsIC4uLnJlamVjdGVkRmlsZXNdKTtcclxuICAgfVxyXG4gfSwgW10pO1xyXG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcclxuICAgIGFjY2VwdDoge1xyXG4gICAgICBcImltYWdlLypcIjogW10sXHJcbiAgICB9LFxyXG4gICAgbWF4U2l6ZTogMTAyNCAqIDEwMDAsXHJcbiAgICBvbkRyb3AsXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVtb3ZlRmlsZSA9IChuYW1lKSA9PiB7XHJcbiAgICBzZXRGaWxlcygoZmlsZXMpID0+IGZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5uYW1lICE9PSBuYW1lKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0+XHJcbiAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogc3l0bGVzLmJvcmRlciB9KX0+XHJcbiAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcblxyXG4gICAgICAgIHtpc0RyYWdBY3RpdmUgPyAoXHJcbiAgICAgICAgICA8cD5Ecm9wIHRoZSBmaWxlcyBoZXJlIC4uLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIHByZXZpZXcgc2VjdGlvbiAqL31cclxuICAgICAgPGgzPmFjY2VwdGVkIGZpbGVzPC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtmaWxlcy5tYXAoKGZpbGUpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2ZpbGUubmFtZX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17ZmlsZS5wcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTChmaWxlLnByZXZpZXcpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gcmVtb3ZlRmlsZShmaWxlLm5hbWUpfT5Dcm9zczwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHsvKiByZWplY3RlZCBzZWN0aW9uICovfVxyXG4gICAgICA8aDM+cmVqZWN0ZWQgZmlsZXM8L2gzPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAge3JlamVjdGVkLm1hcCgoeyBmaWxlLCBlcnJvcnMgfSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17ZmlsZS5uYW1lfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1uZXV0cmFsLTUwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1bMTJweF0gdGV4dC1yZWQtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm1hcCgoZXJyb3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZXJyb3IuY29kZX0+e2Vycm9yLm1lc3NhZ2V9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGaWxlKGZpbGUubmFtZSl9PkNyb3NzPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwic3l0bGVzIiwidXNlRHJvcHpvbmUiLCJJbWFnZSIsIlJlYWN0RHJvcFpvbmUiLCJmaWxlcyIsInNldEZpbGVzIiwicmVqZWN0ZWQiLCJzZXRSZWplY3RlZCIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJyZWplY3RlZEZpbGVzIiwibGVuZ3RoIiwicHJldmlvdXNGaWxlcyIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWNjZXB0IiwibWF4U2l6ZSIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJyZW1vdmVGaWxlIiwibmFtZSIsImZpbHRlciIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJib3JkZXIiLCJpbnB1dCIsInAiLCJoMyIsInVsIiwibGkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9uTG9hZCIsInJldm9rZU9iamVjdFVSTCIsInNwYW4iLCJvbkNsaWNrIiwiZXJyb3JzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/drop-zone/ReactDropZone.js\n"));

/***/ })

});