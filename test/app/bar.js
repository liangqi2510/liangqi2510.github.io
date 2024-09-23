/* globals requirejs */
requirejs.config({
	baseUrl: '../src',
	paths: {
		QCharts: './index'
	}
});

require(['QCharts'], function(QCharts) {

	var option = {
		engine: 'three',
		scene: 'default',
		charts: [{
			type: 'Bar3D',
			text: {
				title: '浏览器市场占有率',
				subtitle: '2015年-第三季度',
				description: '浏览器市场占有率是非常重要的信息。根据 W3CSchool 上近几年的日志文件的统计数据，您可以看到本站用户的浏览器使用的长期趋势。我们可以看到各常用的浏览器所占有的市场比例。'
			},
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			yAxis: '{value} ml',
			series: [{
				name: '蒸发量',
				data: [12.0, 34.9, 27.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 36.4, 31.3]
			}, {
				name: '降水量',
				type: 'bar',
				data: [12.6, 35.9, 19.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 26.0, 21.3]
			}, {
				name: '挥发量',
				type: 'bar',
				data: [22.6, 15.9, 29.0, 16.4, 38.7, 50.7, 135.6, 152.2, 68.7, 28.8, 16.0, 31.3]
			}]
		}]
	};

	var chart = new QCharts(document.body, option);
	function r(){
		return ~~1000*Math.random();
	}
	window.setInterval(function() {
		var option = {
			charts: [{
				type: 'Bar3D',
				position: [0, 0, 0],
				rotation: [0, 0, 0],
				xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				yAxis: '{value} ml',
				series: [{
					name: '蒸发量',
					data: [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()]
				}, {
					name: '降水量',
					type: 'bar',
					data: [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()]
				}, {
					name: '挥发量',
					type: 'bar',
					data: [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()]
				}]
			}]
		}

		chart.setOption(option);
	}, 10000)
});