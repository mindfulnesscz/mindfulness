/*jshint esversion: 6 */

const isDevelopment = process.env.NODE_ENV === 'development';

const path = require('path');
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {

	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'inline-source-map' : 'source-map',

	entry: {
		'../../essteyr.com/wp-content/plugins/ess_merge-demo/js/essmergedemo': './src/plugins/ess-mergedemo/essmergedemo.js',
	},

	module: {
		rules: [{

				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
						loader: 'source-map-loader'
					},
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env"
							]
						}
					}
				],
				enforce: 'pre'
			}

		]
	},

	output: {
		// filename: '[name].[hash:4].js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [
			new TerserJSPlugin({}),
		]
	},
};