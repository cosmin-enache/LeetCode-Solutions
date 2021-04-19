/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// ** PLAN **

// O(n) solution

// DFS In Order traversal (Recursive)

var inorderTraversal = (function DFSInOrder(node, list=[]) {
    if (node) {
        if (node.left) {
        DFSInOrder(node.left, list);
        }

        list.push(node.val);

        if (node.right) {
            DFSInOrder(node.right, list);
        }
    }
    return list;
});