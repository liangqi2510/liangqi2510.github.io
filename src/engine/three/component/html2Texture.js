define(function() {

	function html2Texture(html, cb) {
		var $container = $('<div>');
		$container.css({
			'position': 'absolute',
			'top': '0px',
			'left': '0px',
			'opacity': '0',
			'z-index': '-100000'
		});
		$container.appendTo(document.body);

		var $html = $(html);
		$html.appendTo($container);

		html2canvas($html[0])
			.then(function(canvas) {
				var texture = new THREE.Texture(canvas)
				texture.needsUpdate = true;
				cb(texture);
				$html.remove();
				$container.remove();
			});
	}
	return html2Texture;
});