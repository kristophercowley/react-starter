var webpack = require('webpack');
var path = require('path');
var purify = require("purifycss-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  debug: true,
  devtool: 'source-map',
  noInfo: true,
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '',
    filename: 'app.[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['dist'], {root: __dirname, verbose: false, dry: false}),
    new CopyWebpackPlugin([{from: './src/resources/static', to: './' }]),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // Remove unused locales in momentjs
    new purify({basePath: __dirname, paths: ["src/*.html", "src/*.js", "src/**/*.js"]}),
    new OptimizeCssAssetsPlugin({cssProcessorOptions: { discardComments: {removeAll: true } }}),
    new webpack.optimize.UglifyJsPlugin({}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      baseHref: '/broncoday/',
      title: 'App Title'
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
        loaders: ['style', 'css', 'sass', 'postcss']
      },
      {
        test: /(\.png|\.jpeg|\.jpg|\.gif|\.svg)/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'file?name=./images/[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 3, interlaced: false, pngquant:{quality: "75-95", speed: 5}}'
        ]
      },
      {
        test: /(\.json)/,
        include: path.join(__dirname, 'src'),
        loaders: ['file?name=[name].[ext]']
      }
    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['> 5%'] })];
  }
};


