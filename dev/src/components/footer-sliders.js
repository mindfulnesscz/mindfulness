/*jshint esversion: 6 */


import gsap from "gsap";


export default class FooterSlider {
    constructor(slider, settings) {
        if(slider){

        this.velocity = 0.8;
        this.autoplay_time = 4000;

        this.el_slider = slider; // PARENT UL ELEMENT
        this.slides = this.__get_slides();

        this.next = function () {
            this.__next();
        };
        this.prev = function () {
            this.__prev();
        };
        this.next_handler = this.next.bind(this);
        this.prev_handler = this.prev.bind(this);
        }
        if(settings){
            this.settings = settings;
        }
        this.arrows = [];

    }
    init() {
        if(this.slides){
            this.slides_length = this.slides.length;

            if (this.slides_length == 1){   
                this.slides[0].style.display = 'block';
                return;
            }

            this.int_curr = 0;
            this.int_next = this.__get_next_slide_number();
            this.int_prev = this.__get_prev_slide_number();

            this.curr_el = this.slides[0];
            if(!this.curr_el.classList.contains('curr'))
                this.curr_el.classList.add('curr');

            this.prev_el = this.slides[this.int_prev];
            this.next_el = this.slides[this.int_next];

            this.el_arrow_left = this.__get_arrow('left');
            this.el_arrow_right = this.__get_arrow('right');

            this.el_arrow_left.addEventListener('click', this.prev_handler);
            this.el_arrow_right.addEventListener('click', this.next_handler);

            if(this.settings.center_arrows)
                this.__position_arrows();
                window.addEventListener('resize', ()=>{this.__position_arrows();});

            if(this.settings.autoplay){
                this.__autoplay();
            }

        }
    }
    __autoplay (){
        this.autoplayer = setTimeout(this.next_handler, this.autoplay_time);
    }
    __get_arrow(direction) {
        let arrow = document.createElement('div');
        let icon = document.createElement('div');

        this.arrows.push(arrow);

        arrow.classList.add(direction, "arrow");
        icon.classList.add("ess-icon", "icon_simple_arrow_" + direction);

        arrow.appendChild( icon );

        this.el_slider.parentElement.appendChild( arrow );        

        return arrow;
    }
    __get_width() {
        return this.el_slider.parentElement.offsetWidth;
    }
    __get_slides() {
        return this.el_slider.getElementsByClassName('slide');
    }
    __get_next_slide_number() {
        if (parseInt(this.int_curr) + 1 == this.slides_length)
            return 0;
        else
            return this.int_curr + 1;
    }
    __get_prev_slide_number() {
        if (parseInt(this.int_curr) == 0) {
            return this.slides.length - 1;
        } else
            return this.int_curr - 1;
    }
    __next() {
    
        this.__preset_slider();

        let int_next = this.__get_next_slide_number();
        this.next_el = this.slides[int_next];
       
        this.next_el.classList.add('next');

        this.int_curr = int_next; // sets the new current number

        gsap.to(this.el_slider, this.velocity, {
            left: '-100%',
            onComplete: this.__next_callback.bind(this)
        });

        if(this.settings.autoplay){
            clearTimeout(this.autoplayer);
            this.autoplayer = setTimeout(this.next_handler, this.autoplay_time);
        }
    }

    __next_callback() {
        this.__reset_slider();
        this.curr_el = this.next_el;
        this.curr_el.classList.add('curr'); 
    }
    __prev() {
        this.__preset_slider();
        this.el_slider.style.left = '-100%';

        let int_prev = this.__get_prev_slide_number();
        console.log(int_prev);
        this.prev_el = this.slides[int_prev];
       
        this.prev_el.classList.add('prev');

        this.int_curr = int_prev; // sets the new current number

        gsap.to(this.el_slider, this.velocity, {
            left: '0%',
            onComplete: this.__prev_callback.bind(this)
        });

        if(this.settings.autoplay){
            clearTimeout(this.autoplayer);
            this.autoplayer = setTimeout(this.next_handler, this.autoplay_time);
        }
    }
    __position_arrows(arrow){
        this.arrows.forEach((arrow_item) => {
            arrow_item.style.top = ( this.el_slider.offsetHeight/2 ) - ( arrow_item.offsetHeight/2 ) + 'px';
        });
        
    }
    __prev_callback(){
        this.__reset_slider();
        this.curr_el = this.prev_el;
        this.curr_el.classList.add('curr');
    }
    __preset_slider(){
        this.el_arrow_left.removeEventListener('click', this.prev_handler);
        this.el_arrow_right.removeEventListener('click', this.next_handler);
        this.el_slider.classList.add('sliding');
    }
    __reset_slider(){
        this.el_arrow_left.addEventListener('click', this.prev_handler);
        this.el_arrow_right.addEventListener('click', this.next_handler);
        this.curr_el.classList.remove('curr');
        this.el_slider.classList.remove('sliding');
        this.el_slider.style.left = '0%';
        this.next_el.classList.remove('next');
        this.prev_el.classList.remove('prev');
    }

}