/**
 * @param {number[]} nums
 * @return {number}
 */

// ** PLAN **
// O(n) time complexity
// O(n) space complexity

// loop through all numbers and add them to a set
// loop through numbers from 0 to nums.length inclusive
    // if i is not in set then return i;

var missingNumber = function(nums) {
    const set = new Set();
    
    for (const n of nums) {
        set.add(n);
    }
    
    const len = nums.length;
    
    for (let i = 0; i <= len; i++) {
        if (!set.has(i)) return i;
    }
};