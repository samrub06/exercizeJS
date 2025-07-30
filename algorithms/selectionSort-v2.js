export default function selectionSort(arr) {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength - 1; i++) {
    // Loop through the entire array
    let minIndex = i; // Assume the current index is the minimum

    for (let j = i + 1; j < arrLength; j++) {
      // Look for a smaller element
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update minIndex if we find a smaller element
      }
    }

    // Swap only if minIndex is different from i (to avoid unnecessary swaps)
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    console.log(`Iteration ${i + 1}:`, arr); // Optionally log the array after each iteration
  }

  return arr;
}

console.log(selectionSort([3, 4, 5, 1]));
