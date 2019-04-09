var fs = require('fs');
var spawn = require('child_process').spawn;

var bin = fs.realpathSync(__dirname + '/../../../bin/sassolite.js');

module.exports = function() {

  var child;
  var output;

  this.When(/^I pipe "([^"]*)" into sassolite$/, function (sass, callback) {
    output = null;

    child = spawn(bin);
    child.stdin.setEncoding('utf-8');
    child.stdout.setEncoding('utf-8');
    child.stdin.write(sass);
    callback();
  });

  this.Then(/^it should output$/, function (expected, callback) {
    child.stdout.on('data', function(css) {
      if (css === expected) {
        callback();
      } else {
        callback.fail(new Error('Output ' + css + ' does not match expected ' + expected));
      }
    });
    child.stdin.end();
  });

};
