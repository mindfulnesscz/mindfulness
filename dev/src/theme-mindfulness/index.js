/*jshint esversion: 6 */

window.development = false;

let src_desktop = "index_desktop.js";
let src_mobile = "index_mobile.js";

let index_src = "";
if(!window.template_url){
    //window.template_url = 'http://localhost/ess-static';
    window.template_url = '';
}
if(!window.mindfulness_version){
    window.mindfulness_version = '0';
}


window.ismobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    window.ismobile = true;
if (window.innerWidth < 761)
    window.ismobile = true;
if(/*@cc_on!@*/false || !!document.documentMode)
    window.ismobile = true;


document.addEventListener("DOMContentLoaded", () => {

    // setting the source javascript file for according device
    if (window.ismobile)
        index_src = src_mobile;
    else
        index_src = src_desktop;        

    
    // getting the correct script for mobile/desktop

    let script = document.createElement('script');
    let att = document.createAttribute("type");      
    att.value = "text/javascript";                          
    script.setAttributeNode(att); 
    script.onload = function () {
        window.ess_index();
    };
    script.src = window.template_url+'/'+index_src+'?ver='+window.mindfulness_version;
    document.head.appendChild(script);

   
});
