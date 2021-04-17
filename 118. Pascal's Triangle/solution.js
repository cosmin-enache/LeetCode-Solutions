/**
 * @param {number} numRows
 * @return {number[][]}
 */

// ** PLAN **

// O(n * m) where n is the numRows value and m is the number of elements in the most recent row.

// Create 'Triangle' class
// store all rows into it. Provide a method to retrieve the last row within the row array.
// return default values for numRows = {1, 2};
// loop numRows - 2
    // loop through pairs of last row elements and add them
    // add the above sum to the current row
    // concat [1] currentRow concat [1]
    // append the current row to the triangle rows array
// return triangle.getRows()

class Triangle {
    constructor() {
        this.data = [[1], [1, 1]];
    }
    
    peek() {
        return this.data[this.data.length - 1];
    }
    
    push(obj) {
        this.data.push(obj);
    }
    
    getRows() {
        return this.data;
    }
}

var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    
    numRows -= 2;
    
    const triangle = new Triangle();
    
    for (let i = 0; i < numRows; i++) {
        let currentRow = triangle.peek();
        let nextRow = [];
        
        for (let j = 0; j < currentRow.length - 1; j++) {
            nextRow.push(currentRow[j] + currentRow[j + 1]);
        }
        
        nextRow = [1].concat(nextRow).concat([1]);
        triangle.push(nextRow);
    }
    
    return triangle.getRows();
}; 

