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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#000'),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setInterval(function () {\n      setValue('#' + Math.floor(Math.random() * 16777215).toString(16));\n    }, 500);\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var VideoBackgound = function VideoBackgound() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-screen h-screen\",\n      style: {\n        backgroundColor: value\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"fixed top-0 w-full flex justify-center items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_sound__WEBPACK_IMPORTED_MODULE_2__.default, {\n        url: \"jon.mpeg\",\n        playStatus: react_sound__WEBPACK_IMPORTED_MODULE_2__.default.status.PLAYING,\n        loop: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"w-8/12\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: \"rounded-md\",\n          src: \"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif\",\n          alt: \"Jon\",\n          height: 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(VideoBackgound, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Video, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"WaFwQCGFpJeSIinOrkiAgqPAh/k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixrQkFBd0JKLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQk4sK0NBQVEsQ0FBQyxNQUFELENBQWxDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSxXQUFXLENBQUMsWUFBTTtBQUNoQkQsTUFBQUEsUUFBUSxDQUFDLE1BQU1FLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsUUFBM0IsRUFBcUNDLFFBQXJDLENBQThDLEVBQTlDLENBQVAsQ0FBUjtBQUNELEtBRlUsRUFFUixHQUZRLENBQVg7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsd0JBQ2I7QUFBSyxlQUFTLEVBQUMsb0RBQWY7QUFBQSw2QkFDRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiUixVQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYTtBQUFBLEdBQWY7O0FBWUEsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHdCQUNyQjtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsZUFBZSxFQUFFVDtBQUFuQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHFCO0FBQUEsR0FBdkI7O0FBSUEsTUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQix3QkFDRTtBQUFLLGVBQVMsRUFBQyxxREFBZjtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQU8sV0FBRyxFQUFDLFVBQVg7QUFBc0Isa0JBQVUsRUFBRWQsK0RBQWxDO0FBQXdELFlBQUksRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQVMsRUFBQyxZQURaO0FBRUUsYUFBRyxFQUFDLDZGQUZOO0FBR0UsYUFBRyxFQUFDLEtBSE47QUFJRSxnQkFBTSxFQUFFLEdBSlY7QUFLRSxlQUFLLEVBQUUsR0FMVDtBQU1FLGdCQUFNLEVBQUM7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBZUQsR0FoQkQ7O0FBa0JBLHNCQUNFO0FBQUEsY0FDR0UsSUFBSSxnQkFDSDtBQUFBLDhCQUNFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERyxnQkFNSCw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSixtQkFERjtBQVlELENBeEREOztHQUFNRDs7S0FBQUE7QUEwRE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcjMDAwJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRWYWx1ZSgnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpKTtcbiAgICB9LCA1MDApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFRydXN0IE1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCBWaWRlb0JhY2tnb3VuZCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB2YWx1ZSB9fT48L2Rpdj5cbiAgKTtcblxuICBjb25zdCBWaWRlbyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFNvdW5kIHVybD1cImpvbi5tcGVnXCIgcGxheVN0YXR1cz17U291bmQuc3RhdHVzLlBMQVlJTkd9IGxvb3A9e3RydWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04LzEyXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWlyLXMzLWNkbi1jZi5iZWhhbmNlLm5ldC9wcm9qZWN0X21vZHVsZXMvbWF4XzEyMDAvNWVlZWEzNTUzODk2NTUuNTk4MjJmZjgyNGI3Mi5naWZcIlxuICAgICAgICAgICAgYWx0PVwiSm9uXCJcbiAgICAgICAgICAgIGhlaWdodD17NDk0fVxuICAgICAgICAgICAgd2lkdGg9ezY1OH1cbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VmlkZW9CYWNrZ291bmQgLz5cbiAgICAgICAgICA8VmlkZW8gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiU291bmQiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIkJ1dHRvbiIsIlZpZGVvQmFja2dvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiVmlkZW8iLCJzdGF0dXMiLCJQTEFZSU5HIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});