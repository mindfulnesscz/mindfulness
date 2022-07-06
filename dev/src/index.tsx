import testDevice from './components/mind-helpers/testDevice';

/*jshint esversion: 6 */

// Development
window.MindfulnessData.development = true;

const src_desktop = '/assets/js/index_desktop.js';
const src_mobile = '/assets/js/index_mobile.js';

// Check Device
window.MindfulnessData.isDevice = testDevice( );


// MAIN SCRIPT INITIALIZER AFTER DOM CONTENT IS LOADED


document.addEventListener( 'DOMContentLoaded', () => {

  // getting the correct script for mobile/desktop

  const script = document.createElement( 'script' );
  const att = document.createAttribute( 'type' );
  
  att.value = 'text/javascript';
  script.setAttributeNode( att );

  script.src = window.MindfulnessData.templateUrl + '/' + index_src + '?ver=' + window.mindfulness_version;
  document.head.appendChild( script );

  console.log( 'template url is: ' + mindConstants.template_url );
  console.log( 'version is '+mindConstants.template_version );

} );



