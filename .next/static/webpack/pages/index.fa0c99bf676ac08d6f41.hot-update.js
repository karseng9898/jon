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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var value1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');\n  var value2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setInterval(function () {\n      value1.current = '#' + Math.floor(Math.random() * 16777215).toString(16);\n      value2.current = '#' + Math.floor(Math.random() * 16777215).toString(16);\n    }, 500);\n    return function () {\n      clearInterval(value1, value2);\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  console.log(value1);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen z-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var VideoBackgound = function VideoBackgound() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-screen h-screen p-5\",\n      style: {\n        backgroundColor: value1.current\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"w-full h-full rounded-3xl\",\n        style: {\n          backgroundColor: value2.current\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"fixed top-2/3 transform -translate-y-1/2 w-full flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"w-7/12\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          draggable: false,\n          className: \"rounded-md\",\n          src: \"/jon3.gif\",\n          alt: \"Jon\",\n          height: !open ? 0 : 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"lil-sprites\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            draggable: false,\n            className: \" opacity-50\",\n            src: \"/jon3.gif\",\n            alt: \"jon\",\n            height: !open ? 0 : 494 / 3,\n            width: 658 / 3,\n            layout: \"fixed\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Video, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(VideoBackgound, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"NH2ahS/yWeackDvXBL9XcwOS1Yc=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQTBCRCxHQTNCRDs7QUE2QkEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU9HQSxJQUFJLGdCQUNIO0FBQUEsNkJBQ0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREcsZ0JBS0gsOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFERjtBQWlCRCxDQXZGRDs7R0FBTUQ7O0tBQUFBO0FBeUZOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB2YWx1ZTEgPSB1c2VSZWYoJycpO1xuICBjb25zdCB2YWx1ZTIgPSB1c2VSZWYoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdmFsdWUxLmN1cnJlbnQgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgdmFsdWUyLmN1cnJlbnQgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodmFsdWUxLCB2YWx1ZTIpO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHZhbHVlMSk7XG5cbiAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW4gei0xMFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVHJ1c3QgTWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IFZpZGVvQmFja2dvdW5kID0gKCkgPT4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIHAtNVwiXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlMS5jdXJyZW50IH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtM3hsXCJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB2YWx1ZTIuY3VycmVudCB9fVxuICAgICAgPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IFZpZGVvID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0yLzMgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcvMTJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHNyYz1cIi9qb24zLmdpZlwiXG4gICAgICAgICAgICBhbHQ9XCJKb25cIlxuICAgICAgICAgICAgaGVpZ2h0PXshb3BlbiA/IDAgOiA0OTR9XG4gICAgICAgICAgICB3aWR0aD17NjU4fVxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbC1zcHJpdGVzXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICBzcmM9XCIvam9uMy5naWZcIlxuICAgICAgICAgICAgICBhbHQ9XCJqb25cIlxuICAgICAgICAgICAgICBoZWlnaHQ9eyFvcGVuID8gMCA6IDQ5NCAvIDN9XG4gICAgICAgICAgICAgIHdpZHRoPXs2NTggLyAzfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZpZGVvIC8+XG4gICAgICB7LyogPFNvdW5kXG4gICAgICAgIHVybD1cImpvbi5tcGVnXCJcbiAgICAgICAgcGxheVN0YXR1cz17IW9wZW4gPyAnJyA6IFNvdW5kLnN0YXR1cy5QTEFZSU5HfVxuICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgLz4gKi99XG4gICAgICB7b3BlbiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VmlkZW9CYWNrZ291bmQgLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkltYWdlIiwiU291bmQiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiQnV0dG9uIiwiVmlkZW9CYWNrZ291bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJWaWRlbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});