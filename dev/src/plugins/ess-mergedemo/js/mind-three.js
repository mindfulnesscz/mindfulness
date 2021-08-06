/*jshint esversion: 6 */

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import CameraControls from "camera-controls";

export default class MindDee {
  constructor($canvas, settings) {
    //this.dracopath = 'https://www.essteyr.com/wp-content/plugins/ess_merge-demo/js/draco/';
    //this.dracopath = 'http://localhost/essteyr.com/wp-content/plugins/ess_merge-demo/js/draco/';
    this.dracopath = "https://www.gstatic.com/draco/versioned/decoders/1.4.1/";

    //html dom element to which the scene is rendered
    this.$canvas = $canvas;

    this.wirecolor = settings.wirecolor;

    //callbaks

    this.onLoadStart =
      typeof settings.onLoadStart !== "undefined"
        ? settings.onLoadStart
        : function () {};
    this.onGeometryLoaded =
      typeof settings.onGeometryLoaded !== "undefined"
        ? settings.onGeometryLoaded
        : function () {};
    this.onGeometryFailed =
      typeof settings.onGeometryFailed !== "undefined"
        ? settings.onGeometryFailed
        : function () {};

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.shadowMap.enabled = true;

    this.renderer.gammaOutput = true;

    this.renderer.gammaFactor = 1;

    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.clock = new THREE.Clock();

    this.loader = this.__initLoader();

    //this.renderer.setSize(this.$canvas.offsetWidth, this.$canvas.offsetHeight);
    this.i = 0;
    this.$canvas.append(this.renderer.domElement);

    this.__get_the_camera();
    this.__get_light_and_shadows();
    this.__render_scene();

    this.wireframe_on = settings.wireframe_on;
  }
  reset_camera() {
    this.cameraControls.fromJSON(this.cameraDefault);

    window.GlobalCameraObject.camData = this.cameraDefault;
    this.isWatching = true;
  }
  __initLoader() {
    var loader = new GLTFLoader();
    var draco = new DRACOLoader();

    // From v. 1.1 dracopath is automatically set
    draco.setDecoderPath(this.dracopath);

    loader.setDRACOLoader(draco);

    return loader;
  }
  __get_wireframe(mesh) {
    let clone = mesh.clone();

    let wirecolor;
    if (this.wirecolor == "white") wirecolor = 0xffffff;
    else wirecolor = 0x111111;

    clone.material = new THREE.MeshBasicMaterial({
      color: wirecolor,

      wireframe: true,
    });

    mesh.material.polygonOffset = true;
    mesh.material.polygonOffsetFactor = 0.5;
    mesh.material.polygonOffsetUnits = 0.5;

    this.wireframe_array.push(clone);
    if (!this.wireframe_on) clone.visible = false;
  }
  __hide_wireframe() {
    this.wireframe_on = false;
    for (let i = 0; i < this.wireframe_array.length; i++) {
      this.wireframe_array[i].visible = false;
    }
  }
  __show_wireframe() {
    this.wireframe_on = true;
    for (let i = 0; i < this.wireframe_array.length; i++) {
      this.wireframe_array[i].visible = true;
    }
  }
  __get_the_material() {
    this.material = new THREE.MeshPhongMaterial();

    //this.material = new THREE.MeshBasicMaterial();

    this.material.needsUpdate = true;

    this.material.color = new THREE.Color(0x74c5fb);

    if (this.normal) {
      let loader = new THREE.TextureLoader();

      loader.load(
        this.normal,

        (normal) => {
          this.normal = normal;
          this.normal.encoding = THREE.sRGBEncoding;
          this.normal.flipY = false;
          this.normal.wrapS = THREE.RepeatWrapping;
          this.normal.wrapT = THREE.RepeatWrapping;
          this.normal.repeat.set(1, 1);
          this.material.normalMap = this.normal;
          this.material.needsUpdate = true;
          this.material.normalMap.needsUpdate = true;
        },
        undefined,

        (_err) => {
          console.error("An error happened. Texture not loaded");
        }
      );
    }
    if (this.texture) {
      let loader = new THREE.TextureLoader();
      loader.load(
        this.texture,
        (texture) => {
          console.log("materieal loooadddeeeed");
          this.texture = texture;
          this.texture.encoding = THREE.sRGBEncoding;
          this.texture.flipY = false;
          this.texture.wrapS = THREE.RepeatWrapping;
          this.texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(1, 1);
          this.material.map = texture;
          this.material.needsUpdate = true;
          this.material.map.needsUpdate = true;
        },
        undefined,

        (err) => {
          console.error("An error happened. Texture not loaded");
        }
      );
    }
  }
  __get_light_and_shadows() {
    var light = new THREE.HemisphereLight("#d3d3d0", "#a7bfdb", 1);
    this.spotLight = new THREE.SpotLight("#fff", 1, 50, 0.8, 0.15, 2);
    this.spotLight.shadow.radius = 6;
    this.spotLight.shadow.mapSize.width = 4096;
    this.spotLight.shadow.mapSize.height = 4096;
    this.spotLight.position.set(0, 30, 10);
    this.spotLight.target.position.set(0, 0, 0);

    this.spotLight.castShadow = true;

    this.scene.add(light);
    this.scene.add(this.spotLight);
  }
  __get_axes() {
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);
  }

  __render_scene() {
    const delta = this.clock.getDelta();

    if (this.isWatching) {
      if (window.GlobalCameraObject.camData) {
        this.cameraControls.fromJSON(window.GlobalCameraObject.camData, false);
      }
    } else {
      window.GlobalCameraObject.camData = this.cameraControls.toJSON();
    }

    const hasControlsUpdated = this.cameraControls.update(delta);

    // you can skip this condition to render though
    if (hasControlsUpdated) {
      this.renderer.render(this.scene, this.camera);
    } else if (this.geomFreshLoaded) {
      this.renderer.render(this.scene, this.camera);
    }

    if (this.mixer) {
      this.mixer.update(delta);
    }

    requestAnimationFrame(() => {
      this.__render_scene();
    });
  }

  __get_the_camera() {
    CameraControls.install({
      THREE: THREE,
    });
    this.isWatching = true;

    this.camera = new THREE.PerspectiveCamera(
      30,
      this.$canvas.offsetWidth / this.$canvas.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.y = 30;
    this.camera.position.z = 2;
    this.camera.rotation.x = THREE.Math.degToRad(85);
    this.camera.rotation.y = THREE.Math.degToRad(180);

    this.cameraControls = new CameraControls(
      this.camera,
      this.renderer.domElement
    );
    this.cameraControls.dampingFactor = 0.5;
    this.cameraControls.draggingDampingFactor = 0.5;
    this.cameraControls.minPolarAngle = -Infinity;
    this.cameraControls.maxPolarAngle = Infinity;
    this.cameraControls.verticalDragToForward = true;
    this.cameraControls.mouseButtons.middle = CameraControls.ACTION.DOLLY;
    this.cameraControls.mouseButtons.right = CameraControls.ACTION.NONE;
    this.cameraControls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;

    this.cameraControls.addEventListener(
      "controlstart",
      () => (this.isWatching = false)
    );
    this.cameraControls.addEventListener(
      "controlend",
      () => (this.isWatching = true)
    );

    window.addEventListener("resize", () => {
      this.camera.aspect = this.$canvas.offsetWidth / this.$canvas.offsetHeight;
      this.camera.updateProjectionMatrix();
    });

    this.cameraDefault = this.cameraControls.toJSON();
    console.log(this.cameraDefault);
  }

  __get_test_plane() {
    const geometry = new THREE.PlaneGeometry(200, 200, 1, 1);

    const plane = new THREE.Mesh(geometry, this.material);
    plane.position.z = -2.6;
    this.scene.add(plane);
  }
  loadGeometry(url, shading) {
    // on start callback

    this.onLoadStart();

    this.loader.load(
      // resource URL
      url,

      // called when the resource is loaded
      (gltf) => {
        this.geomFreshLoaded = true;

        if (gltf.animations.length > 0) {
          let M = new THREE.AnimationMixer(gltf.scene);

          this.mixer = M;

          for (let i = 0; i < gltf.animations.length; i++) {
            let action = M.clipAction(gltf.animations[i]);
            //action.setLoop(THREE.LoopOnce);
            action.play();
          }
        }

        this.geometry_scene = gltf.scene;
        this.geometry_scene.castShadow = true;
        this.geometry_scene.receiveShadow = true;

        this.scene.add(this.geometry_scene);

        if (shading == "wireframe") {
          this.wireframe_array = [];

          //gltf.scene.children.forEach ( this.__get_wireframe );
          for (let i = 0; i < gltf.scene.children.length; i++) {
            this.__get_wireframe(gltf.scene.children[i]);
          }

          for (let n = 0; n < this.wireframe_array.length; n++) {
            this.geometry_scene.add(this.wireframe_array[n]);
          }
        }
        this.onGeometryLoaded();
      },

      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      // called when loading has errors
      (error) => {
        console.log("There has been an error loading the geometry");
        console.log(error);

        this.onGeometryFailed();
      }
    );
  }
  remove_geometry() {
    this.scene.remove(this.geometry_scene);
  }

  __apply_material(node) {
    //console.log(node);
    if (node.isMesh) {
      node.material = this.material;
      node.castShadow = true;
      node.receiveShadow = true;
    }

    let children = node.children;

    for (let i = 0; i < children.length; i++) {
      let ch = children[i];

      this.__apply_material(ch);
    }
  }
}
