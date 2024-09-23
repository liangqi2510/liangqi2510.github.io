define(function(require) {
	var defaultHandler = require('./defaultHandler');
	var processor = {
		name: 'DESCRIPTION',
		enter: function(element) {
			var Description = require('../component/Description');

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
	}
	return processor;
})