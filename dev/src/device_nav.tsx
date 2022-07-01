import React from 'react';
import ReactDOM from 'react-dom';
import DeviceNavComponent from './components/device-nav/device-nav-component';


declare const mindConstants:{homeUrl: string};

ReactDOM.render( <DeviceNavComponent homeUrl={mindConstants.homeUrl} />, document.querySelector( '#wmnav-cont ' ) );


const MainNavToggler:HTMLElement | null = document.getElementById ( 'main-nav-toggler' );

if( MainNavToggler ) {
  MainNavToggler.addEventListener ( 'click', ()=>{
    MainNavToggler.classList.toggle ( 'is-active' );
  } );
}