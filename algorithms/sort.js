const selectionSort = (arr) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arrLength; j++) {
      if (arr[minIndex] < arr[j]) {
        minIndex = j;
      }

      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
  return arr;
};
minIndex = i;
console.log(selectionSort([5, 2, 8, 1, 4]));

// i =0 j=1 i => arr[minIndex]=5 j=> arr[1]=2 minIndex=0
// i =0 j=2 i=> arr[minIndex]    minIndex=2
