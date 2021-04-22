/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// ** PLAN **

// O(n^2) time / space

// sort
// result = []
// if not first index and duplicate, continue
// left = i + 1
// right = last index

// while left < right
    // sum = elements at (i + left + right)
    // if sum === 0 
        // push to result
        // increment left
        // while current left === past left && left < right, increment left
    // else if sum > 0
        // right--;
    // else if sum < 0
        // left++;
// return result

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    const len = nums.length;
    const result = [];
    
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = len - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while (nums[left - 1] === nums[left] && left < right) left++;
            }
        }
    }
    
    return result;
};