/*jshint esversion: 6 */

import EssReveals from './components/reveal';
import FooterSlider from './components/footer-sliders';
import ess_forms from './components/forms';
import 'materialize-css/dist/js/materialize';
import { mind_global } from './components/helpers';
import MindCookie from './components/mind-helpers/MindCookies';

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

  //----------------------- END OF SAME CONTENT  ----------------------------------


  let el_toggle = document.getElementById('ess-menu-toggle');

    
    
  let hb = document.querySelector('#homepage-banner');
  if(hb)
    hb.style.display = 'block';

  window.homepage_banner = new FooterSlider(document.getElementById('ess-home-banner-classic'), {autoplay: true, center_arrows: true}); 
  window.homepage_banner.init();

  el_toggle.classList.remove( 'ess-hidden');
 

};


