/**
 * Palindrome Checker
 * 
 * This function checks if a given string is a palindrome. A palindrome is a word,
 * phrase, number, or other sequence of characters that reads the same forward and backward,
 * ignoring spaces, punctuation, and capitalization.
 * 
 * Time Complexity: O(n) - where n is the length of the string
 * Space Complexity: O(n) - to store the reversed string
 * 
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 */
const isPalindrome = (str) => {
  // Hint: Compare the original string with its reversed version
  
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare the cleaned string with its reverse
  return cleanStr.split('').reverse().join('') === cleanStr;
};

// Alternative implementation using two pointers
const isPalindromeTwoPointers = (str) => {
  // Hint: Use two pointers moving from both ends
  
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleanStr.length - 1;
  
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
};

// Test cases
console.log("Is 'racecar' a palindrome?", isPalindrome('racecar')); // true
console.log("Is 'hello' a palindrome?", isPalindrome('hello')); // false
console.log("Is 'A man, a plan, a canal: Panama' a palindrome?", isPalindrome('A man, a plan, a canal: Panama')); // true
console.log("Is 'Was it a car or a cat I saw?' a palindrome?", isPalindrome('Was it a car or a cat I saw?')); // true

console.log("Two pointers method - 'racecar':", isPalindromeTwoPointers('racecar')); // true
console.log("Two pointers method - 'hello':", isPalindromeTwoPointers('hello')); // false
