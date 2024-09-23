define(['./html2Texture'], function(html2Texture) {
	function Arc(startAngle, endAngle, outerRadius, innerRadius, height, color, index, name, value, percentage, spriteVisible) {
		THREE.Group.call(this);
		this.startAngle = startAngle;
		this.endAngle = endAngle;
		this.outerRadius = outerRadius;
		this.innerRadius = innerRadius;
		this.height = height;
		this.color = color;
		this.index = index;
		this.name = name;
		this.value = value;
		this.percentage = percentage;
		this.spriteVisible = spriteVisible;
		var shape = (function() {
			var shape = new THREE.Shape();
			shape.moveTo(outerRadius * Math.cos(startAngle), outerRadius * Math.sin(startAngle));
			shape.absarc(0, 0, outerRadius, startAngle, endAngle, true);
			shape.lineTo(innerRadius * Math.cos(endAngle), innerRadius * Math.sin(endAngle));
			shape.absarc(0, 0, innerRadius, endAngle, startAngle, true);
			shape.lineTo(outerRadius * Math.cos(startAngle), outerRadius * Math.sin(startAngle));
			return shape;
		})();
		var options = {
			amount: height,
			bevelThickness: 0,
			bevelSize: 0,
			bevelSegments: 0,
			bevelEnabled: false,
			curveSegments: 30,
			steps: 5
		};
		var geom = new THREE.ExtrudeGeometry(shape, options);
		var radian = this.radian = (function(geom) {
			geom.rotateX(-0.5 * Math.PI);
			var material = new THREE.MeshPhongMaterial({
				color: new THREE.Color(color),
				shading: THREE.SmoothShading,
				side: THREE.DoubleSide
			});

			var diffuseColor = new THREE.Color();
			diffuseColor.setHSL(0, 0, 0.7);
			diffuseColor.multiplyScalar(1);

			var specularColor = new THREE.Color();
			specularColor.copy(diffuseColor);
			specularColor.multiplyScalar(0.15);
			material.specular.copy(specularColor);
			material.shininess = 40
			return new THREE.Mesh(geom, material);
		})(geom);
		radian.castShadow = true;
		radian.receiveShadow = true;
		this.add(radian)

		var template = [
			'<div>',
			'	<div style="text-align: right;font-size: 90px;font-weight: 900;color: #62BFE1;">{{=it.index}}</div>',
			'	<div style="font-size: 25px;line-height: 30px;text-align: right;">',
			'		{{=it.name}}<br>', 
			'		用户数量{{=it.value}}人<br> ',
			'		市场占有率{{=it.percentage}}%',
			'	</div>',
			'</div>'
		].join('');

		var material = new THREE.SpriteMaterial({
			transparent: true,
			opacity: 0
		});

		var averageRadius = innerRadius + (outerRadius - innerRadius) / 2;
		var averageAngle = startAngle + (endAngle - startAngle) / 2;

		var sprite = this.sprite = new THREE.Sprite(material);
		sprite.scale.set(100, 100, 100);
		sprite.position.set(averageRadius * Math.cos(averageAngle) * 1.7, height + 50, -averageRadius * Math.sin(averageAngle) * 1.7)

		var templateFn = doT.template(template);
		var html = templateFn({
			index:index,
			name: name,
			value: value,
			percentage: percentage
		});
		html2Texture(html, function(texture) {
			material.map = texture;
			material.opacity = 1;
			material.needsUpdate = true;
		})
		this.add(sprite);

		var lineMaterial = new THREE.LineBasicMaterial({
			color: 0x888888
		});
		var lineGeometry = new THREE.Geometry();
		lineGeometry.vertices.push(
			new THREE.Vector3(averageRadius * Math.cos(averageAngle), height, -averageRadius * Math.sin(averageAngle)),
			new THREE.Vector3(averageRadius * Math.cos(averageAngle) * 1.5, height + 50, -averageRadius * Math.sin(averageAngle) * 1.5)
		);
		var line = this.line = new THREE.Line(lineGeometry, lineMaterial);
		this.add(line);
		if (spriteVisible) {
			this.show();
		} else {
			this.hide();
		}
	}

	Arc.prototype = Object.create(THREE.Group.prototype);
	Arc.prototype.update = function(startAngle, endAngle, outerRadius, innerRadius, height, color, index, name, value, percentage, spriteVisible) {
		var self = this;
		this.startAngle = startAngle;
		this.endAngle = endAngle;
		this.outerRadius = outerRadius;
		this.innerRadius = innerRadius;
		this.height = height;
		this.color = color;
		this.index = index;
		this.name = name;
		this.value = value;
		this.percentage = percentage;
		this.spriteVisible = spriteVisible;
		var shape = (function() {
			var shape = new THREE.Shape();
			shape.moveTo(outerRadius * Math.cos(startAngle), outerRadius * Math.sin(startAngle));
			shape.absarc(0, 0, outerRadius, startAngle, endAngle, true);
			shape.lineTo(innerRadius * Math.cos(endAngle), innerRadius * Math.sin(endAngle));
			shape.absarc(0, 0, innerRadius, endAngle, startAngle, true);
			shape.lineTo(outerRadius * Math.cos(startAngle), outerRadius * Math.sin(startAngle));
			return shape;
		})();
		var options = {
			amount: height,
			bevelThickness: 0,
			bevelSize: 0,
			bevelSegments: 0,
			bevelEnabled: false,
			curveSegments: 30,
			steps: 5
		};

		var oldGeometry = this.radian.geometry;

		var geom = new THREE.ExtrudeGeometry(shape, options);
		geom.rotateX(-0.5 * Math.PI);
		geom.verticesNeedUpdate = true;
		geom.elementsNeedUpdate = true;

		this.radian.geometry = geom;
		oldGeometry.dispose();

		var sprite = this.sprite;
		var averageRadius = innerRadius + (outerRadius - innerRadius) / 2;
		var averageAngle = startAngle + (endAngle - startAngle) / 2;
		sprite.position.set(averageRadius * Math.cos(averageAngle) * 1.7, (height + 50) * 1.7 / 1.5, -averageRadius * Math.sin(averageAngle) * 1.7)

		var lineGeometry = new THREE.Geometry();
		lineGeometry.vertices.push(
			new THREE.Vector3(averageRadius * Math.cos(averageAngle) * 1.2, height, -averageRadius * Math.sin(averageAngle) * 1.2),
			new THREE.Vector3(averageRadius * Math.cos(averageAngle) * 1.5, height + 50, -averageRadius * Math.sin(averageAngle) * 1.5)
		);
		lineGeometry.verticesNeedUpdate = true;
		lineGeometry.elementsNeedUpdate = true;

		var oldGeometry = this.line.geometry;
		this.line.geometry = lineGeometry;
		oldGeometry.dispose();
		if (spriteVisible) {
			this.show();
		} else {
			this.hide();
		}
	}
	Arc.prototype.show = function() {
		var self = this;
		var template = [
			'<div style="width: 256px;height: 256px;">',
			'	<div style="text-align: right;font-size: 90px;font-weight: 900;color: #62BFE1;">{{=it.index}}</div>',
			'	<div style="font-size: 14px;line-height: 25px;text-align: right;">',
			'		{{=it.name}}<br>', 
			'		用户数量{{=it.value}}人<br> ',
			'		市场占有率{{=it.percentage}}%',
			'	</div>',
			'</div>'
		].join('');
		var templateFn = doT.template(template);
		var html = templateFn({
			index:this.index,
			name: this.name,
			value: this.value,
			percentage: this.percentage
		});
		html2Texture(html, function(texture) {
			self.sprite.material.map = texture;
			self.sprite.material.opacity = 1;
			self.sprite.material.needsUpdate = true;
			
			self.line.visible = true;
			self.sprite.visible = true;
		})
	};
	Arc.prototype.hide = function() {
		this.line.visible = false;
		this.sprite.visible = false;
	};
	Arc.prototype.constructor = Arc;
	return Arc;
});