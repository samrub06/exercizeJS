/**
 * Cancellable Timeout Function
 * 
 * This function creates a timeout that can be cancelled before it executes.
 * It returns a cancel function that can be called to clear the timeout.
 * 
 * Common use cases: user input debouncing, temporary UI states,
 * cleanup of pending operations
 * 
 * Time Complexity: O(1) - constant time setup
 * Space Complexity: O(1) - constant space for timeoutId
 * 
 * @param {Function} callback - The function to execute after delay
 * @param {number} delay - The delay in milliseconds
 * @param {...any} args - Additional arguments to pass to the callback
 * @returns {Function} - A function to cancel the timeout
 */
function setCancellableTimeout(callback, delay, ...args) {
  // Hint: Return a cancel function that clears the timeout
  
  let timeoutId = setTimeout(() => {
    callback(...args); // Execute the callback with arguments after the delay
  }, delay);

  return () => clearTimeout(timeoutId);
}

// Alternative implementation with status tracking
const setCancellableTimeoutWithStatus = (callback, delay, ...args) => {
  // Hint: Track if timeout was cancelled and provide status
  
  let timeoutId;
  let isCancelled = false;
  
  timeoutId = setTimeout(() => {
    if (!isCancelled) {
      callback(...args);
    }
  }, delay);
  
  const cancel = () => {
    isCancelled = true;
    clearTimeout(timeoutId);
  };
  
  const isPending = () => !isCancelled;
  
  return { cancel, isPending };
};

// Test cases
let i = 0;

// Basic usage
console.log("Setting up cancellable timeout...");
const cancel = setCancellableTimeout(() => {
  i++;
  console.log("Timeout executed, i =", i);
}, 1000);

// Cancel before execution
setTimeout(() => {
  console.log("Cancelling timeout...");
  cancel();
}, 500);

// Test with status tracking
const { cancel: cancelWithStatus, isPending } = setCancellableTimeoutWithStatus(() => {
  console.log("Status tracked timeout executed");
}, 2000);

console.log("Is timeout pending?", isPending()); // true

setTimeout(() => {
  cancelWithStatus();
  console.log("Is timeout pending after cancel?", isPending()); // false
}, 1000);
