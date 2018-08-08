// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
var sum = 0;
const countdown = function(n) {
  if (n > 0) {
    sum += n;
    countdown(n - 1);
  }
  console.log(sum);
};

countdown(5);
