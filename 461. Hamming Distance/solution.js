/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// ** PLAN **
// O(1) Time complexity because loop runs only 31 times each program execution
// O(1) Space complexity

// keep a pointer = 1;
// hammingDistance = 0;
// loop 31 times
    // if bit is set in x and bit is not set in y, increment
    // else if bit is set in y and bit is not set in x, increment
    // arithmetic shift pointer to the left by 1

var hammingDistance = function(x, y) {
    let pointer = 1;
    let hammingDistance = 0;
    
    for (let i = 1; i <= 31; i++) {
        if (pointer & x && !(pointer & y)) {
            hammingDistance++;
        } else if (pointer & y && !(pointer & x)) {
            hammingDistance++;
        }
        
        pointer <<= 1;
    }
    
    return hammingDistance;
};