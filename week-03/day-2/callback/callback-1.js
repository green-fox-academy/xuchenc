'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  return output;
}

const addOne = (number) => {
  return number + 1;
}


// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const mapWith1 = (array, callback) => {
  let output2 = [];
  for (let k = 0; k < words.length; k++) {
    output2.push(callback(array[k]));
  }
  return output2;
};

const removeSecondLetter = () => {
  for (let i = 0; i < words.length; i++) {
    var str = words[i].split('');
    var nth = 2;
    var replaceWith = '|';
    for (let j = 0; j < str.length - 1; j += nth) {
      str[i] = replaceWith;
    }
  }
};
console.log(mapWith1(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']

// var str = "abcdefoihewfojias".split('');
// var nth = 4; // the nth character you want to replace
// var replaceWith = "|" // the character you want to replace the nth value
// for (var i = nth-1; i < str.length-1; i+=nth) {
//     str[i] = replaceWith;
// }
// alert( str.join("") );
