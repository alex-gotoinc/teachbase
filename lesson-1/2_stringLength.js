const { randomStrings } = require('./constants');

function stringLength(str) {
  return typeof str === 'string' ?
    str.length :
    'аргумент не является строкой';
}

randomStrings.forEach(str => {
  console.log(str, stringLength(str));
});