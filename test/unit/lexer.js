var requirejs = require('requirejs'),
    _ = require('underscore'),
    tokenize = requirejs('sassolite').tokenize;

describe('sassolite', function() {

  describe("#tokenize", function () {

    it("returns an array", function () {
      tokenize("").should.be.an.instanceOf(Array);
    });

    ['h1', 'h2', 'h3', 'p', 'a', 'body', 'img'].map(function(tag) {
      it('recognizes the ' + tag + ' tag as an ident', function() {
        tokenize(tag)[0].should.equal('Ident');
      });
    });

    ['red', 'blue', 'green', 'orange', 'black', 'white'].map(function(color) {
      it('recognizes the color ' + color + ' as an ident', function() {
        tokenize(color)[0].should.equal('Ident');
      });
    });

    [' ', "\n", "\t\t\t\n"].map(function(space) {
      it('recognizes all the whitespace', function() {
        tokenize(space)[0].should.equal('Whitespace');
      });
    });

    _.each({
      ':'            : 'Colon',
      ';'            : 'Semicolon',
      '{'            : 'LeftBrace',
      '}'            : 'RightBrace',
      '('            : 'LeftParenthesis',
      ')'            : 'RightParenthesis',
      '['            : 'LeftBracket',
      ']'            : 'RightBracket',
      '@media'       : 'AtKeyword',
      '"test"'       : 'String',
      '"badstring1'  : 'BadString',
      "'badstring2"  : 'BadString',
      'url(-baduri1' : 'BadUri',
      'url("baduri3' : 'BadUri',
      '/* bad1 *'    : 'BadComment',
      '/* bad2'      : 'BadComment',
      '#hash'        : 'Hash',
      '#FFF'         : 'Hash',
      '2000'         : 'Number',
      '99%'          : 'Percentage',
      '20px'         : 'Dimension',
      'url("a.png")' : 'Uri',
      'U+26'         : 'UnicodeRange',
      'U+26-00FF'    : 'UnicodeRange',
      'U+4??'        : 'UnicodeRange',
      'U+4??'        : 'UnicodeRange',
      '<!--'         : 'CommentDelimiterOpen',
      '-->'          : 'CommentDelimiterClose',
      '/* lol */'    : 'Comment',
      'calc('        : 'Function',
      '~='           : 'Includes',
      '|='           : 'DashMatch',
      '$size'        : 'VariableName',
      '*'            : 'WildcardSelector',
      '='            : 'Equals',
      '^='           : 'PrefixMatch',
      '$='           : 'SuffixMatch',
      '*='           : 'WildcardMatch',
      '+'            : 'Addition',
    }, function(token, word) {
      it('recognizes ' + word + ' as ' + token, function () {
        tokenize(word)[0].should.equal(token);
      });
    });

  });

});
