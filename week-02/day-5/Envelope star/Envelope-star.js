const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

var lineWidth = canvas.scrollWidth;
var lineHeight = canvas.scrollHeight;

function drawLine() {
  for (let i = 0; i < 13; i++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(400, 400 - i * 30);
    ctx.lineTo(800 - i * 30, 400);
    ctx.stroke();
  }
}
drawLine();

function drawLine1() {
  for (let i = 0; i < 13; i++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(400, 400 - i * 30);
    ctx.lineTo(0 + i * 30, 400);
    ctx.stroke();
  }
}
drawLine1();

function drawLine2() {
  for (let i = 0; i < 13; i++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(400, 400 + i * 30);
    ctx.lineTo(800 - i * 30, 400);
    ctx.stroke();
  }
}
drawLine2();

function drawLine3() {
  for (let i = 0; i < 13; i++) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(400, 400 + i * 30);
    ctx.lineTo(0 + i * 30, 400);
    ctx.stroke();
  }
}
drawLine3();
