webpackHotUpdate("static\\development\\pages\\imageScroll.js",{

/***/ "./pages/imageScroll.js":
/*!******************************!*\
  !*** ./pages/imageScroll.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageComponent */ "./src/ImageComponent.js");
/* harmony import */ var _src_ImageComponentScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageComponentScroll */ "./src/ImageComponentScroll.js");
var _jsxFileName = "D:\\demo\\next-js-with-react-hooks\\pages\\imageScroll.js";




var ImageScroll = function ImageScroll() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageComponentScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryImg: "/static/images/one.jpg",
    secImg: "/static/images/two.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageComponentScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryImg: "/static/images/one.jpg",
    secImg: "/static/images/two.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageComponentScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryImg: "/static/images/one.jpg",
    secImg: "/static/images/two.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageComponentScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryImg: "/static/images/one.jpg",
    secImg: "/static/images/two.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageComponentScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primaryImg: "/static/images/one.jpg",
    secImg: "/static/images/two.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageScroll);

/***/ }),

/***/ "./src/ImageComponentScroll.js":
/*!*************************************!*\
  !*** ./src/ImageComponentScroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\demo\\next-js-with-react-hooks\\src\\ImageComponentScroll.js";


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
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandle = function scrollHandle() {
    setInView(isInView());
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    ref: imgRef,
    src: primaryImg,
    alt: "",
    style: {
      maxWidth: '500px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);

/***/ })

})
//# sourceMappingURL=imageScroll.js.e165cc02ab0169977c53.hot-update.js.map