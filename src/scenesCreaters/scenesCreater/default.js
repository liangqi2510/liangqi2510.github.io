define(function(require) {
	function creatScene(layer3d, container) {
		var renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		layer3d[0][0].appendChild(renderer.domElement);
		var width = $(layer3d[0][0]).width();
		var height = $(layer3d[0][0]).height();

		renderer.setSize(width, height);
		renderer.setClearColor(0xA0A0A0);
		renderer.shadowMapEnabled = true;
		var scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x050505, 1, 5000);
		scene.fog.color.setHSL(0.6, 0, 1);

		var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100000);
		//camera.position.x = 350;
		camera.position.y = 350;
		camera.position.z = 350;
		camera.lookAt(scene.position);

		var groundGeo = new THREE.PlaneBufferGeometry(10000, 10000);
		var groundMat = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			specular: 0x050505,
			opacity: 0.8,
			transparent: true
		});

		groundMat.color.setHSL(0.095, 1, 0.75);
		var ground = new THREE.Mesh(groundGeo, groundMat);
		ground.rotation.x = -Math.PI / 2;
		ground.position.y = -1;
		ground.receiveShadow = true;
		scene.add(ground);
		var ambientLight = new THREE.AmbientLight(0x303030); // 0.2
		var light = new THREE.DirectionalLight(0xffffff, 0.95);
		light.castShadow = true;
		light.shadowMapWidth = 2048;
		light.shadowMapHeight = 2048;
		var d = 500;
		light.shadowCameraLeft = -d;
		light.shadowCameraRight = d;
		light.shadowCameraTop = d;
		light.shadowCameraBottom = -d;
		light.shadowCameraFar = 3500;
		light.shadowBias = -0.0001;
		light.position.set(-500, 1000, 500);
		scene.add(ambientLight);
		scene.add(light);
		var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
		hemiLight.color.setHSL(0.6, 1, 0.6);
		hemiLight.groundColor.setHSL(0.095, 1, 0.75);
		hemiLight.position.set(0, 500, 0);
		scene.add(hemiLight);
		// SKYDOME
		var vertexShader = 'varying vec3 vWorldPosition; void main() { vec4 worldPosition = modelMatrix * vec4( position, 1.0 ); vWorldPosition = worldPosition.xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }';
		var fragmentShader = 'uniform vec3 topColor; uniform vec3 bottomColor; uniform float offset; uniform float exponent; varying vec3 vWorldPosition; void main() { float h = normalize( vWorldPosition + offset ).y; gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h , 0.0), exponent ), 0.0 ) ), 1.0 ); }';
		var uniforms = {
			topColor: {
				type: "c",
				value: new THREE.Color(0x0077ff)
			},
			bottomColor: {
				type: "c",
				value: new THREE.Color(0xffffff)
			},
			offset: {
				type: "f",
				value: 33
			},
			exponent: {
				type: "f",
				value: 0.6
			}
		};
		uniforms.topColor.value.copy(hemiLight.color);
		scene.fog.color.copy(uniforms.bottomColor.value);
		var skyGeo = new THREE.SphereGeometry(4000, 32, 15);
		var skyMat = new THREE.ShaderMaterial({
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			uniforms: uniforms,
			side: THREE.BackSide
		});
		var sky = new THREE.Mesh(skyGeo, skyMat);
		scene.add(sky);

		var controls = new THREE.TrackballControls(camera, container[0][0]);
		controls.minDistance = 0.0;
		controls.maxDistance = 500.0;
		controls.dynamicDampingFactor = 0.1;

		var groundMirror = new THREE.Mirror(renderer, camera, {
			clipBias: 0.003,
			textureWidth: width,
			textureHeight: height,
			color: 0x777777
		});

		// MIRROR planes
		var mirrorMesh = new THREE.Mesh(groundGeo, groundMirror.material);
		mirrorMesh.add(groundMirror);
		mirrorMesh.rotateX(-Math.PI / 2);
		scene.add(mirrorMesh);
		mirrorMesh.position.y = -1;

		var render = function() {
			controls.update();
			if (camera.position.y < 10) {
				camera.position.y = 10;
			}
			groundMirror.render();
			renderer.render(scene, camera);
			requestAnimationFrame(render);
		};
		render();
		window.addEventListener('resize', onWindowResize, false);

		function onWindowResize() {
			var width = $(layer3d[0][0]).width();
			var height = $(layer3d[0][0]).height();
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		}
		return scene;
	}
	creatScene.prototype.name = 'default';
	return creatScene;
});