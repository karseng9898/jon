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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ \"./node_modules/react-sound/lib/index.js\");\n/* harmony import */ var _components_VideoBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoBackground */ \"./components/VideoBackground.jsx\");\n/* harmony import */ var _components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SmallSprites */ \"./components/SmallSprites.jsx\");\n/* harmony import */ var _components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FlipedSmallSprites */ \"./components/FlipedSmallSprites.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kookarseng/Desktop/jonathan/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show1 = _useState2[0],\n      setShow1 = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show2 = _useState3[0],\n      setShow2 = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show3 = _useState4[0],\n      setShow3 = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show4 = _useState5[0],\n      setShow4 = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      show5 = _useState6[0],\n      setShow5 = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      setShow1(true);\n    }, 300);\n    setTimeout(function () {\n      setShow2(true);\n    }, 1700);\n    setTimeout(function () {\n      setShow3(true);\n    }, 2400);\n    setTimeout(function () {\n      setShow4(true);\n    }, 1200);\n    setTimeout(function () {\n      setShow5(true);\n    }, 1800);\n  }, []);\n\n  var Button = function Button() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"flex justify-center items-center w-screen h-screen z-50\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        className: \"z-50\",\n        onClick: function onClick() {\n          setOpen(true);\n        },\n        children: \"Trust Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this);\n  };\n\n  var BigSprite = function BigSprite() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center z-30\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"w-7/12\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          draggable: false,\n          className: \"rounded-md\",\n          src: \"/jon3.gif\",\n          alt: \"Jon\",\n          height: !open ? 0 : 494,\n          width: 658,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(BigSprite, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_VideoBackground__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Button, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }, _this), show1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"top-40\",\n      open: open,\n      size: \"small\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }, _this), show2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"top-4\",\n      open: open,\n      size: \"large\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }, _this), show3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SmallSprites__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \" top-2/3\",\n      open: open,\n      size: \"medium\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }, _this), show4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__.default, {\n      className: \" top-3/4\",\n      open: open,\n      size: \"medium\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }, _this), show5 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_FlipedSmallSprites__WEBPACK_IMPORTED_MODULE_5__.default, {\n      className: \" top-1/3\",\n      open: open,\n      size: \"large\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"o6hQaXmNn4c4Sp20EDL1wJM1zs0=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBLGFBYkosRUFlR0UsS0FBSyxpQkFBSSw4REFBQyw2REFBRDtBQUFjLGVBQVMsRUFBQyxRQUF4QjtBQUFpQyxVQUFJLEVBQUVGLElBQXZDO0FBQTZDLFVBQUksRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZlosRUFnQkdJLEtBQUssaUJBQUksOERBQUMsNkRBQUQ7QUFBYyxlQUFTLEVBQUMsT0FBeEI7QUFBZ0MsVUFBSSxFQUFFSixJQUF0QztBQUE0QyxVQUFJLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCWixFQWlCR00sS0FBSyxpQkFBSSw4REFBQyw2REFBRDtBQUFjLGVBQVMsRUFBQyxVQUF4QjtBQUFtQyxVQUFJLEVBQUVOLElBQXpDO0FBQStDLFVBQUksRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJaLEVBa0JHUSxLQUFLLGlCQUNKLDhEQUFDLG1FQUFEO0FBQXFCLGVBQVMsRUFBQyxVQUEvQjtBQUEwQyxVQUFJLEVBQUVSLElBQWhEO0FBQXNELFVBQUksRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKLEVBcUJHVSxLQUFLLGlCQUNKLDhEQUFDLG1FQUFEO0FBQXFCLGVBQVMsRUFBQyxVQUEvQjtBQUEwQyxVQUFJLEVBQUVWLElBQWhEO0FBQXNELFVBQUksRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUEsa0JBREY7QUEyQkQsQ0FwRkQ7O0dBQU1EOztLQUFBQTtBQXNGTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTb3VuZCBmcm9tICdyZWFjdC1zb3VuZCc7XG5pbXBvcnQgVmlkZW9CYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW9CYWNrZ3JvdW5kJztcbmltcG9ydCBTbWFsbFNwcml0ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9TbWFsbFNwcml0ZXMnO1xuaW1wb3J0IEZsaXBwZWRTbWFsbFNwcml0ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9GbGlwZWRTbWFsbFNwcml0ZXMnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93MSwgc2V0U2hvdzFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvdzIsIHNldFNob3cyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3czLCBzZXRTaG93M10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93NCwgc2V0U2hvdzRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvdzUsIHNldFNob3c1XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdzEodHJ1ZSk7XG4gICAgfSwgMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3cyKHRydWUpO1xuICAgIH0sIDE3MDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdzModHJ1ZSk7XG4gICAgfSwgMjQwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93NCh0cnVlKTtcbiAgICB9LCAxMjAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3c1KHRydWUpO1xuICAgIH0sIDE4MDApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW4gei01MFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJ6LTUwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFRydXN0IE1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCBCaWdTcHJpdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciB6LTMwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03LzEyXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZFwiXG4gICAgICAgICAgICBzcmM9XCIvam9uMy5naWZcIlxuICAgICAgICAgICAgYWx0PVwiSm9uXCJcbiAgICAgICAgICAgIGhlaWdodD17IW9wZW4gPyAwIDogNDk0fVxuICAgICAgICAgICAgd2lkdGg9ezY1OH1cbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QmlnU3ByaXRlIC8+XG5cbiAgICAgIHsvKiA8U291bmRcbiAgICAgICAgdXJsPVwiam9uLm1wZWdcIlxuICAgICAgICBwbGF5U3RhdHVzPXshb3BlbiA/ICcnIDogU291bmQuc3RhdHVzLlBMQVlJTkd9XG4gICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAvPiAqL31cbiAgICAgIHtvcGVuID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxWaWRlb0JhY2tncm91bmQgLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uIC8+XG4gICAgICApfVxuICAgICAge3Nob3cxICYmIDxTbWFsbFNwcml0ZXMgY2xhc3NOYW1lPVwidG9wLTQwXCIgb3Blbj17b3Blbn0gc2l6ZT1cInNtYWxsXCIgLz59XG4gICAgICB7c2hvdzIgJiYgPFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCJ0b3AtNFwiIG9wZW49e29wZW59IHNpemU9XCJsYXJnZVwiIC8+fVxuICAgICAge3Nob3czICYmIDxTbWFsbFNwcml0ZXMgY2xhc3NOYW1lPVwiIHRvcC0yLzNcIiBvcGVuPXtvcGVufSBzaXplPVwibWVkaXVtXCIgLz59XG4gICAgICB7c2hvdzQgJiYgKFxuICAgICAgICA8RmxpcHBlZFNtYWxsU3ByaXRlcyBjbGFzc05hbWU9XCIgdG9wLTMvNFwiIG9wZW49e29wZW59IHNpemU9XCJtZWRpdW1cIiAvPlxuICAgICAgKX1cbiAgICAgIHtzaG93NSAmJiAoXG4gICAgICAgIDxGbGlwcGVkU21hbGxTcHJpdGVzIGNsYXNzTmFtZT1cIiB0b3AtMS8zXCIgb3Blbj17b3Blbn0gc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSW1hZ2UiLCJTb3VuZCIsIlZpZGVvQmFja2dyb3VuZCIsIlNtYWxsU3ByaXRlcyIsIkZsaXBwZWRTbWFsbFNwcml0ZXMiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJzaG93MSIsInNldFNob3cxIiwic2hvdzIiLCJzZXRTaG93MiIsInNob3czIiwic2V0U2hvdzMiLCJzaG93NCIsInNldFNob3c0Iiwic2hvdzUiLCJzZXRTaG93NSIsInNldFRpbWVvdXQiLCJCdXR0b24iLCJCaWdTcHJpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});