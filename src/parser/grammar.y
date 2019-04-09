%start Stylesheet
%%

Stylesheet 
  : RootList %{ $$ = new Node.Stylesheet($1); return $$; %}
  ;

RootList
  : RootListItem %{ $$ = []; $$.push($1); %}
  | RootList RootListItem %{ $$ = $1; $$.push($2); %}
  ;

RootListItem
  : Rule
  | VariableDeclaration
  | Comment -> new Node.Comment($1)
  | Space -> null
  ;

NestedList
  : NestedListItem %{ $$ = []; $$.push($1); %}
  | NestedList NestedListItem %{ $$ = $1; $$.push($2); %}
  ;

NestedListItem
  : RootListItem
  | StyleDeclaration
  ;

Rule
  : SelectorList LeftBrace Space NestedList Space RightBrace Space -> new Node.QualifiedRule($1, $4)
  ;

Selector
  : Ident Space -> new Node.Selector($1)
  ;

Space
  : Whitespace
  |
  ;
