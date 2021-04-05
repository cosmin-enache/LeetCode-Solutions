/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// ** PLAN **
// Use binary search to find the first bad value, assuming that when left and right intersect, the first bad value is found
// The algorithm below is implemented with the assumption that bad values are always present iwthin the array.

// O(log n) solution, where n is the number of elements from [1, n]

// get lower midpoint
// if mid is bad then right = mid
// else if mid is good then left = mid + 1

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            const midPoint = Math.trunc((left + right) / 2);
            
            if (isBadVersion(midPoint)) {
                right = midPoint;
            } else {
                left = midPoint + 1;
            }
        }
        
        return left;
    };
};