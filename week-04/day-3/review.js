'use strict';
function greeting() {
  var hello = 'hello world';
  return function() {
    console.log(hello);
    return 'hi';
  };
}

const myGreeter = greeting();
console.log(`my variable: ${myGreeter()}`);


//encapsulation
function Car(runKms, fuelLevel) {
  this.runKms = runKms;
  this.fuelLevel = fuelLevel;
  this.drive = function(newlyRunKms) {
    this.runKms += newlyRunKms;
    this.fuelLevel = this.fuelLevel - newlyRunKms / 10;
  }
}

const myCar = new Car(0, 100);
console.log(myCar.runKms);
console.log(myCar.fuelLevel);
myCar.drive(10);
console.log(myCar.runKms);
console.log(myCar.fuelLevel);
