/**
 * Check if Number is Even
 * 
 * This function checks if a given number is even. An even number is any integer
 * that is divisible by 2 without a remainder.
 * 
 * Time Complexity: O(1) - constant time operation
 * Space Complexity: O(1) - constant space
 * 
 * @param {number} val - The number to check
 * @returns {boolean} - True if the number is even, false otherwise
 */
const isEven = (val) => {
  // Hint: Use modulo operator to check if remainder is 0
  
  return val % 2 === 0;
};

// Alternative implementation using bitwise AND
const isEvenBitwise = (val) => {
  // Hint: Use bitwise AND with 1 to check the least significant bit
  
  return (val & 1) === 0;
};

// Test cases
console.log("Is 2 even?", isEven(2)); // true
console.log("Is 3 even?", isEven(3)); // false
console.log("Is 0 even?", isEven(0)); // true
console.log("Is -4 even?", isEven(-4)); // true
console.log("Is 7 even?", isEven(7)); // false

console.log("Bitwise method - Is 2 even?", isEvenBitwise(2)); // true
console.log("Bitwise method - Is 3 even?", isEvenBitwise(3)); // false
