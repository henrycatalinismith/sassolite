var requirejs = require('requirejs');
requirejs.config({
  baseUrl: __dirname,
  nodeRequire: require,
  paths: {
    'parser': __dirname + '/../build/parser'
  }
});
module.exports = requirejs('./sassolite');
