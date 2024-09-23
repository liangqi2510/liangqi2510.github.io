define(function() {
	function Bar3D(option, scene, componentManager) {
		this.scene = scene;
		this.option = option;
		this.sketch = null;
		this.componentManager = componentManager;
	}
	Bar3D.prototype.name = 'Bar3D';
	Bar3D.prototype.render = function() {
		var self = this;
		var componentManager = this.componentManager;
		var series = this.option.series;

		var gap = 15;
		if (!this.sketch) {
			this.sketch = d3.select("body").append("custom:sketch")
				.attr('name', 'Pie3D')
				.attr('positionX', this.option.position[0])
				.attr('positionY', this.option.position[1])
				.attr('positionZ', this.option.position[2])
				.attr('rotationX', this.option.rotation[0])
				.attr('rotationY', this.option.rotation[1])
				.attr('rotationZ', this.option.rotation[2])
				.each(function() {
					componentManager.enterComponent(this, self.scene);
				});
			//document.body.removeChild(this.sketch[0][0]);
		}

		var maxValue = 0;
		var minValue = 0;

		series.forEach(function(serie, i) {
			serie.data.forEach(function(d, ii) {
				if (d > maxValue) {
					maxValue = d;
				}
				if (d < minValue) {
					minValue = d;
				}
			});
		});

		var heightScale = d3.scale.linear()
			.domain([minValue, maxValue])
			.range([0, 200]);
		var colors = d3.scale.category20();

		var ticks = heightScale.ticks(5);

		var innerPadding = 5;
		var outerPadding = 25;

		var seriesLength = series.length;

		var length = 40;
		var width = 20;
		var offsetII = seriesLength * width + (seriesLength - 1) * innerPadding + outerPadding;
		var offsetI = width + innerPadding;

		var sumWidth = (series[0].data.length) * offsetII - outerPadding - width;

		series.forEach(function(serie, i) {
			var update = self.sketch.selectAll('bar.bar-' + i).data(serie.data);
			var enter = update.enter();
			var exit = update.exit();

			enter.append('bar').classed('bar-' + i, true)
				.attr('positionX', function(d, ii) {
					return ii * offsetII + i * offsetI - sumWidth / 2;
				})
				.attr('positionY', function(d) {
					return heightScale(d) / 2 + gap;

				})
				.attr('positionZ', 0)
				.attr('length', length)
				.attr('width', width)
				.attr('height', function(d, ii) {
					return heightScale(d);
				})
				.attr('color', function(d, ii) {
					return colors(serie.name);
				})
				.each(function() {
					componentManager.enterComponent(this, self.scene);
				});
		});

		var update = self.sketch.selectAll('text.tick').data(ticks);
		var enter = update.enter();
		var exit = update.exit();

		enter.append('htmlpanel').classed('tick', true)
			.attr('positionX', function(d, ii) {
				return -sumWidth / 2 - width - 50;
			})
			.attr('positionY', function(d) {
				return heightScale(d) + gap;

			})
			.attr('positionZ', -30)
			.html(function(d, i) {
				return '<div style="font-size:54px">' + d + '</div>';
			})
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});

		var update = self.sketch.selectAll('line.tick').data(ticks);
		var enter = update.enter();
		var exit = update.exit();

		enter.append('line').classed('tick', true)
			.attr('x0', function(d) {
				return -sumWidth / 2 - width;
			})
			.attr('y0', function(d) {
				return heightScale(d) + gap;
			})
			.attr('z0', function(d) {
				return -30
			})
			.attr('x1', function(d) {
				return sumWidth / 2;
			})
			.attr('y1', function(d) {
				return heightScale(d) + gap;
			})
			.attr('z1', function(d) {
				return -30
			})
			.attr('color', function(d, ii) {
				return '#000000';
			})
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});

		var update = self.sketch.selectAll('text.tickx').data(this.option.xAxis);
		var enter = update.enter();
		var exit = update.exit();

		var xScale = d3.scale.linear()
			.domain([0, this.option.xAxis.length - 1])
			.range([-sumWidth / 2 + ((seriesLength - 1) * width + (seriesLength - 1) * innerPadding) / 2, sumWidth / 2 - +((seriesLength - 1) * width + (seriesLength - 1) * innerPadding) / 2]);

		enter.append('htmlpanel').classed('tickx', true)
			.attr('positionX', function(d, ii) {
				return xScale(ii);
			})
			.attr('positionY', function(d) {
				return gap;

			})
			.attr('positionZ', 80)
			.attr('rotationX', -Math.PI / 2)
			.html(function(d, i) {
				return '<div style="text-align: center;font-size:54px;">' + d + '</div>';
			})
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});

		var update = self.sketch.selectAll('text.legend').data(series);
		var enter = update.enter();
		var exit = update.exit();

		var xScale = d3.scale.linear()
			.domain([0, this.option.xAxis.length - 1])
			.range([-sumWidth / 2 + ((seriesLength - 1) * width + (seriesLength - 1) * innerPadding) / 2, sumWidth / 2 - +((seriesLength - 1) * width + (seriesLength - 1) * innerPadding) / 2]);

		enter.append('htmlpanel').classed('legend', true)
			.attr('positionX', function(d, ii) {
				return xScale(ii);
			})
			.attr('positionY', function(d) {
				return heightScale(ticks[ticks.length-1]);

			})
			.attr('positionZ', -30)
			.html(function(d, i) {
				return '<div style="font-weight: 900;text-align: center;font-size:54px;color:'+ colors(d.name) +'">' + d.name + '</div>';
			})
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});
		
		
		this.sketch.selectAll('description').data([this.option.text])
			.enter()
			.append('description')
			.attr('title', function(d) {
				return d.title
			})
			.attr('subtitle', function(d) {
				return d.subtitle
			})
			.attr('description', function(d) {
				return d.description
			})
			.attr('positionX', xScale(0) + 128)
			.attr('positionY', gap)
			.attr('positionZ', 250)
			.attr('rotationX', -Math.PI / 2)
			.attr('rotationY', 0)
			.attr('rotationZ', 0)
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});
	}
	return Bar3D;
});