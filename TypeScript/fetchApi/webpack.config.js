var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
	module: {
		loaders: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.ts']
	},
	entry: {
		vendor: ["jquery"],
		app: "./index.ts"
	},
	output: {
		path: path.join(basePath, "dist"),
		filename: "bundle.js"
	},
	devtool: 'source-map',

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		//Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: 'index.html', //Name of file in ./dist/
			template: 'index.html', //Name of template in ./src
			hash: true
		})
	]
}
