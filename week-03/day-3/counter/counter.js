//  Write a recursive function that takes one parameter: n and counts down from n.

const countdown = function(n) {
  if (n > 0) {
    console.log(n);
    countdown (n - 1);
  }else{
    console.log(n);
  }
};

countdown(10);
