var requirejs = require('requirejs'),
    Node = requirejs('node/index'),
    parse = requirejs('sassolite').parse;

describe('sassolite', function() {

  describe("#parse", function () {

    describe('very basic valid stylesheet', function() {
      var stylesheet = parse('h1 { color: red; }');

      it('is recognised as a stylesheet', function() {
        stylesheet.should.be.instanceOf(Node.Stylesheet);
      });

      it('stores the selector in the tree', function() {
        stylesheet
          .children[0]
          .selectors[0]
          .ident.should.equal('h1');
      });

      it('stores the declaration property', function() {
        stylesheet
          .children[0].children[0]
          .property.should.equal('color');
      });

      it('stores the declaration value', function() {
        stylesheet
          .children[0].children[0]
          .value.should.equal('red');
      });

    });

    describe('variable declaration', function() {
      var stylesheet = parse('$size: 10px;');

      it('stores the name of the variable', function() {
        stylesheet.children[0].name.should.equal('$size');
      });

      it('stores the value of the variable', function() {
        stylesheet.children[0].value.compile().should.equal('10px');
      });

    });

  });

});
