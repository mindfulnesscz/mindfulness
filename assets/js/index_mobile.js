/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/device-nav-styles/device_nav.sass":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/device-nav-styles/device_nav.sass ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "/* \nTABLE OF CONTENTS\n\n  1. Sizes\n  2. Typography\n  3. Colors\n  4. Spacings\n  5. Top Navbar\n\n*/\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n.hamburger:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: gray;\n}\n\n.hamburger-box {\n  width: 40px;\n  height: 22px;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1px;\n}\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 40px;\n  height: 2px;\n  background-color: gray;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block;\n}\n.hamburger-inner::before {\n  top: -10px;\n}\n.hamburger-inner::after {\n  bottom: -10px;\n}\n\n/*\n * Collapse\n */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse .hamburger-inner::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n}\n.hamburger--collapse .hamburger-inner::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--collapse.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n}\n.hamburger--collapse.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n#wm-logo {\n  width: 100px;\n  padding: calc(0.4rem + 0.25vw);\n}\n\n#wmnav-cont {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n}\n\n#wmnav {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: white;\n  z-index: 1000;\n  border-bottom: 1px solid #BEBEBE;\n}\n\n#wmnav-slides {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  background: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.wmnav-slide {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: none;\n}\n\n.wmnav-slide-inner h3 {\n  text-align: center;\n  padding: calc(0.4rem + 0.25vw);\n}\n\n#wmnav-slide-main .wmnav-slide-inner {\n  display: flex;\n  min-height: 100%;\n  align-items: center;\n  justify-items: center;\n  align-content: center;\n  flex-wrap: wrap;\n}\n\n.wmnav-back-arrow-svg {\n  width: 120px;\n}\n\n.wmnav-back-arrow {\n  fill: none;\n  stroke: #787878;\n  stroke-width: 2;\n}\n\n.wmnav-back-button {\n  width: 150px;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/sass/components/_variables.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/_base.scss","webpack://./src/sass/device-nav-styles/device_nav.sass","webpack://./src/sass/device-nav-styles/components/_hamburger-settings.sass","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_collapse.scss"],"names":[],"mappings":"AAAA;;;;;;;;;CAAA;ACCA;;;;;;EAAA;ACGA;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;EAEA,oCAAA;EACA,0BAAA;EACA,kCAAA;EAGA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,6BAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;ACWF;ADTE;EAKI,YDT2B;AEgBjC;ADFI;EAKI,YDnByB;AEmBjC;ADII;;;EAGE,sBEzCkB;ADuCxB;;ADOA;EACE,WDrC+B;ECsC/B,YAAA;EACA,qBAAA;EACA,kBAAA;ACJF;;ADOA;EACE,cAAA;EACA,QAAA;EACA,gBAAA;ACJF;ADME;EAGE,WDnD6B;ECoD7B,WEhEqB;EFiErB,sBE/DoB;EFgEpB,kBDlD6B;ECmD7B,kBAAA;EACA,8BAAA;EACA,0BAAA;EACA,gCAAA;ACNJ;ADSE;EAEE,WAAA;EACA,cAAA;ACRJ;ADWE;EACE,UAAA;ACTJ;ADYE;EACE,aAAA;ACVJ;;AE1EE;;EAAA;AAIE;EACE,SAAA;EACA,SAAA;EACA,0BAAA;EACA,uBAAA;EACA,kEAAA;AF4EN;AE1EM;EACE,UAAA;EACA,yFAAA;AF4ER;AExEM;EACE,6HAAA;AF0ER;AEpEM;EACE,kDAAA;EACA,uBAAA;EACA,+DAAA;AFsER;AEpEQ;EACE,MAAA;EACA,UAAA;EACA,0FAAA;AFsEV;AElEQ;EACE,MAAA;EACA,yBAAA;EACA,gIAAA;AFoEV;;AAvGA;EACE,YAAA;EACA,8BHuBa;AGmFf;;AAxGA;EACE,eAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;AA2GF;;AAzGA;EACE,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,gCAAA;AA4GF;;AA1GA;EACE,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;AA6GF;;AA3GA;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;AA8GF;;AA1GE;EACE,kBAAA;EACA,8BHjBW;AG8Hf;;AA3GA;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;EACA,eAAA;AA8GF;;AA5GA;EACE,YAAA;AA+GF;;AA7GA;EACE,UAAA;EACA,eAAA;EACA,eAAA;AAgHF;;AA9GA;EACE,YAAA;EACA,YAAA;AAiHF","sourcesContent":["/* \r\nTABLE OF CONTENTS\r\n\r\n  1. Sizes\r\n  2. Typography\r\n  3. Colors\r\n  4. Spacings\r\n  5. Top Navbar\r\n\r\n*/\r\n\r\n\r\n// 1. Sizes\r\n// ==========================================================================\r\n\r\n$small-screen-up : 461px;\r\n$medium-screen-up : 761px;\r\n$large-screen-up : 1201px;\r\n\r\n$small-screen : 460px;\r\n$medium-screen : 760px;\r\n$large-screen : 1200px;\r\n\r\n$base-margin : calc(0.8rem + 0.5vw);\r\n$double-margin : calc(1.6rem + 1vw);\r\n$quad-margin : calc(3.2rem + 2vw);\r\n$sexta-margin : calc(4.8rem + 3vw);\r\n$okto-margin : calc(6.4rem + 4vw);\r\n$dodeca-margin : calc(9.6rem + 6vw);\r\n\r\n$half-margin : calc(0.4rem + 0.25vw);\r\n$quarter-margin : calc(0.2rem + 0.15vw);\r\n$reduced-margin : 1rem;\r\n\r\n\r\n$-quarter-margin : calc((0.2rem + 0.15vw) * -1);\r\n$-base-margin : calc((0.8rem + 0.5vw) * -1);\r\n$-double-margin : calc((0.8rem + 0.5vw) * -2);\r\n$-quad-margin : calc((0.8rem + 0.5vw) * -4);\r\n$-sexta-margin : calc((0.8rem + 0.5vw) * -6);\r\n$-okto-margin : calc((0.8rem + 0.5vw) * -8);\r\n\r\n\r\n// 2. Typography\r\n// ========================================================================== \r\n\r\n\r\n$copy-font: 'Open Sans', Helvetica, Arial, sans-serif;\r\n$headline-font: 'Exo', sans-serif;\r\n\r\n$bread-text-sm: 14px;\r\n$bread-text-md: 15px;\r\n$bread-text-lg: 16px;\r\n\r\n$bread-text-sm-line: 18px;\r\n$bread-text-md-line: 21px;\r\n$bread-text-lg-line: 24px;\r\n\r\n$tiny-text-sm: 10px;\r\n$tiny-text-md: 11px;\r\n$tiny-text-lg: 12px;\r\n\r\n$tiny-text-sm-line: 14px;\r\n$tiny-text-md-line: 16px;\r\n$tiny-text-lg-line: 18px;\r\n\r\n$small-text-sm: 11px;\r\n$small-text-md: 12px;\r\n$small-text-lg: 13px;\r\n\r\n$small-text-sm-line: 16px;\r\n$small-text-md-line: 17px;\r\n$small-text-lg-line: 18px;\r\n\r\n$large-text-sm: 16px;\r\n$large-text-md: 18px;\r\n$large-text-lg: 20px;\r\n\r\n$huge-text-sm: 26px;\r\n$huge-text-md: 36px;\r\n$huge-text-lg: 54px;\r\n\r\n$h1 : calc(2.65rem + 1vw);\r\n$h1-h2 : calc(1.65rem + 1.1vw);\r\n$h2 : calc(1.8rem + 1vw);\r\n$h3 : calc(1.4rem + 0.8vw);\r\n$h4 : calc(1.2rem + 0.4vw);\r\n$h5 : calc(0.9rem + 0.1vw);\r\n$h6 : calc(0.7rem + 0.08vw);\r\n\r\n\r\n$big-text : calc(2.5rem + 0.7vw);\r\n$bigger-text : calc(2.9rem + 0.9vw);\r\n$biggest-text : calc(3.2rem + 1.2vw);\r\n\r\n$h4-lineheight : calc(1.7rem + 0.2vw);\r\n$h4-padding : calc(1.7rem + 0.2vw) 0;\r\n\r\n$tiny-icon : calc(1.8rem + 0.4vw);\r\n$small-icon : calc(2rem + 0.5vw);\r\n$medium-icon : calc(2.6rem + 0.8vw);\r\n$big-icon : calc(4rem + 1vw);\r\n$huge-icon : calc(6rem + 1.6vw);\r\n$mega-icon: calc(8rem + 2vw);\r\n\r\n\r\n$mega-font : calc(2rem + 2vw);\r\n\r\n$lg-button: calc(4rem + 2vw);\r\n$md-button: calc(2rem + 1vw);\r\n$sm-button: calc(1rem + 0.5vw);\r\n\r\n// 3. Colors\r\n// ==========================================================================\r\n\r\n$primary-color : color(\"essblue\", \"base\");\r\n$primary-color-hover : color(\"essblue\", \"darken-3\");\r\n$primary-text : color(\"gray\", \"darken-2\");\r\n$secondary-color : color(\"gray\", \"darken-2\");\r\n$white : color(\"shades\", \"white\");\r\n\r\n//SYSTEM\r\n$success-color : color(\"green\", \"base\");\r\n$error-color : color(\"red\", \"base\");\r\n\r\n$link-color : color(\"gray\", \"base\");\r\n$ess-base-green : color(\"green\", \"base\");\r\n\r\n$card-link-color : color(\"essblue\", \"base\");\r\n$footer-font-color : color(\"gray\", \"base\");\r\n$footer-bg-color : color(\"gray\", \"lighten-4\");\r\n$footer-copyright-font-color: color(\"gray\", \"lighten-2\");\r\n$footer-copyright-bg-color : none;\r\n$ess-blue-transp : rgba(15, 42, 86, 0.2);\r\n\r\n\r\n\r\n// GRADIENT\r\n$ess-blue-gradient : linear-gradient(to left, color('gray', 'base'), color('gray', 'lighten-1'));\r\n$ess-blue-gradient-reverse : linear-gradient(to right, $primary-color, $secondary-color);\r\n\r\n\r\n// button colors \r\n$primary-button-bg : $primary-color;\r\n$primary-button-bg-hover : color('essblue', 'darken-1');\r\n\r\n\r\n\r\n// 4. Spacings\r\n// ==========================================================================\r\n\r\n\r\n$spaces-map: (\r\n  \"zero\" : 0,\r\n  \"quarter\": $quarter-margin,\r\n  \"half\": $half-margin,\r\n  \"base\" : $base-margin,\r\n  \"double\" : $double-margin,\r\n  \"quad\" : $quad-margin,\r\n  \"sexta\": $sexta-margin,\r\n  \"okta\" : $okto-margin,\r\n  \"dodeca\" : $dodeca-margin,\r\n  \"minus-base\": $-base-margin,\r\n  \"minus-double\": $-double-margin,\r\n  \"minus-quad\": $-quad-margin\r\n);\r\n\r\n$spaces-values: (\r\n  \"m\": (\"margin\"),\r\n  \"m-top\": (\"margin-top\"),\r\n  \"m-right\": (\"margin-right\"),\r\n  \"m-bot\": (\"margin-bottom\"),\r\n  \"m-left\": (\"margin-left\"),\r\n  \"m-hor\": (\"margin-left\", \"margin-right\"),\r\n  \"m-vert\": (\"margin-top\", \"margin-bottom\"),\r\n  \"p\":(\"padding\"),\r\n  \"p-top\": (\"padding-top\"),\r\n  \"p-right\": (\"padding-right\"),\r\n  \"p-bot\": (\"padding-bottom\"),\r\n  \"p-left\": (\"padding-left\"),\r\n  \"p-hor\": (\"padding-left\", \"padding-right\"),\r\n  \"p-vert\": (\"padding-top\", \"padding-bottom\"),\r\n);\r\n\r\n\r\n// 5. Top Navbar\r\n// ==========================================================================\r\n\r\n$topnav_padding: $base-margin;\r\n\r\n$nav_cube_side_width: 1.4rem;\r\n$nav_cube_side_shift: 0.9rem;\r\n$nav_cube_side_shift_2: 1rem;","@charset \"UTF-8\";\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n// Settings\n// ==================================================\n$hamburger-padding-x           : 15px !default;\n$hamburger-padding-y           : 15px !default;\n$hamburger-layer-width         : 40px !default;\n$hamburger-layer-height        : 4px !default;\n$hamburger-layer-spacing       : 6px !default;\n$hamburger-layer-color         : #000 !default;\n$hamburger-layer-border-radius : 4px !default;\n$hamburger-hover-opacity       : 0.7 !default;\n$hamburger-active-layer-color  : $hamburger-layer-color !default;\n$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;\n\n// To use CSS filters as the hover effect instead of opacity,\n// set $hamburger-hover-use-filter as true and\n// change the value of $hamburger-hover-filter accordingly.\n$hamburger-hover-use-filter   : false !default;\n$hamburger-hover-filter       : opacity(50%) !default;\n$hamburger-active-hover-filter: $hamburger-hover-filter !default;\n\n// Types (Remove or comment out what you don’t need)\n// ==================================================\n$hamburger-types: (\n  3dx,\n  3dx-r,\n  3dy,\n  3dy-r,\n  3dxy,\n  3dxy-r,\n  arrow,\n  arrow-r,\n  arrowalt,\n  arrowalt-r,\n  arrowturn,\n  arrowturn-r,\n  boring,\n  collapse,\n  collapse-r,\n  elastic,\n  elastic-r,\n  emphatic,\n  emphatic-r,\n  minus,\n  slider,\n  slider-r,\n  spin,\n  spin-r,\n  spring,\n  spring-r,\n  stand,\n  stand-r,\n  squeeze,\n  vortex,\n  vortex-r\n) !default;\n\n// Base Hamburger (We need this)\n// ==================================================\n@import \"base\";\n\n// Hamburger types\n// ==================================================\n@import \"types/3dx\";\n@import \"types/3dx-r\";\n@import \"types/3dy\";\n@import \"types/3dy-r\";\n@import \"types/3dxy\";\n@import \"types/3dxy-r\";\n@import \"types/arrow\";\n@import \"types/arrow-r\";\n@import \"types/arrowalt\";\n@import \"types/arrowalt-r\";\n@import \"types/arrowturn\";\n@import \"types/arrowturn-r\";\n@import \"types/boring\";\n@import \"types/collapse\";\n@import \"types/collapse-r\";\n@import \"types/elastic\";\n@import \"types/elastic-r\";\n@import \"types/emphatic\";\n@import \"types/emphatic-r\";\n@import \"types/minus\";\n@import \"types/slider\";\n@import \"types/slider-r\";\n@import \"types/spin\";\n@import \"types/spin-r\";\n@import \"types/spring\";\n@import \"types/spring-r\";\n@import \"types/stand\";\n@import \"types/stand-r\";\n@import \"types/squeeze\";\n@import \"types/vortex\";\n@import \"types/vortex-r\";\n\n// ==================================================\n// Cooking up additional types:\n//\n// The Sass for each hamburger type should be nested\n// inside an @if directive to check whether or not\n// it exists in $hamburger-types so only the CSS for\n// included types are generated.\n//\n// e.g. hamburgers/types/_new-type.scss\n//\n// @if index($hamburger-types, new-type) {\n//   .hamburger--new-type {\n//     ...\n//   }\n// }\n","@use \"sass:math\";\n\n// Hamburger\n// ==================================================\n.hamburger {\n  padding: $hamburger-padding-y $hamburger-padding-x;\n  display: inline-block;\n  cursor: pointer;\n\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n\n  // Normalize (<button>)\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    @if $hamburger-hover-use-filter == true {\n      filter: $hamburger-hover-filter;\n    }\n    @else {\n      opacity: $hamburger-hover-opacity;\n    }\n  }\n\n  &.is-active {\n    &:hover {\n      @if $hamburger-hover-use-filter == true {\n        filter: $hamburger-active-hover-filter;\n      }\n      @else {\n        opacity: $hamburger-active-hover-opacity;\n      }\n    }\n\n    .hamburger-inner,\n    .hamburger-inner::before,\n    .hamburger-inner::after {\n      background-color: $hamburger-active-layer-color;\n    }\n  }\n}\n\n.hamburger-box {\n  width: $hamburger-layer-width;\n  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: math.div($hamburger-layer-height, -2);\n\n  &,\n  &::before,\n  &::after {\n    width: $hamburger-layer-width;\n    height: $hamburger-layer-height;\n    background-color: $hamburger-layer-color;\n    border-radius: $hamburger-layer-border-radius;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n  }\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n  }\n\n  &::before {\n    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n\n  &::after {\n    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;\n  }\n}\n","@import '../components/variables'\n@import '../components/colors'\n@import 'components/hamburger-settings'\n@import 'hamburgers/_sass/hamburgers/hamburgers'\n\n#wm-logo\n  width: 100px\n  padding: $half-margin\n\n#wmnav-cont\n  position: fixed\n  height: 100vh\n  width: 100vw\n  z-index: 10\n\n#wmnav\n  display: flex\n  justify-content: space-between\n  flex-wrap: nowrap\n  position: fixed\n  top: 0\n  width: 100%\n  background: white\n  z-index: 1000\n  border-bottom: 1px solid color('gray', 'base')\n\n#wmnav-slides\n  width: 100vw\n  height: 100vh\n  max-width: 100vw\n  max-height: 100vh\n  background: white\n  position: absolute\n  top: 0\n  left: 0\n  display: none\n\n.wmnav-slide\n  width: 100vw\n  height: 100vh\n  position: absolute\n  display: none\n\n.wmnav-slide-inner\n\n  h3\n    text-align: center\n    padding: $half-margin\n\n#wmnav-slide-main .wmnav-slide-inner\n  display: flex\n  min-height: 100%\n  align-items: center\n  justify-items: center\n  align-content: center\n  flex-wrap: wrap\n\n.wmnav-back-arrow-svg\n  width: 120px\n\n.wmnav-back-arrow\n  fill: none\n  stroke: color('gray', 'darken-1')\n  stroke-width: 2\n\n.wmnav-back-button\n  width: 150px\n  height: auto\n","\n$hamburger-layer-height: 2px\n$hamburger-layer-spacing: 8px\n$hamburger-layer-color: gray\n\n$hamburger-types: ( collapse )\n","@if index($hamburger-types, collapse) {\n  /*\n   * Collapse\n   */\n  .hamburger--collapse {\n    .hamburger-inner {\n      top: auto;\n      bottom: 0;\n      transition-duration: 0.13s;\n      transition-delay: 0.13s;\n      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n      &::after {\n        top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;\n        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    opacity 0.1s linear;\n      }\n\n      &::before {\n        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n                    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n    }\n\n    &.is-active {\n      .hamburger-inner {\n        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);\n        transition-delay: 0.22s;\n        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n        &::after {\n          top: 0;\n          opacity: 0;\n          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      opacity 0.1s 0.22s linear;\n        }\n\n        &::before {\n          top: 0;\n          transform: rotate(-90deg);\n          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),\n                      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/images/ess_logo.svg":
/*!****************************************!*\
  !*** ./src/assets/images/ess_logo.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/6f945befafc6f06b018c8ea5054ca6b7-ess_logo.svg");

/***/ }),

/***/ "./src/sass/device-nav-styles/device_nav.sass":
/*!****************************************************!*\
  !*** ./src/sass/device-nav-styles/device_nav.sass ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_device_nav_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./device_nav.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/device-nav-styles/device_nav.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_device_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_device_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_device_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_device_nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/device-nav/device-nav-component.tsx":
/*!************************************************************!*\
  !*** ./src/components/device-nav/device-nav-component.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_ess_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/ess_logo.svg */ "./src/assets/images/ess_logo.svg");
/* harmony import */ var _sass_device_nav_styles_device_nav_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sass/device-nav-styles/device_nav.sass */ "./src/sass/device-nav-styles/device_nav.sass");
/* harmony import */ var _slides_slide_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/slide-main */ "./src/components/device-nav/slides/slide-main.tsx");
/* harmony import */ var _slides_slide_sub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/slide-sub */ "./src/components/device-nav/slides/slide-sub.tsx");
/* harmony import */ var _types_device_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/device-nav-component */ "./src/types/device-nav-component.ts");






window.gsap.registerPlugin(window.ScrollTrigger);
const DeviceNavComponent = ({ homeUrl }) => {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [slidesArray, setSlidesArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const Slides = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideMain = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideAbout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideSolutions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideIndustries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideCaseSolutions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SlideContact = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        //const sectionSlider:GSAPTween | null = null;
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
            },
            {
                name: 'Case Solutions',
                el: SlideCaseSolutions.current
            },
            {
                name: 'Contact',
                el: SlideContact.current
            }
        ]);
    }, []);
    const callSlide = (slide, back) => {
        console.log('slide is');
        console.log(slide);
        if (activeSlide && activeSlide !== slide) {
            const SlideToDismiss = activeSlide;
            window.gsap.to(SlideToDismiss, { opacity: 0, left: back ? '50%' : '-50%', onComplete: () => {
                    gsap.set(SlideToDismiss, { display: 'none' });
                } });
        }
        window.gsap.set(slide, { left: back ? '-50%' : '50%', opacity: 0, display: 'block' });
        window.gsap.to(slide, { left: 0, opacity: 1 });
        setActiveSlide(slide);
    };
    const navToggle = (event) => {
        console.log(event.currentTarget);
        console.log(isActive);
        // Trigger ON
        if (!isActive) {
            console.log('is not active - activating');
            event.currentTarget.classList.add('is-active');
            window.gsap.set(Slides.current, { display: 'block' });
            window.gsap.set(Slides.current, { opacity: 0 });
            window.gsap.to(Slides.current, { opacity: 1 });
            callSlide(SlideMain.current, false);
        }
        // Trigger OFF
        else {
            window.gsap.to(Slides.current, { opacity: 0,
                onComplete: () => {
                    window.gsap.set(Slides.current, { display: 'none' });
                }
            });
            console.log('is active - deactivating');
            event.currentTarget.classList.remove('is-active');
        }
        setIsActive(!isActive);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: homeUrl },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'wm-logo' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { width: "150", height: "50", src: _assets_images_ess_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"] }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: 'wm-burger' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: navToggle, id: "main-nav-toggler", className: "hamburger hamburger--collapse", type: "button", "data-toggle": "top-menu", "aria-label": "hamburger navigation toggle" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hamburger-box" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hamburger-inner" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "wmnav-slides", ref: Slides },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideMain, className: "wmnav-slide", id: "wmnav-slide-main" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slides_slide_main__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "wmnav-slide-inner wmnav-main-slide", callSlide: callSlide, slideLinks: slidesArray })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideAbout, className: "wmnav-slide", id: "wmnav-slide-about" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slides_slide_sub__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "About us", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideIndustries, className: "wmnav-slide", id: "wmnav-slide-industries" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slides_slide_sub__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Industries", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideSolutions, className: "wmnav-slide", id: "wmnav-slide-solutions" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slides_slide_sub__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Solutions", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideCaseSolutions, className: "wmnav-slide", id: "wmnav-slide-case-solutions" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slides_slide_sub__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Case Solutions", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SlideContact, className: "wmnav-slide", id: "wmnav-slide-contact" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slides_slide_sub__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Contact", className: "wmnav-slide-inner", callSlide: callSlide, slideLinks: [{ name: 'main', el: SlideMain.current }] })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceNavComponent);


/***/ }),

/***/ "./src/components/device-nav/icons.tsx":
/*!*********************************************!*\
  !*** ./src/components/device-nav/icons.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WmnavBackArrow": () => (/* binding */ WmnavBackArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WmnavBackArrow = ({ className }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: 'wmnav-back-arrow-svg', version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 120 50" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", { id: "Line_13", className: className, x1: "115.5", y1: "25", x2: "4.5", y2: "25" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", { className: className, points: "23.9,44.4 4.5,25 23.9,5.6 " })));
};


/***/ }),

/***/ "./src/components/device-nav/slides/slide-main.tsx":
/*!*********************************************************!*\
  !*** ./src/components/device-nav/slides/slide-main.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const slideMain = ({ className, callSlide, slideLinks }) => {
    const click = (e, slide) => {
        e.preventDefault();
        callSlide(slide, false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className }, slideLinks.map((key, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'w-full m-zero p-zero', key: 'mainMenuLink-' + index, onClick: e => { click(e, key.el); } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-center" }, key.name)));
    })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideMain);


/***/ }),

/***/ "./src/components/device-nav/slides/slide-sub.tsx":
/*!********************************************************!*\
  !*** ./src/components/device-nav/slides/slide-sub.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons */ "./src/components/device-nav/icons.tsx");


const slideSub = ({ title, className, callSlide, slideLinks, children }) => {
    const click = (e, slide) => {
        e.preventDefault();
        callSlide(slide, true);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `${className} container p-top-sexta` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: 'col-3 wmnav-back-button', onClick: e => { click(e, slideLinks[0].el); } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_1__.WmnavBackArrow, { className: 'wmnav-back-arrow' })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "col-3 light text-center has-gray-darken-1-color uppercase" }, title),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "col-3" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideSub);


/***/ }),

/***/ "./src/types/device-nav-component.ts":
/*!*******************************************!*\
  !*** ./src/types/device-nav-component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-unused-vars */



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "chunks/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/device_nav.tsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_device_nav_device_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/device-nav/device-nav-component */ "./src/components/device-nav/device-nav-component.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_device_nav_device_nav_component__WEBPACK_IMPORTED_MODULE_2__["default"], { homeUrl: mindConstants.homeUrl }), document.querySelector('#wmnav-cont '));
const MainNavToggler = document.getElementById('main-nav-toggler');
if (MainNavToggler) {
    MainNavToggler.addEventListener('click', () => {
        MainNavToggler.classList.toggle('is-active');
    });
}

})();

/******/ })()
;
//# sourceMappingURL=index_mobile.js.map