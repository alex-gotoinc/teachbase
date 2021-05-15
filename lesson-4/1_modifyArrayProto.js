Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};

console.log([14, 28, 34, 1].shuffle());