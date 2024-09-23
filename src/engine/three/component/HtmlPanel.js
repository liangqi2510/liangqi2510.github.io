define(['./html2Texture'], function(html2Texture) {
	function HtmlPanel(html) {
		var self = this;
		this.html = html;
		var geometry = new THREE.PlaneGeometry(5, 5, 1);
		var material = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0,
			alphaTest: 0.05,
			depthTest:true,
			depthWrite:true,
			//blending:THREE.NoBlending,
			side: THREE.DoubleSide
		});
		THREE.Mesh.call(this, geometry, material);
		this.scale.set(0.33, 0.33, 0.33);
		html2Texture(html, function(texture) {
			self.material.map = texture;
			self.material.transparent = true;
			self.material.opacity = 1;
			self.material.needsUpdate = true;

			var oldGeometry = self.geometry;
			var geom = new THREE.PlaneGeometry(texture.image.width, texture.image.height, 1);
			geom.translate(texture.image.width/2,-texture.image.height/2,0);
			geom.verticesNeedUpdate = true;
			geom.elementsNeedUpdate = true;
			self.geometry = geom;
			oldGeometry.dispose();
		})
		this.renderOrder = 999;
	}
	HtmlPanel.prototype = Object.create(THREE.Mesh.prototype);
	HtmlPanel.prototype.constructor = HtmlPanel;
	HtmlPanel.prototype.update = function(html) {
		if (this.html !== html) {
			this.html = html;
			var self = this;
			html2Texture(html, function(texture) {
				self.material.map = texture;
				self.material.transparent = true;
				self.material.opacity = 1;
				self.material.needsUpdate = true;

				var oldGeometry = self.geometry;
				var geom = new THREE.PlaneGeometry(texture.image.width, texture.image.height, 1);
				geom.translate(texture.image.width/2,-texture.image.height/2,0);
				geom.verticesNeedUpdate = true;
				geom.elementsNeedUpdate = true;
				self.geometry = geom;
				oldGeometry.dispose();
			})
		}
	};
	HtmlPanel.prototype.dispose = function() {
		this.geometry.dispose();
		this.material.map.dispose();
		this.material.dispose();
	}
	return HtmlPanel;
})