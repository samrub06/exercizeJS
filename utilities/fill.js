function fill(array, value, start = 0, end = array.length) {
  const result = array;

  const startIndex = Math.max(0, Math.min(start, array.length));
  const endIndex = Math.max(0, Math.min(end, array.length));

  if (startIndex >= endIndex) {
    return result;
  }

  for (let i = startIndex; i < endIndex; i++) {
    result[i] = value;
  }

  return result;
}
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]

// out of bounds indices
fill([4, 6, 8, 10, 12], '*', 1, 8); // [4, '*', '*', '*', '*']
fill([4, 6, 8, 10, 12], '*', 8, 10); // [4, 6, 8, 10, 12]

// negative but within bounds indices
fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]

// negative out of bounds indices
fill([4, 6, 8, 10, 12], '*', -10, 2); // ['*', '*', 8, 10, 12]
fill([4, 6, 8, 10, 12], '*', -10, -8); // [4, 6, 8, 10, 12]
