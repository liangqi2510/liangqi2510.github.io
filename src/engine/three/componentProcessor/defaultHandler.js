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
	return defaultHandler;
});