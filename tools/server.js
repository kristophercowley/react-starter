var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('../webpack-dev.config');

var bundler = webpack(webpackConfig);

browserSync({
  port: 9080,
  server: {
    baseDir: 'src',
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(bundler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    'src/*.html'
  ]
});
