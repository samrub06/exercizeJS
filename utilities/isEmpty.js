/**
 * Check if Value is Empty
 * 
 * This function checks if a value is considered empty. It handles various data types:
 * - null/undefined
 * - strings (including whitespace)
 * - arrays
 * - objects
 * - Maps and Sets
 * - numbers (0 is considered empty)
 * 
 * Time Complexity: O(n) - for strings (due to trim)
 * Space Complexity: O(1) - constant space
 * 
 * @param {any} value - The value to check
 * @returns {boolean} - True if the value is empty, false otherwise
 */

// Helper function to check if value is an object (not null, array, or primitive)
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

const isEmpty = (value) => {
  // Hint: Handle different data types with appropriate checks
  
  // Check for null and undefined
  if (value == null) {
    return true;
  }
  
  // Check for strings (including whitespace)
  if (typeof value === 'string') {
    return value.trim().length === 0;
  }
  
  // Check for arrays
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  
  // Check for Maps and Sets
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }
  
  // Check for objects
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }
  
  // Check for numbers (0 is considered empty)
  if (typeof value === 'number') {
    return value === 0;
  }
  
  // For other types (boolean, symbol, etc.), consider as not empty
  return false;
};

// Test cases
console.log("Empty string:", isEmpty("")); // true
console.log("Whitespace string:", isEmpty("   ")); // true
console.log("Non-empty string:", isEmpty("hello")); // false
console.log("Empty array:", isEmpty([])); // true
console.log("Non-empty array:", isEmpty([1, 2, 3])); // false
console.log("Empty object:", isEmpty({})); // true
console.log("Non-empty object:", isEmpty({ a: 1 })); // false
console.log("Null:", isEmpty(null)); // true
console.log("Undefined:", isEmpty(undefined)); // true
console.log("Zero:", isEmpty(0)); // true
console.log("Non-zero number:", isEmpty(42)); // false
console.log("Empty Map:", isEmpty(new Map())); // true
console.log("Empty Set:", isEmpty(new Set())); // true