// - Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// - bonus for using the correct built in array method
const numbers = [4, 5, 6, 7];
const arr = [];
for (let i = 0; i < numbers.length; i++) {
  arr.push(numbers[i]);
}
console.log(arr);
