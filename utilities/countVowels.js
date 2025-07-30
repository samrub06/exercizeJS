/**
 * Count Vowels in String
 * 
 * This function counts the number of vowels (a, e, i, o, u) in a given string.
 * The function is case-insensitive, treating both uppercase and lowercase vowels.
 * 
 * Time Complexity: O(n) - where n is the length of the string
 * Space Complexity: O(1) - constant space for vowels array
 * 
 * @param {string} value - The string to count vowels in
 * @returns {number} - The number of vowels found
 */

// Method 1: Using filter and includes
const countVowels = (value) => {
  // Hint: Convert to lowercase and filter characters that are vowels
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return value
    .toLowerCase()
    .split('')
    .filter((x) => vowels.includes(x))
    .length; // Fixed: was missing .length
};

// Method 2: Using for...of loop
const countVowelsLoop = (string) => {
  // Hint: Iterate through each character and check if it's a vowel
  
  const arrString = string.toLowerCase();
  const vowels = 'aeiou';
  let count = 0;

  for (const element of arrString) {
    if (vowels.includes(element)) { // Fixed: was missing if condition
      count++;
    }
  }
  return count;
};

// Test cases
console.log("Count vowels in 'radar':", countVowels('radar')); // 2
console.log("Count vowels in 'hello':", countVowels('hello')); // 2
console.log("Count vowels in 'AEIOU':", countVowels('AEIOU')); // 5

console.log("Using loop method - 'radar':", countVowelsLoop('radar')); // 2
console.log("Using loop method - 'hello':", countVowelsLoop('hello')); // 2

//console.log("hello".includes("ell")); // true
//console.log([1, 2, 3].includes(2));    // true
//console.log([1, 2, 3].includes("2"));  // false (pas de conversion de type)
//console.log(str.includes("Hello"));  // false (sensible à la casse)

const vowels =(string) =>{

  const arrString = string.toLowerCase()
  const vowels = 'aeiou';
  let count = 0;

  for (const element of arrString){
    vowels.includes(element)
    count ++
  }
    return count;

}
