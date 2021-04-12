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
 * @return {boolean}
 */

// ** PLAN **
// BFT the tree, storing 2 references to the root node and comparing the left node to the right node, when popping each iteration
// if they are not equal then return false
// O(n) solution, where n is the number of nodes in the tree

var isSymmetric = function(root) {
    const queue = [root, root];
    
    while (queue.length > 0) {
        const [n1, n2] = [queue.shift(), queue.shift()];
        
        if (!n1 && !n2) continue;
        if (!n1 || !n2) return false;
        if (n1.val !== n2.val) return false;
        
        queue.push(n1.left);
        queue.push(n2.right);
        queue.push(n1.right);
        queue.push(n2.left);
    }
    
    return true;
};