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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var _components_VideoBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoBackground */ \"./components/VideoBackground.jsx\");\n/* harmony import */ var _components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SmallSprites */ \"./components/SmallSprites.jsx\");\n/* harmony import */ var _components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FlipedSmallSprites */ \"./components/FlipedSmallSprites.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show1 = _useState2[0],\n      setShow1 = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show2 = _useState3[0],\n      setShow2 = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show3 = _useState4[0],\n      setShow3 = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show4 = _useState5[0],\n      setShow4 = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show5 = _useState6[0],\n      setShow5 = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      setShow1(true);\n    }, 300);\n    setTimeout(function () {\n      setShow2(true);\n    }, 700);\n    setTimeout(function () {\n      setShow3(true);\n    }, 400);\n    setTimeout(function () {\n      setShow4(true);\n    }, 1200);\n    setTimeout(function () {\n      setShow5(true);\n    }, 1800);\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen z-50\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        className: \"z-50\",\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"w-7/12\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          draggable: false,\n          className: \"rounded-md\",\n          src: \"/jon3.gif\",\n          alt: \"Jon\",\n          height: !open ? 0 : 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Video, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_VideoBackground__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__.default, {\n        className: \"top-40\",\n        open: open,\n        size: \"large\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }, _this), show1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"top-40\",\n      open: open,\n      size: \"large\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }, _this), show2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"top-4\",\n      open: open,\n      size: \"medium\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }, _this), show3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"top-80\",\n      open: open,\n      size: \"small\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }, _this), show4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__.default, {\n      className: \"top-60\",\n      open: open,\n      size: \"large\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, _this), show5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__.default, {\n      className: \"top-120\",\n      open: open,\n      size: \"large\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"o6hQaXmNn4c4Sp20EDL1wJM1zs0=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUyxFQUFDLFFBQS9CO0FBQXdDLFlBQUksRUFBRUEsSUFBOUM7QUFBb0QsWUFBSSxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURHLGdCQU1ILDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKLEVBZ0JHRSxLQUFLLGlCQUFJLDhEQUFDLDZEQUFEO0FBQWMsZUFBUyxFQUFDLFFBQXhCO0FBQWlDLFVBQUksRUFBRUYsSUFBdkM7QUFBNkMsVUFBSSxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQlosRUFpQkdJLEtBQUssaUJBQUksOERBQUMsNkRBQUQ7QUFBYyxlQUFTLEVBQUMsT0FBeEI7QUFBZ0MsVUFBSSxFQUFFSixJQUF0QztBQUE0QyxVQUFJLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCWixFQWtCR00sS0FBSyxpQkFBSSw4REFBQyw2REFBRDtBQUFjLGVBQVMsRUFBQyxRQUF4QjtBQUFpQyxVQUFJLEVBQUVOLElBQXZDO0FBQTZDLFVBQUksRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJaLEVBbUJHUSxLQUFLLGlCQUNKLDhEQUFDLG1FQUFEO0FBQXFCLGVBQVMsRUFBQyxRQUEvQjtBQUF3QyxVQUFJLEVBQUVSLElBQTlDO0FBQW9ELFVBQUksRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJKLEVBc0JHVSxLQUFLLGlCQUNKLDhEQUFDLG1FQUFEO0FBQXFCLGVBQVMsRUFBQyxTQUEvQjtBQUF5QyxVQUFJLEVBQUVWLElBQS9DO0FBQXFELFVBQUksRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJKO0FBQUEsa0JBREY7QUE0QkQsQ0FyRkQ7O0dBQU1EOztLQUFBQTtBQXVGTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG5pbXBvcnQgVmlkZW9CYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW9CYWNrZ3JvdW5kJztcbmltcG9ydCBTbWFsbFNwcml0ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9TbWFsbFNwcml0ZXMnO1xuaW1wb3J0IEZsaXBwZWRTbWFsbFNwcml0ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9GbGlwZWRTbWFsbFNwcml0ZXMnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93MSwgc2V0U2hvdzFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvdzIsIHNldFNob3cyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3czLCBzZXRTaG93M10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93NCwgc2V0U2hvdzRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvdzUsIHNldFNob3c1XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdzEodHJ1ZSk7XG4gICAgfSwgMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3cyKHRydWUpO1xuICAgIH0sIDcwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93Myh0cnVlKTtcbiAgICB9LCA0MDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdzQodHJ1ZSk7XG4gICAgfSwgMTIwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93NSh0cnVlKTtcbiAgICB9LCAxODAwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IEJ1dHRvbiA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuIHotNTBcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiei01MFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUcnVzdCBNZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgVmlkZW8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNy8xMlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgc3JjPVwiL2pvbjMuZ2lmXCJcbiAgICAgICAgICAgIGFsdD1cIkpvblwiXG4gICAgICAgICAgICBoZWlnaHQ9eyFvcGVuID8gMCA6IDQ5NH1cbiAgICAgICAgICAgIHdpZHRoPXs2NTh9XG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZpZGVvIC8+XG5cbiAgICAgIHsvKiA8U291bmRcbiAgICAgICAgdXJsPVwiam9uLm1wZWdcIlxuICAgICAgICBwbGF5U3RhdHVzPXshb3BlbiA/ICcnIDogU291bmQuc3RhdHVzLlBMQVlJTkd9XG4gICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAvPiAqL31cbiAgICAgIHtvcGVuID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxWaWRlb0JhY2tncm91bmQgLz5cbiAgICAgICAgICA8RmxpcHBlZFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCJ0b3AtNDBcIiBvcGVuPXtvcGVufSBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b24gLz5cbiAgICAgICl9XG4gICAgICB7c2hvdzEgJiYgPFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCJ0b3AtNDBcIiBvcGVuPXtvcGVufSBzaXplPVwibGFyZ2VcIiAvPn1cbiAgICAgIHtzaG93MiAmJiA8U21hbGxTcHJpdGVzIGNsYXNzTmFtZT1cInRvcC00XCIgb3Blbj17b3Blbn0gc2l6ZT1cIm1lZGl1bVwiIC8+fVxuICAgICAge3Nob3czICYmIDxTbWFsbFNwcml0ZXMgY2xhc3NOYW1lPVwidG9wLTgwXCIgb3Blbj17b3Blbn0gc2l6ZT1cInNtYWxsXCIgLz59XG4gICAgICB7c2hvdzQgJiYgKFxuICAgICAgICA8RmxpcHBlZFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCJ0b3AtNjBcIiBvcGVuPXtvcGVufSBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgKX1cbiAgICAgIHtzaG93NSAmJiAoXG4gICAgICAgIDxGbGlwcGVkU21hbGxTcHJpdGVzIGNsYXNzTmFtZT1cInRvcC0xMjBcIiBvcGVuPXtvcGVufSBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbWFnZSIsIlNvdW5kIiwiVmlkZW9CYWNrZ3JvdW5kIiwiU21hbGxTcHJpdGVzIiwiRmxpcHBlZFNtYWxsU3ByaXRlcyIsIkhvbWUiLCJvcGVuIiwic2V0T3BlbiIsInNob3cxIiwic2V0U2hvdzEiLCJzaG93MiIsInNldFNob3cyIiwic2hvdzMiLCJzZXRTaG93MyIsInNob3c0Iiwic2V0U2hvdzQiLCJzaG93NSIsInNldFNob3c1Iiwic2V0VGltZW91dCIsIkJ1dHRvbiIsIlZpZGVvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});