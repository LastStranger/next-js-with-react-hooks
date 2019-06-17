webpackHotUpdate("static\\development\\pages\\imageChange.js",{

/***/ "./src/ImageComponent.js":
/*!*******************************!*\
  !*** ./src/ImageComponent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\demo\\next-js-with-react-hooks\\src\\ImageComponent.js";


var ImageComponent = function ImageComponent(_ref) {
  var primaryImg = _ref.primaryImg,
      secImg = _ref.secImg;
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    ref: imgRef,
    src: primaryImg,
    alt: "",
    onMouseOver: function onMouseOver() {
      return imgRef.current;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);

/***/ })

})
//# sourceMappingURL=imageChange.js.e122710f347d8b73b5a1.hot-update.js.map