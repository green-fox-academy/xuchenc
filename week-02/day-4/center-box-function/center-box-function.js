const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function draw(size) {
  ctx.strokeRect(300 - size / 2, 200 - size / 2, size, size);
}

for (let i = 0; i < 3; i++) {
  draw(Math.random() * 200 + 1);
}
