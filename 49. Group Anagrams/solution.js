/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// ** PLAN ** 
// O(n * m log m) time complexity where n is the number of strings in strs and m is the number of characters in each string, O(n) extra space complexity

// map = {};
// result = [];
// loop through strings
// if (sortedStr in map)
    // map[sortedStr].push(str)
// else
    // map[sortedStr] = [str];

// loop through map and push all values to result array

var groupAnagrams = function(strs) {
    const map = new Map();
    const result = [];
    
    const len = strs.length;
    
    for (let i = len - 1; i >= 0; i--) {
        const currentString = strs[i];
        const sorted = [...currentString].sort().join("");
        
        if (map.has(sorted)) {
            const arr = map.get(sorted);
            
            arr.push(currentString);
            
            map.set(sorted, arr);
        } else {
            map.set(sorted, [ currentString ]);
        }
    }
    
    for (const value of map.values()) {
        result.push(value);
    }
    
    return result;
};