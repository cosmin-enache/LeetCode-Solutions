/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// ** PLAN **
// O(n) solution, where n is the number of characters within the string

// convert int to string and pad to 32 bits
// reverse string
// convert string to int and return

const reverseString = str => {
    str = [ ...str ];
    
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        [ str[left], str[right] ] = [ str[right], str[left] ];
        left++;
        right--;
    }
    
    return str.join("");
};

var reverseBits = function(n) {
    const nString = n.toString(2).padStart(32, "0");
    
    const reversedString = reverseString(nString);
    
    return parseInt(reversedString, 2);
};