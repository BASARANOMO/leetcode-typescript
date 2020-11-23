"use strict";
//Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function levelOrder(root) {
    if (!root) {
        return [];
    }
    var lev = [root];
    var res = [];
    var tempLev = [];
    var tempVal = [];
    while (lev.length != 0) {
        tempLev = [];
        tempVal = [];
        for (var _i = 0, lev_1 = lev; _i < lev_1.length; _i++) {
            var node = lev_1[_i];
            tempVal.push(node.val);
            tempLev.push(node.left);
            tempLev.push(node.right);
        }
        res.push(tempVal);
        lev = [];
        for (var _a = 0, tempLev_1 = tempLev; _a < tempLev_1.length; _a++) {
            var node = tempLev_1[_a];
            if (node) {
                lev.push(node);
            }
        }
    }
    return res;
}
;
