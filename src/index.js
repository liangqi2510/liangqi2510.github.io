define(
	['./engine/get3DEngine', './sketch/sketchFactory', './tool/util'],
	function(get3DEngine, sketchFactory, util) {
		var defaultOption = {};

		function QCharts(element, option) {
			var self = this;
			this.element = element;
			this.option = util.clone(defaultOption);
			util.merge(this.option, option, true);

			this.container = d3.select(this.element).append('div')
				.style('width', '100%')
				.style('height', '100%')
				.style('position', 'relative');

			this.layer3d = this.container.append('div')
				.classed('div3d', true)
				.style('position', 'absolute')
				.style('top', '0px')
				.style('bottom', '0px')
				.style('left', '0px')
				.style('right', '0px')
				.style('z-index', 0);

			this.layer2d = this.container.append('div')
				.classed('div2d', true)
				.style('position', 'absolute')
				.style('top', '0px')
				.style('bottom', '0px')
				.style('left', '0px')
				.style('right', '0px')
				.style('z-index', 1);
			var engine = get3DEngine(this.option.engine);
			var scenesCreaters = engine.scenesCreaters;
			var componentManager = this.componentManager = engine.componentManager;

			var scenesCreater = scenesCreaters.getScenesCreater(this.option.scene);
			this.scene = scenesCreater(this.layer3d, this.container);

			this.option.charts.forEach(
				function(chartOption) {
					var Sketch = sketchFactory.getSketch(chartOption.type);
					chartOption.sketch = new Sketch(chartOption, self.scene, componentManager);
					chartOption.sketch.render()
				}
			);

			this.chartRenderers = [];
			option.charts.forEach(function() {
				self.chartRenderers.push();
			});

		}
		QCharts.prototype.render = function() {};
		QCharts.prototype.setOption = function(option) {
			var self = this;
			util.merge(this.option, option, true);
			this.option.charts.forEach(
				function(chartOption) {
					var Sketch = sketchFactory.getSketch(chartOption.type);
					chartOption.sketch.render()
				}
			);
		};
		return QCharts;
	})