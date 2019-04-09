%lex

ident       [-]?{nmstart}{nmchar}*
name        {nmchar}+
nmstart     [_a-z]|{nonascii}|{escape}
nonascii    [^\0-\237]
unicode     \\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
escape      {unicode}|\\[^\n\r\f0-9a-f]
nmchar      [_a-zA-Z0-9-]|{nonascii}|{escape}
string      {string1}|{string2}
string1     \"([^\n\r\f\\"]|\\{nl}|{escape})*\"
string2     \'([^\n\r\f\\']|\\{nl}|{escape})*\'
badstring   {badstring1}|{badstring2}
badstring1  \"([^\n\r\f\\"]|\\{nl}|{escape})*\\?
badstring2  \'([^\n\r\f\\']|\\{nl}|{escape})*\\?
baduri      {baduri1}|{baduri2}|{baduri3}
baduri1     'url('{w}([!#$%&*-~]|{nonascii}|{escape})*{w}
baduri2     'url('{w}{string}{w}
baduri3     'url('{w}{badstring}
badcomment  {badcomment1}|{badcomment2}
badcomment1 \/\*[^*]*\*+([^/*][^*]*\*+)*
badcomment2 \/\*[^*]*(\*+[^/*][^*]*)*
num         [0-9]+|[0-9]*\.[0-9]+
uri         'url('{w}{string}{w}')'
urange      [Uu]\+[0-9a-fA-F?]{1,6}(-[0-9a-fA-F]{1,6})?
comment      \/\*[^*]*\*+([^/*][^*]*\*+)*\/
nl          \n|\r\n|\r|\f
w	    [ \t\r\n\f]*

%%

"~="          { return "Includes"; }
"|="          { return "DashMatch"; }
"^="          { return "PrefixMatch"; }
"$="          { return "SuffixMatch"; }
"*="          { return "WildcardMatch"; }
{comment}     { return "Comment"; }
{uri}         { return "Uri"; }
{baduri}      { return "BadUri"; }
{ident}"("    { return "Function"; }
{ident}       { return "Ident"; }
"@"{ident}    { return "AtKeyword"; }
"$"{ident}    { return "VariableName"; }
{string}      { return "String"; }
{badstring}   { return "BadString"; }
{badcomment}  { return "BadComment"; }
"#"{name}     { return "Hash"; }
{num}{ident}  { return "Dimension"; }
{num}"%"      { return "Percentage"; }
{num}         { return "Number"; }
{urange}      { return "UnicodeRange"; }
"<!--"        { return "CommentDelimiterOpen"; }
"-->"         { return "CommentDelimiterClose"; }
":"           { return "Colon"; }
";"           { return "Semicolon"; }
"{"           { return "LeftBrace"; }
"}"           { return "RightBrace"; }
"("           { return "LeftParenthesis"; }
")"           { return "RightParenthesis"; }
"["           { return "LeftBracket"; }
"]"           { return "RightBracket"; }
"*"           { return "WildcardSelector"; }
","           { return "Comma"; }
"."           { return "Period"; }
"="           { return "Equals"; }
"+"           { return "Addition"; }
{w}           { return "Whitespace"; }

/lex
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

StyleDeclaration
  : Property Colon Space Expression Semicolon Space -> new Node.StyleDeclaration($1, $4)
  | Comment Space -> new Node.Comment($1)
  ;

Property
  : Ident -> $1
  ;


VariableDeclaration
  : VariableName Colon Space Literal Semicolon -> new Node.Variable($1, $4)
  ;


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
