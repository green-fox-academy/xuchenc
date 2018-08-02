const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
const drawLine = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(400, 400);
  ctx.stroke();
};
for (let x = 0; x <= 800; x += 20) {
  drawLine(x, 0);
}

for (let x = 0; x <= 800; x += 20) {
  drawLine(x, 800);
}

for (let y = 0; y <= 800; y += 20) {
  drawLine(0, y);
}

for (let y = 0; y <= 800; y += 20) {
  drawLine(800, y);
}
