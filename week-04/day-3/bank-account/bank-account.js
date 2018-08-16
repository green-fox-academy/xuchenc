const BankAccount = {
  balance: 0,
  pinCode: '',
  accountNumber: Math.round(Math.random() * 90000 + 10000),

  initializePin:function(number) {
    BankAccount.pinCode = number;
    return BankAccount.pinCode;
  },

  regeneratePin:function(confirm, reNum) {
    if(confirm === BankAccount.pinCode){
      BankAccount.pinCode = reNum;
      return BankAccount.pinCode;
    } else{
      console.log('Error!!!');
      ;
    }
  },

  deposit:function(pinCode, balance) {
    if(pinCode ===BankAccount.pinCode) {
      BankAccount.balance += balance;
    } else{
      return false;
    }
  },

  withdrawer: function(pinCode) {
    return function(amount){
      if(pinCode === BankAccount.pinCode){
        BankAccount.balance -= amount;
      } else{
        return false;
      }
    }
  },

  getBalance: function(pinCode) {
    if(pinCode === BankAccount.pinCode){
      console.log(BankAccount.balance)
    } else{
      return false;
    }
  },

  getHistory:function(pinCode) {
    if(pinCode === BankAccount.pinCode){

    }
  }



}

console.log(BankAccount.initializePin(1234));
// console.log(BankAccount);
console.log(BankAccount.pinCode);


BankAccount.regeneratePin(3456, 6789);
// console.log(BankAccount);


BankAccount.deposit(6789, 10000);
console.log(BankAccount);

BankAccount.withdrawer(6789);


BankAccount.getBalance(6789);
BankAccount.getBalance(1234);
