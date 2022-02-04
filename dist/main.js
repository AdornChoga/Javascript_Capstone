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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  gap: 12px;\r\n  font-size: 10px;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.fa-film {\r\n  font-size: 5rem;\r\n  color: darkblue;\r\n}\r\n\r\nnav ul li + li {\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.focussed {\r\n  text-decoration: underline blue;\r\n}\r\n\r\nmain {\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.films {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.image-container {\r\n  width: 100%;\r\n}\r\n\r\n.films li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  border: 0.2rem solid red;\r\n  text-align: center;\r\n  font-size: 1vw;\r\n}\r\n\r\n.film-image {\r\n  width: 22vw;\r\n  height: 24vw;\r\n}\r\n\r\n.film-info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: blue;\r\n}\r\n\r\n.fa-heart:active {\r\n  color: red;\r\n  transform: scale(1.2);\r\n  -webkit-transform: scale(1.4);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.comments {\r\n  align-self: flex-start;\r\n  margin: 0 0 1rem 1rem;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  padding: 0.3em;\r\n  border: solid;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border: 0.2rem solid black;\r\n  background-color: white;\r\n}\r\n\r\n#txt-area {\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  padding-left: 2em;\r\n}\r\n\r\n#footer-bg {\r\n  height: 3rem;\r\n  background-color: grey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.comment-list {\r\n  width: 50%;\r\n  height: 95%;\r\n  outline: 0.1rem outset;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comment-list li {\r\n  word-wrap: break-word;\r\n}\r\n\r\n#username,\r\n#comment {\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 0.2rem solid;\r\n}\r\n\r\n#user {\r\n  font-size: 1.2rem;\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n#user-comment {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.name-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.656);\r\n  display: none;\r\n  padding: 4rem;\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window {\r\n  position: relative;\r\n  width: 80%;\r\n  padding: 20px;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window > h2 {\r\n  font-size: 2rem;\r\n  align-self: center;\r\n  text-decoration: underline red;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  border: solid;\r\n  height: 24vw;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.description p {\r\n  font-size: 1.7rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.description > span {\r\n  font-size: 1.5rem;\r\n  font-family: sans-serif;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-comments {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  text-decoration: underline;\r\n  padding: 30px;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n.close-icon:hover {\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  border: solid;\r\n  width: 60%;\r\n  justify-content: space-around;\r\n  gap: 0.9rem;\r\n  height: 30rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  gap: 12px;\r\n  font-size: 10px;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.fa-film {\r\n  font-size: 5rem;\r\n  color: darkblue;\r\n}\r\n\r\nnav ul li + li {\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.focussed {\r\n  text-decoration: underline blue;\r\n}\r\n\r\nmain {\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.films {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.image-container {\r\n  width: 100%;\r\n}\r\n\r\n.films li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  border: 0.2rem solid red;\r\n  text-align: center;\r\n  font-size: 1vw;\r\n}\r\n\r\n.film-image {\r\n  width: 22vw;\r\n  height: 24vw;\r\n}\r\n\r\n.film-info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: blue;\r\n}\r\n\r\n.fa-heart:active {\r\n  color: red;\r\n  transform: scale(1.2);\r\n  -webkit-transform: scale(1.4);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.comments {\r\n  align-self: flex-start;\r\n  margin: 0 0 1rem 1rem;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  padding: 0.3em;\r\n  border: solid;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border: 0.2rem solid black;\r\n  background-color: white;\r\n}\r\n\r\n#txt-area {\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  padding-left: 2em;\r\n}\r\n\r\n#footer-bg {\r\n  height: 3rem;\r\n  background-color: grey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.comment-list {\r\n  width: 50%;\r\n  height: 95%;\r\n  outline: 0.1rem outset;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comment-list li {\r\n  word-wrap: break-word;\r\n}\r\n\r\n#username,\r\n#comment {\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 0.2rem solid;\r\n}\r\n\r\n#user {\r\n  font-size: 1.2rem;\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n#user-comment {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.name-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.656);\r\n  display: none;\r\n  padding: 4rem;\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window {\r\n  position: relative;\r\n  width: 80%;\r\n  padding: 20px;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window > h2 {\r\n  font-size: 2rem;\r\n  align-self: center;\r\n  text-decoration: underline red;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  border: solid;\r\n  height: 24vw;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.description p {\r\n  font-size: 1.7rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.description > span {\r\n  font-size: 1.5rem;\r\n  font-family: sans-serif;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-comments {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  text-decoration: underline;\r\n  padding: 30px;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n.close-icon:hover {\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  border: solid;\r\n  width: 60%;\r\n  justify-content: space-around;\r\n  gap: 0.9rem;\r\n  height: 30rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "countComments": () => (/* binding */ countComments)
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

const countComments = (commentArray) => {
  if (commentArray.length === undefined) {
    return 0;
  }
  return commentArray.length;
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
/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.js */ "./src/modules/movies.js");
/* harmony import */ var _series_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./series.js */ "./src/modules/series.js");
/* harmony import */ var _items_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items_counter.js */ "./src/modules/items_counter.js");





const movieSection = document.querySelector('.movie-sect');
const seriesSection = document.querySelector('.series-sect');
const numOfMovies = document.querySelector('#num-of-movies');
const numOfSeries = document.querySelector('#num-of-series');

const events = () => {
  window.addEventListener('load', () => {
    _appUI_js__WEBPACK_IMPORTED_MODULE_0__.displayMovies();
    movieSection.classList.add('focussed');
    numOfMovies.innerHTML = `(${(0,_items_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])())})`;
  });

  movieSection.addEventListener('click', () => {
    movieSection.classList.add('focussed');
    seriesSection.classList.remove('focussed');
    _appUI_js__WEBPACK_IMPORTED_MODULE_0__.displayMovies();
    numOfMovies.innerHTML = `(${(0,_items_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])())})`;
    numOfSeries.innerHTML = '';
  });

  seriesSection.addEventListener('click', () => {
    seriesSection.classList.add('focussed');
    movieSection.classList.remove('focussed');
    _appUI_js__WEBPACK_IMPORTED_MODULE_0__.displaySeries();
    numOfSeries.innerHTML = `(${(0,_items_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_series_js__WEBPACK_IMPORTED_MODULE_2__["default"])())})`;
    numOfMovies.innerHTML = '';
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
  const commentCount = (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.countComments)(commentData);
  const commentItems = () => {
    if (!Array.isArray(commentData)) {
      return '<li>No comment</li>';
    }
    const commentTemplate = commentData.map((comment) => `<li>${comment.username} : ${comment.comment}</li>`);
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
    <div class='popup-comments'>Comments (${commentCount})</div>
  <form class='form-submit'>
  <div class='form-container'>
  <ul class='comment-list'>${commentItems()}</ul>
   <div class='name-field'>
    <input type='text' id='username' placeholder='Please enter your name'>
    <textarea name='textarea' id='comment' cols='10' rows='5' placeholder='please add a comment'></textarea>
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
    const countComment = (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.countComments)(commentInfo);
    document.querySelector('.popup-comments').innerHTML = `Comments (${countComment})`;
    listContainer.innerHTML = '';
    commentInfo.forEach((comment) => {
      const listItem = `<li>${comment.username}: ${comment.comment}</li>`;
      listContainer.innerHTML += listItem;
    });
  });
};




/***/ }),

/***/ "./src/modules/items_counter.js":
/*!**************************************!*\
  !*** ./src/modules/items_counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countItems = (items) => {
  if (items.length === undefined) {
    return 0;
  }
  return items.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);

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

const getLikes = async () => {
  const response = fetch(`${baseUrl}${appId}/likes`);
  const likesData = (await response).json();
  return likesData;
};

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

const filmLikes = async (likesIcons) => {
  likesIcons.forEach((icon) => {
    icon.addEventListener('click', async (e) => {
      if (e.target.classList.contains('fa-heart')) {
        postLikes(e.target.id, e.target, icon.children[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHVCQUF1QixLQUFLLFdBQVcsNkJBQTZCLEtBQUssY0FBYyxnQkFBZ0IsaUJBQWlCLDhCQUE4QixLQUFLLFlBQVksdUJBQXVCLGdCQUFnQixzQkFBc0IsS0FBSyxnQkFBZ0IsNEJBQTRCLG9CQUFvQixnQkFBZ0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsS0FBSyxrQkFBa0Isc0JBQXNCLHNCQUFzQixLQUFLLHdCQUF3QixzQkFBc0Isc0JBQXNCLEtBQUssbUJBQW1CLHNDQUFzQyxLQUFLLGNBQWMsMEJBQTBCLEtBQUssZ0JBQWdCLHVCQUF1QixpQkFBaUIsb0JBQW9CLHNCQUFzQixpQkFBaUIscUJBQXFCLDhCQUE4QixrQkFBa0IsS0FBSywwQkFBMEIsa0JBQWtCLEtBQUssbUJBQW1CLG9CQUFvQiw2QkFBNkIsaUJBQWlCLCtCQUErQix5QkFBeUIscUJBQXFCLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIsS0FBSyxvQkFBb0Isb0JBQW9CLHFDQUFxQywwQkFBMEIscUJBQXFCLEtBQUssbUJBQW1CLHNCQUFzQixzQkFBc0Isa0JBQWtCLEtBQUssMEJBQTBCLGlCQUFpQiw0QkFBNEIsb0NBQW9DLGlDQUFpQyxnQ0FBZ0MsK0JBQStCLEtBQUssbUJBQW1CLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLHdCQUF3QixxQkFBcUIsb0JBQW9CLEtBQUssZ0JBQWdCLGtCQUFrQixpQ0FBaUMsOEJBQThCLEtBQUssbUJBQW1CLG1CQUFtQixzQkFBc0Isd0JBQXdCLEtBQUssb0JBQW9CLG1CQUFtQiw2QkFBNkIsS0FBSyxjQUFjLG9CQUFvQixnQkFBZ0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsS0FBSyxnQkFBZ0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsS0FBSyx1QkFBdUIsaUJBQWlCLGtCQUFrQiw2QkFBNkIseUJBQXlCLEtBQUssMEJBQTBCLDRCQUE0QixLQUFLLGdDQUFnQyxvQkFBb0IsbUJBQW1CLGtDQUFrQyxLQUFLLGVBQWUsd0JBQXdCLGtCQUFrQix3QkFBd0IsS0FBSyx1QkFBdUIsd0JBQXdCLHdCQUF3QixLQUFLLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQix1QkFBdUIsS0FBSywwQkFBMEIsc0JBQXNCLGNBQWMsYUFBYSxtQkFBbUIsb0JBQW9CLDZDQUE2QyxvQkFBb0Isb0JBQW9CLGlDQUFpQyx5QkFBeUIsS0FBSyx1QkFBdUIseUJBQXlCLGlCQUFpQixvQkFBb0IsOEJBQThCLHFCQUFxQixvQkFBb0IsNkJBQTZCLG1CQUFtQix5QkFBeUIsS0FBSyw0QkFBNEIsc0JBQXNCLHlCQUF5QixxQ0FBcUMsS0FBSyxxQkFBcUIsb0JBQW9CLGdCQUFnQixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLGtDQUFrQyxvQkFBb0IsbUJBQW1CLHlCQUF5QixLQUFLLHdCQUF3Qix3QkFBd0IsOEJBQThCLEtBQUssNkJBQTZCLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLEtBQUsseUJBQXlCLHlCQUF5Qix3QkFBd0IsaUNBQWlDLG9CQUFvQixLQUFLLHFCQUFxQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixzQkFBc0Isc0JBQXNCLEtBQUssMkJBQTJCLGlCQUFpQiw0QkFBNEIsS0FBSyx5QkFBeUIsb0JBQW9CLGtDQUFrQyxvQkFBb0IsaUJBQWlCLG9DQUFvQyxrQkFBa0Isb0JBQW9CLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLCtCQUErQix1QkFBdUIsS0FBSyxXQUFXLDZCQUE2QixL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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjs7QUFFekMsOERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hcGljb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hcHBVSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvaHRtbF90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2l0ZW1zX2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Nlcmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWZpbG0ge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgY29sb3I6IGRhcmtibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgKyBsaSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb2N1c3NlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5maWxtcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbXMgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxdnc7XFxyXFxufVxcclxcblxcclxcbi5maWxtLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAyMnZ3O1xcclxcbiAgaGVpZ2h0OiAyNHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG4gIGJvcmRlcjogc29saWQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0eHQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1iZyB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBvdXRsaW5lOiAwLjFyZW0gb3V0c2V0O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpIHtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJuYW1lLFxcclxcbiNjb21tZW50IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQ7XFxyXFxufVxcclxcblxcclxcbiN1c2VyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItY29tbWVudCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1maWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU2KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlcjogc29saWQ7XFxyXFxuICBoZWlnaHQ6IDI0dnc7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiA+IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50cyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGdhcDogMC45cmVtO1xcclxcbiAgaGVpZ2h0OiAzMHJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWZpbG0ge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgY29sb3I6IGRhcmtibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgKyBsaSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb2N1c3NlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5maWxtcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbXMgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxdnc7XFxyXFxufVxcclxcblxcclxcbi5maWxtLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAyMnZ3O1xcclxcbiAgaGVpZ2h0OiAyNHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG4gIGJvcmRlcjogc29saWQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0eHQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1iZyB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBvdXRsaW5lOiAwLjFyZW0gb3V0c2V0O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpIHtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJuYW1lLFxcclxcbiNjb21tZW50IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQ7XFxyXFxufVxcclxcblxcclxcbiN1c2VyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItY29tbWVudCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1maWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU2KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlcjogc29saWQ7XFxyXFxuICBoZWlnaHQ6IDI0dnc7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiA+IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50cyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGdhcDogMC45cmVtO1xcclxcbiAgaGVpZ2h0OiAzMHJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJZCA9ICdBNmF3S1JqNU9OSEd3NXR3Y0tESCc7XG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChjb21tZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICB9KTtcbn07XG5jb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoY29tbWVudEFycmF5KSA9PiB7XG4gIGlmIChjb21tZW50QXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gY29tbWVudEFycmF5Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7IGdldENvbW1lbnQsIHBvc3RDb21tZW50LCBjb3VudENvbW1lbnRzIH07XG4iLCJpbXBvcnQgZ2V0U2VyaWVzIGZyb20gJy4vc2VyaWVzLmpzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMuanMnO1xuaW1wb3J0IGNvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IHsgZmlsbUxpa2VzLCBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0ICogYXMgVGVtcGxhdGVzIGZyb20gJy4vaHRtbF90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtcycpO1xuICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGdldE1vdmllcygpLm1hcChhc3luYyAobW92aWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgbW92aWU7XG4gICAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gbW92aWVEYXRhLmlkKTtcbiAgICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gVGVtcGxhdGVzLmZpbG1UZW1wbGF0ZShtb3ZpZURhdGEsIGluZGV4LCBsaWtlcy5saWtlcyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XG4gICAgY29uc3QgbGlrZXNOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuICAgIHJldHVybiB7IGJ1dHRvbnM6IGJ0biwgbGlrZXNJY29uczogbGlrZXNOb2RlcyB9O1xuICB9KTtcbiAgY29uc3QgZXZlbnRzRWxlbWVudHMgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICBjb25zdCBjb21tZW50c0J1dHRvbnMgPSAoYXdhaXQgZXZlbnRzRWxlbWVudHMpLmJ1dHRvbnM7XG4gIGNvbnN0IHsgbGlrZXNJY29ucyB9ID0gYXdhaXQgZXZlbnRzRWxlbWVudHM7XG4gIGZpbG1MaWtlcyhsaWtlc0ljb25zKTtcbiAgY29tbWVudHMoY29tbWVudHNCdXR0b25zLCAnbW92aWVzJyk7XG59O1xuXG5jb25zdCBkaXNwbGF5U2VyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtcycpO1xuICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGdldFNlcmllcygpLm1hcChhc3luYyAoc2VyaWVzLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHNlcmllc0RhdGEgPSBhd2FpdCBzZXJpZXM7XG4gICAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gc2VyaWVzRGF0YS5pZCk7XG4gICAgY29uc3QgbnVtTGlrZXMgPSBsaWtlcyAhPT0gdW5kZWZpbmVkID8gbGlrZXMubGlrZXMgOiAwO1xuICAgIGZpbG1zQ29udGFpbmVyLmlubmVySFRNTCArPSBUZW1wbGF0ZXMuZmlsbVRlbXBsYXRlKHNlcmllc0RhdGEsIGluZGV4LCBudW1MaWtlcyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XG4gICAgY29uc3QgbGlrZXNOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuICAgIHJldHVybiB7IGJ1dHRvbnM6IGJ0biwgbGlrZXNJY29uczogbGlrZXNOb2RlcyB9O1xuICB9KTtcbiAgY29uc3QgZXZlbnRzRWxlbWVudHMgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICBjb25zdCBjb21tZW50c0J1dHRvbnMgPSAoYXdhaXQgZXZlbnRzRWxlbWVudHMpLmJ1dHRvbnM7XG4gIGNvbnN0IHsgbGlrZXNJY29ucyB9ID0gYXdhaXQgZXZlbnRzRWxlbWVudHM7XG4gIGZpbG1MaWtlcyhsaWtlc0ljb25zKTtcbiAgY29tbWVudHMoY29tbWVudHNCdXR0b25zLCAnc2VyaWVzJyk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVzLCBkaXNwbGF5U2VyaWVzIH07XG4iLCJpbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW92aWVzLmpzJztcbmltcG9ydCBnZXRTZXJpZXMgZnJvbSAnLi9zZXJpZXMuanMnO1xuaW1wb3J0ICogYXMgVGVtcGxhdGVzIGZyb20gJy4vaHRtbF90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCBjb21tZW50cyA9IChkYXRhLCB0eXBlKSA9PiB7XG4gIGRhdGEuZm9yRWFjaChhc3luYyAoYnRuKSA9PiB7XG4gICAgY29uc3QgZmlsbURhdGEgPSB0eXBlID09PSAnbW92aWVzJyA/IGF3YWl0IGdldE1vdmllcygpW2J0bi5pZF0gOiBhd2FpdCBnZXRTZXJpZXMoKVtidG4uaWRdO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFRlbXBsYXRlcy5wb3BVcFRlbXBsYXRlKGZpbG1EYXRhKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50czsiLCJpbXBvcnQgKiBhcyBVSSBmcm9tICcuL2FwcFVJLmpzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMuanMnO1xuaW1wb3J0IGdldFNlcmllcyBmcm9tICcuL3Nlcmllcy5qcyc7XG5pbXBvcnQgY291bnRJdGVtcyBmcm9tICcuL2l0ZW1zX2NvdW50ZXIuanMnO1xuXG5jb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtc2VjdCcpO1xuY29uc3Qgc2VyaWVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJpZXMtc2VjdCcpO1xuY29uc3QgbnVtT2ZNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtLW9mLW1vdmllcycpO1xuY29uc3QgbnVtT2ZTZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtLW9mLXNlcmllcycpO1xuXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIFVJLmRpc3BsYXlNb3ZpZXMoKTtcbiAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcbiAgICBudW1PZk1vdmllcy5pbm5lckhUTUwgPSBgKCR7Y291bnRJdGVtcyhnZXRNb3ZpZXMoKSl9KWA7XG4gIH0pO1xuXG4gIG1vdmllU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcbiAgICBzZXJpZXNTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3Vzc2VkJyk7XG4gICAgVUkuZGlzcGxheU1vdmllcygpO1xuICAgIG51bU9mTW92aWVzLmlubmVySFRNTCA9IGAoJHtjb3VudEl0ZW1zKGdldE1vdmllcygpKX0pYDtcbiAgICBudW1PZlNlcmllcy5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG5cbiAgc2VyaWVzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXJpZXNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3Vzc2VkJyk7XG4gICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3Vzc2VkJyk7XG4gICAgVUkuZGlzcGxheVNlcmllcygpO1xuICAgIG51bU9mU2VyaWVzLmlubmVySFRNTCA9IGAoJHtjb3VudEl0ZW1zKGdldFNlcmllcygpKX0pYDtcbiAgICBudW1PZk1vdmllcy5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnQsIGNvdW50Q29tbWVudHMgfSBmcm9tICcuL2FwaWNvbW1lbnQuanMnO1xuXG5jb25zdCBmaWxtVGVtcGxhdGUgPSAoaW5mbywgaW5kZXgsIG51bUxpa2VzKSA9PiBgXG48bGk+XG4gIDxkaXYgY2xhc3M9J2ltYWdlLWNvbnRhaW5lcic+XG4gICAgPGltZyBzcmM9JHtpbmZvLmltYWdlfSBjbGFzcz0nZmlsbS1pbWFnZSc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPSdmaWxtLWluZm8nPlxuICAgIDxoMSBjbGFzcz0nZmlsbS10aXRsZSc+JHtpbmZvLm5hbWV9PC9oMT5cbiAgICA8ZGl2IGNsYXNzPSdsaWtlcyc+XG4gICAgICA8aSBjbGFzcz0nZmFyIGZhLWhlYXJ0JyBpZD0nJHtpbmZvLmlkfSc+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9J2xpa2VzJz4ke251bUxpa2VzfSAke051bWJlcihudW1MaWtlcykgPT09IDEgPyAnTGlrZScgOiAnTGlrZXMnfSA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2NvbW1lbnRzJyBpZD0nJHtpbmRleH0nPkNvbW1lbnRzPC9idXR0b24+XG48L2xpPlxuYDtcblxuY29uc3QgcG9wVXBUZW1wbGF0ZSA9IGFzeW5jIChtb3ZpZSkgPT4ge1xuICBjb25zdCBwb3BVcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgY29uc3QgY29tbWVudERhdGEgPSBhd2FpdCBnZXRDb21tZW50KG1vdmllLmlkKTtcbiAgY29uc3QgY29tbWVudENvdW50ID0gY291bnRDb21tZW50cyhjb21tZW50RGF0YSk7XG4gIGNvbnN0IGNvbW1lbnRJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tbWVudERhdGEpKSB7XG4gICAgICByZXR1cm4gJzxsaT5ObyBjb21tZW50PC9saT4nO1xuICAgIH1cbiAgICBjb25zdCBjb21tZW50VGVtcGxhdGUgPSBjb21tZW50RGF0YS5tYXAoKGNvbW1lbnQpID0+IGA8bGk+JHtjb21tZW50LnVzZXJuYW1lfSA6ICR7Y29tbWVudC5jb21tZW50fTwvbGk+YCk7XG4gICAgcmV0dXJuIGNvbW1lbnRUZW1wbGF0ZS5qb2luKCcnKTtcbiAgfTtcblxuICBwb3BVcENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9J3BvcHVwLXdpbmRvdyc+XG4gICAgPGgyIGNsYXNzPSdtb3ZpZS10aXRsZSc+JHttb3ZpZS5uYW1lfTwvaDI+XG4gICAgPHN2ZyBzdHlsZT0nd2lkdGg6MjRweDtoZWlnaHQ6MjRweCcgdmlld0JveD0nMCAwIDI0IDI0JyBjbGFzcz0nY2xvc2UtaWNvbic+XG4gICAgICA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVonIC8+XG4gICAgPC9zdmc+XG4gICAgPGRpdiBjbGFzcz0nbW92aWUtaW5mbyc+XG4gICAgICA8aW1nIHNyYz0ke21vdmllLmltYWdlfSBjbGFzcz0nZmlsbS1pbWFnZSc+XG4gICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+XG4gICAgICAgIDxzcGFuPjxiPkF2ZXJhZ2UgUnVudGltZTo8L2I+ICR7bW92aWUucnVudGltZX0gbWludXRlczwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PGI+RW5kZWQ6PC9iPiAke21vdmllLmVuZGVkfSA8L3NwYW4+XG4gICAgICAgIDxzcGFuPjxiPlN1bW1hcnk6PC9iPiAke21vdmllLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3BvcHVwLWNvbW1lbnRzJz5Db21tZW50cyAoJHtjb21tZW50Q291bnR9KTwvZGl2PlxuICA8Zm9ybSBjbGFzcz0nZm9ybS1zdWJtaXQnPlxuICA8ZGl2IGNsYXNzPSdmb3JtLWNvbnRhaW5lcic+XG4gIDx1bCBjbGFzcz0nY29tbWVudC1saXN0Jz4ke2NvbW1lbnRJdGVtcygpfTwvdWw+XG4gICA8ZGl2IGNsYXNzPSduYW1lLWZpZWxkJz5cbiAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJyBwbGFjZWhvbGRlcj0nUGxlYXNlIGVudGVyIHlvdXIgbmFtZSc+XG4gICAgPHRleHRhcmVhIG5hbWU9J3RleHRhcmVhJyBpZD0nY29tbWVudCcgY29scz0nMTAnIHJvd3M9JzUnIHBsYWNlaG9sZGVyPSdwbGVhc2UgYWRkIGEgY29tbWVudCc+PC90ZXh0YXJlYT5cbiAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+Q29tbWVudDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG4gIDwvZGl2PlxuICBgO1xuXG4gIHBvcFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb25zdCBjbG9zZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWljb24nKTtcbiAgY2xvc2VQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcG9wVXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXN1Ym1pdCcpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgIGNvbnN0IGNvbW1lbnQgPSB7XG4gICAgICB1c2VybmFtZTogZm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZS50cmltKCksXG4gICAgICBjb21tZW50OiBmb3JtLmVsZW1lbnRzLmNvbW1lbnQudmFsdWUudHJpbSgpLFxuICAgICAgaXRlbV9pZDogbW92aWUuaWQsXG4gICAgfTtcblxuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBhd2FpdCBwb3N0Q29tbWVudChjb21tZW50KTtcbiAgICBjb25zdCBjb21tZW50SW5mbyA9IGF3YWl0IGdldENvbW1lbnQoY29tbWVudC5pdGVtX2lkKTtcbiAgICBjb25zdCBjb3VudENvbW1lbnQgPSBjb3VudENvbW1lbnRzKGNvbW1lbnRJbmZvKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29tbWVudHMnKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y291bnRDb21tZW50fSlgO1xuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tbWVudEluZm8uZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBgPGxpPiR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvbGk+YDtcbiAgICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MICs9IGxpc3RJdGVtO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZpbG1UZW1wbGF0ZSwgcG9wVXBUZW1wbGF0ZSB9O1xuIiwiY29uc3QgY291bnRJdGVtcyA9IChpdGVtcykgPT4ge1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gaXRlbXMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRJdGVtczsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJZCA9ICdBNmF3S1JqNU9OSEd3NXR3Y0tESCc7XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gKGF3YWl0IHJlc3BvbnNlKS5qc29uKCk7XG4gIHJldHVybiBsaWtlc0RhdGE7XG59O1xuXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaWQsIGljb24sIGNvbnRlbnQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gTnVtYmVyKGljb24uaWQpKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBgJHtsaWtlcy5saWtlc30gJHtOdW1iZXIobGlrZXMubGlrZXMpID09PSAxID8gJ0xpa2UnIDogJ0xpa2VzJ31gO1xufTtcblxuY29uc3QgZmlsbUxpa2VzID0gYXN5bmMgKGxpa2VzSWNvbnMpID0+IHtcbiAgbGlrZXNJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XG4gICAgICAgIHBvc3RMaWtlcyhlLnRhcmdldC5pZCwgZS50YXJnZXQsIGljb24uY2hpbGRyZW5bMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZpbG1MaWtlcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9OyIsImNvbnN0IGZpbG1zSUQgPSBbMzE0MTQyLCA3OTU1MSwgMzQzNDM1LCAzNzc2NzMsIDgwMjcwLCAyNDg1OTZdO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL2xvb2t1cC9zaG93cz90aGV0dmRiPSc7XG5cbmNvbnN0IGdldE1vdmllcyA9ICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmlsbXNJRC5tYXAoYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZldGNoKGAke2Jhc2VVcmx9JHtpZH1gKTtcbiAgICBjb25zdCByZXNwb25lID0gKGF3YWl0IGRhdGEpLmpzb24oKTtcbiAgICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlc3BvbmU7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbmFtZTogbW92aWUubmFtZSxcbiAgICAgIGltYWdlOiBtb3ZpZS5pbWFnZS5vcmlnaW5hbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBtb3ZpZS5zdW1tYXJ5LFxuICAgICAgcnVudGltZTogbW92aWUuYXZlcmFnZVJ1bnRpbWUsXG4gICAgICBlbmRlZDogbW92aWUuZW5kZWQsXG4gICAgICBpZDogbW92aWUuaWQsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vdmllcztcbiIsImNvbnN0IGZpbG1zSUQgPSBbMjc2NTYyLCAzNTA2NjUsIDM5NjU2NCwgMzU5MjY0LCAzNjQ5MjgsIDI3OTUzNl07XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vbG9va3VwL3Nob3dzP3RoZXR2ZGI9JztcblxuY29uc3QgZ2V0U2VyaWVzID0gKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBmaWxtc0lELm1hcChhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZmV0Y2goYCR7YmFzZVVybH0ke2lkfWApO1xuICAgIGNvbnN0IHJlc3BvbmUgPSAoYXdhaXQgZGF0YSkuanNvbigpO1xuICAgIGNvbnN0IHNlcmllcyA9IGF3YWl0IHJlc3BvbmU7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbmFtZTogc2VyaWVzLm5hbWUsXG4gICAgICBpbWFnZTogc2VyaWVzLmltYWdlLm9yaWdpbmFsLFxuICAgICAgZGVzY3JpcHRpb246IHNlcmllcy5zdW1tYXJ5LFxuICAgICAgcnVudGltZTogc2VyaWVzLmF2ZXJhZ2VSdW50aW1lLFxuICAgICAgZW5kZWQ6IHNlcmllcy5lbmRlZCxcbiAgICAgIGlkOiBzZXJpZXMuaWQsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNlcmllcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9tb2R1bGVzL2V2ZW50cy5qcyc7XG5cbmV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9