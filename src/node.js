define([], function() {

  var Node = function() {
    this.parent = null;
    this.children = [];
  }

  Node.prototype.pushChild = function(child) {
    if (child !== null) {
      child.parent = this;
      this.children.push(child);
    }
  }

  Node.prototype.isLeaf = function() {
    return this.children.length < 1;
  }

  return Node;
});
