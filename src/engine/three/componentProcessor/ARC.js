define(function(require) {
	var defaultHandler = require('./defaultHandler');
	var processor = {
		name: 'ARC',
		enter: function(element) {
			var Arc = require('../component/Arc');

			var d3Selector = d3.select(element);
			var startAngle = Number(d3Selector.attr('startAngle'));
			var endAngle = Number(d3Selector.attr('endAngle'));
			var outerRadius = Number(d3Selector.attr('outerRadius'));
			var innerRadius = Number(d3Selector.attr('innerRadius'));
			var height = Number(d3Selector.attr('height'));
			var padAngle = Number(d3Selector.attr('padAngle'));
			var color = d3Selector.attr('color');
			var index = Number(d3Selector.attr('index'));
			var name = d3Selector.attr('name');
			var value = Number(d3Selector.attr('value'));
			var percentage = Number(d3Selector.attr('percentage'));
			var visible = d3Selector.attr('visible') === 'true' ? true : false;
			element._component_ = new Arc(startAngle, endAngle - padAngle, outerRadius, innerRadius, height, color, index,name, value, percentage, visible);
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
			var index = Number(d3Selector.attr('index'));
			var name = d3Selector.attr('name');
			var value = Number(d3Selector.attr('value'));
			var percentage = Number(d3Selector.attr('percentage'));
			var visible = d3Selector.attr('visible') === 'true' ? true : false;;
			defaultHandler(element);
			element._component_.update(startAngle, endAngle - padAngle, outerRadius, innerRadius, height, color,index, name, value, percentage, visible);
		},
		exit: function(element) {

		}
	}
	return processor;
})