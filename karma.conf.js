var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: false,
    autoWatch: true,
    frameworks: [ 'jasmine' ],
    files: [
      './spec/*.js',
      './spec/**/*.js'
    ],
    preprocessors: {
      './spec/*.js': [ 'webpack', 'sourcemap' ],
      './spec/**/*.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      },
      node : {
        fs: 'empty'
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};