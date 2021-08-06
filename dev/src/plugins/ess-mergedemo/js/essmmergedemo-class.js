/*jshint esversion: 6 */

import MindDee from './mind-three';
import gsap from 'gsap';


export default class MindMergeDemo {
    constructor () { /* STATIC CLASS - All methods are considered private except for the public static init */ }

    static init () {

        //0. Set the properties
        this.el_app = document.querySelector('#essmergedemo');

        if(this.el_app.classList.contains('emd-alternative'))
            this.wirecolor = 'white';
        else
            this.wirecolor = 'dark';

        this.el_body = this.el_app.querySelector('#emd-body');

        if(this.el_app.classList.contains("emd-singlepage"))
            this.singlepage = true;
        else
            this.singlepage = false;

        this.el_thumb_img = this.el_app.querySelector('#emd-thumb-img');

        this.el_before = this.el_app.querySelector('#essmergedemo-geometry-col-before');
        this.el_after = this.el_app.querySelector('#essmergedemo-geometry-col-after');

        this.el_loader_before = this.el_before.querySelector('.essmergedemo-preloader-holder');
        this.el_loader_after = this.el_after.querySelector('.essmergedemo-preloader-holder');

        this.el_status = this.el_app.querySelector('.status-holder');

        this.el_button_after = this.el_after.querySelector('#essmergedemo-calculate-button');


        this.first_time = true; // boolean sets the first time select to initialize 3D Canvases on demand
        
        this.wireframe_on = true; // wireframe is natively on

        //1. Set the resize functions        
        this.resize_throtle = true; // resize handler throttling variable
        
        this.__init_wireframe_switcher();
        
        this.__resize_handler();
        this.__resize();


        //2. Set Event Listener on Select

        this.select = this.el_app.querySelector('#essmergedemo-select');
        this.select.onchange = ()=>this.__select();

        //3. Set Action to calculate button

        this.el_button_after.addEventListener( 'click', () => {
            
            this.el_button_after.style.display = 'none';
            
            this.mind_after.remove_geometry();
            
            this.mind_after.loadGeometry( this.after_url, 'wireframe' );
        });
    }

// 1. RESIZE WINDOW EVENT HANDLER
    static __resize_handler(){
        
        window.addEventListener('resize', e => {
            if (!this.resize_throtle)
                return;
            
            this.resize_throtle = false;
            this.__resize();
            setTimeout(() => this.resize_throtle = true , 300);
        
        });
    }
    static __resize () {

        let w = this.el_before.offsetWidth;
        if(!this.singlepage){
            this.el_before.style.height = w/1.618 + 'px';
            this.el_after.style.height = w/1.618 + 'px';
        }
        else {
            //this.el_before.style.height = this.el_body.offsetHeight;
            //this.el_after.style.height = this.el_body.offsetHeight;
        }
        if(this.canvas_before)
        {
            console.log(' ******************************************* canvas before is active '+this.el_before.offsetWidth);
            this.mind_before.renderer.setSize( this.el_before.offsetWidth, this.el_before.offsetHeight, false );
        }
        if(this.canvas_after){
            this.mind_after.renderer.setSize( this.el_after.offsetWidth, this.el_after.offsetHeight, false );
        }
    }

// 2. SELECT CHANGE EVENT HANDLER

    static __select(){

        let values = this.select.options[this.select.selectedIndex].value; // get the selected value
        let values_arr = this.__get_geometry_links(values);
        
        this.before_url = values_arr[0];
        this.after_url = values_arr[1];
        this.thumb = values_arr[2];

        this.el_thumb_img.setAttribute('src', this.thumb);

        // MIND THREE
        if(this.first_time){
            this.first_time = false;
            this.__generate_mind_scenes();
        }
        else if(this.mind_before){
            this.mind_before.remove_geometry();
        }

        this.__hideStatus();

        try {
            this.mind_before.loadGeometry(this.before_url, 'wireframe');
        }
        catch(err){

            this.errorFn(err);
        }
        finally {
            
        }

    }
    static __showStatus(){

        this.el_status.style.display = 'none';

    }

    static __hideStatus(){

        this.el_status.style.display = 'none';

    }
    
    static __alertStatus( icon, message ){
        this.el_status.style.display = 'block';

        let status_icon = this.el_status.querySelector( '.status-icon' );

        status_icon.className = '';
        status_icon.className = 'status-icon ess-icon '+icon;

        let status_line = this.el_status.querySelector('.status-line');
        status_line.innerHTML = message;

    }
    static errorFn(err){
        this.__alertStatus('icon_sense_heattransfer', err);
    }

    static geometryBeforeLoadedCallback(){

        console.log('GEMETRY SUCCESFULLY LOADED');

        this.mind_before.reset_camera();

        gsap.to( this.el_loader_before, { opacity: 0, duration: 0.3, onComplete: () => this.el_loader_before.style.display = 'none' } );

        this.el_button_after.style.opacity = 0;

        this.el_button_after.style.display = 'block';

        gsap.to( this.el_button_after, { opacity: 1, duration: 0.3 } );

    }
    static geometryAfterLoadedCallback(){

        console.log('GEMETRY SUCCESFULLY LOADED');

        gsap.to( this.el_loader_after, { opacity: 0, duration: 0.3, onComplete: () => this.el_loader_after.style.display = 'none' } );

    }

    static geometryFailedCallback( loader ){

        this.__showStatus();

        gsap.to( loader, {opacity: 0, duration: 0.2, onComplete: ()=>loader.style.display = 'none' });

        this.errorFn('Geometry failed loading');

        console.log('GEOMETRY FAILED LOADED');

    }

    static geometryStartLoading ( elLoader ) {

        //let elLoader = this.;
        console.log ( ' GEOMETRY STARTS LOADING ' );
        console.log ( elLoader );

        elLoader.style.opacity = 0;
        elLoader.style.display = 'block';

        gsap.to( elLoader, { opacity:1, duration: 0.3 });

    }

    static __generate_mind_scenes(){

        this.mind_before = new MindDee( this.el_before.querySelector('#three-before-holder' ), {
            
            onLoadStart: this.geometryStartLoading.bind( this, this.el_loader_before ),

            onGeometryLoaded: this.geometryBeforeLoadedCallback.bind( this ),

            onGeometryFailed: this.geometryFailedCallback.bind( this,  this.el_loader_before ),

            wirecolor: this.wirecolor,

            wireframe_on: this.wireframe_on

        });

        this.mind_after = new MindDee(this.el_after.querySelector( '#three-after-holder' ), {

            onLoadStart: this.geometryStartLoading.bind( this, this.el_loader_after ),

            onGeometryLoaded: this.geometryAfterLoadedCallback.bind( this ),

            onGeometryFailed: this.geometryFailedCallback.bind( this,  this.el_loader_after ),

            wirecolor: this.wirecolor,

            wireframe_on: this.wireframe_on

        });

        this.canvas_after = this.el_after.querySelector('canvas');
        this.canvas_before = this.el_before.querySelector('canvas');

        this.__resize();
    }

    static __get_geometry_links(str){
        
        return str.split(',');
    }

    static __init_wireframe_switcher () {

        let el_wireframe_switcher = this.el_body.querySelector('#emd-wireframe-switcher');
        if(this.wireframe_on)
            el_wireframe_switcher.classList.add('active');

        el_wireframe_switcher.addEventListener('click', ()=>{

            if(this.wireframe_on) {
                el_wireframe_switcher.classList.remove('active');
                if(this.mind_after)
                    this.mind_after.__hide_wireframe();
                if(this.mind_before)
                    this.mind_before.__hide_wireframe();
                this.wireframe_on = false;
            }
            else {
                el_wireframe_switcher.classList.add('active');
                if(this.mind_before)
                    this.mind_before.__show_wireframe();
                if(this.mind_after)
                    this.mind_after.__show_wireframe();
                this.wireframe_on = true;
            }
        });
    }
}
