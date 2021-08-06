/*jshint esversion: 6 */
//import TweenLite from "gsap/TweenLite";
import 'materialize-css/dist/js/materialize';
//import * as ScrollToPlugin from "gsap/ScrollToPlugin";
import MindCookies from './mind-helpers/MindCookies';
import gsap from "gsap";

export default class NavbarToggle {
    constructor(el_nav_button, el_sidemenu, inst_Cube, intro, ishomepage) {
        //window.ScrollToPlugin = ScrollToPlugin;
        this.toggle = el_nav_button;
        this.main_container = window;
        this.el_sidemenu = el_sidemenu;
        this.el_canvas = inst_Cube.el_canvas;
        this.inst_Cube = inst_Cube;
        this.intro = intro;

        this.ishomepage = ishomepage;


        // HIDES NAV_BUTTON WHEN ON TOP OF HOMEPAGE
        if (this.toggle instanceof HTMLElement == false)
            throw 'navbar id not found';


        this.show_classic_menu = function () {
            this.m_navbar.open();
        };
        this.show_cubic_menu = function () {
            if (this.ishomepage) {
                console.log('before the tweenlite');
                gsap.to(this.main_container, 0.5, {
                    scrollTo: 0
                });
            } else {
                this.inst_Cube.fadein();
            }
        };
        this.show_on_scroll_down = function () {
                if (window.scrollY > 0 && !this.onstage) {
                    console.log('revealing');
                    this.toggle.classList.remove('ess-hidden');
                    this.onstage = true;
                    this.toggle.style.left = '0px';
                }
                else if (window.scrollY == 0 && this.onstage) {
                    console.log('hidding');
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
            console.log(this.intro);
            gsap.to(this.intro, 1, {
                opacity: 0,
                onComplete: () => {

                    this.intro.classList.add('ess-hidden');
                    console.log(this);
                    this.el_canvas.style.display = 'block';
                    this.el_canvas.setAttribute('class', 'on-stage');
                    this.init_cubic_menu(true);
                    MindCookies.setCookie('intro', 'viewed', 1000 * 60 * 60);
                }
            });
        }, 3000);
    }
    init() {
        if (this.ishomepage)
            this.init_on_homepage();
        else
            this.init_on_page();

    }
    init_on_homepage() {
        this.init_type_toggle();
        let intro = MindCookies.getCookie('intro');
        console.log('INTRO JE ' + intro);

        if (this.menu_type != "classic") {
            if (intro != 'viewed')
                this.call_cube_intro();
            else
                this.init_cubic_menu();
        } else
            this.init_classic_menu();

    }
    init_on_page() {
        this.el_cube_holder = document.getElementById('ess-cube-navigation-holder');
        this.init_type_toggle();
        if (this.menu_type != "classic")
            this.init_cubic_menu();
        else
            this.init_classic_menu();

    }
    init_type_toggle() {
        this.menu_type = MindCookies.getCookie('type_toggle');
        if (this.menu_type == "")
            this.menu_type = "cubic";

        this.el_type_toggle = document.getElementById('ess-menu-type-toggle');
        this.el_type_toggle_text_el = this.el_type_toggle.getElementsByTagName('span')[0];

        this.el_type_toggle.addEventListener('click', this.set_type_toggle.bind(this));
    }
    set_type_toggle() {
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
        this.menu_type = 'classic';
        window.ess_cube_transitioning = true;

        this.toggle.classList.remove('ess-hidden');
        this.toggle.style.left = '0px';
        MindCookies.setCookie('type_toggle', 'classic', (1000 * 60 * 60));
        this.el_type_toggle_text_el.innerHTML = 'cubic menu';
        this.toggle.classList.remove('cubic');

        this.m_navbar = M.Sidenav.getInstance(this.el_sidemenu);

        if (this.ishomepage) {
            this.inst_Cube.outro(() => {
                this.intro.style.display = 'block';
                this.intro.classList.remove('ess-hidden');
                gsap.to(this.intro, 1, {
                    opacity: 1
                });
            });
            window.removeEventListener('scroll', this.show_on_scroll_handler);

        } else {
            window.ess_cube_transitioning = false;
            this.inst_Cube.fadeout();
            // OSTATNÍ STRÁNKY
        }
        this.toggle.classList.remove('ess-hidden');

        this.toggle.removeEventListener('click', this.cubicHandler);
        this.toggle.addEventListener('click', this.classicHandler);

    }
    init_cubic_menu(first) {
        this.menu_type = 'cubic';
        window.ess_cube_transitioning = true;



        MindCookies.setCookie('type_toggle', 'cubic', (1000 * 60 * 60));
        this.el_type_toggle_text_el.innerHTML = 'classic menu';
        this.toggle.classList.add('cubic');
        if (this.ishomepage) {
            if (!first) {
                this.intro.style.display = 'none';
                this.inst_Cube.fadein();
            } else
                this.inst_Cube.intro();
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