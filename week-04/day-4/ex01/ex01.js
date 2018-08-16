'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

class Animals{
  constructor(say){
    this.say = say;
  }

  saySth() {
    console.log(this.say);

  }
}

const dog = new Animals('woof');
dog.saySth();
