const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);


function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
var color = getRandomRgb();



// for (var i = 0; i < 10; i++) {
//   console.log(getRandomRgb());
// }

function drawSquare() {
  ctx.fillStyle = color;
  ctx.fillRect(Math.random() * 800 + 1, Math.random() * 800 + 1, 50, 50);
}
drawSquare();
