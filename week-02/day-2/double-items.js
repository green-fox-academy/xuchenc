// - Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

const drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
const dup = drinks.map(x => x.repeat(2));
console.log(dup);

// const a = [2, 3, 1, 4]
// const duplicated = a.map(function(item) {
//   return [item, item];
// }).reduce(function(a, b) { return a.concat(b) });

// console.log(duplicated);
