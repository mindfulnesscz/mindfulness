/* eslint-disable @typescript-eslint/no-var-requires */
/*jshint esversion: 6 */

const isDevelopment = process.env.NODE_ENV === 'development';

const path = require( 'path' );

const TerserJSPlugin = require( 'terser-webpack-plugin' );

const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'inline-source-map' : 'source-map',

  entry: {
    'index': './src/index.tsx',
    'nav/mobile': './src/nav/mobile.tsx',
    'nav/desktop': './src/nav/desktop.tsx',
    'modals' : '/src/modals.tsx',
    'ess-filter' : '/src/posts-filter.js'
  },

  output: {
    // chunks path
    // path: path.resolve( __dirname, '../assets/js/chunks/' ),
    // no chunks path

    path: path.resolve( __dirname, '../assets/js/' ),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', 'jsx', '.tsx', '.ts', '.scss', '.sass'],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'gsap': 'gsap',
    'gsap/ScrollTrigger' : 'ScrollTrigger'
  },

  optimization: {
    minimizer: [ new TerserJSPlugin( {} ) ],
    /**
     * SPLIT CHUNKS CURRENTLY DISABLED BECAUSE WE NEED TISTINGUISHED 
     * CHUNKS FOR CUBE AND DEVICE NAV ETC.
     */
    /*splitChunks: {
      chunks ( chunk ) {
        // exclude react to grab it from cdn
        return chunk.name !== 'react';
      },
    },*/
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

      {
        test: /\.(scss|css|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
