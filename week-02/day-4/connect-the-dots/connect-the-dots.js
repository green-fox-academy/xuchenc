const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
const box = [[10, 10], [290, 10], [290, 290], [10, 290], [10, 10], [50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
// const line = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function draw(arr) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath();
    ctx.moveTo(arr[i][0], arr[i][1]);
    ctx.lineTo(arr[i + 1][0], arr[i + 1][1]);
    ctx.stroke();
  }
}
draw(box);
// draw(line);


// function drawLine() {

//   ctx.beginPath();

//   for (let j = 0; j < arr.length; j++) {
//     ctx.moveTo(arr[j][0], arr[j][1]);
//     ctx.lineTo(arr[j + 1][0], arr[j + 1][1]);
//     ctx.stroke();
//     ctx.closePath();
//   }
// }

// drawLine();
// drawBox();
