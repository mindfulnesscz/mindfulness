
// modules
import MindCookies from './helpers/MindCookies';

import React from 'react';
import ReactDOM from 'react-dom';

import NavMenu from './nav/nav-menu';
import loadScript from './helpers/loadScript';


declare function initModals( modals:any ):void

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
 * Initiates navigation
 */

document.addEventListener( 'DOMContentLoaded', () => {


  // Initiates top navigation or throw error

  const navCont = document.querySelector( '#wmnav-cont' );

  if( navCont ) {
    ReactDOM.render( <NavMenu mindGlobal={window.MindGlobal} />, navCont );
  }
  else throw new DOMException( 'unable to find menu containers' );


  // Initiates modals if there's at least one

  if( document.querySelector( '.wmwp-modal-trigger' ) )
    loadScript(  window.MindGlobal.templateUrl + '/assets/js/modals.js' ).then( ()=>{

      

      const subscribeModal = document.querySelector( '#ess-subscribe-modal' ) as HTMLDivElement;
      const subscribeTriggers = document.querySelectorAll( '.wmwp-subscribe-trigger' );

      if( subscribeModal ) {
        subscribeTriggers.forEach( btn => {
          btn.addEventListener( 'click', ()=>{ window.MindGlobal.Modal.show( subscribeModal ); } );
        } );
      }
    } ); 

  
} );




