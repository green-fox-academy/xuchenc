class Person {
  constructor(name, age, gender){
    this.name = name || 'Jane Doe';
    this.age = age || 30;
    this.gender = gender || 'female';
  }

  introduce(){
    console.log(`'Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}'`);
  }

  getGoal(){
    console.log('My goal is: Live for the moment!');
  }
}

// const Jane = new Person('Jane Doe', 30, 'female');
// console.log(Jane);

class Student extends Person{
  constructor(name, age, gender, previousOrganization, skippedDays){
    super(name, age, gender);
    this.previousOrganization = previousOrganization || 'The School of Life';
    this.skippedDays = 0;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`'Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.'`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

// const Jane2 = new Student('Jane Doe', 30, 'female', 'The School of Life');
// console.log(Jane2);

class Mentor extends Person{
  constructor(name, age, gender, level) {
    super(name, age, gender);
    this.level = level || 'intermediate';
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`'Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.'`);
  }
}

class Sponsor extends Person {
  constructor(name, age, gender, company, hiredStudents) {
    super(name, age, gender);
    this.company = company || 'Google';
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`'Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.'`);
  }

  hire() {
    this.hiredStudents += 1;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}

class Cohort {
  constructor(name, students, mentors) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student1) {
    this.students.push(Student1);
  }

  addMentor(Mentor1) {
    this.mentors.push(Mentor1);
  }

  info() {
    console.log(`'The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.'`);
  }
}


const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
