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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n  gap: 12px;\n  font-size: 10px;\n}\n\nnav ul {\n  list-style-type: none;\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n}\n\n.fa-film {\n  font-size: 5rem;\n  color: darkblue;\n}\n\nnav ul li + li {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.focussed {\n  text-decoration: underline blue;\n}\n\nmain {\n  margin-bottom: 5rem;\n}\n\n.films {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: 0 auto;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n.image-container {\n  width: 100%;\n}\n\n.films li {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  border: 0.2rem solid red;\n  text-align: center;\n  font-size: 1vw;\n}\n\n.film-image {\n  width: 22vw;\n  height: 24vw;\n}\n\n.film-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n}\n\n.fa-heart {\n  font-size: 2rem;\n  cursor: pointer;\n  color: blue;\n}\n\n.fa-heart:active {\n  color: red;\n  transform: scale(1.2);\n  -webkit-transform: scale(1.4);\n  -moz-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -o-transform: scale(1.2);\n}\n\n.comments {\n  align-self: flex-start;\n  margin: 0 0 1rem 1rem;\n  cursor: pointer;\n  font-size: 1.5rem;\n  padding: 0.3em;\n  border: solid;\n}\n\nfooter {\n  width: 100%;\n  border: 0.2rem solid black;\n  background-color: white;\n}\n\n#txt-area {\n  height: 5rem;\n  font-size: 2rem;\n  padding-left: 2em;\n}\n\n#footer-bg {\n  height: 3rem;\n  background-color: grey;\n}\n\nform {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.likes {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n\n.comment-list {\n  width: 50%;\n  height: 95%;\n  outline: 0.1rem outset;\n  overflow-y: scroll;\n}\n\n.comment-list li {\n  word-wrap: break-word;\n}\n\n#username,\n#comment {\n  outline: none;\n  border: none;\n  border-bottom: 0.2rem solid;\n}\n\n#user {\n  font-size: 1.2rem;\n  color: blue;\n  font-weight: bold;\n}\n\n#user-comment {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.name-field {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.popup-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.656);\n  display: none;\n  padding: 4rem;\n  backdrop-filter: blur(3px);\n  overflow-y: scroll;\n}\n\n.popup-window {\n  position: relative;\n  width: 80%;\n  padding: 20px;\n  background-color: white;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  height: 90vh;\n  overflow-y: scroll;\n}\n\n.popup-window > h2 {\n  font-size: 2rem;\n  align-self: center;\n  text-decoration: underline red;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border: solid;\n  height: 24vw;\n  overflow-y: scroll;\n}\n\n.description p {\n  font-size: 1.7rem;\n  font-family: sans-serif;\n}\n\n.description > span {\n  font-size: 1.5rem;\n  font-family: sans-serif;\n  padding: 1rem;\n}\n\n.popup-comments {\n  align-self: center;\n  font-size: 1.5rem;\n  text-decoration: underline;\n  padding: 30px;\n}\n\n.close-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n.close-icon:hover {\n  color: red;\n  transform: scale(1.5);\n}\n\n.form-container {\n  display: flex;\n  flex-direction: row-reverse;\n  border: solid;\n  width: 60%;\n  justify-content: space-around;\n  gap: 0.9rem;\n  height: 30rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n  gap: 12px;\n  font-size: 10px;\n}\n\nnav ul {\n  list-style-type: none;\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n}\n\n.fa-film {\n  font-size: 5rem;\n  color: darkblue;\n}\n\nnav ul li + li {\n  font-size: 3rem;\n  cursor: pointer;\n}\n\n.focussed {\n  text-decoration: underline blue;\n}\n\nmain {\n  margin-bottom: 5rem;\n}\n\n.films {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: 0 auto;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n.image-container {\n  width: 100%;\n}\n\n.films li {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  border: 0.2rem solid red;\n  text-align: center;\n  font-size: 1vw;\n}\n\n.film-image {\n  width: 22vw;\n  height: 24vw;\n}\n\n.film-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n}\n\n.fa-heart {\n  font-size: 2rem;\n  cursor: pointer;\n  color: blue;\n}\n\n.fa-heart:active {\n  color: red;\n  transform: scale(1.2);\n  -webkit-transform: scale(1.4);\n  -moz-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -o-transform: scale(1.2);\n}\n\n.comments {\n  align-self: flex-start;\n  margin: 0 0 1rem 1rem;\n  cursor: pointer;\n  font-size: 1.5rem;\n  padding: 0.3em;\n  border: solid;\n}\n\nfooter {\n  width: 100%;\n  border: 0.2rem solid black;\n  background-color: white;\n}\n\n#txt-area {\n  height: 5rem;\n  font-size: 2rem;\n  padding-left: 2em;\n}\n\n#footer-bg {\n  height: 3rem;\n  background-color: grey;\n}\n\nform {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.likes {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n\n.comment-list {\n  width: 50%;\n  height: 95%;\n  outline: 0.1rem outset;\n  overflow-y: scroll;\n}\n\n.comment-list li {\n  word-wrap: break-word;\n}\n\n#username,\n#comment {\n  outline: none;\n  border: none;\n  border-bottom: 0.2rem solid;\n}\n\n#user {\n  font-size: 1.2rem;\n  color: blue;\n  font-weight: bold;\n}\n\n#user-comment {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.name-field {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.popup-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.656);\n  display: none;\n  padding: 4rem;\n  backdrop-filter: blur(3px);\n  overflow-y: scroll;\n}\n\n.popup-window {\n  position: relative;\n  width: 80%;\n  padding: 20px;\n  background-color: white;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  height: 90vh;\n  overflow-y: scroll;\n}\n\n.popup-window > h2 {\n  font-size: 2rem;\n  align-self: center;\n  text-decoration: underline red;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border: solid;\n  height: 24vw;\n  overflow-y: scroll;\n}\n\n.description p {\n  font-size: 1.7rem;\n  font-family: sans-serif;\n}\n\n.description > span {\n  font-size: 1.5rem;\n  font-family: sans-serif;\n  padding: 1rem;\n}\n\n.popup-comments {\n  align-self: center;\n  font-size: 1.5rem;\n  text-decoration: underline;\n  padding: 30px;\n}\n\n.close-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n.close-icon:hover {\n  color: red;\n  transform: scale(1.5);\n}\n\n.form-container {\n  display: flex;\n  flex-direction: row-reverse;\n  border: solid;\n  width: 60%;\n  justify-content: space-around;\n  gap: 0.9rem;\n  height: 30rem;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsK0JBQStCLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsVUFBVSxjQUFjLGVBQWUsNEJBQTRCLEdBQUcsUUFBUSxxQkFBcUIsY0FBYyxvQkFB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ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBpY29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBwVUkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2h0bWxfdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92aWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9zZXJpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDEycHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5mYS1maWxtIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxubmF2IHVsIGxpICsgbGkge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9jdXNzZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uZmlsbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZpbG1zIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5cXG4uZmlsbS1pbWFnZSB7XFxuICB3aWR0aDogMjJ2dztcXG4gIGhlaWdodDogMjR2dztcXG59XFxuXFxuLmZpbG0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mYS1oZWFydDphY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uY29tbWVudHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXI6IHNvbGlkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdHh0LWFyZWEge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbiNmb290ZXItYmcge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgb3V0bGluZTogMC4xcmVtIG91dHNldDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiN1c2VybmFtZSxcXG4jY29tbWVudCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4ycmVtIHNvbGlkO1xcbn1cXG5cXG4jdXNlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN1c2VyLWNvbW1lbnQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hbWUtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nik7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9wdXAtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9wdXAtd2luZG93ID4gaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xcbn1cXG5cXG4ubW92aWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgaGVpZ2h0OiAyNHZ3O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gcCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAtY29tbWVudHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICB3aWR0aDogNjAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDAuOXJlbTtcXG4gIGhlaWdodDogMzByZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFD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QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDEycHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5mYS1maWxtIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxubmF2IHVsIGxpICsgbGkge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9jdXNzZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uZmlsbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZpbG1zIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5cXG4uZmlsbS1pbWFnZSB7XFxuICB3aWR0aDogMjJ2dztcXG4gIGhlaWdodDogMjR2dztcXG59XFxuXFxuLmZpbG0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5mYS1oZWFydDphY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uY29tbWVudHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXI6IHNvbGlkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdHh0LWFyZWEge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbiNmb290ZXItYmcge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgb3V0bGluZTogMC4xcmVtIG91dHNldDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiN1c2VybmFtZSxcXG4jY29tbWVudCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4ycmVtIHNvbGlkO1xcbn1cXG5cXG4jdXNlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN1c2VyLWNvbW1lbnQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5hbWUtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nik7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9wdXAtd2luZG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucG9wdXAtd2luZG93ID4gaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xcbn1cXG5cXG4ubW92aWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgaGVpZ2h0OiAyNHZ3O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gcCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucG9wdXAtY29tbWVudHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICB3aWR0aDogNjAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDAuOXJlbTtcXG4gIGhlaWdodDogMzByZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgYXBwSWQgPSAnQTZhd0tSajVPTkhHdzV0d2NLREgnO1xuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoY29tbWVudCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50KSxcbiAgfSk7XG59O1xuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjb3VudENvbW1lbnRzID0gKGNvbW1lbnRBcnJheSkgPT4ge1xuICBpZiAoY29tbWVudEFycmF5Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIGNvbW1lbnRBcnJheS5sZW5ndGg7XG59O1xuXG5leHBvcnQgeyBnZXRDb21tZW50LCBwb3N0Q29tbWVudCwgY291bnRDb21tZW50cyB9O1xuIiwiaW1wb3J0IGdldFNlcmllcyBmcm9tICcuL3Nlcmllcy5qcyc7XG5pbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW92aWVzLmpzJztcbmltcG9ydCBjb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCB7IGZpbG1MaWtlcywgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzLmpzJztcbmltcG9ydCAqIGFzIFRlbXBsYXRlcyBmcm9tICcuL2h0bWxfdGVtcGxhdGVzLmpzJztcblxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmlsbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsbXMnKTtcbiAgZmlsbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGxpa2VzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCByZXN1bHQgPSBnZXRNb3ZpZXMoKS5tYXAoYXN5bmMgKG1vdmllLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG1vdmllRGF0YSA9IGF3YWl0IG1vdmllO1xuICAgIGNvbnN0IFtsaWtlc10gPSBsaWtlc0FycmF5LmZpbHRlcigobikgPT4gTnVtYmVyKG4uaXRlbV9pZCkgPT09IG1vdmllRGF0YS5pZCk7XG4gICAgZmlsbXNDb250YWluZXIuaW5uZXJIVE1MICs9IFRlbXBsYXRlcy5maWxtVGVtcGxhdGUobW92aWVEYXRhLCBpbmRleCwgbGlrZXMubGlrZXMpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xuICAgIGNvbnN0IGxpa2VzTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICByZXR1cm4geyBidXR0b25zOiBidG4sIGxpa2VzSWNvbnM6IGxpa2VzTm9kZXMgfTtcbiAgfSk7XG4gIGNvbnN0IGV2ZW50c0VsZW1lbnRzID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgY29uc3QgY29tbWVudHNCdXR0b25zID0gKGF3YWl0IGV2ZW50c0VsZW1lbnRzKS5idXR0b25zO1xuICBjb25zdCB7IGxpa2VzSWNvbnMgfSA9IGF3YWl0IGV2ZW50c0VsZW1lbnRzO1xuICBmaWxtTGlrZXMobGlrZXNJY29ucyk7XG4gIGNvbW1lbnRzKGNvbW1lbnRzQnV0dG9ucywgJ21vdmllcycpO1xufTtcblxuY29uc3QgZGlzcGxheVNlcmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmlsbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsbXMnKTtcbiAgZmlsbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGxpa2VzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCByZXN1bHQgPSBnZXRTZXJpZXMoKS5tYXAoYXN5bmMgKHNlcmllcywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gYXdhaXQgc2VyaWVzO1xuICAgIGNvbnN0IFtsaWtlc10gPSBsaWtlc0FycmF5LmZpbHRlcigobikgPT4gTnVtYmVyKG4uaXRlbV9pZCkgPT09IHNlcmllc0RhdGEuaWQpO1xuICAgIGNvbnN0IG51bUxpa2VzID0gbGlrZXMgIT09IHVuZGVmaW5lZCA/IGxpa2VzLmxpa2VzIDogMDtcbiAgICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gVGVtcGxhdGVzLmZpbG1UZW1wbGF0ZShzZXJpZXNEYXRhLCBpbmRleCwgbnVtTGlrZXMpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xuICAgIGNvbnN0IGxpa2VzTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICByZXR1cm4geyBidXR0b25zOiBidG4sIGxpa2VzSWNvbnM6IGxpa2VzTm9kZXMgfTtcbiAgfSk7XG4gIGNvbnN0IGV2ZW50c0VsZW1lbnRzID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgY29uc3QgY29tbWVudHNCdXR0b25zID0gKGF3YWl0IGV2ZW50c0VsZW1lbnRzKS5idXR0b25zO1xuICBjb25zdCB7IGxpa2VzSWNvbnMgfSA9IGF3YWl0IGV2ZW50c0VsZW1lbnRzO1xuICBmaWxtTGlrZXMobGlrZXNJY29ucyk7XG4gIGNvbW1lbnRzKGNvbW1lbnRzQnV0dG9ucywgJ3NlcmllcycpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheU1vdmllcywgZGlzcGxheVNlcmllcyB9O1xuIiwiaW1wb3J0IGdldE1vdmllcyBmcm9tICcuL21vdmllcy5qcyc7XG5pbXBvcnQgZ2V0U2VyaWVzIGZyb20gJy4vc2VyaWVzLmpzJztcbmltcG9ydCAqIGFzIFRlbXBsYXRlcyBmcm9tICcuL2h0bWxfdGVtcGxhdGVzLmpzJztcblxuY29uc3QgY29tbWVudHMgPSAoZGF0YSwgdHlwZSkgPT4ge1xuICBkYXRhLmZvckVhY2goYXN5bmMgKGJ0bikgPT4ge1xuICAgIGNvbnN0IGZpbG1EYXRhID0gdHlwZSA9PT0gJ21vdmllcycgPyBhd2FpdCBnZXRNb3ZpZXMoKVtidG4uaWRdIDogYXdhaXQgZ2V0U2VyaWVzKClbYnRuLmlkXTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBUZW1wbGF0ZXMucG9wVXBUZW1wbGF0ZShmaWxtRGF0YSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHM7IiwiaW1wb3J0ICogYXMgVUkgZnJvbSAnLi9hcHBVSS5qcyc7XG5cbmNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1zZWN0Jyk7XG5jb25zdCBzZXJpZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmllcy1zZWN0Jyk7XG5cbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgVUkuZGlzcGxheU1vdmllcygpO1xuICAgIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1c3NlZCcpO1xuICB9KTtcblxuICBtb3ZpZVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3Vzc2VkJyk7XG4gICAgc2VyaWVzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c3NlZCcpO1xuICAgIFVJLmRpc3BsYXlNb3ZpZXMoKTtcbiAgfSk7XG5cbiAgc2VyaWVzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXJpZXNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3Vzc2VkJyk7XG4gICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3Vzc2VkJyk7XG4gICAgVUkuZGlzcGxheVNlcmllcygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudCwgY291bnRDb21tZW50cyB9IGZyb20gJy4vYXBpY29tbWVudC5qcyc7XG5cbmNvbnN0IGZpbG1UZW1wbGF0ZSA9IChpbmZvLCBpbmRleCwgbnVtTGlrZXMpID0+IGBcbjxsaT5cbiAgPGRpdiBjbGFzcz0naW1hZ2UtY29udGFpbmVyJz5cbiAgICA8aW1nIHNyYz0ke2luZm8uaW1hZ2V9IGNsYXNzPSdmaWxtLWltYWdlJz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9J2ZpbG0taW5mbyc+XG4gICAgPGgxIGNsYXNzPSdmaWxtLXRpdGxlJz4ke2luZm8ubmFtZX08L2gxPlxuICAgIDxkaXYgY2xhc3M9J2xpa2VzJz5cbiAgICAgIDxpIGNsYXNzPSdmYXIgZmEtaGVhcnQnIGlkPScke2luZm8uaWR9Jz48L2k+XG4gICAgICA8c3BhbiBjbGFzcz0nbGlrZXMnPiR7bnVtTGlrZXN9ICR7TnVtYmVyKG51bUxpa2VzKSA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9IDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY29tbWVudHMnIGlkPScke2luZGV4fSc+Q29tbWVudHM8L2J1dHRvbj5cbjwvbGk+XG5gO1xuXG5jb25zdCBwb3BVcFRlbXBsYXRlID0gYXN5bmMgKG1vdmllKSA9PiB7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICBjb25zdCBjb21tZW50RGF0YSA9IGF3YWl0IGdldENvbW1lbnQobW92aWUuaWQpO1xuICBjb25zdCBjb21tZW50Q291bnQgPSBjb3VudENvbW1lbnRzKGNvbW1lbnREYXRhKTtcbiAgY29uc3QgY29tbWVudEl0ZW1zID0gKCkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50RGF0YSkpIHtcbiAgICAgIHJldHVybiAnPGxpPk5vIGNvbW1lbnQ8L2xpPic7XG4gICAgfVxuICAgIGNvbnN0IGNvbW1lbnRUZW1wbGF0ZSA9IGNvbW1lbnREYXRhLm1hcCgoY29tbWVudCkgPT4gYDxsaT4ke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gKTtcbiAgICByZXR1cm4gY29tbWVudFRlbXBsYXRlLmpvaW4oJycpO1xuICB9O1xuXG4gIHBvcFVwQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz0ncG9wdXAtd2luZG93Jz5cbiAgICA8aDIgY2xhc3M9J21vdmllLXRpdGxlJz4ke21vdmllLm5hbWV9PC9oMj5cbiAgICA8c3ZnIHN0eWxlPSd3aWR0aDoyNHB4O2hlaWdodDoyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIGNsYXNzPSdjbG9zZS1pY29uJz5cbiAgICAgIDxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWicgLz5cbiAgICA8L3N2Zz5cbiAgICA8ZGl2IGNsYXNzPSdtb3ZpZS1pbmZvJz5cbiAgICAgIDxpbWcgc3JjPSR7bW92aWUuaW1hZ2V9IGNsYXNzPSdmaWxtLWltYWdlJz5cbiAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgPHNwYW4+PGI+QXZlcmFnZSBSdW50aW1lOjwvYj4gJHttb3ZpZS5ydW50aW1lfSBtaW51dGVzPC9zcGFuPlxuICAgICAgICA8c3Bhbj48Yj5FbmRlZDo8L2I+ICR7bW92aWUuZW5kZWR9IDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PGI+U3VtbWFyeTo8L2I+ICR7bW92aWUuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncG9wdXAtY29tbWVudHMnPkNvbW1lbnRzICgke2NvbW1lbnRDb3VudH0pPC9kaXY+XG4gIDxmb3JtIGNsYXNzPSdmb3JtLXN1Ym1pdCc+XG4gIDxkaXYgY2xhc3M9J2Zvcm0tY29udGFpbmVyJz5cbiAgPHVsIGNsYXNzPSdjb21tZW50LWxpc3QnPiR7Y29tbWVudEl0ZW1zKCl9PC91bD5cbiAgIDxkaXYgY2xhc3M9J25hbWUtZmllbGQnPlxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJz5cbiAgICA8dGV4dGFyZWEgbmFtZT0ndGV4dGFyZWEnIGlkPSdjb21tZW50JyBjb2xzPScxMCcgcm93cz0nNScgcGxhY2Vob2xkZXI9J3BsZWFzZSBhZGQgYSBjb21tZW50Jz48L3RleHRhcmVhPlxuICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5Db21tZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgPC9kaXY+XG4gIGA7XG5cbiAgcG9wVXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuICBjbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBwb3BVcENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc3VibWl0Jyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgY29uc3QgY29tbWVudCA9IHtcbiAgICAgIHVzZXJuYW1lOiBmb3JtLmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcbiAgICAgIGNvbW1lbnQ6IGZvcm0uZWxlbWVudHMuY29tbWVudC52YWx1ZS50cmltKCksXG4gICAgICBpdGVtX2lkOiBtb3ZpZS5pZCxcbiAgICB9O1xuXG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGF3YWl0IHBvc3RDb21tZW50KGNvbW1lbnQpO1xuICAgIGNvbnN0IGNvbW1lbnRJbmZvID0gYXdhaXQgZ2V0Q29tbWVudChjb21tZW50Lml0ZW1faWQpO1xuICAgIGNvbnN0IGNvdW50Q29tbWVudCA9IGNvdW50Q29tbWVudHMoY29tbWVudEluZm8pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb21tZW50cycpLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb3VudENvbW1lbnR9KWA7XG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tZW50SW5mby5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGA8bGk+JHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdEl0ZW07XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZmlsbVRlbXBsYXRlLCBwb3BVcFRlbXBsYXRlIH07XG4iLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJZCA9ICdBNmF3S1JqNU9OSEd3NXR3Y0tESCc7XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gKGF3YWl0IHJlc3BvbnNlKS5qc29uKCk7XG4gIHJldHVybiBsaWtlc0RhdGE7XG59O1xuXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaWQsIGljb24sIGNvbnRlbnQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gTnVtYmVyKGljb24uaWQpKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBgJHtsaWtlcy5saWtlc30gJHtOdW1iZXIobGlrZXMubGlrZXMpID09PSAxID8gJ0xpa2UnIDogJ0xpa2VzJ31gO1xufTtcblxuY29uc3QgZmlsbUxpa2VzID0gYXN5bmMgKGxpa2VzSWNvbnMpID0+IHtcbiAgbGlrZXNJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XG4gICAgICAgIHBvc3RMaWtlcyhlLnRhcmdldC5pZCwgZS50YXJnZXQsIGljb24uY2hpbGRyZW5bMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZpbG1MaWtlcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9OyIsImNvbnN0IGZpbG1zSUQgPSBbMzE0MTQyLCA3OTU1MSwgMzQzNDM1LCAzNzc2NzMsIDgwMjcwLCAyNDg1OTZdO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL2xvb2t1cC9zaG93cz90aGV0dmRiPSc7XG5cbmNvbnN0IGdldE1vdmllcyA9ICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmlsbXNJRC5tYXAoYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZldGNoKGAke2Jhc2VVcmx9JHtpZH1gKTtcbiAgICBjb25zdCByZXNwb25lID0gKGF3YWl0IGRhdGEpLmpzb24oKTtcbiAgICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlc3BvbmU7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbmFtZTogbW92aWUubmFtZSxcbiAgICAgIGltYWdlOiBtb3ZpZS5pbWFnZS5vcmlnaW5hbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBtb3ZpZS5zdW1tYXJ5LFxuICAgICAgcnVudGltZTogbW92aWUuYXZlcmFnZVJ1bnRpbWUsXG4gICAgICBlbmRlZDogbW92aWUuZW5kZWQsXG4gICAgICBpZDogbW92aWUuaWQsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vdmllcztcbiIsImNvbnN0IGZpbG1zSUQgPSBbMjc2NTYyLCAzNTA2NjUsIDM5NjU2NCwgMzU5MjY0LCAzNjQ5MjgsIDI3OTUzNl07XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vbG9va3VwL3Nob3dzP3RoZXR2ZGI9JztcblxuY29uc3QgZ2V0U2VyaWVzID0gKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBmaWxtc0lELm1hcChhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZmV0Y2goYCR7YmFzZVVybH0ke2lkfWApO1xuICAgIGNvbnN0IHJlc3BvbmUgPSAoYXdhaXQgZGF0YSkuanNvbigpO1xuICAgIGNvbnN0IHNlcmllcyA9IGF3YWl0IHJlc3BvbmU7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbmFtZTogc2VyaWVzLm5hbWUsXG4gICAgICBpbWFnZTogc2VyaWVzLmltYWdlLm9yaWdpbmFsLFxuICAgICAgZGVzY3JpcHRpb246IHNlcmllcy5zdW1tYXJ5LFxuICAgICAgcnVudGltZTogc2VyaWVzLmF2ZXJhZ2VSdW50aW1lLFxuICAgICAgZW5kZWQ6IHNlcmllcy5lbmRlZCxcbiAgICAgIGlkOiBzZXJpZXMuaWQsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNlcmllcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9tb2R1bGVzL2V2ZW50cy5qcyc7XG5cbmV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9