"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/globals.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/globals.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background: black;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbutton {\\n  font: inherit;\\n  -moz-appearance: none;\\n       appearance: none;\\n  -webkit-appearance: none;\\n  outline: none;\\n  padding: 8px 16px;\\n  color: black;\\n  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.15);\\n  background-color: #ad68d9;\\n  background-image: linear-gradient(#ad68d9 0%, #a960d7 100%);\\n  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.15);\\n  border: none;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  transition: all 0.15s ease-out;\\n}\\n\\nbutton:hover {\\n  transform: scale(1.05);\\n  background-image: linear-gradient(#c391e3 0%, #bf89e1 100%);\\n}\\n\\nbutton:active {\\n  transform: scale(0.95);\\n  opacity: 0.5;\\n}\\n\\n.video-bg {\\n  background: #ad68d9;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://globals.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iBAAA;EACA,8IAAA;AACF;;AAGA;EACE,cAAA;EACA,qBAAA;AAAF;;AAGA;EACE,sBAAA;AAAF;;AAOA;EAIE,aAAA;EACA,qBAAA;OAAA,gBAAA;EACA,wBAAA;EACA,aAAA;EAEA,iBAAA;EAEA,YAAA;EACA,kDAAA;EAEA,yBAlBW;EAmBX,2DAAA;EACA,uDAAA;EAEA,YAAA;EACA,kBAAA;EAEA,eAAA;EACA,8BAAA;AAZF;;AAcE;EACE,sBAAA;EACA,2DAAA;AAZJ;;AAkBE;EACE,sBAAA;EACA,YAAA;AAhBJ;;AAoBA;EACE,mBAAA;AAjBF\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background: black;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n$tint-color: #ad68d9;\\n$primary-color: #444;\\n$background-color: #000;\\n\\nbutton {\\n  $gradient-from: $tint-color;\\n  $gradient-to: darken($tint-color, 2%);\\n\\n  font: inherit;\\n  appearance: none;\\n  -webkit-appearance: none;\\n  outline: none;\\n\\n  padding: 8px 16px;\\n\\n  color: black;\\n  text-shadow: 0px 1px 2px rgba(white, 15%);\\n\\n  background-color: $tint-color;\\n  background-image: linear-gradient($gradient-from 0%, $gradient-to 100%);\\n  box-shadow: inset 0px 0px 2px rgba(white, 15%);\\n\\n  border: none;\\n  border-radius: 8px;\\n\\n  cursor: pointer;\\n  transition: all 0.15s ease-out;\\n\\n  &:hover {\\n    transform: scale(1.05);\\n    background-image: linear-gradient(\\n      lighten($gradient-from, 10%) 0%,\\n      lighten($gradient-to, 10%) 100%\\n    );\\n  }\\n\\n  &:active {\\n    transform: scale(0.95);\\n    opacity: 0.5;\\n  }\\n}\\n\\n.video-bg {\\n  background: #ad68d9;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxlQUFlLGNBQWMsc0JBQXNCLG1KQUFtSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0IsMEJBQTBCLDBCQUEwQiw2QkFBNkIsa0JBQWtCLHNCQUFzQixpQkFBaUIsdURBQXVELDhCQUE4QixnRUFBZ0UsNERBQTRELGlCQUFpQix1QkFBdUIsb0JBQW9CLG1DQUFtQyxHQUFHLGtCQUFrQiwyQkFBMkIsZ0VBQWdFLEdBQUcsbUJBQW1CLDJCQUEyQixpQkFBaUIsR0FBRyxlQUFlLHdCQUF3QixHQUFHLE9BQU8sOEVBQThFLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLHVDQUF1QyxlQUFlLGNBQWMsc0JBQXNCLHdKQUF3SixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcseUJBQXlCLHVCQUF1QiwwQkFBMEIsWUFBWSxnQ0FBZ0MsMENBQTBDLG9CQUFvQixxQkFBcUIsNkJBQTZCLGtCQUFrQix3QkFBd0IsbUJBQW1CLDhDQUE4QyxvQ0FBb0MsNEVBQTRFLG1EQUFtRCxtQkFBbUIsdUJBQXVCLHNCQUFzQixtQ0FBbUMsZUFBZSw2QkFBNkIsK0hBQStILEtBQUssZ0JBQWdCLDZCQUE2QixtQkFBbUIsS0FBSyxHQUFHLGVBQWUsd0JBQXdCLEdBQUcscUJBQXFCO0FBQzlxRjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLnNjc3M/NjFjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkNjhkOTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjYWQ2OGQ5IDAlLCAjYTk2MGQ3IDEwMCUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2MzOTFlMyAwJSwgI2JmODllMSAxMDAlKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udmlkZW8tYmcge1xcbiAgYmFja2dyb3VuZDogI2FkNjhkOTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsOElBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFPQTtFQUlFLGFBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFFQSxZQUFBO0VBQ0Esa0RBQUE7RUFFQSx5QkFsQlc7RUFtQlgsMkRBQUE7RUFDQSx1REFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSw4QkFBQTtBQVpGOztBQWNFO0VBQ0Usc0JBQUE7RUFDQSwyREFBQTtBQVpKOztBQWtCRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQWhCSjs7QUFvQkE7RUFDRSxtQkFBQTtBQWpCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4kdGludC1jb2xvcjogI2FkNjhkOTtcXG4kcHJpbWFyeS1jb2xvcjogIzQ0NDtcXG4kYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG5cXG5idXR0b24ge1xcbiAgJGdyYWRpZW50LWZyb206ICR0aW50LWNvbG9yO1xcbiAgJGdyYWRpZW50LXRvOiBkYXJrZW4oJHRpbnQtY29sb3IsIDIlKTtcXG5cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcblxcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEod2hpdGUsIDE1JSk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGludC1jb2xvcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZ3JhZGllbnQtZnJvbSAwJSwgJGdyYWRpZW50LXRvIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAycHggcmdiYSh3aGl0ZSwgMTUlKTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgbGlnaHRlbigkZ3JhZGllbnQtZnJvbSwgMTAlKSAwJSxcXG4gICAgICBsaWdodGVuKCRncmFkaWVudC10bywgMTAlKSAxMDAlXFxuICAgICk7XFxuICB9XFxuXFxuICAmOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG59XFxuXFxuLnZpZGVvLWJnIHtcXG4gIGJhY2tncm91bmQ6ICNhZDY4ZDk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/globals.scss\n");

/***/ })

});