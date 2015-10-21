/*
  @author: Matt Berg
  @reference: https://christianalfoni.github.io/react-webpack-cookbook/index.html
 */

var del = require('del');
var webpack = require('webpack');

// Delete old builds
del('./build/*.js');

var config = {
  entry: {
    app: ['./app/main.js'],
    vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: './build/',
    filename: '[name].js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // Accepts either js or jsx
      loaders: ['babel']
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },
  plugins: [
    // Create vendors bundle
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ]
};

return module.exports = config;