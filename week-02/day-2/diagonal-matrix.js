// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var x =4;
let arr = [];
for (let i = 0;i < x;i++) {
  arr[i] = [0];
  for (let j = 0;j < x;j++) {
    arr[i][j] = [0];
  }
}

console.log(arr);

// console.log(Create2DArray(6));

// Array(9).fill(Array(9))
