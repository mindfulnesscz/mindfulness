
// modules
import MindCookies from './helpers/MindCookies';
import React from 'react';

import ReactDOM from 'react-dom';

import NavMenu from './nav/nav-menu';




// type definitions
import './types/index';

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
window.MindGlobal.MindCookiesHandler = new MindCookies( './' );


/**
 * Allows use of ScrollTrigger on gsap for all components (Currently not used at all )
 */
window.gsap.registerPlugin( window.ScrollTrigger );


/**
 * Loading different content for different types of navigation (Mobile / Desktop)
 */

document.addEventListener( 'DOMContentLoaded', () => {

  const navCont = document.querySelector( '#wm-nav-cont' );
  ReactDOM.render( <NavMenu mindGlobal={window.MindGlobal} />, navCont );
} );




