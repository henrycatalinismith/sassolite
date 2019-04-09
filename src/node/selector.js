define(['node'], function(Node) {
  var Selector = function(ident) {
    Node.call(this);
    this.ident = ident;
  }

  Selector.prototype = Object.create(Node.prototype);
  Selector.prototype.constructor = Selector;

  Selector.prototype.compile = function() {
    return this.ident;
  }

  return Selector;
});
