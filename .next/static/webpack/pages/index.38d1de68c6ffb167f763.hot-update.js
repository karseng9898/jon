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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var _components_VideoBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoBackground */ \"./components/VideoBackground.jsx\");\n/* harmony import */ var _components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SmallSprites */ \"./components/SmallSprites.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show1 = _useState2[0],\n      setShow1 = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show2 = _useState3[0],\n      setShow2 = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show3 = _useState4[0],\n      setShow3 = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      setShow1(true);\n    }, 300);\n    setTimeout(function () {\n      setShow2(true);\n    }, 700);\n    setTimeout(function () {\n      setShow2(true);\n    }, 1000);\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen z-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var Video = function Video() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"w-7/12\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          draggable: false,\n          className: \"rounded-md\",\n          src: \"/jon3.gif\",\n          alt: \"Jon\",\n          height: !open ? 0 : 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Video, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_VideoBackground__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n        className: \"top-40\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, _this), setTimeout(function () {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n          className: \"top-4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 15\n        }, _this);\n      }, 300), setTimeout(function () {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n          className: \"top-4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 15\n        }, _this);\n      }, 300)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"jGdBAALkMtvlt9hKCKxCtPfKq9Y=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztHQUFNVDs7S0FBQUE7QUFnRk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU291bmQgZnJvbSAncmVhY3Qtc291bmQnO1xuaW1wb3J0IFZpZGVvQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvQmFja2dyb3VuZCc7XG5pbXBvcnQgU21hbGxTcHJpdGVzIGZyb20gJy4uL2NvbXBvbmVudHMvU21hbGxTcHJpdGVzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvdzEsIHNldFNob3cxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3cyLCBzZXRTaG93Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93Mywgc2V0U2hvdzNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93MSh0cnVlKTtcbiAgICB9LCAzMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdzIodHJ1ZSk7XG4gICAgfSwgNzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3cyKHRydWUpO1xuICAgIH0sIDEwMDApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW4gei0xMFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVHJ1c3QgTWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IFZpZGVvID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcvMTJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIHNyYz1cIi9qb24zLmdpZlwiXG4gICAgICAgICAgICBhbHQ9XCJKb25cIlxuICAgICAgICAgICAgaGVpZ2h0PXshb3BlbiA/IDAgOiA0OTR9XG4gICAgICAgICAgICB3aWR0aD17NjU4fVxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxWaWRlbyAvPlxuICAgICAgey8qIDxTb3VuZFxuICAgICAgICB1cmw9XCJqb24ubXBlZ1wiXG4gICAgICAgIHBsYXlTdGF0dXM9eyFvcGVuID8gJycgOiBTb3VuZC5zdGF0dXMuUExBWUlOR31cbiAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgIC8+ICovfVxuICAgICAge29wZW4gPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFZpZGVvQmFja2dyb3VuZCAvPlxuICAgICAgICAgIDxTbWFsbFNwcml0ZXMgY2xhc3NOYW1lPVwidG9wLTQwXCIgLz5cbiAgICAgICAgICB7c2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IChcbiAgICAgICAgICAgICAgPFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCJ0b3AtNFwiIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgMzAwXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IChcbiAgICAgICAgICAgICAgPFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCJ0b3AtNFwiIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgMzAwXG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkltYWdlIiwiU291bmQiLCJWaWRlb0JhY2tncm91bmQiLCJTbWFsbFNwcml0ZXMiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJzaG93MSIsInNldFNob3cxIiwic2hvdzIiLCJzZXRTaG93MiIsInNob3czIiwic2V0U2hvdzMiLCJzZXRUaW1lb3V0IiwiQnV0dG9uIiwiVmlkZW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});