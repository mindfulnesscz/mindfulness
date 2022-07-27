
/**
 * Desktop menu navigation main component
 * @since 3.0
 */

// framework
import React, {useEffect} from 'react';

// types
import '../../../globals'; // for .svg import support in typescript

// components
import CessCube from './csscube';
import BottomAbout from './cube-sides/bottom-about';
import LeftCaseSolutions from './cube-sides/left-case-solutions';
import RightIndustries from './cube-sides/right-industries';
import FrontContact from './cube-sides/front-contact';
import BackProducts from './cube-sides/back-products';

// assets
//import EssLogo from '../../assets/images/ess_logo.svg';
import '../sass/desktop_nav.sass';

declare type DesktopNavProps = {
  homeUrl:string
  templateUrl: string
}

const DesktopNav: React.FC<DesktopNavProps> = ( { homeUrl, templateUrl} ) => {

  useEffect( ()=>{
    console.log( 'ahoj' );

    const CSSCube = new CessCube();

    CSSCube.init();

    CSSCube.setup_cube();
  }, [] );

  return (
    <div id="ess-cube-navigation-holder">
      <div id="csscube-cont">
        <div className="wm-cube-menu-link">
          <ul>
            <li data-target='bottom'>ESS</li>
            <li data-target='bottom'>Solutions</li>
            <li data-target='bottom'>Industries</li>
            <li data-target='bottom'>Contact</li>
          </ul>
        </div>
        <div id="csscube-scene">

          {/* ---------------- ROTATE LEFT BUTTON -------------------- */}
          <button className="csscube-navbutton left-button">
            <span className="ess-icon color-primary big-icon icon_simple_arrow_left"></span>
          </button>
          {/* ---------------- ROTATE RIGHT BUTTON -------------------- */}
          <button className="csscube-navbutton right-button">
            <span className="ess-icon color-primary big-icon icon_simple_arrow_right"></span>
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
      </div>
    </div>

  );
};

export default DesktopNav;

