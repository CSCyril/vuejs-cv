webpackHotUpdate("app",{

/***/ "./src/models/Cv.js":
/*!**************************!*\
  !*** ./src/models/Cv.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tag = '[CvModel]';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getInitCV: function getInitCV() {\n    console.log(tag, 'getCV()');\n\n    if (window.fetch) {\n      //return fetch('https://phantombuster.s3.amazonaws.com/L0GHa2EvBCs/32J1x6oMgxrlokkDDjk0zg/result.json', {\n      return fetch('../assets/old_result.json', {\n        method: 'get',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).catch(function (err) {\n        throw new Error(err);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL0N2LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Ddi5qcz83ODZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhZyA9ICdbQ3ZNb2RlbF0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRJbml0Q1YgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhZywgJ2dldENWKCknKTtcclxuICAgICAgICBpZiAod2luZG93LmZldGNoKSB7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGZldGNoKCdodHRwczovL3BoYW50b21idXN0ZXIuczMuYW1hem9uYXdzLmNvbS9MMEdIYTJFdkJDcy8zMkoxeDZvTWd4cmxva2tERGprMHpnL3Jlc3VsdC5qc29uJywge1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goJy4uL2Fzc2V0cy9vbGRfcmVzdWx0Lmpzb24nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IHRocm93IG5ldyBFcnJvcihlcnIpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBWkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/Cv.js\n");

/***/ })

})