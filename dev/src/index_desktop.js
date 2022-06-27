/*jshint esversion: 6 */

import ess_forms from './components/forms';
//import EssReveals from './components/reveal';
//import FooterSlider from './components/footer-sliders';
import { mind_global } from './components/helpers';
import MindCookie from './components/mind-helpers/MindCookies';
import CessCube from './components/csscube';
//import NavbarToggle from './components/navbar-toggle-css';


window.ess_index = function () {
  mind_global();

  window.MindCookiesHandler = new MindCookie('./');

  window.$intro = null;

  window.$Cube = null;

  window.ishomepage = document.body.classList.contains('ess-homepage');

  //const el_nav_button = document.getElementById('ess-menu-toggle');

  //const el_sidemenu = document.getElementById('ess-side-menu');

  //const el_intro = document.getElementById('ess-intro');



  // THE CUBE
  // ===========================================================

  const el_cubenavholder = document.getElementById(
    'ess-cube-navigation-holder'
  );

  const CSSCube = new CessCube(el_cubenavholder);

  CSSCube.init();

  CSSCube.setup_cube();

  const navbarLinks = document.querySelectorAll('.wm-cube-menu-link');

  for (let i = 0; i < navbarLinks.length; ++i) {
    console.log(navbarLinks.length);

    navbarLinks[i].addEventListener('mouseover', e=>{
      e.preventDefault;
      CSSCube.active_link = e.target;
      CSSCube._position_cube(e.target.getAttribute('data-target'));
    });
  }



  // ===========================================================

  /* const EssToggler = new NavbarToggle(
    el_nav_button,

    el_sidemenu,

    CSSCube,

    el_intro,

    window.ishomepage
  );*/

  /*EssToggler.init();

  activate_bottom_cube(EssToggler);
  */

  // SAME AS IN INDEX_MOBILE NEEDS TO BE THE SAME ---------------------------------------

  // form formating

  ess_forms({});

  // Cube slider

  /*const home_banner = new FooterSlider(
    document.getElementById('ess-home-banner'),

    { autoplay: true, center_arrows: true }
  );

  home_banner.init();

  */

  // Footer sliders
  /*
  const news_footer_slider = new FooterSlider(
    document.getElementById('ess-news-slider'),

    {}
  );

  news_footer_slider.init();

  const events_footer_slider = new FooterSlider(
    document.getElementById('ess-events-slider'),

    {}
  );

  events_footer_slider.init();

  //EssReveals.activate();

  //...

  // Materialize

  */





  // actives sidebar contact sticking it to side when scrolled and changes select if contact sales

  // needst to be laoded after materialize Select Object

  // activate_sidebar_contact();

  // activates hover on people

  // hover_people();


  const imgs = document.querySelectorAll('img');

  // hides empty images needs to be updated in blocks

  for (let n = 0; n < imgs.length; n++) {
    if (imgs[n].getAttribute('src') == '')
      imgs[n].style.display = 'none';
  }
};

// ---------------------------- END OF INDEX FUNCTION --------------------------------

/*
function activate_bottom_cube(EssToggler) {
  const c = document.getElementById('bottom-cube');

  if (c) {
    c.addEventListener('click', EssToggler.cubicHandler);
  }
}
*/


//function for development porpose to delete cookie of played intro.

function delete_intro_cookie() {
  MindCookie.deleteCookie('intro');
}

if (window.development) delete_intro_cookie();




/* Side contact form sticky behaviour  */
/*
function stick_contact_button() {
  const contact_button = window.el_sidebar_contact_toggler;

  const header_h = window.el_header.offsetHeight;

  const fixed_top = 0;

  if (header_h > fixed_top) {
    if (
      window.sc >= header_h - fixed_top &&
      window.contact_fixed == false
    ) {
      contact_button.classList.add('contact-fixed');

      contact_button.style.top = fixed_top + 'px';

      window.contact_fixed = true;
    } else if (
      window.sc <= header_h - fixed_top &&
      window.contact_fixed == true
    ) {
      contact_button.classList.remove('contact-fixed');

      contact_button.style.top = '0px';

      window.contact_fixed = false;
    }

    requestAnimationFrame(stick_contact_button);
  }

  //if header is shorter than half of screnn
  else {
    console.log('header short ');

    contact_button.classList.add('contact-fixed');

    contact_button.style.top = fixed_top + 'px';

    window.contact_fixed = true;
  }
}
*/
