define(function() {
	function Pie3D(option,scene,componentManager) {
		this.scene = scene;
		this.option = option;
		this.sketch = null;
		this.componentManager = componentManager;
	}
	Pie3D.prototype.name = 'Pie3D';
	Pie3D.prototype.render = function() {
		var self = this;
		var componentManager = this.componentManager;
		var serie = this.option.series[0];
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
			.attr('positionX', 205)
			.attr('positionY', 1)
			.attr('positionZ', 170)
			.attr('rotationX', -Math.PI / 2)
			.attr('rotationY', 0)
			.attr('rotationZ', 0)
			.each(function() {
				componentManager.enterComponent(this, self.scene);
			});
		
		var sum = 0;
		pie = d3.layout.pie().value(function(d) {
				sum += d.value;
				return d.value;
			})
			.startAngle(0 * Math.PI)
			.endAngle(Math.PI * 1.5 + 10 * Math.PI / 180)
			.padAngle(10 * Math.PI / 180);

		var pieData = pie(serie.data);
		pieData.sort(function(a,b){
			return b.value - a.value;
		});
		var heightScale = d3.scale.linear()
			.domain(
				d3.extent(pieData, function(d) {
					return d.value;
				})
			).range([20, 50]);
		var colors = d3.scale.category20();

		var update = this.sketch.selectAll('arc').data(pieData, function(d) {
			return d.data.name
		});
		var enter = update.enter();
		var exit = update.exit();

		enter.append('arc')
			.attr('visible', false)
			.attr('index',function(d,i){
				return i+1;
			})
			.attr('name', function(d) {
				return d.data.name;
			})
			.attr('value', function(d) {
				return d.value;
			})
			.attr('percentage',function(d) {
				return ( (d.value/sum) * 100).toFixed(2);
			})
			.attr('startAngle', function(d) {
				return d.startAngle;
			})
			.attr('endAngle', function(d) {
				return d.startAngle + d.padAngle;
			})
			.attr('padAngle', function(d) {
				return d.padAngle;
			})
			.attr('outerRadius', function(d) {
				return 185;
			})
			.attr('innerRadius', function(d) {
				return 85;
			})
			.attr('height', function(d) {
				return heightScale(d.value);
			})
			.attr('color', function(d, i) {
				return colors(i);
			})
			.each(function(d) {
				componentManager.enterComponent(this);
			});

		var stackY = -20;
		update
			.transition()
			.duration(1000)
			.each('start', function() {
				d3.select(this).attr('visible', false);
				componentManager.updateComponent(this);
			})
			.attr('positionY', function(d) {
				var result = stackY;
				stackY += heightScale(d.value);
				return result;
			})
			.attr('height', function(d) {
				return heightScale(d.value);
			})
			.tween('updateComponent', function() {
				return function() {
					componentManager.updateComponent(this);
				}
			})
			.transition()
			.duration(1000)
			.attr('index',function(d,i){
				return i+1;
			})
			.attr('name', function(d) {
				return d.data.name;
			})
			.attr('value', function(d) {
				return d.value;
			})
			.attr('percentage',function(d) {
				return ( (d.value/sum) * 100).toFixed(2);
			})
			.attr('startAngle', function(d) {
				return d.startAngle;
			})
			.attr('endAngle', function(d) {
				return d.endAngle;
			})
			.attr('padAngle', function(d) {
				return d.padAngle;
			})
			.attr('outerRadius', function(d) {
				return 185;
			})
			.attr('innerRadius', function(d) {
				return 85;
			})
			.attr('color', function(d, i) {
				return colors(i);
			})
			.tween('updateComponent', function() {
				return function() {
					componentManager.updateComponent(this);
				}
			})
			.transition()
			.duration(1000)
			.attr('positionY', function(d) {
				return 0;
			})
			.tween('updateComponent', function() {
				return function() {
					componentManager.updateComponent(this);
				}
			})
			.each('end', function() {
				d3.select(this).attr('visible', true);
				componentManager.updateComponent(this);
			});

	};
	return Pie3D;
});