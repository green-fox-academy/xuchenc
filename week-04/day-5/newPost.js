'use strict';

const submit = document.querySelector('button');
const title = document.querySelector('textarea');
const url = document.querySelector('input');
const object = {
  title: title.value,
  url: url.value,
};

submit.addEventListener('click', () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://52.29.105.35:3000/posts');
  object.title = title.value;
  object.url = url.value;
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.onload = () => {
    window.location = './project.html';
  };
  httpRequest.send(JSON.stringify(object));
});
