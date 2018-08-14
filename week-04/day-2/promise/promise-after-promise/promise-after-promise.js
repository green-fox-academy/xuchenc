'use strict';

const first = new Promise(function(fulfill, reject){
  fulfill('Secret Value');
});

console.log(first);


const second = first.then(function(onFulfilled){
  return onFulfilled;
})

console.log(second);
