define([

  'node/comment',
  'node/dimension',
  'node/qualified-rule',
  'node/selector',
  'node/stylesheet',
  'node/style-declaration',
  'node/variable'

], function(

  Comment,
  Dimension,
  QualifiedRule,
  Selector,
  Stylesheet,
  StyleDeclaration,
  Variable

) {

  return {
    Comment: Comment,
    Dimension: Dimension,
    QualifiedRule: QualifiedRule,
    Selector: Selector,
    Stylesheet: Stylesheet,
    StyleDeclaration: StyleDeclaration,
    Variable: Variable
  };

});
