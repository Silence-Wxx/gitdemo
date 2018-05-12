module.exports = {
  //主程序入口 使用laoader
  entry: './main.js',
  //程序输出
  output: {
	//主程序输出文件夹
	  path: __dirname,
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
  }
};