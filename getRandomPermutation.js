/*TASK: Generate a Random Permutation
 * ------------------------------------
 * Create a function that receives a number n and returns an array
 * containing a random permutation of the numbers from 0 to n (excluding).
 *
 * Requirements:
 * - The returned array must contain all numbers from 0 to n (excluding n)
 * - Each number must appear exactly once (no duplicates)
 * - The order of numbers must be randomized each time the function is called
 *
 * Example:
 *   getRandomPermutation(4);
 *   // Possible output: [2, 0, 3, 1]
 *
 * Performance:
 * - Time Complexity: O(n) — both array creation and shuffling are linear
 * - Space Complexity: O(n) — the output array holds (n + 1) elements
 *
 * @param {number} n - The maximum number in the permutation (inclusive).
 * @returns {number[]} - An array of unique numbers from 0 to n in random order.
 */
function getRandomPermutation(n) {
  const arr = [];
  // loop with from 0 to n
  // no duplicates; if condition
  // math.randown
  // [0, 0, 1]

  for (let i = 0; i < n; i++) {
    console.log('random', getRandomNumber(i));

    arr.push(getRandomNumber(i));
  }
  console.log('array', arr);

  return arr;
}
// optional helper function to generate a random integer [0, n)
function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}
//console.log(getRandomNumber(2))
console.log(getRandomPermutation(3));
//console.log(getRandomPermutation(5));
