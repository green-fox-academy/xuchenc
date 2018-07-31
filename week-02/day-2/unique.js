//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
let arrary = [1, 11, 34, 11, 52, 61, 1, 34];
function unique(arr) {
  let unique_array = []
  for (let i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) === -1) {
      unique_array.push(arr[i]);
    }
  }
  return unique_array;
}
console.log(unique(arrary));

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
// //  should print: `[1, 11, 34, 52, 61]`
