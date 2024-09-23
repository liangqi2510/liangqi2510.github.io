define(function(require) {
	var defaultHandler = require('./defaultHandler');
	var processor = {
		name: 'BAR',
		enter: function(element) {
			var Bar = require('../component/Bar');

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
		update: function(element) {
			var d3Selector = d3.select(element);

			var length = Number(d3Selector.attr('length'));
			var width = Number(d3Selector.attr('width'));
			var height = Number(d3Selector.attr('height'));
			var color = d3Selector.attr('color');
			defaultHandler(element);
			element._component_.update(length, width, height, color);
		},
		exit: function() {
			var parentObject3d = element.parentNode._component_;
			parentObject3d.remove(element._component_);
			element._component_.dispose();
		}
	}
	return processor;
})