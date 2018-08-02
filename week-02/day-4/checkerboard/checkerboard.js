const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext('2d');


const drawSquare = (x, y, size) => {
  ctx.fillRect(x, y, size, size);
};


for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if ((i + j) % 2 === 0) {
      drawSquare(i * 50, j * 50, 50, 50);
    }
  }
}
