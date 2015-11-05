/*
 @author: Matt Berg
 @reference: https://christianalfoni.github.io/react-webpack-cookbook/index.html
 */

var del = require('del');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

// Delete old builds
del('./dist/*.js');

var config = {
  devtool: 'source-map',
  entry: {
    app: './app/main.js',
    vendors: ['react']
  },
  output: {
    path: './dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].bundle.js',
    publicPath: 'http://localhost:8080'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: ['./node_modules'],
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
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new AssetsPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;