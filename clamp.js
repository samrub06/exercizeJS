function clamp(value, lower, upper) {
  if (value < lower) {
    return lower;
  } else if (value > upper) {
    return upper;
  } else {
    return value;
  }
}

function clampPro(value, lower, upper) {
  return Math.min(Math.max(value, lower), upper);
}
