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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReactDropZone: function() { return /* binding */ ReactDropZone; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dropzone_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropzone.module.css */ \"./src/components/drop-zone/dropzone.module.css\");\n/* harmony import */ var _dropzone_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dropzone_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ReactDropZone = function(param) {\n    var className = param.className;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), files = _useState[0], setFiles = _useState[1];\n    var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(acceptedFiles) {\n        var _acceptedFiles;\n        if ((_acceptedFiles = acceptedFiles) === null || _acceptedFiles === void 0 ? void 0 : _acceptedFiles.length) {\n            setFiles(function(previousFiles) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(previousFiles).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(acceptedFiles.map(function(file) {\n                    return Object.assign(file, {\n                        preview: URL.createObjectURL(file)\n                    });\n                })));\n            });\n        }\n        console.log(\"dropzone working\");\n    }, []);\n    var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)({\n        onDrop: onDrop\n    }), getRootProps = _useDropzone.getRootProps, getInputProps = _useDropzone.getInputProps, isDragActive = _useDropzone.isDragActive;\n    var removeFile = function(name) {\n        setFiles(files);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, getRootProps({\n                className: (_dropzone_module_css__WEBPACK_IMPORTED_MODULE_8___default().border)\n            })), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, getInputProps()), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    isDragActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Drop the files here ...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Drag 'n' drop some files here, or click to select files\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }), void 0, true, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: files.map(function(file) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: file.preview,\n                            alt: \"\",\n                            width: 100,\n                            height: 100\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                            lineNumber: 39,\n                            columnNumber: 14\n                        }, _this)\n                    }, file.name, false, {\n                        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\prade\\\\Desktop\\\\Practice\\\\app\\\\src\\\\components\\\\drop-zone\\\\ReactDropZone.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(ReactDropZone, \"tNMq6o4oWzxfTA/M2osgRdnGvTQ=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone\n    ];\n});\n_c = ReactDropZone;\nvar _c;\n$RefreshReg$(_c, \"ReactDropZone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcm9wLXpvbmUvUmVhY3REcm9wWm9uZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDVjtBQUNFO0FBQ2Q7QUFDeEIsSUFBTU0sZ0JBQWdCO1FBQUdDLGtCQUFBQTs7SUFDOUIsSUFBMEJMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTlCTSxRQUFtQk4sY0FBWk8sV0FBWVA7SUFDMUIsSUFBTVEsU0FBU1Qsa0RBQVdBLENBQUMsU0FBQ1U7WUFDdEJBO1FBQUosS0FBSUEsaUJBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZUMsTUFBTSxFQUFFO1lBQ3pCSCxTQUFTLFNBQUNJO3VCQUFrQixvRUFDdkJBLHNCQUNILG9FQUFHRixjQUFjRyxHQUFHLENBQUMsU0FBQ0M7MkJBQ3BCQyxPQUFPQyxNQUFNLENBQUNGLE1BQU07d0JBQUVHLFNBQVNDLElBQUlDLGVBQWUsQ0FBQ0w7b0JBQU07OztRQUcvRDtRQUNBTSxRQUFRQyxHQUFHLENBQUM7SUFDZCxHQUFHLEVBQUU7SUFDTCxJQUFzRGxCLGVBQUFBLDJEQUFXQSxDQUFDO1FBQ2hFTSxRQUFBQTtJQUNGLElBRlFhLGVBQThDbkIsYUFBOUNtQixjQUFjQyxnQkFBZ0NwQixhQUFoQ29CLGVBQWVDLGVBQWlCckIsYUFBakJxQjtJQUduQyxJQUFNQyxhQUFhQyxTQUFBQTtRQUNmbEIsU0FBU0Q7SUFDYjtJQUNGLHFCQUNFLDhEQUFDb0I7OzBCQUNDLDhEQUFDQyxPQUFBQSxtRUFBQUEsQ0FBQUEsNkRBQUFBLEtBQVFOLGFBQWE7Z0JBQUVoQixXQUFXSixvRUFBYTtZQUFDOztrQ0FDL0MsOERBQUM0QixTQUFBQSw2REFBQUEsS0FBVVA7Ozs7O29CQUVWQyw2QkFDQyw4REFBQ087a0NBQUU7Ozs7OzhDQUVILDhEQUFDQTtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDQzswQkFDRXpCLE1BQU1NLEdBQUcsQ0FBQyxTQUFDQzt5Q0FDViw4REFBQ21CO2tDQUNFLDRFQUFDN0IsbURBQUtBOzRCQUFDOEIsS0FBS3BCLEtBQUtHLE9BQU87NEJBQUVrQixLQUFJOzRCQUFHQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7dUJBRC9DdkIsS0FBS1ksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUIsRUFBRTtHQXhDV3JCOztRQWEyQ0YsdURBQVdBOzs7S0FidERFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Ryb3Atem9uZS9SZWFjdERyb3Bab25lLmpzP2RmYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3l0bGVzIGZyb20gXCIuL2Ryb3B6b25lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBSZWFjdERyb3Bab25lID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjaygoYWNjZXB0ZWRGaWxlcykgPT4ge1xyXG4gICAgaWYgKGFjY2VwdGVkRmlsZXM/Lmxlbmd0aCkge1xyXG4gICAgICBzZXRGaWxlcygocHJldmlvdXNGaWxlcykgPT4gW1xyXG4gICAgICAgIC4uLnByZXZpb3VzRmlsZXMsXHJcbiAgICAgICAgLi4uYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGZpbGUsIHsgcHJldmlldzogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSB9KVxyXG4gICAgICAgICksXHJcbiAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJkcm9wem9uZSB3b3JraW5nXCIpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XHJcbiAgICBvbkRyb3AsXHJcbiAgfSk7XHJcbiAgICBjb25zdCByZW1vdmVGaWxlID0gbmFtZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsZXMoZmlsZXMpXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoeyBjbGFzc05hbWU6IHN5dGxlcy5ib3JkZXIgfSl9PlxyXG4gICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxyXG5cclxuICAgICAgICB7aXNEcmFnQWN0aXZlID8gKFxyXG4gICAgICAgICAgPHA+RHJvcCB0aGUgZmlsZXMgaGVyZSAuLi48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBwcmV2aWV3IHNlY3Rpb24gKi99XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7ZmlsZXMubWFwKChmaWxlKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtmaWxlLm5hbWV9PlxyXG4gICAgICAgICAgICB7PEltYWdlIHNyYz17ZmlsZS5wcmV2aWV3fSBhbHQ9XCJcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz59XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJzeXRsZXMiLCJ1c2VEcm9wem9uZSIsIkltYWdlIiwiUmVhY3REcm9wWm9uZSIsImNsYXNzTmFtZSIsImZpbGVzIiwic2V0RmlsZXMiLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwibGVuZ3RoIiwicHJldmlvdXNGaWxlcyIsIm1hcCIsImZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcmV2aWV3IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29uc29sZSIsImxvZyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJyZW1vdmVGaWxlIiwibmFtZSIsImZvcm0iLCJkaXYiLCJib3JkZXIiLCJpbnB1dCIsInAiLCJ1bCIsImxpIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/drop-zone/ReactDropZone.js\n"));

/***/ })

});