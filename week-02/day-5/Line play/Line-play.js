const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

var lineWidth = canvas.scrollWidth;
var lineHeight = canvas.scrollHeight;

function drawLine(width, height) {
  for (let i = 0; i < 13; i++) {
    ctx.strokeStyle = 'violet';
    ctx.beginPath();
    ctx.moveTo(width - i * 30, 0);
    ctx.lineTo(width, height - i * 30);
    ctx.stroke();
  }
}

drawLine(400, 400);

function draw123(width, height) {
  for (let i = 0; i < 13; i++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, height - i * 30);
    ctx.lineTo(width - i * 30, height);
    ctx.stroke();
  }
}

draw123(400, 400);
