define(['node'], function(Node) {
  var StyleDeclaration = function(property, value) {
    Node.call(this);
    this.property = property;
    this.value = value;
  }

  StyleDeclaration.prototype = Object.create(Node.prototype);
  StyleDeclaration.prototype.constructor = StyleDeclaration;

  StyleDeclaration.prototype.compile = function() {
    var output = this.property + ': ';
    if (this.value.compile) {
      output += this.value.compile();
    } else {
      output += this.value;
    }
    output += ';';
    return output;
  }

  return StyleDeclaration;
});
