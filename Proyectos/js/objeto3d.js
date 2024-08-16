/* global AFRAME, THREE */
AFRAME.registerComponent('custom-model-viewer', {
    schema: {
      modelURL: { default: '' },
      displayTitle: { default: '' },
      enableUploadUI: { default: true }
    },
    
    init: function() {
      var el = this.el;
  
      el.setAttribute('renderer', { colorManagement: true });
      el.setAttribute('raycaster', { objects: '.interactive' });
      el.setAttribute('cursor', { rayOrigin: 'mouse', fuse: false });
      el.setAttribute('webxr', { optionalFeatures: 'hit-test, local-floor, light-estimation, anchors' });
      el.setAttribute('background', '');
  
      this.handleModelLoaded = this.handleModelLoaded.bind(this);
  
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseWheel = this.handleMouseWheel.bind(this);
  
      this.handleTouchMove = this.handleTouchMove.bind(this);
      this.handleTouchEnd = this.handleTouchEnd.bind(this);
  
      this.handleSubmitURL = this.handleSubmitURL.bind(this);
  
      this.handleThumbstickMoved = this.handleThumbstickMoved.bind(this);
  
      this.handleEnterVR = this.handleEnterVR.bind(this);
      this.handleExitVR = this.handleExitVR.bind(this);
  
      this.handleLaserMouseDown = this.handleLaserMouseDown.bind(this);
      this.handleLaserMouseUp = this.handleLaserMouseUp.bind(this);
  
      this.handleOrientationChange = this.handleOrientationChange.bind(this);
  
      this.setupCameraRig();
      this.setupEntities();
      this.setupBackground();
  
      if (this.data.enableUploadUI) {
        this.setupUploadInput();
      }
  
      this.el.sceneEl.canvas.oncontextmenu = function(evt) { evt.preventDefault(); };
  
      window.addEventListener('orientationchange', this.handleOrientationChange);
  
      this.laserHitPanel.addEventListener('mousedown', this.handleLaserMouseDown);
      this.laserHitPanel.addEventListener('mouseup', this.handleLaserMouseUp);
  
      this.leftHand.addEventListener('thumbstickmoved', this.handleThumbstickMoved);
      this.rightHand.addEventListener('thumbstickmoved', this.handleThumbstickMoved);
  
      document.addEventListener('mouseup', this.handleMouseUp);
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mousedown', this.handleMouseDown);
      document.addEventListener('wheel', this.handleMouseWheel);
  
      document.addEventListener('touchend', this.handleTouchEnd);
      document.addEventListener('touchmove', this.handleTouchMove);
  
      this.el.sceneEl.addEventListener('enter-vr', this.handleEnterVR);
      this.el.sceneEl.addEventListener('exit-vr', this.handleExitVR);
  
      this.model.addEventListener('model-loaded', this.handleModelLoaded);
    },
  
    setupUploadInput: function() {
      var container = this.uploadContainer = document.createElement('div');
      var input = this.inputField = document.createElement('input');
      var button = this.submitButton = document.createElement('button');
      var style = document.createElement('style');
      var css = `
        bottom: 20px; left: 15%; right: 15%; position: absolute; color: white;
        font-size: 12px; line-height: 12px; border: none;
        border-radius: 5px;
        .upload-model.hidden { display: none; }
        .upload-model-button:hover { border-color: #ef2d5e; color: #ef2d5e; }
        .upload-model-input { color: #666; vertical-align: middle; padding: 0px 10px 0 10px; text-transform: uppercase; border: 0; width: 75%; height: 100%; border-radius: 10px; margin-right: 10px; }
        @media only screen and (max-width: 800px) {
          .upload-model { margin: auto; }
          .upload-model-input { width: 70%; }
        }
        @media only screen and (max-width: 700px) {
          .upload-model { display: none; }
        }
      `;
  
      if (AFRAME.utils.device.checkARSupport()) {
        css += `
          @media only screen and (max-width: 800px) {
            .upload-model-input { width: 60%; }
          }
        `;
      }
  
      container.classList.add('upload-model');
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.getElementsByTagName('head')[0].appendChild(style);
  
      button.classList.add('upload-model-button');
      button.innerHTML = 'LOAD MODEL';
      button.addEventListener('click', this.handleSubmitURL);
  
      input.classList.add('upload-model-input');
      input.onfocus = function() {
        if (this.value !== inputDefaultValue) { return; }
        this.value = '';
      };
      input.onblur = function() {
        if (this.value) { return; }
        this.value = inputDefaultValue;
      };
  
      this.el.sceneEl.addEventListener('infomessageopened', function() {
        container.classList.add('hidden');
      });
      this.el.sceneEl.addEventListener('infomessageclosed', function() {
        container.classList.remove('hidden');
      });
  
      input.value = inputDefaultValue;
  
      container.appendChild(input);
      container.appendChild(button);
  
      this.el.sceneEl.appendChild(container);
    },
  
    update: function() {
      if (!this.data.modelURL) { return; }
      this.el.setAttribute('ar-hit-test', { target: '#model', type: 'map' });
      this.model.setAttribute('gltf-model', this.data.modelURL);
    },
  
    handleSubmitURL: function() {
      var modelURL = this.inputField.value;
      if (modelURL === this.inputDefaultValue) { return; }
      this.el.setAttribute('custom-model-viewer', 'modelURL', modelURL);
    },
  
    setupCameraRig: function() {
      var rig = this.cameraRig = document.createElement('a-entity');
      var camera = this.camera = document.createElement('a-entity');
      var rightHand = this.rightHand = document.createElement('a-entity');
      var leftHand = this.leftHand = document.createElement('a-entity');
  
      camera.setAttribute('camera', { fov: 60 });
      camera.setAttribute('look-controls', {
        magicWindowTrackingEnabled: false,
        mouseEnabled: false,
        touchEnabled: false
      });
  
      rightHand.setAttribute('rotation', '0 90 0');
      rightHand.setAttribute('laser-controls', { hand: 'right' });
      rightHand.setAttribute('raycaster', { objects: '.interactive' });
      rightHand.setAttribute('line', { color: '#118A7E' });
  
      leftHand.setAttribute('rotation', '0 90 0');
      leftHand.setAttribute('laser-controls', { hand: 'right' });
      leftHand.setAttribute('raycaster', { objects: '.interactive' });
      leftHand.setAttribute('line', { color: '#118A7E' });
  
      rig.appendChild(camera);
      rig.appendChild(rightHand);
      rig.appendChild(leftHand);
  
      this.el.appendChild(rig);
    },
  
    setupBackground: function() {
      var background = this.background = document.querySelector('a-entity');
      background.setAttribute('geometry', { primitive: 'sphere', radius: 100 });
      background.setAttribute('material', {
        shader: 'background-gradient',
        colorTop: '#d1f6f3',
        colorBottom: '#2786e1',
        side: 'back'
      });
      background.setAttribute('hide-on-enter-ar', '');
    },
  
    setupEntities: function() {
      var container = this.entityContainer = document.createElement('a-entity');
      var laserHitPanel = this.laserHitPanel = document.createElement('a-entity');
      var modelPivot = this.modelPivot = document.createElement('a-entity');
      var model = this.model = document.createElement('a-entity');
      var shadow = this.shadow = document.createElement('a-entity');
      var arShadow = this.arShadow = document.createElement('a-entity');
      var title = this.title = document.createElement('a-entity');
      var light = this.light = document.createElement('a-entity');
      var sceneLight = this.sceneLight = document.createElement('a-entity');
  
      sceneLight.setAttribute('light', {
        type: 'hemisphere',
        intensity: 1
      });
      sceneLight.setAttribute('hide-on-enter-ar', '');
  
      modelPivot.id = 'modelPivot';
  
      this.el.appendChild(sceneLight);
  
      laserHitPanel.id = 'laserHitPanel';
      laserHitPanel.setAttribute('position', '0 0 -10');
      laserHitPanel.setAttribute('geometry', 'primitive: plane; width: 30; height: 20');
      laserHitPanel.setAttribute('material', 'color: red');
      laserHitPanel.setAttribute('visible', 'false');
      laserHitPanel.classList.add('interactive');
  
      this.entityContainer.appendChild(laserHitPanel);
  
      model.setAttribute('rotation', '0 -30 0');
      model.setAttribute('animation-mixer', '');
      model.setAttribute('shadow', 'cast: true; receive: false');
      model.setAttribute('scale', '0.04 0.04 0.04');
      model.id = 'model';
  
      shadow.setAttribute('geometry', 'primitive: plane; width: 100; height: 100');
      shadow.setAttribute('rotation', '-90 0 0');
      shadow.setAttribute('material', {
        shader: 'shadow',
        opacity: 0.3
      });
      shadow.setAttribute('visible', false);
      shadow.setAttribute('hide-on-enter-ar', '');
  
      arShadow.setAttribute('geometry', 'primitive: plane; width: 1; height: 1');
      arShadow.setAttribute('rotation', '-90 0 0');
      arShadow.setAttribute('material', 'shader: shadow');
      arShadow.setAttribute('visible', true);
      arShadow.setAttribute('hide-on-exit-ar', '');
      arShadow.setAttribute('shadow', 'receive: true');
  
      light.setAttribute('light', {
        type: 'directional',
        intensity: 1,
        castShadow: true
      });
      light.setAttribute('position', '-2 4 4');
      light.setAttribute('target', model);
  
      title.setAttribute('text', {
        value: this.data.displayTitle,
        color: 'white',
        side: 'double',
        wrapCount: 30,
        width: 6
      });
      title.setAttribute('position', '0 -0.75 0');
  
      modelPivot.appendChild(model);
      container.appendChild(modelPivot);
      container.appendChild(shadow);
      container.appendChild(arShadow);
      container.appendChild(title);
      container.appendChild(light);
      this.el.appendChild(container);
    },
  
    handleOrientationChange: function() {
      this.inputField.blur();
    },
  
    handleEnterVR: function() {
      var scene = this.el.sceneEl;
      var vrDisplay = scene.renderer.vr.getDevice();
      if (!vrDisplay.isPresenting) { return; }
      this.uploadContainer.classList.add('hidden');
      scene.renderer.xr.enabled = true;
    },
  
    handleExitVR: function() {
      var scene = this.el.sceneEl;
      this.uploadContainer.classList.remove('hidden');
      scene.renderer.xr.enabled = false;
    },
  
    handleLaserMouseDown: function() {
      this.cameraRig.setAttribute('movement-controls', { enabled: false });
    },
  
    handleLaserMouseUp: function() {
      this.cameraRig.setAttribute('movement-controls', { enabled: true });
    },
  
    handleMouseDown: function(evt) {
      var scene = this.el.sceneEl;
      if (!scene.is('vr-mode') && !scene.is('ar-mode')) {
        evt.preventDefault();
        this.cameraRig.setAttribute('movement-controls', { enabled: false });
      }
    },
  
    handleMouseUp: function(evt) {
      var scene = this.el.sceneEl;
      if (!scene.is('vr-mode') && !scene.is('ar-mode')) {
        evt.preventDefault();
        this.cameraRig.setAttribute('movement-controls', { enabled: true });
      }
    },
  
    handleMouseMove: function(evt) {
      var canvas = this.el.sceneEl.canvas;
      var rect = canvas.getBoundingClientRect();
      this.cameraRig.object3D.rotation.y += evt.movementX / 400;
    },
  
    handleMouseWheel: function(evt) {
      var delta = evt.deltaY;
      this.cameraRig.object3D.position.z += delta * 0.01;
    },
  
    handleTouchMove: function(evt) {
      var touch = evt.touches[0];
      this.previousTouch = this.previousTouch || touch;
      this.deltaTouchX = touch.clientX - this.previousTouch.clientX;
      this.deltaTouchY = touch.clientY - this.previousTouch.clientY;
      this.previousTouch = touch;
    },
  
    handleTouchEnd: function(evt) {
      var canvas = this.el.sceneEl.canvas;
      var rect = canvas.getBoundingClientRect();
      this.cameraRig.object3D.rotation.y += this.deltaTouchX / 400;
      this.previousTouch = null;
    },
  
    handleThumbstickMoved: function(evt) {
      var scene = this.el.sceneEl;
      var cameraRig = this.cameraRig.object3D;
      if (evt.target !== this.rightHand) { return; }
      if (scene.is('vr-mode')) {
        cameraRig.rotation.y -= evt.detail.y * 0.1;
      }
    },
  
    handleModelLoaded: function() {
        var object3D = this.model.getObject3D('mesh');
        if (object3D) {
          var box = new THREE.Box3().setFromObject(object3D);
          var size = box.getSize(new THREE.Vector3());
          var maxDim = Math.max(size.x, size.y, size.z);
          var scale = (1 / maxDim) * 2;  // Multiplicamos por 2 para duplicar el tamaño
          object3D.scale.set(scale, scale, scale);
        }
      }
      
  });
  