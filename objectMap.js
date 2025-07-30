/**
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function objectMap(obj, fn) {
  if (!isPlainObject(obj)) {
    return 'bad object';
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[key] = fn(value);
  }

  return result;
}
const double = (x) => x * 2;

objectMap({ foo: 1, bar: 2 }, double); // => { foo: 2, bar: 4}
