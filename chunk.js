function chunk(array, size = 1) {
  let chunk = [];

  // create array [from i, size]
  // iterate
  // until the size

  for (let i = 0; i < array.length; i += size) {
    chunk.push(array.slice(i, i + size));
  }

  return chunk;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
