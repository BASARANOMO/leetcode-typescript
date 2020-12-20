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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    let q: TreeNode[] = [];
    q.push(root);
    while (q.length > 0) {
        let current: TreeNode = q[0];
        q.shift();
        let temp: TreeNode | null = current.left;
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
};