//mean([4, 2, 8, 6]); // => 5

const mean = (array) => {
  // if array.length > 0
  const total = array.reduce((acc, curentValue) => {
    return acc + curentValue;
  }, 0);
  const arrayLength = array.length;

  return total / arrayLength;
};

console.log(mean([4, 2, 8, 6]));
