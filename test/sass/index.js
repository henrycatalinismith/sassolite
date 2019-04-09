var sassolite = require(__dirname + '/../../src');
var fs = require('fs');
var mocha = require('mocha');
var should = require('should');
var glob = require('glob');
var path = require('path');
var assert = require('assert');

var sass = glob.sync(__dirname + '/*/*.scss');


sass.map(function(filename) {
  var counterpart = filename.replace('scss', 'css');

  var remove = path.resolve(filename, __dirname + '/sass/')
  var sassName = filename.substring(remove.length + 1);
  var cssName = sassName.replace('scss', 'css');

  describe(sassName, function() {
    it('matches ' + cssName, function() {
      var input = fs.readFileSync(filename, { encoding: 'UTF-8' });
      var expected = fs.readFileSync(counterpart, { encoding: 'UTF-8' });

      assert.equal(sassolite.compile(input), expected);
    });
  });

});
