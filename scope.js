let a = 5;

var b = 10;
function test() {
  a = 10;
  var b = 20;
  console;
  console.log(b); // ?
}
test();
console.log(b); // ?
