'use strict';

const getButton = document.querySelector('.get');
const submitButton = document.querySelector('.submit');
const textarea = document.querySelector('textarea');
const para = document.querySelector('p');
const object = {
  id: '',
  text: '',
};

getButton.addEventListener('click', () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://mellow-sugar.glitch.me/text');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    console.log(responseObject.text);
    let string = responseObject.text;
    console.log(string);
    string = string.replace(/\s\s+/g, ' ');
    textarea.innerText = string;
    object.text = string;
    object.id = responseObject.id;
    console.log(object);
    return object;
  };
  httpRequest.send();
});

submitButton.addEventListener('click', () => {
  const httpRequest2 = new XMLHttpRequest();
  const newText = textarea.value;
  console.log(newText);
  console.log(object);
  httpRequest2.open('POST', 'https://mellow-sugar.glitch.me/text');
  httpRequest2.setRequestHeader('Content-Type', 'application/json');
  httpRequest2.onload = () => {
    if (newText === object.text) {
      para.innerText = 'OK';
    } else if (newText !== object.text) {
      para.innerText = 'Wrong';
    } else if (object.id === '') {
      console.log('id must be a number');
      para.innerText = 'Wrong';
    }
  };
  httpRequest2.send();
});
