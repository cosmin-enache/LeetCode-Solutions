/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

// ** PLAN **
// O(n) solution

// Use map to keep track of indexes within the item object
// use reduce to increase filtered item count;

var countMatches = function(items, ruleKey, ruleValue) {
    const ruleIndexes = {
        "type": 0,
        "color": 1,
        "name": 2
    };
    
    return items.reduce(
        (a, item) => item[ruleIndexes[ruleKey]] === ruleValue ? a + 1 : a, 
        0
    );
};