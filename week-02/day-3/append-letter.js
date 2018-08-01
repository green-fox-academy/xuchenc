'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
const appendA = function () {
  for (let i = 0; i < far.length; i++) {
    far[i].concat('a');
  }
  return far;
};
console.log(appendA(far));
// module.exports = appendA;
