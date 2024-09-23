define(function(require){
	function register(registerSketch){
		registerSketch(require('./pie/Pie3D'));
		registerSketch(require('./bar/Bar3D'));
	}
	return register;
})