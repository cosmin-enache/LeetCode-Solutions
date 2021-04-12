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
 * @return {number[][]}
 */

// ** PLAN **

// O(n) solution, where n is the number of nodes

// Create a 'LevelNode' class, which contains everything a regular node contains, with the addition of a 'level' variable.
// BFT the tree and add the nodes to their appropriate 'level' arrays within the 'result' array.
// return result array

function LevelNode({ val, left, right }, level) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.level = level;
}

var levelOrder = function(root) {
    if (!root) return [];
    
    root = new LevelNode(root, 1);
    
    const queue = [root];
    const result = [];
    
    while (queue.length > 0) {
        const shift = queue.shift();
        
        if (result.length < shift.level) {
            result.push([shift.val]);
        } else {
            result[shift.level - 1].push(shift.val);
        }
        
        if (shift.left) {
            queue.push(new LevelNode(shift.left, shift.level + 1));
        }
        
        if (shift.right) {
            queue.push(new LevelNode(shift.right, shift.level + 1));
        }
    }
    
    return result;
};
