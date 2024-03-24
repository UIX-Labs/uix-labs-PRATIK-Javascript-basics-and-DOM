//Write code for the 1st task below this
function Person(name , age){
    this.name = name;
    this.age = age
    this.greet = function(){
         console.log(`Hello, ${this.name} you are ${this.age} years old.`);
    }
}

//Write your code above this line
//Write code for the 2nd task below this
function Student(name, age, studentId) {
  Person.call(this, name, age); 
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
  console.log(`${this.name} with student ID ${this.studentId} is studying.`);
};

//Write your code above this line
//Write code for the 3rd task below this
Person.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name}.`);
};

// Demonstrate introduce method
const person1 = new Person('John', 25);
person1.introduce(); 

const student1 = new Student('Alice', 20, '123456');
student1.introduce(); 

//Write your code above this line

//Write code for the 4th task below this
Student.prototype.greet = function() {
  console.log(`Hey, I'm ${this.name} and I'm ${this.age} years old.`);
};

//Write your code above this line
//Write code for the 5th task below this
// ES6 class for Employee
class Employee {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

// Create an instance of Employee class
const employee1 = new Employee('Jane', 'Software Engineer');

// Comparing with prototype-based approach
const person2 = new Person('Smith', 30);
person2.greet(); // Output: Hello, my name is Smith and I am 30 years old.

// Both approaches achieve similar results, but classes provide
//  syntactic sugar and encapsulation compared to the explicit 
//   manipulation in the prototype-based approach.

//Write your code above this line


