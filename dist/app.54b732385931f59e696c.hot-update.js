webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HelloWorld.vue */ \"./src/components/HelloWorld.vue\");\n/* harmony import */ var _models_Message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Message.js */ \"./src/models/Message.js\");\n/* harmony import */ var _models_Cv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Cv.js */ \"./src/models/Cv.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// componenets\n // models\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n  components: {\n    HelloWorld: _components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      greeting: '',\n      resume: ''\n    };\n  },\n  created: function created() {\n    this.getMsg();\n    this.getCV();\n  },\n  methods: {\n    getMsg: function getMsg() {\n      var _this = this;\n\n      return _models_Message_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getInitMsg().then(function (msg) {\n        return _this.greeting = msg;\n      });\n    },\n    getCV: function getCV() {\n      var _this2 = this;\n\n      return _models_Cv_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getInitCV().then(function (cv) {\n        return console.log(cv);\n      }).then(function (cv) {\n        return _this2.resume = cv;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPGltZyBhbHQ9XCJWdWUgbG9nb1wiIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+XHJcbiAgICA8SGVsbG9Xb3JsZCA6bXNnPVwiZ3JlZXRpbmdcIi8+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGNvbXBvbmVuZXRzXHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSdcclxuXHJcbi8vIG1vZGVsc1xyXG5pbXBvcnQgbXNnIGZyb20gJy4vbW9kZWxzL01lc3NhZ2UuanMnXHJcbmltcG9ydCBjdiBmcm9tICcuL21vZGVscy9Ddi5qcydcclxuaW1wb3J0IHsgbG9nIH0gZnJvbSAndXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2FwcCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgSGVsbG9Xb3JsZFxyXG4gIH0sXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBncmVldGluZzogJycsXHJcbiAgICAgIHJlc3VtZTogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gICAgdGhpcy5nZXRNc2coKVxyXG4gICAgdGhpcy5nZXRDVigpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRNc2cgKCkge1xyXG4gICAgICByZXR1cm4gbXNnLmdldEluaXRNc2coKVxyXG4gICAgICAgIC50aGVuKG1zZyA9PiB0aGlzLmdyZWV0aW5nID0gbXNnKVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDViAoKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gY3YuZ2V0SW5pdENWKClcclxuICAgICAgICAudGhlbihjdiA9PiBjb25zb2xlLmxvZyhjdikpXHJcbiAgICAgICAgLnRoZW4oY3YgPT4gdGhpcy5yZXN1bWUgPSBjdilcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiNhcHAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pclwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVhBO0FBZkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})