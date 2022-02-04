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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n  gap: 12px;\n  font-size: 10px;\n}\n\nnav ul {\n  list-style-type: none;\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n}\n\n.fa-film {\n  font-size: 5rem;\n  color: darkblue;\n}\n\nnav ul li + li {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\nnav ul li:hover{\n  border-bottom: 2px solid black;\n}\n\n.focussed {\n  text-decoration: underline blue;\n}\n\nmain {\n  margin-bottom: 5rem;\n}\n\n.films {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: 0 auto;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n.image-container {\n  width: 100%;\n}\n\n.films li {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  border: 0.2rem solid red;\n  text-align: center;\n  font-size: 1vw;\n}\n\n.film-image {\n  width: 22vw;\n  height: 24vw;\n}\n\n.film-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n}\n\n.fa-heart {\n  font-size: 2rem;\n  cursor: pointer;\n  color: blue;\n}\n\n.fa-heart:active {\n  color: red;\n  transform: scale(1.2);\n  -webkit-transform: scale(1.4);\n  -moz-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -o-transform: scale(1.2);\n}\n\n.comments {\n  align-self: flex-start;\n  margin: 0 0 1rem 1rem;\n  cursor: pointer;\n  font-size: 1.5rem;\n  padding: 0.3em;\n  border: solid;\n}\n\nfooter {\n  width: 100%;\n  border: 0.2rem solid black;\n  background-color: white;\n}\n\n#txt-area {\n  height: 5rem;\n  font-size: 2rem;\n  padding-left: 2em;\n}\n\n#footer-bg {\n  height: 3rem;\n  background-color: grey;\n}\n\nform {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.likes {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n\n.comment-list {\n  width: 50%;\n  height: 95%;\n  outline: 0.1rem outset;\n  overflow-y: scroll;\n}\n\n.comment-list li {\n  word-wrap: break-word;\n}\n\n#username,\n#comment {\n  outline: none;\n  border: none;\n  border-bottom: 0.2rem solid;\n}\n\n#user {\n  font-size: 1.2rem;\n  color: blue;\n  font-weight: bold;\n}\n\n#user-comment {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.name-field {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.popup-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.656);\n  display: none;\n  padding: 4rem;\n  backdrop-filter: blur(3px);\n  overflow-y: scroll;\n}\n\n.popup-window {\n  position: relative;\n  width: 80%;\n  padding: 20px;\n  background-color: white;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  height: 90vh;\n  overflow-y: scroll;\n}\n\n.popup-window > h2 {\n  font-size: 2rem;\n  align-self: center;\n  text-decoration: underline red;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border: solid;\n  height: 24vw;\n  overflow-y: scroll;\n}\n\n.description p {\n  font-size: 1.7rem;\n  font-family: sans-serif;\n}\n\n.description > span {\n  font-size: 1.5rem;\n  font-family: sans-serif;\n  padding: 1rem;\n}\n\n.popup-comments {\n  align-self: center;\n  font-size: 1.5rem;\n  text-decoration: underline;\n  padding: 30px;\n}\n\n.close-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n.close-icon:hover {\n  color: red;\n  transform: scale(1.5);\n}\n\n.form-container {\n  display: flex;\n  flex-direction: row-reverse;\n  border: solid;\n  width: 60%;\n  justify-content: space-around;\n  gap: 0.9rem;\n  height: 30rem;\n}\n\n.listed-comment{\n  font-size: 100px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n  gap: 12px;\n  font-size: 10px;\n}\n\nnav ul {\n  list-style-type: none;\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n}\n\n.fa-film {\n  font-size: 5rem;\n  color: darkblue;\n}\n\nnav ul li + li {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\nnav ul li:hover{\n  border-bottom: 2px solid black;\n}\n\n.focussed {\n  text-decoration: underline blue;\n}\n\nmain {\n  margin-bottom: 5rem;\n}\n\n.films {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: 0 auto;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n.image-container {\n  width: 100%;\n}\n\n.films li {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  border: 0.2rem solid red;\n  text-align: center;\n  font-size: 1vw;\n}\n\n.film-image {\n  width: 22vw;\n  height: 24vw;\n}\n\n.film-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n}\n\n.fa-heart {\n  font-size: 2rem;\n  cursor: pointer;\n  color: blue;\n}\n\n.fa-heart:active {\n  color: red;\n  transform: scale(1.2);\n  -webkit-transform: scale(1.4);\n  -moz-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -o-transform: scale(1.2);\n}\n\n.comments {\n  align-self: flex-start;\n  margin: 0 0 1rem 1rem;\n  cursor: pointer;\n  font-size: 1.5rem;\n  padding: 0.3em;\n  border: solid;\n}\n\nfooter {\n  width: 100%;\n  border: 0.2rem solid black;\n  background-color: white;\n}\n\n#txt-area {\n  height: 5rem;\n  font-size: 2rem;\n  padding-left: 2em;\n}\n\n#footer-bg {\n  height: 3rem;\n  background-color: grey;\n}\n\nform {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.likes {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n\n.comment-list {\n  width: 50%;\n  height: 95%;\n  outline: 0.1rem outset;\n  overflow-y: scroll;\n}\n\n.comment-list li {\n  word-wrap: break-word;\n}\n\n#username,\n#comment {\n  outline: none;\n  border: none;\n  border-bottom: 0.2rem solid;\n}\n\n#user {\n  font-size: 1.2rem;\n  color: blue;\n  font-weight: bold;\n}\n\n#user-comment {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.name-field {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.popup-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.656);\n  display: none;\n  padding: 4rem;\n  backdrop-filter: blur(3px);\n  overflow-y: scroll;\n}\n\n.popup-window {\n  position: relative;\n  width: 80%;\n  padding: 20px;\n  background-color: white;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  height: 90vh;\n  overflow-y: scroll;\n}\n\n.popup-window > h2 {\n  font-size: 2rem;\n  align-self: center;\n  text-decoration: underline red;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border: solid;\n  height: 24vw;\n  overflow-y: scroll;\n}\n\n.description p {\n  font-size: 1.7rem;\n  font-family: sans-serif;\n}\n\n.description > span {\n  font-size: 1.5rem;\n  font-family: sans-serif;\n  padding: 1rem;\n}\n\n.popup-comments {\n  align-self: center;\n  font-size: 1.5rem;\n  text-decoration: underline;\n  padding: 30px;\n}\n\n.close-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n.close-icon:hover {\n  color: red;\n  transform: scale(1.5);\n}\n\n.form-container {\n  display: flex;\n  flex-direction: row-reverse;\n  border: solid;\n  width: 60%;\n  justify-content: space-around;\n  gap: 0.9rem;\n  height: 30rem;\n}\n\n.listed-comment{\n  font-size: 100px;\n}"],"sourceRoot":""}]);
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




const comments = async (data, type) => {
  data.forEach(async (btn) => {
    btn.addEventListener('click', async () => {
      const filmData = type === 'movies' ? await (0,_movies_js__WEBPACK_IMPORTED_MODULE_0__["default"])()[btn.id] : await (0,_series_js__WEBPACK_IMPORTED_MODULE_1__["default"])()[btn.id];
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
      const listItem = `<li><h1>${comment.username}: ${comment.comment}<h1></li>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxnQ0FBZ0MscUJBQXFCLEdB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ29COztBQUV6Qyw4REFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaWNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwcFVJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9odG1sX3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvaXRlbXNfY291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL21vdmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvc2VyaWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZmEtZmlsbSB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogZGFya2JsdWU7XFxufVxcblxcbm5hdiB1bCBsaSArIGxpIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVye1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9jdXNzZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uZmlsbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZpbG1zIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5cXG4uZmlsbS1pbWFnZSB7XFxuICB3aWR0aDogMjJ2dztcXG4gIGhlaWdodDogMjR2dztcXG59XFxuXFxuLmZpbG0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mYS1oZWFydDphY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uY29tbWVudHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXI6IHNvbGlkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdHh0LWFyZWEge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbiNmb290ZXItYmcge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgb3V0bGluZTogMC4xcmVtIG91dHNldDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiN1c2VybmFtZSxcXG4jY29tbWVudCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4ycmVtIHNvbGlkO1xcbn1cXG5cXG4jdXNlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN1c2VyLWNvbW1lbnQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hbWUtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nik7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9wdXAtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9wdXAtd2luZG93ID4gaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xcbn1cXG5cXG4ubW92aWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgaGVpZ2h0OiAyNHZ3O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gcCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAtY29tbWVudHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICB3aWR0aDogNjAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDAuOXJlbTtcXG4gIGhlaWdodDogMzByZW07XFxufVxcblxcbi5saXN0ZWQtY29tbWVudHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDEycHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5mYS1maWxtIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxubmF2IHVsIGxpICsgbGkge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXJ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5mb2N1c3NlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibHVlO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5maWxtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmlsbXMgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcblxcbi5maWxtLWltYWdlIHtcXG4gIHdpZHRoOiAyMnZ3O1xcbiAgaGVpZ2h0OiAyNHZ3O1xcbn1cXG5cXG4uZmlsbS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5mYS1oZWFydCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmZhLWhlYXJ0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIGJvcmRlcjogc29saWQ7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN0eHQtYXJlYSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG59XFxuXFxuI2Zvb3Rlci1iZyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBvdXRsaW5lOiAwLjFyZW0gb3V0c2V0O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29tbWVudC1saXN0IGxpIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI3VzZXJuYW1lLFxcbiNjb21tZW50IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQ7XFxufVxcblxcbiN1c2VyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3VzZXItY29tbWVudCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubmFtZS1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjU2KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5wb3B1cC13aW5kb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5wb3B1cC13aW5kb3cgPiBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZWQ7XFxufVxcblxcbi5tb3ZpZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBoZWlnaHQ6IDI0dnc7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5kZXNjcmlwdGlvbiA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wb3B1cC1jb21tZW50cyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIHdpZHRoOiA2MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMC45cmVtO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG59XFxuXFxuLmxpc3RlZC1jb21tZW50e1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJZCA9ICdBNmF3S1JqNU9OSEd3NXR3Y0tESCc7XG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChjb21tZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICB9KTtcbn07XG5jb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoY29tbWVudEFycmF5KSA9PiB7XG4gIGlmIChjb21tZW50QXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gY29tbWVudEFycmF5Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7IGdldENvbW1lbnQsIHBvc3RDb21tZW50LCBjb3VudENvbW1lbnRzIH07XG4iLCJpbXBvcnQgZ2V0U2VyaWVzIGZyb20gJy4vc2VyaWVzLmpzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMuanMnO1xuaW1wb3J0IGNvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IHsgZmlsbUxpa2VzLCBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0ICogYXMgVGVtcGxhdGVzIGZyb20gJy4vaHRtbF90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtcycpO1xuICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGdldE1vdmllcygpLm1hcChhc3luYyAobW92aWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgbW92aWU7XG4gICAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gbW92aWVEYXRhLmlkKTtcbiAgICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gVGVtcGxhdGVzLmZpbG1UZW1wbGF0ZShtb3ZpZURhdGEsIGluZGV4LCBsaWtlcy5saWtlcyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XG4gICAgY29uc3QgbGlrZXNOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuICAgIHJldHVybiB7IGJ1dHRvbnM6IGJ0biwgbGlrZXNJY29uczogbGlrZXNOb2RlcyB9O1xuICB9KTtcbiAgY29uc3QgZXZlbnRzRWxlbWVudHMgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICBjb25zdCBjb21tZW50c0J1dHRvbnMgPSAoYXdhaXQgZXZlbnRzRWxlbWVudHMpLmJ1dHRvbnM7XG4gIGNvbnN0IHsgbGlrZXNJY29ucyB9ID0gYXdhaXQgZXZlbnRzRWxlbWVudHM7XG4gIGZpbG1MaWtlcyhsaWtlc0ljb25zKTtcbiAgY29tbWVudHMoY29tbWVudHNCdXR0b25zLCAnbW92aWVzJyk7XG59O1xuXG5jb25zdCBkaXNwbGF5U2VyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtcycpO1xuICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGdldFNlcmllcygpLm1hcChhc3luYyAoc2VyaWVzLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHNlcmllc0RhdGEgPSBhd2FpdCBzZXJpZXM7XG4gICAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gc2VyaWVzRGF0YS5pZCk7XG4gICAgY29uc3QgbnVtTGlrZXMgPSBsaWtlcyAhPT0gdW5kZWZpbmVkID8gbGlrZXMubGlrZXMgOiAwO1xuICAgIGZpbG1zQ29udGFpbmVyLmlubmVySFRNTCArPSBUZW1wbGF0ZXMuZmlsbVRlbXBsYXRlKHNlcmllc0RhdGEsIGluZGV4LCBudW1MaWtlcyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XG4gICAgY29uc3QgbGlrZXNOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuICAgIHJldHVybiB7IGJ1dHRvbnM6IGJ0biwgbGlrZXNJY29uczogbGlrZXNOb2RlcyB9O1xuICB9KTtcbiAgY29uc3QgZXZlbnRzRWxlbWVudHMgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICBjb25zdCBjb21tZW50c0J1dHRvbnMgPSAoYXdhaXQgZXZlbnRzRWxlbWVudHMpLmJ1dHRvbnM7XG4gIGNvbnN0IHsgbGlrZXNJY29ucyB9ID0gYXdhaXQgZXZlbnRzRWxlbWVudHM7XG4gIGZpbG1MaWtlcyhsaWtlc0ljb25zKTtcbiAgY29tbWVudHMoY29tbWVudHNCdXR0b25zLCAnc2VyaWVzJyk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVzLCBkaXNwbGF5U2VyaWVzIH07XG4iLCJpbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW92aWVzLmpzJztcbmltcG9ydCBnZXRTZXJpZXMgZnJvbSAnLi9zZXJpZXMuanMnO1xuaW1wb3J0ICogYXMgVGVtcGxhdGVzIGZyb20gJy4vaHRtbF90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCBjb21tZW50cyA9IGFzeW5jIChkYXRhLCB0eXBlKSA9PiB7XG4gIGRhdGEuZm9yRWFjaChhc3luYyAoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZmlsbURhdGEgPSB0eXBlID09PSAnbW92aWVzJyA/IGF3YWl0IGdldE1vdmllcygpW2J0bi5pZF0gOiBhd2FpdCBnZXRTZXJpZXMoKVtidG4uaWRdO1xuICAgICAgVGVtcGxhdGVzLnBvcFVwVGVtcGxhdGUoZmlsbURhdGEpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzOyIsImltcG9ydCAqIGFzIFVJIGZyb20gJy4vYXBwVUkuanMnO1xuaW1wb3J0IGdldE1vdmllcyBmcm9tICcuL21vdmllcy5qcyc7XG5pbXBvcnQgZ2V0U2VyaWVzIGZyb20gJy4vc2VyaWVzLmpzJztcbmltcG9ydCBjb3VudEl0ZW1zIGZyb20gJy4vaXRlbXNfY291bnRlci5qcyc7XG5cbmNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1zZWN0Jyk7XG5jb25zdCBzZXJpZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmllcy1zZWN0Jyk7XG5jb25zdCBudW1PZk1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW0tb2YtbW92aWVzJyk7XG5jb25zdCBudW1PZlNlcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW0tb2Ytc2VyaWVzJyk7XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgVUkuZGlzcGxheU1vdmllcygpO1xuICAgIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1c3NlZCcpO1xuICAgIG51bU9mTW92aWVzLmlubmVySFRNTCA9IGAoJHtjb3VudEl0ZW1zKGdldE1vdmllcygpKX0pYDtcbiAgfSk7XG5cbiAgbW92aWVTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1c3NlZCcpO1xuICAgIHNlcmllc1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNzZWQnKTtcbiAgICBVSS5kaXNwbGF5TW92aWVzKCk7XG4gICAgbnVtT2ZNb3ZpZXMuaW5uZXJIVE1MID0gYCgke2NvdW50SXRlbXMoZ2V0TW92aWVzKCkpfSlgO1xuICAgIG51bU9mU2VyaWVzLmlubmVySFRNTCA9ICcnO1xuICB9KTtcblxuICBzZXJpZXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlcmllc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcbiAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNzZWQnKTtcbiAgICBVSS5kaXNwbGF5U2VyaWVzKCk7XG4gICAgbnVtT2ZTZXJpZXMuaW5uZXJIVE1MID0gYCgke2NvdW50SXRlbXMoZ2V0U2VyaWVzKCkpfSlgO1xuICAgIG51bU9mTW92aWVzLmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudCwgY291bnRDb21tZW50cyB9IGZyb20gJy4vYXBpY29tbWVudC5qcyc7XG5cbmNvbnN0IGZpbG1UZW1wbGF0ZSA9IChpbmZvLCBpbmRleCwgbnVtTGlrZXMpID0+IGBcbjxsaT5cbiAgPGRpdiBjbGFzcz0naW1hZ2UtY29udGFpbmVyJz5cbiAgICA8aW1nIHNyYz0ke2luZm8uaW1hZ2V9IGNsYXNzPSdmaWxtLWltYWdlJz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9J2ZpbG0taW5mbyc+XG4gICAgPGgxIGNsYXNzPSdmaWxtLXRpdGxlJz4ke2luZm8ubmFtZX08L2gxPlxuICAgIDxkaXYgY2xhc3M9J2xpa2VzJz5cbiAgICAgIDxpIGNsYXNzPSdmYXIgZmEtaGVhcnQnIGlkPScke2luZm8uaWR9Jz48L2k+XG4gICAgICA8c3BhbiBjbGFzcz0nbGlrZXMnPiR7bnVtTGlrZXN9ICR7TnVtYmVyKG51bUxpa2VzKSA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9IDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY29tbWVudHMnIGlkPScke2luZGV4fSc+Q29tbWVudHM8L2J1dHRvbj5cbjwvbGk+XG5gO1xuXG5jb25zdCBwb3BVcFRlbXBsYXRlID0gYXN5bmMgKG1vdmllKSA9PiB7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICBjb25zdCBjb21tZW50RGF0YSA9IGF3YWl0IGdldENvbW1lbnQobW92aWUuaWQpO1xuICBjb25zdCBjb21tZW50Q291bnQgPSBjb3VudENvbW1lbnRzKGNvbW1lbnREYXRhKTtcbiAgY29uc3QgY29tbWVudEl0ZW1zID0gKCkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50RGF0YSkpIHtcbiAgICAgIHJldHVybiAnPGxpPk5vIGNvbW1lbnQ8L2xpPic7XG4gICAgfVxuICAgIGNvbnN0IGNvbW1lbnRUZW1wbGF0ZSA9IGNvbW1lbnREYXRhLm1hcCgoY29tbWVudCkgPT4gYDxsaT4ke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gKTtcbiAgICByZXR1cm4gY29tbWVudFRlbXBsYXRlLmpvaW4oJycpO1xuICB9O1xuXG4gIHBvcFVwQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz0ncG9wdXAtd2luZG93Jz5cbiAgICA8aDIgY2xhc3M9J21vdmllLXRpdGxlJz4ke21vdmllLm5hbWV9PC9oMj5cbiAgICA8c3ZnIHN0eWxlPSd3aWR0aDoyNHB4O2hlaWdodDoyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIGNsYXNzPSdjbG9zZS1pY29uJz5cbiAgICAgIDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWicgLz5cbiAgICA8L3N2Zz5cbiAgICA8ZGl2IGNsYXNzPSdtb3ZpZS1pbmZvJz5cbiAgICAgIDxpbWcgc3JjPSR7bW92aWUuaW1hZ2V9IGNsYXNzPSdmaWxtLWltYWdlJz5cbiAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgPHNwYW4+PGI+QXZlcmFnZSBSdW50aW1lOjwvYj4gJHttb3ZpZS5ydW50aW1lfSBtaW51dGVzPC9zcGFuPlxuICAgICAgICA8c3Bhbj48Yj5FbmRlZDo8L2I+ICR7bW92aWUuZW5kZWR9IDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PGI+U3VtbWFyeTo8L2I+ICR7bW92aWUuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncG9wdXAtY29tbWVudHMnPkNvbW1lbnRzICgke2NvbW1lbnRDb3VudH0pPC9kaXY+XG4gIDxmb3JtIGNsYXNzPSdmb3JtLXN1Ym1pdCc+XG4gIDxkaXYgY2xhc3M9J2Zvcm0tY29udGFpbmVyJz5cbiAgPHVsIGNsYXNzPSdjb21tZW50LWxpc3QnPiR7Y29tbWVudEl0ZW1zKCl9PC91bD5cbiAgIDxkaXYgY2xhc3M9J25hbWUtZmllbGQnPlxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJz5cbiAgICA8dGV4dGFyZWEgbmFtZT0ndGV4dGFyZWEnIGlkPSdjb21tZW50JyBjb2xzPScxMCcgcm93cz0nNScgcGxhY2Vob2xkZXI9J3BsZWFzZSBhZGQgYSBjb21tZW50Jz48L3RleHRhcmVhPlxuICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5Db21tZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgPC9kaXY+XG4gIGA7XG5cbiAgcG9wVXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuICBjbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBwb3BVcENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc3VibWl0Jyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgY29uc3QgY29tbWVudCA9IHtcbiAgICAgIHVzZXJuYW1lOiBmb3JtLmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcbiAgICAgIGNvbW1lbnQ6IGZvcm0uZWxlbWVudHMuY29tbWVudC52YWx1ZS50cmltKCksXG4gICAgICBpdGVtX2lkOiBtb3ZpZS5pZCxcbiAgICB9O1xuXG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGF3YWl0IHBvc3RDb21tZW50KGNvbW1lbnQpO1xuICAgIGNvbnN0IGNvbW1lbnRJbmZvID0gYXdhaXQgZ2V0Q29tbWVudChjb21tZW50Lml0ZW1faWQpO1xuICAgIGNvbnN0IGNvdW50Q29tbWVudCA9IGNvdW50Q29tbWVudHMoY29tbWVudEluZm8pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb21tZW50cycpLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb3VudENvbW1lbnR9KWA7XG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tZW50SW5mby5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGA8bGk+PGgxPiR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTxoMT48L2xpPmA7XG4gICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0SXRlbTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaWxtVGVtcGxhdGUsIHBvcFVwVGVtcGxhdGUgfTtcbiIsImNvbnN0IGNvdW50SXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50SXRlbXM7IiwiY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgYXBwSWQgPSAnQTZhd0tSajVPTkhHdzV0d2NLREgnO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2xpa2VzYCk7XG4gIGNvbnN0IGxpa2VzRGF0YSA9IChhd2FpdCByZXNwb25zZSkuanNvbigpO1xuICByZXR1cm4gbGlrZXNEYXRhO1xufTtcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGlkLCBpY29uLCBjb250ZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IFtsaWtlc10gPSBsaWtlc0FycmF5LmZpbHRlcigobikgPT4gTnVtYmVyKG4uaXRlbV9pZCkgPT09IE51bWJlcihpY29uLmlkKSk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYCR7bGlrZXMubGlrZXN9ICR7TnVtYmVyKGxpa2VzLmxpa2VzKSA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9YDtcbn07XG5cbmNvbnN0IGZpbG1MaWtlcyA9IGFzeW5jIChsaWtlc0ljb25zKSA9PiB7XG4gIGxpa2VzSWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xuICAgICAgICBwb3N0TGlrZXMoZS50YXJnZXQuaWQsIGUudGFyZ2V0LCBpY29uLmNoaWxkcmVuWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaWxtTGlrZXMsIGdldExpa2VzLCBwb3N0TGlrZXMgfTsiLCJjb25zdCBmaWxtc0lEID0gWzMxNDE0MiwgNzk1NTEsIDM0MzQzNSwgMzc3NjczLCA4MDI3MCwgMjQ4NTk2XTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/dGhldHZkYj0nO1xuXG5jb25zdCBnZXRNb3ZpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGZpbG1zSUQubWFwKGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBmZXRjaChgJHtiYXNlVXJsfSR7aWR9YCk7XG4gICAgY29uc3QgcmVzcG9uZSA9IChhd2FpdCBkYXRhKS5qc29uKCk7XG4gICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXNwb25lO1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG5hbWU6IG1vdmllLm5hbWUsXG4gICAgICBpbWFnZTogbW92aWUuaW1hZ2Uub3JpZ2luYWwsXG4gICAgICBkZXNjcmlwdGlvbjogbW92aWUuc3VtbWFyeSxcbiAgICAgIHJ1bnRpbWU6IG1vdmllLmF2ZXJhZ2VSdW50aW1lLFxuICAgICAgZW5kZWQ6IG1vdmllLmVuZGVkLFxuICAgICAgaWQ6IG1vdmllLmlkLFxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZXM7XG4iLCJjb25zdCBmaWxtc0lEID0gWzI3NjU2MiwgMzUwNjY1LCAzOTY1NjQsIDM1OTI2NCwgMzY0OTI4LCAyNzk1MzZdO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL2xvb2t1cC9zaG93cz90aGV0dmRiPSc7XG5cbmNvbnN0IGdldFNlcmllcyA9ICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmlsbXNJRC5tYXAoYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZldGNoKGAke2Jhc2VVcmx9JHtpZH1gKTtcbiAgICBjb25zdCByZXNwb25lID0gKGF3YWl0IGRhdGEpLmpzb24oKTtcbiAgICBjb25zdCBzZXJpZXMgPSBhd2FpdCByZXNwb25lO1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG5hbWU6IHNlcmllcy5uYW1lLFxuICAgICAgaW1hZ2U6IHNlcmllcy5pbWFnZS5vcmlnaW5hbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBzZXJpZXMuc3VtbWFyeSxcbiAgICAgIHJ1bnRpbWU6IHNlcmllcy5hdmVyYWdlUnVudGltZSxcbiAgICAgIGVuZGVkOiBzZXJpZXMuZW5kZWQsXG4gICAgICBpZDogc2VyaWVzLmlkLFxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZXJpZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vbW9kdWxlcy9ldmVudHMuanMnO1xuXG5ldmVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==