'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

class Rectangles{
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  getArea(){
    console.log(this.length * this.width);
  }

  getCircumference(){
    console.log((this.length + this.width) * 2);
  }
}

const rect1 = new Rectangles(20, 30);
rect1.getArea();
rect1.getCircumference();
