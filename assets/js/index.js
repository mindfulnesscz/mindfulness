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
 * @returns string - "device" | "desktop"
 * @since 3.0
 */
function testDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return 'devices';
    }
    else
        return 'desktop';
}


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-unused-vars */



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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_testDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/testDevice */ "./src/helpers/testDevice.ts");
/* harmony import */ var _helpers_MindCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/MindCookies */ "./src/helpers/MindCookies.ts");
/* harmony import */ var _helpers_loadScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/loadScript */ "./src/helpers/loadScript.ts");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/index */ "./src/types/index.ts");
// modules



// type definitions

/**
 * Cookie handler disabled at the moment. Will be used elsewhere probably as a part of a module.
 * Starts Cookies handler to store data about intros and such
 * Currently only intro played is stored in cookies
 */
window.MindGlobal.MindCookiesHandler = new _helpers_MindCookies__WEBPACK_IMPORTED_MODULE_1__["default"]('./');
/**
 * Defines the path of navigation scripts
 */
const navPath = window.MindGlobal.templateUrl + '/assets/js/nav/';
/**
 * Allows use of ScrollTrigger on gsap for all components (Currently not used at all )
 */
window.gsap.registerPlugin(window.ScrollTrigger);
/**
 * Loading different content for different types of navigation (Mobile / Desktop)
 */
document.addEventListener('DOMContentLoaded', () => {
    const device = (0,_helpers_testDevice__WEBPACK_IMPORTED_MODULE_0__["default"])(); // devices | desktop
    if (device == 'devices') {
        (0,_helpers_loadScript__WEBPACK_IMPORTED_MODULE_2__["default"])(navPath + device + '.js' + '?ver=' + window.MindGlobal.templateVersion).then(message => {
            console.log(message);
        });
    }
    else if (device == 'desktop') {
        // debounce onresize to load the navigation components script dynamically when needed.
        // This is the way to go although the code is a little bit ugly.
        const navDevices = document.querySelector('#wmnav-cont-devices');
        const navDesktop = document.querySelector('#wmnav-cont-desktop');
        const grabScript = () => {
            if (window.innerWidth > 760) {
                // Hides devices and loads script for desktop if not loaded yet
                navDevices.style.display = 'none';
                navDesktop.style.display = 'block';
                if (!window.MindGlobal.navCube)
                    (0,_helpers_loadScript__WEBPACK_IMPORTED_MODULE_2__["default"])(navPath + 'desktop.js' + '?ver=' + window.MindGlobal.templateVersion).then(message => {
                        console.log(message);
                    });
            }
            else {
                // Hides desktop nav and loads script for devices if not loaded yet
                navDevices.style.display = 'block';
                navDesktop.style.display = 'none';
                if (!window.MindGlobal.navSmall)
                    (0,_helpers_loadScript__WEBPACK_IMPORTED_MODULE_2__["default"])(navPath + 'devices.js' + '?ver=' + window.MindGlobal.templateVersion).then(message => {
                        console.log(message);
                    });
            }
        };
        let timer = setTimeout(grabScript, 0);
        window.onresize = () => {
            clearTimeout(timer);
            timer = setTimeout(grabScript, 100);
        };
    }
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map