//SimplyLearn - Objects

/**
 * JS is an OOP Language
 * JS object is like real-world entity having state and behaviour for example a car
 * JS is template based - we can create objects without the need of having a class
 * 
 */

//creating a JS Object
//Using object literal to create and define a JS object

// let student={
//     officialName: "Mark John",
//     age: 21,
//     studies: "Software Engineering"
// };

console.log(student.officialName + " you are " + student.age + " studying " + student.studies) 
//Mark John you are 21 studying Software Engineering


//using the keyword new to create and define a JS object
let pupil = new Object();
pupil.school = "Strathmore"
pupil.class = "Grade 6"
pupil.tutor = "George"

console.log(pupil) // {school: 'Strathmore', class: 'Grade 6', tutor: 'George'}

//Using object constructor to create and define JS Object
// function stut(namee, age, studies){
//     this.name = namee;
//     this.age = age;
//     this.studies = studies;
// } 

// let mStudent = stut("Christopher", 32, "Devops")
// console.log(mStudent.namee + " you are " + mStudent.age + " studying " + mStudent.studies) 
//Above code has undefined output

//Object properties
/**Js is a collection of unordered properties
 * Values associated with JS objects => properties
 * Properties can usually be added, updated and deleted - excluding read-only properties

*/

let student={
    officialName: "Mark John",
    age: 21,
    studies: "Software Engineering"
};

student.age = 47;
console.log(student) //{officialName: 'Mark John', age: 47, studies: 'Software Engineering'}

//Object methods
//These are actions that can be performed on the objects

let user ={
    typeName: "Paul",
    age: 34,
}
function sayHi(){
    console.log("Hello")
}
user.message = sayHi;
console.log(user.typeName) //Paul




