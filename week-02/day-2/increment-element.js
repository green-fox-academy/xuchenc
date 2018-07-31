// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console
const t = [1, 2, 3, 4, 5];
t.map(() => {
  t[2] = 100;
  return t;
});
console.log(t);
console.log(t[2]);
