/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s.length) return 0;
    
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    const len = s.length;
    
    let sum = map[ s[len - 1] ];
    
    for(let i = 0; i < len - 1; i++) {
        const c = map[ s[i] ];
        const cn = map[ s[i + 1] ];
        
        sum = c < cn ? sum - c : sum + c;
    }
    
    return sum;
};

// ** PLAN **
// O(n) time/space solution, where n is the number of characters in string 's'

// store all values into a map
// if s is "" return 0
// sum = s[s.length - 1];
// loop through the string
    // c = currentChar
    // cn = following char
    // if c < cn
        // sum - c
    // else
        // sum + c
// return sum