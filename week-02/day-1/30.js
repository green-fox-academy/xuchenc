'use strict';

const lineCount = 7;
var j= Math.ceil(lineCount/2);
console.log(j);
var i;
for(i=1;i<=j;i++){
  console.log(" ".repeat(j-i) + "*".repeat(2*i-1) + " ".repeat(j-i));
   }
   for(i=j+1;i<=lineCount;i++){
    console.log(" ".repeat(i-j) + "*".repeat(lineCount-2*(i-j)) + " ".repeat(i-j));
}
