// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(n, sqr) {
  if (n > 1 && sqr > 1) {
    return n * power(n, sqr - 1);
  }
  return n;
}

console.log(power(9, 1));
console.log(power(1, 9));
console.log(power(8, 3));
