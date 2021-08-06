/*jshint esversion: 6 */

import EssReveals from "./js/reveal";
import FooterSlider from "./js/footer-sliders";
import ess_forms from './js/forms';
import 'materialize-css/dist/js/materialize';
import { mind_global } from './js/helpers';
import MindCookie from './js/mind-helpers/MindCookies';

mind_global();
window.MindCookiesHandler = new MindCookie('./');

window.ismobile = true;

window.ess_index = function () {

    let imgs = document.querySelectorAll('img');
    for(let i = 0; i<imgs.length; i++ ){
        let img = imgs[i];
        if(img.getAttribute('src') == '')
            img.parentNode.removeChild(img);
            console.log('removing');
    }
   
    //----------------------- SAME IN INDEX_DESKTOP ----------------------------------

    mind_global();
    window.MindCookiesHandler = new MindCookie('./');
 
    // form formating
    ess_forms({});


    // Footer sliders

    let news_footer_slider = new FooterSlider(document.getElementById('ess-news-slider'), {});
    news_footer_slider.init();

    let events_footer_slider = new FooterSlider(document.getElementById('ess-events-slider'), {});
    events_footer_slider.init();


    EssReveals.activate();

    // Materialize

      
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

    var collapsibles = document.querySelectorAll('.collapsible');
    var collapsibles_inst = M.Collapsible.init(collapsibles, {});
    var instance = M.Tabs.init(document.querySelectorAll('.tabs'), {});



    //----------------------- END OF SAME CONTENT  ----------------------------------


    let ess_sidenav = document.getElementById('ess-side-menu');
    let el_toggle = document.getElementById('ess-menu-toggle');

    this.M.Sidenav.init(ess_sidenav, {}); 
    
    let menu_inst = M.Sidenav.getInstance(ess_sidenav);
    
    let hb = document.querySelector('#homepage-banner');
        if(hb)
            hb.style.display = 'block';

    window.homepage_banner = new FooterSlider(document.getElementById('ess-home-banner-classic'), {autoplay: true, center_arrows: true}); 
    window.homepage_banner.init();

    el_toggle.classList.remove( 'ess-hidden');
    el_toggle.addEventListener( 'click', ()=>{
        menu_inst.open();
    });


}


