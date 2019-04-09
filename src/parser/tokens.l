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
