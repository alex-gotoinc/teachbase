// 1)
/*
** var x = 6, y = 15, z = 4; 
** y /= x + 5 % z; 
*/
console.log('1)');
console.table([
  '5 % z -> 1',
  'x + 1 -> 7',
  'y / 7 -> 2.142857142857143'
]);

// 2)
/*
** var x = 6, y = 15, z = 4; 
** z = x++ + y * 5; 
*/
console.log('2)');
console.table([
  'x++ -> 7',
  'y * 5 -> 75',
  '6 + 75 -> 81'
]);

// 3)
/*
** var x = 6, y = 15, z = 4; 
** x += y - x++ * z;
** -> x = x + y - x++ * z
*/
console.log('3)');
console.table([
  'x++ -> 6',
  'x++ * z(6 * 4) -> 24',
  'x + y -> 21',
  '(x + y) - (x++ * z)) -> -3'
]);

// 4)
/*
** var x = 6, y = 15, z = 4; 
** z = -- x - y * 5; 
*/
console.log('4)');
console.table([
  '--x -> 5',
  'y * 5 -> 75',
  '--x -(y*5) -> 70',
]);

// 5)
/*
** var a = 3;  
** var b = ++a + 1 + a++; 
*/
console.log('5)');
console.table([
  'a++ -> 3',
  '++a -> 4',
  '++a + 1 -> 5',
  '(++a + 1) + a++ -> 9'
]);