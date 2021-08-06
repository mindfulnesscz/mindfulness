/*jshint esversion: 6 */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

    //mode: 'development',
    //devtool: 'inline-source-map',

    mode: 'production', 
    devtool: 'source-map',

    entry: {
        '../../wp-dist/wp-content/themes/mindfulness/js/bamfilter' : './src/theme-mindfulness/bamfilter.js',
        '../../wp-dist/wp-content/themes/mindfulness/css/bamfilter': './src/theme-mindfulness/bamfilter.scss',
    },

    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
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
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]

                    }
                }

            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            },        
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};