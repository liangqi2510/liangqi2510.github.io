define(
	['./sketchRegister'],
	function(sketchRegister) {
		var sketchs = {};

		function getSketch(type) {
			return sketchs[type];
		}

		function registerSketch(sketch) {
			name = sketch.prototype.name;
			if (sketchs[name]) {
				console.warn('名为' + name + '的sketch已存在');
			} else {
				sketchs[name] = sketch;
			}
		}
		sketchRegister(registerSketch);
		return {
			getSketch:getSketch
		};
	})