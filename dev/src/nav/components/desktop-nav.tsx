
/**
 * Desktop menu navigation main component
 * @since 3.0
 */

// framework
import React from 'react';

// types
import '../../../globals'; // for .svg import support in typescript

// components
import BottomAbout from './cube-sides/bottom-about.tsx';
import LeftCaseSolutions from './cube-sides/left-case-solutions';
import RightIndustries from './cube-sides/right-industries.tsx';
import FrontContact from './cube-sides/front-contact';
import BackProducts from './cube-sides/back-products.tsx';

// assets
//import EssLogo from '../../assets/images/ess_logo.svg';
import '../sass/desktop_nav.sass';

declare type DesktopNavProps = {
  homeUrl:string
}

const DesktopNav: React.FC<DesktopNavProps> = ( { homeUrl} ) => {

  console.log( homeUrl );


  return (

    <div id="csscube-cont">
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

            <BackProducts />

            <LeftCaseSolutions />

            <RightIndustries />

            <BottomAbout />

          </div>
        </div>

        <div id="csscube-shadow"></div>
      </div>
    </div>

  );
};

export default DesktopNav;

