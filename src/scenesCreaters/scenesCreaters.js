define(['./scenesCreatersRegister'], function(scenesRegister) {
	var scenesCreaters = {};
	function getScenesCreater(name) {
		return scenesCreaters[name];
	}

	function regiScenesCreater(scenesCreater) {
		name = scenesCreater.prototype.name;
		if (scenesCreaters[name]) {
			console.warn('名为' + name + '的Scene已存在');
		} else {
			scenesCreaters[name] = scenesCreater;
		}
	}

	function overwriteScenesCreater(name, scenesCreater) {
		console.warn('名为' + name + '的Scene被重写');
		scenesCreaters[name] = scenesCreater;
	}
	scenesRegister(regiScenesCreater);
	return {
		getScenesCreater:getScenesCreater,
		regiScenesCreater:regiScenesCreater,
		overwriteScenesCreater:overwriteScenesCreater
	}
});