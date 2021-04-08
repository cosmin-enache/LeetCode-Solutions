/**
 * @param {number[]} prices
 * @return {number}
 */

// ** PLAN **

// O(n) Time complexity, O(n) space complexity

// min = infinity
// maxProfit = 0
// Loop through all elements in the 'prices' array,
// if current element < min then set it as the new min
// else calculate profit between min and current element. If profit > maxProfit, then maxProfit = profit
// * out of loop
// return maxProfit

var maxProfit = function(prices) {
    let min = Infinity;
    let maxProfit = 0;
    
    const len = prices.length;
    
    for (let i = 0; i < len; i++) {
        const currentElement = prices[i];
        
        if (currentElement < min) {
            min = currentElement;
        } else {
            maxProfit = Math.max(maxProfit, currentElement - min);
        }
    }
    
    return maxProfit;
};
