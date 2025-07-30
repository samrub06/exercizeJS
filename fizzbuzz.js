const fizzBuzz = () => {
  return Array.from({ length: 20 }, (_, i) => {
    if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
    if (i % 3 === 0) return 'Fizz';
    if (i % 5 === 0) return 'Buzz';
    return i;
  });
};
