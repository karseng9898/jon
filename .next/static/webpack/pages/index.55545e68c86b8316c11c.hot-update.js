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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setInterval(function () {\n      setValue('#' + Math.floor(Math.random() * 16777215).toString(16));\n    }, 500);\n    return function () {\n      clearInterval(value);\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var VideoBackgound = function VideoBackgound() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-screen h-screen\",\n      style: {\n        backgroundColor: value\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"w-8/12\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: \"rounded-md\",\n          src: \"/jon3.gif\",\n          alt: \"Jon\",\n          height: 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_sound__WEBPACK_IMPORTED_MODULE_2__.default, {\n        url: \"jon.mpeg\",\n        playStatus: react_sound__WEBPACK_IMPORTED_MODULE_2__.default.status.PLAYING,\n        loop: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(VideoBackgound, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Video, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"qv2t9alGtpagzxlOK6pt/xdbay4=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixrQkFBd0JKLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQk4sK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkUSxJQUFBQSxXQUFXLENBQUMsWUFBTTtBQUNoQkQsTUFBQUEsUUFBUSxDQUFDLE1BQU1FLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsUUFBM0IsRUFBcUNDLFFBQXJDLENBQThDLEVBQTlDLENBQVAsQ0FBUjtBQUNELEtBRlUsRUFFUixHQUZRLENBQVg7QUFHQSxXQUFPLFlBQU07QUFDWEMsTUFBQUEsYUFBYSxDQUFDUCxLQUFELENBQWI7QUFDRCxLQUZELENBSmMsQ0FPZDtBQUNELEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsTUFBTVEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSx3QkFDYjtBQUFLLGVBQVMsRUFBQyxvREFBZjtBQUFBLDZCQUNFO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JULFVBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxTQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURhO0FBQUEsR0FBZjs7QUFZQSxNQUFNVSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsd0JBQ3JCO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxlQUFlLEVBQUVWO0FBQW5CO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEcUI7QUFBQSxHQUF2Qjs7QUFJQSxNQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHdCQUNFO0FBQUssZUFBUyxFQUFDLHFFQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGFBQUcsRUFBQyxXQUZOO0FBR0UsYUFBRyxFQUFDLEtBSE47QUFJRSxnQkFBTSxFQUFFLEdBSlY7QUFLRSxlQUFLLEVBQUUsR0FMVDtBQU1FLGdCQUFNLEVBQUM7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWNELEdBZkQ7O0FBaUJBLHNCQUNFO0FBQUEsY0FDR2IsSUFBSSxnQkFDSDtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQU8sV0FBRyxFQUFDLFVBQVg7QUFBc0Isa0JBQVUsRUFBRUYsK0RBQWxDO0FBQXdELFlBQUksRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUEsb0JBREcsZ0JBT0gsOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkosbUJBREY7QUFhRCxDQTVERDs7R0FBTUM7O0tBQUFBO0FBOEROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRWYWx1ZSgnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpKTtcbiAgICB9LCA1MDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIGNvbnN0IEJ1dHRvbiA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUcnVzdCBNZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgVmlkZW9CYWNrZ291bmQgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdmFsdWUgfX0+PC9kaXY+XG4gICk7XG5cbiAgY29uc3QgVmlkZW8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOC8xMlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZFwiXG4gICAgICAgICAgICBzcmM9XCIvam9uMy5naWZcIlxuICAgICAgICAgICAgYWx0PVwiSm9uXCJcbiAgICAgICAgICAgIGhlaWdodD17NDk0fVxuICAgICAgICAgICAgd2lkdGg9ezY1OH1cbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U291bmQgdXJsPVwiam9uLm1wZWdcIiBwbGF5U3RhdHVzPXtTb3VuZC5zdGF0dXMuUExBWUlOR30gbG9vcD17dHJ1ZX0gLz5cbiAgICAgICAgICA8VmlkZW9CYWNrZ291bmQgLz5cbiAgICAgICAgICA8VmlkZW8gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiU291bmQiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNsZWFySW50ZXJ2YWwiLCJCdXR0b24iLCJWaWRlb0JhY2tnb3VuZCIsImJhY2tncm91bmRDb2xvciIsIlZpZGVvIiwic3RhdHVzIiwiUExBWUlORyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});