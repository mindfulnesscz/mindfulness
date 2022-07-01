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
    '../index': './src/index.js',
    '../index_desktop': './src/index_desktop.js',
    '../index_mobile': './src/device_nav.tsx',
  },

  output: {
    path: path.resolve( __dirname, '../assets/js/chunks/' ),
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
    splitChunks: {
      chunks ( chunk ) {
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
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
  ],
};
