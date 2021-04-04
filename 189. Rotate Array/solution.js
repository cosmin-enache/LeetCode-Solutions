/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// ** PLAN **
// Two-pass O(n) algorithm

// newArr = new array of nums length
// for i = 0 to nums length
    // newIndex = (i + k) % nums length
    // set newArr at newIndex to nums at i
// copy all the values from newArr to nums

// DONE

const setValues = (nums, k, len) => {
    return nums.reduce((a, n, i) => {
        a[(i + k) % len] = n;
        return a;
    }, new Array(len));
};

const copyToNums = (newArr, nums, len) => {
    for (let i = 0; i < len; i++) {
        nums[i] = newArr[i];
    }
}

var rotate = function(nums, k) {
    const len = nums.length;
    const newArr = setValues(nums, k, len);
    
    copyToNums(newArr, nums, len);
};