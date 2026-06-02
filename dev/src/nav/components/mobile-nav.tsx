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
import ProductsSlide from './device-slides/slide-products';
import ServicesSlide from './device-slides/slide-services';

//assets
import EssLogo from './ess-logo';
import '../sass/devices_nav.sass';


declare type DevicesNavProps = {
  homeUrl:string
  templateUrl:string
}

const MobileNav: React.FC<DevicesNavProps> = ( { homeUrl, templateUrl} ) => {
  type HeaderStyle = {
    transition: string
    backgroundColor?: string
    borderBottom?: string
    backdropFilter?: string
    WebkitBackdropFilter?: string
  }

  const [isActive, setIsActive] = useState( false );
  const [activeSlide, setActiveSlide] = useState<HTMLDivElement>( );
  const [slidesArray, setSlidesArray] = useState<WmMnavSlideRef[]>( [] );

  const Slides = useRef<HTMLDivElement>( null );
  const SlideMain = useRef<HTMLDivElement>( null );
  const SlideAbout = useRef<HTMLDivElement>( null );
  const SlideSolutions = useRef<HTMLDivElement>( null );
  const SlideIndustries = useRef<HTMLDivElement>( null );

  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>({
    transition: 'all 200ms ease-in'
  })
  const [isTop, setIsTop] = useState(true);
  const [darkOnTop, setDarkOnTop] = useState(false);

  useEffect( ()=>{

    setDarkOnTop(document.body.classList.contains('ess-nav-on-dark'));
    const initialIsTop = window.scrollY <= 0;
    setIsTop(initialIsTop);
    setHeaderStyle({
      transition: 'all 200ms ease-in',
      backgroundColor: initialIsTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.7)',
      borderBottom: initialIsTop ? 'none' : '1px solid rgba(153,153,153,0.35)',
      backdropFilter: initialIsTop ? 'none' : 'blur(14px)',
      WebkitBackdropFilter: initialIsTop ? 'none' : 'blur(14px)'
    });

    setSlidesArray( [
      {
        name: 'About us',
        el: SlideAbout.current
      },
      {
        name: 'Products',
        el: SlideIndustries.current
      },
      {
        name: 'Services',
        el: SlideSolutions.current
      }
    ] );

  },[] );


  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;
      const nextIsTop = currPos.y >= 0;
      setIsTop(nextIsTop);
  
      const shouldBeStyle = {
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        backgroundColor: `${nextIsTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.7)'}`,
        borderBottom: `${nextIsTop ? 'none': '1px solid rgba(153,153,153,0.35)'}`,
        backdropFilter: `${nextIsTop ? 'none' : 'blur(14px)'}`,
        WebkitBackdropFilter: `${nextIsTop ? 'none' : 'blur(14px)'}`
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

      <div id="wmnav-bar" className={`${darkOnTop && isTop ? 'on-dark-top' : ''}`} style={{ ...headerStyle }}>

        <EssLogo homeUrl={homeUrl} templateUrl={templateUrl} inverted={darkOnTop && isTop} />
      
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
          <SlideSub title="Products" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
            <ProductsSlide homeUrl={homeUrl} templateUrl={templateUrl}/>
          </SlideSub>
        </div>
        <div ref={SlideSolutions} className="wmnav-slide" id="wmnav-slide-solutions" >
          <SlideSub title="Services" className="wmnav-slide-inner" callSlide={callSlide} slideLinks={[{name: 'main', el:SlideMain.current}]} >
            <ServicesSlide homeUrl={homeUrl} templateUrl={templateUrl} />
          </SlideSub>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
