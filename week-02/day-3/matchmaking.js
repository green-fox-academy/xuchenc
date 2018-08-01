'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

var arr=[];
// for (let i = 0; i < girls.length; i++) {
for (let j = 0; j < boys.length; j++) {
  if (girls[j] !== undefined) {
    arr.push(girls[j], boys[j]);
  }
}
// }
console.log(arr);


// console.log(makingMatches(girls, boys));

// module.exports = makingMatches;

