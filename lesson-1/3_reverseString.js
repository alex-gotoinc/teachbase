const { randomStrings } = require('./constants');

function reverseString(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

randomStrings.forEach(str => {
  console.log(str, '-', reverseString(str));
});