// instanceof
// typeof 
// hasOwnProperty()
// Object.keys(object) [...].length -> length
// typeof(null) => object 
// typeof(array) => object so do Array.isArray()
// Treat Whitespace as Empty .trim()


const obj = {}
const arr = []

obj.a= "Samuel"


const objectA = null

console.log(obj.a);
console.log(obj.b);
console.log(obj.hasOwnProperty("c"));
console.log(typeof(obj));
console.log(Array.isArray(objectA));
console.log( objectA !== null);
console.log(typeof(arr));
console.log(Object.keys(obj));


  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}