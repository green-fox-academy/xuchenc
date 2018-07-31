// - Create a function called `printParams`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
const printParams = function (para) {
  const arr = [];
  for (let i = 0; i < para.length; i++) {
    arr.push(para[i]);
  }
  console.log(arr);
};
console.log(printParams(123));
