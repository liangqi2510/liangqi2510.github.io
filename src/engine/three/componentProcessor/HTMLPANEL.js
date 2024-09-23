define(function(require) {
	var defaultHandler = require('./defaultHandler');
	var processor = {
		name: 'HTMLPANEL',
		enter: function(element) {
			var HtmlPanel = require('../component/HtmlPanel');
			var d3Selector = d3.select(element);

			var html = d3Selector.html();

			element._component_ = new HtmlPanel(html);
			var parentObject3d = element.parentNode._component_;
			defaultHandler(element);
			parentObject3d.add(element._component_);
		},
		tween: function(element) {
			defaultHandler(element);
		},
		update:function(element) {
			var d3Selector = d3.select(element);
			var html = d3Selector.html();
			element._component_.update(html);
			defaultHandler(element);
		},
		exit: function(element) {
			element._component_.dispose();
		}
	}
	return processor;
})