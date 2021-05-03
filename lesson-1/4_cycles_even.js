console.log('do/while loop');
let doWhileValue = 0;
do {
  if (doWhileValue % 2 === 0) {
    console.log(doWhileValue);
  }
  doWhileValue++;
} while (doWhileValue <= 20)

// ---
console.log('while loop');
let whileValue = 1;
while (whileValue <= 20) {
  if (whileValue % 2 === 0) {
    console.log(whileValue);
  }
  whileValue++;
}

// ---
console.log('for loop');
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}