webpackHotUpdate("app",{

/***/ "./src/models/Cv.js":
/*!**************************!*\
  !*** ./src/models/Cv.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tag = '[CvModel]';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getInitCV: function getInitCV() {\n    console.log(tag, 'getCV()');\n\n    if (window.fetch) {\n      //return fetch('https://phantombuster.s3.amazonaws.com/L0GHa2EvBCs/32J1x6oMgxrlokkDDjk0zg/result.json', {\n      return fetch('./old_result.json', {\n        method: 'get',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).catch(function (err) {\n        throw new Error(err);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL0N2LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Ddi5qcz83ODZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhZyA9ICdbQ3ZNb2RlbF0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRJbml0Q1YgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhZywgJ2dldENWKCknKTtcclxuICAgICAgICBpZiAod2luZG93LmZldGNoKSB7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGZldGNoKCdodHRwczovL3BoYW50b21idXN0ZXIuczMuYW1hem9uYXdzLmNvbS9MMEdIYTJFdkJDcy8zMkoxeDZvTWd4cmxva2tERGprMHpnL3Jlc3VsdC5qc29uJywge1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goJy4vb2xkX3Jlc3VsdC5qc29uJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4geyB0aHJvdyBuZXcgRXJyb3IoZXJyKSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/Cv.js\n");

/***/ })

})