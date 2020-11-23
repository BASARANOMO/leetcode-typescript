"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this._store = [];
    }
    Stack.prototype.push = function (val) {
        this._store.push(val);
    };
    Stack.prototype.pop = function () {
        return this._store.pop();
    };
    return Stack;
}());
function decodeString(s) {
    var str = "";
    var stk = new Stack();
    var num = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (!isNaN(Number(char))) {
            num = num * 10 + Number(char);
        }
        else if (char === "[") {
            stk.push(str);
            stk.push(num);
            str = "";
            num = 0;
        }
        else if (char === "]") {
            var prevNum = stk.pop();
            var prevStr = stk.pop();
            var tempStr = "";
            for (var i = 0; i < prevNum; i++) {
                tempStr += str;
            }
            str = prevStr + tempStr;
        }
        else { // alphabet
            str += char;
        }
    }
    return str;
}
;
