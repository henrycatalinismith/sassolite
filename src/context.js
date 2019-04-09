define([], function() {
  var Context = function() {
    this.nesting = 0;
  }

  Context.prototype.enterScope = function() {
    this.nesting++;
  }

  Context.prototype.leaveScope = function() {
    this.nesting--;
  }

  Context.prototype.indent = function() {
    var space = '';
    for (var i = 0; i < this.nesting; i++) {
      space += '  ';
    }
    return space;
  }

  return Context;
});
