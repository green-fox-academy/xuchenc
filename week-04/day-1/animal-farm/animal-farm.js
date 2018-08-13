class Animal {

  constructor() {
    this.hunger = 5;
    this.thirst = 5;
  }

  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.hunger += 1;
    this.thirst += 1;
  }
}

class Farm {

  constructor(slots) {
    this.slots = slots;
    this.animals = [];
    for (let i = 0; i < this.slots; i++) {
      this.animals.push(new Animal());
    }
  }

  breed() {
    if (this.animals.length < this.slots) {
      const create = new Animal();
      this.animals.push(create);
    }
  }

  slaughter() {
    for(let j = 1; j <= this.animals.length; j++) {
      if(this.animals[j].hunger < this.animals[j-1].hunger) {
        return this.animals[j].hunger;
      }else {
        return this.animals[j-1].hunger;
      }
    }
  }

  progress() {
    const num1 = Math.round(Math.random());
    const num2 = Math.round(Math.random());
    const num3 = Math.round(Math.random());
    // if(num1 == 0){
    //   Animal.eat();
    // }
    // if(num2 == 0){
    //   Animal.drink();
    // }
    // if(num3 == 0){
    //   Animal.play();
    // }
    if (this.animals.length === 0) {
      console.log('The farm has ' + this.animals.length + ' living animals, we are bankrupt');
    } else if (this.animals.length > 0 && this.animals.length < this.slots) {
      console.log('The farm has ' + this.animals.length + ' living animals, we are okay');
    } else if (this.animals.length === this.slots) {
      console.log('The farm has ' + this.animals.length + ' living animals, we are full');
    }
  }
}

const sheepFarm = new Farm(20);
console.log(sheepFarm.animals);

sheepFarm.progress();
