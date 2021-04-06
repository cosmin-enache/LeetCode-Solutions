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
 * @return {TreeNode}
 */

// ** PLAN **
// valueList = []
// BFS traversal (O(n) solution, where n is the total number of nodes)
    // while traversing, invert node children, then add to queue if not empty

var invertTree = function(root) {
    if (!root) return null;
    
    let queue = [root];
    
    while (queue.length > 0) {
        const shifted = queue.shift();
        
        [shifted.left, shifted.right] = [shifted.right, shifted.left];
        
        if (shifted.left) {
            queue.push(shifted.left);
        }
        
        if (shifted.right) {
            queue.push(shifted.right);
        }
    }
    
    return root;
};