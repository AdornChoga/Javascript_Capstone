/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  gap: 12px;\r\n  font-size: 10px;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.fa-film {\r\n  font-size: 5rem;\r\n  color: darkblue;\r\n}\r\n\r\nnav ul li + li {\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.focussed {\r\n  text-decoration: underline blue;\r\n}\r\n\r\nmain {\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.films {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.image-container {\r\n  width: 100%;\r\n}\r\n\r\n.films li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  border: 0.2rem solid red;\r\n  text-align: center;\r\n  font-size: 1vw;\r\n}\r\n\r\n.film-image {\r\n  width: 22vw;\r\n  height: 24vw;\r\n}\r\n\r\n.film-info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: blue;\r\n}\r\n\r\n.fa-heart:active {\r\n  color: red;\r\n  transform: scale(1.2);\r\n  -webkit-transform: scale(1.4);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.comments {\r\n  align-self: flex-start;\r\n  margin: 0 0 1rem 1rem;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  padding: 0.3em;\r\n  border: solid;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border: 0.2rem solid black;\r\n  background-color: white;\r\n}\r\n\r\n#txt-area {\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  padding-left: 2em;\r\n}\r\n\r\n#footer-bg {\r\n  height: 3rem;\r\n  background-color: grey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.comment-list {\r\n  width: 50%;\r\n  height: 95%;\r\n  outline: 0.1rem outset;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comment-list li {\r\n  word-wrap: break-word;\r\n}\r\n\r\n#username, #comment{\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 0.2rem solid;\r\n}\r\n\r\n#user {\r\n  font-size: 1.2rem;\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n#user-comment {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.name-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.656);\r\n  display: none;\r\n  padding: 4rem;\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window {\r\n  position: relative;\r\n  width: 80%;\r\n  padding: 20px;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window > h2 {\r\n  font-size: 2rem;\r\n  align-self: center;\r\n  text-decoration: underline red;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  border: solid;\r\n  height: 24vw;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.description p {\r\n  font-size: 1.7rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.description > span {\r\n  font-size: 1.5rem;\r\n  font-family: sans-serif;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-comments {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  text-decoration: underline;\r\n  padding: 30px;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n.close-icon:hover {\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  border: solid;\r\n  width: 60%;\r\n  justify-content: space-around;\r\n  gap: 0.9rem;\r\n  height: 30rem;\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  gap: 12px;\r\n  font-size: 10px;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.fa-film {\r\n  font-size: 5rem;\r\n  color: darkblue;\r\n}\r\n\r\nnav ul li + li {\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.focussed {\r\n  text-decoration: underline blue;\r\n}\r\n\r\nmain {\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.films {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.image-container {\r\n  width: 100%;\r\n}\r\n\r\n.films li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  border: 0.2rem solid red;\r\n  text-align: center;\r\n  font-size: 1vw;\r\n}\r\n\r\n.film-image {\r\n  width: 22vw;\r\n  height: 24vw;\r\n}\r\n\r\n.film-info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: blue;\r\n}\r\n\r\n.fa-heart:active {\r\n  color: red;\r\n  transform: scale(1.2);\r\n  -webkit-transform: scale(1.4);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.comments {\r\n  align-self: flex-start;\r\n  margin: 0 0 1rem 1rem;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  padding: 0.3em;\r\n  border: solid;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border: 0.2rem solid black;\r\n  background-color: white;\r\n}\r\n\r\n#txt-area {\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  padding-left: 2em;\r\n}\r\n\r\n#footer-bg {\r\n  height: 3rem;\r\n  background-color: grey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.comment-list {\r\n  width: 50%;\r\n  height: 95%;\r\n  outline: 0.1rem outset;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comment-list li {\r\n  word-wrap: break-word;\r\n}\r\n\r\n#username, #comment{\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 0.2rem solid;\r\n}\r\n\r\n#user {\r\n  font-size: 1.2rem;\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n#user-comment {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.name-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.656);\r\n  display: none;\r\n  padding: 4rem;\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window {\r\n  position: relative;\r\n  width: 80%;\r\n  padding: 20px;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window > h2 {\r\n  font-size: 2rem;\r\n  align-self: center;\r\n  text-decoration: underline red;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  border: solid;\r\n  height: 24vw;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.description p {\r\n  font-size: 1.7rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.description > span {\r\n  font-size: 1.5rem;\r\n  font-family: sans-serif;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-comments {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  text-decoration: underline;\r\n  padding: 30px;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n.close-icon:hover {\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  border: solid;\r\n  width: 60%;\r\n  justify-content: space-around;\r\n  gap: 0.9rem;\r\n  height: 30rem;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/apicomment.js":
/*!***********************************!*\
  !*** ./src/modules/apicomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'A6awKRj5ONHGw5twcKDH';
const postComment = async (comment) => {
  await fetch(`${baseUrl}${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};
const getComment = async (id) => {
  const response = await fetch(`${baseUrl}${appId}/comments?item_id=${id}`);
  const result = await response.json();
  return result;
};


/***/ }),

/***/ "./src/modules/appUI.js":
/*!******************************!*\
  !*** ./src/modules/appUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMovies": () => (/* binding */ displayMovies),
/* harmony export */   "displaySeries": () => (/* binding */ displaySeries)
/* harmony export */ });
/* harmony import */ var _series_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./series.js */ "./src/modules/series.js");
/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.js */ "./src/modules/movies.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _html_templates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html_templates.js */ "./src/modules/html_templates.js");






const displayMovies = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  const likesArray = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
  const result = (0,_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])().map(async (movie, index) => {
    const movieData = await movie;
    const [likes] = likesArray.filter((n) => Number(n.item_id) === movieData.id);
    filmsContainer.innerHTML += _html_templates_js__WEBPACK_IMPORTED_MODULE_4__.filmTemplate(movieData, index, likes.likes);
    const btn = document.querySelectorAll('.comments');
    const likesNodes = document.querySelectorAll('.likes');
    return { buttons: btn, likesIcons: likesNodes };
  });
  const eventsElements = result[result.length - 1];
  const commentsButtons = (await eventsElements).buttons;
  const { likesIcons } = await eventsElements;
  (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.filmLikes)(likesIcons);
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentsButtons, 'movies');
};

const displaySeries = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  const likesArray = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
  const result = (0,_series_js__WEBPACK_IMPORTED_MODULE_0__["default"])().map(async (series, index) => {
    const seriesData = await series;
    const [likes] = likesArray.filter((n) => Number(n.item_id) === seriesData.id);
    const numLikes = likes !== undefined ? likes.likes : 0;
    filmsContainer.innerHTML += _html_templates_js__WEBPACK_IMPORTED_MODULE_4__.filmTemplate(seriesData, index, numLikes);
    const btn = document.querySelectorAll('.comments');
    const likesNodes = document.querySelectorAll('.likes');
    return { buttons: btn, likesIcons: likesNodes };
  });
  const eventsElements = result[result.length - 1];
  const commentsButtons = (await eventsElements).buttons;
  const { likesIcons } = await eventsElements;
  (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.filmLikes)(likesIcons);
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentsButtons, 'series');
};




/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.js */ "./src/modules/movies.js");
/* harmony import */ var _series_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./series.js */ "./src/modules/series.js");
/* harmony import */ var _html_templates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html_templates.js */ "./src/modules/html_templates.js");




const comments = (data, type) => {
  data.forEach(async (btn) => {
    const filmData = type === 'movies' ? await (0,_movies_js__WEBPACK_IMPORTED_MODULE_0__["default"])()[btn.id] : await (0,_series_js__WEBPACK_IMPORTED_MODULE_1__["default"])()[btn.id];
    btn.addEventListener('click', () => {
      _html_templates_js__WEBPACK_IMPORTED_MODULE_2__.popUpTemplate(filmData);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appUI.js */ "./src/modules/appUI.js");


const movieSection = document.querySelector('.movie-sect');
const seriesSection = document.querySelector('.series-sect');

const events = () => {
  window.addEventListener('load', () => {
    _appUI_js__WEBPACK_IMPORTED_MODULE_0__.displayMovies();
    movieSection.classList.add('focussed');
  });

  movieSection.addEventListener('click', () => {
    movieSection.classList.add('focussed');
    seriesSection.classList.remove('focussed');
    _appUI_js__WEBPACK_IMPORTED_MODULE_0__.displayMovies();
  });

  seriesSection.addEventListener('click', () => {
    seriesSection.classList.add('focussed');
    movieSection.classList.remove('focussed');
    _appUI_js__WEBPACK_IMPORTED_MODULE_0__.displaySeries();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/modules/html_templates.js":
/*!***************************************!*\
  !*** ./src/modules/html_templates.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filmTemplate": () => (/* binding */ filmTemplate),
/* harmony export */   "popUpTemplate": () => (/* binding */ popUpTemplate)
/* harmony export */ });
/* harmony import */ var _apicomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apicomment.js */ "./src/modules/apicomment.js");


const filmTemplate = (info, index, numLikes) => `
<li>
  <div class='image-container'>
    <img src=${info.image} class='film-image'>
  </div>
  <div class='film-info'>
    <h1 class='film-title'>${info.name}</h1>
    <div class='likes'>
      <i class='far fa-heart' id='${info.id}'></i>
      <span class='likes'>${numLikes} ${Number(numLikes) === 1 ? 'Like' : 'Likes'} </span>
    </div>
  </div>
  <button type='button' class='comments' id='${index}'>Comments</button>
</li>
`;

const popUpTemplate = async (movie) => {
  const popUpContainer = document.querySelector('.popup-container');
  const commentData = await (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(movie.id);
  const commentItems = () => {
    if (!Array.isArray(commentData)) {
      return '<li>No comment</li>';
    }
    const commentTemplate =
    commentData.map((comment) => `<li>
      <span id="user">${comment.username}:</span>
      <span id="user-comment">${comment.comment}</span>
    </li>`);
    return commentTemplate.join('');
  };

  popUpContainer.innerHTML = `
  <div class='popup-window'>
    <h2 class='movie-title'>${movie.name}</h2>
    <svg style='width:24px;height:24px' viewBox='0 0 24 24' class='close-icon'>
      <path fill='currentColor' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
    </svg>
    <div class='movie-info'>
      <img src=${movie.image} class='film-image'>
      <div class='description'>
        <span><b>Average Runtime:</b> ${movie.runtime} minutes</span>
        <span><b>Ended:</b> ${movie.ended} </span>
        <span><b>Summary:</b> ${movie.description}</span>
      </div>
    </div>
    <div class='popup-comments'>Comments</div>
    
  <form class='form-submit'>
  <div class='form-container'>
  <ul class='comment-list'>${commentItems()}</ul>
   <div class='name-field'>
    <input type='text' id='username' placeholder='your name'>
    <textarea name='textarea' id='comment' cols='10' rows='2' placeholder='write a comment'></textarea>
    <button type='submit'>Comment</button>
    </div>
    </div>
  </form>
  </div>
  `;

  popUpContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-icon');
  closePopup.addEventListener('click', () => { popUpContainer.style.display = 'none'; });

  const form = document.querySelector('.form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const listContainer = document.querySelector('.comment-list');
    const comment = {
      username: form.elements.username.value.trim(),
      comment: form.elements.comment.value.trim(),
      item_id: movie.id,
    };

    form.reset();
    await (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(comment);
    const commentInfo = await (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(comment.item_id);
    listContainer.innerHTML = '';
    commentInfo.forEach((comment) => {
      const listItem = `
      <li>
        <span id="user">${comment.username}:</span>
        <span id="user-comment">${comment.comment}</span>
      </li>`;
      listContainer.innerHTML += listItem;
    });
  });
};



/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filmLikes": () => (/* binding */ filmLikes),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'A6awKRj5ONHGw5twcKDH';

const postLikes = async (id, icon, content) => {
  await fetch(`${baseUrl}${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const likesArray = await getLikes();
  const [likes] = likesArray.filter((n) => Number(n.item_id) === Number(icon.id));
  content.innerHTML = `${likes.likes} ${Number(likes.likes) === 1 ? 'Like' : 'Likes'}`;
};

const getLikes = async () => {
  const response = fetch(`${baseUrl}${appId}/likes`);
  const likesData = (await response).json();
  return likesData;
};

const filmLikes = async (likesIcons) => {
  likesIcons.forEach((icon) => {
    icon.addEventListener('click', async (e) => {
      if(e.target.classList.contains('fa-heart')) {
        postLikes(e.target.id, e.target,icon.children[1]);
      }
    });
  });
};



/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filmsID = [314142, 79551, 343435, 377673, 80270, 248596];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const getMovies = () => {
  const result = filmsID.map(async (id) => {
    const data = fetch(`${baseUrl}${id}`);
    const respone = (await data).json();
    const movie = await respone;
    const obj = {
      name: movie.name,
      image: movie.image.original,
      description: movie.summary,
      runtime: movie.averageRuntime,
      ended: movie.ended,
      id: movie.id,
    };
    return obj;
  });
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);


/***/ }),

/***/ "./src/modules/series.js":
/*!*******************************!*\
  !*** ./src/modules/series.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filmsID = [276562, 350665, 396564, 359264, 364928, 279536];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const getSeries = () => {
  const result = filmsID.map(async (id) => {
    const data = fetch(`${baseUrl}${id}`);
    const respone = (await data).json();
    const series = await respone;
    const obj = {
      name: series.name,
      image: series.image.original,
      description: series.summary,
      runtime: series.averageRuntime,
      ended: series.ended,
      id: series.id,
    };
    return obj;
  });
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSeries);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/events.js */ "./src/modules/events.js");



(0,_modules_events_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsK0JBQStCLHVCQUF1QixLQUFLLFdBQVcsNkJBQTZC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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDb0I7QUFDekM7QUFDQSw4REFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaWNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwcFVJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9odG1sX3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL21vdmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvc2VyaWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZmlsbSB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBjb2xvcjogZGFya2JsdWU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSArIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3Vzc2VkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGJsdWU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbG1zIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5maWxtcyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCByZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDF2dztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbG0taW1hZ2Uge1xcclxcbiAgd2lkdGg6IDIydnc7XFxyXFxuICBoZWlnaHQ6IDI0dnc7XFxyXFxufVxcclxcblxcclxcbi5maWxtLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC1hcmVhIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWJnIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDk1JTtcXHJcXG4gIG91dGxpbmU6IDAuMXJlbSBvdXRzZXQ7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3QgbGkge1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlcm5hbWUsICNjb21tZW50e1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1jb21tZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NTYpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDRyZW07XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXdpbmRvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXdpbmRvdyA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIGhlaWdodDogMjR2dztcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uID4gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnRzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDFyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBib3JkZXI6IHNvbGlkO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZ2FwOiAwLjlyZW07XFxyXFxuICBoZWlnaHQ6IDMwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpb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akIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5mYS1maWxtIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpICsgbGkge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNzZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbXMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbG1zIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJlZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMjJ2dztcXHJcXG4gIGhlaWdodDogMjR2dztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbG0taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDphY3RpdmUge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBib3JkZXI6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LWFyZWEge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItYmcge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgb3V0bGluZTogMC4xcmVtIG91dHNldDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbiN1c2VybmFtZSwgI2NvbW1lbnR7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4ycmVtIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlciB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWNvbW1lbnQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtZmllbGQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nik7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogNHJlbTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93ID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBib3JkZXI6IHNvbGlkO1xcclxcbiAgaGVpZ2h0OiAyNHZ3O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gPiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudHMge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGJvcmRlcjogc29saWQ7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBnYXA6IDAuOXJlbTtcXHJcXG4gIGhlaWdodDogMzByZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xyXG5jb25zdCBhcHBJZCA9ICdBNmF3S1JqNU9OSEd3NXR3Y0tESCc7XHJcbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGNvbW1lbnQpID0+IHtcclxuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2NvbW1lbnRzYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudCksXHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnQgeyBnZXRDb21tZW50LCBwb3N0Q29tbWVudCB9OyIsImltcG9ydCBnZXRTZXJpZXMgZnJvbSAnLi9zZXJpZXMuanMnO1xyXG5pbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW92aWVzLmpzJztcclxuaW1wb3J0IGNvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xyXG5pbXBvcnQgeyBmaWxtTGlrZXMsIGdldExpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XHJcbmltcG9ydCAqIGFzIFRlbXBsYXRlcyBmcm9tICcuL2h0bWxfdGVtcGxhdGVzLmpzJztcclxuXHJcbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZmlsbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsbXMnKTtcclxuICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcclxuICBjb25zdCByZXN1bHQgPSBnZXRNb3ZpZXMoKS5tYXAoYXN5bmMgKG1vdmllLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgbW92aWU7XHJcbiAgICBjb25zdCBbbGlrZXNdID0gbGlrZXNBcnJheS5maWx0ZXIoKG4pID0+IE51bWJlcihuLml0ZW1faWQpID09PSBtb3ZpZURhdGEuaWQpO1xyXG4gICAgZmlsbXNDb250YWluZXIuaW5uZXJIVE1MICs9IFRlbXBsYXRlcy5maWxtVGVtcGxhdGUobW92aWVEYXRhLCBpbmRleCwgbGlrZXMubGlrZXMpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XHJcbiAgICBjb25zdCBsaWtlc05vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XHJcbiAgICByZXR1cm4geyBidXR0b25zOiBidG4sIGxpa2VzSWNvbnM6IGxpa2VzTm9kZXMgfTtcclxuICB9KTtcclxuICBjb25zdCBldmVudHNFbGVtZW50cyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XHJcbiAgY29uc3QgY29tbWVudHNCdXR0b25zID0gKGF3YWl0IGV2ZW50c0VsZW1lbnRzKS5idXR0b25zO1xyXG4gIGNvbnN0IHsgbGlrZXNJY29ucyB9ID0gYXdhaXQgZXZlbnRzRWxlbWVudHM7XHJcbiAgZmlsbUxpa2VzKGxpa2VzSWNvbnMpO1xyXG4gIGNvbW1lbnRzKGNvbW1lbnRzQnV0dG9ucywgJ21vdmllcycpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVNlcmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBmaWxtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtcycpO1xyXG4gIGZpbG1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnN0IGxpa2VzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGdldFNlcmllcygpLm1hcChhc3luYyAoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGF3YWl0IHNlcmllcztcclxuICAgIGNvbnN0IFtsaWtlc10gPSBsaWtlc0FycmF5LmZpbHRlcigobikgPT4gTnVtYmVyKG4uaXRlbV9pZCkgPT09IHNlcmllc0RhdGEuaWQpO1xyXG4gICAgY29uc3QgbnVtTGlrZXMgPSBsaWtlcyAhPT0gdW5kZWZpbmVkID8gbGlrZXMubGlrZXMgOiAwO1xyXG4gICAgZmlsbXNDb250YWluZXIuaW5uZXJIVE1MICs9IFRlbXBsYXRlcy5maWxtVGVtcGxhdGUoc2VyaWVzRGF0YSwgaW5kZXgsIG51bUxpa2VzKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xyXG4gICAgY29uc3QgbGlrZXNOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xyXG4gICAgcmV0dXJuIHsgYnV0dG9uczogYnRuLCBsaWtlc0ljb25zOiBsaWtlc05vZGVzIH07XHJcbiAgfSk7XHJcbiAgY29uc3QgZXZlbnRzRWxlbWVudHMgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xyXG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9ucyA9IChhd2FpdCBldmVudHNFbGVtZW50cykuYnV0dG9ucztcclxuICBjb25zdCB7IGxpa2VzSWNvbnMgfSA9IGF3YWl0IGV2ZW50c0VsZW1lbnRzO1xyXG4gIGZpbG1MaWtlcyhsaWtlc0ljb25zKTtcclxuICBjb21tZW50cyhjb21tZW50c0J1dHRvbnMsICdzZXJpZXMnKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlNb3ZpZXMsIGRpc3BsYXlTZXJpZXMgfTtcclxuIiwiaW1wb3J0IGdldE1vdmllcyBmcm9tICcuL21vdmllcy5qcyc7XHJcbmltcG9ydCBnZXRTZXJpZXMgZnJvbSAnLi9zZXJpZXMuanMnO1xyXG5pbXBvcnQgKiBhcyBUZW1wbGF0ZXMgZnJvbSAnLi9odG1sX3RlbXBsYXRlcy5qcyc7XHJcblxyXG5jb25zdCBjb21tZW50cyA9IChkYXRhLCB0eXBlKSA9PiB7XHJcbiAgZGF0YS5mb3JFYWNoKGFzeW5jIChidG4pID0+IHtcclxuICAgIGNvbnN0IGZpbG1EYXRhID0gdHlwZSA9PT0gJ21vdmllcycgPyBhd2FpdCBnZXRNb3ZpZXMoKVtidG4uaWRdIDogYXdhaXQgZ2V0U2VyaWVzKClbYnRuLmlkXTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVGVtcGxhdGVzLnBvcFVwVGVtcGxhdGUoZmlsbURhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50czsiLCJpbXBvcnQgKiBhcyBVSSBmcm9tICcuL2FwcFVJLmpzJztcclxuXHJcbmNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1zZWN0Jyk7XHJcbmNvbnN0IHNlcmllc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyaWVzLXNlY3QnKTtcclxuXHJcbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIFVJLmRpc3BsYXlNb3ZpZXMoKTtcclxuICAgIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1c3NlZCcpO1xyXG4gIH0pO1xyXG5cclxuICBtb3ZpZVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcclxuICAgIHNlcmllc1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNzZWQnKTtcclxuICAgIFVJLmRpc3BsYXlNb3ZpZXMoKTtcclxuICB9KTtcclxuXHJcbiAgc2VyaWVzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNlcmllc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcclxuICAgIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c3NlZCcpO1xyXG4gICAgVUkuZGlzcGxheVNlcmllcygpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50IH0gZnJvbSAnLi9hcGljb21tZW50LmpzJztcclxuXHJcbmNvbnN0IGZpbG1UZW1wbGF0ZSA9IChpbmZvLCBpbmRleCwgbnVtTGlrZXMpID0+IGBcclxuPGxpPlxyXG4gIDxkaXYgY2xhc3M9J2ltYWdlLWNvbnRhaW5lcic+XHJcbiAgICA8aW1nIHNyYz0ke2luZm8uaW1hZ2V9IGNsYXNzPSdmaWxtLWltYWdlJz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPSdmaWxtLWluZm8nPlxyXG4gICAgPGgxIGNsYXNzPSdmaWxtLXRpdGxlJz4ke2luZm8ubmFtZX08L2gxPlxyXG4gICAgPGRpdiBjbGFzcz0nbGlrZXMnPlxyXG4gICAgICA8aSBjbGFzcz0nZmFyIGZhLWhlYXJ0JyBpZD0nJHtpbmZvLmlkfSc+PC9pPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nbGlrZXMnPiR7bnVtTGlrZXN9ICR7TnVtYmVyKG51bUxpa2VzKSA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9IDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY29tbWVudHMnIGlkPScke2luZGV4fSc+Q29tbWVudHM8L2J1dHRvbj5cclxuPC9saT5cclxuYDtcclxuXHJcbmNvbnN0IHBvcFVwVGVtcGxhdGUgPSBhc3luYyAobW92aWUpID0+IHtcclxuICBjb25zdCBwb3BVcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICBjb25zdCBjb21tZW50RGF0YSA9IGF3YWl0IGdldENvbW1lbnQobW92aWUuaWQpO1xyXG4gIGNvbnN0IGNvbW1lbnRJdGVtcyA9ICgpID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50RGF0YSkpIHtcclxuICAgICAgcmV0dXJuICc8bGk+Tm8gY29tbWVudDwvbGk+JztcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbW1lbnRUZW1wbGF0ZSA9XHJcbiAgICBjb21tZW50RGF0YS5tYXAoKGNvbW1lbnQpID0+IGA8bGk+XHJcbiAgICAgIDxzcGFuIGlkPVwidXNlclwiPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPlxyXG4gICAgICA8c3BhbiBpZD1cInVzZXItY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5cclxuICAgIDwvbGk+YCk7XHJcbiAgICByZXR1cm4gY29tbWVudFRlbXBsYXRlLmpvaW4oJycpO1xyXG4gIH07XHJcblxyXG4gIHBvcFVwQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPSdwb3B1cC13aW5kb3cnPlxyXG4gICAgPGgyIGNsYXNzPSdtb3ZpZS10aXRsZSc+JHttb3ZpZS5uYW1lfTwvaDI+XHJcbiAgICA8c3ZnIHN0eWxlPSd3aWR0aDoyNHB4O2hlaWdodDoyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIGNsYXNzPSdjbG9zZS1pY29uJz5cclxuICAgICAgPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaJyAvPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8ZGl2IGNsYXNzPSdtb3ZpZS1pbmZvJz5cclxuICAgICAgPGltZyBzcmM9JHttb3ZpZS5pbWFnZX0gY2xhc3M9J2ZpbG0taW1hZ2UnPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+XHJcbiAgICAgICAgPHNwYW4+PGI+QXZlcmFnZSBSdW50aW1lOjwvYj4gJHttb3ZpZS5ydW50aW1lfSBtaW51dGVzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPjxiPkVuZGVkOjwvYj4gJHttb3ZpZS5lbmRlZH0gPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPjxiPlN1bW1hcnk6PC9iPiAke21vdmllLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9J3BvcHVwLWNvbW1lbnRzJz5Db21tZW50czwvZGl2PlxyXG4gICAgXHJcbiAgPGZvcm0gY2xhc3M9J2Zvcm0tc3VibWl0Jz5cclxuICA8ZGl2IGNsYXNzPSdmb3JtLWNvbnRhaW5lcic+XHJcbiAgPHVsIGNsYXNzPSdjb21tZW50LWxpc3QnPiR7Y29tbWVudEl0ZW1zKCl9PC91bD5cclxuICAgPGRpdiBjbGFzcz0nbmFtZS1maWVsZCc+XHJcbiAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJyBwbGFjZWhvbGRlcj0neW91ciBuYW1lJz5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPSd0ZXh0YXJlYScgaWQ9J2NvbW1lbnQnIGNvbHM9JzEwJyByb3dzPScyJyBwbGFjZWhvbGRlcj0nd3JpdGUgYSBjb21tZW50Jz48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIHBvcFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xyXG4gIGNsb3NlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHBvcFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH0pO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc3VibWl0Jyk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xyXG4gICAgY29uc3QgY29tbWVudCA9IHtcclxuICAgICAgdXNlcm5hbWU6IGZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICBjb21tZW50OiBmb3JtLmVsZW1lbnRzLmNvbW1lbnQudmFsdWUudHJpbSgpLFxyXG4gICAgICBpdGVtX2lkOiBtb3ZpZS5pZCxcclxuICAgIH07XHJcblxyXG4gICAgZm9ybS5yZXNldCgpO1xyXG4gICAgYXdhaXQgcG9zdENvbW1lbnQoY29tbWVudCk7XHJcbiAgICBjb25zdCBjb21tZW50SW5mbyA9IGF3YWl0IGdldENvbW1lbnQoY29tbWVudC5pdGVtX2lkKTtcclxuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb21tZW50SW5mby5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gYFxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJ1c2VyXCI+JHtjb21tZW50LnVzZXJuYW1lfTo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJ1c2VyLWNvbW1lbnRcIj4ke2NvbW1lbnQuY29tbWVudH08L3NwYW4+XHJcbiAgICAgIDwvbGk+YDtcclxuICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdEl0ZW07XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGZpbG1UZW1wbGF0ZSwgcG9wVXBUZW1wbGF0ZSB9OyIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuY29uc3QgYXBwSWQgPSAnQTZhd0tSajVPTkhHdzV0d2NLREgnO1xyXG5cclxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGlkLCBpY29uLCBjb250ZW50KSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBpZCxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcclxuICBjb25zdCBbbGlrZXNdID0gbGlrZXNBcnJheS5maWx0ZXIoKG4pID0+IE51bWJlcihuLml0ZW1faWQpID09PSBOdW1iZXIoaWNvbi5pZCkpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYCR7bGlrZXMubGlrZXN9ICR7TnVtYmVyKGxpa2VzLmxpa2VzKSA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9YDtcclxufTtcclxuXHJcbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2ApO1xyXG4gIGNvbnN0IGxpa2VzRGF0YSA9IChhd2FpdCByZXNwb25zZSkuanNvbigpO1xyXG4gIHJldHVybiBsaWtlc0RhdGE7XHJcbn07XHJcblxyXG5jb25zdCBmaWxtTGlrZXMgPSBhc3luYyAobGlrZXNJY29ucykgPT4ge1xyXG4gIGxpa2VzSWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xyXG4gICAgICAgIHBvc3RMaWtlcyhlLnRhcmdldC5pZCwgZS50YXJnZXQsaWNvbi5jaGlsZHJlblsxXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZmlsbUxpa2VzLCBnZXRMaWtlcywgcG9zdExpa2VzIH07IiwiY29uc3QgZmlsbXNJRCA9IFszMTQxNDIsIDc5NTUxLCAzNDM0MzUsIDM3NzY3MywgODAyNzAsIDI0ODU5Nl07XHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/dGhldHZkYj0nO1xyXG5cclxuY29uc3QgZ2V0TW92aWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGZpbG1zSUQubWFwKGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGZldGNoKGAke2Jhc2VVcmx9JHtpZH1gKTtcclxuICAgIGNvbnN0IHJlc3BvbmUgPSAoYXdhaXQgZGF0YSkuanNvbigpO1xyXG4gICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXNwb25lO1xyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICBuYW1lOiBtb3ZpZS5uYW1lLFxyXG4gICAgICBpbWFnZTogbW92aWUuaW1hZ2Uub3JpZ2luYWwsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtb3ZpZS5zdW1tYXJ5LFxyXG4gICAgICBydW50aW1lOiBtb3ZpZS5hdmVyYWdlUnVudGltZSxcclxuICAgICAgZW5kZWQ6IG1vdmllLmVuZGVkLFxyXG4gICAgICBpZDogbW92aWUuaWQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVzO1xyXG4iLCJjb25zdCBmaWxtc0lEID0gWzI3NjU2MiwgMzUwNjY1LCAzOTY1NjQsIDM1OTI2NCwgMzY0OTI4LCAyNzk1MzZdO1xyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vbG9va3VwL3Nob3dzP3RoZXR2ZGI9JztcclxuXHJcbmNvbnN0IGdldFNlcmllcyA9ICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBmaWxtc0lELm1hcChhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBmZXRjaChgJHtiYXNlVXJsfSR7aWR9YCk7XHJcbiAgICBjb25zdCByZXNwb25lID0gKGF3YWl0IGRhdGEpLmpzb24oKTtcclxuICAgIGNvbnN0IHNlcmllcyA9IGF3YWl0IHJlc3BvbmU7XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgIG5hbWU6IHNlcmllcy5uYW1lLFxyXG4gICAgICBpbWFnZTogc2VyaWVzLmltYWdlLm9yaWdpbmFsLFxyXG4gICAgICBkZXNjcmlwdGlvbjogc2VyaWVzLnN1bW1hcnksXHJcbiAgICAgIHJ1bnRpbWU6IHNlcmllcy5hdmVyYWdlUnVudGltZSxcclxuICAgICAgZW5kZWQ6IHNlcmllcy5lbmRlZCxcclxuICAgICAgaWQ6IHNlcmllcy5pZCxcclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRTZXJpZXM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL21vZHVsZXMvZXZlbnRzLmpzJztcclxuXHJcbmV2ZW50cygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=