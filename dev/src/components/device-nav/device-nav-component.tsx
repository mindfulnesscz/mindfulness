

import React, { useEffect, useRef, useState } from 'react';
import EssLogo from '../../assets/images/ess_logo.svg';
import '../../sass/device-nav-styles/device_nav.sass';


declare global {
  interface Window {
    gsap: GSAP
    ScrollTrigger: any
  }
}

declare type DeviceNavProps = {
  homeUrl:string
}

window.gsap.registerPlugin( window.ScrollTrigger );



const DeviceNavComponent: React.FC<DeviceNavProps> = ( { homeUrl} ) => {
  const [isActive, setIsActive] = useState( false );

  const Slides = useRef<HTMLDivElement>( null );

  useEffect( ()=>{
    //const sectionSlider:GSAPTween | null = null;

  },[] );

  const navToggle = ( event: React.MouseEvent<HTMLElement> ) => {
    console.log( event.currentTarget );
    console.log( isActive );
    if( !isActive ) {
      event.currentTarget.classList.add( 'is-active' );
    }
    else {
      event.currentTarget.classList.remove( 'is-active' );
    }
    
    setIsActive( !isActive );

    console.log( window );
    console.log( window.gsap );
    console.log( window.ScrollTrigger );
  };


  return (
    <div>
      <div id="wm-mnav">
        <a href={homeUrl}>
          <div id='wm-logo'>
            <img width="150" height="50" src={EssLogo} />
          </div>
        </a>
        <div id='wm-burger'>
          <button onClick={navToggle} id="main-nav-toggler" className="hamburger hamburger--collapse" type="button" data-toggle="top-menu" aria-label="hamburger navigation toggle">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div id="wm-mnav-slides" ref={Slides} className={`${!isActive && 'hidden'}`}>
        <div id="wm-mnav-slide-about" className="wm-mnav-slide">

        </div>
      </div>
    </div>
  );
};

export default DeviceNavComponent;