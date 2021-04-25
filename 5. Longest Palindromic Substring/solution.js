/**
 * @param {string} s
 * @return {string}
 */

// ** PLAN **

// O(n^2) palindrome expansion algorithm

const expandFromMiddle = (str, left, right) => {
    if (!str.length || left > right) return;
    
    const len = str.length;
    
    while (left >= 0 && right < len && str[left] === str[right]) {
        left--;
        right++;
    }
    
    return right - left - 1;
}

var longestPalindrome = function(s) {
    if (!s.length) return "";
    
    let start = 0;
    let end = 0;
    
    const len = s.length;
    
    for (let i = 0; i < len; i++) {
        let len1 = expandFromMiddle(s, i, i);
        let len2 = expandFromMiddle(s, i, i + 1);
        let maxLen = Math.max(len1, len2);
        
        if (maxLen > end - start) {
            start = i - parseInt((maxLen - 1) / 2);
            end = i + parseInt(maxLen / 2);
        }
    }
    
    return s.slice(start, end + 1);
};


