'use strict';

const submit = document.querySelector('button');
const title = document.querySelector('textarea');
const url = document.querySelector('input');
const object = {
  title: title.value,
  url: url.value,
};


submit.addEventListener('click', function() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://52.29.105.35:3000/posts');
  object.title = title.value;
  object.url = url.value;
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  console.log(object)
  httpRequest.onload = () => {
    window.location = './project.html';
    console.log(httpRequest.responseText)
  }
  httpRequest.send(JSON.stringify(object));
  console.log(object);
});
