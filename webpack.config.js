/*
*
*@fileoverview webpack配置脚本
*@author maguofu | maguofu5169@163.com
*@version 1.0 | 2018-2-9
*
*/


// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	devtool: "eval-source-map",
	// entry: __dirname + '/src/app/main.js',
	entry: {
		app: __dirname + '/src/app/main.js',
		app2: __dirname + '/src/app2/main.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	devServer: {
		port: 777,
		contentBase: './public',
		historyApiFallback: true,
		inline: true
	},
	module: {
		rules: [
			{
				test: /(\.js)/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				use:{
					loader: 'json-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/app/index.tepl.html'
		})
	]



}