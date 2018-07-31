'use strict';

// const lineCount = 6;
// var i
// var j;
// if(i=1){
//   console.log("%".repeat(5));
// }
// var mtx;
// for(i=2;i<lineCount;i++){
//   for(j=2;j<lineCount;j++){
//     if(i===j){
//       mtx+="%";
//     }else{
//       mtx+=" ";
//     }
//     console.log(mtx);
//   }
// }
// if(i=lineCount){
//   console.log("%".repeat(5));
// }


const lineCount = 6;
var i;
var j;
var k;

for(i=1;i<=lineCount;i++){
  if(i==1 || i==lineCount){
    console.log("%".repeat(5));
  }else{
     var mtx = "%";
     for(k=1;k<=5;k++){
     for(j=1;j<=5;j++){

      if(j==k || j==5){
      mtx+="%";
    }else{
      mtx+=" ";
    }

   }
  }
 }console.log(mtx);
}
