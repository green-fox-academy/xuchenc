const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// function drawHex(l) {
//   ctx.beginPath();
//   ctx.moveTo(200 - l / 2, 200 - (Math.sqrt(3) * l / 2));
//   ctx.lineTo(200 - l, 200);
//   ctx.lineTo(200 - l / 2, 200 + (Math.sqrt(3) * l / 2));
//   ctx.lineTo(200 + l - l / 2, 200 + (Math.sqrt(3) * l / 2));
//   ctx.lineTo(200 + l, 200);
//   ctx.lineTo(200 + l / 2, 200 - (Math.sqrt(3) * l / 2));
//   ctx.lineTo(200 - l / 2, 200 - (Math.sqrt(3) * l / 2));
//   ctx.stroke();
// }

// drawHex(20);
ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvas.width, canvas.height);
function drawSquare(x, y, l, n) {
  if (n > 1) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + l, y);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.lineTo(x, y);
    ctx.stroke();
    drawSquare(x + l / 3, y, l / 3, n - 1);
    drawSquare(x, y + l / 3, l / 3, n - 1);
    drawSquare(x + l / 3, y + 2 * l / 3, l / 3, n - 1);
    drawSquare(x + 2 * l / 3, y + l / 3, l / 3, n - 1);
  }
}

drawSquare(0, 0, 800, 6);
