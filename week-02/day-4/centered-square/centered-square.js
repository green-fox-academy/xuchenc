const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

function drawBox() {
  ctx.fillStyle = 'green';
  ctx.fillRect(295, 195, 10, 10);
}
drawBox();
