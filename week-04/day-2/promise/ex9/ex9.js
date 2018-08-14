'use strict';

function parsePromised(){
  const promise = new Promise(function(fulfill,reject){
    try {
      JSON.parse();
    } catch (e) {
      console.log(e.message);
    }
  })
  promise
  .then(result => console.log(result))
  .catch(err =>new Error('its an error'))

}



