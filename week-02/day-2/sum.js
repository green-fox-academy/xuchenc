// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

const sum = function (number) {
  let sumsum = 0;
  for (let i = 0; i <= number; i++) {
    sumsum += i;
  }
  return sumsum;
};
console.log(sum(100));
