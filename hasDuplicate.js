function hasDuplicate(numbers) {
  const unique = new Set(numbers);
  return unique.size !== numbers.length;
}