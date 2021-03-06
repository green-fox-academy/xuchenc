class Aircraft {
  constructor(planes) {
    this.planes = [];
  }

  addPlane(e) {
    this.planes.push(e);
  }

  fight() {
    for (let i = 0; i < this.planes.length; i++) {
      const damage = this.planes[i].ammoStore * this.planes[i].baseDamage;
      this.planes[i].ammoStore = 0;
      console.log(damage);
    }
  }

  refill(number) {
    for (let i = 0; i < this.planes.length; i++) {
      this.planes[i].ammoStore += number;
      const need = this.planes[i].maxAmmo - this.planes[i].ammoStore;
      const remain = number - need;
      console.log(remain);
    }
  }

  getType() {
    console.log(this.type);
  }

  getStatus() {
    for (let i = 0; i < this.planes.length; i++) {
      console.log(`'Type ${this.planes[i].type}, Ammo: ${this.planes[i].ammoStore}, Base Damage: ${this.planes[i].baseDamage}, All Damage ${this.planes[i].ammoStore * this.planes[i].baseDamage}'`);
    }
  }

  isPrioroty() {
    for (let i = 0; i < this.planes.length; i++) {
      if (this.planes[i].type === 'F35' && this.planes[i].ammoStore !== this.planes[i].maxAmmo) {
        return true;
      }
      return false;
    }
  }
}

class F16 {
  constructor() {
    this.maxAmmo = 8;
    this.baseDamage = 30;
    this.ammoStore = 0;
    this.type = 'F16';
  }
}

class F35 {
  constructor() {
    this.maxAmmo = 12;
    this.baseDamage = 50;
    this.ammoStore = 0;
    this.type = 'F35';
  }
}


const f16 = new F16();
const f35 = new F35();
const aircraft = new Aircraft();
aircraft.addPlane(f16);
aircraft.addPlane(f35);
aircraft.refill(5);
aircraft.getStatus();
aircraft.isPrioroty();


// console.log(aircraft);
