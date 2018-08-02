const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a box that has different colored lines on each edge.

function draw1(){
  ctx.strokeStyle = 'red';
  ctx.beginPath()
  ctx.moveTo(10, 10);
  ctx.lineTo(210,10);
  ctx.stroke();
}
draw1();

function draw2(){
  ctx.strokeStyle = 'green';
  ctx.beginPath()
  ctx.moveTo(210, 10);
  ctx.lineTo(210,210);
  ctx.stroke();
}
draw2();

function draw3(){
  ctx.strokeStyle = 'yellow';
  ctx.beginPath()
  ctx.moveTo(210, 210);
  ctx.lineTo(10,210);
  ctx.stroke();
}
draw3();

function draw4(){
  ctx.strokeStyle = 'blue';
  ctx.beginPath()
  ctx.moveTo(10, 210);
  ctx.lineTo(10,10);
  ctx.stroke();
}
draw4();

