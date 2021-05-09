const sortDesc = (arr) => {

  if (!Array.isArray(arr)) {
    console.log('First argument must be an array!');
    return false;
  }

  if (Array.isArray && !arr.length) {
    console.log('Array cant be empty!');
    return false;
  }

  if (!arr.every(item => typeof item === 'number')) {
    console.log('All elements in array must be a number');
    return false;
  }

  return arr.sort((num1, num2) => num2 - num1);

}
console.log(sortDesc(['12', 14, true]));
console.log(sortDesc([-20, -10, 0, 10, 20, 30]));