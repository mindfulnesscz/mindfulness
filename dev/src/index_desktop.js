/*jshint esversion: 6 */

import 'core-js/stable';
import ess_forms from './components/forms';
import EssReveals from './components/reveal';
import FooterSlider from './components/footer-sliders';
import 'materialize-css/dist/js/materialize';
import { mind_global } from './components/helpers';
import MindCookie from './components/mind-helpers/MindCookies';
import CessCube from './components/csscube';
import NavbarToggle from './components/navbar-toggle-css';


window.ess_index = function () {
  mind_global();

  window.MindCookiesHandler = new MindCookie('./');

  window.$intro = null;

  window.$Cube = null;

  window.ishomepage = document.body.classList.contains('ess-homepage');

  M.Sidenav.init(document.querySelectorAll('.sidenav'), {});

  const el_nav_button = document.getElementById('ess-menu-toggle');

  const el_sidemenu = document.getElementById('ess-side-menu');

  const el_intro = document.getElementById('ess-intro');

  const el_cubenavholder = document.getElementById(
    'ess-cube-navigation-holder'
  );

  const CSSCube = new CessCube(el_cubenavholder);

  CSSCube.init();

  CSSCube.setup_cube();

  const EssToggler = new NavbarToggle(
    el_nav_button,

    el_sidemenu,

    CSSCube,

    el_intro,

    window.ishomepage
  );

  EssToggler.init();

  activate_bottom_cube(EssToggler);

  // SAME AS IN INDEX_MOBILE NEEDS TO BE THE SAME ---------------------------------------

  // form formating

  ess_forms({});

  // Cube slider

  const home_banner = new FooterSlider(
    document.getElementById('ess-home-banner'),

    { autoplay: true, center_arrows: true }
  );

  home_banner.init();

  // Footer sliders

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

  EssReveals.activate();

  //...

  // Materialize

  const elems = document.querySelectorAll('select');

  const instances = M.FormSelect.init(elems, {});

  const collapsibles = document.querySelectorAll('.collapsible');

  const collapsibles_inst = M.Collapsible.init(collapsibles, {});

  // actives sidebar contact sticking it to side when scrolled and changes select if contact sales

  //needst to be laoded after materialize Select Object

  activate_sidebar_contact();

  // activates hover on people

  //hover_people();

  const ess_modals = document.querySelectorAll('.modal');

  const ess_modal_instances = M.Modal.init(ess_modals, {
    opacity: 0.2,
  });

  const instance = M.Tabs.init(document.querySelectorAll('.tabs'), {});

  const imgs = document.querySelectorAll('img');

  // hides empty images needs to be updated in blocks

  for (let n = 0; n < imgs.length; n++) {
    if (imgs[n].getAttribute('src') == '')
      imgs[n].style.display = 'none';
  }
};

// ---------------------------- END OF INDEX FUNCTION --------------------------------

function activate_bottom_cube(EssToggler) {
  const c = document.getElementById('bottom-cube');

  if (c) {
    c.addEventListener('click', EssToggler.cubicHandler);
  }
}

function make_cube() {
  // cube base path of resources

  let base_path = '';

  if (window.template_url)
    // generated in wordpress

    base_path = window.template_url;
  else base_path = '.';

  // links and sources

  const sources_array = [];

  sources_array.src_font = 'assets/exo_bold.json';

  sources_array.src_cube = 'assets/glbs/cube_aktuell.glb';

  sources_array.src_cube_texture = 'assets/images/cube_new.jpg';

  sources_array.src_automotive = 'assets/glbs/automotive_bb.glb';

  sources_array.src_environment = 'assets/glbs/environment_bb.glb';

  sources_array.src_oil = 'assets/glbs/oil_bb.glb';

  sources_array.src_mineral = 'assets/glbs/mineral_bb.glb';

  let url_array = [];

  url_array.automotive = './industry_automotive.html';

  url_array.environment = './industry_environment.html';

  url_array.mineral = './industry_mineral.html';

  url_array.oil = './industry_oil.html';

  url_array.whoweare = './about-us.html';

  url_array.careeropportunities = './';

  url_array.ourteam = './about-us.html#our-team';

  url_array.news = './feed_news.html';

  url_array.contactus = './';

  url_array.signinregister = './';

  url_array.onlinetrial = './';

  url_array.paintshop = './alsim_psp.html';

  url_array.merge = './alsim_merge.html';

  url_array.services = './';

  url_array.sense = './alsim_sense.html';

  url_array.press = './';

  url_array.usecases = './';

  url_array.linkedin = './';

  url_array.subscribe = './';

  url_array.twitter = './';

  url_array.facebook = './';

  url_array.events = './feed_events.html';

  // if there is defined window.ess_url_array variable filled with links from WP override the default static array of links

  if (window.ess_url_array) url_array = window.ess_url_array;

  //defines container and calls new Cube instance and returns the instance

  //Container

  let container = document.getElementById('ess-home-header');

  let main_container = ''; // main_container to blur when cube appears

  if (!container) {
    window.ishomepage = false;

    container = document.getElementById('ess-cube-navigation-holder');

    main_container = document.getElementById('ess-main-container');
  }

  // Canvas

  const canvas = document.createElement('canvas');

  canvas.classList.add('hiddendiv');

  canvas.setAttribute('id', 'ess-cube-canvas');

  container.appendChild(canvas);

  //Cube base path (url or path)

  //Cube

  const Cube = new EssCube(
    window.ishomepage,

    container,

    canvas,

    main_container
  );

  Cube.init(sources_array, url_array, base_path);

  // return

  return Cube;
}

/*** green button sidebar switched to contact link to contact page **/

function activate_sidebar_contact() {
  const el_sidebar_contact = document.getElementById('ess-side-contact');

  if (el_sidebar_contact) {
    const main_el = document.querySelector('main');

    const toggler = document.createElement('div');

    const toggler_text = document.createElement('div');

    const toggler_text_h = document.createElement('h4');

    const toggler_text_h_content = document.createTextNode(
      'GET IN TOUCH'
    );

    const toggler_text_span = document.createElement('span');

    toggler_text_span.classList.add('ess-icon', 'icon_simple_arrow_top');

    toggler.setAttribute('id', 'sidebar-contact-toggler');

    toggler_text.setAttribute('id', 'sidebar-contact-text');

    toggler_text_h.append(toggler_text_h_content);

    toggler_text.append(toggler_text_span);

    toggler_text.append(toggler_text_h);

    toggler.append(toggler_text);

    main_el.append(toggler);

    const el_sidebar_contact_toggler = toggler;

    const el_contact_sales_toggler = document.getElementById(
      'ess-contact-sales-button'
    );

    if (el_sidebar_contact_toggler || el_contact_sales_toggler) {
      window.el_header = document.getElementById('ess-header');

      window.el_sidebar_contact_toggler = el_sidebar_contact_toggler;

      window.contact_fixed = false;

      el_sidebar_contact_toggler.addEventListener('click', () => {
        location.href = window.ess_url_array.contactus;
      });
    }

    if (el_contact_sales_toggler) {
      el_contact_sales_toggler.addEventListener('click', () => {
        menu_inst.open();
      });
    }

    // side contact form guard

    stick_contact_button();
  }
}

//function for development porpose to delete cookie of played intro.

function delete_intro_cookie() {
  MindCookie.deleteCookie('intro');
}

if (window.development) delete_intro_cookie();

/* Side contact form sticky behaviour  */

function stick_contact_button() {
  const contact_button = window.el_sidebar_contact_toggler;

  const header_h = window.el_header.offsetHeight;

  const fixed_top =
    (window.vh - el_sidebar_contact_toggler.offsetHeight) / 2;

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

function hover_people() {
  const people_array = document.querySelectorAll('.ess-hover-block');

  if (people_array.length != 0) {
    console.log('people array is ' + people_array.length);

    for (const key in people_array) {
      const item = people_array[key];

      const toshow = item.querySelector('.ess-hover-toshow');

      item.addEventListener('mouseover', () => {
        toshow.style.opacity = 1;
      });

      item.addEventListener('mouseout', () => {
        toshow.style.opacity = 0;
      });
    }
  } else console.log('people_array is empty');
}
