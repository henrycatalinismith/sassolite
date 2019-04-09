%%Styles
%%

StyleDeclaration
  : Property Colon Space Expression Semicolon Space -> new Node.StyleDeclaration($1, $4)
  | Comment Space -> new Node.Comment($1)
  ;

Property
  : Ident -> $1
  ;

