"use strict";
function fizzBuzz(n) {
    var res = [];
    for (var i = 1; i <= n; i++) {
        var temp = '';
        if (i % 3 == 0) {
            temp += "Fizz";
        }
        if (i % 5 == 0) {
            temp += "Buzz";
        }
        if (temp == '') {
            temp += i;
        }
        res.push(temp);
    }
    return res;
}
;
