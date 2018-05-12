module.exports = {
  //主程序入口 多个js脚本
  entry: './main.js',
  output: {
	//主程序输出文件夹
	path: __dirname,
	//输出文件名
    filename: 'bundle.js'
  }
};