/**
 * Convert Number to Array of Digits
 * 
 * This function converts a number into an array of its individual digits.
 * The function handles both positive and negative numbers, and can be used
 * for various number manipulation tasks.
 * 
 * Time Complexity: O(log n) - where n is the number of digits
 * Space Complexity: O(log n) - to store the array of digits
 * 
 * @param {number} num - The number to convert
 * @returns {Array} - Array of individual digits
 */

// Method 1: Using toString and split
const numToArray = (num) => {
  // Hint: Convert to string, split into characters, then convert back to numbers
  
  return num.toString().split('').map(Number);
};

// Method 2: Using mathematical operations
const numToArrayMath = (num) => {
  // Hint: Use modulo and division to extract digits
  
  const digits = [];
  let temp = Math.abs(num); // Handle negative numbers
  
  // Handle single digit case
  if (temp === 0) {
    return [0];
  }
  
  // Extract digits from right to left
  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }
  
  // Add negative sign for negative numbers
  if (num < 0) {
    digits[0] = -digits[0];
  }
  
  return digits;
};

// Test cases
let num = 42718;
console.log("Number to array:", numToArray(num)); // [4, 2, 7, 1, 8]
console.log("Math method:", numToArrayMath(num)); // [4, 2, 7, 1, 8]

console.log("Single digit:", numToArray(5)); // [5]
console.log("Zero:", numToArray(0)); // [0]
console.log("Negative number:", numToArray(-123)); // [-1, 2, 3]

/**
 * Fetch All Users Example
 * 
 * This function demonstrates how to fetch multiple users by their IDs
 * using Promise.all to handle concurrent requests.
 */
function fetchAllUsers() {
  const ids = [1, 2, 3, 6];
  const promises = ids.map(fetchUserById); // Array of promises
  return Promise.all(promises).then((users) => {
    console.log(users);
  });
}

// Mock function for demonstration
function fetchUserById(id) {
  return Promise.resolve({ id, name: `User ${id}` });
}
