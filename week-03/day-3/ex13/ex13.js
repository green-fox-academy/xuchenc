const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


function draw(x, y, l, n) {
  if (n > 1) {
    ctx.beginPath();
    ctx.moveTo(x - l / 2, y - l * Math.sqrt(3) / 2);
    ctx.lineTo(x - l, y);
    ctx.lineTo(x - l / 2, y + l * Math.sqrt(3) / 2);
    ctx.lineTo(x + l / 2, y + l * Math.sqrt(3) / 2);
    ctx.lineTo(x + l, y);
    ctx.lineTo(x + l / 2, y - l * Math.sqrt(3) / 2);
    ctx.lineTo(x - l / 2, y - l * Math.sqrt(3) / 2);
    ctx.closePath();
    ctx.stroke();
    draw(x - l / 4, y - l * Math.sqrt(3) / 4, l / 2, n - 1);
    draw(x + l / 2, y, l / 2, n - 1);
    draw(x - l / 4, y + l * Math.sqrt(3) / 4, l / 2, n - 1);
  }
}

draw(400, 400, 400, 7);
