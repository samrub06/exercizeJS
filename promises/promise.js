/**
 * Promise Examples
 * 
 * This file demonstrates various Promise patterns and implementations.
 * It includes simple promise creation, promise chaining, and error handling.
 * 
 * Time Complexity: O(1) - constant time operations
 * Space Complexity: O(1) - constant space
 */

// Simple promise that resolves or rejects based on a condition
const promiseSimple = () => {
  // Hint: Use Promise constructor with resolve and reject callbacks
  
  return new Promise((resolve, reject) => {
    const success = true; // Simulate a condition

    if (success) {
      console.log('Resolving promise...');
      resolve('ok');
    } else {
      console.log('Rejecting promise...');
      reject('error');
    }
  });
};

// Promise with timeout
const promiseWithTimeout = (delay) => {
  // Hint: Use setTimeout to create a delayed promise
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${delay}ms`);
    }, delay);
  });
};

// Promise that can be cancelled
const cancellablePromise = (delay) => {
  // Hint: Return both promise and cancel function
  
  let timeoutId;
  
  const promise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve('Promise resolved');
    }, delay);
  });
  
  const cancel = () => {
    clearTimeout(timeoutId);
  };
  
  return { promise, cancel };
};

// Test the simple promise
let i = 0;
let intervalId;

const promiseExec = () =>
  promiseSimple()
    .then((result) => {
      i++;
      console.log(`Promise result ${i}:`, result);

      if (i === 5) {
        clearInterval(intervalId);
        console.log('Stopped after 5 executions');
      }
    })
    .catch((error) => console.log('Promise error:', error));

// Start interval to test promises
intervalId = setInterval(promiseExec, 1000);

// Test timeout promise
promiseWithTimeout(2000)
  .then((result) => console.log('Timeout promise:', result))
  .catch((error) => console.log('Timeout error:', error));

// Test cancellable promise
const { promise, cancel } = cancellablePromise(3000);

promise
  .then((result) => console.log('Cancellable promise:', result))
  .catch((error) => console.log('Cancellable error:', error));

// Cancel the promise after 1 second
setTimeout(() => {
  console.log('Cancelling promise...');
  cancel();
}, 1000);
