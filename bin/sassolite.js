#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var src = path.join(path.dirname(fs.realpathSync(__filename)), '../src');
var sassolite = require(src);

process.stdin.resume();
process.stdin.setEncoding('utf8');

var buffer = '';
process.stdin.on('data', function(data) {
  buffer += data;
});

process.stdin.on('end', function() {
  process.stdout.write(sassolite.compile(buffer));
});

