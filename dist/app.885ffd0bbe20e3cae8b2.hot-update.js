webpackHotUpdate("app",{

/***/ "./src/models/Cv.js":
/*!**************************!*\
  !*** ./src/models/Cv.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tag = '[CvModel]';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getInitCV: function getInitCV() {\n    console.log(tag, 'getCV()');\n\n    if (window.fetch) {\n      return fetch('https://phantombuster.s3.amazonaws.com/L0GHa2EvBCs/32J1x6oMgxrlokkDDjk0zg/result.json', {\n        method: 'get',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).catch(function (err) {\n        throw new Error(err);\n      });\n      console.log(res);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL0N2LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Ddi5qcz83ODZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhZyA9ICdbQ3ZNb2RlbF0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRJbml0Q1YgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhZywgJ2dldENWKCknKTtcclxuICAgICAgICBpZiAod2luZG93LmZldGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9waGFudG9tYnVzdGVyLnMzLmFtYXpvbmF3cy5jb20vTDBHSGEyRXZCQ3MvMzJKMXg2b01neHJsb2trRERqazB6Zy9yZXN1bHQuanNvbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVycikgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/Cv.js\n");

/***/ })

})