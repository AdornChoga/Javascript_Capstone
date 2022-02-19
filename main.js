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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  background-color: rgb(241, 148, 93);\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: rgb(48, 49, 112);\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  gap: 12px;\r\n  font-size: 10px;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav {\r\n  border-bottom: 0.3rem solid rgb(56, 209, 89);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 1rem;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  gap: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.movies-sect,\r\n.series-sect {\r\n  font-size: clamp(1.4rem, 3.5vw, 3rem);\r\n  color: rgb(236, 233, 233);\r\n  font-family:\r\n    'Lucida Sans',\r\n    'Lucida Sans Regular',\r\n    'Lucida Grande',\r\n    'Lucida Sans Unicode',\r\n    Geneva,\r\n    Verdana,\r\n    sans-serif;\r\n  cursor: pointer;\r\n  margin: 0;\r\n}\r\n\r\n.site-title {\r\n  font-size: clamp(1.2rem, 3vw, 2.3rem);\r\n  color: white;\r\n  font-family:\r\n    'Lucida Sans',\r\n    'Lucida Sans Regular',\r\n    'Lucida Grande',\r\n    'Lucida Sans Unicode',\r\n    Geneva,\r\n    Verdana,\r\n    sans-serif;\r\n}\r\n\r\nmain {\r\n  margin-top: 10rem;\r\n  margin-bottom: 10rem;\r\n}\r\n\r\n.comment-list li {\r\n  margin: 0.2rem;\r\n  padding: 0.2rem;\r\n  font-size: 1.3rem;\r\n  border: 1px solid rgba(245, 242, 242, 0.603);\r\n  border-radius: 3px;\r\n  width: 90%;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.comment-list {\r\n  padding: 0;\r\n  width: 80%;\r\n  height: 28.8rem;\r\n  outline: 0.1rem outset;\r\n  overflow-y: scroll;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.fa-film {\r\n  font-size: clamp(2rem, 4vw, 3.2rem);\r\n  color: rgb(203, 203, 211);\r\n}\r\n\r\nnav ul li h1:hover {\r\n  transform: translateY(-2px);\r\n  color: rgb(23, 179, 106);\r\n}\r\n\r\n.focussed {\r\n  text-decoration: underline rgb(241, 148, 93);\r\n}\r\n\r\n.films {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.film {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 20rem;\r\n  background-color: rgb(48, 49, 112);\r\n  outline: inset rgb(56, 209, 89);\r\n}\r\n\r\n.image-container {\r\n  width: 100%;\r\n}\r\n\r\n.film-image {\r\n  width: 100%;\r\n  height: 20rem;\r\n}\r\n\r\n.film-info {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.popup-image {\r\n  width: clamp(30rem, 30%, 40rem);\r\n  height: 30rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: rgba(255, 8, 0, 0.863);\r\n}\r\n\r\n.fa-heart:active {\r\n  color: rgb(255, 0, 255);\r\n  transform: scale(1.2);\r\n  -webkit-transform: scale(1.4);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.comments {\r\n  align-self: flex-start;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  padding: 0.3em;\r\n  border-top-left-radius: 0.8rem;\r\n  border-bottom-right-radius: 0.8rem;\r\n  background-color: rgb(23, 179, 106);\r\n  border: none;\r\n  color: rgb(65, 47, 8);\r\n}\r\n\r\n.comments:active {\r\n  transform: scale(0.8);\r\n  -webkit-transform: scale(0.8);\r\n  -moz-transform: scale(0.8);\r\n  -ms-transform: scale(0.8);\r\n  -o-transform: scale(0.8);\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border: 0.2rem solid black;\r\n  background-color: rgb(48, 49, 112);\r\n  color: white;\r\n}\r\n\r\n#txt-area {\r\n  font-size: clamp(1.2rem, 2vw, 2rem);\r\n  padding-left: 2em;\r\n}\r\n\r\n#footer-bg {\r\n  height: clamp(0.5rem, 2vw, 2rem);\r\n  background-color: grey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 2rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: sans-serif;\r\n  color: rgb(216, 216, 189);\r\n}\r\n\r\n#username,\r\n#comment {\r\n  background-color: #f1945d;\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 0.2rem solid;\r\n}\r\n\r\n#username::placeholder,\r\n#comment::placeholder {\r\n  color: black;\r\n}\r\n\r\n#input-error::before {\r\n  content: \"*\";\r\n  color: red;\r\n}\r\n\r\n#input-error {\r\n  display: none;\r\n  font-size: clamp(1rem, 2vw, 1.2rem);\r\n  font-style: italic;\r\n}\r\n\r\n#submit {\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  background-color: rgb(23, 179, 106);\r\n}\r\n\r\n#user {\r\n  font-size: 1.2rem;\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n#user-comment {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.name-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n  align-self: flex-start;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.656);\r\n  display: none;\r\n  padding: 2rem max(5vw, 0.5rem);\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window {\r\n  position: relative;\r\n  width: 80%;\r\n  padding: 2rem;\r\n  background-color: #f1945d;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window > h2 {\r\n  font-size: 2rem;\r\n  align-self: center;\r\n  text-decoration: underline red;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  border: solid;\r\n  height: 30rem;\r\n  overflow-y: scroll;\r\n  width: 70%;\r\n}\r\n\r\n.description p {\r\n  font-size: 1.7rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.description > span {\r\n  font-size: 1.5rem;\r\n  font-family: sans-serif;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-comments {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  text-decoration: underline;\r\n  padding: 3rem;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n.close-icon:hover {\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  border: solid;\r\n  width: clamp(50rem, 70%, 80rem);\r\n  justify-content: space-around;\r\n  gap: 4rem;\r\n  height: 30rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .movie-info {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .description {\r\n    width: 100%;\r\n  }\r\n\r\n  .films {\r\n    width: 100%;\r\n  }\r\n\r\n  .popup-image {\r\n    width: min(70vw, 30rem);\r\n    height: 30rem;\r\n  }\r\n\r\n  .form-container {\r\n    flex-direction: column-reverse;\r\n    height: 45rem;\r\n    padding: 0;\r\n    width: clamp(25rem, 70%, 35rem);\r\n    gap: 0;\r\n    border: solid;\r\n  }\r\n\r\n  .comment-list {\r\n    width: 100%;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .name-field {\r\n    width: clamp(17rem, 50%, 25rem);\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n  .film {\r\n    width: 15rem;\r\n  }\r\n\r\n  .film-image {\r\n    height: 15rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  font-size: 62.5%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  background-color: rgb(241, 148, 93);\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: rgb(48, 49, 112);\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  gap: 12px;\r\n  font-size: 10px;\r\n}\r\n\r\nheader div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav {\r\n  border-bottom: 0.3rem solid rgb(56, 209, 89);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 1rem;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  gap: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.movies-sect,\r\n.series-sect {\r\n  font-size: clamp(1.4rem, 3.5vw, 3rem);\r\n  color: rgb(236, 233, 233);\r\n  font-family:\r\n    'Lucida Sans',\r\n    'Lucida Sans Regular',\r\n    'Lucida Grande',\r\n    'Lucida Sans Unicode',\r\n    Geneva,\r\n    Verdana,\r\n    sans-serif;\r\n  cursor: pointer;\r\n  margin: 0;\r\n}\r\n\r\n.site-title {\r\n  font-size: clamp(1.2rem, 3vw, 2.3rem);\r\n  color: white;\r\n  font-family:\r\n    'Lucida Sans',\r\n    'Lucida Sans Regular',\r\n    'Lucida Grande',\r\n    'Lucida Sans Unicode',\r\n    Geneva,\r\n    Verdana,\r\n    sans-serif;\r\n}\r\n\r\nmain {\r\n  margin-top: 10rem;\r\n  margin-bottom: 10rem;\r\n}\r\n\r\n.comment-list li {\r\n  margin: 0.2rem;\r\n  padding: 0.2rem;\r\n  font-size: 1.3rem;\r\n  border: 1px solid rgba(245, 242, 242, 0.603);\r\n  border-radius: 3px;\r\n  width: 90%;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.comment-list {\r\n  padding: 0;\r\n  width: 80%;\r\n  height: 28.8rem;\r\n  outline: 0.1rem outset;\r\n  overflow-y: scroll;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.fa-film {\r\n  font-size: clamp(2rem, 4vw, 3.2rem);\r\n  color: rgb(203, 203, 211);\r\n}\r\n\r\nnav ul li h1:hover {\r\n  transform: translateY(-2px);\r\n  color: rgb(23, 179, 106);\r\n}\r\n\r\n.focussed {\r\n  text-decoration: underline rgb(241, 148, 93);\r\n}\r\n\r\n.films {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.film {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 20rem;\r\n  background-color: rgb(48, 49, 112);\r\n  outline: inset rgb(56, 209, 89);\r\n}\r\n\r\n.image-container {\r\n  width: 100%;\r\n}\r\n\r\n.film-image {\r\n  width: 100%;\r\n  height: 20rem;\r\n}\r\n\r\n.film-info {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.popup-image {\r\n  width: clamp(30rem, 30%, 40rem);\r\n  height: 30rem;\r\n}\r\n\r\n.fa-heart {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: rgba(255, 8, 0, 0.863);\r\n}\r\n\r\n.fa-heart:active {\r\n  color: rgb(255, 0, 255);\r\n  transform: scale(1.2);\r\n  -webkit-transform: scale(1.4);\r\n  -moz-transform: scale(1.2);\r\n  -ms-transform: scale(1.2);\r\n  -o-transform: scale(1.2);\r\n}\r\n\r\n.comments {\r\n  align-self: flex-start;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  padding: 0.3em;\r\n  border-top-left-radius: 0.8rem;\r\n  border-bottom-right-radius: 0.8rem;\r\n  background-color: rgb(23, 179, 106);\r\n  border: none;\r\n  color: rgb(65, 47, 8);\r\n}\r\n\r\n.comments:active {\r\n  transform: scale(0.8);\r\n  -webkit-transform: scale(0.8);\r\n  -moz-transform: scale(0.8);\r\n  -ms-transform: scale(0.8);\r\n  -o-transform: scale(0.8);\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  border: 0.2rem solid black;\r\n  background-color: rgb(48, 49, 112);\r\n  color: white;\r\n}\r\n\r\n#txt-area {\r\n  font-size: clamp(1.2rem, 2vw, 2rem);\r\n  padding-left: 2em;\r\n}\r\n\r\n#footer-bg {\r\n  height: clamp(0.5rem, 2vw, 2rem);\r\n  background-color: grey;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 2rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: sans-serif;\r\n  color: rgb(216, 216, 189);\r\n}\r\n\r\n#username,\r\n#comment {\r\n  background-color: #f1945d;\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 0.2rem solid;\r\n}\r\n\r\n#username::placeholder,\r\n#comment::placeholder {\r\n  color: black;\r\n}\r\n\r\n#input-error::before {\r\n  content: \"*\";\r\n  color: red;\r\n}\r\n\r\n#input-error {\r\n  display: none;\r\n  font-size: clamp(1rem, 2vw, 1.2rem);\r\n  font-style: italic;\r\n}\r\n\r\n#submit {\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  background-color: rgb(23, 179, 106);\r\n}\r\n\r\n#user {\r\n  font-size: 1.2rem;\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n#user-comment {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.name-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n  align-self: flex-start;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.656);\r\n  display: none;\r\n  padding: 2rem max(5vw, 0.5rem);\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window {\r\n  position: relative;\r\n  width: 80%;\r\n  padding: 2rem;\r\n  background-color: #f1945d;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-window > h2 {\r\n  font-size: 2rem;\r\n  align-self: center;\r\n  text-decoration: underline red;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  border: solid;\r\n  height: 30rem;\r\n  overflow-y: scroll;\r\n  width: 70%;\r\n}\r\n\r\n.description p {\r\n  font-size: 1.7rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.description > span {\r\n  font-size: 1.5rem;\r\n  font-family: sans-serif;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-comments {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n  text-decoration: underline;\r\n  padding: 3rem;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n}\r\n\r\n.close-icon:hover {\r\n  color: red;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  border: solid;\r\n  width: clamp(50rem, 70%, 80rem);\r\n  justify-content: space-around;\r\n  gap: 4rem;\r\n  height: 30rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .movie-info {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .description {\r\n    width: 100%;\r\n  }\r\n\r\n  .films {\r\n    width: 100%;\r\n  }\r\n\r\n  .popup-image {\r\n    width: min(70vw, 30rem);\r\n    height: 30rem;\r\n  }\r\n\r\n  .form-container {\r\n    flex-direction: column-reverse;\r\n    height: 45rem;\r\n    padding: 0;\r\n    width: clamp(25rem, 70%, 35rem);\r\n    gap: 0;\r\n    border: solid;\r\n  }\r\n\r\n  .comment-list {\r\n    width: 100%;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .name-field {\r\n    width: clamp(17rem, 50%, 25rem);\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n  .film {\r\n    width: 15rem;\r\n  }\r\n\r\n  .film-image {\r\n    height: 15rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
const appId = 'lTOVefjIbY4HzKhFrbwR';

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
    let [likes] = likesArray.filter((n) => Number(n.item_id) === movieData.id);
    if (!likes) {
      likes = { likes: 0 };
    }
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
    let [likes] = likesArray.filter((n) => Number(n.item_id) === seriesData.id);
    if (!likes) {
      likes = { likes: 0 };
    }
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





const events = () => {
  const movieSection = document.querySelector('.movies-sect');
  const seriesSection = document.querySelector('.series-sect');
  const numOfMovies = document.querySelector('#num-of-movies');
  const numOfSeries = document.querySelector('#num-of-series');

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
<li class="film">
  <div class='image-container'>
    <img src=${info.image} class='film-image'>
  </div>
  <div class='film-info'>
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
      return '<li>No comments yet.</li>';
    }
    const commentTemplate = commentData.map((comment) => (`<li>${comment.username} : ${comment.comment}</li>`));
    return commentTemplate.join('');
  };

  popUpContainer.innerHTML = `
  <div class='popup-window'>
    <h2 class='movie-title'>${movie.name}</h2>
    <svg style='width:24px;height:24px' viewBox='0 0 24 24' class='close-icon'>
      <path fill='currentColor' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
    </svg>
  <div class='movie-info'>
    <img src=${movie.image} class='popup-image'>
    <div class='description'>
      <span><b>Average Runtime:</b> ${movie.runtime} minutes</span>
      <span><b>Summary:</b> ${movie.description}</span>
    </div>
  </div>
  <div class='popup-comments'>Comments (${commentCount})</div>
  <form class='form-container'>
    <ul class='comment-list'>${commentItems()}</ul>
    <div class='name-field'>
      <input type='text' id='username' placeholder='Please enter your name' required>
      <textarea name='textarea' id='comment' placeholder='please add a comment' required></textarea>
      <span id="input-error">Input cannot be empty strings</span>
      <button type='submit' id="submit">Comment</button>
    </div>
  </form>
  </div>
  `;

  popUpContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-icon');
  closePopup.addEventListener('click', () => { popUpContainer.style.display = 'none'; });

  const form = document.querySelector('.form-container');
  const errorMessage = document.querySelector('#input-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listContainer = document.querySelector('.comment-list');
    const comment = {
      username: form.elements.username.value.trim(),
      comment: form.elements.comment.value.trim(),
      item_id: movie.id,
    };
    if (comment.username !== '' && comment.comment !== '') {
      await (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(comment);
      const commentInfo = await (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(comment.item_id);
      const countComment = (0,_apicomment_js__WEBPACK_IMPORTED_MODULE_0__.countComments)(commentInfo);
      document.querySelector('.popup-comments').innerHTML = `Comments (${countComment})`;
      listContainer.innerHTML = '';
      commentInfo.forEach((comment) => {
        const listItem = `<li>${comment.username}: ${comment.comment}</li>`;
        listContainer.innerHTML += listItem;
      });
      form.reset();
    } else if (comment.username === '' || comment.comment === '') {
      setTimeout(() => { errorMessage.style.display = 'block'; }, 500);
      setTimeout(() => { errorMessage.style.display = 'none'; }, 4500);
    }
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
const appId = 'lTOVefjIbY4HzKhFrbwR';

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
const filmsID = [314142, 79551, 343435, 377673, 80270,
  248596, 84068, 73255, 353615];
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
const filmsID = [276562, 350665, 396564, 359264,
  364928, 279536, 281511, 81157, 76119, 253695];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxh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QUNBO0FBQ0EseUJBQXlCLGFBQWEsRUFBRSw2Q0FBNkM7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixRQUFRLEVBQUUsR0FBRztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckJ6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixRQUFRLEVBQUUsR0FBRztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQ3JCekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDb0I7O0FBRXpDLDhEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBpY29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBwVUkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2h0bWxfdGVtcGxhdGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pdGVtc19jb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92aWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9zZXJpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxNDgsIDkzKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDksIDExMik7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgcmdiKDU2LCAyMDksIDg5KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcy1zZWN0LFxcclxcbi5zZXJpZXMtc2VjdCB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMy41dncsIDNyZW0pO1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDIzMywgMjMzKTtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICAnTHVjaWRhIFNhbnMnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMgUmVndWxhcicsXFxyXFxuICAgICdMdWNpZGEgR3JhbmRlJyxcXHJcXG4gICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxcclxcbiAgICBHZW5ldmEsXFxyXFxuICAgIFZlcmRhbmEsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdncsIDIuM3JlbSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ0x1Y2lkYSBTYW5zJyxcXHJcXG4gICAgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLFxcclxcbiAgICAnTHVjaWRhIEdyYW5kZScsXFxyXFxuICAgICdMdWNpZGEgU2FucyBVbmljb2RlJyxcXHJcXG4gICAgR2VuZXZhLFxcclxcbiAgICBWZXJkYW5hLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3QgbGkge1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDIsIDI0MiwgMC42MDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMjguOHJlbTtcXHJcXG4gIG91dGxpbmU6IDAuMXJlbSBvdXRzZXQ7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWZpbG0ge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDMuMnJlbSk7XFxyXFxuICBjb2xvcjogcmdiKDIwMywgMjAzLCAyMTEpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgaDE6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbiAgY29sb3I6IHJnYigyMywgMTc5LCAxMDYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNzZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDI0MSwgMTQ4LCA5Myk7XFxyXFxufVxcclxcblxcclxcbi5maWxtcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ5LCAxMTIpO1xcclxcbiAgb3V0bGluZTogaW5zZXQgcmdiKDU2LCAyMDksIDg5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbG0taW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMHJlbSwgMzAlLCA0MHJlbSk7XFxyXFxuICBoZWlnaHQ6IDMwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCA4LCAwLCAwLjg2Myk7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDI1NSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC44cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTc5LCAxMDYpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYig2NSwgNDcsIDgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHM6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDksIDExMik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0eHQtYXJlYSB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMnZ3LCAycmVtKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWJnIHtcXHJcXG4gIGhlaWdodDogY2xhbXAoMC41cmVtLCAydncsIDJyZW0pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogcmdiKDIxNiwgMjE2LCAxODkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlcm5hbWUsXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxOTQ1ZDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQ7XFxyXFxufVxcclxcblxcclxcbiN1c2VybmFtZTo6cGxhY2Vob2xkZXIsXFxyXFxuI2NvbW1lbnQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWVycm9yOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIipcXFwiO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWVycm9yIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS4ycmVtKTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxNzksIDEwNik7XFxyXFxufVxcclxcblxcclxcbiN1c2VyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItY29tbWVudCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1maWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NTYpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDV2dywgMC41cmVtKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxOTQ1ZDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWF4LWhlaWdodDogOTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXdpbmRvdyA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIGhlaWdodDogMzByZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gcCB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gPiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudHMge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGJvcmRlcjogc29saWQ7XFxyXFxuICB3aWR0aDogY2xhbXAoNTByZW0sIDcwJSwgODByZW0pO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuICBoZWlnaHQ6IDMwcmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubW92aWUtaW5mbyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWxtcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IG1pbig3MHZ3LCAzMHJlbSk7XFxyXFxuICAgIGhlaWdodDogMzByZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGhlaWdodDogNDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgyNXJlbSwgNzAlLCAzNXJlbSk7XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYW1lLWZpZWxkIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDE3cmVtLCA1MCUsIDI1cmVtKTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxyXFxuICAuZmlsbSB7XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWxtLWltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7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Q0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0Isa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE0OCwgOTMpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgMTEyKTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCByZ2IoNTYsIDIwOSwgODkpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVzLXNlY3QsXFxyXFxuLnNlcmllcy1zZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAzLjV2dywgM3JlbSk7XFxyXFxuICBjb2xvcjogcmdiKDIzNiwgMjMzLCAyMzMpO1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgICdMdWNpZGEgU2FucycsXFxyXFxuICAgICdMdWNpZGEgU2FucyBSZWd1bGFyJyxcXHJcXG4gICAgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMgVW5pY29kZScsXFxyXFxuICAgIEdlbmV2YSxcXHJcXG4gICAgVmVyZGFuYSxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2dywgMi4zcmVtKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICAnTHVjaWRhIFNhbnMnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMgUmVndWxhcicsXFxyXFxuICAgICdMdWNpZGEgR3JhbmRlJyxcXHJcXG4gICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxcclxcbiAgICBHZW5ldmEsXFxyXFxuICAgIFZlcmRhbmEsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogMTByZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCBsaSB7XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDI0MiwgMjQyLCAwLjYwMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAyOC44cmVtO1xcclxcbiAgb3V0bGluZTogMC4xcmVtIG91dHNldDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZmlsbSB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgMy4ycmVtKTtcXHJcXG4gIGNvbG9yOiByZ2IoMjAzLCAyMDMsIDIxMSk7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBoMTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxuICBjb2xvcjogcmdiKDIzLCAxNzksIDEwNik7XFxyXFxufVxcclxcblxcclxcbi5mb2N1c3NlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSByZ2IoMjQxLCAxNDgsIDkzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbG1zIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5maWxtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDksIDExMik7XFxyXFxuICBvdXRsaW5lOiBpbnNldCByZ2IoNTYsIDIwOSwgODkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5maWxtLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwcmVtLCAzMCUsIDQwcmVtKTtcXHJcXG4gIGhlaWdodDogMzByZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDgsIDAsIDAuODYzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMjU1KTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjhyZW07XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxNzksIDEwNik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDY1LCA0NywgOCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50czphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OSwgMTEyKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC1hcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAydncsIDJyZW0pO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItYmcge1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgwLjVyZW0sIDJ2dywgMnJlbSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiByZ2IoMjE2LCAyMTYsIDE4OSk7XFxyXFxufVxcclxcblxcclxcbiN1c2VybmFtZSxcXHJcXG4jY29tbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE5NDVkO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJuYW1lOjpwbGFjZWhvbGRlcixcXHJcXG4jY29tbWVudDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtZXJyb3I6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiKlxcXCI7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtZXJyb3Ige1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjJyZW0pO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDE3OSwgMTA2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1jb21tZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1Nik7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAwLjVyZW0pO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE5NDVkO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXgtaGVpZ2h0OiA5MHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93ID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBib3JkZXI6IHNvbGlkO1xcclxcbiAgaGVpZ2h0OiAzMHJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiA+IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50cyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYm9yZGVyOiBzb2xpZDtcXHJcXG4gIHdpZHRoOiBjbGFtcCg1MHJlbSwgNzAlLCA4MHJlbSk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG4gIGhlaWdodDogMzByZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tb3ZpZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpbG1zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogbWluKDcwdncsIDMwcmVtKTtcXHJcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgaGVpZ2h0OiA0NXJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDI1cmVtLCA3MCUsIDM1cmVtKTtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hbWUtZmllbGQge1xcclxcbiAgICB3aWR0aDogY2xhbXAoMTdyZW0sIDUwJSwgMjVyZW0pO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXHJcXG4gIC5maWxtIHtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpbG0taW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGFwcElkID0gJ2xUT1ZlZmpJYlk0SHpLaEZyYndSJztcblxuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoY29tbWVudCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50KSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoY29tbWVudEFycmF5KSA9PiB7XG4gIGlmIChjb21tZW50QXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gY29tbWVudEFycmF5Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7IGdldENvbW1lbnQsIHBvc3RDb21tZW50LCBjb3VudENvbW1lbnRzIH07XG4iLCJpbXBvcnQgZ2V0U2VyaWVzIGZyb20gJy4vc2VyaWVzLmpzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMuanMnO1xuaW1wb3J0IGNvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IHsgZmlsbUxpa2VzLCBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0ICogYXMgVGVtcGxhdGVzIGZyb20gJy4vaHRtbF90ZW1wbGF0ZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmaWxtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtcycpO1xuICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGdldE1vdmllcygpLm1hcChhc3luYyAobW92aWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgbW92aWU7XG4gICAgbGV0IFtsaWtlc10gPSBsaWtlc0FycmF5LmZpbHRlcigobikgPT4gTnVtYmVyKG4uaXRlbV9pZCkgPT09IG1vdmllRGF0YS5pZCk7XG4gICAgaWYgKCFsaWtlcykge1xuICAgICAgbGlrZXMgPSB7IGxpa2VzOiAwIH07XG4gICAgfVxuICAgIGZpbG1zQ29udGFpbmVyLmlubmVySFRNTCArPSBUZW1wbGF0ZXMuZmlsbVRlbXBsYXRlKG1vdmllRGF0YSwgaW5kZXgsIGxpa2VzLmxpa2VzKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudHMnKTtcbiAgICBjb25zdCBsaWtlc05vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XG4gICAgcmV0dXJuIHsgYnV0dG9uczogYnRuLCBsaWtlc0ljb25zOiBsaWtlc05vZGVzIH07XG4gIH0pO1xuICBjb25zdCBldmVudHNFbGVtZW50cyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9ucyA9IChhd2FpdCBldmVudHNFbGVtZW50cykuYnV0dG9ucztcbiAgY29uc3QgeyBsaWtlc0ljb25zIH0gPSBhd2FpdCBldmVudHNFbGVtZW50cztcbiAgZmlsbUxpa2VzKGxpa2VzSWNvbnMpO1xuICBjb21tZW50cyhjb21tZW50c0J1dHRvbnMsICdtb3ZpZXMnKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZpbG1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbG1zJyk7XG4gIGZpbG1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgcmVzdWx0ID0gZ2V0U2VyaWVzKCkubWFwKGFzeW5jIChzZXJpZXMsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGF3YWl0IHNlcmllcztcbiAgICBsZXQgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gc2VyaWVzRGF0YS5pZCk7XG4gICAgaWYgKCFsaWtlcykge1xuICAgICAgbGlrZXMgPSB7IGxpa2VzOiAwIH07XG4gICAgfVxuICAgIGNvbnN0IG51bUxpa2VzID0gbGlrZXMgIT09IHVuZGVmaW5lZCA/IGxpa2VzLmxpa2VzIDogMDtcbiAgICBmaWxtc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gVGVtcGxhdGVzLmZpbG1UZW1wbGF0ZShzZXJpZXNEYXRhLCBpbmRleCwgbnVtTGlrZXMpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xuICAgIGNvbnN0IGxpa2VzTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICByZXR1cm4geyBidXR0b25zOiBidG4sIGxpa2VzSWNvbnM6IGxpa2VzTm9kZXMgfTtcbiAgfSk7XG4gIGNvbnN0IGV2ZW50c0VsZW1lbnRzID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgY29uc3QgY29tbWVudHNCdXR0b25zID0gKGF3YWl0IGV2ZW50c0VsZW1lbnRzKS5idXR0b25zO1xuICBjb25zdCB7IGxpa2VzSWNvbnMgfSA9IGF3YWl0IGV2ZW50c0VsZW1lbnRzO1xuICBmaWxtTGlrZXMobGlrZXNJY29ucyk7XG4gIGNvbW1lbnRzKGNvbW1lbnRzQnV0dG9ucywgJ3NlcmllcycpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheU1vdmllcywgZGlzcGxheVNlcmllcyB9O1xuIiwiaW1wb3J0IGdldE1vdmllcyBmcm9tICcuL21vdmllcy5qcyc7XG5pbXBvcnQgZ2V0U2VyaWVzIGZyb20gJy4vc2VyaWVzLmpzJztcbmltcG9ydCAqIGFzIFRlbXBsYXRlcyBmcm9tICcuL2h0bWxfdGVtcGxhdGVzLmpzJztcblxuY29uc3QgY29tbWVudHMgPSBhc3luYyAoZGF0YSwgdHlwZSkgPT4ge1xuICBkYXRhLmZvckVhY2goYXN5bmMgKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbG1EYXRhID0gdHlwZSA9PT0gJ21vdmllcycgPyBhd2FpdCBnZXRNb3ZpZXMoKVtidG4uaWRdIDogYXdhaXQgZ2V0U2VyaWVzKClbYnRuLmlkXTtcbiAgICAgIFRlbXBsYXRlcy5wb3BVcFRlbXBsYXRlKGZpbG1EYXRhKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50czsiLCJpbXBvcnQgKiBhcyBVSSBmcm9tICcuL2FwcFVJLmpzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb3ZpZXMuanMnO1xuaW1wb3J0IGdldFNlcmllcyBmcm9tICcuL3Nlcmllcy5qcyc7XG5pbXBvcnQgY291bnRJdGVtcyBmcm9tICcuL2l0ZW1zX2NvdW50ZXIuanMnO1xuXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMtc2VjdCcpO1xuICBjb25zdCBzZXJpZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmllcy1zZWN0Jyk7XG4gIGNvbnN0IG51bU9mTW92aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bS1vZi1tb3ZpZXMnKTtcbiAgY29uc3QgbnVtT2ZTZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtLW9mLXNlcmllcycpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIFVJLmRpc3BsYXlNb3ZpZXMoKTtcbiAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcbiAgICBudW1PZk1vdmllcy5pbm5lckhUTUwgPSBgKCR7Y291bnRJdGVtcyhnZXRNb3ZpZXMoKSl9KWA7XG4gIH0pO1xuXG4gIG1vdmllU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXNzZWQnKTtcbiAgICBzZXJpZXNTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3Vzc2VkJyk7XG4gICAgVUkuZGlzcGxheU1vdmllcygpO1xuICAgIG51bU9mTW92aWVzLmlubmVySFRNTCA9IGAoJHtjb3VudEl0ZW1zKGdldE1vdmllcygpKX0pYDtcbiAgICBudW1PZlNlcmllcy5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG5cbiAgc2VyaWVzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXJpZXNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3Vzc2VkJyk7XG4gICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3Vzc2VkJyk7XG4gICAgVUkuZGlzcGxheVNlcmllcygpO1xuICAgIG51bU9mU2VyaWVzLmlubmVySFRNTCA9IGAoJHtjb3VudEl0ZW1zKGdldFNlcmllcygpKX0pYDtcbiAgICBudW1PZk1vdmllcy5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnQsIGNvdW50Q29tbWVudHMgfSBmcm9tICcuL2FwaWNvbW1lbnQuanMnO1xuXG5jb25zdCBmaWxtVGVtcGxhdGUgPSAoaW5mbywgaW5kZXgsIG51bUxpa2VzKSA9PiBgXG48bGkgY2xhc3M9XCJmaWxtXCI+XG4gIDxkaXYgY2xhc3M9J2ltYWdlLWNvbnRhaW5lcic+XG4gICAgPGltZyBzcmM9JHtpbmZvLmltYWdlfSBjbGFzcz0nZmlsbS1pbWFnZSc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPSdmaWxtLWluZm8nPlxuICAgIDxkaXYgY2xhc3M9J2xpa2VzJz5cbiAgICAgIDxpIGNsYXNzPSdmYXIgZmEtaGVhcnQnIGlkPScke2luZm8uaWR9Jz48L2k+XG4gICAgICA8c3BhbiBjbGFzcz0nbGlrZXMnPiR7bnVtTGlrZXN9ICR7TnVtYmVyKG51bUxpa2VzKSA9PT0gMSA/ICdMaWtlJyA6ICdMaWtlcyd9IDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY29tbWVudHMnIGlkPScke2luZGV4fSc+Q29tbWVudHM8L2J1dHRvbj5cbjwvbGk+XG5gO1xuXG5jb25zdCBwb3BVcFRlbXBsYXRlID0gYXN5bmMgKG1vdmllKSA9PiB7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICBjb25zdCBjb21tZW50RGF0YSA9IGF3YWl0IGdldENvbW1lbnQobW92aWUuaWQpO1xuICBjb25zdCBjb21tZW50Q291bnQgPSBjb3VudENvbW1lbnRzKGNvbW1lbnREYXRhKTtcbiAgY29uc3QgY29tbWVudEl0ZW1zID0gKCkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tZW50RGF0YSkpIHtcbiAgICAgIHJldHVybiAnPGxpPk5vIGNvbW1lbnRzIHlldC48L2xpPic7XG4gICAgfVxuICAgIGNvbnN0IGNvbW1lbnRUZW1wbGF0ZSA9IGNvbW1lbnREYXRhLm1hcCgoY29tbWVudCkgPT4gKGA8bGk+JHtjb21tZW50LnVzZXJuYW1lfSA6ICR7Y29tbWVudC5jb21tZW50fTwvbGk+YCkpO1xuICAgIHJldHVybiBjb21tZW50VGVtcGxhdGUuam9pbignJyk7XG4gIH07XG5cbiAgcG9wVXBDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPSdwb3B1cC13aW5kb3cnPlxuICAgIDxoMiBjbGFzcz0nbW92aWUtdGl0bGUnPiR7bW92aWUubmFtZX08L2gyPlxuICAgIDxzdmcgc3R5bGU9J3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCcgY2xhc3M9J2Nsb3NlLWljb24nPlxuICAgICAgPHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaJyAvPlxuICAgIDwvc3ZnPlxuICA8ZGl2IGNsYXNzPSdtb3ZpZS1pbmZvJz5cbiAgICA8aW1nIHNyYz0ke21vdmllLmltYWdlfSBjbGFzcz0ncG9wdXAtaW1hZ2UnPlxuICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz5cbiAgICAgIDxzcGFuPjxiPkF2ZXJhZ2UgUnVudGltZTo8L2I+ICR7bW92aWUucnVudGltZX0gbWludXRlczwvc3Bhbj5cbiAgICAgIDxzcGFuPjxiPlN1bW1hcnk6PC9iPiAke21vdmllLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9J3BvcHVwLWNvbW1lbnRzJz5Db21tZW50cyAoJHtjb21tZW50Q291bnR9KTwvZGl2PlxuICA8Zm9ybSBjbGFzcz0nZm9ybS1jb250YWluZXInPlxuICAgIDx1bCBjbGFzcz0nY29tbWVudC1saXN0Jz4ke2NvbW1lbnRJdGVtcygpfTwvdWw+XG4gICAgPGRpdiBjbGFzcz0nbmFtZS1maWVsZCc+XG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3VzZXJuYW1lJyBwbGFjZWhvbGRlcj0nUGxlYXNlIGVudGVyIHlvdXIgbmFtZScgcmVxdWlyZWQ+XG4gICAgICA8dGV4dGFyZWEgbmFtZT0ndGV4dGFyZWEnIGlkPSdjb21tZW50JyBwbGFjZWhvbGRlcj0ncGxlYXNlIGFkZCBhIGNvbW1lbnQnIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICA8c3BhbiBpZD1cImlucHV0LWVycm9yXCI+SW5wdXQgY2Fubm90IGJlIGVtcHR5IHN0cmluZ3M8L3NwYW4+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgaWQ9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgPC9kaXY+XG4gIGA7XG5cbiAgcG9wVXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuICBjbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBwb3BVcENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1lcnJvcicpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgICBjb25zdCBjb21tZW50ID0ge1xuICAgICAgdXNlcm5hbWU6IGZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWUudHJpbSgpLFxuICAgICAgY29tbWVudDogZm9ybS5lbGVtZW50cy5jb21tZW50LnZhbHVlLnRyaW0oKSxcbiAgICAgIGl0ZW1faWQ6IG1vdmllLmlkLFxuICAgIH07XG4gICAgaWYgKGNvbW1lbnQudXNlcm5hbWUgIT09ICcnICYmIGNvbW1lbnQuY29tbWVudCAhPT0gJycpIHtcbiAgICAgIGF3YWl0IHBvc3RDb21tZW50KGNvbW1lbnQpO1xuICAgICAgY29uc3QgY29tbWVudEluZm8gPSBhd2FpdCBnZXRDb21tZW50KGNvbW1lbnQuaXRlbV9pZCk7XG4gICAgICBjb25zdCBjb3VudENvbW1lbnQgPSBjb3VudENvbW1lbnRzKGNvbW1lbnRJbmZvKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb21tZW50cycpLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb3VudENvbW1lbnR9KWA7XG4gICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgY29tbWVudEluZm8uZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGA8bGk+JHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBsaXN0SXRlbTtcbiAgICAgIH0pO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH0gZWxzZSBpZiAoY29tbWVudC51c2VybmFtZSA9PT0gJycgfHwgY29tbWVudC5jb21tZW50ID09PSAnJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgfSwgNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSwgNDUwMCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZpbG1UZW1wbGF0ZSwgcG9wVXBUZW1wbGF0ZSB9O1xuIiwiY29uc3QgY291bnRJdGVtcyA9IChpdGVtcykgPT4ge1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gaXRlbXMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRJdGVtczsiLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJZCA9ICdsVE9WZWZqSWJZNEh6S2hGcmJ3Uic7XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGZldGNoKGAke2Jhc2VVcmx9JHthcHBJZH0vbGlrZXNgKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gKGF3YWl0IHJlc3BvbnNlKS5qc29uKCk7XG4gIHJldHVybiBsaWtlc0RhdGE7XG59O1xuXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaWQsIGljb24sIGNvbnRlbnQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke2FwcElkfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgW2xpa2VzXSA9IGxpa2VzQXJyYXkuZmlsdGVyKChuKSA9PiBOdW1iZXIobi5pdGVtX2lkKSA9PT0gTnVtYmVyKGljb24uaWQpKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBgJHtsaWtlcy5saWtlc30gJHtOdW1iZXIobGlrZXMubGlrZXMpID09PSAxID8gJ0xpa2UnIDogJ0xpa2VzJ31gO1xufTtcblxuY29uc3QgZmlsbUxpa2VzID0gYXN5bmMgKGxpa2VzSWNvbnMpID0+IHtcbiAgbGlrZXNJY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XG4gICAgICAgIHBvc3RMaWtlcyhlLnRhcmdldC5pZCwgZS50YXJnZXQsIGljb24uY2hpbGRyZW5bMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZpbG1MaWtlcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9OyIsImNvbnN0IGZpbG1zSUQgPSBbMzE0MTQyLCA3OTU1MSwgMzQzNDM1LCAzNzc2NzMsIDgwMjcwLFxuICAyNDg1OTYsIDg0MDY4LCA3MzI1NSwgMzUzNjE1XTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/dGhldHZkYj0nO1xuXG5jb25zdCBnZXRNb3ZpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGZpbG1zSUQubWFwKGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBmZXRjaChgJHtiYXNlVXJsfSR7aWR9YCk7XG4gICAgY29uc3QgcmVzcG9uZSA9IChhd2FpdCBkYXRhKS5qc29uKCk7XG4gICAgY29uc3QgbW92aWUgPSBhd2FpdCByZXNwb25lO1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG5hbWU6IG1vdmllLm5hbWUsXG4gICAgICBpbWFnZTogbW92aWUuaW1hZ2Uub3JpZ2luYWwsXG4gICAgICBkZXNjcmlwdGlvbjogbW92aWUuc3VtbWFyeSxcbiAgICAgIHJ1bnRpbWU6IG1vdmllLmF2ZXJhZ2VSdW50aW1lLFxuICAgICAgaWQ6IG1vdmllLmlkLFxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZXM7XG4iLCJjb25zdCBmaWxtc0lEID0gWzI3NjU2MiwgMzUwNjY1LCAzOTY1NjQsIDM1OTI2NCxcbiAgMzY0OTI4LCAyNzk1MzYsIDI4MTUxMSwgODExNTcsIDc2MTE5LCAyNTM2OTVdO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL2xvb2t1cC9zaG93cz90aGV0dmRiPSc7XG5cbmNvbnN0IGdldFNlcmllcyA9ICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gZmlsbXNJRC5tYXAoYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZldGNoKGAke2Jhc2VVcmx9JHtpZH1gKTtcbiAgICBjb25zdCByZXNwb25lID0gKGF3YWl0IGRhdGEpLmpzb24oKTtcbiAgICBjb25zdCBzZXJpZXMgPSBhd2FpdCByZXNwb25lO1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG5hbWU6IHNlcmllcy5uYW1lLFxuICAgICAgaW1hZ2U6IHNlcmllcy5pbWFnZS5vcmlnaW5hbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBzZXJpZXMuc3VtbWFyeSxcbiAgICAgIHJ1bnRpbWU6IHNlcmllcy5hdmVyYWdlUnVudGltZSxcbiAgICAgIGlkOiBzZXJpZXMuaWQsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNlcmllcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9tb2R1bGVzL2V2ZW50cy5qcyc7XG5cbmV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9