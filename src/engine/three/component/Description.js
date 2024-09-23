define(['./html2Texture'], function(html2Texture) {
	function Description(title, subtitle, description) {
		this.title = title;
		this.subtitle = subtitle;
		this.description = description;
		THREE.Group.call(this);
		var template = [
			'<div style = "width: 512px;height: 512px;overflow: hidden;">',
			'	<div style = "color: #71BACA;font-size: 60px;font-weight: 900;text-align: center;">{{=it.title}}</div>',
			'	<div style = "color: #62BFE1;font-size: 40px;text-align: center;">{{=it.subtitle}}</div>',
			'	<div style = "padding: 20px;line-height: 35px;font-size: 30px;color: #000000">',
			'		{{=it.description}}',
			'	</div>',
			'</div>'
		].join('');

		var templateFn = doT.template(template);
		var html = templateFn({
			title: title,
			subtitle: subtitle,
			description: description
		});
		var material = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0,
			alphaTest: 0.05,
			side: THREE.DoubleSide
		});
		var textPlane = new THREE.Mesh(new THREE.PlaneGeometry(350, 250, 1), material);
		html2Texture(html, function(texture) {
			material.map = texture;
			material.opacity = 1;
			material.needsUpdate = true;
		})
		textPlane.renderOrder = 999;
		this.textPlane = textPlane;
		this.add(textPlane);
	}
	Description.prototype = Object.create(THREE.Group.prototype);
	Description.prototype.constructor = Description;
	Description.prototype.update = function(title, subtitle, description) {
		if (this.title !== title ||
			this.subtitle !== subtitle ||
			this.description !== description) {
			this.title = title;
			this.subtitle = subtitle;
			this.description = description;

			var template = [
				'<div style = "width: 512px;height: 512px;overflow: hidden;">',
				'	<div style = "color: #71BACA;font-size: 60px;font-weight: 900;text-align: center;">{{=it.title}}</div>',
				'	<div style = "color: #62BFE1;font-size: 40px;text-align: center;">{{=it.subtitle}}</div>',
				'	<div style = "padding: 20px;line-height: 35px;font-size: 30px;color: #000000">',
				'		{{=it.description}}',
				'	</div>',
				'</div>'
			].join('');

			var templateFn = doT.template(template);
			var html = templateFn({
				title: title,
				subtitle: subtitle,
				description: description
			});
			html2Texture(html, function(texture) {
				this.textPlane.material.map = texture;
				this.textPlane.material.opacity = 1;
				this.textPlane.material.needsUpdate = true;
			})
		}

	};
	Description.prototype.dispose = function() {
		this.textPlane.geometry.dispose();
		this.textPlane.material.map.dispose();
		this.textPlane.material.dispose();
	}
	return Description;
});