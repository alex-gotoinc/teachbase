const filterByLength = (arr, min, max) => {

  if (!Array.isArray(arr)) {
    console.log('First argument must be an array!');
    return false;
  }

  if (Array.isArray && !arr.length) {
    console.log('Array cant be empty!');
    return false;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    console.log('min or max arguments type error(must be a number)');
    return false;
  }

  if (min > max) {
    console.log('min > max -> WTF???');
    return false;
  }

  return arr.filter(word => word.length >= min && word.length <= max);
}

console.log(filterByLength({}));
console.log(filterByLength([]));
console.log(filterByLength(['asdasd'], 12, true));
console.log(filterByLength(['asdasd'], 12, 9));
console.log(filterByLength(['orange', 'apple', 'banana', ''], 0, 5));
console.log(filterByLength(['Здарова', 'Димон!', 'чо', 'как?', ')'], 1, 3));