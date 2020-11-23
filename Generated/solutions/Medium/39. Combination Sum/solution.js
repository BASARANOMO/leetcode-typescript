"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var res = [];
function combinationSum(candidates, target) {
    res = [];
    candidates.sort();
    backtracking([], candidates, target, 0);
    return res;
}
function backtracking(path, candidates, target, pos) {
    if (target < 0) {
        return;
    }
    else if (target === 0) {
        res.push(path);
    }
    else {
        for (var i = pos; i < candidates.length; i++) {
            path.push(candidates[i]);
            // note, it's important we spread path (make a copy of it)
            // so that all calls in recursion tree aren't modifying same array
            backtracking(__spreadArrays(path), candidates, target - candidates[i], i);
            path.splice(-1, 1);
        }
    }
}
