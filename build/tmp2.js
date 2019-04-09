  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var tmp1 = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,17],$V1=[1,6],$V2=[1,12],$V3=[1,10],$V4=[1,14],$V5=[1,9],$V6=[1,8,17,20,22,46],$V7=[1,8,15,17,20,22,46],$V8=[2,6],$V9=[2,7],$Va=[14,21],$Vb=[14,21,29,30,31,32],$Vc=[1,28],$Vd=[1,29],$Ve=[1,30],$Vf=[1,31],$Vg=[14,20,21,29,30,31,32],$Vh=[8,15,17,22,46],$Vi=[17,30,42,50,51,52],$Vj=[1,46],$Vk=[1,48],$Vl=[1,51],$Vm=[1,53],$Vn=[1,55],$Vo=[1,54],$Vp=[1,56],$Vq=[1,57],$Vr=[8,15,17,20,22,46],$Vs=[17,42],$Vt=[2,50];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Stylesheet":3,"RootList":4,"RootListItem":5,"Rule":6,"VariableDeclaration":7,"Comment":8,"Space":9,"NestedList":10,"NestedListItem":11,"StyleDeclaration":12,"SelectorList":13,"LeftBrace":14,"RightBrace":15,"Selector":16,"Ident":17,"ElementName":18,"SelectorAtomList":19,"Whitespace":20,"Comma":21,"WildcardSelector":22,"SelectorAtom":23,"Class":24,"Id":25,"PseudoClass":26,"PseudoElement":27,"Attribute":28,"Period":29,"Hash":30,"Colon":31,"LeftBracket":32,"RightBracket":33,"AttributeOperator":34,"AttributeValue":35,"Equals":36,"Includes":37,"DashMatch":38,"PrefixMatch":39,"SuffixMatch":40,"WildcardMatch":41,"String":42,"Property":43,"Expression":44,"Semicolon":45,"VariableName":46,"Literal":47,"DimensionNode":48,"Addition":49,"Percentage":50,"Number":51,"Dimension":52,"$accept":0,"$end":1},
terminals_: {2:"error",8:"Comment",14:"LeftBrace",15:"RightBrace",17:"Ident",20:"Whitespace",21:"Comma",22:"WildcardSelector",29:"Period",30:"Hash",31:"Colon",32:"LeftBracket",33:"RightBracket",36:"Equals",37:"Includes",38:"DashMatch",39:"PrefixMatch",40:"SuffixMatch",41:"WildcardMatch",42:"String",45:"Semicolon",46:"VariableName",49:"Addition",50:"Percentage",51:"Number",52:"Dimension"},
productions_: [0,[3,1],[4,1],[4,2],[5,1],[5,1],[5,1],[5,1],[10,1],[10,2],[11,1],[11,1],[6,7],[16,2],[16,2],[16,3],[9,1],[9,0],[13,1],[13,4],[18,1],[18,1],[19,1],[19,2],[23,1],[23,1],[23,1],[23,1],[23,1],[24,3],[25,2],[26,3],[27,4],[28,4],[28,6],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[35,1],[35,1],[12,6],[12,2],[43,1],[7,5],[44,1],[44,5],[47,2],[47,2],[47,2],[47,2],[47,2],[47,2],[48,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 this.$ = new Node.Stylesheet($$[$0]); return this.$; 
break;
case 2: case 8: case 18:
 this.$ = []; this.$.push($$[$0]); 
break;
case 3: case 9:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 6:
this.$ = new Node.Comment($$[$0]);
break;
case 7:
this.$ = null;
break;
case 12:
this.$ = new Node.QualifiedRule($$[$0-6], $$[$0-3]);
break;
case 13: case 14:
this.$ = new Node.Selector($$[$0-1]);
break;
case 15:
this.$ = new Node.Selector($$[$0-2] + $$[$0-1]);
break;
case 19:
 $$[$0-3].push($$[$0]); 
break;
case 20: case 21: case 22: case 24: case 25: case 26: case 27: case 28: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 45:
this.$ = $$[$0];
break;
case 23:
this.$ = $$[$0-1] + $$[$0];
break;
case 29: case 31:
this.$ = $$[$0-2] + $$[$0-1];
break;
case 30: case 49: case 50: case 51: case 52: case 53: case 54:
this.$ = $$[$0-1];
break;
case 32: case 33:
this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1];
break;
case 34:
this.$ = $$[$0-5] + $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1];
break;
case 43:
this.$ = new Node.StyleDeclaration($$[$0-5], $$[$0-2]);
break;
case 44:
this.$ = new Node.Comment($$[$0-1]);
break;
case 46:
this.$ = new Node.Variable($$[$0-4], $$[$0-1]);
break;
case 48:
 this.$ = $$[$0-4].add($$[$0]); 
break;
case 55:
this.$ = new Node.Dimension($$[$0]);
break;
}
},
table: [{1:$V0,3:1,4:2,5:3,6:4,7:5,8:$V1,9:7,13:8,16:11,17:$V2,18:13,20:$V3,22:$V4,46:$V5},{1:[3]},{1:[2,1],5:15,6:4,7:5,8:$V1,9:7,13:8,16:11,17:$V2,18:13,20:$V3,22:$V4,46:$V5},o($V6,[2,2]),o($V7,[2,4]),o($V7,[2,5]),o($V6,$V8),o($V7,$V9),{14:[1,16],21:[1,17]},{31:[1,18]},o([1,8,14,15,17,20,21,22,29,30,31,32,42,45,46,49,50,51,52],[2,16]),o($Va,[2,18]),o($Vb,[2,20],{9:19,20:$V3}),o($Va,$V0,{9:20,19:21,23:22,24:23,25:24,26:25,27:26,28:27,20:$V3,29:$Vc,30:$Vd,31:$Ve,32:$Vf}),o($Vg,[2,21]),o($V6,[2,3]),o($Vh,$V0,{9:32,20:$V3}),o([17,22],$V0,{9:33,20:$V3}),o($Vi,$V0,{9:34,20:$V3}),o($Va,[2,13]),o($Va,[2,14]),o($Va,$V0,{24:23,25:24,26:25,27:26,28:27,9:35,23:36,20:$V3,29:$Vc,30:$Vd,31:$Ve,32:$Vf}),o($Vg,[2,22]),o($Vg,[2,24]),o($Vg,[2,25]),o($Vg,[2,26]),o($Vg,[2,27]),o($Vg,[2,28]),{17:[1,37]},o($Vb,$V0,{9:38,20:$V3}),{17:[1,39],31:[1,40]},{17:[1,41]},{5:44,6:4,7:5,8:$Vj,9:7,10:42,11:43,12:45,13:8,15:$V0,16:11,17:$Vk,18:13,20:$V3,22:$V4,43:47,46:$V5},{16:49,17:$V2,18:13,22:$V4},{17:$Vl,30:$Vm,42:$Vn,47:50,48:52,50:$Vo,51:$Vp,52:$Vq},o($Va,[2,15]),o($Vg,[2,23]),o($Vb,$V0,{9:58,20:$V3}),o($Vg,[2,30]),o($Vb,$V0,{9:59,20:$V3}),{17:[1,60]},{33:[1,61],34:62,36:[1,63],37:[1,64],38:[1,65],39:[1,66],40:[1,67],41:[1,68]},{5:44,6:4,7:5,8:$Vj,9:69,11:70,12:45,13:8,15:$V0,16:11,17:$Vk,18:13,20:$V3,22:$V4,43:47,46:$V5},o($Vr,[2,8]),o($Vr,[2,10]),o($Vr,[2,11]),o($Vh,$V8,{9:71,20:$V3}),{31:[1,72]},o($Vb,[2,45],{9:19,20:$V3}),o($Va,[2,19]),{45:[1,73]},{9:74,20:$V3,45:$V0},{9:75,20:$V3,45:$V0},{9:76,20:$V3,45:$V0},{9:77,20:$V3,45:$V0},{9:78,20:$V3,45:$V0},{9:79,20:$V3,45:$V0},o([20,45,49],[2,55]),o($Vg,[2,29]),o($Vg,[2,31]),o($Vb,$V0,{9:80,20:$V3}),o($Vb,$V0,{9:81,20:$V3}),{17:[1,84],35:82,42:[1,83]},o($Vs,[2,35]),o($Vs,[2,36]),o($Vs,[2,37]),o($Vs,[2,38]),o($Vs,[2,39]),o($Vs,[2,40]),o([8,17,20,22,46],$V9,{15:[1,85]}),o($Vr,[2,9]),o($Vr,[2,44]),o($Vi,$V0,{9:86,20:$V3}),o($V7,[2,46]),{45:[2,49]},{45:$Vt},{45:[2,51]},{45:[2,52]},{45:[2,53]},{45:[2,54]},o($Vg,[2,32]),o($Vg,[2,33]),{33:[1,87]},{33:[2,41]},{33:[2,42]},o([1,8,15,17,22,46],$V0,{9:88,20:$V3}),{17:$Vl,30:$Vm,42:$Vn,44:89,47:90,48:91,50:$Vo,51:$Vp,52:$Vq},o($Vb,$V0,{9:92,20:$V3}),o($V7,[2,12]),{45:[1,93]},{45:[2,47]},o([45,49],$V0,{9:94,20:$V3}),o($Vg,[2,34]),o($Vh,$V0,{9:95,20:$V3}),{45:$Vt,49:[1,96]},o($Vr,[2,43]),{9:97,20:$V3,52:$V0},{48:98,52:$Vq},{45:[2,48]}],
defaultActions: {74:[2,49],75:[2,50],76:[2,51],77:[2,52],78:[2,53],79:[2,54],83:[2,41],84:[2,42],90:[2,47],98:[2,48]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = new Error();

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: return "Includes"; 
break;
case 1: return "DashMatch"; 
break;
case 2: return "PrefixMatch"; 
break;
case 3: return "SuffixMatch"; 
break;
case 4: return "WildcardMatch"; 
break;
case 5: return "Comment"; 
break;
case 6: return "Uri"; 
break;
case 7: return "BadUri"; 
break;
case 8: return "Function"; 
break;
case 9: return "Ident"; 
break;
case 10: return "AtKeyword"; 
break;
case 11: return "VariableName"; 
break;
case 12: return "String"; 
break;
case 13: return "BadString"; 
break;
case 14: return "BadComment"; 
break;
case 15: return "Hash"; 
break;
case 16: return "Dimension"; 
break;
case 17: return "Percentage"; 
break;
case 18: return "Number"; 
break;
case 19: return "UnicodeRange"; 
break;
case 20: return "CommentDelimiterOpen"; 
break;
case 21: return "CommentDelimiterClose"; 
break;
case 22: return "Colon"; 
break;
case 23: return "Semicolon"; 
break;
case 24: return "LeftBrace"; 
break;
case 25: return "RightBrace"; 
break;
case 26: return "LeftParenthesis"; 
break;
case 27: return "RightParenthesis"; 
break;
case 28: return "LeftBracket"; 
break;
case 29: return "RightBracket"; 
break;
case 30: return "WildcardSelector"; 
break;
case 31: return "Comma"; 
break;
case 32: return "Period"; 
break;
case 33: return "Equals"; 
break;
case 34: return "Addition"; 
break;
case 35: return "Whitespace"; 
break;
}
},
rules: [/^(?:~=)/,/^(?:\|=)/,/^(?:\^=)/,/^(?:\$=)/,/^(?:\*=)/,/^(?:(\/\*[^*]*\*+([^\/*][^*]*\*+)*\/))/,/^(?:(url\(([ \t\r\n\f]*)(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*")|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*'))([ \t\r\n\f]*)\)))/,/^(?:((url\(([ \t\r\n\f]*)([!#$%&*-~]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*([ \t\r\n\f]*))|(url\(([ \t\r\n\f]*)(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*")|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*'))([ \t\r\n\f]*))|(url\(([ \t\r\n\f]*)(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*\\?)|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*\\?)))))/,/^(?:([-]?([_a-z]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-zA-Z0-9-]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*)\()/,/^(?:([-]?([_a-z]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-zA-Z0-9-]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:@([-]?([_a-z]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-zA-Z0-9-]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:\$([-]?([_a-z]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-zA-Z0-9-]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*")|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*')))/,/^(?:(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*\\?)|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*\\?)))/,/^(?:((\/\*[^*]*\*+([^\/*][^*]*\*+)*)|(\/\*[^*]*(\*+[^\/*][^*]*)*)))/,/^(?:#(([_a-zA-Z0-9-]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))+))/,/^(?:([0-9]+|[0-9]*\.[0-9]+)([-]?([_a-z]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-zA-Z0-9-]|([^\0-\237])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:([0-9]+|[0-9]*\.[0-9]+)%)/,/^(?:([0-9]+|[0-9]*\.[0-9]+))/,/^(?:([Uu]\+[0-9a-fA-F?]{1,6}([0-9a-fA-F]{1,6})?))/,/^(?:<!--)/,/^(?:-->)/,/^(?::)/,/^(?:;)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\*)/,/^(?:,)/,/^(?:\.)/,/^(?:=)/,/^(?:\+)/,/^(?:([ \t\r\n\f]*))/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = tmp1;
exports.Parser = tmp1.Parser;
exports.parse = function () { return tmp1.parse.apply(tmp1, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
