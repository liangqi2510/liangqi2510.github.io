define(function(require) {
	var defaultHandler = require('./defaultHandler');
	var processor = {
		name: 'LINE',
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

			element._component_ = new THREE.Line(geometry, material);
			var parentObject3d = element.parentNode._component_;
			parentObject3d.add(element._component_);
		},
		update: function(element) {
			var d3Selector = d3.select(element);
			
			var x0 = Number(d3Selector.attr('x0'));
			var y0 = Number(d3Selector.attr('y0'));
			var z0 = Number(d3Selector.attr('z0'));
			var x1 = Number(d3Selector.attr('x1'));
			var y1 = Number(d3Selector.attr('y1'));
			var z1 = Number(d3Selector.attr('z1'));
			var color = d3Selector.attr('color');
			
			var oldGeometry = element._component_.geometry;
			
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
				new THREE.Vector3(x0, y0, z0),
				new THREE.Vector3(x1, y1, z1)
			);
			
			element._component_.geometry = geometry;
			oldGeometry.dispose();
			element._component_.material.color = new THREE.Color(color);
			element._component_.material.needsUpdate = true;
		},
		exit: function() {
			element._component_.geometry.dispose();
			element._component_.material.dispose();
			var parentObject3d = element.parentNode._component_;
			parentObject3d.remove(element._component_);
			element._component_.dispose();
		}
	}
	return processor;
})