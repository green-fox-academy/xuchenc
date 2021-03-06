const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawHex(l) {
  ctx.beginPath();
  ctx.moveTo(200 - l / 2, 200 - (Math.sqrt(3) * l / 2));
  ctx.lineTo(200 - l, 200);
  ctx.lineTo(200 - l / 2, 200 + (Math.sqrt(3) * l / 2));
  ctx.lineTo(200 + l - l / 2, 200 + (Math.sqrt(3) * l / 2));
  ctx.lineTo(200 + l, 200);
  ctx.lineTo(200 + l / 2, 200 - (Math.sqrt(3) * l / 2));
  ctx.lineTo(200 - l / 2, 200 - (Math.sqrt(3) * l / 2));
  ctx.stroke();
}

drawHex(20);

var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return 1;
};




