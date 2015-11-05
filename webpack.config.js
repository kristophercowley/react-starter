/*
 @author: Matt Berg
 @reference: https://christianalfoni.github.io/react-webpack-cookbook/index.html
 */

var del     = require('del');
var path    = require('path');
var webpack = require('webpack');

// Delete old builds
del('./build/*.js');

var config = {
  devtool: 'source-map',
  entry: {
    app: ['./app/main.js'],
    vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.resolve('./build/'),
    filename: '[name].js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
    ]
  },
  plugins: [
    // Create vendors bundle
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
  node: {
    fs: 'empty' // for tape
  }
};

return module.exports = config;