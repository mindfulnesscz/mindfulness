/*jshint esversion: 6 */

import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
//import TweenLite from "gsap/TweenMax";
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import {
    runInThisContext
} from 'vm';
import {
    ConeGeometry
} from 'three';



export default class EssCube {
    /* ishomepage:  boolean wether the current page is homepage
        container:  whatever div element
        canvas:     html canvas element in which the scene will be drawn

        canvas is nested in container
    */
    constructor(ishomepage, container, canvas, main_container) {
        this.ishomepage = ishomepage;
        this.hidden = true;

        this.cube_max_speed = 0.05;
        this.cube_rotation_value = 0;
        this.INTERSECTED = '';

        this.mixer_arr = []; // dunna know what this one is
        this.industries = []; // array of industries scenes;

        this.el_container = container;
        this.el_canvas = canvas;
        this.main_container = main_container;

        this.i = 0;
        this.__test_globals();


    }
    init(sources_array, url_array, base_path) {


        // 0. SET VARIABLES

        this.base_path = base_path;
        this.industries_array = [];
        this.sources_array = sources_array;
        this.url_array = url_array;
        this.interactive_objects_array = [];
        this.loader_status_array = this.__get_loader_status_array();

        this.cube_width = 14;

        //Promise watched by fade_in and intro functions called externally from navbar-toggle.js in case of need
        this.scene_ready_trigger = function() {};
        this.scene_ready = new Promise((resolve, reject) => {
            this.scene_ready_trigger = resolve;
        });


        //*I. LOAD CONTENT

        this.__load_scene_content(base_path, sources_array).then(() => {

            // II. BUILD SCENE OBJECTS

            this.__build_scene_content();

            // III. BUILD SCENE ENVIRONMENT 
            this.__build_scene_environment();

            // IV. APPEND OBJECTS TO SCENE
            this.__fetch_cube_scene();

            // V. MAKE OBJECTS INTERACTIVE
            this.__interactivate_scene_content();

            this.scene_ready_trigger();
        });
    }

    // II. BUILD SCENE OBJECTS

    __continue_after_content_loaded() {
        this.__build_scene_content();

        // III. BUILD SCENE ENVIRONMENT 
        this.__build_scene_environment();

        // IV. APPEND OBJECTS TO SCENE
        this.__fetch_cube_scene();

        // V. MAKE OBJECTS INTERACTIVE
        this.__interactivate_scene_content();
    }

    /* ---------------------------- I. LOAD_SCENE_CONTENT --------------------------------------------- */
    __check_loader_promise(ready) {
        let content_loaded = true;
        this.loader_status_array[ready] = true;

        for (var key in this.loader_status_array) {
            if (this.loader_status_array[key] == false)
                content_loaded = false;
        }
        return content_loaded;
    }
    __load_scene_content(path, arr) {
        return (new Promise((resolve, reject) => {
            let promise_texture = this.__load_cube_texture(path + "/" + arr.src_cube_texture);
            let promise_cube = this.__load_cube_geometry(path + "/" + arr.src_cube);

            let promise_industry_env = this.__load_industry_geometry('environment & energy', 'environment', path + "/" + arr.src_environment, [13, 5]);
            let promise_industry_auto = this.__load_industry_geometry('automotive', 'automotive', path + "/" + arr.src_automotive, [-13, 5]);
            let promise_industry_oil = this.__load_industry_geometry('oil & gas', 'oil', path + "/" + arr.src_oil, [13, -5]);
            let promise_industry_mineral = this.__load_industry_geometry('mineral processing', 'mineral', path + "/" + arr.src_mineral, [-13, -5]);
            let promise_font = this.__load_font(path + "/" + arr.src_font);

            Promise.all([
                promise_texture,
                promise_cube,
                promise_industry_env,
                promise_industry_auto,
                promise_industry_oil,
                promise_industry_mineral,
                promise_font
            ]).then(() => {
                resolve();
            }).catch(err => reject(err));
        }));
    }
    __load_cube_geometry(src) {
        /* Loads the cube geometry and sets the class object var cube_scene when done */

        this.cube_stopped = false;
        return (new Promise((resolve, reject) => {
            let loader = new GLTFLoader();
            loader.load(src, (gltf) => {
                    this.cube_scene = gltf.scene;
                    this.__check_loader('cube');
                    resolve();
                },
                function(xhr) {},
                function(error) {
                    reject();
                    console.log(error);
                }
            );

        }));


    }
    __load_industry_geometry(name, name_id, src, coords) {

        // Loads industry geometry and puts the industry scene to the associative industries_array in class object 
        // calls __check_loader when loaded
        return (new Promise((resolve, reject) => {
            let cube = this;
            let loader_fun = new GLTFLoader();
            loader_fun.load(src, (gltf) => {

                // insert scene to array
                gltf.coords = coords;
                gltf.industry_name = name;
                gltf.industry_id = name_id;

                this.industries_array[name_id] = gltf;
                //cube.__check_loader(name_id);
                resolve();
            });
        }));


    }
    __load_cube_texture(src) {

        return (new Promise((resolve, reject) => {
            let loader = new THREE.TextureLoader();
            loader.load(
                src,
                texture => {
                    texture.encoding = THREE.sRGBEncoding;
                    texture.flipY = false;
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;

                    texture.repeat.set(1, 1);
                    this.cube_texture = texture;
                    resolve();
                    //this.__check_loader('cube_texture');


                },
                undefined,

                (err) => {
                    reject();
                    console.error('An error happened. Texture not loaded');
                }
            );

        }));

    }
    __load_font(src) {
        return (new Promise((resolve, reject) => {
            let loader = new THREE.FontLoader();
            loader.load(src, font => {
                    this.font = font;
                    resolve();
                    //this.__check_loader('font');
                },
                function(xhr) {

                },
                err => {
                    reject(err)
                        //console.log('An error happened');
                }
            );

        }));
    }
    __check_loader(ready) {

        /* sets newly loaded content as loaded and checks the loader_status_array.
         * if everything is loaded than proceed to build_cube_scene_content() phase
         */
        let content_loaded = true;
        this.loader_status_array[ready] = true;

        for (var key in this.loader_status_array) {
            if (this.loader_status_array[key] == false)
                content_loaded = false;
        }

        if (content_loaded)
            this.__continue_after_content_loaded();
    }


    /* ---------------------------- II. BUILD_SCENE_CONTENT --------------------------------------------- */

    __build_scene_content() {
        //build materials first    
        this.__build_scene_materials();
        this.__build_cube_material();

        //build geometries next
        this.__build_the_cube();

        //build the industries with text headlines
        this.__build_the_industry(this.industries_array.automotive);
        this.__build_the_industry(this.industries_array.environment);
        this.__build_the_industry(this.industries_array.oil);
        this.__build_the_industry(this.industries_array.mineral);
    }

    __build_scene_materials() {

        this.blue_material = new THREE.MeshPhongMaterial({
            color: 0x3BBCF4
        });

        this.transparent_material = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0
        });
        this.white_material = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
    }

    __build_cube_material() {
        let material = new THREE.MeshPhongMaterial();
        material.map = this.cube_texture;
        material.needsUpdate = true;
        material.map.needsUpdate = true;

        this.cube_material = material;
    }
    __build_the_cube() {

        let cube = this.cube_scene;
        cube.rotation.x = THREE.Math.degToRad(90);
        cube.position.y = -4;

        cube.scale.x = 0.1;
        cube.scale.y = 0.1;
        cube.scale.z = 0.1;

        cube.rotation.y = THREE.Math.degToRad(360);

        this.__scene_loop('cube', cube, this.cube_material, true);


        //resets the cube geometry parts so they have correct pivots for animation on hover
        //needs to be rewritten for better organization of updates and changes in the cube geometry

        let ch = cube.children;
        for (let i = 0; i < ch.length; i++) {
            let baby = ch[i];
            this.interactive_objects_array.push(baby);
        }
        for (let x = 0; x < this.interactive_objects_array.length; x++) {

            let mesh = this.interactive_objects_array[x]
            let reg_right = /^bb_.+_east$/;
            let reg_front = /^bb_.+_south$/;
            let reg_left = /^bb_.+_west$/;
            let reg_back = /^bb_.+_nord$/;

            if (reg_right.test(mesh.name)) {
                this.__insert_pivot(mesh, 'x', -7);
                mesh.shift_axis = 'x';
                mesh.shift_value = -30;
            } else if (reg_front.test(mesh.name)) {
                this.__insert_pivot(mesh, 'z', -7);
                mesh.shift_axis = 'z';
                mesh.shift_value = -30;
            } else if (reg_left.test(mesh.name)) {
                this.__insert_pivot(mesh, 'x', 7);
                mesh.shift_axis = 'x';
                mesh.shift_value = -30;
            } else if (reg_back.test(mesh.name)) {
                this.__insert_pivot(mesh, 'z', 7);
                mesh.shift_axis = 'z';
                mesh.shift_value = -30;
            }
        }
        let half_cw = this.cube_width / 2;

        // inserts the TEXT headlines to the cube
        this.cube_scene.add(this.__build_text('ABOUT US', {
            x: half_cw,
            y: 0,
            z: -half_cw,
            mat: this.blue_material,
            rot_y: 180
        }));
        this.cube_scene.add(this.__build_text('OUR PRODUCTS', {
            x: -half_cw,
            y: 0,
            z: -half_cw,
            mat: this.blue_material,
            rot_y: -90
        }));
        this.cube_scene.add(this.__build_text('CONTACTS', {
            x: half_cw,
            y: 0,
            z: half_cw,
            mat: this.blue_material,
            rot_y: 90
        }));
        this.cube_scene.add(this.__build_text('CONTACTS', {
            x: -half_cw,
            y: 0,
            z: half_cw,
            mat: this.blue_material,
            rot_y: 0
        }));


        //inserts new dark blue cube but only on homepage
        //  if (this.ishomepage)
        this.cube_scene.add(this.__get_inside_cube());
    }
    __build_text(text, params) {
        let geometry = new THREE.TextGeometry(text, {
            font: this.font,
            size: 1.2,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0.005,
            bevelOffset: 0,
            bevelSegments: 0
        });
        geometry = new THREE.BufferGeometry().fromGeometry(geometry);
        let t_mesh = new THREE.Mesh(geometry, params.mat);
        //t_mesh.castShadow = true;
        t_mesh.receiveShadow = true;
        t_mesh.geometry.computeBoundingBox();
        t_mesh.position.x = params.x;
        t_mesh.position.y = 6;
        t_mesh.position.z = params.z;
        t_mesh.rotation.y = THREE.Math.degToRad(params.rot_y);

        return t_mesh;
    }
    __build_the_industry(industry) {

        let sc = industry.scene;

        // starts the animation 

        if (industry.animations.length > 0) {
            let M = new THREE.AnimationMixer(sc);
            this.mixer_arr.push(M);
            for (let i = 0; i < industry.animations.length; i++) {
                let action = M.clipAction(industry.animations[i]);
                action.play();
            }
        }

        // sets position of the industry in the scene for the initial animation

        //sc.rotation.x = THREE.Math.degToRad(90);
        sc.position.x = 0;
        sc.position.z = 0;
        sc.scale.set(0.01, 0.01, 0.01);


        // apply material and interactivate bounding box object within the scene

        this.__scene_loop('industry', sc, this.blue_material, false);


        // create text geometry in the industry scene
        let geometry = new THREE.TextGeometry(industry.industry_name.toUpperCase(), {
            font: this.font,
            size: 0.8,
            height: 0.1,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0.005,
            bevelOffset: 0,
            bevelSegments: 0
        });
        geometry = new THREE.BufferGeometry().fromGeometry(geometry);
        let text = new THREE.Mesh(geometry, this.blue_material);
        text.geometry.computeBoundingBox();
        text.position.x = -1 * ((text.geometry.boundingBox.min.x - text.geometry.boundingBox.max.x) / 2);
        text.position.z = -2;
        text.position.y = 0;
        text.rotation.x = THREE.Math.degToRad(-90);
        text.rotation.z = THREE.Math.degToRad(180);

        industry.scene.add(text);
    }




    /* ---------------------------- I. BUILD_SCENE_ENVIRONMENT  --------------------------------------------- */

    __build_scene_environment() {

        //first set the variables

        //this.el_container.appendChild(this.el_canvas); //somewhere else

        this.scene = new THREE.Scene();

        this.clock = new THREE.Clock();

        this.renderer = this.__build_renderer(this.el_canvas);
        //this.renderer.setClearColor('#0f182c', 0);

        this.camera = this.__build_camera();

        this.secondary_light = new THREE.HemisphereLight('#d3d3d0', '#a7bfdb', 0.7);

        this.primary_light = this.__build_primary_light();


        // this.__build_controls();

        //second give life;

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    __build_primary_light() {
        let spot_light = new THREE.SpotLight('#fff', 1, 200, 1, 0.1, 0.7);
        spot_light.shadow.radius = 6;
        spot_light.shadow.mapSize.width = 8096;
        spot_light.shadow.mapSize.height = 8096;
        spot_light.position.set(0, 30, 30);
        spot_light.target.position.set(0, 0, 0);

        spot_light.castShadow = true;

        return spot_light;
    }


    __build_camera() {

        let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.y = 47;
        camera.position.z = 10;
        camera.rotation.x = THREE.Math.degToRad(100);
        camera.rotation.y = THREE.Math.degToRad(180);

        return camera;
    }

    __build_renderer() {
        let renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            canvas: this.el_canvas
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.gammaOutput = true;
        renderer.gammaFactor = 1;
        renderer.setSize(window.innerWidth, window.innerHeight);

        return renderer;
    }
    __build_controls() {
        this.controls = new OrbitControls(this.camera, this.el_canvas);
    }

    /* ---------------------------- IV. INTERACTIVATE SCENE CONTENT  --------------------------------------------- */

    __fetch_cube_scene() {
            this.scene.add(this.primary_light);
            this.scene.add(this.secondary_light);
            this.scene.add(this.camera);
            this.scene.add(this.cube_scene);
            this.scene.add(this.industries_array.environment.scene);
            this.scene.add(this.industries_array.automotive.scene);
            this.scene.add(this.industries_array.oil.scene);
            this.scene.add(this.industries_array.mineral.scene);

            //this.__get_axes();


        }
        /* ---------------------------- V. INTERACTIVATE SCENE CONTENT  --------------------------------------------- */




    __interactivate_scene_content() {
        this.mouse_watcher_array = [];
        this.mouse = {}; // object with .x and .y properties for further work


        // Setting mouse coords for rotating the cube and hover scene objects

        //document.addEventListener('mousemove', (event) => {
        this.el_canvas.addEventListener('mousemove', (event) => {
            let max = window.innerWidth / 2;
            let mouse_relative = event.clientX - max;

            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.x_raw = event.clientX;
            this.mouse.y_raw = event.clientY;
            this.mouse.x_relative = mouse_relative;
            if (this.ishomepage)
                this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1 - 2 * (window.scrollY / window.innerHeight);
            else
                this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;


            this.cube_rotation_value = this.cube_max_speed * mouse_relative / max;

        }, false);


        this.__make_clickable();

        //this.__render_scene();
    }

    __scene_loop(type, node, material) {
        /* goes through every node in given scene applies material if geometry and triggers specific actions based on node.name parameter received from blender exporter */
        /* triggers recursion if leveled */
        if (node.isMesh) {
            node.material = material;

            if (type == 'cube' || !/^bb_.+/.test(node.name))
                node.castShadow = true;
            node.receiveShadow = true;
        }


        let children = node.children;

        children.map(ch => {
            let child_split_arr = ch.name.split("_");
            if (child_split_arr[0] == 'bb') { // testing if the name starts with bb_ which means its an interactive bounding box
                ch.ess_type = type;
                ch.castShadow = false;
                ch.receiveShadow = false;

                let link_name = child_split_arr[1];

                if (this.url_array[link_name]) {
                    ch.link = this.url_array[link_name]; // sets the link if there is one from the url_array
                }
                this.interactive_objects_array.push(ch); // interactive_objects_array children get tested  for mouseover in make_interactive function casted every animation frame
                if (type == 'industry') {
                    let p = ch.parent.children;
                    p.map(el => {
                        if (el.name == 'interactive')
                            ch.interactive_group = el;
                    });
                    if (!ch.interactive_group)
                        throw ("couldn't find interactive group object in the geometry given");
                    this.__scene_loop(type, ch, this.transparent_material);
                } else
                    this.__scene_loop(type, ch, material);
            } else
                this.__scene_loop(type, ch, material);
        });
    }

    __make_clickable() {
        this.el_canvas.addEventListener('click', () => {

            if (this.INTERSECTED == null) {
                if (!this.ishomepage) {
                    this.fadeout();
                }

            } else {
                window.location.href = this.INTERSECTED.link;
            }
        });
    }





    intro() {

        this.hidden = false;
        this.__render_scene();

        let cube = this;
        let i = 0;
        gsap.to(this.cube_scene.scale, 2, {
            x: 1,
            y: 1,
            z: 1,
            ease: Circ.easeOut,
            onComplete: function() {
                window.ess_cube_transitioning = false;
            }
        });
        gsap.to(this.cube_scene.rotation, 2, {
            y: 0,
            ease: Circ.easeOut
        });
        setTimeout(() => {
            for (let key in cube.industries_array) {
                let gltf_obj = cube.industries_array[key];
                let nx = gltf_obj.coords[0];
                let nz = gltf_obj.coords[1];
                setTimeout(() => {
                    gsap.to(gltf_obj.scene.position, 1, {
                        x: nx,
                        z: nz,
                        ease: Circ.easeOut
                    });
                    gsap.to(gltf_obj.scene.scale, 1, {
                        x: 0.4,
                        y: 0.4,
                        z: 0.4,
                        ease: Circ.easeOut
                    });
                }, i * 300);
                i++;
            }
        }, 1500);

    }
    outro(callback_func) {
        let cube = this;
        let i = 0;
        for (let key in cube.industries_array) {
            let gltf_obj = cube.industries_array[key];
            setTimeout(() => {

                gsap.to(gltf_obj.scene.position, 1, {
                    x: 0,
                    z: 0,
                    ease: Circ.easeOut
                });
                gsap.to(gltf_obj.scene.scale, 1, {
                    x: 0.01,
                    y: 0.01,
                    z: 0.01,
                    ease: Circ.easeOut
                });
            }, i * 100);
            i++;
        }

        setTimeout(() => {
            gsap.to(this.cube_scene.scale, 1, {
                x: 0.01,
                y: 0.01,
                z: 0.01,
                ease: Circ.easeOut
            });
            gsap.to(this.cube_scene.rotation, 1, {
                y: THREE.Math.degToRad(360),
                ease: Circ.easeOut,
                onComplete: () => {
                    window.ess_cube_transitioning = false;
                    this.hidden = true;
                    this.el_canvas.classList.add('hiddendiv');
                    if (callback_func !== "undefined")
                        callback_func();
                }
            });
        }, 400);

    }




    fadein() {

        //fades in the whole container in case we're not on homepage
        this.scene_ready.then(() => {

            this.hidden = false;
            this.__render_scene();

            if (!this.ishomepage) {
                if (this.main_container)
                    this.main_container.classList.add('ess-blured-content');
                this.el_container.style.opacity = 0;
                this.el_container.style.display = 'block';
                gsap.to(this.el_container, 0.2, {
                    opacity: 1
                });
            }

            this.cube_scene.scale.x = 0.4;
            this.cube_scene.scale.y = 0.4;
            this.cube_scene.scale.z = 0.4;
            this.cube_scene.rotation.y = 0;

            this.el_canvas.classList.remove('hiddendiv');
            this.el_canvas.style.display = 'block';
            this.el_canvas.classList.remove('off-stage');
            this.el_canvas.classList.add('on-stage');

            let cube = this;


            gsap.to(this.cube_scene.scale, 0.5, {
                x: 1,
                y: 1,
                z: 1,
                ease: Circ.easeOut,
                onComplete: function() {
                    window.ess_cube_transitioning = false;
                }
            });
            for (let key in cube.industries_array) {

                let item = cube.industries_array[key];
                let nx = item.coords[0];
                let nz = item.coords[1];
                gsap.to(item.scene.position, 0.5, {
                    x: nx,
                    z: nz,
                    ease: Circ.easeOut
                });
                gsap.to(item.scene.scale, 0.5, {
                    x: 0.4,
                    y: 0.4,
                    z: 0.4,
                    ease: Circ.easeOut
                });
            }
        });
    }
    fadeout() {
        this.scene_ready.then(() => {
            //fades in the whole container in case we're not on homepage
            let cube = this;
            if (!this.ishomepage) {
                if (this.main_container)
                    this.main_container.classList.remove('ess-blured-content');

                gsap.to(this.el_container, 0.3, {
                    opacity: 0,
                    onComplete: () => {
                        cube.el_container.style.display = 'none';
                    }
                });

            }
            for (let key in cube.industries_array) {
                let gltf_obj = cube.industries_array[key];
                gsap.to(gltf_obj.scene.position, 0.3, {
                    x: 0,
                    z: 0,
                    ease: Circ.easeOut
                });
                gsap.to(gltf_obj.scene.scale, 0.3, {
                    x: 0.01,
                    y: 0.01,
                    z: 0.01,
                    ease: Circ.easeOut
                });
            }
            this.el_canvas.classList.remove('on-stage');
            this.el_canvas.classList.add('off-stage');

            gsap.to(this.cube_scene.scale, 0.3, {
                x: 0.4,
                y: 0.4,
                z: 0.4,
                ease: Circ.easeOut,
                onComplete: () => {
                    this.hidden = true;
                    console.log('isactive false');
                    console.log(this);
                    window.ess_cube_transitioning = false;
                }
            });
        });
    }


    __test_globals() {
        if (!window.vw) {
            throw 'global mind variables needed';
        }
    }


    __onDocumentMouseMove(event) {
        // the following line would stop any other event handler from firing
        // (such as the mouse's TrackballControls)
        // event.preventDefault();

        // update the mouse variable
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    __get_axes() {
        const axesHelper = new THREE.AxesHelper(20);
        this.scene.add(axesHelper);
    }
    __get_font() {
        let cube = this;
        let loader = new THREE.FontLoader();
        loader.load(
            // resource URL
            this.sources_array.url_font,

            // onLoad callback
            function(font) {
                // do something with the font
                cube.font = font;
            },


            // onProgress callback
            function(xhr) {},

            // onError callback
            function(err) {
                console.log('An error happened');
            }
        );
    }
    __get_inside_cube() {

        /*let geometry = new THREE.BoxGeometry(13.7, 14.5, 13.7);
        let cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            lights: false,
            color: new THREE.Color("#0f2a56"),
            opacity: 0.8,
            transparent: true,
        }));
        cube.position.y = 1.5;
        cube.castShadow = true;
        cube.receiveShadow = true;*/

        let geometry = new THREE.BoxGeometry(13.7, 14.5, 13.7);
        let cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            //lights: false,
            color: new THREE.Color("#0f2a56"),
            opacity: 0,
            transparent: true,
        }));
        cube.position.y = 1.5;
        cube.castShadow = true;
        cube.receiveShadow = true;

        return cube;
    }
    __get_loader_status_array() {
        let arr = [];
        arr.cube = false;
        arr.automotive = false;
        arr.environment = false;
        arr.oil = false;
        arr.cube_texture = false;
        arr.font = false;
        return arr;
    }
    __render_scene() {
        if (!this.hidden) {

            this.i++;
            if (this.mouse_previous == this.mouse.x_relative) {
                if (!this.stop_delaying) {
                    this.stop_delaying = true;
                    this.tm = setTimeout(() => {
                        let velocity = this.cube_rotation_value;
                        if (velocity < 0)
                            velocity *= -1;

                        this.velocityTween = new TweenLite(this, velocity * 100, {
                            cube_rotation_value: 0
                        });
                    }, 1 * 500);
                }
            } else {
                this.cube_stopped = false;
                this.stop_delaying = false;
                this.mouse_previous = this.mouse.x_relative;
                if (this.tm)
                    clearTimeout(this.tm);
                if (this.velocityTween) {
                    this.velocityTween.kill();
                    this.velocityTween = null;
                }
            }

            let d = this.clock.getDelta();

            for (let $i = 0; $i < this.mixer_arr.length; $i++) {
                this.mixer_arr[$i].update(d);
            }

            if (this.cube_scene) {
                if (!this.cube_stopped) {
                    this.cube_scene.rotation.y -= this.cube_rotation_value;
                }

            }
            if (this.controls)
                this.controls.update();

            this.renderer.render(this.scene, this.camera);

            this.__make_interactive();

            requestAnimationFrame(() => {
                this.__render_scene();
            });
        };
    }
    __get_mouse_coords() {
        this.el_canvas.addEventListener("mousemove", (mouseEvent) => {
            let max = window.innerWidth / 2;
            let mouseX = mouseEvent.clientX;

            let mouse_relative = mouseX - max;
            this.cube_rotation_value = this.cube_max_speed * mouse_relative / max;
        });

    }
    __get_the_camera() {
        this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.y = 47;
        this.camera.position.z = 10;
        this.camera.rotation.x = THREE.Math.degToRad(100);
        this.camera.rotation.y = THREE.Math.degToRad(180);
    }
    __get_test_plane() {
        const geometry = new THREE.PlaneGeometry(200, 200, 1, 1);

        const plane = new THREE.Mesh(geometry, this.material);
        plane.position.z = -2.6;
        this.scene.add(plane);
    }
    __get_the_cube() {

        this.cube_stopped = false;

        var loader = new GLTFLoader();
        loader.load(this.source, (gltf) => {

                this.cube_scene = gltf.scene;
                this.cube_scene = gltf.scene;
                this.cube_scene.rotation.x = THREE.Math.degToRad(90);
                this.cube_scene.position.y = -4;

                this.cube_scene.scale.x = 0.1;
                this.cube_scene.scale.y = 0.1;
                this.cube_scene.scale.z = 0.1;

                this.cube_scene.rotation.y = THREE.Math.degToRad(360);


                this.__apply_material(this.cube_scene, this.material, true);
                this.scene.add(this.cube_scene);

                this.__propper_sides();

                //inserts new dark blue cube but only on homepage
                if (this.ishomepage)
                    this.cube_scene.add(this.__get_inside_cube());

            },
            // called while loading is progressing
            function(xhr) {


            },
            // called when loading has errors
            function(error) {

                console.log(error);

            }
        );
    }

    __get_industry(name, source, coords) {
        let loader_fun = new GLTFLoader();
        loader_fun.load(source, (gltf) => {

                if (gltf.animations.length > 0) {
                    let M = new THREE.AnimationMixer(gltf.scene);
                    this.mixer_arr.push(M);
                    for (let i = 0; i < gltf.animations.length; i++) {
                        let action = M.clipAction(gltf.animations[i]);
                        action.play();
                    }
                }

                let sc = gltf.scene;

                // GET TEXT -----------------

                let geometry = new THREE.TextGeometry(name.toUpperCase(), {
                    font: this.font,
                    size: 0.6,
                    height: 0.1,
                    curveSegments: 6,
                    bevelEnabled: true,
                    bevelThickness: 0,
                    bevelSize: 0.005,
                    bevelOffset: 0,
                    bevelSegments: 0
                });
                geometry = new THREE.BufferGeometry().fromGeometry(geometry);
                let text = new THREE.Mesh(geometry, this.industry_mat);
                text.rotation.y = THREE.Math.degToRad(180);
                //text.rotation.x = THREE.Math.degToRad(90);
                //text.position.x = coords[0];


                //text.position.x = 20;

                sc.add(text);

                this.scene.add(sc);
                this.industries.push(sc);

                sc.rotation.x = THREE.Math.degToRad(90);
                sc.wish_x = coords[0];
                sc.wish_z = coords[1];

                sc.position.x = 0;
                sc.position.z = 0;
                sc.scale.set(0.01, 0.01, 0.01);

                this.__apply_material(sc, this.industry_mat, false);

                //this.scene.add(sc); part of intro function now

            },
            // called while loading is progressing
            function(xhr) {


            },
            // called when loading has errors
            function(error) {
                console.log(error);

            }

        );
    }
    __make_interactive() {
        if (this.cube_scene) {

            var vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 1);
            vector.unproject(this.camera);
            var ray = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize());


            //var intersects = ray.intersectObjects(this.cube_meshes);
            var intersects = ray.intersectObjects(this.interactive_objects_array);


            if (intersects.length > 0) {

                // change cursor to pointer
                document.body.style.cursor = 'pointer';

                // if the closest object intersected is not the currently stored intersection object
                if (intersects[0].object != this.INTERSECTED) {



                    // restore previous intersection object (if it exists) to its original color
                    if (this.INTERSECTED) {
                        //this.INTERSECTED.material.color.setHex(this.INTERSECTED.currentHex);
                        switch (this.INTERSECTED.ess_type) {
                            case 'cube':
                                //this.cube_stopped = true; // stops the cube on hover
                                if (this.INTERSECTED.shift_axis == 'x') {
                                    gsap.to(this.INTERSECTED.parent.scale, 0.5, {
                                        x: 1
                                    });
                                } else {
                                    gsap.to(this.INTERSECTED.parent.scale, 0.5, {
                                        z: 1
                                    });
                                }
                                break;

                            case 'industry':
                                this.__scene_loop('industry', this.INTERSECTED.interactive_group, this.blue_material);
                                gsap.to(this.INTERSECTED.interactive_group.rotation, 0.3, {
                                    y: 0
                                });
                                break;
                        }
                    }

                    // store reference to closest object as current intersection object
                    this.INTERSECTED = intersects[0].object;
                    // store color of closest object (for later restoration)
                    //this.INTERSECTED.currentHex = this.INTERSECTED.material.color.getHex();

                    // set a new color for closest object
                    // this.INTERSECTED.material.color.setHex(0x73d3ff);
                    switch (this.INTERSECTED.ess_type) {
                        case 'cube':
                            //this.cube_stopped = true; // stops the cube on hover
                            if (this.INTERSECTED.shift_axis == 'x') {
                                gsap.to(this.INTERSECTED.parent.scale, 0.5, {
                                    x: this.INTERSECTED.shift_value * -1
                                });
                            } else {
                                gsap.to(this.INTERSECTED.parent.scale, 0.5, {
                                    z: this.INTERSECTED.shift_value * -1
                                });
                            }
                            break;

                        case 'industry':
                            this.__scene_loop('industry', this.INTERSECTED.interactive_group, this.white_material);
                            gsap.to(this.INTERSECTED.interactive_group.rotation, 0.3, {
                                y: THREE.Math.degToRad(37)
                            });
                            break;
                    }

                }
            } else // there are no intersections
            {
                // restore cursor to default
                document.body.style.cursor = 'default';
                // restore previous intersection object (if it exists) to its original color
                if (this.INTERSECTED) {
                    switch (this.INTERSECTED.ess_type) {
                        case 'cube':
                            //this.cube_stopped = true; // stops the cube on hover
                            if (this.INTERSECTED.shift_axis == 'x') {
                                gsap.to(this.INTERSECTED.parent.scale, 0.5, {
                                    x: 1
                                });
                            } else {
                                gsap.to(this.INTERSECTED.parent.scale, 0.5, {
                                    z: 1
                                });
                            }
                            break;

                        case 'industry':
                            this.__scene_loop('industry', this.INTERSECTED.interactive_group, this.blue_material);
                            gsap.to(this.INTERSECTED.interactive_group.rotation, 0.3, {
                                y: 0
                            });
                            break;
                    }
                }
                // remove previous intersection object reference
                //     by setting current intersection object to "nothing"
                this.INTERSECTED = null;

                //this.cube_stopped = false;
            }
        }
    }
    __make_transparent_mat() {
        return new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0
        });
    }

    __insert_pivot(mesh, axis, value) {

        let pivot = new THREE.Object3D();
        pivot.position[axis] = value;
        mesh.position[axis] = value * -1;
        pivot.add(mesh);
        this.cube_scene.add(pivot);
    }
}