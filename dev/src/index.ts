
// modules
import testDevice from './helpers/testDevice';
import MindCookies from './helpers/MindCookies';
import loadScript from './helpers/loadScript';

// type definitions
import './types/index';


/**
 * Cookie handler disabled at the moment. Will be used elsewhere probably as a part of a module.
 * Starts Cookies handler to store data about intros and such
 * Currently only intro played is stored in cookies
 */ 
window.MindGlobal.MindCookiesHandler = new MindCookies( './' );


/**
 * Defines the path of navigation scripts
 */
const navPath = window.MindGlobal.templateUrl + '/assets/js/nav/';


/**
 * Allows use of ScrollTrigger on gsap for all components (Currently not used at all )
 */
window.gsap.registerPlugin( window.ScrollTrigger );


/**
 * Loading different content for different types of navigation (Mobile / Desktop)
 */
document.addEventListener( 'DOMContentLoaded', () => {


  const device:string = testDevice(); // devices | desktop

  if( device == 'devices' ) {
    loadScript( navPath + device + '.js' + '?ver=' + window.MindGlobal.templateVersion ).then( message=>{
      console.log( message );
    } );
  }
  else if ( device == 'desktop' ) {

    // debounce onresize to load the navigation components script dynamically when needed.
    // This is the way to go although the code is a little bit ugly.

    const navDevices = document.querySelector( '#wmnav-cont-devices' ) as HTMLDivElement;
    const navDesktop = document.querySelector( '#wmnav-cont-desktop' ) as HTMLDivElement;

    const grabScript = ()=>{

      if( window.innerWidth > 760 ) {

        // Hides devices and loads script for desktop if not loaded yet
        navDevices.style.display = 'none';
        navDesktop.style.display = 'block';
        if( !window.MindGlobal.navCube )
          loadScript( navPath  + 'desktop.js' + '?ver=' + window.MindGlobal.templateVersion ).then( message=>{
            console.log( message );
          } );
      }
      else {
        // Hides desktop nav and loads script for devices if not loaded yet
        navDevices.style.display = 'block';
        navDesktop.style.display= 'none';
        if ( !window.MindGlobal.navSmall )
          loadScript( navPath + 'devices.js' + '?ver=' + window.MindGlobal.templateVersion ).then( message=>{
            console.log( message );
          } );
      }

    };

    let timer=setTimeout( grabScript, 0 );

    window.onresize=()=>{
      clearTimeout( timer );
      timer = setTimeout( grabScript, 100 );
    };
  }
} );




