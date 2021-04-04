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

// Due to the way a binary tree is structured, 
// a parent node's left node has a value smaller than the parent node
// a parent node's right node has a value larger than the parent node
// therefore, the binary tree, when traversed from smallest to largest value,
// must contain sorted values only! and no duplicates!

// 1. Depth First Search - In Order O(n) [Recursive], where n is the number of nodes traversed

// 2. check whether the values in the returned list are sorted properly

// I picked the recursive solution due to its ease of use

const DFS = (node, list=[]) => {
    if (node.left) {
        DFS(node.left, list);
    }
    
    list.push(node.val);
    
    if (node.right) {
        DFS(node.right, list);
    }
    
    return list;
}; 

const validateList = list => {
    const len = list.length;
    
    for (let i = 1; i < len; i++) {
        if (list[i - 1] >= list[i]) return false;
    }
    
    return true;
};

var isValidBST = function(root) {
    const list = DFS(root);
    
    return validateList(list);
};