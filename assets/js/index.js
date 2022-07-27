/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/MindCookies.ts":
/*!************************************!*\
  !*** ./src/helpers/MindCookies.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MindCookies)
/* harmony export */ });
/*jshint esversion: 6 */
class MindCookies {
    constructor(path) {
        this.path = path;
        //this.createCookiesArray();
    }
    static setCookie(cname, cvalue, extime) {
        const d = new Date();
        d.setTime(d.getTime() + (extime));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }
    /**
     * Gets cookie based on string slug. If the cookie doesn't exist, returns null.
     *
     * @param cname String slug of the cookie to be checked
     * @returns String | null Returns string value of the cookie or null if the cookie not exists
     * @since 1.0
     */
    static getCookie(cname) {
        const name = cname + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
                console.log(c);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }
    /**
     * Deletes cookie based on slug name
     *
     * @param name String - Slug name of the cookie to be deleted
     * @returns void
     * @since 1.0
     */
    static deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
    createCookiesArray() {
        this.arr_cookies = {};
        if (document.cookie && document.cookie != '') {
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                const csa = c.split('=');
                this.arr_cookies[csa[0]] = csa[1];
            }
            console.log(this.arr_cookies);
        }
    }
}


/***/ }),

/***/ "./src/helpers/loadScript.ts":
/*!***********************************!*\
  !*** ./src/helpers/loadScript.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Function that grabs url of a script and returns promise with onload function
 * @since 3.0
 *
 **/
const loadScript = (url) => {
    const script = document.createElement('script');
    const att = document.createAttribute('type');
    att.value = 'text/javascript';
    script.setAttributeNode(att);
    const ret = new Promise((resolve, reject) => {
        script.onload = () => {
            resolve('script' + url + ' loaded');
        };
        script.onerror = () => {
            reject('script ' + url + ' has encountered an error.');
        };
    });
    script.src = url;
    document.head.appendChild(script);
    return ret;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadScript);


/***/ }),

/***/ "./src/helpers/testDevice.ts":
/*!***********************************!*\
  !*** ./src/helpers/testDevice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ testDevice)
/* harmony export */ });
/**
 * Checks the size of window as well as the user Agent to see whether the website
 * is viewed on mobile device or desktop.
 *
 * @returns Boolean - true for device, false for desktop (Real mobile first, huh?)
 * @since 3.0
 */
function testDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    else
        return false;
}


/***/ }),

/***/ "./src/nav/nav-menu.tsx":
/*!******************************!*\
  !*** ./src/nav/nav-menu.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_testDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/testDevice */ "./src/helpers/testDevice.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_loadScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/loadScript */ "./src/helpers/loadScript.ts");



/**
 * Handles mobile/device navbar with menu switching.
 * Checks if Components are present when needed and loads and inits them
 */
const NavMenu = ({ mindGlobal }) => {
    const sizeCheck = () => {
        const isMobile = (0,_helpers_testDevice__WEBPACK_IMPORTED_MODULE_0__["default"])() || window.innerWidth < mindGlobal.settings.navBreakpoint;
        console.log('ismobile izzz ' + isMobile);
        setDevice(isMobile ? 'mobile' : 'desktop');
    };
    const [device, setDevice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('mobile');
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(setTimeout(sizeCheck, 0));
    const [menuComp, setMenuComp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        console.log('now do the navigation type check init');
        window.onresize = () => {
            clearTimeout(timer);
            setTimer(setTimeout(sizeCheck, 100));
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!mindGlobal[device + 'Nav'])
            callScript(mindGlobal.templateUrl + '/assets/js/nav/' + device + '.js');
    }, [device]);
    const callScript = (url) => {
        (0,_helpers_loadScript__WEBPACK_IMPORTED_MODULE_2__["default"])(url).then(() => {
            setMenuComp(mindGlobal[device + 'Nav']);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, menuComp && menuComp));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
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
/******/ 			// no module.id needed
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
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_MindCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/MindCookies */ "./src/helpers/MindCookies.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav_nav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav-menu */ "./src/nav/nav-menu.tsx");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/index */ "./src/types/index.ts");
// modules




// type definitions

/**
 * Initialize Global settings for the Theme.
 * Maybe when extended in future good idea to move settings to separate file.
 */
const wmSettings = {
    navBreakpoint: 760
};
window.MindGlobal.settings = wmSettings;
/**
 * Cookie handler disabled at the moment. Will be used elsewhere probably as a part of a module.
 * Starts Cookies handler to store data about intros and such
 * Currently only intro played is stored in cookies
 */
window.MindGlobal.MindCookiesHandler = new _helpers_MindCookies__WEBPACK_IMPORTED_MODULE_0__["default"]('./');
/**
 * Allows use of ScrollTrigger on gsap for all components (Currently not used at all )
 */
window.gsap.registerPlugin(window.ScrollTrigger);
/**
 * Loading different content for different types of navigation (Mobile / Desktop)
 */
document.addEventListener('DOMContentLoaded', () => {
    const navCont = document.querySelector('#wm-nav-cont');
    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_nav_nav_menu__WEBPACK_IMPORTED_MODULE_3__["default"], { mindGlobal: window.MindGlobal }), navCont);
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map