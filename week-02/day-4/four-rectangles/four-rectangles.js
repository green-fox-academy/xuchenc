const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function drawRect(x, y, width, height) {
  var color = getRandomRgb();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

for (let i = 0; i < 4; i++) {
  drawRect(Math.random() * 600 + 0, Math.random() * 400 + 0, Math.random()*300 + 1, Math.random() * 200 + 1);
}
