Array.prototype.square = function () {
  return this.map((i) => i * i);
};

console.log([-2].square());
