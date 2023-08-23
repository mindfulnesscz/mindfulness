/**
 * Device menu navigation main component
 * @since 3.0
 */

// framework
import React, { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position' // bullet proof react scroll position module

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
import EssLogo from './ess-logo';
import '../sass/devices_nav.sass';


declare type DevicesNavProps = {
  homeUrl:string
  templateUrl:string
}

const MobileNav: React.FC<DevicesNavProps> = ( { homeUrl, templateUrl} ) => {

  const [isActive, setIsActive] = useState( false );
  const [activeSlide, setActiveSlide] = useState<HTMLDivElement>( );
  const [slidesArray, setSlidesArray] = useState<WmMnavSlideRef[]>( [] );

  const Slides = useRef<HTMLDivElement>( null );
  const SlideMain = useRef<HTMLDivElement>( null );
  const SlideAbout = useRef<HTMLDivElement>( null );
  const SlideSolutions = useRef<HTMLDivElement>( null );
  const SlideIndustries = useRef<HTMLDivElement>( null );

  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  })

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


  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;
      const isTop = currPos.y >= 0;

      console.log(currPos.y);
      console.log(isTop);
  
      const shouldBeStyle = {
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        backgroundColor: `${isTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'}`,
        borderBottom: `${isTop ? 'none': '1px solid #999'}`
      }
  
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
  
      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )

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
    <div id='wmnav-wrap'>

      <div id="wmnav-bar"  style={{ ...headerStyle }}>

        <EssLogo homeUrl={homeUrl} templateUrl={templateUrl} />
      
        <div id='wm-burger'>
          <button onClick={navToggle} id="main-nav-toggler" className="m-right-base hamburger hamburger--collapse" type="button" data-toggle="top-menu" aria-label="hamburger navigation toggle">
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

export default MobileNav;