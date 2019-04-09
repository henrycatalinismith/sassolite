define(['node'], function(Node) {
  var Dimension = function() {
    Node.call(this);
    if (arguments.length === 1) {
      var matches = arguments[0].match(/([0-9]+|[0-9]*\.[0-9]+)(.*)$/);
      this.amount = parseInt(matches[1], 10);
      this.units = matches[2];
    } else {
      this.amount = arguments[0];
      this.units = arguments[1];
    }
  }

  Dimension.prototype = Object.create(Node.prototype);
  Dimension.prototype.constructor = Dimension;

  Dimension.prototype.compile = function() {
    return this.amount + this.units;
  }

  Dimension.prototype.add = function(dimension) {
    return new Dimension(this.amount + dimension.amount, this.units);
  }

  return Dimension;
});
