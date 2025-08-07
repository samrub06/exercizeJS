/**
 * Throttle Function
 * 
 * This function creates a throttled version of a callback function that limits
 * the rate at which the function can be called. The function will only execute
 * once per specified time period, regardless of how many times it's called.
 * 
 * Common use cases: scroll events, resize events, button clicks
 * 
 * Time Complexity: O(1) - constant time operations
 * Space Complexity: O(1) - constant space for shouldThrottle flag
 * 
 * @param {Function} func - The function to throttle
 * @param {number} wait - The throttle delay in milliseconds (default: 0)
 * @returns {Function} - The throttled function
 */

export default function throttleV1(func, wait = 0) {

const shouldThrottle = false

  function throttled(...args) {
    if(shouldThrottle){
      return
    }
     shouldThrottle = true;
     setTimeout(()=>{
      shouldThrottle = false;
    },wait)
     func.apply(this, args);
}

 return throttled

}


export default function throttleV2(func, wait = 0) {
  // Hint: Use a flag to track if function should be throttled
  
  let shouldThrottle = false;

  return function (...args) {
    // If function is currently throttled, ignore the call
    if (shouldThrottle) {
      return;
    }

    // Set throttle flag to true
    shouldThrottle = true;
    
    // Reset throttle flag after wait period
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    // Execute the function immediately
    func.apply(this, args);
  };
}
