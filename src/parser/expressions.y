%%Styles
%%

Expression
  : Literal
  | DimensionNode Space Addition Space DimensionNode %{ $$ = $1.add($5); %}
  ; 

Literal
  : Ident Space      -> $1
  | DimensionNode Space  -> $1
  | Hash Space       -> $1
  | Percentage Space -> $1
  | String Space     -> $1
  | Number Space     -> $1
  ;

DimensionNode
  : Dimension -> new Node.Dimension($1)
  ;
