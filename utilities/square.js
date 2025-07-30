/**
 * Square Array Elements
 * 
 * This function squares each element in an array. It extends the Array prototype
 * to add a square method that returns a new array with each element squared.
 * 
 * Time Complexity: O(n) - where n is the length of the array
 * Space Complexity: O(n) - to store the new array
 * 
 * Note: Extending built-in prototypes is generally not recommended in production
 * as it can cause conflicts with other libraries.
 */

// Extend Array prototype with square method
Array.prototype.square = function () {
  // Hint: Use map to transform each element by squaring it
  
  return this.map((i) => i * i);
};

// Alternative implementation as a standalone function
const squareArray = (arr) => {
  // Hint: Use map to square each element
  
  return arr.map((num) => num * num);
};

// Alternative using for loop
const squareArrayLoop = (arr) => {
  // Hint: Use a loop to square each element
  
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
};

// Test cases
console.log("Prototype method - [-2]:", [-2].square()); // [4]
console.log("Prototype method - [1, 2, 3, 4, 5]:", [1, 2, 3, 4, 5].square()); // [1, 4, 9, 16, 25]

console.log("Standalone function - [1, 2, 3]:", squareArray([1, 2, 3])); // [1, 4, 9]
console.log("Loop method - [0, 1, 2]:", squareArrayLoop([0, 1, 2])); // [0, 1, 4]
console.log("Negative numbers:", squareArray([-3, -2, -1])); // [9, 4, 1]
