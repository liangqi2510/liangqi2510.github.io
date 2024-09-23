require.config({'vs/nls': {availableLanguages: {'*':'zh-cn'}}});

require.config({
  paths: {
    'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.19.0/min/vs',
    'echarts': 'https://cdn.jsdelivr.net/npm/echarts@4.5.0/dist/echarts.min',
    'vue': 'vue.amd',
    'three': 'three.amd',
    'nim-core': 'nim-core.amd'
  },
});

var monaco = null
function getMonaco() {
  return new Promise(function (resolve, reject) {
    if (monaco) {
      resolve(monaco) 
    } else {
      require(['vs/editor/editor.main'], function(monaco) {
        resolve(monaco)
      },function (err) {
        reject(err)
      });
    }
  })
}

function loadAsyncWidgetClass(url) {
  return new Promise(function (resolve, reject) {
    require([url], function(widget) {
      resolve(widget)
    },function (err) {
      reject(err)
    });
  })
}