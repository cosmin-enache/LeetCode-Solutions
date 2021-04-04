/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// ** PLAN ** 

// newArr = new empty array
// set a pointer for each array
// while each pointer is smaller than their respective lengths,
    // add to newArr
// concat remaining values to newArr
// copy all values from newArr into arr1

// O(n + m) approach, where m is the number of elements in nums1, and n is the number of elements in nums2

const concatRemaining = (to, from, index, max=from.length) => {
    return to.concat(from.slice(index, max));  
};

var merge = function(nums1, m, nums2, n) {
    let totLen = n + m;
    
    let newNums = [];
    
    let ptr1 = 0;
    let ptr2 = 0;
    
    while (ptr1 < m && ptr2 < n) {
        if (nums1[ptr1] < nums2[ptr2]) {
            newNums.push(nums1[ptr1]);
            ptr1++;
        } else {
            newNums.push(nums2[ptr2]);
            ptr2++;
        }
    }
    
    newNums = concatRemaining(newNums, nums1, ptr1, m);
    newNums = concatRemaining(newNums, nums2, ptr2);
    
    for (let i = 0; i < totLen; i++) {
        nums1[i] = newNums[i];
    }
};