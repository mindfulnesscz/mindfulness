/*jshint esversion: 6 */


import MindMergeDemo from './js/essmmergedemo-class';

//set the global variables object 
window.GlobalCameraObject = {
    init: true,
    posX: 0,
    posY: 0,
    posZ: 0,
    rotX: 0,
    rotY: 0,
    rotZ: 0
};

document.addEventListener("DOMContentLoaded", ()=>{
    MindMergeDemo.init();
});
