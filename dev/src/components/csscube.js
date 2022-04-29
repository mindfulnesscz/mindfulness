
/*jshint esversion: 6 */

//import gsap from "gsap/TweenMax";

import gsap from "gsap";


export default class CessCube {
    constructor(el_canvas){

        this.toplinks_arr = [];
        this.initial_rotation = 10;

        this.el_canvas  = el_canvas;
        this.el_cont    = el_canvas.querySelector('#csscube-cont');
        
        this.tweeen = "power2.out";
        this.tween_length = 0.8;
        this.isonscreen = false;    // wether the cube is already initated and rendered
        this.unit_space_ratio = 5;  // 1/x of unit to calculate the space between sides of the cube
        this.units_total = 19;      // total amount of units
        this.units_space = 2;       // no clue
        this.units_cube = 12;       // total amount of CUBE units
        this.units_cube_w = 12;     // number of units in horizontal direction
        this.units_cube_h = 15;     // number of units in vertical direction. The number is a bit higher than horizontal because of the headlines on top of each side
        this.units_space = ( this.units_total - this.units_cube ) / 2; // space for margin

        //array of coord system within cube (max ) 30
        this.names_array = [
            'o','i','ii','iii','iv','v','vi','vii','viii','ix','x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi', 'xvii', 'xviii', 'xix', 'xx', 'xxi', 'xxii', 'xxiii', 'xxiv', 'xxv', 'xxvi', 'xxvii', 'xxviii', 'xxix', 'xxx'
        ];
        
        //create a new Style Sheet
        this.Cube_Style_Sheet = document.createElement('style');
        document.body.appendChild(this.Cube_Style_Sheet);

        this._y = 0;
        this._x = 0;
        
    }
    init(){


        /*
                                  -= CUBE STRUCTURE =-               
        
        |- #csscube-cont........................Wrapper to show up and fade out
        |   - #csscube-scene....................Container in which the cube is drawn
        |       - #csscube-rotator..............Support object for perspective and such
        |           - #csscube..................Main object amongst which most of the actions take place.
        |               - #csscube-front
        |               - #csscube-right
        |               - #csscube-back
        |               - #csscube-left
        */
        
        this.tl = gsap.timeline({});       
        this.main_container     = document.getElementById('ess-main-container'); // container of the entire content except the cube - used for blur

        this.el_cubescene       = this.el_cont.querySelector('#csscube-scene');
        this.cube_rotator_el    = this.el_cubescene.querySelector('#csscube-rotator');
        this.cube_el            = this.cube_rotator_el.querySelector('#csscube');
        this.cube_shadow_el     = this.el_cubescene.querySelector('#csscube-shadow');
        console.log('items are');
        console.log(this.el_cubescene);
        console.log(this.cube_el);
        console.log(this.cube_rotator_el);
        
        this.front_side_el  = this.cube_el.querySelector('#csscube-front');
        this.right_side_el  = this.cube_el.querySelector('#csscube-right');
        this.back_side_el   = this.cube_el.querySelector('#csscube-back');
        this.left_side_el   = this.cube_el.querySelector('#csscube-left');
        this.bottom_side_el = this.cube_el.querySelector('#csscube-bottom');

        this.front_side_el.style.opacity = '0.1';
        this.right_side_el.style.opacity = '0.1';
        this.left_side_el.style.opacity = '0.1';
        this.back_side_el.style.opacity = '0.1';

        this.r_b = this.el_cubescene.querySelector('.right-button');
        this.l_b = this.el_cubescene.querySelector('.left-button');
        //this.x_b = document.getElementById('x-button');

        this.elCanvasClickable();

        window.addEventListener('resize', this.setup_cube.bind(this), true);

        this.r_b.addEventListener('click', ()=>{
            this._rotate_right();
        });
        this.l_b.addEventListener('click', ()=>{
            this._rotate_left();
        });
        /*this.x_b.addEventListener('click', ()=>{
            console.log(this._x, this._y);
        })*/

        this.r_b.addEventListener('mouseover', ()=>{this.still = true;});
        this.r_b.addEventListener('mouseleave', ()=>{this.still = false;});
        this.l_b.addEventListener('mouseover', ()=>{this.still = true;});
        this.l_b.addEventListener('mouseleave', ()=>{this.still = false;});

        this.cube_el.addEventListener('mouseover', ()=>{this.still = true;});
        this.cube_el.addEventListener('mouseleave', ()=>{this.still= false;});

        
        if(!this.cube_el)
            throw ('cube_element not found');  
        else
            this.move_the_cube();

        this.init_topnav();

        this.init_subscribe_modal();
    }


    // Sets the sizes of the cube and its content can run during resize event as well
    setup_cube(){

        let unit_w = 40; // 40 - initial value is about to change soon
        let unit_h = 40; 
        let ww = this.el_canvas.clientWidth;  // three quarters of the window to draw the cube
        let wh = this.el_canvas.clientHeight;

        let BigHeader = '';
        let SmHeader = '';
        let TinyHeader = '';
        let SmallestHeader = '';
        

        let ratio = ww / wh;
        
        // if is landscape one unit is calculated from height otherwise unit height is taken from width of the screen
        if(ratio >= 1 ) {   // IS LANDSCAPE
            ww = ww * 0.6; wh = wh * 0.6;
            if(wh > 900)
                wh=900;
            unit_w = (wh/this.units_cube_w); 
            unit_h = (wh/this.units_cube_h); 
            /*BigHeader = ' 6vh !important;';
            SmHeader = ' 2.6vh !important;';
            TinyHeader = ' 1.8vh !important;';*/
            BigHeader = ' '+unit_w/1.4+'px !important;';
            SmHeader = ' '+unit_w/2.4+'px !important;';
            TinyHeader = ' '+unit_w/3+'px !important;';
            SmallestHeader = ' '+unit_w/4+'px !important;';
            
        }
        else {              // IS PORTRAIT
            ww *= 0.85; wh *= 0.85; 
            if(vw > 500)
                vw=500;
            unit_w = (ww/this.units_cube_w); 
            unit_h = (ww/this.units_cube_h); 
            BigHeader = ' 8vw !important; ';
            SmHeader = ' 4vw !important; ';
            TinyHeader = ' 1.6vw !important;';
            SmallestHeader = '1vw !important;';

        }
        
        
        // reset the sheet

        this.cube_width     = (this.units_cube_w*unit_w);
        this.cube_height    = (this.units_cube_h*unit_h);
        this.cube_w_shift   = this.cube_width/2; // + maybe unit/this.unit_space_ratio for gap between sides;
        this.cube_h_shift   = this.cube_height/2;


        /*console.log('cube width is '+ this.cube_width);
        console.log('cube height is '+ this.cube_height);
        console.log('cube width shift '+ this.cube_w_shift);
        console.log('cube height shift '+ this.cube_h_shift);*/
        console.log('cube top is ');
        console.log(this.el_canvas.clientHeight + ', '+this.cube_height);

        //this.Cube_Style_Sheet.innerHTML = "#csscube-nav ul li a {font-size: "+TinyHeader+";}";  
        this.Cube_Style_Sheet.innerHTML += "#csscube-scene #csscube h1 {font-size: "+BigHeader+" } ";
        this.Cube_Style_Sheet.innerHTML += "#csscube-scene #csscube h2 {font-size: "+SmHeader+" } ";
        this.Cube_Style_Sheet.innerHTML += "#csscube-scene #csscube h3 {font-size: "+TinyHeader+" } ";
        this.Cube_Style_Sheet.innerHTML += "#csscube-scene #csscube h4 {font-size: "+SmallestHeader+" } ";
        this.Cube_Style_Sheet.innerHTML += "#csscube-scene{position: relative; top: "+(this.el_canvas.clientHeight-this.cube_height)/2+"px; width:"+this.cube_width+"px; height:"+this.cube_height+"px; perspective: "+this.cube_width*5+"px;}";
        this.Cube_Style_Sheet.innerHTML += "#csscube-rotator{top: "+this.cube_height/2+"px;}";
        this.Cube_Style_Sheet.innerHTML += "#csscube{top: -"+this.cube_height/2+"px;}";

        this.Cube_Style_Sheet.innerHTML += "#csscube-front  {width:"+this.cube_width+"px; height:"+this.cube_height+"px; transform: translateZ("+this.cube_w_shift+"px);}";
        this.Cube_Style_Sheet.innerHTML += "#csscube-left   {width:"+this.cube_width+"px; height:"+this.cube_height+"px; transform: rotateY(-90deg) translateZ("+this.cube_w_shift+"px);}";
        this.Cube_Style_Sheet.innerHTML += "#csscube-right  {width:"+this.cube_width+"px; height:"+this.cube_height+"px; transform: rotateY(90deg) translateZ("+this.cube_w_shift+"px);}";
        this.Cube_Style_Sheet.innerHTML += "#csscube-back   {width:"+this.cube_width+"px; height:"+this.cube_height+"px; transform: rotateY(-180deg) translateZ("+this.cube_w_shift+"px);}";
        this.Cube_Style_Sheet.innerHTML += "#csscube-top    {width:"+this.cube_width+"px; height:"+this.cube_height+"px; transform: rotateX(90deg) translateZ("+this.cube_h_shift+"px);}";
        this.Cube_Style_Sheet.innerHTML += "#csscube-bottom {width:"+this.cube_width+"px; height:"+this.cube_height+"px; transform: rotateX(-90deg) translateZ("+this.cube_h_shift+"px);}";

        this.Cube_Style_Sheet.innerHTML += "#csscube-shadow {width:"+(this.cube_width)+"px; height:"+(this.cube_height)+"px; transform: rotateX(-85deg) translateZ("+(this.cube_h_shift*1.2)+"px) ;}";

        for (let i = 0; i<this.units_cube_h; i++){
            this.Cube_Style_Sheet.innerHTML +=".x_"+this.names_array[i]+"{left:"+unit_w*i+"px;}";
            this.Cube_Style_Sheet.innerHTML +=".y_"+this.names_array[i]+"{top:"+unit_h*i+"px;}";
            this.Cube_Style_Sheet.innerHTML +=".w_"+this.names_array[i]+"{width:"+(unit_w*i)+"px;}";
            this.Cube_Style_Sheet.innerHTML +=".h_"+this.names_array[i]+"{height:"+(unit_h*i)+"px;}";
            
            //console.log(".h_"+this.names_array[i]+"{height:"+(unit_w)*(1+i)+"px;}");
        }

        if(!this.isonscreen){
            this._x = 90;
            gsap.to(document.getElementById('csscube-scene'), { duration: 0.5, opacity: 1});
            this.isonscreen = true;        }
        
    }
    _rotate_right(){  // ROTATING LEFT SHOWING RIGHT SIDE OF THE CUBE
        let new_y = 0;
        let new_x = 0;

        if(this._y == 0)
            this._y = 359.99;

        if( this._y < 360 && this._y > 270 ){ 
            if(this._x > 0+this.initial_rotation){                        // bottom side towards RIGHT
                this._position_cube('right');
            }
            else {                                  // Front  side towards BOTTOM
                this._position_cube('bottom');
            } 
        }
        else if( this._y <= 90 || this._y > 360 ){  // Left   side towards FRONT
            this._position_cube('front');
        }
        else if( this._y <= 180 ){                  // back   side towards LEFT
            this._position_cube('left');
        }
        else if( this._y <= 270 ) {                 // right  side towards BACK
            this._position_cube('back');
        }
    }

    _position_cube(str_target){
        let el;
        let new_x;
        let new_y;
        console.log(str_target);
        this.active_link.classList.remove('active');
        this.toplinks_arr[str_target].classList.add('active');
        this.active_link = this.toplinks_arr[str_target];

        switch(str_target){
            case 'bottom':
                if(this._y > 180 )
                    this._y = this._y -359.99;
                new_x = 90;
                new_y = 0;
                el = this.bottom_side_el;
                break;
            case 'front':
                if(this._y > 180 )
                    this._y = this._y -359.99;
                new_x = 0;
                new_y = 0;
                el = this.front_side_el;
                break;
            case 'right':
                if(this._y >= -180 && this._y < 90)
                    this._y = this._y + 359.99;
                new_x = 0;
                new_y = 270;
                el = this.right_side_el;
                break;
            case 'left':
                if(this._y > 270)
                    this._y = this._y + 359.99;
                new_x = 0;
                new_y = 90;
                el = this.left_side_el;
                break;
            case 'back':
                if(this._y >= 360)
                    this._y = this._y -359.99;
                new_x = 0;
                new_y = 180;
                el = this.back_side_el;
                break;
            default:
                new_x = 90;
                new_y = 0;
                el = this.bottom_side_el;
        }
        if(this.active_el != el){
            this.leaving_el = this.active_el;
            this.arriving_el = el;

            new_x +=this.initial_rotation;

            gsap.to(this.leaving_el, { duration: this.tween_length, ease: this.tweeen,opacity: 0.1});
            gsap.to(this.arriving_el, {
                duration: this.tween_length,
                ease: this.tweeen, 
                opacity: 1,
                onComplete: ()=>{
                    
                }
            });
            this.active_el = this.arriving_el;
            console.log('y je '+this._y+ ' new y je'+new_y);

            if(this.g)
                this.g.pause();
            this.g = gsap.to( this, { duration: this.tween_length, ease: this.tweeen, _y:new_y, _x:new_x, onUpdate:()=>{
                //gsap.set(this.cube_el, {rotateY: this._y});
                //gsap.set(this.cube_rotator_el, {rotateX: this._x});
                this.cube_el.style.transform = ' rotatey('+this._y+'deg)';
                this.cube_rotator_el.style.transform = ' rotatex('+this._x+'deg)';
                this.cube_shadow_el.style.transform = ' rotatex(-85deg) rotatez('+this._y+'deg) translatez('+(this.cube_h_shift*1.4)+'px)';

            }});
        }
        else
            console.log('nothing to tween');

    }

    _rotate_left(){
        let new_y = 0;
        let new_x = 0;
        /*if(this._y == 0)
        this._y = 359.99;*/

        if( this._y >=0 && this._y < 90 ){ 
            if(this._x > 0+this.initial_rotation){                        // bottom side towards FRONT
                this._position_cube('front');
            }
            else {                                  // Front  side towards LEFT
                this._position_cube('left');
            } 
        }
        else if( this._y >= 90 && this._y < 180 ){  // Left   side towards BACK
            this._position_cube('back');
        }
        else if( this._y >= 180 && this._y < 270 ){                  // back   side towards RIGHT
            this._position_cube('right');
        }
        else if( this._y >= 270 ) {                 // right  side towards BOTTOM
            this._position_cube('bottom');
        }
        
    }
    move_the_cube(){

    /*
    * MAIN LOOP EVERY ANIMATION FRAME 
    */

        
       /* window.requestAnimationFrame(()=>{
            this.cube_el.style.transform = 'rotateY('+this._y+'deg)';
            this.cube_rotator_el.style.transform = ' rotatex('+this._x+'deg)';
            this.move_the_cube();
        });*/
        
    }
    intro() {

        let intro_length = 1;

        if(window.ishomepage)
            this.el_canvas.style.zIndex = '99';
        else 
            this.el_canvas.style.zIndex = '101';

        
        gsap.set(this.el_cubescene, {css:{ scaleX:0.3, scaleY:0.3}});
        

        this.front_side_el.style.opacity = '0.1';
        this.back_side_el.style.opacity = '0.1';
        this.right_side_el.style.opacity = '0.1';
        this.left_side_el.style.opacity = '0.1';
        this.bottom_side_el.style.opacity = '0.1';
        

        console.log('fadein' );
        console.log(this.cube_el);
        
        this.active_el = this.bottom_side_el;

        this.front_side_el.style.opacity = '1';
        this.back_side_el.style.opacity = '1';
        this.right_side_el.style.opacity = '1';
        this.left_side_el.style.opacity = '1';
        this.bottom_side_el.style.opacity = '1';


        gsap.to( this.front_side_el, { duration: intro_length, ease: 'power2.out', opacity: 0.1});
        gsap.to( this.right_side_el, { duration: intro_length, ease: 'power2.out', opacity: 0.1});
        gsap.to( this.back_side_el, { duration: intro_length, ease: 'power2.out', opacity: 0.1});
        gsap.to( this.left_side_el, { duration: intro_length, ease: 'power2.out', opacity: 0.1});
        gsap.to( this.el_cubescene, { duration: intro_length, ease: 'power2.out', css:{ scaleX:1, scaleY:1} });
        gsap.to( this.el_canvas, {
            duration: intro_length,
            ease: 'power2.out', 
            css: { opacity: 1},
            onComplete: ()=>{
                window.ess_cube_transitioning = false;
            }
        }); 
        
        
        this._x = 135;
        this._y = 0;

        gsap.set(this.cube_rotator_el, {css:{rotateX: this._x}});
        gsap.set(this.cube_el, {css:{rotateY: this._y}});

        let new_x = 90+this.initial_rotation;
        let new_y = 0;

        if(this.g)
            this.g.pause();
            this.g = gsap.to( this, { duration: intro_length, ease: this.tweeen, _y:new_y, _x:new_x, onUpdate:()=>{
            gsap.set(this.cube_el, {rotateY: this._y});
            gsap.set(this.cube_rotator_el, {rotateX: this._x});
        }});
    }
    outro(callback_func){     

        console.log('outro' );

        gsap.to(this.el_cubescene, {
            duration: 1,
            ease: 'power2.out',
            css:{ scaleX:0.3, scaleY:0.3}
        });
        gsap.to(this.el_canvas, {
            duration: 1,
            ease: 'power2.out', 
            css: { opacity: 0},
            onComplete: ()=>{
                window.ess_cube_transitioning = false;
            }
        });
        if(this.g)
            this.g.pause();

        this.front_side_el.style.opacity = '0.9';
        this.back_side_el.style.opacity = '0.9';
        this.right_side_el.style.opacity = '0.9';
        this.left_side_el.style.opacity = '0.9';
        this.bottom_side_el.style.opacity = '0.9';

        let new_x = 0;
        let new_y = this._y +360;

        this.g = gsap.to( this, {
                duration: 1,
                ease: this.tweeen, _y:new_y, _x:new_x, 
                onUpdate:()=>{
                    gsap.set(this.cube_el, {rotateY: this._y});
                    gsap.set(this.cube_rotator_el, {rotateX: this._x});
                },
                onComplete:()=>{
                    if (callback_func !== "undefined")
                        callback_func();
                }
    });

    }
    fadeIn() {

        if(window.ishomepage){ 
            this.el_canvas.style.zIndex = '99';
        }
        else {
            if( typeof InstallTrigger == 'undefined')
                this.main_container.classList.add('ess-blured-content');
            this.el_canvas.style.zIndex = '101';
        }
        
        this.front_side_el.style.opacity = '0.1';
        this.back_side_el.style.opacity = '0.1';
        this.right_side_el.style.opacity = '0.1';
        this.left_side_el.style.opacity = '0.1';
        this.bottom_side_el.style.opacity = '0.1';

        gsap.set(this.el_cubescene, {css:{ scaleX:0.5, scaleY:0.5}});
        

        console.log('fadein' );
        console.log(this.cube_el);
        
        this.active_el = this.front_side_el;

        gsap.to(this.el_cubescene, {
            duration: 0.5,
            ease: 'power2.out',
            css:{ scaleX:1, scaleY:1}
        });
        gsap.to(this.el_canvas, {
            duration: 0.5,
            ease: 'power2.out', 
            css: { opacity: 1},
            onComplete: ()=>{
                window.ess_cube_transitioning = false;
            }
        });

        this._x = 135;
        this._y = 45;

        gsap.set(this.cube_el, {rotateY: this._y});
        gsap.set(this.cube_rotator_el, {rotateX: this._x});

        this._position_cube('bottom');
        
    }
    fadeOut() {

        document.querySelector('#ess-menu-toggle').classList.remove('opacity-o');
        let tiny = document.querySelector('.ess-tiny-header');
        if(tiny)
            tiny.querySelector('h1').classList.remove('opacity-o');
        

        if( typeof InstallTrigger == 'undefined')
            this.main_container.classList.remove('ess-blured-content');

        if(this.active_el){
            gsap.to(this.active_el, {
                duration: 0.3,
                ease: 'power1.out',
                opacity: 0.1
            });
        }
        
        gsap.to(this.el_cubescene, {
            duration: 0.5,
            ease: 'power1.out',
            css:{ scaleX:0.5, scaleY:0.5}
        });
        
        this.g = gsap.to(this, {
            duration: 0.5,
            ease: 'power1.out',
            _x: 135,
            _y:this._y + 45,
            onUpdate: ()=>{
                gsap.set(this.cube_el, {rotateY: this._y});
                gsap.set(this.cube_rotator_el, {rotateX: this._x});
            }
        });
        gsap.to(this.el_canvas, {
            duration: 0.5,
            ease: 'power1.out', 
            css: { opacity: 0},
            onComplete: ()=>{
                window.ess_cube_transitioning = false;
                this.el_canvas.style.zIndex = '-100';
            }
        });
            
        console.log('fadeout');
    }
    elCanvasClickable() {
        this.el_clickable_background = document.createElement('div');
        this.el_clickable_background.setAttribute('id', 'el-clickable-background');
        this.el_clickable_background.addEventListener('click', () => {

            if (!window.ishomepage) {
                this.fadeOut();
            }
        });

        this.el_cont.appendChild(this.el_clickable_background);

    }
    init_topnav(){
        this.el_topnav = this.el_canvas.querySelector('#csscube-nav');
        this.topnav_links = this.el_topnav.querySelectorAll('a');

        for (let i=0; i<this.topnav_links.length; i++){
            
            let link = this.topnav_links[i];

            this.toplinks_arr[link.getAttribute('data-target')] = link;

            if(link.classList.contains('active'))
                this.active_link = link;
            
            this.topnav_links[i].addEventListener('click', ()=>{
                if(this.active_link !== link){
                    let side = this.topnav_links[i].getAttribute('data-target');
                    this._position_cube(side);
                }
            });
        }
    }
    init_subscribe_modal(){
        let subscribe_button = this.cube_el.querySelector('#cube_subscribe_button');
        console.log(subscribe_button);
        

        
        if(subscribe_button){
            subscribe_button.addEventListener('click', () => {
                let subscribe_modal = document.getElementById('ess-modal-subscribe');
                let modal_inst = M.Modal.getInstance(subscribe_modal);
                console.log('ahoooj');
                modal_inst.open();
            });
        }
        else console.log ('There is no subsribe button');
    }  
}
