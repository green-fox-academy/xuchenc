 'use strict';
var sum, avg = 0;
var arr=[1,2,3,4,5,6,7,8,9];
if (arr.length)
{
    sum = arr.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / arr.length;
}

console.log("Sum: " + sum + " Average: " + avg);
