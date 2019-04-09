define(['node'], function(Node) {
  var Comment = function(text) {
    Node.call(this);
    this.text = text;
  }

  Comment.prototype = Object.create(Node.prototype);
  Comment.prototype.constructor = Comment;

  Comment.prototype.compile = function() {
    return this.text;
  }

  return Comment;
});
