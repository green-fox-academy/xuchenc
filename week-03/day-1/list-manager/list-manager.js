'use strict';

var list = document.getElementsByTagName('li');
console.log(list);
console.log(list[0]);

list[0].style.backgroundColor = 'lightgrey';

var number = 0;
var downButton = document.getElementById('down');
downButton.onclick = function() {
  if (number !== list.length-1) {
    list[number].style.backgroundColor = 'white';
    list[number + 1].style.backgroundColor = 'lightgrey';
    number++;
  }
};

var upButton = document.getElementById('up');
upButton.onclick = function() {
  if (number !== 0) {
    list[number].style.backgroundColor = 'white';
    list[number - 1].style.backgroundColor = 'lightgrey';
    number--;
  }
};

var removeButton = document.getElementById('remove');
var parent = document.querySelector('ul');
// var child = document.querySelector('li')
removeButton.onclick = function() {
  if (list.length !==0) {
    parent.removeChild(list[number]);
    list[0].style.backgroundColor = 'lightgrey';
    // list.length--;
  }
};

var moveButton = document.getElementById('move');

var new123 = document.querySelector('.container3');
moveButton.onclick = function() {
  if (list.length !== 0) {
    var element = parent.removeChild(list[number]);
    list[0].style.backgroundColor = 'lightgrey';
    element.style.backgroundColor = 'white';
    new123.appendChild(element);
    // typeof element = 'string';
  }
};
