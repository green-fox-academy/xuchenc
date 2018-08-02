const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function draw(x, y, size) {
  ctx.fillStyle = 'violet';
  ctx.fillRect(x, y, size, size);
}
 var sum = 0;
for (let i = 0; i < 6; i++) {
  draw(10 + sum, 10 + sum, i * 10, i * 10);
  sum += i * 10;
}
