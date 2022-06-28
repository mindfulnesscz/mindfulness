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
    '../assets/js/index_mobile': './src/device_nav.tsx',
  },

  output: {
    path: path.resolve( __dirname, '../assets/' ),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', 'jsx', '.tsx', '.ts', '.scss', '.sass'],
  },

  optimization: {
    minimizer: [ new TerserJSPlugin( {} ) ],
    splitChunks: {
      chunks(chunk) {
        // exclude react to grab it from cdn
        return chunk.name !== 'react';
      },
    },
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
