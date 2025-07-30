/**
 * Debounce Function
 * 
 * This function creates a debounced version of a callback function that delays
 * the execution of the function until after a specified delay has elapsed since
 * the last time it was invoked. If the function is called again before the delay
 * expires, the previous call is cancelled.
 * 
 * Common use cases: search input, window resize, scroll events
 * 
 * Time Complexity: O(1) - constant time operations
 * Space Complexity: O(1) - constant space for timeoutId
 * 
 * @param {Function} callback - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */

let i = 0;
function increment() {
  i++;
}

const debounce = (callback, delay) => {
  // Hint: Use setTimeout and clearTimeout to delay execution and cancel previous calls
  
  let timeoutId;

  // Return a function that can be called multiple times
  return function (...args) {
    // If the function is called again before the delay, cancel the previous call
    clearTimeout(timeoutId);

    // Start a new delay
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

// Create a debounced version of increment with 10 second delay
const debouncedIncrement = debounce(increment, 10000);

// Test the debounced function
// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0 (function will execute after 10 seconds if not called again)
