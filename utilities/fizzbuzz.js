/**
 * FizzBuzz Implementation
 * 
 * This function implements the classic FizzBuzz problem. It generates an array
 * where numbers divisible by 3 are replaced with "Fizz", numbers divisible by 5
 * are replaced with "Buzz", and numbers divisible by both are replaced with "FizzBuzz".
 * 
 * Classic programming interview question that tests basic programming logic.
 * 
 * Time Complexity: O(n) - where n is the length of the array
 * Space Complexity: O(n) - to store the result array
 * 
 * @param {number} n - The upper limit (default: 20)
 * @returns {Array} - Array with FizzBuzz rules applied
 */
const fizzBuzz = (n = 20) => {
  // Hint: Use Array.from with conditional logic for each number
  
  return Array.from({ length: n }, (_, i) => {
    // Check for divisibility by both 3 and 5 first (FizzBuzz)
    if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
    
    // Check for divisibility by 3 (Fizz)
    if (i % 3 === 0) return 'Fizz';
    
    // Check for divisibility by 5 (Buzz)
    if (i % 5 === 0) return 'Buzz';
    
    // Return the number if not divisible by 3 or 5
    return i;
  });
};

// Test cases
console.log("FizzBuzz (first 20):", fizzBuzz());
console.log("FizzBuzz (first 15):", fizzBuzz(15));
console.log("FizzBuzz (first 10):", fizzBuzz(10));
