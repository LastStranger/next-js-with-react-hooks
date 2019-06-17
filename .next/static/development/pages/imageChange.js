(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\imageChange.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChange&absolutePagePath=D%3A%5Cdemo%5Cnext-js-with-react-hooks%5Cpages%5CimageChange.js!./":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChange&absolutePagePath=D%3A%5Cdemo%5Cnext-js-with-react-hooks%5Cpages%5CimageChange.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/imageChange", function() {
      var page = __webpack_require__(/*! ./pages/imageChange.js */ "./pages/imageChange.js")
      if(true) {
        module.hot.accept(/*! ./pages/imageChange.js */ "./pages/imageChange.js", function() {
          if(!next.router.components["/imageChange"]) return
          var updatedPage = __webpack_require__(/*! ./pages/imageChange.js */ "./pages/imageChange.js")
          next.router.update("/imageChange", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_6dc2816e14fab51b8269 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_6dc2816e14fab51b8269 */ "dll-reference dll_6dc2816e14fab51b8269"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imageChange.js":
/*!******************************!*\
  !*** ./pages/imageChange.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageComponent */ "./src/ImageComponent.js");
var _jsxFileName = "D:\\demo\\next-js-with-react-hooks\\pages\\imageChange.js";



var ImageChange = function ImageChange() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/images/one.jpg",
    secImg: "/static/images/two.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChange);

/***/ }),

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
    onMouseOut: function onMouseOut() {
      return imgRef.current.src = primaryImg;
    },
    onMouseOver: function onMouseOver() {
      return imgRef.current.src = secImg;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FimageChange&absolutePagePath=D%3A%5Cdemo%5Cnext-js-with-react-hooks%5Cpages%5CimageChange.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FimageChange&absolutePagePath=D%3A%5Cdemo%5Cnext-js-with-react-hooks%5Cpages%5CimageChange.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChange&absolutePagePath=D%3A%5Cdemo%5Cnext-js-with-react-hooks%5Cpages%5CimageChange.js!./");


/***/ }),

/***/ "dll-reference dll_6dc2816e14fab51b8269":
/*!*******************************************!*\
  !*** external "dll_6dc2816e14fab51b8269" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_6dc2816e14fab51b8269;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imageChange.js.map