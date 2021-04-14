/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const divBy3 = n => n % 3 === 0;
    const divBy5 = n => n % 5 === 0;
    
    const resultArray = new Array(n);
    
    for (let i = 1; i <= n; i++) {
        let toPrint = "";
        
        if (divBy3(i)) {
            toPrint += "Fizz";
        } 
        
        if (divBy5(i)) {
            toPrint += "Buzz";
        } 
        
        toPrint = toPrint ? toPrint : i.toString();
        
        resultArray[i - 1] = toPrint;
    }
    
    return resultArray;
};