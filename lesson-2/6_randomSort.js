const randomSort = (arr) => {

  if (!arr.length) return 'Can\'t randomSort empty array, lol';
  if (arr.some((el) => typeof el !== 'number')) return 'All elements in array must be numbers';

  return arr.sort(() => Math.random() - 0.5);
};

console.log(randomSort([]));
console.log(randomSort([12, {}, true]));
console.log(randomSort([3, -1, 15, 29, 90]));
