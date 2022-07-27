/**
 * Device menu navigation main component
 * @since 3.0
 */

// framework
import React, { useEffect, useRef, useState } from 'react';

// types
import '../../../globals';
import { WmMnavSlideRef } from '../../types';

// components
import SlideMainComp from './slide-main';
import SlideSub from './slide-sub';
import AboutSlide from './device-slides/slide-about';
import IndustriesSlide from './device-slides/slide-industries';
import SolutionsSlide from './device-slides/slide-solutions';

//assets
import EssLogo from '../../assets/images/ess_logo.svg';
import '../sass/devices_nav.sass';


declare type DevicesNavProps = {
  homeUrl:string
  templateUrl:string
}

const DevicesNav: React.FC<DevicesNavProps> = ( { homeUrl, templateUrl} ) => {

  const [isActive, setIsActive] = useState( false );
  const [activeSlide, setActiveSlide] = useState<HTMLDivElement>( );
  const [slidesArray, setSlidesArray] = useState<WmMnavSlideRef[]>( [] );

  const Slides = useRef<HTMLDivElement>( null );
  const SlideMain = useRef<HTMLDivElement>( null );
  const SlideAbout = useRef<HTMLDivElement>( null );
  const SlideSolutions = useRef<HTMLDivElement>( null );
  const SlideIndustries = useRef<HTMLDivElement>( null );

  useEffect( ()=>{

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
      }
    ] );

  },[] );

  const callSlide = ( slide:HTMLDivElement, back:boolean ) => {

    if( activeSlide && activeSlide !== slide ) {
      const SlideToDismiss = activeSlide;
      window.gsap.to( SlideToDismiss, {opacity: 0, left: back ? '50%' : '-50%', onComplete:()=>{
        window.gsap.set( SlideToDismiss, {display: 'none'} );
      }} );
    }
    window.gsap.set( slide, {left: back ? '-50%' : '50%' , opacity:0, display: 'block'} );
    window.gsap.to( slide, {left: 0, opacity:1} );
    setActiveSlide( slide );
  };

  const navToggle = ( event: React.MouseEvent<HTMLElement> ) => {


    // Trigger ON
    if( !isActive ) {

      // Disable scrolling
      document.body.style.overflow = 'hidden';

      event.currentTarget.classList.add( 'is-active' );

      window.gsap.set( Slides.current, {display: 'block'} );
      window.gsap.set( Slides.current, {opacity: 0} );
      window.gsap.to( Slides.current, {opacity: 1} );
      if( SlideMain.current )
        callSlide( SlideMain.current, false );
    }
    // Trigger OFF
    else {

      // Re-enable scrolling
      document.body.style.overflow = 'auto';

      window.gsap.to( Slides.current,
        {opacity: 0,
          onComplete:()=>{
            window.gsap.set( Slides.current, {display: 'none'} );
          }
        }
      );
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
            <AboutSlide homeUrl={homeUrl}/>
          </SlideSub>
        </div>

        <div ref={SlideIndustries} className="wmnav-slide" id="wmnav-slide-industries" >
          <SlideSub title="Industries" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
            <IndustriesSlide homeUrl={homeUrl}/>
          </SlideSub>
        </div>
        <div ref={SlideSolutions} className="wmnav-slide" id="wmnav-slide-solutions" >
          <SlideSub title="Solutions" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
            <SolutionsSlide homeUrl={homeUrl} templateUrl={templateUrl} />
          </SlideSub>
        </div>
      </div>
    </div>
  );
};

export default DevicesNav;