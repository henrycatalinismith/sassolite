define(['parser'], function(parser) {

  //parser.lexer = lexer;
  parser.yy.parseError = parser.parseError;

  return {

    tokenize: function(sass) {
      var tokens = [];
      parser.lexer.setInput(sass);
      while (!parser.lexer.done) {
        tokens.push(parser.lexer.lex());
        if (tokens.length > 99) {
          return tokens;
        }
      }
      return tokens;
    },

    parse: function(sass) {
      return parser.parse(sass);
    },

    compile: function(sass) {
      return parser.parse(sass).compile();
    }

  };
});
