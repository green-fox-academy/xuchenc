// - Create a function called `factorio`
//   that returns it's input's factorial

const factorio = function (number) {
  let fac = 1;
  for (let i = 1; i <= number; i++) {
    fac *= i;
  }
  return fac;
};
console.log(factorio(5));
