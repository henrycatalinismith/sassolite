define(['node'], function(Node) {
  var QualifiedRule = function(selectors, declarations) {
    Node.call(this);
    this.selectors = selectors;
    declarations.map(this.pushChild.bind(this));
  }

  QualifiedRule.prototype = Object.create(Node.prototype);
  QualifiedRule.prototype.constructor = QualifiedRule;

  QualifiedRule.prototype.compile = function(context) {
    var output = '';
    var suffix = '';
    var childLeaves = [];
    var hasLeaves = this.hasLeaves();

    if (hasLeaves) {
      context.enterScope();
    }

    for (var i in this.children) {
      var child = this.children[i];

      if (child instanceof Node) {
        if (child.isLeaf()) {
          childLeaves.push(context.indent() + child.compile(context));
        } else {
          suffix += child.compile(context);
        }
      }
    }

    if (childLeaves.length) {
      output += this.compileSelectors() + " {\n";
      output += childLeaves.join("\n") + " }\n";
    } else {
      output += suffix;
    }

    if (hasLeaves) {
      context.leaveScope();
    }
    return output;
  }

  QualifiedRule.prototype.compileSelectors = function() {
    var selectors = this.selectors.map(function(selector) {
      return selector.compile();
    }).join(', ');
    if (this.parent && this.parent.compileSelectors) {
      selectors = this.parent.compileSelectors() + ' ' + selectors;
    }
    return selectors;
  }

  QualifiedRule.prototype.hasLeaves = function() {
    return this.children.filter(function(child) {
      return child instanceof Node && child.isLeaf();
    }).length > 0;
  }

  return QualifiedRule;
});
