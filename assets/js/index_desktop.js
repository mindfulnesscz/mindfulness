/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/csscube.js":
/*!***********************************!*\
  !*** ./src/components/csscube.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CessCube)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable no-undef */

/*jshint esversion: 6 */

/**
 * CessCube
 * Activates functionality of the navigation cube and connects it with the top bar navigation
 **/
var CessCube = /*#__PURE__*/function () {
  /**
   * 
   * @param {HTMLElement} el_canvas Cube Container
   */
  function CessCube(el_canvas) {
    _classCallCheck(this, CessCube);

    this.toplinks_arr = this.init_navbar();
    this.initial_rotation = 10;
    this.el_canvas = el_canvas;
    this.el_cont = el_canvas.querySelector('#csscube-cont');
    this.tweeen = 'power2.out';
    this.tween_length = 0.8;
    this.isonscreen = false; // whether the cube is already initated and rendered

    this.isOnStage = false; // whether the cube is on stage.

    this.unit_space_ratio = 5; // 1/x of unit to calculate the space between sides of the cube

    this.units_total = 19; // total amount of units

    this.units_space = 2; // no clue

    this.units_cube = 12; // total amount of CUBE units

    this.units_cube_w = 12; // number of units in horizontal direction

    this.units_cube_h = 15; // number of units in vertical direction. The number is a bit higher than horizontal because of the headlines on top of each side

    this.units_space = (this.units_total - this.units_cube) / 2; // space for margin
    //array of coord system within cube (max ) 30

    this.names_array = ['o', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi', 'xvii', 'xviii', 'xix', 'xx', 'xxi', 'xxii', 'xxiii', 'xxiv', 'xxv', 'xxvi', 'xxvii', 'xxviii', 'xxix', 'xxx']; //create a new Style Sheet

    this.Cube_Style_Sheet = document.createElement('style');
    document.body.appendChild(this.Cube_Style_Sheet);
    this._y = 0;
    this._x = 0;
  }

  _createClass(CessCube, [{
    key: "init",
    value: function init() {
      var _this = this;

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
      this.main_container = document.getElementById('ess-main-container'); // container of the entire content except the cube - used for blur

      this.el_cubescene = this.el_cont.querySelector('#csscube-scene');
      this.cube_rotator_el = this.el_cubescene.querySelector('#csscube-rotator');
      this.cube_el = this.cube_rotator_el.querySelector('#csscube');
      this.cube_shadow_el = this.el_cubescene.querySelector('#csscube-shadow');
      console.log('items are');
      console.log(this.el_cubescene);
      console.log(this.cube_el);
      console.log(this.cube_rotator_el);
      this.front_side_el = this.cube_el.querySelector('#csscube-front');
      this.right_side_el = this.cube_el.querySelector('#csscube-right');
      this.back_side_el = this.cube_el.querySelector('#csscube-back');
      this.left_side_el = this.cube_el.querySelector('#csscube-left');
      this.bottom_side_el = this.cube_el.querySelector('#csscube-bottom');
      this.front_side_el.style.opacity = '0.1';
      this.right_side_el.style.opacity = '0.1';
      this.left_side_el.style.opacity = '0.1';
      this.back_side_el.style.opacity = '0.1';
      this.r_b = this.el_cubescene.querySelector('.right-button');
      this.l_b = this.el_cubescene.querySelector('.left-button'); //this.x_b = document.getElementById('x-button');

      this.elCanvasClickable();
      window.addEventListener('resize', this.setup_cube.bind(this), true);
      this.r_b.addEventListener('click', function () {
        _this._rotate_right();
      });
      this.l_b.addEventListener('click', function () {
        _this._rotate_left();
      });
      /*this.x_b.addEventListener('click', ()=>{
              console.log(this._x, this._y);
          })*/

      this.r_b.addEventListener('mouseover', function () {
        _this.still = true;
      });
      this.r_b.addEventListener('mouseleave', function () {
        _this.still = false;
      });
      this.l_b.addEventListener('mouseover', function () {
        _this.still = true;
      });
      this.l_b.addEventListener('mouseleave', function () {
        _this.still = false;
      });
      this.cube_el.addEventListener('mouseover', function () {
        _this.still = true;
      });
      this.cube_el.addEventListener('mouseleave', function () {
        _this.still = false;
      });
      if (!this.cube_el) throw 'cube_element not found';else this.move_the_cube();
      this.init_subscribe_modal();
      this.init_navbar();
    }
    /**
     * Loops.
     * @since 3.0
     * @return Array Associative array with Cube side names (front, left, etc) as keys and HtmlLinkElements as values
     */

  }, {
    key: "init_navbar",
    value: function init_navbar() {
      var _this2 = this;

      var navbarLinks = document.querySelectorAll('.wm-cube-menu-link');
      var linksArr = [];

      var _loop = function _loop(i) {
        var link = navbarLinks[i];
        var linkCubeSide = link.getAttribute('data-target');
        linksArr[linkCubeSide] = link;
        if (link.classList.contains('active')) _this2.active_link = link;
        navbarLinks[i].addEventListener('mouseover', function (e) {
          console.log('ahojoooooooooooooooo');
          e.preventDefault;

          if (_this2.active_link !== undefined && _this2.active_link !== e.target) {
            _this2.active_link.classList.remove('active');

            _this2.active_link = e.target;
          }

          _this2._position_cube(linkCubeSide);
        });
      };

      for (var i = 0; i < navbarLinks.length; ++i) {
        _loop(i);
      }

      return linksArr;
    } // Sets the sizes of the cube and its content can run during resize event as well

  }, {
    key: "setup_cube",
    value: function setup_cube() {
      var unit_w = 40; // 40 - initial value is about to change soon

      var unit_h = 40;
      var ww = this.el_canvas.clientWidth; // three quarters of the window to draw the cube

      var wh = this.el_canvas.clientHeight;
      var BigHeader = '';
      var SmHeader = '';
      var TinyHeader = '';
      var SmallestHeader = '';
      var ratio = ww / wh; // if is landscape one unit is calculated from height otherwise unit height is taken from width of the screen

      if (ratio >= 1) {
        // IS LANDSCAPE
        ww = ww * 0.6;
        wh = wh * 0.6;
        if (wh > 900) wh = 900;
        unit_w = wh / this.units_cube_w;
        unit_h = wh / this.units_cube_h;
        /*BigHeader = ' 6vh !important;';
              SmHeader = ' 2.6vh !important;';
              TinyHeader = ' 1.8vh !important;';*/

        BigHeader = ' ' + unit_w / 1.4 + 'px !important;';
        SmHeader = ' ' + unit_w / 2.4 + 'px !important;';
        TinyHeader = ' ' + unit_w / 3 + 'px !important;';
        SmallestHeader = ' ' + unit_w / 4 + 'px !important;';
      } else {
        // IS PORTRAIT
        ww *= 0.85;
        wh *= 0.85;
        if (window.vw > 500) window.vw = 500;
        unit_w = ww / this.units_cube_w;
        unit_h = ww / this.units_cube_h;
        BigHeader = ' 8vw !important; ';
        SmHeader = ' 4vw !important; ';
        TinyHeader = ' 1.6vw !important;';
        SmallestHeader = '1vw !important;';
      } // reset the sheet


      this.cube_width = this.units_cube_w * unit_w;
      this.cube_height = this.units_cube_h * unit_h;
      this.cube_w_shift = this.cube_width / 2; // + maybe unit/this.unit_space_ratio for gap between sides;

      this.cube_h_shift = this.cube_height / 2;
      /*console.log('cube width is '+ this.cube_width);
          console.log('cube height is '+ this.cube_height);
          console.log('cube width shift '+ this.cube_w_shift);
          console.log('cube height shift '+ this.cube_h_shift);*/

      console.log('cube top is ');
      console.log(this.el_canvas.clientHeight + ', ' + this.cube_height); //this.Cube_Style_Sheet.innerHTML = "#csscube-nav ul li a {font-size: "+TinyHeader+";}";  

      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h1 {font-size: ' + BigHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h2 {font-size: ' + SmHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h3 {font-size: ' + TinyHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene #csscube h4 {font-size: ' + SmallestHeader + ' } ';
      this.Cube_Style_Sheet.innerHTML += '#csscube-scene{position: relative; top: ' + (this.el_canvas.clientHeight - this.cube_height) / 2 + 'px; width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; perspective: ' + this.cube_width * 5 + 'px;}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-rotator{top: ' + this.cube_height / 2 + 'px;}';
      this.Cube_Style_Sheet.innerHTML += '#csscube{top: -' + this.cube_height / 2 + 'px;}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-front  {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-left   {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateY(-90deg) translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-right  {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateY(90deg) translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-back   {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateY(-180deg) translateZ(' + this.cube_w_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-top    {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateX(90deg) translateZ(' + this.cube_h_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-bottom {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateX(-90deg) translateZ(' + this.cube_h_shift + 'px);}';
      this.Cube_Style_Sheet.innerHTML += '#csscube-shadow {width:' + this.cube_width + 'px; height:' + this.cube_height + 'px; transform: rotateX(-85deg) translateZ(' + this.cube_h_shift * 1.2 + 'px) ;}';

      for (var i = 0; i < this.units_cube_h; i++) {
        this.Cube_Style_Sheet.innerHTML += '.x_' + this.names_array[i] + '{left:' + unit_w * i + 'px;}';
        this.Cube_Style_Sheet.innerHTML += '.y_' + this.names_array[i] + '{top:' + unit_h * i + 'px;}';
        this.Cube_Style_Sheet.innerHTML += '.w_' + this.names_array[i] + '{width:' + unit_w * i + 'px;}';
        this.Cube_Style_Sheet.innerHTML += '.h_' + this.names_array[i] + '{height:' + unit_h * i + 'px;}'; //console.log(".h_"+this.names_array[i]+"{height:"+(unit_w)*(1+i)+"px;}");
      }

      if (!this.isonscreen) {
        this._x = 90;
        gsap.to(document.getElementById('csscube-scene'), {
          duration: 0.5,
          opacity: 1
        });
        this.isonscreen = true;
      }
    }
  }, {
    key: "_rotate_right",
    value: function _rotate_right() {
      // ROTATING LEFT SHOWING RIGHT SIDE OF THE CUBE
      if (this._y == 0) this._y = 359.99;

      if (this._y < 360 && this._y > 270) {
        if (this._x > 0 + this.initial_rotation) {
          // bottom side towards RIGHT
          this._position_cube('right');
        } else {
          // Front  side towards BOTTOM
          this._position_cube('bottom');
        }
      } else if (this._y <= 90 || this._y > 360) {
        // Left   side towards FRONT
        this._position_cube('front');
      } else if (this._y <= 180) {
        // back   side towards LEFT
        this._position_cube('left');
      } else if (this._y <= 270) {
        // right  side towards BACK
        this._position_cube('back');
      }
    }
  }, {
    key: "_position_cube",
    value: function _position_cube(str_target) {
      var _this3 = this;

      console.log('==================================');
      console.log(str_target);
      console.log(this.toplinks_arr);
      console.log('==================================');

      if (false === this.isOnStage) {
        this.fadeIn();
      }

      var el;
      var new_x;
      var new_y;
      console.log(str_target);
      if (this.active_link !== undefined) this.active_link.classList.remove('active');
      this.toplinks_arr[str_target].classList.add('active');
      this.active_link = this.toplinks_arr[str_target];

      switch (str_target) {
        case 'bottom':
          if (this._y > 180) this._y = this._y - 359.99;
          new_x = 90;
          new_y = 0;
          el = this.bottom_side_el;
          break;

        case 'front':
          if (this._y > 180) this._y = this._y - 359.99;
          new_x = 0;
          new_y = 0;
          el = this.front_side_el;
          break;

        case 'right':
          if (this._y >= -180 && this._y < 90) this._y = this._y + 359.99;
          new_x = 0;
          new_y = 270;
          el = this.right_side_el;
          break;

        case 'left':
          if (this._y > 270) this._y = this._y + 359.99;
          new_x = 0;
          new_y = 90;
          el = this.left_side_el;
          break;

        case 'back':
          if (this._y >= 360) this._y = this._y - 359.99;
          new_x = 0;
          new_y = 180;
          el = this.back_side_el;
          break;

        default:
          new_x = 90;
          new_y = 0;
          el = this.bottom_side_el;
      }

      if (this.active_el != el) {
        this.leaving_el = this.active_el;
        this.arriving_el = el;
        new_x += this.initial_rotation;
        gsap.to(this.leaving_el, {
          duration: this.tween_length,
          ease: this.tweeen,
          opacity: 0.1
        });
        gsap.to(this.arriving_el, {
          duration: this.tween_length,
          ease: this.tweeen,
          opacity: 1
        });
        this.active_el = this.arriving_el;
        console.log('y je ' + this._y + ' new y je' + new_y);
        if (this.g) this.g.pause();
        this.g = gsap.to(this, {
          duration: this.tween_length,
          ease: this.tweeen,
          _y: new_y,
          _x: new_x,
          onUpdate: function onUpdate() {
            _this3.cube_el.style.transform = ' rotatey(' + _this3._y + 'deg)';
            _this3.cube_rotator_el.style.transform = ' rotatex(' + _this3._x + 'deg)';
            _this3.cube_shadow_el.style.transform = ' rotatex(-85deg) rotatez(' + _this3._y + 'deg) translatez(' + _this3.cube_h_shift * 1.4 + 'px)';
          }
        });
      } else console.log('nothing to tween');
    }
  }, {
    key: "_rotate_left",
    value: function _rotate_left() {
      /*if(this._y == 0)
          this._y = 359.99;*/
      if (this._y >= 0 && this._y < 90) {
        if (this._x > 0 + this.initial_rotation) {
          // bottom side towards FRONT
          this._position_cube('front');
        } else {
          // Front  side towards LEFT
          this._position_cube('left');
        }
      } else if (this._y >= 90 && this._y < 180) {
        // Left   side towards BACK
        this._position_cube('back');
      } else if (this._y >= 180 && this._y < 270) {
        // back   side towards RIGHT
        this._position_cube('right');
      } else if (this._y >= 270) {
        // right  side towards BOTTOM
        this._position_cube('bottom');
      }
    }
  }, {
    key: "move_the_cube",
    value: function move_the_cube() {
      /*
      * MAIN LOOP EVERY ANIMATION FRAME 
      */

      /* window.requestAnimationFrame(()=>{
              this.cube_el.style.transform = 'rotateY('+this._y+'deg)';
              this.cube_rotator_el.style.transform = ' rotatex('+this._x+'deg)';
              this.move_the_cube();
          });*/
    }
  }, {
    key: "intro",
    value: function intro() {
      var _this4 = this;

      var intro_length = 1;
      this.el_canvas.style.zIndex = '1';
      gsap.set(this.el_cubescene, {
        css: {
          scaleX: 0.3,
          scaleY: 0.3
        }
      });
      this.front_side_el.style.opacity = '0.1';
      this.back_side_el.style.opacity = '0.1';
      this.right_side_el.style.opacity = '0.1';
      this.left_side_el.style.opacity = '0.1';
      this.bottom_side_el.style.opacity = '0.1';
      console.log('fadein');
      console.log(this.cube_el);
      this.active_el = this.bottom_side_el;
      this.front_side_el.style.opacity = '1';
      this.back_side_el.style.opacity = '1';
      this.right_side_el.style.opacity = '1';
      this.left_side_el.style.opacity = '1';
      this.bottom_side_el.style.opacity = '1';
      gsap.to(this.front_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.right_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.back_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.left_side_el, {
        duration: intro_length,
        ease: 'power2.out',
        opacity: 0.1
      });
      gsap.to(this.el_cubescene, {
        duration: intro_length,
        ease: 'power2.out',
        css: {
          scaleX: 1,
          scaleY: 1
        }
      });
      gsap.to(this.el_canvas, {
        duration: intro_length,
        ease: 'power2.out',
        css: {
          opacity: 1
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
        }
      });
      this._x = 135;
      this._y = 0;
      gsap.set(this.cube_rotator_el, {
        css: {
          rotateX: this._x
        }
      });
      gsap.set(this.cube_el, {
        css: {
          rotateY: this._y
        }
      });
      var new_x = 90 + this.initial_rotation;
      var new_y = 0;
      if (this.g) this.g.pause();
      this.g = gsap.to(this, {
        duration: intro_length,
        ease: this.tweeen,
        _y: new_y,
        _x: new_x,
        onUpdate: function onUpdate() {
          gsap.set(_this4.cube_el, {
            rotateY: _this4._y
          });
          gsap.set(_this4.cube_rotator_el, {
            rotateX: _this4._x
          });
        }
      });
    }
  }, {
    key: "outro",
    value: function outro(callback_func) {
      var _this5 = this;

      console.log('outro');
      gsap.to(this.el_cubescene, {
        duration: 1,
        ease: 'power2.out',
        css: {
          scaleX: 0.3,
          scaleY: 0.3
        }
      });
      gsap.to(this.el_canvas, {
        duration: 1,
        ease: 'power2.out',
        css: {
          opacity: 0
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
        }
      });
      if (this.g) this.g.pause();
      this.front_side_el.style.opacity = '0.9';
      this.back_side_el.style.opacity = '0.9';
      this.right_side_el.style.opacity = '0.9';
      this.left_side_el.style.opacity = '0.9';
      this.bottom_side_el.style.opacity = '0.9';
      var new_x = 0;
      var new_y = this._y + 360;
      this.g = gsap.to(this, {
        duration: 1,
        ease: this.tweeen,
        _y: new_y,
        _x: new_x,
        onUpdate: function onUpdate() {
          gsap.set(_this5.cube_el, {
            rotateY: _this5._y
          });
          gsap.set(_this5.cube_rotator_el, {
            rotateX: _this5._x
          });
        },
        onComplete: function onComplete() {
          if (callback_func !== 'undefined') callback_func();
        }
      });
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      this.isOnStage = true;
      if (typeof InstallTrigger == 'undefined') this.main_container.classList.add('ess-blured-content');
      this.el_canvas.style.zIndex = '1';
      this.front_side_el.style.opacity = '0.1';
      this.back_side_el.style.opacity = '0.1';
      this.right_side_el.style.opacity = '0.1';
      this.left_side_el.style.opacity = '0.1';
      this.bottom_side_el.style.opacity = '0.1';
      gsap.set(this.el_cubescene, {
        css: {
          scaleX: 0.5,
          scaleY: 0.5
        }
      });
      console.log('fadein');
      console.log(this.cube_el);
      this.active_el = this.front_side_el;
      gsap.to(this.el_cubescene, {
        duration: 0.5,
        ease: 'power2.out',
        css: {
          scaleX: 1,
          scaleY: 1
        }
      });
      gsap.to(this.el_canvas, {
        duration: 0.5,
        ease: 'power2.out',
        css: {
          opacity: 1
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
        }
      });
      this._x = 135;
      this._y = 45;
      gsap.set(this.cube_el, {
        rotateY: this._y
      });
      gsap.set(this.cube_rotator_el, {
        rotateX: this._x
      });

      this._position_cube('bottom');
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this6 = this;

      this.isOnStage = false;
      var tiny = document.querySelector('.ess-tiny-header');
      if (tiny) tiny.querySelector('h1').classList.remove('opacity-o');
      if (typeof InstallTrigger == 'undefined') this.main_container.classList.remove('ess-blured-content');

      if (this.active_el) {
        gsap.to(this.active_el, {
          duration: 0.3,
          ease: 'power1.out',
          opacity: 0.1
        });
      }

      gsap.to(this.el_cubescene, {
        duration: 0.5,
        ease: 'power1.out',
        css: {
          scaleX: 0.5,
          scaleY: 0.5
        }
      });
      this.g = gsap.to(this, {
        duration: 0.5,
        ease: 'power1.out',
        _x: 135,
        _y: this._y + 45,
        onUpdate: function onUpdate() {
          gsap.set(_this6.cube_el, {
            rotateY: _this6._y
          });
          gsap.set(_this6.cube_rotator_el, {
            rotateX: _this6._x
          });
        }
      });
      gsap.to(this.el_canvas, {
        duration: 0.5,
        ease: 'power1.out',
        css: {
          opacity: 0
        },
        onComplete: function onComplete() {
          window.ess_cube_transitioning = false;
          _this6.el_canvas.style.zIndex = '-100';
        }
      });
      this.active_link.classList.remove('active');
    }
  }, {
    key: "elCanvasClickable",
    value: function elCanvasClickable() {
      var _this7 = this;

      this.el_clickable_background = document.createElement('div');
      this.el_clickable_background.setAttribute('id', 'el-clickable-background');
      this.el_clickable_background.addEventListener('click', function () {
        _this7.fadeOut();
      });
      this.el_cont.appendChild(this.el_clickable_background);
    }
  }, {
    key: "init_subscribe_modal",
    value: function init_subscribe_modal() {
      var subscribe_button = this.cube_el.querySelector('#cube_subscribe_button');
      console.log(subscribe_button);

      if (subscribe_button) {
        subscribe_button.addEventListener('click', function () {
          console.log('HERE WAS ORIGNIAL MATERIALIZE MODAL');
        });
      } else console.log('There is no subsribe button');
    }
  }]);

  return CessCube;
}();



/***/ }),

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "mind_global": () => (/* binding */ mind_global)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);








function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*jshint esversion: 6 */
function extend() {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      // eslint-disable-next-line no-prototype-builtins
      if (arguments[i].hasOwnProperty(key)) {
        if (_typeof(arguments[0][key]) === 'object' && _typeof(arguments[i][key]) === 'object') extend(arguments[0][key], arguments[i][key]);else arguments[0][key] = arguments[i][key];
      }
    }
  }

  return arguments[0];
}
function mind_global() {
  window.el_header = document.getElementById('ess-header');
  window.vw = window.innerWidth;
  window.vh = window.innerHeight;
  window.sc = window.scrollY;
  window.addEventListener('resize', function () {
    window.vw = window.innerWidth;
    window.vh = window.innerHeight;
  });
  window.addEventListener('scroll', function () {
    window.sc = window.scrollY;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  extend: extend,
  mind_global: mind_global
});

/***/ }),

/***/ "./src/components/mind-helpers/MindCookies.js":
/*!****************************************************!*\
  !*** ./src/components/mind-helpers/MindCookies.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MindCookies)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*jshint esversion: 6 */
var MindCookies = /*#__PURE__*/function () {
  function MindCookies(path) {
    _classCallCheck(this, MindCookies);

    this.path = path; //this.createCookiesArray();
  }

  _createClass(MindCookies, [{
    key: "createCookiesArray",
    value: function createCookiesArray() {
      this.arr_cookies = [];

      if (document.cookie && document.cookie != '') {
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];

          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }

          var csa = c.split('=');
          this.arr_cookies[csa[0]] = csa[1];
        }

        console.log(this.arr_cookies);
      }
    }
  }, {
    key: "make_cookie_from_array",
    value: function make_cookie_from_array() {
      if (Object.keys(this.arr_cookies).length != 0) {
        // mozna budu moct zakomentovat
        var updated_cookie = '';

        for (var key in this.arr_cookies) {
          var value = arr[key];
          updated_cookie = updated_cookie + key + "=" + value;
        }
      } // a tim padem i toto

    }
  }], [{
    key: "setCookie",
    value: function setCookie(cname, cvalue, extime) {
      var d = new Date();
      d.setTime(d.getTime() + extime);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  }, {
    key: "getCookie",
    value: function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      console.log('cooookie ' + decodedCookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
          console.log(c);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "none";
    }
  }, {
    key: "deleteCookie",
    value: function deleteCookie(name) {
      document.cookie = name + '=; Max-Age=-99999999;';
    }
  }]);

  return MindCookies;
}();



/***/ }),

/***/ "./src/index_desktop.js":
/*!******************************!*\
  !*** ./src/index_desktop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/helpers */ "./src/components/helpers.js");
/* harmony import */ var _components_mind_helpers_MindCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mind-helpers/MindCookies */ "./src/components/mind-helpers/MindCookies.js");
/* harmony import */ var _components_csscube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/csscube */ "./src/components/csscube.js");
/*jshint esversion: 6 */



console.log('desktop initializing');
(0,_components_helpers__WEBPACK_IMPORTED_MODULE_0__.mind_global)();
window.MindCookiesHandler = new _components_mind_helpers_MindCookies__WEBPACK_IMPORTED_MODULE_1__["default"]('./');
window.$intro = null;
window.$Cube = null;
window.ishomepage = document.body.classList.contains('ess-homepage'); // THE TOP BAR & THE CUBE
// ===========================================================

var el_cubenavholder = document.getElementById('ess-cube-navigation-holder');
var navbarLinks = document.querySelectorAll('.wm-cube-menu-link');
var CSSCube = new _components_csscube__WEBPACK_IMPORTED_MODULE_2__["default"](el_cubenavholder, navbarLinks);
CSSCube.init();
CSSCube.setup_cube();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"../index_desktop": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkess_backend"] = self["webpackChunkess_backend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_dat-5c2d9e"], () => (__webpack_require__("./src/index_desktop.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index_desktop.js.map