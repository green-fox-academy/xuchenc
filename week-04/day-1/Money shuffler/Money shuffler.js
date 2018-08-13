'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amount) {
    this.cash += (1 - parseInt(this.tax)/100) * amount;
  },
};


const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amount){
    this.cash += (1- parseInt(this.tax)/100) * amount;
  },
}

const Shuffler = {
  cash: 10000,
  pick: function() {
    this.cash -= 1000;
    const number = Math.round(Math.random());
    if(number == 0){
      Panama.deposit(1000);
      console.log('Panama got 1000');
    }else{
      Cyprus.deposit(1000);
      console.log('Cyprus got 1000');
    }
  },
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log( Panama.cash ); // 2000
console.log( Cyprus.cash ); // 2000
