/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// ** PLAN **
// O(1) Constant time, with O(1) constant space

// keep a counter variable
// keep a pointer variable initialized to 1
// loop 32 times (for the number of bits in the integer)
    // if (n BITWISE AND pointer) is true, increment counter
    // shift bit in pointer to the left;
// return counter

var hammingWeight = function(n) {
    let pointer = 1;
    let counter = 0;
    
    for (let i = 1; i <= 32; i++) {
        if (n & pointer) counter++;
        pointer <<= 1;
    }
    
    return counter;
};