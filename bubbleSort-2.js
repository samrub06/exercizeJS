const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

bubbleSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
bubbleSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
