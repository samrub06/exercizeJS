/**
 * Clamp Value Function
 * 
 * This function constrains a value to be within a specified range. If the value
 * is less than the lower bound, it returns the lower bound. If the value is
 * greater than the upper bound, it returns the upper bound. Otherwise, it
 * returns the original value.
 * 
 * Common use cases: UI sliders, color values, coordinate bounds
 * 
 * Time Complexity: O(1) - constant time operation
 * Space Complexity: O(1) - constant space
 * 
 * @param {number} value - The value to clamp
 * @param {number} lower - The lower bound
 * @param {number} upper - The upper bound
 * @returns {number} - The clamped value
 */

// Method 1: Using if-else statements
function clamp(value, lower, upper) {
  // Hint: Use conditional statements to check bounds
  
  if (value < lower) {
    return lower;
  } else if (value > upper) {
    return upper;
  } else {
    return value;
  }
}

// Method 2: Using Math.min and Math.max (more concise)
function clampPro(value, lower, upper) {
  // Hint: Use Math.min and Math.max to constrain the value
  
  return Math.min(Math.max(value, lower), upper);
}

// Method 3: Using ternary operators
const clampTernary = (value, lower, upper) => {
  // Hint: Use ternary operators for concise conditional logic
  
  return value < lower ? lower : value > upper ? upper : value;
};

// Test cases
console.log("Clamp 5 between 0 and 10:", clamp(5, 0, 10)); // 5
console.log("Clamp -5 between 0 and 10:", clamp(-5, 0, 10)); // 0
console.log("Clamp 15 between 0 and 10:", clamp(15, 0, 10)); // 10

console.log("Pro method - Clamp 3 between 1 and 5:", clampPro(3, 1, 5)); // 3
console.log("Pro method - Clamp 0 between 1 and 5:", clampPro(0, 1, 5)); // 1
console.log("Pro method - Clamp 7 between 1 and 5:", clampPro(7, 1, 5)); // 5

console.log("Ternary method - Clamp 2 between 0 and 4:", clampTernary(2, 0, 4)); // 2
console.log("Ternary method - Clamp -1 between 0 and 4:", clampTernary(-1, 0, 4)); // 0
console.log("Ternary method - Clamp 6 between 0 and 4:", clampTernary(6, 0, 4)); // 4
