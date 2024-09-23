define(function(require) {
	function get3DEngine(engineType) {
		var result = {};
		switch (engineType){
			case 'three':
				result.scenesCreaters = require('./three/scenesCreaters');
				result.componentManager = require('./three/componentManager');
				break;
			default:
				break;
		}
		return result;
	}
	return get3DEngine;
});