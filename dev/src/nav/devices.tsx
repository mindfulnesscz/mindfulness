/**
 * DEVICE NAVIGATION INITIALIZATION
 * @since 3.0
 */

import React from 'react';
import ReactDOM from 'react-dom';
import DevicesNav from './components/devices-nav';

/**
 * Finds DOM container for Device nav component and renders it or throws an error
 */
const DeviceNavCont:HTMLElement | null = document.querySelector( '#wmnav-cont-devices' );

if( DeviceNavCont ) {

  // sets the device navigation as variable to be unloaded if needed
  window.MindGlobal.navSmall = <DevicesNav homeUrl={window.MindGlobal.homeUrl} />;

  ReactDOM.render( window.MindGlobal.navSmall, DeviceNavCont );

  console.log( 'navigation system is for devices' );
  console.log( window.MindGlobal.navSmall );

}
else {

  throw new Error( 'DOM container for Device nav component no found' );

}
