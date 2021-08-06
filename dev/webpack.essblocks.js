/*jshint esversion: 9 */

/*
Main Wordpress Scripts template. 
Is able to merge default WP webpack.config file provided.
Uses spread syntax „...” for object thus esversion 9
Should be used for all the custom gutenberg plugins 
*/

const path = require('path');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaultConfig,

    entry: {
        '../../essteyr.com/wp-content/plugins/ess-blocks/build/index' : './src/plugins/ess-blocks/index.js',
    },

    output: {
        // filename: '[name].[hash:4].js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }

  };