
/**
 * Desktop menu navigation main component
 * @since 3.0
 */

// framework
import React, {useEffect} from 'react';

// types
import '../../../globals'; // for .svg import support in typescript

// components
import CssCube from './csscube';
import BottomAbout from './cube-sides/bottom-about';
import LeftCaseSolutions from './cube-sides/left-case-solutions';
import RightIndustries from './cube-sides/right-industries';
import FrontContact from './cube-sides/front-contact';
import BackProducts from './cube-sides/back-products';

import { CubeArrow } from './icons';


// assets
import EssLogo from './ess-logo';
import '../sass/desktop_nav.sass';

declare type DesktopNavProps = {
  homeUrl:string
  templateUrl: string
}

const DesktopNav: React.FC<DesktopNavProps> = ( { homeUrl, templateUrl} ) => {

  useEffect( ()=>{

    const CSSCube = new CssCube();

    CSSCube.init();

    CSSCube.setup_cube();

    return ()=>{
      // fade out on dismount
      CSSCube.fadeOut();
    };
  }, [] );


  return (
    <div id="wmnav-wrap">

      <div id="wmnav-bar">

        <EssLogo homeUrl={homeUrl} templateUrl={templateUrl} />

        <ul id="wmnav-list">
          <li><a className='wm-cube-menu-link' data-target='bottom'>ESS</a></li>
          <li><a className='wm-cube-menu-link' data-target='right'>Industries</a></li>
          <li><a className='wm-cube-menu-link' data-target='back'>Solutions</a></li>
          <li><a className='wm-cube-menu-link' data-target='left'>Case Solutions</a></li>
          <li><a className='wm-cube-menu-link' data-target='front'>Contact</a></li>
        </ul>

        <div id="wmnav-settings"></div>

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

                <RightIndustries />

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

