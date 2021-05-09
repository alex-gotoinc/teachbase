const isUpperCase = str => str[0] === str[0].toUpperCase();

const createStructure = str => {

  if (typeof str === 'string' && !str.length) {
    return `String argument must have length > 0`;
  }

  if (typeof str !== 'string') {
    return `Argument "${str}[${typeof str}]" must be a string`;
  }

  return str.split(' ').map(word => ({
    word,
    length: word.length,
    isCapitalized: isUpperCase(word)
  }));
};

console.log(createStructure(12));
console.log(createStructure(true));
console.log(createStructure(''));
console.log(createStructure('I love beer'));
console.log(createStructure('My favourite day of the week is Friday.'));