'use strict';

const lineCount = 4;
var i;
for(i=1;i<=lineCount;i++){
  console.log(" ".repeat(lineCount-i) + "*".repeat(2*i-1) + " ".repeat(lineCount-i));
}
