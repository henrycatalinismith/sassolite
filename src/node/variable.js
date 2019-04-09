define(['node'], function(Node) {
  var Variable = function(name, value) {
    Node.call(this);
    this.name = name;
    this.value = value;
  }

  Variable.prototype = Object.create(Node.prototype);
  Variable.prototype.constructor = Variable;

  Variable.prototype.compile = function() {
    return '';
  }

  return Variable;
});
