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

		var maxValue = 0;
		var minValue = 0;

		var length = 40;
		var width = 20;
		var innerPadding = 5;
		var outerPadding = 25;
		var gap = 15;

		var seriesLength = series.length;
		var offsetII = seriesLength * width + (seriesLength - 1) * innerPadding + outerPadding;
		var offsetI = width + innerPadding;
		var sumWidth = (series[0].data.length) * offsetII - outerPadding - width;

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
		var ticks = heightScale.ticks(5);
		var colors = d3.scale.category20();

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
			document.body.removeChild(this.sketch[0][0]);
		}

		//渲染Bar
		series.forEach(function(serie, i) {
			var update = self.sketch.selectAll('bar.bar-' + i).data(serie.data);
			var enter = update.enter();
			var exit = update.exit();

			enter.append('bar').classed('bar-' + i, true)
				.attr('positionX', function(d, ii) {
					return ii * offsetII + i * offsetI - sumWidth / 2;
				})
				.attr('positionY', function(d) {
					return gap;

				})
				.attr('positionZ', 0)
				.attr('length', length)
				.attr('width', width)
				.attr('height', function(d, ii) {
					return 0;
				})
				.attr('color', function(d, ii) {
					if (series.length > 1) {
						return colors(serie.name);
					} else {
						return colors(ii);
					}

				})
				.each(function() {
					componentManager.enterComponent(this, self.scene);
				});

			update
				.transition()
				.duration(3000)
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
					if (series.length > 1) {
						return colors(serie.name);
					} else {
						return colors(ii);
					}
				})
				.tween('updateComponent', function() {
					return function() {
						componentManager.tweenComponent(this);
					}
				})
				.each('end', function() {
					componentManager.updateComponent(this);
				});
		});

		// 渲染Y轴 tick text
		var update = self.sketch.selectAll('htmlpanel.tick').data(ticks);
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

		update
			.html(function(d, i) {
				return '<div style="font-size:54px">' + d + '</div>';
			})
			.each(function() {
				componentManager.updateComponent(this);
			})
			.transition()
			.duration(3000)
			.attr('positionX', function(d, ii) {
				return -sumWidth / 2 - width - 50;
			})
			.attr('positionY', function(d) {
				return heightScale(d) + gap + 9;

			})
			.attr('positionZ', -30)
			.tween('updateComponent', function() {
				return function() {
					componentManager.tweenComponent(this);
				}
			})
			.each('end', function() {
				componentManager.updateComponent(this);
			});

		exit.each(function() {
			componentManager.exitComponent(this);
		});

		// 渲染Y轴 tick line

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

		update
			.transition()
			.duration(3000)
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
			.tween('updateComponent', function() {
				return function() {
					componentManager.tweenComponent(this);
				}
			})
			.each('end', function() {
				componentManager.updateComponent(this);
			});

		exit
			.each(function() {
				componentManager.exitComponent(this);
			})
			.remove();

		//x轴 tick text
		var update = self.sketch.selectAll('htmlpanel.tickx').data(this.option.xAxis);
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
			.attr('positionZ', 40)
			.attr('rotationX', -Math.PI / 2)
			.attr('rotationZ', -Math.PI / 4)
			.html(function(d, i) {
				return '<div style="text-align: center;font-size:54px;">' + d + '</div>';
			})
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});

		update
			.html(function(d, i) {
				return '<div style="text-align: center;font-size:54px;">' + d + '</div>';
			})
			.attr('positionX', function(d, ii) {
				return xScale(ii);
			})
			.attr('positionY', function(d) {
				return gap;

			})
			.attr('positionZ', 40)
			.attr('rotationX', -Math.PI / 2)
			.attr('rotationZ', -Math.PI / 4)
			.each(function() {
				componentManager.updateComponent(this);
			});

		exit
			.each(function() {
				componentManager.exitComponent(this);
			})
			.remove();
		//渲染legend

		var update = self.sketch.selectAll('htmlpanel.legend').data(series);
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
				return heightScale(maxValue) + 50;

			})
			.attr('positionZ', -30)
			.html(function(d, i) {
				return '<div style="font-weight: 900;text-align: center;font-size:54px;color:' + colors(d.name) + '">' + d.name + '</div>';
			})
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});

		update
			.attr('positionX', function(d, ii) {
				return xScale(ii);
			})
			.attr('positionY', function(d) {
				return heightScale(maxValue) + 50;

			})
			.attr('positionZ', -30)
			.html(function(d, i) {
				return '<div style="font-weight: 900;text-align: center;font-size:54px;color:' + colors(d.name) + '">' + d.name + '</div>';
			})
			.each(function() {
				componentManager.updateComponent(this);
			});

		exit.each(function() {
			componentManager.exitComponent(this);
		});

		//渲染说明文件
		var update = this.sketch.selectAll('description').data([this.option.text]);
		var enter = update.enter();
		var exit = update.exit();

		enter.append('description')
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

		update
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
				componentManager.updateComponent(this, self.scene);
			});

		exit.each(function() {
			componentManager.exitComponent(this);
		});
	}
	return Bar3D;
});