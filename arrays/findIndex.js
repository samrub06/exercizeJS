function findIndex(array, predicate, fromIndex = 0) {
  let arrayLength = array.length;

  if (arrayLength < 1 || fromIndex > arrayLength) {
    return -1;
  }

  let index = fromIndex;

  // write the callback to trigger the function with the condition
  while (index < arrayLength && !predicate(array[index])) {
    index++;
  }

  return index;
}

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
findIndex(arr, (num) => num > 3); // => 3

// Start searching from index 4 (inclusive).
findIndex(arr, (num) => num > 3, 4); // => 4

// No such element exists.
findIndex(arr, (num) => num > 10, 3); // => -1

/* 
BETTER SOLUTION 

export default function findIndex(array, predicate, fromIndex = 0) {
  const length = array.length;
  if (length === 0) return -1;

  // Gère les index négatifs
  let start = fromIndex >= 0
    ? fromIndex
    : Math.max(length + fromIndex, 0); // jamais en dessous de 0

  for (let i = start; i < length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
*/
