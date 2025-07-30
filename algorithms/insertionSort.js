/**
 * Insertion Sort Algorithm
 * 
 * This function implements the insertion sort algorithm which builds the final sorted array
 * one item at a time. It is much less efficient on large lists than more advanced algorithms
 * such as quicksort, heapsort, or merge sort.
 * 
 * Time Complexity: O(n²) - worst and average case
 * Space Complexity: O(1) - in-place sorting
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
const insertionSort = (arr) => {
  // Hint: Build the sorted array by inserting each element into its correct position
  
  const arrLength = arr.length;
  
  // Iterate through the array starting from the second element
  for (let i = 1; i < arrLength; i++) {
    // Store the current element to be inserted
    let current = arr[i];
    let j = i - 1;
    
    // Move elements that are greater than current to one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Insert the current element in its correct position
    arr[j + 1] = current;
  }
  
  return arr;
};

// Test cases
console.log("Insertion Sort Test 1:", insertionSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
console.log("Insertion Sort Test 2:", insertionSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
