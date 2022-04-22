/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/*jshint esversion: 6 */

const isDevelopment = process.env.NODE_ENV === 'development';

const path = require( 'path' );

const TerserJSPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'inline-source-map' : 'source-map',

	entry: {
		'../assets/js/index': './src/index.js',
		'../assets/js/index_desktop': './src/index_desktop.js',
		'../assets/js/index_mobile': './src/index_mobile.js',
	},

	output: {
		path: path.resolve( __dirname, '../assets/' ),
		filename: '[name].js',
	},

	optimization: {
		minimizer: [ new TerserJSPlugin( {} ) ],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'source-map-loader'
				},
				{
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react'
						]
					}
				}
				],
				enforce: 'pre'
			},

			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};
