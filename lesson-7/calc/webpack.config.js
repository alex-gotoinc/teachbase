const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		contentBase: path.join(__dirname, 'dist'),
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				},
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	
};