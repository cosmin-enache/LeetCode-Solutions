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
 * @return {number}
 */

// ** PLAN **
// keep a maxDepth variable
// Use DFS to traverse tree
// pass the DFS function a variable 'currentLevel' with a default value of 1
// Each time a child node is accessed, increment currentLevel within the function
// after currentLevel is incremented, compare it to maxDepth, and if larger => maxDepth = currentLevel

// O(n) worst case, where n is the number of nodes in the binary tree

var maxDepth = function(root) {
    if (!root) return 0;
    
    let maxDepth = 1;
    
    (function DFS(node, currentLevel = 1) {
        maxDepth = Math.max(maxDepth, currentLevel);
        
        if (node.left) {
            DFS(node.left, currentLevel + 1);
        }
        if (node.right) {
            DFS(node.right, currentLevel + 1);
        }
    })(root);
    
    return maxDepth;
};