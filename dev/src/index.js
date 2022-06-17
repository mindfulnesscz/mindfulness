/*jshint esversion: 6 */

window.development = true;

const src_desktop = '/assets/js/index_desktop.js';
const src_mobile = '/assets/js/index_mobile.js';

const EL_HTML = document.querySelector('html');
let index_src = '';

if (!window.template_url) {
  window.template_url = '';
}
if (!window.mindfulness_version) {
  window.mindfulness_version = '0';
}

//  CHECKS THE MOBILE VERSUS DESKTOP VERSION 

window.ismobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
  window.ismobile = true;

if (window.innerWidth < 761)

  window.ismobile = true;
if (/*@cc_on!@*/false || !!document.documentMode)
  window.ismobile = true;


if (window.ismobile)
  EL_HTML.classList.add('ess-device');
else
  EL_HTML.classList.add('ess-desktop');



// MAIN SCRIPT INITIALIZER AFTER DOM CONTENT IS LOADED


document.addEventListener('DOMContentLoaded', () => {

  // setting the source javascript file for according device
  if (window.ismobile)
    index_src = src_mobile;
  else
    index_src = src_desktop;


  // getting the correct script for mobile/desktop

  let script = document.createElement('script');
  let att = document.createAttribute('type');
  att.value = 'text/javascript';
  script.setAttributeNode(att);

  script.onload = () => {
    window.ess_index();
  };

  script.src = window.template_url + '/' + index_src + '?ver=' + window.mindfulness_version;
  document.head.appendChild(script);

  console.log('template url is: ' + window.template_url );
  console.log('version is '+window.mindfulness_version);


});

