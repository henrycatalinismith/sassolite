%%Selectors
%%

SelectorList
  : Selector %{ $$ = []; $$.push($1); %}
  | SelectorList Comma Space Selector %{ $1.push($4); %}
  ;

Selector
  : ElementName Space -> new Node.Selector($1)
  | ElementName SelectorAtomList Space -> new Node.Selector($1 + $2)
  ;

ElementName
  : Ident -> $1
  | WildcardSelector -> $1
  ;

SelectorAtomList
  : SelectorAtom -> $1
  | SelectorAtomList SelectorAtom -> $1 + $2
  ;

SelectorAtom
  : Class         -> $1
  | Id            -> $1
  | PseudoClass   -> $1
  | PseudoElement -> $1
  | Attribute     -> $1
  ;

Class
  : Period Ident Space -> $1 + $2
  ;

Id
  : Hash Space -> $1
  ;

PseudoClass
  : Colon Ident Space -> $1 + $2
  ;

PseudoElement
  : Colon Colon Ident Space -> $1 + $2 + $3
  ;

Attribute
  : LeftBracket Ident RightBracket Space -> $1 + $2 + $3
  | LeftBracket Ident AttributeOperator AttributeValue RightBracket Space -> $1 + $2 + $3 + $4 + $5
  ;

AttributeOperator
  : Equals        -> $1
  | Includes      -> $1
  | DashMatch     -> $1
  | PrefixMatch   -> $1
  | SuffixMatch   -> $1
  | WildcardMatch -> $1
  ;

AttributeValue
  : String -> $1
  | Ident  -> $1
  ;
