const numberOfArguments = (...args) => {
  return args.length;
};

console.log(numberOfArguments()); // 0
console.log(numberOfArguments(1)); // 1
console.log(numberOfArguments(2, 3)); // 2
console.log(numberOfArguments('a', 'b', 'c')); // 3
