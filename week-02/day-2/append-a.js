// - Create a variable named `animals`
//   with the following content: `['koal', 'pand', 'zebr']`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops
const animals = ['koal', 'pand', 'zebr'];
animals.map(() => {
  animals.concat('a');
  return animals;
});
console.log(animals);
