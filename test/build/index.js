describe(window.buildName + ' build', function() {

  it('compiles a basic stylesheet', function () {
    Sassolite
      .compile('h1 { color: red; }')
      .should
      .equal("h1 {\n  color: red; }\n");
  });

});
