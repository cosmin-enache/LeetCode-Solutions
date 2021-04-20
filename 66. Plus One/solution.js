/**
 * @param {number[]} digits
 * @return {number[]}
 */

// ** PLAN **

// O(n) solution

// carry = 0
// last element + 1
// start at rightmost digit to leftmost digit
// current += carry;
// if current >= 10
    // current -= 10
    // carry = 1
// else
    // carry = 0


var plusOne = function(digits) {
    const len = digits.length;
    
    if (!len) return [];
    
    digits[len - 1] += 1;
    
    let carry = 0;
    
    for (let i = len - 1; i >= 0; i--) {
        digits[i] += carry;
        
        if (digits[i] >= 10) {
            digits[i] -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
    }
    
    if (carry === 1) {
        digits.unshift(1);
    }
    
    return digits;
};