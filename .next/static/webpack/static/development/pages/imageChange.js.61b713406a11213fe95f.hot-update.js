webpackHotUpdate("static\\development\\pages\\imageChange.js",{

/***/ "./src/ImageComponent.js":
/*!*******************************!*\
  !*** ./src/ImageComponent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\demo\\next-js-with-react-hooks\\src\\ImageComponent.js";


var ImageComponent = function ImageComponent(_ref) {
  var primaryImg = _ref.primaryImg,
      secImg = _ref.secImg;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      InView = _useState2[0],
      setInView = _useState2[1];

  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandle);
    return function () {
      window.removeEventListener('scroll', scrollHandle);
    };
  });

  var isInView = function isInView() {
    if (imgRef.current) {
      var rect = imgRef.current.getBoundingClientRect();
      return rect.top > window.innerHeight && rect.bottom > window.innerHeight;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    ref: imgRef,
    src: primaryImg,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);

/***/ })

})
//# sourceMappingURL=imageChange.js.61b713406a11213fe95f.hot-update.js.map