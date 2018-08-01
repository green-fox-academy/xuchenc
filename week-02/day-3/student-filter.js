const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average

for(let i = 0; i < students.length; i++){
  if(students[i].candies>4){
  console.log('name: ' + students[i].name);
  }
}

var sum = 0;

for(let j = 0; j < students.length; j++){
    sum += students[j].candies;

}
console.log(sum);
var avg = sum/students.length;
console.log(avg);
