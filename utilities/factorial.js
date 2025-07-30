/**
 * Factorial Function
 * 
 * This function calculates the factorial of a given number using recursion.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * 
 * Mathematical definition: n! = n × (n-1) × (n-2) × ... × 2 × 1
 * 
 * Time Complexity: O(n) - linear time
 * Space Complexity: O(n) - due to recursion stack
 * 
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial of n
 */
const factorial = (n) => {
  // Hint: Use recursion with base case for n <= 1
  
  // Base case: factorial of 0 and 1 is 1
  if (n <= 1) {
    return 1;
  }
  
  // Recursive case: n! = n × (n-1)!
  return n * factorial(n - 1);
};

// Test cases
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 1:", factorial(1)); // 1