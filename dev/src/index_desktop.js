/*jshint esversion: 6 */

import { mind_global } from './components/helpers';
import MindCookie from './components/mind-helpers/MindCookies';
import CessCube from './components/csscube';


window.ess_index = function () {
  mind_global();

  window.MindCookiesHandler = new MindCookie('./');

  window.$intro = null;

  window.$Cube = null;

  window.ishomepage = document.body.classList.contains('ess-homepage');


  // THE TOP BAR & THE CUBE
  // ===========================================================

  const el_cubenavholder = document.getElementById(
    'ess-cube-navigation-holder'
  );

  const navbarLinks = document.querySelectorAll('.wm-cube-menu-link');

  const CSSCube = new CessCube(el_cubenavholder, navbarLinks);

  CSSCube.init();

  CSSCube.setup_cube();
};