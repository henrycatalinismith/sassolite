%%Variables
%%

VariableDeclaration
  : VariableName Colon Space Literal Semicolon -> new Node.Variable($1, $4)
  ;

