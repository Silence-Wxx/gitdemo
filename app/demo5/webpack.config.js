
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  //主程序入口 使用laoader 程序运行后打开首页
  entry: './src/main.js',
  //程序输出
  output: {
	//主程序输出文件夹
	path: __dirname+'/dist',
	//输出文件名
    filename: 'bundle.js'
  },
  //第三方编译器
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  plugins: [
    //启动时打开以下网址
    new OpenBrowserPlugin({
      url: 'http://localhost:8085'
    })
  ]
};