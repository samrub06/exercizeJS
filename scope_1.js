let x = 10;

function modify() {
  console.log('A:', x);
  x = 20;
  console.log('B:', x);
}

function shadow() {
  let x = 5;
  console.log('C:', x);
  x = 15;
  console.log('D:', x);
}

console.log('E:', x);
modify();
console.log('F:', x);
shadow();
console.log('G:', x);
