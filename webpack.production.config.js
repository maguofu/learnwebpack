/*
*
*@fileoverview webpack生产环境配置脚本
*@author maguofu | maguofu5169@163.com
*@version 1.0 | 2018-2-11
*
*
*
*/
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	// entry: __dirname + '/src/app/main.js',
	entry: {
		app: __dirname + '/src/app/main.js',
		app2: __dirname + '/src/app2/main.js',
	},
	output: {
		path: __dirname + '/build',
		filename: '[name]-[hash].js'
	},
	devtool: 'null',
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /(\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({//这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）。
      template: __dirname + "/src/app/index.tepl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),//修改组件代码后，自动刷新实时预览修改后的效果。
    new webpack.optimize.OccurrenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.UglifyJsPlugin(),//压缩js代码
    new ExtractTextPlugin('style.css'),//分离js和css插件
    new CleanWebpackPlugin('build/*.*', {//清理build文件夹里因为hash导致文件过多
    	root: __dirname,
    	verbose: true,
    	dry: false
    })
	]
}