/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// ** PLAN **

// O(n) time / space solution, where n is the number of elements within the array.

// Since all elements are sorted, we can set 2 pointers: left=0 and right=numbers.len - 1

// while left < right
    // sum = element from numbers at index left + element at index right
    // if sum is equal to target, then return
    // else if sum is smaller than target
        // increment left pointer
    // else if sum is larger than target
        // increment right pointer

var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length - 1];
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) return [left + 1, right + 1];
        else if (sum > target) right--;
        else left++;
    }
};

