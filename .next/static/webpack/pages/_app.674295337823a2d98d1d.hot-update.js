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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background: black;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbutton {\\n  font: inherit;\\n  -moz-appearance: none;\\n       appearance: none;\\n  -webkit-appearance: none;\\n  outline: none;\\n  padding: 8px 16px;\\n  color: black;\\n  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.15);\\n  background-color: #ad68d9;\\n  background-image: linear-gradient(#ad68d9 0%, #a960d7 100%);\\n  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.15);\\n  border: none;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  transition: all 0.15s ease-out;\\n}\\n\\nbutton:hover {\\n  transform: scale(1.05);\\n  background-image: linear-gradient(#c391e3 0%, #bf89e1 100%);\\n}\\n\\nbutton:active {\\n  transform: scale(0.95);\\n  opacity: 0.5;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://globals.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iBAAA;EACA,8IAAA;AACF;;AAGA;EACE,cAAA;EACA,qBAAA;AAAF;;AAGA;EACE,sBAAA;AAAF;;AAOA;EAIE,aAAA;EACA,qBAAA;OAAA,gBAAA;EACA,wBAAA;EACA,aAAA;EAEA,iBAAA;EAEA,YAAA;EACA,kDAAA;EAEA,yBAlBW;EAmBX,2DAAA;EACA,uDAAA;EAEA,YAAA;EACA,kBAAA;EAEA,eAAA;EACA,8BAAA;AAZF;;AAcE;EACE,sBAAA;EACA,2DAAA;AAZJ;;AAkBE;EACE,sBAAA;EACA,YAAA;AAhBJ\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background: black;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n$tint-color: #ad68d9;\\n$primary-color: #444;\\n$background-color: #000;\\n\\nbutton {\\n  $gradient-from: $tint-color;\\n  $gradient-to: darken($tint-color, 2%);\\n\\n  font: inherit;\\n  appearance: none;\\n  -webkit-appearance: none;\\n  outline: none;\\n\\n  padding: 8px 16px;\\n\\n  color: black;\\n  text-shadow: 0px 1px 2px rgba(white, 15%);\\n\\n  background-color: $tint-color;\\n  background-image: linear-gradient($gradient-from 0%, $gradient-to 100%);\\n  box-shadow: inset 0px 0px 2px rgba(white, 15%);\\n\\n  border: none;\\n  border-radius: 8px;\\n\\n  cursor: pointer;\\n  transition: all 0.15s ease-out;\\n\\n  &:hover {\\n    transform: scale(1.05);\\n    background-image: linear-gradient(\\n      lighten($gradient-from, 10%) 0%,\\n      lighten($gradient-to, 10%) 100%\\n    );\\n  }\\n\\n  &:active {\\n    transform: scale(0.95);\\n    opacity: 0.5;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxlQUFlLGNBQWMsc0JBQXNCLG1KQUFtSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0IsMEJBQTBCLDBCQUEwQiw2QkFBNkIsa0JBQWtCLHNCQUFzQixpQkFBaUIsdURBQXVELDhCQUE4QixnRUFBZ0UsNERBQTRELGlCQUFpQix1QkFBdUIsb0JBQW9CLG1DQUFtQyxHQUFHLGtCQUFrQiwyQkFBMkIsZ0VBQWdFLEdBQUcsbUJBQW1CLDJCQUEyQixpQkFBaUIsR0FBRyxPQUFPLDhFQUE4RSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSx1Q0FBdUMsZUFBZSxjQUFjLHNCQUFzQix3SkFBd0osR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLDJCQUEyQixHQUFHLHlCQUF5Qix1QkFBdUIsMEJBQTBCLFlBQVksZ0NBQWdDLDBDQUEwQyxvQkFBb0IscUJBQXFCLDZCQUE2QixrQkFBa0Isd0JBQXdCLG1CQUFtQiw4Q0FBOEMsb0NBQW9DLDRFQUE0RSxtREFBbUQsbUJBQW1CLHVCQUF1QixzQkFBc0IsbUNBQW1DLGVBQWUsNkJBQTZCLCtIQUErSCxLQUFLLGdCQUFnQiw2QkFBNkIsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUI7QUFDbGtGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2Nzcz82MWMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ2OGQ5O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNhZDY4ZDkgMCUsICNhOTYwZDcgMTAwJSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjYzM5MWUzIDAlLCAjYmY4OWUxIDEwMCUpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWxzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDhJQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBT0E7RUFJRSxhQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGtEQUFBO0VBRUEseUJBbEJXO0VBbUJYLDJEQUFBO0VBQ0EsdURBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsOEJBQUE7QUFaRjs7QUFjRTtFQUNFLHNCQUFBO0VBQ0EsMkRBQUE7QUFaSjs7QUFrQkU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFoQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuJHRpbnQtY29sb3I6ICNhZDY4ZDk7XFxuJHByaW1hcnktY29sb3I6ICM0NDQ7XFxuJGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuXFxuYnV0dG9uIHtcXG4gICRncmFkaWVudC1mcm9tOiAkdGludC1jb2xvcjtcXG4gICRncmFkaWVudC10bzogZGFya2VuKCR0aW50LWNvbG9yLCAyJSk7XFxuXFxuICBmb250OiBpbmhlcml0O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG5cXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKHdoaXRlLCAxNSUpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRpbnQtY29sb3I7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGdyYWRpZW50LWZyb20gMCUsICRncmFkaWVudC10byAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMnB4IHJnYmEod2hpdGUsIDE1JSk7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIGxpZ2h0ZW4oJGdyYWRpZW50LWZyb20sIDEwJSkgMCUsXFxuICAgICAgbGlnaHRlbigkZ3JhZGllbnQtdG8sIDEwJSkgMTAwJVxcbiAgICApO1xcbiAgfVxcblxcbiAgJjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/globals.scss\n");

/***/ })

});