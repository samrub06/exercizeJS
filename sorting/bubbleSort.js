/* 
Bubble sort is a simple sorting algorithm that compares adjacent elements and swaps them if they are not in the correct order. It repeats this process several times until the list is completely sorted. It's called "bubble sort" because the largest elements "bubble up" progressively to the end of the list, like bubbles in water.
 */

// [5, 1, 4, 2, 8]

function bubbleSort(arr) {
  // Hint: Use nested loops with a swapped flag for optimization
  
  const arrLength = arr.length - 1;
  // Outer loop: number of passes needed
  for (let i = 0; i < arrLength; i++) {
    // Inner loop: compare adjacent elements
    for (let j = 0; j < arrLength - i; j++) {
      console.log(`arr[j] ${arr[j]} of index ${j}`);

      console.log(`arr[j+1] ${arr[j + 1]} of index ${j + 1}`);
      // Compare and swap if needed
      if (arr[j] > arr[j + 1]) {
        // Traditional swap using temp variable
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      console.log(`array ${arr}`);
    }
  }
  return arr;
}

// Alternative solution using destructuring assignment for swapping
function bubbleSortDestructuring(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap using destructuring assignment
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
}

bubbleSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]

// Test the destructuring version
console.log("Original:", [9, 3, 6, 2, 1, 11]);
console.log("Sorted with destructuring:", bubbleSortDestructuring([9, 3, 6, 2, 1, 11]));




