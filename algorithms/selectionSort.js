/**
 * Selection Sort Algorithm
 * 
 * This function implements the selection sort algorithm which divides the input list into
 * a sorted and unsorted region. The algorithm repeatedly selects the smallest element
 * from the unsorted region and places it at the end of the sorted region.
 * 
 * Time Complexity: O(n²) - worst, average, and best case
 * Space Complexity: O(1) - in-place sorting
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function selectionSort(arr) {
  // Hint: Find the minimum element in unsorted region and swap it with the first element
  
  let arrLength = arr.length;

  // Iterate through the array
  for (let i = 0; i < arrLength; i++) {
    // Assume the current position has the minimum element
    let minIndex = i;
    console.log('i', i);
    console.log('arr[i]', arr[i]);
    
    // Find the minimum element in the unsorted region
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of unsorted region
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Test case
console.log("Selection Sort Test:", selectionSort([5, 2, 8, 1, 4])); // [1, 2, 4, 5, 8]
