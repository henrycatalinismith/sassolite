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

