define(function(require) {
	return function(registercomponent) {
		registercomponent(require('./componentProcessor/ARC'));
		registercomponent(require('./componentProcessor/BAR'));
		registercomponent(require('./componentProcessor/DESCRIPTION'));
		registercomponent(require('./componentProcessor/HTMLPANEL'));
		registercomponent(require('./componentProcessor/LINE'));
		registercomponent(require('./componentProcessor/SKETCH'));
	}
})