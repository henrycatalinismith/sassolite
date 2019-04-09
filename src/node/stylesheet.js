define(['node', 'context'], function(Node, Context) {
  var Stylesheet = function(rules) {
    Node.call(this);
    rules.map(this.pushChild.bind(this));
  }

  Stylesheet.prototype = Object.create(Node.prototype);
  Stylesheet.prototype.constructor = Stylesheet;

  Stylesheet.prototype.compile = function() {
    var context = new Context;
    return this.children.map(function(rule) {
      return context.indent() + rule.compile(context);
    }).join("\n");
  }

  return Stylesheet;
});
