define(function(require) {
	function defaultHandler(element) {
		var d3Selector = d3.select(element);

		var positionX = Number(d3Selector.attr('positionX'));
		var positionY = Number(d3Selector.attr('positionY'));
		var positionZ = Number(d3Selector.attr('positionZ'));

		var rotationX = Number(d3Selector.attr('rotationX'));
		var rotationY = Number(d3Selector.attr('rotationY'));
		var rotationZ = Number(d3Selector.attr('rotationZ'));

		element._component_.position.set(positionX, positionY, positionZ);
		element._component_.rotation.set(rotationX, rotationY, rotationZ, 'XYZ');
	}
	return function(registercomponent) {
		registercomponent('SKETCH', {
			enter: function(element, scene) {
				element._component_ = new THREE.Group();

				var d3Selector = d3.select(element);
				defaultHandler(element);
				scene.add(element._component_);
			}
		});
		registercomponent('ARC', {
			enter: function(element) {
				var Arc = require('./component/Arc');

				var d3Selector = d3.select(element);
				var startAngle = Number(d3Selector.attr('startAngle'));
				var endAngle = Number(d3Selector.attr('endAngle'));
				var outerRadius = Number(d3Selector.attr('outerRadius'));
				var innerRadius = Number(d3Selector.attr('innerRadius'));
				var height = Number(d3Selector.attr('height'));
				var padAngle = Number(d3Selector.attr('padAngle'));
				var color = d3Selector.attr('color');
				var name = d3Selector.attr('name');
				var value = Number(d3Selector.attr('value'));
				var percentage = Number(d3Selector.attr('percentage'));
				var visible = d3Selector.attr('visible') === 'true' ? true : false;
				element._component_ = new Arc(startAngle, endAngle - padAngle, outerRadius, innerRadius, height, color, name, value, percentage, visible);
				var parentObject3d = element.parentNode._component_;
				defaultHandler(element);
				parentObject3d.add(element._component_);
			},
			update: function(element) {
				var d3Selector = d3.select(element);
				var startAngle = Number(d3Selector.attr('startAngle'));
				var endAngle = Number(d3Selector.attr('endAngle'));
				var outerRadius = Number(d3Selector.attr('outerRadius'));
				var innerRadius = Number(d3Selector.attr('innerRadius'));
				var height = Number(d3Selector.attr('height'));
				var padAngle = Number(d3Selector.attr('padAngle'));
				var color = d3Selector.attr('color');
				var name = d3Selector.attr('name');
				var value = Number(d3Selector.attr('value'));
				var percentage = Number(d3Selector.attr('percentage'));
				var visible = d3Selector.attr('visible') === 'true' ? true : false;;
				defaultHandler(element);
				element._component_.update(startAngle, endAngle - padAngle, outerRadius, innerRadius, height, color, name, value, percentage, visible);
			},
			exit: function(element) {

			},
		});
		registercomponent('DESCRIPTION', {
			enter: function(element) {
				var Description = require('./component/Description');

				var d3Selector = d3.select(element);

				var title = d3Selector.attr('title');
				var subtitle = d3Selector.attr('subtitle');
				var description = d3Selector.attr('description');

				element._component_ = new Description(title, subtitle, description);
				var parentObject3d = element.parentNode._component_;
				defaultHandler(element);
				parentObject3d.add(element._component_);
			},
			update: function(element) {},
			exit: function(element) {}
		});
		registercomponent('BAR', {
			enter: function(element) {
				var Bar = require('./component/Bar');

				var d3Selector = d3.select(element);

				var length = Number(d3Selector.attr('length'));
				var width = Number(d3Selector.attr('width'));
				var height = Number(d3Selector.attr('height'));
				var color = d3Selector.attr('color');

				element._component_ = new Bar(length, width, height, color);
				defaultHandler(element);
				var parentObject3d = element.parentNode._component_;
				parentObject3d.add(element._component_);
			},
			update: function() {},
			exit: function() {}
		});
		registercomponent('LINE', {
			enter: function(element) {

				var d3Selector = d3.select(element);

				var x0 = Number(d3Selector.attr('x0'));
				var y0 = Number(d3Selector.attr('y0'));
				var z0 = Number(d3Selector.attr('z0'));
				var x1 = Number(d3Selector.attr('x1'));
				var y1 = Number(d3Selector.attr('y1'));
				var z1 = Number(d3Selector.attr('z1'));
				var color = d3Selector.attr('color');

				var material = new THREE.LineBasicMaterial({
					color: new THREE.Color(color)
				});

				var geometry = new THREE.Geometry();
				geometry.vertices.push(
					new THREE.Vector3(x0, y0, z0),
					new THREE.Vector3(x1, y1, z1)
				);
				
				element._component_ =  new THREE.Line(geometry, material);
				var parentObject3d = element.parentNode._component_;
				parentObject3d.add(element._component_);
			},
			update: function() {},
			exit: function() {}
		});
	}
})