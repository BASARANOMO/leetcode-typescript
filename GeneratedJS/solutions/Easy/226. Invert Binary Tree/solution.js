"use strict";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function invertTree(root) {
    if (root === null)
        return null;
    var q = [];
    q.push(root);
    while (q.length > 0) {
        var current = q[0];
        q.shift();
        var temp = current.left;
        current.left = current.right;
        current.right = temp;
        if (current.left != null) {
            q.push(current.left);
        }
        if (current.right != null) {
            q.push(current.right);
        }
    }
    return root;
}
;
