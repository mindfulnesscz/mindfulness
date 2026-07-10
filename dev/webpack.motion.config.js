const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/home-revamp-motion.js'),
  output: {
    path: path.resolve(__dirname, '../assets/js'),
    filename: 'home-revamp-motion.js',
  },
};
