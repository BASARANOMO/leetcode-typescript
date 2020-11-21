 //Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    let lev: TreeNode[] = [root];
    let res: number[][] = [];
    let tempLev: TreeNode[] = [];
    let tempVal: number[] = [];
    while (lev.length != 0) {
        tempLev = [];
        tempVal = [];
        for (let node of lev) {
            tempVal.push(node.val);
            tempLev.push(node.left);
            tempLev.push(node.right);
        }
        res.push(tempVal);
        lev = [];
        for (let node of tempLev) {
            if (node) {
                lev.push(node);
            }
        }
    }
    return res;
};