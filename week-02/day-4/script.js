const canvas = document.querySelector(".my-canvas");
const context = canvas.getContext('2d');


const drawSquare = (x, y, size) => {
  context.fillRect(x, y, size, size);
};

const drawTriangle = (x, y, size) => {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y + size);
  context.lineTo(x + size, y);
  context.lineTo(x, y);
  // context.stroke();
  context.fill();
};

drawTriangle(20, 20, 100);
