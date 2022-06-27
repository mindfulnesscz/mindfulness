/*jshint esversion: 6 */


import MindCookies from './mind-helpers/MindCookies';

import FooterSlider from './footer-sliders';


gsap.registerPlugin(ScrollToPlugin);


/*


 *   DESCRIPTION

 *   -----------------------

 *   Class responsible for handling the Cube and Classic menu within the whole Website

 *   1/ Sets the functionality of Homepage/Other pages Cube

 *   2/ Handles the switch between classic and cubic menu types

 *   3/ Calls intro(), fadeIn() and fadeOut() and outro() from Cube instance when needed

 *

 *   PARAMS

 *   -----------------------

 *   @el_nav_button..................Dom Element - on which there's been click action binded

 *   @el_sidemenu....................Dom Element - which is the Materialize element for displaying sidebar.

 *   @inst_Cube......................CessCube Instance - with all the good stuff

 *   @intro..........................No clue

 *   @ishomepage.....................boolean - whether the page is homepage, declared from within Wordpress

 */


export default class NavbarToggleCss {

  constructor(el_nav_button, el_sidemenu, inst_Cube, intro, ishomepage) {

    console.log(ishomepage + ' is homepage');


    this.toggle = el_nav_button;


    this.main_container = window;


    this.el_sidemenu = el_sidemenu;


    this.el_canvas = inst_Cube.el_canvas;


    this.inst_Cube = inst_Cube;


    this.intro = intro;


    this.ishomepage = ishomepage;


    if (this.toggle instanceof HTMLElement == false)

      throw 'navbar id not found';


    // Functions for pop up the corresponding classic or cubic menus


    this.show_classic_menu = function () {

      this.m_navbar.open();

    };


    this.show_cubic_menu = function () {

      if (this.ishomepage) {


        gsap.to(window, { duration: 0.5, scrollTo: 0 });

      } else {

        this.toggle.classList.add('opacity-o');


        const tiny = document.querySelector('.ess-tiny-header');


        if (tiny)

          tiny.querySelector('h1').classList.add('opacity-o');


        this.inst_Cube.fadeIn();

      }

    };


    // show_on_scroll_down

    // Function for the homepage for displaying navbar button when scrolled down


    this.show_on_scroll_down = function () {

      if (window.scrollY > 0 && !this.onstage) {

        this.toggle.classList.remove('ess-hidden');


        this.onstage = true;


        this.toggle.style.left = '0px';

      } else if (window.scrollY == 0 && this.onstage) {

        this.onstage = false;


        this.toggle.style.left = '-200px';

      }

    };


    this.show_on_scroll_handler = this.show_on_scroll_down.bind(this);


    this.classicHandler = this.show_classic_menu.bind(this);


    this.cubicHandler = this.show_cubic_menu.bind(this);

  }


  call_cube_intro() {

    setTimeout(() => {

      gsap.to(this.intro, {

        duration: 1,


        opacity: 0,


        onComplete: () => {

          this.intro.classList.add('ess-hidden');

          this.el_canvas.style.display = 'flex';


          this.el_canvas.setAttribute('class', 'on-stage');


          this.init_cubic_menu(true);


          if (!window.development)

            MindCookies.setCookie('intro', 'viewed', 1000 * 60 * 720);

        },

      });

    }, 3000);

  }


  init() {

    if (this.ishomepage) this.init_on_homepage();

    else this.init_on_page();

  }

  init_on_homepage() {


    const intro = MindCookies.getCookie('intro');


    console.log('INTRO JE ' + intro);


    if (this.menu_type != 'classic') {

      const navigation_holder = document.getElementById(

        'ess-cube-navigation-holder'

      );


      navigation_holder.style.position = 'absolute';

      navigation_holder.style.zIndex = 99;


      if (intro != 'viewed') this.call_cube_intro();

      else {

        this.init_cubic_menu();


        //this.call_cube_intro();

      }

    } else this.init_classic_menu();

  }

  init_on_page() {

    this.el_cube_holder = document.getElementById(

      'ess-cube-navigation-holder'

    );

    if (this.menu_type != 'classic') this.init_cubic_menu();

    else this.init_classic_menu();

  }

  // triggers at the top right nav icon with text


  // distinguishes between menu types based on interaction and cookies




  set_type_toggle() {

    console.log('jjjjjjjjjjjjj' + window.ess_cube_transitioning);


    if (!window.ess_cube_transitioning) {

      switch (this.menu_type) {

      case 'classic':

        this.init_cubic_menu();


        break;


      case 'cubic':
        this.init_classic_menu();


        break;


      default:

        break;

      }

    }

  }


  init_classic_menu() {

    const hb = document.querySelector('#homepage-banner');


    if (hb) {

      hb.style.display = 'block';


      if (!window.homepage_banner) {

        window.homepage_banner = new FooterSlider(

          document.getElementById('ess-home-banner-classic'),

          { autoplay: true, center_arrows: true }

        );


        window.homepage_banner.init();

      }

    }


    this.menu_type = 'classic';

    window.ess_cube_transitioning = true;


    this.toggle.classList.remove('ess-hidden');

    this.toggle.style.left = '0px';


    MindCookies.setCookie('type_toggle', 'classic', 1000 * 60 * 600);


    this.el_type_toggle_text_el.innerHTML = 'cubic menu';


    this.toggle.classList.remove('cubic');


    // eslint-disable-next-line no-undef
    this.m_navbar = M.Sidenav.getInstance(this.el_sidemenu);


    if (this.ishomepage) {

      this.inst_Cube.outro(() => {

        this.intro.style.display = 'block';


        this.intro.classList.remove('ess-hidden');


        gsap.to(this.intro, {

          duration: 1,


          opacity: 1,

        });

      });


      window.removeEventListener('scroll', this.show_on_scroll_handler);

    } else {

      window.ess_cube_transitioning = false;


      this.inst_Cube.fadeOut();


      // OSTATNÍ STRÁNKY

    }


    this.toggle.classList.remove('ess-hidden');


    this.toggle.removeEventListener('click', this.cubicHandler);

    this.toggle.addEventListener('click', this.classicHandler);

  }

  init_cubic_menu(first) {

    const hb = document.querySelector('#homepage-banner');


    if (hb) hb.style.display = 'none';


    this.menu_type = 'cubic';

    window.ess_cube_transitioning = true;


    MindCookies.setCookie('type_toggle', 'cubic', 1000 * 60 * 720);

    if (this.ishomepage) {

      if (!first) {

        this.intro.style.display = 'none';


        this.inst_Cube.fadeIn();

      } else this.inst_Cube.intro();


      if (window.scrollY == 0) {

        this.toggle.style.left = '-200px';

      } else {

        this.toggle.classList.remove('ess-hidden');


        this.toggle.style.left = '0px';

      }


      window.addEventListener('scroll', this.show_on_scroll_handler);

    } else {

      this.toggle.classList.remove('ess-hidden');


      window.ess_cube_transitioning = false;

    }


    this.toggle.removeEventListener('click', this.classicHandler);


    this.toggle.addEventListener('click', this.cubicHandler);

  }

}

