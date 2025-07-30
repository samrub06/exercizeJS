/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index.
If the array contains multiple peaks, return the index to any of the peaks.

nums[-1] and nums[n] are considered less than any element in an array

You must write an algorithm that runs in O(log n) time.
*/

const findPeak = function (nums) {};

const tests = [
  [1, 2, 3, 1], // 2
  [1, 2, 1, 3, 5, 6, 4], // 1, 5
  [1, 2, 3, 2, 3, 4, 5, 4, 2, 1], // 2, 6
];

const main = () => {
  tests.forEach((arr) => {
    console.log(arr, findPeak(arr));
  });
};

main();
