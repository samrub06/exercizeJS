export default function difference(array, values) {
  const result = [];

  // Create a set of all the values in the values arrays.
  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Check if the value is in the values set.
    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}

export default function differenceV2(array, values) {
  const valuesSet = new Set(values);
  return array.filter((value) => !valuesSet.has(value));
}

export default function differenceV3(array, values) {
  return array.filter((value) => !values.includes(value));
}

difference([1, 2, 3], [2, 3, 1, 4]); // => []
