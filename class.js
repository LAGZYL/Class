// // //classes is the blueprint for creating object
// // // - properties (data, field) , method (function)

// // class Person {
// //     constructor(name, age){
// //         this.name = name;
// //         this.age = age;
// //     }

// //     greet(){
// //         console.log(`Good morning my name ${this.name} I am ${this.age} years old`);
// //     }

// //     haveBirthDay(){
// //         this.age+= 100;
// //         console.log(`${this.name} is now ${this.age} years old`);
// //     }
// // }

// // const myDetails =new Person("Kunle", 33);
// // myDetails.greet();
// // myDetails.haveBirthDay();

// // const details = new Person("simi", 32);
// // details.greet();
// // details.haveBirthDay();

// // /**
// //  * Create a class called Car that represents a car. The class should:
// // Have a constructor that takes the following properties:
// // brand (string)
// // model (string)
// // year (number)
// // mileage (number, default to 0)
// // Have the following methods:
// // drive(distance)
// // Increases the car's mileage by distance and logs
// // "You drove <distance> km. Total mileage is now <mileage> km."
// // getDetails()
// // Logs "Brand: <brand>, Model: <model>, Year: <year>, Mileage: <mileage> km"
// //  */
// // class Car{
// //     constructor(brand, model, year, mileage){
// //         this.brand = brand;
// //         this.model = model;
// //         this.year = year;
// //         this.mileage = mileage;
// //     } 
// //     getDetails(){
// //          console.log(`the brand of this car is ${this.brand}, with model ${this.model} with year ${this.year} has a mileage of ${this.mileage}`)
// //     }
// //     drive(){
// //        console.log(`the brand of this car is ${this.brand}, with model ${this.model} with year ${this.year} has a mileage of ${this.mileage}`)
// //     }

// // }
// //  const carObject =new Car("corolla", "Matrix", 2010, 0);
// // carObject.drive();

// // const newdrive = new mileage(90);
// // newdrive.drive();

// // //Create two different car objects from the Car class.

// // // Call the drive() method on each object to increase the mileage.

// // // Call the getDetails() method to print the car details.

// class Car {
//     constructor(brand, model, year, mileage = 0) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.mileage = mileage;
//     }

//     drive(distance) {
//         this.mileage += distance;
//         console.log(`You drove ${distance} km. Total mileage is now ${this.mileage} km.`);
//     }

//     getDetails() {
//         console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage} km`);
//     }
// }
// const car1 = new Car("Toyota", "Corolla", 2010);
// const car2 = new Car("Honda", "Civic", 2015, 50000);

// car1.drive(100);
// car2.drive(200);

// car1.getDetails();
// car2.getDetails();

// /**
//  * Create a class called Student to represent a student's academic information.

// The class should:
// Have a constructor that takes:

// name (string)

// level (string) – e.g., "100 Level", "200 Level"

// courses (array of strings, default to an empty array)

// Have the following methods:

// registerCourse(courseName)

// Adds the course name to the courses array

// Logs: "Course <courseName> has been registered."

// listCourses()

// Logs the list of registered courses, e.g.,
// "Registered Courses: Mathematics, Physics"

// getProfile()

// Logs: "Name: <name>, Level: <level>, Total Courses: <number of courses>"
//  */


// class Student{
// constructor(name, level, courses = []){
//  this.name = name;
//  this.level = level;
//  this.courses = courses;
// }

// registerCourse(coursename){
//     this.courses.push(coursename);
//     console.log(`course ${this.courses}, has been registered`)
// }


// listcourse(){
//     console.log(`name: ${this.name}, level: ${this.level}, courses: ${this.courses}`)
// }
// }

// const StudentDetails = new Student("daniel joseph", 300,[ "Epidemiology", "Microbiology", "Biology", "Mathematics"]);
// StudentDetails.registerCourse();
// StudentDetails.listcourse();

/**
 *Create a class called BankAccount to represent a simple bank account system.

The class should:
Have a constructor that takes:

accountHolder (string)

balance (number, default to 0)

Include the following methods:

deposit(amount)

Adds the amount to the balance

Logs: "Deposited ₦<amount>. New balance is ₦<balance>."

withdraw(amount)

Subtracts the amount from the balance only if sufficient funds exist

If successful, log: "Withdrew ₦<amount>. New balance is ₦<balance>."

If insufficient funds, log: "Insufficient balance!"

checkBalance()

Logs: "Account Holder: <accountHolder>, Balance: ₦<balance>"

Tasks for Students:
Create a bank account for two users.

Make a deposit and withdrawal for each user.

Display the final balance using checkBalance().
 */
    
// class BankAccount{
// constructor(accountHolder, balance){
//     this.accountHolder=accountHolder;
//     this.balance=balance;
// }

// deposit(amount){
//     this.balance+= amount;
//     console.log(`Deposited ${amount}. New balance is ${this.balance}`)
// }

// withdraw(amount){
//     this.balance-= amount;
//     if (this.balance>=amount){console.log(`Withdrew ${amount}. New balance is ${this.balance}`)}
//     if (this.balance < amount){console.log(`Insufficient balance`)}
//     }

// checkBalance(){
//     console.log(`Account Holder: ${this.accountHolder}, Balance: ${this.balance}`)
// }
// }

// const customer1BankAccount = new BankAccount ("Daniel ford",5000);
// const customer2BankAccount = new BankAccount ("Daniel Grace", 7000);

// customer1BankAccount.deposit(2000);
// customer2BankAccount.withdraw(4000);

// customer1BankAccount.checkBalance();
// customer2BankAccount.checkBalance();


/**
 * Create a class called Student that represents a student record.

The class should:
Have a constructor that takes:

name (string)

age (number)

grades (an array of numbers)

Include the following methods:
addGrade(grade)

Adds a new grade to the student's grades array

Logs: "Added grade <grade>. Grades are now: <grades>"

getAverage()

Calculates and logs the average of all grades

Logs: "Average grade for <name> is <average>"

getDetails()

Logs: "Name: <name>, Age: <age>, Grades: <grades>"

✅ Your Tasks:
Create two Student objects.

Add at least 2 grades to each student using addGrade().

Call getAverage() and getDetails() for both students.


 */

class Student{
    constructor(name, age, grades = []){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(grade){
        this.grades.push(grade)
        console.log(`Added grade ${grade}. Grades are now: ${this.grades}`)
    }

    getAverage(){
        const sumOfGrades = this.grades.reduce((a, b) => a + b);
        const noOfGrades = this.grades.length;
      
        console.log(`Average grade for ${this.name}is ${sumOfGrades / noOfGrades}`)
       
    }

    getDetails(){
        console.log(`Name: ${this.name}, age: ${this.age}, grades: ${this.grades}`)
    }
}
console.log("________________________________________");

const student1 = new Student("Ayobami Pili", 19);
student1.addGrade(58);
student1.addGrade(56);
student1.getAverage();
student1.getDetails();

const student2 = new Student("Pili Omotokun", 22);
student2.addGrade(30);
student2.addGrade(40);
student2.addGrade(50);
student2.getAverage();
student2.getDetails();

const student3 = new Student ("Elijah Ayo", 24);
student3.addGrade(50);
student3.addGrade(50);
student3.getAverage();
student3.getDetails();