/*jshint esversion: 6 */

const isDevelopment = process.env.NODE_ENV === 'development';

const path = require('path');
const autoprefixer = require('autoprefixer');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {

	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'inline-source-map' : 'source-map',

	entry: {
		'../essteyr.com/wp-content/themes/mindfulness/index': './src/theme-mindfulness/index.js',
		'../essteyr.com/wp-content/themes/mindfulness/index_desktop': './src/theme-mindfulness/index_desktop.js',
		'../essteyr.com/wp-content/themes/mindfulness/index_mobile': './src/theme-mindfulness/index_mobile.js',
		'../essteyr.com/wp-content/themes/mindfulness/style': './src/theme-mindfulness/style.scss',
		'../essteyr.com/wp-content/plugins/ess_backend/ess-backend': './src/theme-mindfulness/style-backend.scss'
	},

	output: {
		path: path.resolve(__dirname),
		filename: '[name].js',
	},

	optimization: {
		minimizer: [
			new TerserJSPlugin({}),
			new CssMinimizerPlugin(),
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '.[name].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
	],

	module: {
		rules: [{
				test: /\.s(a|c)ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'], // postcss-loader has config file in src/postcss.config.js         
			},
			{

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
			},
			{
				test: /\.(png|jpg|gif|svg|glb|gltf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						context: path.resolve(__dirname, "src/"),
						outputPath: '',
						publicPath: '',
						useRelativePaths: true
					}
				}]
			},
			{
				test: /\.(eot|ttf|woff)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						context: path.resolve(__dirname, "src/"),
						outputPath: '',
						publicPath: '',
						useRelativePaths: true
					}
				}]
			}
		]
	}
};