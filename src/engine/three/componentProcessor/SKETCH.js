define(function(require) {
	var defaultHandler = require('./defaultHandler');
	var processor = {
		name: 'SKETCH',
		enter: function(element, scene) {
			element._component_ = new THREE.Group();

			var d3Selector = d3.select(element);
			defaultHandler(element);
			scene.add(element._component_);
		},
		update: function(element) {},
		exit: function(element) {}
	}
	return processor;
})