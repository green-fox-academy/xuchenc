const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawTri() {
  ctx.beginPath();
  ctx.moveTo(400, 107.2);
  ctx.lineTo(800, 800);
  ctx.lineTo(0, 800);
  ctx.lineTo(400, 107.2);
  ctx.stroke();
}

drawTri();


function drawLine() {
  ctx.beginPath();
  for (let i = 0; i < 20; i++) {
    ctx.moveTo(400 - 50 * i / 2, 107.2 + 50 * i * Math.sqrt(3) / 2);
    ctx.lineTo(400 + 50 * i - (50 * i / 2), 107.2 + 50 * i * Math.sqrt(3) / 2);
    ctx.stroke();
  }
}
drawLine();

function drawLine2() {
  ctx.beginPath();
  for (let i = 0; i < 20; i++) {
    ctx.moveTo(400 + 50 * i - (50 * i / 2), 107.2 + 50 * i * Math.sqrt(3) / 2);
    ctx.lineTo(50 * i, 800);
    ctx.stroke();
  }
}
drawLine2();

function drawLine3() {
  ctx.beginPath();
  for (let i = 0; i < 20; i++) {
    ctx.moveTo(400 - 50 * i / 2, 107.2 + 50 * i * Math.sqrt(3) / 2);
    ctx.lineTo(800 - 50 * i, 800);
    ctx.stroke();
  }
}
drawLine3();
