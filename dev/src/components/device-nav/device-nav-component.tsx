

import React, { useEffect, useRef, useState } from 'react';
import EssLogo from '../../assets/images/ess_logo.svg';
import '../../sass/device-nav-styles/device_nav.sass';

import SlideMainComp from './slides/slide-main';
import SlideSub from './slides/slide-sub';

import '../../types/device-nav-component';


declare type DeviceNavProps = {
  homeUrl:string
}

window.gsap.registerPlugin( window.ScrollTrigger );



const DeviceNavComponent: React.FC<DeviceNavProps> = ( { homeUrl} ) => {

  const [isActive, setIsActive] = useState( false );
  const [activeSlide, setActiveSlide] = useState( null );
  const [slidesArray, setSlidesArray] = useState( [] );

  const Slides = useRef<HTMLDivElement>( null );
  const SlideMain = useRef<HTMLDivElement>( null );
  const SlideAbout = useRef<HTMLDivElement>( null );
  const SlideSolutions = useRef<HTMLDivElement>( null );
  const SlideIndustries = useRef<HTMLDivElement>( null );
  const SlideCaseSolutions = useRef<HTMLDivElement>( null );
  const SlideContact = useRef<HTMLDivElement>( null );

  useEffect( ()=>{
    //const sectionSlider:GSAPTween | null = null;

    setSlidesArray( [
      {
        name: 'About us',
        el: SlideAbout.current
      },
      {
        name: 'Industries',
        el: SlideIndustries.current
      },
      {
        name: 'Solutions',
        el: SlideSolutions.current
      },
      {
        name: 'Case Solutions',
        el: SlideCaseSolutions.current
      },
      {
        name: 'Contact',
        el: SlideContact.current
      }
    ] );

  },[] );

  const callSlide = ( slide:HTMLDivElement, back:boolean ) => {

    console.log( 'slide is' );
    console.log( slide );
    if( activeSlide && activeSlide !== slide ) {
      const SlideToDismiss = activeSlide;
      window.gsap.to( SlideToDismiss, {opacity: 0, left: back ? '50%' : '-50%', onComplete:()=>{
        gsap.set( SlideToDismiss, {display: 'none'} );
      }} );
    }
    window.gsap.set( slide, {left: back ? '-50%' : '50%' , opacity:0, display: 'block'} );
    window.gsap.to( slide, {left: 0, opacity:1} );
    setActiveSlide( slide );
  };

  const navToggle = ( event: React.MouseEvent<HTMLElement> ) => {
    console.log( event.currentTarget );
    console.log( isActive );

    // Trigger ON
    if( !isActive ) {

      console.log( 'is not active - activating' );
      event.currentTarget.classList.add( 'is-active' );

      window.gsap.set( Slides.current, {display: 'block'} );
      window.gsap.set( Slides.current, {opacity: 0} );
      window.gsap.to( Slides.current, {opacity: 1} );

      callSlide( SlideMain.current, false );
    }
    // Trigger OFF
    else {
      window.gsap.to( Slides.current,
        {opacity: 0,
          onComplete:()=>{
            window.gsap.set( Slides.current, {display: 'none'} );
          }
        }
      );
      console.log( 'is active - deactivating' );
      event.currentTarget.classList.remove( 'is-active' );
      
    }
    
    setIsActive( !isActive );
  };


  return (
    <div>
      <div id="wmnav">
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
      <div id="wmnav-slides" ref={Slides}>

        <div ref={SlideMain} className="wmnav-slide"  id="wmnav-slide-main">
          <SlideMainComp className="wmnav-slide-inner wmnav-main-slide" callSlide={callSlide} slideLinks={slidesArray} ></SlideMainComp>
        </div>

        <div ref={SlideAbout} className="wmnav-slide"  id="wmnav-slide-about" >
          <SlideSub title="About us" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
          </SlideSub>
        </div>

        <div ref={SlideIndustries} className="wmnav-slide" id="wmnav-slide-industries" >
          <SlideSub title="Industries" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
          </SlideSub>
        </div>
        <div ref={SlideSolutions} className="wmnav-slide" id="wmnav-slide-solutions" >
          <SlideSub title="Solutions" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
          </SlideSub>
        </div>
        <div ref={SlideCaseSolutions} className="wmnav-slide" id="wmnav-slide-case-solutions" >
          <SlideSub title="Case Solutions" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
          </SlideSub>
        </div>
        <div ref={SlideContact} className="wmnav-slide" id="wmnav-slide-contact" >
          <SlideSub title="Contact" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
          </SlideSub>
        </div>
      </div>
    </div>
  );
};

export default DeviceNavComponent;