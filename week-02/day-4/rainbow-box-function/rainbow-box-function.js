const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function draw(size, color) {
  // for (let j = 0; j < rainbow.length; j++) {
  ctx.fillStyle = color;
  ctx.fillRect(300 - size / 2, 200 - size / 2, size, size);
  // }
}
for (let i = 7; i > 0; i -= 1) {
  draw(i * 50, rainbow[rainbow.length - i]);
}
