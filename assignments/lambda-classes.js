// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.speciality = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.classname = attributes.classname;
    this.favSubjects = attributes.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach(console.log);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassname = attributes.gradClassname;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(studentObject, subject) {
    console.log(
      `${this.name} debugs ${studentObject.name}'s code on ${subject}`
    );
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const skitty = new Student({
  name: "Skitty",
  location: "Hogtown",
  age: 25,
  gender: "male",
  favSubject: "javascript",
  previousBackground: "rapper",
  classname: "fswpt4",
  favSubjects: ["javascript", "react"]
});

const winston = new ProjectManager({
    name: "Winston",
    location: "Omaha",
    age: 11,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`,
    gradclassName: "big ballers class",
    favInstructor: "fred"
  });

console.log(fred);
console.log(skitty);
console.log(winston);
skitty.listSubjects();
skitty.PRAssignment("basketweaving");
skitty.sprintChallenge("javascript");
skitty.speak();
winston.standUp("#winstonschannel");
winston.debugsCode(skitty, "javascript");
fred.demo("javascript");
fred.grade(skitty, "javascript");