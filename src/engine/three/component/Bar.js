define(['./html2Texture'], function(html2Texture) {
	function Bar(length, width, height, color) {
		THREE.Group.call(this);

		var box = this.box = (function(geom) {
			var geom = new THREE.BoxGeometry(width,length, 100);
			geom.rotateX(-0.5 * Math.PI);
			var material = new THREE.MeshLambertMaterial({
				color: new THREE.Color(color),
				combine: THREE.MultiplyOperation,
				reflectivity: 1
			});
			var result = new THREE.Mesh(geom, material);
			return result;
		})();
		box.castShadow = true;
		box.receiveShadow = true;
		box.scale.y = height/100;
		this.add(box);
	}
	Bar.prototype = Object.create(THREE.Group.prototype);
	Bar.prototype.constructor = Bar;
	Bar.prototype.update = function(length, width, height, color){
		var oldGeometry = this.box.geometry;
		var geom = new THREE.BoxGeometry(width,length, 100);
		geom.rotateX(-0.5 * Math.PI);
		this.box.geometry = geom;
		oldGeometry.dispose();
		this.box.scale.y = height/100;
		this.box.material.color = new THREE.Color(color);
		this.box.material.needsUpdate = true;
	};
	Bar.prototype.dispose = function(){
		this.box.geometry.dispose();
		this.box.material.map.dispose();
		this.box.material.dispose();
	}
	return Bar;
})