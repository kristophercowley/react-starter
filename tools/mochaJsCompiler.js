'use strict'
var babel = require('babel-core/register');
function noop() {
  return null;
}
['.scss', '.css', '.png', '.jpg', '.jpeg', '.svg', '.gif'].map(function(ext){
  require.extensions[ext] = noop;
});
