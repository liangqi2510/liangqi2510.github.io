define(['./componentManagerRegister'], function(componentManagerRegister) {
	var componentPrograms = {};

	function enterComponent(element, scene) {
		var enter = componentPrograms[element.tagName].enter;
		enter(element, scene);
	}

	function tweenComponent(element) {
		var tween = componentPrograms[element.tagName].tween || componentPrograms[element.tagName].update;
		tween(element);
	}

	function updateComponent(element) {
		var update = componentPrograms[element.tagName].update;
		update(element);
	}

	function exitComponent(element) {
		var exit = componentPrograms[element.tagName].exit;
		exit(element);
	}

	function registerComponent(componentProgram) {
		if (componentPrograms[componentProgram.name]) {
			console.warn('名为' + name + '的Component已存在');
		} else {
			componentPrograms[componentProgram.name] = componentProgram;
		}
	}

	function overwriteComponent(name, componentProgram) {
		console.warn('名为' + name + '的Component被重写');
		componentPrograms[name] = component;
	}
	componentManagerRegister(registerComponent);
	return {
		enterComponent: enterComponent,
		tweenComponent: tweenComponent,
		updateComponent: updateComponent,
		exitComponent: exitComponent,
		registerComponent: registerComponent,
		overwriteComponent: overwriteComponent
	}
});