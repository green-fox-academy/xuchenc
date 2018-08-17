class Example {}

const ex = new Example();
ex.__proto__.value = 5;
Example.prototype.value = 5;
console.log(ex.__proto__ === Example.prototype);  // true     .prototype for class, __proto__ for new const


const ex2 = new Example();
console.log(ex2.value);   //output 5


class Example2 {}
const ex3 = new Example2();
// ex3.value = 5;
Example2.prototype.value = 6;
// ex3.__proto__.value = 7;
console.log(ex3.value);

