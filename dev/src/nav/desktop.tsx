/**
 * DESKTOP CUBE NAVIGATION INITIALIZATION
 * @since 3.0
 */

import CessCube from './components/csscube';
import React from 'react';
import ReactDOM from 'react-dom';
import DesktopNav from './components/desktop-nav';

/**
 * Finds DOM container for Device nav component and renders it or throws an error
 */
const DesktopNavCont:HTMLElement | null = document.querySelector( '#wmnav-cont-desktop' );

if( DesktopNavCont ) {

  // sets the device navigation as variable to be unloaded if needed
  window.MindGlobal.navCube= <DesktopNav homeUrl={window.MindGlobal.homeUrl} />;

  ReactDOM.render( window.MindGlobal.navCube, DesktopNavCont );

  console.log( 'navigation system is for desktop' );
  console.log( window.MindGlobal.navCube );

  const CSSCube = new CessCube();

  CSSCube.init();

  CSSCube.setup_cube();


}
else {

  throw new Error( 'DOM container for Desktop nav component no found' );

}

