'use strict';

const httpRequest = new XMLHttpRequest();
const content = document.querySelector('main');
httpRequest.open('GET', 'http://52.29.105.35:3000/posts');
httpRequest.onload = () => {
  const responseObject = JSON.parse(httpRequest.response);
  console.log(responseObject);

  for (let i = 0; i < responseObject.posts.length; i++) {
    const div = document.createElement('section');
    div.setAttribute('class', 'section1');
    const likes = document.createElement('div');
    likes.setAttribute('class', 'likes1');
    const upButton = document.createElement('button');
    upButton.setAttribute('class', 'upButton');
    const downButton = document.createElement('button');
    downButton.setAttribute('class', 'downButton');
    const info = document.createElement('div');
    info.setAttribute('class', 'infos');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.innerText = 'Modify';
    button2.innerText = 'Remove';

    info.innerHTML = `<h1> ${responseObject.posts[i].title} </h1> <p> ${responseObject.posts[i].timestamp} </p>`;
    console.log(responseObject.posts[i]);
    div.appendChild(likes);
    div.appendChild(info);
    info.appendChild(button1);
    info.appendChild(button2);
    content.appendChild(div);
    likes.textContent = responseObject.posts[i].score;
    likes.appendChild(downButton);
    likes.insertBefore(upButton, likes.childNodes[0]);
  }
};
httpRequest.send();
