var should = require('should');
describe('sassolite.js', function() {
  it("loads properly through Node's 'require' function", function() {
    require(__dirname + '/../../build/sassolite.js')
      .compile('h1 { color: red; }')
      .should
      .equal("h1 {\n  color: red; }\n");
  });
});
