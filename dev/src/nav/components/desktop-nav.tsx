
/**
 * Desktop menu navigation main component
 * @since 3.0
 */

// framework
import React, {useEffect, useState} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position' // bullet proof react scroll position module



// types
import '../../../globals'; // for .svg import support in typescript

// components
import CssCube from './csscube';
import BottomAbout from './cube-sides/bottom-about';
import LeftCaseSolutions from './cube-sides/left-case-solutions';
import RightProducts from './cube-sides/right-products';
import FrontContact from './cube-sides/front-contact';
import BackProducts from './cube-sides/back-services';

import { CubeArrow } from './icons';


// assets
import EssLogo from './ess-logo';
import '../sass/desktop_nav.sass';

declare type DesktopNavProps = {
  homeUrl:string
  templateUrl: string
}

const DesktopNav: React.FC<DesktopNavProps> = ( { homeUrl, templateUrl} ) => {
  type HeaderStyle = {
    transition: string
    backgroundColor?: string
    borderBottom?: string
    backdropFilter?: string
    WebkitBackdropFilter?: string
  }

  const [loggedIn, setLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [darkOnTop, setDarkOnTop] = useState(false);

  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>({
    transition: 'all 200ms ease-in'
  })

  useEffect( ()=>{

    setLoggedIn(document.cookie.includes('wp-settings-time'));
    setDarkOnTop(document.body.classList.contains('ess-nav-on-dark'));

    const initialIsTop = window.scrollY <= 0;
    setIsTop(initialIsTop);
    setScrolled(!initialIsTop);
    setHeaderStyle({
      transition: 'all 200ms ease-in',
      backgroundColor: initialIsTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.7)',
      borderBottom: initialIsTop ? 'none' : '1px solid rgba(153,153,153,0.35)',
      backdropFilter: initialIsTop ? 'none' : 'blur(14px)',
      WebkitBackdropFilter: initialIsTop ? 'none' : 'blur(14px)'
    });

    const CSSCube = new CssCube();

    CSSCube.init();

    CSSCube.setup_cube();

    return ()=>{
      // fade out on dismount
      CSSCube.fadeOut();
    };
  }, [] );


  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;
      const nextIsTop = currPos.y >= 0;
      setIsTop(nextIsTop);
      setScrolled(!nextIsTop);
  
      const shouldBeStyle = {
        //visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        backgroundColor: `${nextIsTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.7)'}`,
        borderBottom: `${nextIsTop ? 'none': '1px solid rgba(153,153,153,0.35)'}`,
        backdropFilter: `${nextIsTop ? 'none' : 'blur(14px)'}`,
        WebkitBackdropFilter: `${nextIsTop ? 'none' : 'blur(14px)'}`
        //transform: isVisible ? 'none' : 'translate(0, -100%)'
      }
  
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
  
      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )


  return (
    <div id="wmnav-wrap">

      <div id="wmnav-bar" className={`${darkOnTop && isTop ? 'on-dark-top' : ''}`} style={{ ...headerStyle }} >

        <EssLogo homeUrl={homeUrl} templateUrl={templateUrl} inverted={darkOnTop && isTop} />

        <ul id="wmnav-list" className={`no-style ${scrolled && 'scrolled'}`}>
          <li><a className='wm-cube-menu-link text-sm' data-target='bottom'>ESS</a></li>
          <li><a className='wm-cube-menu-link text-sm' data-target='right'>Products</a></li>
          <li><a className='wm-cube-menu-link text-sm' data-target='back'>Services</a></li>
          <li><a className='wm-cube-menu-link text-sm' data-target='left'>Case Studies</a></li>
          <li><a className='wm-cube-menu-link text-sm' data-target='front'>Contact</a></li>
          <li className='flex items-center'><a href={`${homeUrl}/consult`} className='uppercase wm-button sm m-zero rounded-full text-sm has-white-color m-right-half'>Free Consultation</a></li>
        </ul>

       
        <div className='flex items-center p-right-double'>
          {/* ------- LOGIN WIP 
          <a href={`${homeUrl}/${loggedIn ? 'account' : 'login'}`} className='login-info text-sm inline-block'>{loggedIn ? 'account' : 'login'}</a>
            {
              loggedIn && <><span className='inline-block has-gray-color m-hor-half'>|</span><a className='login-info text-sm' href={`${homeUrl}/logout`}>logout</a></>
            }
          */}
        </div>
      

      </div>

      <div id="wmnav-content" style={{display: 'none'}}>
        <div id="csscube-cont">
          <div id="csscube-scene">

            {/* ---------------- ROTATE LEFT BUTTON -------------------- */}
            <button className="csscube-navbutton left-button arrow">
              <CubeArrow />
            </button>

            {/* ---------------- ROTATE RIGHT BUTTON -------------------- */}
            <button className="csscube-navbutton right-button arrow">
              <CubeArrow />
            </button>

            <div id="csscube-rotator">
              <div id="csscube">

                <FrontContact />

                <BackProducts homeUrl={homeUrl} templateUrl={templateUrl} />

                <LeftCaseSolutions />

                <RightProducts homeUrl={homeUrl} templateUrl={templateUrl} />

                <BottomAbout />

              </div>
            </div>

            <div id="csscube-shadow"></div>
          </div>

          <div id='csscube-close-button' className='close csscube-navbutton'>
            <div className='x'></div>
            <div className='x l'></div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default DesktopNav;

