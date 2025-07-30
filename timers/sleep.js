/**
 * Sleep Function
 * 
 * This function creates a promise that resolves after a specified duration.
 * It's useful for creating delays in async/await code, simulating API calls,
 * or controlling the timing of operations.
 * 
 * Time Complexity: O(1) - constant time setup
 * Space Complexity: O(1) - constant space
 * 
 * @param {number} duration - The duration to sleep in milliseconds
 * @returns {Promise} - A promise that resolves after the specified duration
 */
const sleep = (duration) => {
  // Hint: Use setTimeout wrapped in a Promise
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`This runs after ${duration} milliseconds`);
      resolve('Ok');
    }, duration);
  });
};

// Alternative implementation with custom message
const sleepWithMessage = (duration, message = 'Slept') => {
  // Hint: Allow custom message and return the message
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${message} for ${duration} milliseconds`);
      resolve(message);
    }, duration);
  });
};

// Test the sleep function
(async () => {
  console.log('Hi');
  
  await sleep(3000); // 3 seconds
  console.log('Continue after sleep');
  
  // Test with custom message
  const result = await sleepWithMessage(1000, 'Custom sleep');
  console.log('Result:', result);
})();

// Example usage in sequence
const sequentialSleep = async () => {
  console.log('Starting sequential sleep...');
  
  await sleep(1000);
  console.log('1 second passed');
  
  await sleep(2000);
  console.log('2 more seconds passed');
  
  console.log('Sequential sleep completed');
};

// Uncomment to test sequential sleep
// sequentialSleep();
