const imgButton1 = document.getElementsByClassName('small')[0];
const largeImg1 = document.getElementById('largeImg1');

const imgButton2 = document.getElementsByClassName('small')[1];
const largeImg2 = document.getElementById('largeImg2');

const imgButton3 = document.getElementsByClassName('small')[2];
const largeImg3 = document.getElementById('largeImg3');

const imgButton4 = document.getElementsByClassName('small')[3];
const largeImg4 = document.getElementById('largeImg4');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";

  const h1 = document.querySelector('h1');
  if (largeImg4.style.display === 'block') {
    h1.innerText = 'This is the fourth Image!';
    p.innerText = '444';
    imgButton4.style.border = '5px solid red';
    imgButton1.style.border = '5px solid white';
    imgButton2.style.border = '5px solid white';
    imgButton3.style.border = '5px solid white';
  } else if (largeImg1.style.display === 'block') {
    h1.innerText = 'This is the first Image!';
    p.innerText = '111';
    imgButton1.style.border = '5px solid red';
    imgButton2.style.border = '5px solid white';
    imgButton3.style.border = '5px solid white';
    imgButton4.style.border = '5px solid white';
  } else if (largeImg2.style.display === 'block') {
    h1.innerText = 'This is the second Image!';
    p.innerText = '222';
    imgButton2.style.border = '5px solid red';
    imgButton1.style.border = '5px solid white';
    imgButton3.style.border = '5px solid white';
    imgButton4.style.border = '5px solid white';
  } else if (largeImg3.style.display === 'block') {
    h1.innerText = 'This is the third Image!';
    p.innerText = '333';
    imgButton3.style.border = '5px solid red';
    imgButton1.style.border = '5px solid white';
    imgButton2.style.border = '5px solid white';
    imgButton4.style.border = '5px solid white';
  }
}


//  console.log(largeImg4);
//  console.log(largeImg4.style.display);
if (largeImg4.style.display === 'block') {
  h1.innerText = 'This is the fourth Image!';
}

imgButton1.addEventListener('click', function () {
  largeImg1.setAttribute('style', 'display: block;');
  largeImg2.setAttribute('style', 'display: none;');
  largeImg3.setAttribute('style', 'display: none;');
  largeImg4.setAttribute('style', 'display: none;');
  h1.innerText = 'This is the first Image!';
  p.innerText = '111';
  imgButton1.style.border = '5px solid red';
  imgButton2.style.border = '5px solid white';
  imgButton3.style.border = '5px solid white';
  imgButton4.style.border = '5px solid white';
});

imgButton2.addEventListener('click', function () {
  largeImg2.setAttribute('style', 'display: block;');
  largeImg1.setAttribute('style', 'display: none;');
  largeImg3.setAttribute('style', 'display: none;');
  largeImg4.setAttribute('style', 'display: none;');
  h1.innerText = 'This is the second Image!';
  p.innerText = '222';
  imgButton2.style.border = '5px solid red';
  imgButton1.style.border = '5px solid white';
  imgButton3.style.border = '5px solid white';
  imgButton4.style.border = '5px solid white';
});

imgButton3.addEventListener('click', function () {
  largeImg3.setAttribute('style', 'display: block;');
  largeImg1.setAttribute('style', 'display: none;');
  largeImg2.setAttribute('style', 'display: none;');
  largeImg4.setAttribute('style', 'display: none;');
  h1.innerText = 'This is the third Image!';
  p.innerText = '333';
  imgButton3.style.border = '5px solid red';
  imgButton2.style.border = '5px solid white';
  imgButton1.style.border = '5px solid white';
  imgButton4.style.border = '5px solid white';
});

imgButton4.addEventListener('click', function () {
  largeImg4.setAttribute('style', 'display: block;');
  largeImg1.setAttribute('style', 'display: none;');
  largeImg2.setAttribute('style', 'display: none;');
  largeImg3.setAttribute('style', 'display: none;');
  h1.innerText = 'This is the fourth Image!';
  p.innerText = '444';
  imgButton4.style.border = '5px solid red';
  imgButton1.style.border = '5px solid white';
  imgButton2.style.border = '5px solid white';
  imgButton3.style.border = '5px solid white';
});
