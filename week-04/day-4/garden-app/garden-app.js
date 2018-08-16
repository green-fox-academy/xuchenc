class Garden {
  constructor(plants) {
    this.plants = [];
  }

  addFlower(flower) {
    this.plants.push(flower);
  }

  addTree(tree) {
    this.plants.push(tree);
  }

  waterPlants(number) {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].type === 'flower' && this.plants[i].waterAmount < 5) {
        this.plants[i].waterAmount += 0.75 * number / this.plants.length;
      } else if (this.plants[i].type === 'tree' && this.plants[i].waterAmount < 10) {
        this.plants[i].waterAmount += 0.4 * number / this.plants.length;
      }
    }
  }

  removePlants() {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].type === 'flower') {
        this.plants.filter(e => e.waterAmount < 5);
      } else {
        this.plants.filter(e => e.waterAmount < 10);
      }
    }
  }

  info() {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].type === 'flower' && this.plants[i].waterAmount < 5) {
        console.log(`'The ${this.plants[i].name} ${this.plants[i].type} needs water'`);
      } else if (this.plants[i].type === 'flower' && this.plants[i].waterAmount >= 5) {
        console.log(`'The ${this.plants[i].name} ${this.plants[i].type} doesn't need water'`);
      } else if (this.plants[i].type === 'tree' && this.plants[i].waterAmount < 10) {
        console.log(`'The ${this.plants[i].name} ${this.plants[i].type} needs water'`);
      } else if (this.plants[i].type === 'tree' && this.plants[i].waterAmount >= 10) {
        console.log(`'The ${this.plants[i].name} ${this.plants[i].type} doesn't need water'`);
      }
    }
  }
}


class Flower {
  constructor(name) {
    this.waterAmount = 0;
    this.name = name;
    this.type = 'flower';
  }

  // water(water123) {
  //   this.waterAmount += 0.75 * water123 /
  // }
}

class Tree {
  constructor(name) {
    this.waterAmount = 0;
    this.name = name;
    this.type = 'tree';
  }

  // water(water234) {
  //   this.waterAmount += 0.4 * water234 / 4;
  // }
}

const yellow = new Flower('yellow');
const blue = new Flower('blue');
const purple = new Tree('purple');
const orange = new Tree('orange');
const garden = new Garden();
garden.addFlower(yellow);
garden.addFlower(blue);
garden.addTree(purple);
garden.addTree(orange);
// console.log(yellow);
// console.log(blue);
// console.log(purple);
// console.log(orange);
garden.info();
// console.log(garden);

garden.waterPlants(40);
garden.removePlants();
console.log(garden);

garden.info();

garden.waterPlants(70);
garden.removePlants();
console.log(garden);

garden.info();
