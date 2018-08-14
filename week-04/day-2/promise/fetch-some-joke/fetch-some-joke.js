let url = 'http://api.icndb.com/jokes/random'

fetch(url)
  .then( (response) => response.json())
  .then( (myJson) => console.log(myJson));
