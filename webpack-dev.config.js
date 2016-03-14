var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  devtool: 'eval-source-map',
  noInfo: true, //set to false to see a list of every file being bundled.
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  //necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  target: process.env.NODE_ENV == 'test' ? 'node' : 'web',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '',
    filename: 'app.[hash].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      baseHref: '/',
      title: 'App Title'
    }),
    new CopyWebpackPlugin([{from: './src/resources/static', to: './' }]),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel', 'eslint']
      },
      {
        test: /(\.scss)$/,
        include: path.join(__dirname, 'src'),
        loaders: ["style", "css", "sass"]
      },
      {
        test: /(\.png|\.jpeg?|\.gif|\.svg)/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'file?name=./images/[name].[ext]'
        ]
      },
      {
        test: /(\.json)/,
        include: path.join(__dirname, 'src'),
        loaders: ['file?name=[name].[ext]']
      }
    ]
  }
};
