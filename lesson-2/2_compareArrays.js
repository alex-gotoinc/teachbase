const logViceVersa = (arr, i) => console.log(`${i}) ${arr[i]} nothing to compare with`);

const compareArrays = (arr1, arr2) => {
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {

    if (!arr1[i]) { logViceVersa(arr2, i) };
    if (!arr2[i]) { logViceVersa(arr1, i) };

    if (arr1[i] && arr2[i]) {
      if (typeof arr1[i] !== typeof arr2[i]) {
        console.log(
          `${i})${arr1[i]}[${typeof arr1[i]}] === ${arr2[i]}[${typeof arr2[i]}] ?`,
          'Compared items must be same type!'
        );
      } else {
        console.log(`${i})${arr1[i]} === ${arr2[i]} ?`, arr1[i] === arr2[i]);
      }
    }

  }
};

compareArrays([42, 98.9, 3.14], [12, 9999, 3.14]);
console.log('---');
compareArrays([228, 512, 1212], [12, 512, 1212, 10000000]);
console.log('---');
compareArrays([true, 12, 'ЗДАРОВААААА'], [[true], BigInt(12), ['ЗДАРОВААААА']]);