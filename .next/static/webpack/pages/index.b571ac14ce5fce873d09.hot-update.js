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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#000'),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setInterval(function () {\n      setValue('#' + Math.floor(Math.random() * 16777215).toString(16));\n    }, 500);\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var VideoBackgound = function VideoBackgound() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-screen h-screen\",\n      style: {\n        backgroundColor: value\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"w-8/12\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: \"rounded-md\",\n          src: \"/jon.gif\",\n          alt: \"Jon\",\n          height: 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_sound__WEBPACK_IMPORTED_MODULE_2__.default, {\n        url: \"jon.mpeg\",\n        playStatus: react_sound__WEBPACK_IMPORTED_MODULE_2__.default.status.PLAYING,\n        loop: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(VideoBackgound, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Video, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"WaFwQCGFpJeSIinOrkiAgqPAh/k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixrQkFBd0JKLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQk4sK0NBQVEsQ0FBQyxNQUFELENBQWxDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSxXQUFXLENBQUMsWUFBTTtBQUNoQkQsTUFBQUEsUUFBUSxDQUFDLE1BQU1FLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsUUFBM0IsRUFBcUNDLFFBQXJDLENBQThDLEVBQTlDLENBQVAsQ0FBUjtBQUNELEtBRlUsRUFFUixHQUZRLENBQVg7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsd0JBQ2I7QUFBSyxlQUFTLEVBQUMsb0RBQWY7QUFBQSw2QkFDRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiUixVQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYTtBQUFBLEdBQWY7O0FBWUEsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHdCQUNyQjtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsZUFBZSxFQUFFVDtBQUFuQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHFCO0FBQUEsR0FBdkI7O0FBSUEsTUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQix3QkFDRTtBQUFLLGVBQVMsRUFBQyxxRUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxtQkFBUyxFQUFDLFlBRFo7QUFFRSxhQUFHLEVBQUMsVUFGTjtBQUdFLGFBQUcsRUFBQyxLQUhOO0FBSUUsZ0JBQU0sRUFBRSxHQUpWO0FBS0UsZUFBSyxFQUFFLEdBTFQ7QUFNRSxnQkFBTSxFQUFDO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFjRCxHQWZEOztBQWlCQSxzQkFDRTtBQUFBLGNBQ0daLElBQUksZ0JBQ0g7QUFBQSw4QkFDRSw4REFBQyxnREFBRDtBQUFPLFdBQUcsRUFBQyxVQUFYO0FBQXNCLGtCQUFVLEVBQUVGLCtEQUFsQztBQUF3RCxZQUFJLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBLG9CQURHLGdCQU9ILDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKLG1CQURGO0FBYUQsQ0F4REQ7O0dBQU1DOztLQUFBQTtBQTBETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU291bmQgZnJvbSAncmVhY3Qtc291bmQnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJyMwMDAnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZhbHVlKCcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNikpO1xuICAgIH0sIDUwMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBCdXR0b24gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVHJ1c3QgTWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IFZpZGVvQmFja2dvdW5kID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW5cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlIH19PjwvZGl2PlxuICApO1xuXG4gIGNvbnN0IFZpZGVvID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgvMTJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgc3JjPVwiL2pvbi5naWZcIlxuICAgICAgICAgICAgYWx0PVwiSm9uXCJcbiAgICAgICAgICAgIGhlaWdodD17NDk0fVxuICAgICAgICAgICAgd2lkdGg9ezY1OH1cbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U291bmQgdXJsPVwiam9uLm1wZWdcIiBwbGF5U3RhdHVzPXtTb3VuZC5zdGF0dXMuUExBWUlOR30gbG9vcD17dHJ1ZX0gLz5cbiAgICAgICAgICA8VmlkZW9CYWNrZ291bmQgLz5cbiAgICAgICAgICA8VmlkZW8gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiU291bmQiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIkJ1dHRvbiIsIlZpZGVvQmFja2dvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiVmlkZW8iLCJzdGF0dXMiLCJQTEFZSU5HIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});