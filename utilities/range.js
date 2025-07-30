/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
function range(start = 0, end, step = 1) {
  let indexStart;
  let indexEnd;
  let arr = [];

  if (!end) {
    indexEnd = start;
    indexStart = 0;
  } else {
    indexStart = start;
    indexEnd = end;
  }
  for (let i = indexStart; i < indexEnd; i++) {
    if (step !== 1 && i % step == 0) {
      arr.push(i);
    } else if ((step = 1)) {
      arr.push(i);
    }
  }
  return arr;
}

//console.log(range(4));
//console.log(range(-4));
console.log(range(0, 20, 5));
