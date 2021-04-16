/**
 * @param {number} n
 * @return {number}
 */

// ** PLAN **

// Sieve of eratosthenes

var countPrimes = function(n) {
    const array = new Array(n).fill(true)
    let upperLimit = Math.sqrt(n);
    let count = 0;

    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    
    array.forEach((n, i) => {
        if (i > 1 && n) count++;
    });
    
    return count;
};