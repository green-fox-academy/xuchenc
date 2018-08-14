'use strict';

const promise = new Promise(function(fulfill, reject) {
  setTimeout(() => {
    console.log('Fulfilled!')
  }, 300)
})

promise
  .then(result => console.log(result));
