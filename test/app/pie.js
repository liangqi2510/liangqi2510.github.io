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
			type: 'Pie3D',
			text: {
				title: '浏览器市场占有率',
				subtitle: '2015年-第三季度',
				description: '浏览器市场占有率是非常重要的信息。根据 W3CSchool 上近几年的日志文件的统计数据，您可以看到本站用户的浏览器使用的长期趋势。我们可以看到各常用的浏览器所占有的市场比例。'
			},
			position: [-350, 100, 0],
			rotation: [0.1 * Math.PI, 0, 0],
			series: [{
				data: [{
					value: 335,
					name: '谷歌浏览器'
				}, {
					value: 410,
					name: '遨游浏览器'
				}, {
					value: 234,
					name: '火狐浏览器'
				}, {
					value: 135,
					name: 'IE浏览器'
				}, {
					value: 548,
					name: '360浏览器'
				}]
			}]
		},{
			type: 'Pie3D',
			text: {
				title: '浏览器市场占有率',
				subtitle: '2015年-第二季度',
				description: '浏览器市场占有率是非常重要的信息。根据 W3CSchool 上近几年的日志文件的统计数据，您可以看到本站用户的浏览器使用的长期趋势。我们可以看到各常用的浏览器所占有的市场比例。'
			},
			position: [350, 100, 0],
			rotation: [0.1 * Math.PI, 0, 0],
			series: [{
				data: [{
					value: 335,
					name: '谷歌浏览器'
				}, {
					value: 410,
					name: '遨游浏览器'
				}, {
					value: 234,
					name: '火狐浏览器'
				}, {
					value: 135,
					name: 'IE浏览器'
				}, {
					value: 548,
					name: '360浏览器'
				}]
			}]
		}]
	}

	var chart = new QCharts(document.body, option);
});