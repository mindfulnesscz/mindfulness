/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/nav/sass/devices_nav.sass":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/nav/sass/devices_nav.sass ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \nTABLE OF CONTENTS\n\n  1. Sizes\n  2. Typography\n  3. Colors\n  4. Spacings\n  5. Top Navbar\n\n*/\n/**\n * * Common Nav styles for mobile and desktop\n * * @since 3.0\n * * @importance core\n * * \n * * Table of Contents\n * *\n * *  1. Containers\n * *  2. Logo Image Link\n * *\n * **/\n#wmnav-cont {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n}\n\n#wmnav-content {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n#wmnav-bar {\n  flex: 0 0 auto;\n  width: 100vw;\n  max-width: 100vw;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #BEBEBE;\n  background: white;\n  position: relative;\n  z-index: 1000;\n}\n\n#wmnav-logo {\n  width: 100px;\n  height: auto;\n  margin: calc(0.4rem + 0.25vw);\n  position: relative;\n}\n#wmnav-logo img {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n}\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n.hamburger:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: gray;\n}\n\n.hamburger-box {\n  width: 40px;\n  height: 22px;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1px;\n}\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 40px;\n  height: 2px;\n  background-color: gray;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block;\n}\n.hamburger-inner::before {\n  top: -10px;\n}\n.hamburger-inner::after {\n  bottom: -10px;\n}\n\n/*\n * Collapse\n */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse .hamburger-inner::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n}\n.hamburger--collapse .hamburger-inner::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--collapse.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n}\n.hamburger--collapse.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n#wm-burger {\n  z-index: 100;\n  position: relative;\n}\n\n#main-nav-toggler {\n  float: right;\n}\n\n#wmnav {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: white;\n  z-index: 1000;\n  border-bottom: 1px solid #BEBEBE;\n}\n\n#wmnav-slides {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  background: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.wmnav-slide {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: none;\n  overflow: auto;\n}\n\n.wmnav-slide-inner {\n  display: flex;\n  min-height: 100vh;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-items: center;\n  align-content: center;\n  justify-content: center;\n}\n.wmnav-slide-inner h3 {\n  text-align: center;\n  padding: calc(0.4rem + 0.25vw);\n}\n\n.wmnav-subslide-head {\n  width: 100%;\n  flex: 0 1 auto;\n  margin-top: 6rem;\n  align-self: baseline;\n}\n.wmnav-subslide-head > h3 {\n  background: white;\n}\n\n.wmnav-subslide-body {\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  padding-bottom: 6rem;\n}\n\n.wmnav-back-arrow-svg {\n  width: 120px;\n}\n\n.wmnav-back-arrow {\n  fill: none;\n  stroke: #787878;\n  stroke-width: 2;\n}\n\n.wmnav-back-button {\n  width: 150px;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/sass/components/_variables.scss","webpack://./src/nav/sass/components/_common_mobile_desktop.sass","webpack://./src/nav/sass/devices_nav.sass","webpack://./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/_base.scss","webpack://./src/nav/sass/components/_mobile_hamburger_settings.sass","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_collapse.scss"],"names":[],"mappings":"AAAA;;;;;;;;;CAAA;ACCA;;;;;;;;;;KAAA;AAcA;EACE,eAAA;EACA,YAAA;EACA,MAAA;ACOF;;ADLA;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,wBAAA;ACQF;;ADNA;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;ACSF;;ADLA;EACE,YAAA;EACA,YAAA;EACA,6BDjBa;ECkBb,kBAAA;ACQF;ADNE;EACE,WAAA;EACA,eAAA;EACA,YAAA;ACQJ;;AC5DA;;;;;;EAAA;ACGA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;EAEA,oCAAA;EACA,0BAAA;EACA,kCAAA;EAGA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,6BAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;AFgEF;AE9DE;EAKI,YDT2B;ADqEjC;AEvDI;EAKI,YDnByB;ADwEjC;AEjDI;;;EAGE,sBCzCkB;AH4FxB;;AE9CA;EACE,WDrC+B;ECsC/B,YAAA;EACA,qBAAA;EACA,kBAAA;AFiDF;;AE9CA;EACE,cAAA;EACA,QAAA;EACA,gBAAA;AFiDF;AE/CE;EAGE,WDnD6B;ECoD7B,WChEqB;EDiErB,sBC/DoB;EDgEpB,kBDlD6B;ECmD7B,kBAAA;EACA,8BAAA;EACA,0BAAA;EACA,gCAAA;AF+CJ;AE5CE;EAEE,WAAA;EACA,cAAA;AF6CJ;AE1CE;EACE,UAAA;AF4CJ;AEzCE;EACE,aAAA;AF2CJ;;AI/HE;;EAAA;AAIE;EACE,SAAA;EACA,SAAA;EACA,0BAAA;EACA,uBAAA;EACA,kEAAA;AJiIN;AI/HM;EACE,UAAA;EACA,yFAAA;AJiIR;AI7HM;EACE,6HAAA;AJ+HR;AIzHM;EACE,kDAAA;EACA,uBAAA;EACA,+DAAA;AJ2HR;AIzHQ;EACE,MAAA;EACA,UAAA;EACA,0FAAA;AJ2HV;AIvHQ;EACE,MAAA;EACA,yBAAA;EACA,gIAAA;AJyHV;;AA1JA;EACE,YAAA;EACA,kBAAA;AA6JF;;AA3JA;EACE,YAAA;AA8JF;;AA5JA;EACE,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,gCAAA;AA+JF;;AA7JA;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;AAgKF;;AA9JA;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;AAiKF;;AA/JA;EACE,aAAA;EACA,iBAAA;EACA,wBAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;EACA,uBAAA;AAkKF;AAhKE;EACE,kBAAA;EACA,8BFxBW;AE0Lf;;AAhKA;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,oBAAA;AAmKF;AAjKE;EACE,iBAAA;AAmKJ;;AAjKA;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;AAoKF;;AAlKA;EACE,YAAA;AAqKF;;AAnKA;EACE,UAAA;EACA,eAAA;EACA,eAAA;AAsKF;;AApKA;EACE,YAAA;EACA,YAAA;AAuKF","sourcesContent":["/* \r\nTABLE OF CONTENTS\r\n\r\n  1. Sizes\r\n  2. Typography\r\n  3. Colors\r\n  4. Spacings\r\n  5. Top Navbar\r\n\r\n*/\r\n\r\n\r\n// 1. Sizes\r\n// ==========================================================================\r\n\r\n$small-screen-up : 461px;\r\n$medium-screen-up : 761px;\r\n$large-screen-up : 1201px;\r\n\r\n$small-screen : 460px;\r\n$medium-screen : 760px;\r\n$large-screen : 1200px;\r\n\r\n$base-margin : calc(0.8rem + 0.5vw);\r\n$double-margin : calc(1.6rem + 1vw);\r\n$quad-margin : calc(3.2rem + 2vw);\r\n$sexta-margin : calc(4.8rem + 3vw);\r\n$okto-margin : calc(6.4rem + 4vw);\r\n$dodeca-margin : calc(9.6rem + 6vw);\r\n\r\n$half-margin : calc(0.4rem + 0.25vw);\r\n$quarter-margin : calc(0.2rem + 0.15vw);\r\n$reduced-margin : 1rem;\r\n\r\n\r\n$-quarter-margin : calc((0.2rem + 0.15vw) * -1);\r\n$-base-margin : calc((0.8rem + 0.5vw) * -1);\r\n$-double-margin : calc((0.8rem + 0.5vw) * -2);\r\n$-quad-margin : calc((0.8rem + 0.5vw) * -4);\r\n$-sexta-margin : calc((0.8rem + 0.5vw) * -6);\r\n$-okto-margin : calc((0.8rem + 0.5vw) * -8);\r\n\r\n\r\n// 2. Typography\r\n// ========================================================================== \r\n\r\n\r\n$copy-font: 'Open Sans', Helvetica, Arial, sans-serif;\r\n$headline-font: 'Exo', sans-serif;\r\n\r\n$bread-text-sm: 14px;\r\n$bread-text-md: 15px;\r\n$bread-text-lg: 16px;\r\n\r\n$bread-text-sm-line: 18px;\r\n$bread-text-md-line: 21px;\r\n$bread-text-lg-line: 24px;\r\n\r\n$tiny-text-sm: 10px;\r\n$tiny-text-md: 11px;\r\n$tiny-text-lg: 12px;\r\n\r\n$tiny-text-sm-line: 14px;\r\n$tiny-text-md-line: 16px;\r\n$tiny-text-lg-line: 18px;\r\n\r\n$small-text-sm: 11px;\r\n$small-text-md: 12px;\r\n$small-text-lg: 13px;\r\n\r\n$small-text-sm-line: 16px;\r\n$small-text-md-line: 17px;\r\n$small-text-lg-line: 18px;\r\n\r\n$large-text-sm: 16px;\r\n$large-text-md: 18px;\r\n$large-text-lg: 20px;\r\n\r\n$huge-text-sm: 26px;\r\n$huge-text-md: 36px;\r\n$huge-text-lg: 46px;\r\n\r\n$mega-text-sm: 40px;\r\n$mega-text-md: 52px;\r\n$mega-text-lg: 64px;\r\n\r\n$h1 : calc(2.65rem + 1vw);\r\n$h1-h2 : calc(1.65rem + 1.1vw);\r\n$h2 : calc(1.8rem + 1vw);\r\n$h3 : calc(1.4rem + 0.8vw);\r\n$h4 : calc(1.2rem + 0.4vw);\r\n$h5 : calc(0.9rem + 0.1vw);\r\n$h6 : calc(0.7rem + 0.08vw);\r\n\r\n\r\n$big-text : calc(2.5rem + 0.7vw);\r\n$bigger-text : calc(2.9rem + 0.9vw);\r\n$biggest-text : calc(3.2rem + 1.2vw);\r\n\r\n$h4-lineheight : calc(1.7rem + 0.2vw);\r\n$h4-padding : calc(1.7rem + 0.2vw) 0;\r\n\r\n$tiny-icon : calc(1.8rem + 0.4vw);\r\n$small-icon : calc(2rem + 0.5vw);\r\n$medium-icon : calc(2.6rem + 0.8vw);\r\n$big-icon : calc(4rem + 1vw);\r\n$huge-icon : calc(6rem + 1.6vw);\r\n$mega-icon: calc(8rem + 2vw);\r\n\r\n\r\n$mega-font : calc(2rem + 2vw);\r\n\r\n$lg-button: calc(4rem + 2vw);\r\n$md-button: calc(2rem + 1vw);\r\n$sm-button: calc(1rem + 0.5vw);\r\n\r\n// 3. Colors\r\n// ==========================================================================\r\n\r\n$primary-color : color(\"essblue\", \"base\");\r\n$primary-color-hover : color(\"essblue\", \"darken-3\");\r\n$primary-text : color(\"gray\", \"darken-2\");\r\n$secondary-color : color(\"gray\", \"darken-2\");\r\n$white : color(\"shades\", \"white\");\r\n\r\n//SYSTEM\r\n$success-color : color(\"green\", \"base\");\r\n$error-color : color(\"red\", \"base\");\r\n\r\n$link-color : color(\"gray\", \"base\");\r\n$ess-base-green : color(\"green\", \"base\");\r\n\r\n$card-link-color : color(\"essblue\", \"base\");\r\n$footer-font-color : color(\"gray\", \"base\");\r\n$footer-bg-color : color(\"gray\", \"lighten-4\");\r\n$footer-copyright-font-color: color(\"gray\", \"lighten-2\");\r\n$footer-copyright-bg-color : none;\r\n$ess-blue-transp : rgba(15, 42, 86, 0.2);\r\n\r\n\r\n\r\n// GRADIENT\r\n$ess-blue-gradient : linear-gradient(to left, color('gray', 'base'), color('gray', 'lighten-1'));\r\n$ess-blue-gradient-reverse : linear-gradient(to right, $primary-color, $secondary-color);\r\n\r\n\r\n// button colors \r\n$primary-button-bg : $primary-color;\r\n$primary-button-bg-hover : color('essblue', 'darken-1');\r\n\r\n// NAVIGATION CUBE\r\n// Current one\r\n//$nav-cube-background: radial-gradient(circle, rgba(230, 230, 230, 1) 0%, rgba(211, 211, 211, 0.85) 77%);\r\n\r\n// New one\r\n$nav-cube-background: rgba(12, 60, 146, 0.35);\r\n\r\n\r\n\r\n// 4. Spacings\r\n// ==========================================================================\r\n\r\n\r\n$spaces-map: (\r\n  \"zero\" : 0,\r\n  \"quarter\": $quarter-margin,\r\n  \"half\": $half-margin,\r\n  \"base\" : $base-margin,\r\n  \"double\" : $double-margin,\r\n  \"quad\" : $quad-margin,\r\n  \"sexta\": $sexta-margin,\r\n  \"okta\" : $okto-margin,\r\n  \"dodeca\" : $dodeca-margin,\r\n  \"minus-base\": $-base-margin,\r\n  \"minus-double\": $-double-margin,\r\n  \"minus-quad\": $-quad-margin\r\n);\r\n\r\n$spaces-values: (\r\n  \"m\": (\"margin\"),\r\n  \"m-top\": (\"margin-top\"),\r\n  \"m-right\": (\"margin-right\"),\r\n  \"m-bot\": (\"margin-bottom\"),\r\n  \"m-left\": (\"margin-left\"),\r\n  \"m-hor\": (\"margin-left\", \"margin-right\"),\r\n  \"m-vert\": (\"margin-top\", \"margin-bottom\"),\r\n  \"p\":(\"padding\"),\r\n  \"p-top\": (\"padding-top\"),\r\n  \"p-right\": (\"padding-right\"),\r\n  \"p-bot\": (\"padding-bottom\"),\r\n  \"p-left\": (\"padding-left\"),\r\n  \"p-hor\": (\"padding-left\", \"padding-right\"),\r\n  \"p-vert\": (\"padding-top\", \"padding-bottom\"),\r\n);\r\n\r\n\r\n// 5. Top Navbar\r\n// ==========================================================================\r\n\r\n$topnav_padding: $base-margin;\r\n\r\n$nav_cube_side_width: 1.4rem;\r\n$nav_cube_side_shift: 0.9rem;\r\n$nav_cube_side_shift_2: 1rem;\r\n\r\n\r\n// 6. Blocks\r\n// ==========================================================================\r\n\r\n$block-border-radius: 10px;","\n/**\n * Common Nav styles for mobile and desktop\n * @since 3.0\n * @importance core\n * \n * Table of Contents\n *\n *  1. Containers\n *  2. Logo Image Link\n *\n **/\n\n// 1. TOP NAVBAR CONTAINER LAYOUT ----------------------------------------------------\n\n#wmnav-cont\n  position: fixed\n  z-index: 100\n  top: 0\n\n#wmnav-content\n  width: 100vw\n  height: 100vh\n  max-width: 100vw\n  max-height: 100vh\n  overflow: hidden\n  display: flex\n  flex-flow: column nowrap\n\n#wmnav-bar\n  flex: 0 0 auto\n  width: 100vw\n  max-width: 100vw\n  margin: 0\n  display: flex\n  justify-content: space-between\n  align-items: center\n  border-bottom: 1px solid color(\"gray\", \"base\")\n  background: white\n  position: relative\n  z-index: 1000\n\n// 2. TOP NAVBAR LOGO ----------------------------------------------------\n\n#wmnav-logo\n  width: 100px\n  height: auto\n  margin: $half-margin\n  position: relative\n\n  img\n    width: 100%\n    max-width: 100%\n    height: auto\n","@import '../../sass/components/variables'\n@import '../../sass/components/colors'\n@import './components/common_mobile_desktop'\n\n@import 'components/mobile_hamburger_settings'\n@import 'hamburgers/_sass/hamburgers/hamburgers'\n\n#wm-burger\n  z-index: 100\n  position: relative\n\n#main-nav-toggler\n  float: right\n\n#wmnav\n  display: flex\n  justify-content: space-between\n  flex-wrap: nowrap\n  position: fixed\n  top: 0\n  width: 100%\n  background: white\n  z-index: 1000\n  border-bottom: 1px solid color('gray', 'base')\n\n#wmnav-slides\n  width: 100vw\n  height: 100vh\n  max-width: 100vw\n  max-height: 100vh\n  background: white\n  position: absolute\n  top: 0\n  left: 0\n  display: none\n\n.wmnav-slide\n  width: 100vw\n  height: 100vh\n  position: absolute\n  display: none\n  overflow: auto\n\n.wmnav-slide-inner\n  display: flex\n  min-height: 100vh\n  flex-flow: column nowrap\n  align-items: center\n  justify-items: center\n  align-content: center\n  justify-content: center\n\n  h3\n    text-align: center\n    padding: $half-margin\n\n.wmnav-subslide-head\n  width: 100%\n  flex: 0 1 auto // grow shrink basis\n  margin-top: 6rem\n  align-self: baseline\n\n  &>h3\n    background: white\n\n.wmnav-subslide-body\n  display: flex\n  align-items: center\n  flex: 1 1 auto\n  padding-bottom: 6rem\n\n.wmnav-back-arrow-svg\n  width: 120px\n\n.wmnav-back-arrow\n  fill: none\n  stroke: color('gray', 'darken-1')\n  stroke-width: 2\n\n.wmnav-back-button\n  width: 150px\n  height: auto\n","@charset \"UTF-8\";\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n// Settings\n// ==================================================\n$hamburger-padding-x           : 15px !default;\n$hamburger-padding-y           : 15px !default;\n$hamburger-layer-width         : 40px !default;\n$hamburger-layer-height        : 4px !default;\n$hamburger-layer-spacing       : 6px !default;\n$hamburger-layer-color         : #000 !default;\n$hamburger-layer-border-radius : 4px !default;\n$hamburger-hover-opacity       : 0.7 !default;\n$hamburger-active-layer-color  : $hamburger-layer-color !default;\n$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;\n\n// To use CSS filters as the hover effect instead of opacity,\n// set $hamburger-hover-use-filter as true and\n// change the value of $hamburger-hover-filter accordingly.\n$hamburger-hover-use-filter   : false !default;\n$hamburger-hover-filter       : opacity(50%) !default;\n$hamburger-active-hover-filter: $hamburger-hover-filter !default;\n\n// Types (Remove or comment out what you don’t need)\n// ==================================================\n$hamburger-types: (\n  3dx,\n  3dx-r,\n  3dy,\n  3dy-r,\n  3dxy,\n  3dxy-r,\n  arrow,\n  arrow-r,\n  arrowalt,\n  arrowalt-r,\n  arrowturn,\n  arrowturn-r,\n  boring,\n  collapse,\n  collapse-r,\n  elastic,\n  elastic-r,\n  emphatic,\n  emphatic-r,\n  minus,\n  slider,\n  slider-r,\n  spin,\n  spin-r,\n  spring,\n  spring-r,\n  stand,\n  stand-r,\n  squeeze,\n  vortex,\n  vortex-r\n) !default;\n\n// Base Hamburger (We need this)\n// ==================================================\n@import \"base\";\n\n// Hamburger types\n// ==================================================\n@import \"types/3dx\";\n@import \"types/3dx-r\";\n@import \"types/3dy\";\n@import \"types/3dy-r\";\n@import \"types/3dxy\";\n@import \"types/3dxy-r\";\n@import \"types/arrow\";\n@import \"types/arrow-r\";\n@import \"types/arrowalt\";\n@import \"types/arrowalt-r\";\n@import \"types/arrowturn\";\n@import \"types/arrowturn-r\";\n@import \"types/boring\";\n@import \"types/collapse\";\n@import \"types/collapse-r\";\n@import \"types/elastic\";\n@import \"types/elastic-r\";\n@import \"types/emphatic\";\n@import \"types/emphatic-r\";\n@import \"types/minus\";\n@import \"types/slider\";\n@import \"types/slider-r\";\n@import \"types/spin\";\n@import \"types/spin-r\";\n@import \"types/spring\";\n@import \"types/spring-r\";\n@import \"types/stand\";\n@import \"types/stand-r\";\n@import \"types/squeeze\";\n@import \"types/vortex\";\n@import \"types/vortex-r\";\n\n// ==================================================\n// Cooking up additional types:\n//\n// The Sass for each hamburger type should be nested\n// inside an @if directive to check whether or not\n// it exists in $hamburger-types so only the CSS for\n// included types are generated.\n//\n// e.g. hamburgers/types/_new-type.scss\n//\n// @if index($hamburger-types, new-type) {\n//   .hamburger--new-type {\n//     ...\n//   }\n// }\n","@use \"sass:math\";\n\n// Hamburger\n// ==================================================\n.hamburger {\n  padding: $hamburger-padding-y $hamburger-padding-x;\n  display: inline-block;\n  cursor: pointer;\n\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n\n  // Normalize (<button>)\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    @if $hamburger-hover-use-filter == true {\n      filter: $hamburger-hover-filter;\n    }\n    @else {\n      opacity: $hamburger-hover-opacity;\n    }\n  }\n\n  &.is-active {\n    &:hover {\n      @if $hamburger-hover-use-filter == true {\n        filter: $hamburger-active-hover-filter;\n      }\n      @else {\n        opacity: $hamburger-active-hover-opacity;\n      }\n    }\n\n    .hamburger-inner,\n    .hamburger-inner::before,\n    .hamburger-inner::after {\n      background-color: $hamburger-active-layer-color;\n    }\n  }\n}\n\n.hamburger-box {\n  width: $hamburger-layer-width;\n  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: math.div($hamburger-layer-height, -2);\n\n  &,\n  &::before,\n  &::after {\n    width: $hamburger-layer-width;\n    height: $hamburger-layer-height;\n    background-color: $hamburger-layer-color;\n    border-radius: $hamburger-layer-border-radius;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n  }\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n  }\n\n  &::before {\n    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n\n  &::after {\n    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n}\n","\n$hamburger-layer-height: 2px\n$hamburger-layer-spacing: 8px\n$hamburger-layer-color: gray\n\n$hamburger-types: ( collapse )\n","@if index($hamburger-types, collapse) {\n  /*\n   * Collapse\n   */\n  .hamburger--collapse {\n    .hamburger-inner {\n      top: auto;\n      bottom: 0;\n      transition-duration: 0.13s;\n      transition-delay: 0.13s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::after {\n        top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;\n        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    opacity 0.1s linear;\n      }\n\n      &::before {\n        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);\n        transition-delay: 0.22s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::after {\n          top: 0;\n          opacity: 0;\n          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      opacity 0.1s 0.22s linear;\n        }\n\n        &::before {\n          top: 0;\n          transform: rotate(-90deg);\n          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/nav/sass/devices_nav.sass":
/*!***************************************!*\
  !*** ./src/nav/sass/devices_nav.sass ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devices_nav_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./devices_nav.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/nav/sass/devices_nav.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devices_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devices_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devices_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devices_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "./src/components/icons.tsx":
/*!**********************************!*\
  !*** ./src/components/icons.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconAutomotive": () => (/* binding */ IconAutomotive),
/* harmony export */   "IconCube": () => (/* binding */ IconCube),
/* harmony export */   "IconEnvironment": () => (/* binding */ IconEnvironment),
/* harmony export */   "IconOilGas": () => (/* binding */ IconOilGas),
/* harmony export */   "IconProcessing": () => (/* binding */ IconProcessing),
/* harmony export */   "WmnavBackArrow": () => (/* binding */ WmnavBackArrow),
/* harmony export */   "WmnavForwardArrow": () => (/* binding */ WmnavForwardArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WmnavBackArrow = ({ className }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: 'wmnav-back-arrow-svg', version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 120 50" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { id: "Line_13", className: className, x1: "115.5", y1: "25", x2: "4.5", y2: "25" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: className, points: "23.9,44.4 4.5,25 23.9,5.6 " })));
};
const WmnavForwardArrow = ({ className }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 120 50" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", { type: "text/css" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: className, points: "98.9,8 116.7,25.8 98.9,43.5 " }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { className: className, x1: "116.7", y1: "25.8", x2: "0", y2: "25.8" })));
};
const IconAutomotive = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { id: "auto_bkg", className: "ess-anim-icon", points: "211.5,215.9 48.1,215.9 28,174.1 231.6,174.1 " }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { id: "ipict_auto_body", className: "ess-anim-icon", d: "M200.4,126.2c-1-1.1-0.7-2.5-0.5-4.1c0.1-1.6,0.3-2.2,1.7-3.2c1.4-1.1,2.5-2.1,1.3-4\n  c-0.7-1.1-3.2-5.9-28.2-14.5c-10.4-3.6-12.7-4.5-17.6-15c-2.6-5.7-6.7-15.3-20.8-19.9c-5.6-1.7-8.8-2.7-18.1-5.3s-14-4.1-23.9-3.4\n  c-9.9,0.8-32.9,8.4-32.9,8.4c-3.2,1-0.6,3.1,0.1,4.2s0.5,0.7,0.2,2c-0.3,1.3-3.7,10-4.8,13c-1.1,3-0.7,3.4,0.8,5.3\n  c1.5,1.9,5.3,4.3,9.1,5.6c3.9,1.3,4,0,5.8-2.9c1.8-3,8.1-10,15.8-7.5c9.5,3.1,9.1,11.5,9.5,15.2c0.6,6.2,3.8,6.5,6.4,7.4\n  c2.7,0.9,47.1,15.2,50.7,16.4c3.7,1.2,3.6,0.8,5.4-2.3c1.8-3.1,7.2-10.6,17-7.5c9.8,3.2,9.3,10.9,9.7,16.6c0.4,5.7,3.7,5.3,8.2,6.5\n  c4.5,1.2,6-3.3,6.8-5.7C202.9,128.9,201.3,127.3,200.4,126.2z M118.9,78.9c-12.7-4.1-25.1-8.2-37.5-12.2c7.8-4.6,27-4.1,41.1,1.3\n  C121.2,71.8,120.1,75.1,118.9,78.9z M123.3,80.3l3.6-10.9c0,0,4.6,1.4,5.2,1.6c11.6,3.8,13.7,8.8,15.4,11.3c1.7,2.5,4.3,7.3,4.3,7.3\n  L123.3,80.3z" })));
};
const IconEnvironment = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_wind_bkg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { className: "ess-anim-icon", points: "132,233.3 118,233.3 121.4,107.3 128.6,107.3 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { className: "ess-anim-icon", points: "138.4,244.1 111.6,244.1 111.6,233.3 138.4,233.3 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M132.8,107.3h-15.7c-1.6,0-2.8-1.3-2.8-2.8V88.7c0-1.6,1.3-2.8,2.8-2.8h15.7c1.6,0,2.8,1.3,2.8,2.8v15.7\n    C135.7,106,134.4,107.3,132.8,107.3z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "125", cy: "96.6", r: "6.4" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "125", cy: "96.6", r: "2.8" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_wind_body" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "127.5,90.8 127.5,80.7 122.5,80.7 122.5,90.8 \t\t" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M127.2,8.2h-4.4L120,79.5c0,0-0.3,2.2,5,2.2c5.3,0,5-2.2,5-2.2L127.2,8.2z" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "128.8,101.7 137.5,106.7 140,102.4 131.3,97.3 \t\t" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M200.5,142.8l2.2-3.8l-60.4-38.1c0,0-1.7-1.3-4.4,3.2s-0.7,5.5-0.7,5.5L200.5,142.8z" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "118.6,97.4 110,102.4 112.5,106.8 121.2,101.7 \t\t" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M47.3,138.9l2.2,3.8l63.2-33.3c0,0,2-0.8-0.6-5.4c-2.6-4.6-4.4-3.3-4.4-3.3L47.3,138.9z" })))));
};
const IconOilGas = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_oil_bkg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "127.9,102.6 166,202.2 158.5,202.2 122.5,105 \t\t" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M83.3,202.2l-8.8-32.8c0,0-2.8-11.5-12.8-11.5c-12.6,0-12.6,11.5-12.6,11.5v32.8v13.7H87h87.3v-13.7H83.3z" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "122.3,105 80.4,191.2 77.9,181.8 116.6,102.4 \t\t\t" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "122.5", cy: "97.7", r: "7.3" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { className: "ess-anim-icon", x1: "83.3", y1: "202.2", x2: "49.2", y2: "202.2" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_oil_body_1" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: "ess-anim-icon", points: "173.3,49.9 52.6,113.7 53.9,124.9 179.3,58.7 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M169.9,21.4l-7.9,4.2c0,0,7,13.9,11.2,24.4l26.2,37.7c0,0,1.2-0.3,6.3,0.6C205.3,45.4,169.9,21.4,169.9,21.4z" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_oil_body_2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M58.6,170.1c0,0,0-2.7,2.6-2.7s2.6,2.7,2.6,2.7v32.4h-5.1V170.1z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M45.7,202.5h30.9c0,0,0,2.3,0,4.5c-4.2,3-9.6,4.8-15.5,4.8c-5.8,0-11.2-1.8-15.4-4.7\n    C45.7,204.7,45.7,202.5,45.7,202.5z" }))));
};
const IconProcessing = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "ess-anim-icon", viewBox: "0 0 250 250", id: "mill_new", version: "1.1", x: "0px", y: "0px", width: "250", height: "250", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_mill_bkg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M156.7,170.4l16.9,33.2H76.4l16.9-33.2 M105.7,176.6l-6.7,14.1h51.8l-6.7-14.1" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { className: "ess-anim-icon", points: "77.2,203.6 77.1,216.9 172.9,216.9 172.8,203.6 " })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_mill_body_2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M90.6,71.1l4.1,7.1l7.1-4.1L97.7,67L90.6,71.1z M90.6,173.9l7.1,4.1l4.1-7.1l-7.1-4.1L90.6,173.9z M69.5,149.8\n    l4.1,7.1l7.1-4.1l-4.1-7.1L69.5,149.8z M180.5,95.2l-4.1-7.1l-7.1,4.1l4.1,7.1L180.5,95.2z M71.5,119h-8.2v8.2h8.2V119z M69.5,95.2\n    l7.1,4.1l4.1-7.1l-7.1-4.1L69.5,95.2z M169.3,152.8l7.1,4.1l4.1-7.1l-7.1-4.1L169.3,152.8z M178.5,119v8.2h8.2V119H178.5z\n     M148.2,74.1l7.1,4.1l4.1-7.1l-7.1-4.1L148.2,74.1z M148.2,170.9l4.1,7.1l7.1-4.1l-4.1-7.1L148.2,170.9z M120.9,184.2h8.2v-8.2\n    h-8.2V184.2z M120.9,69h8.2v-8.2h-8.2V69z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", { transform: "matrix(0.2298 -0.9732 0.9732 0.2298 -22.9745 216.037)", className: "st4", cx: "125", cy: "122.5", rx: "48.9", ry: "48.9" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M178.5,119h3.4c-0.5-7.6-2.4-14.9-5.6-21.4l-3,1.7l-4.1-7.1l3-1.7c-4.1-6-9.3-11.2-15.3-15.3l-1.7,3l-7.1-4.1\n    l1.7-3c-6.4-3.1-13.4-5-20.9-5.6V69h-8.2v-3.4c-7.4,0.5-14.5,2.5-20.9,5.6l1.7,3l-7.1,4.1l-1.7-3c-6,4.1-11.2,9.3-15.3,15.3l3,1.7\n    l-4.1,7.1l-3-1.7c-3.2,6.5-5.1,13.8-5.6,21.4h3.4v8.2h-3.4c0.6,7.2,2.5,14.1,5.5,20.3l3-1.7l4.1,7.1l-3,1.7\n    c4.1,6,9.3,11.2,15.3,15.3l1.7-3l7.1,4.1l-1.7,3c6.4,3.1,13.4,5,20.9,5.6v-3.4h8.2v3.4c7.4-0.5,14.5-2.5,20.9-5.6l-1.7-3l7.1-4.1\n    l1.7,3c6-4.1,11.2-9.3,15.3-15.3l-3-1.7l4.1-7.1l3,1.7c3-6.2,4.9-13.1,5.5-20.3h-3.4V119z M125,171.4c-27,0-48.9-21.9-48.9-48.9\n    c0-27,21.9-48.9,48.9-48.9c27,0,48.9,21.9,48.9,48.9C173.9,149.5,152,171.4,125,171.4z" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "ipict_mill_body_1" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { className: "ess-anim-icon", d: "M125,73.7c-27,0-48.9,21.9-48.9,48.9c0,27,21.9,48.9,48.9,48.9s48.9-21.9,48.9-48.9\n    C173.9,95.6,152,73.7,125,73.7z M159.9,98.4c1.6-0.9,3.7-0.4,4.7,1.3c0.9,1.6,0.4,3.7-1.3,4.7c-1.6,0.9-3.7,0.4-4.7-1.3\n    C157.6,101.5,158.2,99.4,159.9,98.4z M79.3,123.1c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4\n    C80.9,126.5,79.3,125,79.3,123.1z M90.1,146.6c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3\n    C92.4,143.6,91.8,145.7,90.1,146.6z M91.4,103.1c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C91.8,99.4,92.4,101.5,91.4,103.1z M106.9,160.8c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C107.2,157.1,107.8,159.2,106.9,160.8z M105.6,88.9c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3\n    C107.8,85.9,107.2,88,105.6,88.9z M125,168.2c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4\n    C128.4,166.7,126.9,168.2,125,168.2z M125,83.7c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4\n    C128.4,82.2,126.9,83.7,125,83.7z M147.8,162.1c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3\n    C150,159,149.5,161.1,147.8,162.1z M149.1,87.7c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C149.5,83.9,150,86,149.1,87.7z M164.5,145.4c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3\n    C164.9,141.6,165.5,143.7,164.5,145.4z M167.2,126.5c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4\n    C170.7,125,169.1,126.5,167.2,126.5z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: "ess-anim-icon", cx: "125", cy: "122.5", r: "25.9" }))));
};
const IconCube = ({ topColor, leftColor, rightColor }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { version: "1.1", className: "svg-ess-cube", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 500 500", xmlSpace: "preserve" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { style: { fill: topColor }, points: "489.7,223.1 381.5,35.6 165.1,35.6 273.3,223.1 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { style: { fill: leftColor }, points: "225.4,247.7 118.5,62.6 10.3,250 118.5,437.4 226.7,250 \t" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", { style: { fill: rightColor }, points: "165.1,464.4 381.5,464.4 489.7,276.9 273.3,276.9 \t" }))));
};


/***/ }),

/***/ "./src/nav/components/device-slides/slide-about.tsx":
/*!**********************************************************!*\
  !*** ./src/nav/components/device-slides/slide-about.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AboutSlide = ({ homeUrl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: '' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-12' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/about` }, "Who We Are")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/news` }, "News")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/career` }, "Career")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/ess-events` }, "Events")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/case-solutions` }, "Case Solutions"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSlide);


/***/ }),

/***/ "./src/nav/components/device-slides/slide-industries.tsx":
/*!***************************************************************!*\
  !*** ./src/nav/components/device-slides/slide-industries.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icons */ "./src/components/icons.tsx");


const IndustriesSlide = ({ homeUrl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'row p-hor-double' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 p-zero center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconAutomotive, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: 'center m-top-zero' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/automotive` }, "Automotive"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 p-zero center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconEnvironment, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: 'center m-top-zero' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/energy-environment` }, "Energy & Environment"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 p-zero center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconOilGas, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: 'center m-top-zero' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/oil-gas` }, "Oil & Gas"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 p-zero center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.IconProcessing, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: 'center m-top-zero' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco light', href: `${homeUrl}/processing` }, "Processing")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndustriesSlide);


/***/ }),

/***/ "./src/nav/components/device-slides/slide-solutions.tsx":
/*!**************************************************************!*\
  !*** ./src/nav/components/device-slides/slide-solutions.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SolutionsSlide = ({ homeUrl, templateUrl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'row p-hor-double justify-center' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-12 text-center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-cloud` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Cloud", alt: 'Alsim Cloud', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/full_logo_cloud.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'w-full wm-divider has-gray-lighten-2-background-color' }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-data-cleaning` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: 'Alsim Cloud', title: "Alsim Cloud", loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_data-cleaning.svg` })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-paintshop` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: "Alsim Cloud", title: "Alsim Cloud", loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_paintshop.svg` })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'w-full wm-divider has-gray-lighten-2-background-color' }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-platform` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Platform", alt: 'Alsim Platform', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/full_logo_platform.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-services` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Services", alt: 'Alsim Services', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/full_logo_services.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero m-vert-minus-base' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-processing` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Processing", alt: 'Alsim Processing', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_processing.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero m-vert-minus-base' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-mobility` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Mobility", alt: 'Alsim Mobility', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_mobility.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero m-vert-minus-base' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-environment` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Environment", alt: 'Alsim Environment', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_environment.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero m-vert-minus-base' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-washing` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Washing", alt: 'Alsim Washing', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_washing.svg` }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6 text-center p-zero m-vert-minus-base' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: `${homeUrl}/alsim-oil-gas` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { title: "Alsim Oil & Gas", alt: 'Alsim Oil & Gas', loading: "lazy", width: "300", height: "100", className: "main-product-logo", src: `${templateUrl}/assets/images/product-logos/logo_oil-gas.svg` })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolutionsSlide);


/***/ }),

/***/ "./src/nav/components/ess-logo.tsx":
/*!*****************************************!*\
  !*** ./src/nav/components/ess-logo.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EssLogo = ({ homeUrl, templateUrl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: 'wmnav-logo' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: homeUrl },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { width: '120', height: '40', alt: 'ESS', loading: 'lazy', src: templateUrl + '/assets/images/ess_logo.svg' }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EssLogo);


/***/ }),

/***/ "./src/nav/components/mobile-nav.tsx":
/*!*******************************************!*\
  !*** ./src/nav/components/mobile-nav.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globals */ "./globals.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slide_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-main */ "./src/nav/components/slide-main.tsx");
/* harmony import */ var _slide_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide-sub */ "./src/nav/components/slide-sub.tsx");
/* harmony import */ var _device_slides_slide_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-slides/slide-about */ "./src/nav/components/device-slides/slide-about.tsx");
/* harmony import */ var _device_slides_slide_industries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-slides/slide-industries */ "./src/nav/components/device-slides/slide-industries.tsx");
/* harmony import */ var _device_slides_slide_solutions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-slides/slide-solutions */ "./src/nav/components/device-slides/slide-solutions.tsx");
/* harmony import */ var _ess_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ess-logo */ "./src/nav/components/ess-logo.tsx");
/* harmony import */ var _sass_devices_nav_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sass/devices_nav.sass */ "./src/nav/sass/devices_nav.sass");
/**
 * Device menu navigation main component
 * @since 3.0
 */
// framework

// types

// components





//assets


const MobileNav = ({ homeUrl, templateUrl }) => {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [slidesArray, setSlidesArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const Slides = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideMain = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideAbout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideSolutions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideIndustries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setSlidesArray([
            {
                name: 'About us',
                el: SlideAbout.current
            },
            {
                name: 'Industries',
                el: SlideIndustries.current
            },
            {
                name: 'Solutions',
                el: SlideSolutions.current
            }
        ]);
    }, []);
    const callSlide = (slide, back) => {
        if (activeSlide && activeSlide !== slide) {
            const SlideToDismiss = activeSlide;
            window.gsap.to(SlideToDismiss, { opacity: 0, left: back ? '50%' : '-50%', onComplete: () => {
                    window.gsap.set(SlideToDismiss, { display: 'none' });
                } });
        }
        window.gsap.set(slide, { left: back ? '-50%' : '50%', opacity: 0, display: 'block' });
        window.gsap.to(slide, { left: 0, opacity: 1 });
        setActiveSlide(slide);
    };
    const navToggle = (event) => {
        // Trigger ON
        if (!isActive) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
            event.currentTarget.classList.add('is-active');
            window.gsap.set(Slides.current, { display: 'block' });
            window.gsap.set(Slides.current, { opacity: 0 });
            window.gsap.to(Slides.current, { opacity: 1 });
            if (SlideMain.current)
                callSlide(SlideMain.current, false);
        }
        // Trigger OFF
        else {
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
            window.gsap.to(Slides.current, { opacity: 0,
                onComplete: () => {
                    window.gsap.set(Slides.current, { display: 'none' });
                }
            });
            event.currentTarget.classList.remove('is-active');
        }
        setIsActive(!isActive);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'wmnav-wrap' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-bar" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ess_logo__WEBPACK_IMPORTED_MODULE_7__["default"], { homeUrl: homeUrl, templateUrl: templateUrl }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'wm-burger' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: navToggle, id: "main-nav-toggler", className: "hamburger hamburger--collapse", type: "button", "data-toggle": "top-menu", "aria-label": "hamburger navigation toggle" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hamburger-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hamburger-inner" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-slides", ref: Slides },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideMain, className: "wmnav-slide", id: "wmnav-slide-main" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slide_main__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "wmnav-slide-inner wmnav-main-slide", callSlide: callSlide, slideLinks: slidesArray })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideAbout, className: "wmnav-slide", id: "wmnav-slide-about" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slide_sub__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "About us", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_device_slides_slide_about__WEBPACK_IMPORTED_MODULE_4__["default"], { homeUrl: homeUrl }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideIndustries, className: "wmnav-slide", id: "wmnav-slide-industries" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slide_sub__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Industries", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_device_slides_slide_industries__WEBPACK_IMPORTED_MODULE_5__["default"], { homeUrl: homeUrl }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideSolutions, className: "wmnav-slide", id: "wmnav-slide-solutions" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slide_sub__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Solutions", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_device_slides_slide_solutions__WEBPACK_IMPORTED_MODULE_6__["default"], { homeUrl: homeUrl, templateUrl: templateUrl }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);


/***/ }),

/***/ "./src/nav/components/slide-main.tsx":
/*!*******************************************!*\
  !*** ./src/nav/components/slide-main.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons.tsx");


const slideMain = ({ className, callSlide, slideLinks }) => {
    const click = (e, slide) => {
        e.preventDefault();
        if (slide)
            callSlide(slide, false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "row" },
            slideLinks.map((key, index) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "col-xs-3" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-6' },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'w-full m-zero p-zero', key: 'mainMenuLink-' + index, onClick: e => { click(e, key.el); } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "center" }, key.name))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'col-xs-3 flex p-right-double' },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.WmnavForwardArrow, { className: 'wmnav-back-arrow' }))));
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'no-deco w-full m-zero p-zero', href: `${window.MindGlobal.homeUrl}/contact` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: 'center' }, "Contact")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideMain);


/***/ }),

/***/ "./src/nav/components/slide-sub.tsx":
/*!******************************************!*\
  !*** ./src/nav/components/slide-sub.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons.tsx");


const slideSub = ({ title, className, callSlide, slideLinks, children }) => {
    const click = (e, slide) => {
        e.preventDefault();
        if (slide)
            callSlide(slide, true);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `${className} container` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'row wmnav-subslide-head' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'col-xs-3 wmnav-back-button', onClick: e => { click(e, slideLinks[0].el); } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.WmnavBackArrow, { className: 'wmnav-back-arrow' })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "col-xs-6 light text-center has-gray-darken-1-color uppercase" }, title),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "col-xs-3" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'wmnav-subslide-body' }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideSub);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/nav/mobile.tsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mobile_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-nav */ "./src/nav/components/mobile-nav.tsx");
/**
 * DEVICE NAVIGATION INITIALIZATION
 * @since 3.0
 */


// sets the device navigation as variable to be unloaded if needed
window.MindGlobal.mobileNav = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_mobile_nav__WEBPACK_IMPORTED_MODULE_1__["default"], { homeUrl: window.MindGlobal.homeUrl, templateUrl: window.MindGlobal.templateUrl });

})();

/******/ })()
;
//# sourceMappingURL=mobile.js.map