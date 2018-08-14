'use strict';

const promise = new Promise(function(fulfill, reject){
  fulfill('MANATTAN');
})

promise
  .then(function attachTitle(){
    return console.log('DR.' );
  })
  .then(result => console.log(result))
