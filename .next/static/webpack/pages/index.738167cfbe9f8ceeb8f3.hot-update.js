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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#000'),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setInterval(function () {\n      setValue('#' + Math.floor(Math.random() * 16777215).toString(16));\n    }, 1000);\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_sound__WEBPACK_IMPORTED_MODULE_2__.default, {\n        url: \"jon.mpeg\",\n        playStatus: react_sound__WEBPACK_IMPORTED_MODULE_2__.default.status.PLAYING,\n        loop: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"video-bg flex justify-center items-center w-screen h-screen\",\n        style: {\n          backgroundColor: value\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"w-8/12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            className: \"rounded-md\",\n            src: \"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif\",\n            alt: \"Jon\",\n            height: 494,\n            width: 658,\n            layout: \"responsive\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Video, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 20\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 32\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"WaFwQCGFpJeSIinOrkiAgqPAh/k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixrQkFBd0JKLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQk4sK0NBQVEsQ0FBQyxNQUFELENBQWxDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSxXQUFXLENBQUMsWUFBTTtBQUNoQkQsTUFBQUEsUUFBUSxDQUFDLE1BQU1FLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsUUFBM0IsRUFBcUNDLFFBQXJDLENBQThDLEVBQTlDLENBQVAsQ0FBUjtBQUNELEtBRlUsRUFFUixJQUZRLENBQVg7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsd0JBQ2I7QUFBSyxlQUFTLEVBQUMsb0RBQWY7QUFBQSw2QkFDRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiUixVQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYTtBQUFBLEdBQWY7O0FBWUEsTUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQix3QkFDRTtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQU8sV0FBRyxFQUFDLFVBQVg7QUFBc0Isa0JBQVUsRUFBRVosK0RBQWxDO0FBQXdELFlBQUksRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLGlCQUFTLEVBQUMsNkRBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRWUsVUFBQUEsZUFBZSxFQUFFWDtBQUFuQixTQUZUO0FBQUEsK0JBSUU7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLHFCQUFTLEVBQUMsWUFEWjtBQUVFLGVBQUcsRUFBQyw2RkFGTjtBQUdFLGVBQUcsRUFBQyxLQUhOO0FBSUUsa0JBQU0sRUFBRSxHQUpWO0FBS0UsaUJBQUssRUFBRSxHQUxUO0FBTUUsa0JBQU0sRUFBQztBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBREY7QUFxQkQsR0F0QkQ7O0FBd0JBLHNCQUFPO0FBQUEsY0FBR0YsSUFBSSxnQkFBRyw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxnQkFBZSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEIsbUJBQVA7QUFDRCxDQS9DRDs7R0FBTUQ7O0tBQUFBO0FBaUROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnIzAwMCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VmFsdWUoJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KSk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBCdXR0b24gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlblwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVHJ1c3QgTWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IFZpZGVvID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U291bmQgdXJsPVwiam9uLm1wZWdcIiBwbGF5U3RhdHVzPXtTb3VuZC5zdGF0dXMuUExBWUlOR30gbG9vcD17dHJ1ZX0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLWJnIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOC8xMlwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL21pci1zMy1jZG4tY2YuYmVoYW5jZS5uZXQvcHJvamVjdF9tb2R1bGVzL21heF8xMjAwLzVlZWVhMzU1Mzg5NjU1LjU5ODIyZmY4MjRiNzIuZ2lmXCJcbiAgICAgICAgICAgICAgYWx0PVwiSm9uXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs0OTR9XG4gICAgICAgICAgICAgIHdpZHRoPXs2NTh9XG4gICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206MTMwJTtwb3NpdGlvbjpyZWxhdGl2ZTtcIj48aWZyYW1lIHNyYz1cImh0dHBzOi8vZ2lwaHkuY29tL2VtYmVkL1NiSnFkMFF5ZjJzYzhcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiIGZyYW1lQm9yZGVyPVwiMFwiIGNsYXNzPVwiZ2lwaHktZW1iZWRcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+PC9kaXY+PHA+PGEgaHJlZj1cImh0dHBzOi8vZ2lwaHkuY29tL2dpZnMvbmVpbHNhbmRlcnMtY2FuZHktc3VnYXItU2JKcWQwUXlmMnNjOFwiPnZpYSBHSVBIWTwvYT48L3A+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIDw+e29wZW4gPyA8VmlkZW8gLz4gOiA8QnV0dG9uIC8+fTwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlNvdW5kIiwiSG9tZSIsIm9wZW4iLCJzZXRPcGVuIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldEludGVydmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJCdXR0b24iLCJWaWRlbyIsInN0YXR1cyIsIlBMQVlJTkciLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});