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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReactDropZone: function() { return /* binding */ ReactDropZone; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dropzone_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropzone.module.css */ \"./src/components/drop-zone/dropzone.module.css\");\n/* harmony import */ var _dropzone_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dropzone_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ReactDropZone = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), files = _useState[0], setFiles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), rejected = _useState1[0], setRejected = _useState1[1];\n    var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(acceptedFiles) {\n        var _acceptedFiles;\n        if ((_acceptedFiles = acceptedFiles) === null || _acceptedFiles === void 0 ? void 0 : _acceptedFiles.length) {\n            setFiles(function(previousFiles) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(previousFiles).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(acceptedFiles.map(function(file) {\n                    return Object.assign(file, {\n                        preview: URL.createObjectURL(file)\n                    });\n                })));\n            });\n        }\n        if (rejectedFiles.length) {\n            setRejected(function(previousFiles) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(previousFiles).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(rejected));\n            });\n        }\n        console.log(\"dropzone working\");\n    }, []);\n    var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)({\n        accept: {\n            \"image/*\": []\n        },\n        maxSize: 1024 * 1000,\n        onDrop: onDrop\n    }), getRootProps = _useDropzone.getRootProps, getInputProps = _useDropzone.getInputProps, isDragActive = _useDropzone.isDragActive;\n    var removeFile = function(name) {\n        setFiles(function(files) {\n            return files.filter(function(file) {\n                return file.name !== name;\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, getRootProps({\n                className: (_dropzone_module_css__WEBPACK_IMPORTED_MODULE_8___default().border)\n            })), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, getInputProps()), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    isDragActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Drop the files here ...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Drag 'n' drop some files here, or click to select files\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }), void 0, true, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"accepted files\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: files.map(function(file) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: file.preview,\n                                alt: \"\",\n                                width: 100,\n                                height: 100,\n                                onLoad: function() {\n                                    return URL.revokeObjectURL(file.preview);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return removeFile(file.name);\n                                },\n                                children: \"Cross\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, file.name, true, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"rejected files\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: rejected.map(function(file, errors) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: file.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: errors.map(function(error) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: error.message\n                                            }, error.code, false, {\n                                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return removeFile(file.name);\n                                },\n                                children: \"Cross\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, file.name, true, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(ReactDropZone, \"YMbMk1EuNnePefSx/zTgUcE84BQ=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone\n    ];\n});\n_c = ReactDropZone;\nvar _c;\n$RefreshReg$(_c, \"ReactDropZone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcm9wLXpvbmUvUmVhY3REcm9wWm9uZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDVjtBQUNFO0FBQ2Q7QUFDeEIsSUFBTU0sZ0JBQWdCOztJQUMzQixJQUEwQkosWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBOUJLLFFBQW1CTCxjQUFaTSxXQUFZTjtJQUN6QixJQUFnQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBcENPLFdBQXlCUCxlQUFmUSxjQUFlUjtJQUNqQyxJQUFNUyxTQUFTVixrREFBV0EsQ0FBQyxTQUFDVztZQUN0QkE7UUFBSixLQUFJQSxpQkFBQUEsMkJBQUFBLHFDQUFBQSxlQUFlQyxNQUFNLEVBQUU7WUFDekJMLFNBQVMsU0FBQ007dUJBQWtCLG9FQUN2QkEsc0JBQ0gsb0VBQUdGLGNBQWNHLEdBQUcsQ0FBQyxTQUFDQzsyQkFDcEJDLE9BQU9DLE1BQU0sQ0FBQ0YsTUFBTTt3QkFBRUcsU0FBU0MsSUFBSUMsZUFBZSxDQUFDTDtvQkFBTTs7O1FBRy9EO1FBQ0EsSUFBSU0sY0FBY1QsTUFBTSxFQUFFO1lBQ3hCSCxZQUFZLFNBQUNJO3VCQUFrQixvRUFBSUEsc0JBQWUsb0VBQUdMOztRQUN2RDtRQUNBYyxRQUFRQyxHQUFHLENBQUM7SUFDZCxHQUFHLEVBQUU7SUFDTCxJQUFzRHBCLGVBQUFBLDJEQUFXQSxDQUFDO1FBQ2hFcUIsUUFBUTtZQUNOLFdBQVcsRUFBRTtRQUNmO1FBQ0FDLFNBQVMsT0FBTztRQUNoQmYsUUFBQUE7SUFDRixJQU5RZ0IsZUFBOEN2QixhQUE5Q3VCLGNBQWNDLGdCQUFnQ3hCLGFBQWhDd0IsZUFBZUMsZUFBaUJ6QixhQUFqQnlCO0lBT3JDLElBQU1DLGFBQWEsU0FBQ0M7UUFDbEJ2QixTQUFTLFNBQUNEO21CQUFVQSxNQUFNeUIsTUFBTSxDQUFDLFNBQUNoQjt1QkFBU0EsS0FBS2UsSUFBSSxLQUFLQTs7O0lBQzNEO0lBQ0EscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0MsT0FBQUEsbUVBQUFBLENBQUFBLDZEQUFBQSxLQUFRUCxhQUFhO2dCQUFFUSxXQUFXaEMsb0VBQWE7WUFBQzs7a0NBQy9DLDhEQUFDa0MsU0FBQUEsNkRBQUFBLEtBQVVUOzs7OztvQkFFVkMsNkJBQ0MsOERBQUNTO2tDQUFFOzs7Ozs4Q0FFSCw4REFBQ0E7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFJUCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VqQyxNQUFNUSxHQUFHLENBQUMsU0FBQ0M7eUNBQ1YsOERBQUN5Qjs7MENBRUcsOERBQUNwQyxtREFBS0E7Z0NBQ0pxQyxLQUFLMUIsS0FBS0csT0FBTztnQ0FDakJ3QixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxRQUFROzJDQUFNMUIsSUFBSTJCLGVBQWUsQ0FBQy9CLEtBQUtHLE9BQU87Ozs7Ozs7MENBR2xELDhEQUFDNkI7Z0NBQUtDLFNBQVM7MkNBQU1uQixXQUFXZCxLQUFLZSxJQUFJOzswQ0FBRzs7Ozs7Ozt1QkFWckNmLEtBQUtlLElBQUk7Ozs7Ozs7Ozs7OzBCQWV0Qiw4REFBQ1E7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0UvQixTQUFTTSxHQUFHLENBQUMsU0FBQ0MsTUFBTWtDO3lDQUNuQiw4REFBQ1Q7OzBDQUNDLDhEQUFDUDs7a0RBQ0MsOERBQUNJO2tEQUFHdEIsS0FBS2UsSUFBSTs7Ozs7O2tEQUNiLDhEQUFDUztrREFDRVUsT0FBT25DLEdBQUcsQ0FBQyxTQUFDb0M7aUVBQ1gsOERBQUNWOzBEQUFxQlUsTUFBTUMsT0FBTzsrQ0FBMUJELE1BQU1FLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl6Qiw4REFBQ0w7Z0NBQUtDLFNBQVM7MkNBQU1uQixXQUFXZCxLQUFLZSxJQUFJOzswQ0FBRzs7Ozs7Ozt1QkFUckNmLEtBQUtlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTVCLEVBQUU7R0EzRVd6Qjs7UUFpQjJDRix1REFBV0E7OztLQWpCdERFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Ryb3Atem9uZS9SZWFjdERyb3Bab25lLmpzP2RmYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3l0bGVzIGZyb20gXCIuL2Ryb3B6b25lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBSZWFjdERyb3Bab25lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICBjb25zdCBbcmVqZWN0ZWQsIHNldFJlamVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjaygoYWNjZXB0ZWRGaWxlcykgPT4ge1xyXG4gICAgaWYgKGFjY2VwdGVkRmlsZXM/Lmxlbmd0aCkge1xyXG4gICAgICBzZXRGaWxlcygocHJldmlvdXNGaWxlcykgPT4gW1xyXG4gICAgICAgIC4uLnByZXZpb3VzRmlsZXMsXHJcbiAgICAgICAgLi4uYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbGUsIHsgcHJldmlldzogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSB9KVxyXG4gICAgICAgICksXHJcbiAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlamVjdGVkRmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldFJlamVjdGVkKChwcmV2aW91c0ZpbGVzKSA9PiBbLi4ucHJldmlvdXNGaWxlcywgLi4ucmVqZWN0ZWRdKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiZHJvcHpvbmUgd29ya2luZ1wiKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xyXG4gICAgYWNjZXB0OiB7XHJcbiAgICAgIFwiaW1hZ2UvKlwiOiBbXSxcclxuICAgIH0sXHJcbiAgICBtYXhTaXplOiAxMDI0ICogMTAwMCxcclxuICAgIG9uRHJvcCxcclxuICB9KTtcclxuICBjb25zdCByZW1vdmVGaWxlID0gKG5hbWUpID0+IHtcclxuICAgIHNldEZpbGVzKChmaWxlcykgPT4gZmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLm5hbWUgIT09IG5hbWUpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgY2xhc3NOYW1lOiBzeXRsZXMuYm9yZGVyIH0pfT5cclxuICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuXHJcbiAgICAgICAge2lzRHJhZ0FjdGl2ZSA/IChcclxuICAgICAgICAgIDxwPkRyb3AgdGhlIGZpbGVzIGhlcmUgLi4uPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cD5EcmFnICduJyBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogcHJldmlldyBzZWN0aW9uICovfVxyXG4gICAgICA8aDM+YWNjZXB0ZWQgZmlsZXM8L2gzPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2ZpbGVzLm1hcCgoZmlsZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17ZmlsZS5uYW1lfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtmaWxlLnByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUucHJldmlldyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGaWxlKGZpbGUubmFtZSl9PkNyb3NzPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgey8qIHJlamVjdGVkIHNlY3Rpb24gKi99XHJcbiAgICAgIDxoMz5yZWplY3RlZCBmaWxlczwvaDM+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cmVqZWN0ZWQubWFwKChmaWxlLCBlcnJvcnMpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2ZpbGUubmFtZX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+e2ZpbGUubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5tYXAoKGVycm9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Vycm9yLmNvZGV9PntlcnJvci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gcmVtb3ZlRmlsZShmaWxlLm5hbWUpfT5Dcm9zczwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInN5dGxlcyIsInVzZURyb3B6b25lIiwiSW1hZ2UiLCJSZWFjdERyb3Bab25lIiwiZmlsZXMiLCJzZXRGaWxlcyIsInJlamVjdGVkIiwic2V0UmVqZWN0ZWQiLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwibGVuZ3RoIiwicHJldmlvdXNGaWxlcyIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVqZWN0ZWRGaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJhY2NlcHQiLCJtYXhTaXplIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRHJhZ0FjdGl2ZSIsInJlbW92ZUZpbGUiLCJuYW1lIiwiZmlsdGVyIiwiZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImJvcmRlciIsImlucHV0IiwicCIsImgzIiwidWwiLCJsaSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25Mb2FkIiwicmV2b2tlT2JqZWN0VVJMIiwic3BhbiIsIm9uQ2xpY2siLCJlcnJvcnMiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/drop-zone/ReactDropZone.js\n"));

/***/ })

});