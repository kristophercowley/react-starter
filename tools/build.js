var webpack = require('webpack');
var webpackConfig = require('../webpack-prod.config');

webpack(webpackConfig).run((err, stats) => {
  console.log('Generating minified bundle for production use via Webpack...');

  if (err) { //so a fatal error occurred. Stop here.
    console.log(error.bold.red);
    return 1;
  }

  var jsonStats = stats.toJson();

  if (jsonStats.hasErrors) return jsonStats.errors.map(error => console.log(error));

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log('Webpack stats: ' + stats.toString());

  //if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!');
  return 0;
});
