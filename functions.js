//functions in JS => to avoid repeating codes
//concept > syntax
/**
 * Functions and methods
 * Declarations and definitions
 * > this is the same thing
 * Arguments and parameters
 * > parameters passed when declaring a function while argument is the value passed to the function when calling the function
 * Callbacks and High order functions
 * 
 * 
 */


//Declarations and definitions
// function printName(par){
//     console.log("This is a function");
// }
// printName()


//function expressions
// const printMe = function(){
//     console.log('Print me')
// }
// printMe()

// //Return from a function
// function x(a,b){
//    //return a + b;
//    let ans = a + b;
//    return ans
// }

// //default parameters

// function calc (a,b= 234){ //c = 234 is a default parameter
//     return (3 * (a+b))
// }
// calc(34)

// //Rest parameters => a function accepts any number of arguments
// function collectThings(c, ...d){ // ...d is a rest parameter
//     console.log(c)
//     console.log(d)
// }
// collectThings(2323,23423,2344543,3,34444443,32423)

// //arrow functions
// const add = (x,y) => x + y
// add(3423, 534)

// //nested function
// function outer(){
//     console.log("Outer");
//     function inner(){
//         console.log("Inner")
//     }
//     inner()
// }
// outer()

//function scope
//variable defined inside a function cannot be access outside the funtion
//function can access all the variables defined inside the scope it is defined

// function doSomething (){
//     let x = 10;
//     const y = 20;
//     var z =30;
//     //console.log(x,y,z) //this will work
// }
// doSomething()
//console.log(x,y,z) //this won't work
    
//     let x = 10;
//     const y = 20;
//     var z =30;
// function doSomething (){
    
//     console.log(x,y,z) //this will work
// }
// doSomething()


//closure => nested function is a closure
//closure is a function than can free variables together with an environment that can run that variable 
//Inner function can be accessed only from statements in the outer function
//Inner functions can use the variables and arguments and everything from an outer function, while the outer function cannot use arguments and variables from the inner function

// function outer(x){
//     function inner(y){
//         return x + y;
//     }
//     return inner;
// }
// const outerReturn = outer(10)
// outerReturn(2) //will give an output of 12

//Callback functions
//function as a argument to another function
// function foo(boo) {
//     boo(); //callback function
// }
// foo(function(){ //anonymous function as an argument
//     console.log('bar')
// })


// function named(){
//     console.log('Good')
// }

// foo(named);

// function order(food){
//     if(onDemand){
//         food()//callback function
//     }
//     if(onDelivery){
//         food() //callback function
//     }
// }

//High order functions
//takes more than one function as an argument, may returns function as a value from it

// function getCapture(camera){
//     camera()
// }
// getCapture(function(){
//     console.log("RUle of thirds")
// })

// function returnFn(){
//     return function(){
//         console.log("Logging")
//     }
// }

// const fN = returnFn;

// fN()


//pure functions => provide same output for the same input

// function sayGreeting (name){
//     return `Hello ${name}`
// }
// sayGreeting('Wanyua')

// let greeting = "Hello";
// function sayGreeting (name){
//     return `${greeting} ${name}`
// }
// sayGreeting('Wanyua')

//impure function
// let greeting = "Hello";
// greeting = "Jambo"
// function sayGreeting (name){
//     return `${greeting} ${name}`
// }
// sayGreeting('Wanyua')

//Immediately invoked function expressions (IIFE)
// (function(){console.log("IIFE");})() //Immediately invoke functions

// (function(parameter1, parameter2) {
//     // Your code here
// })(value1, value2);


//Call stack
// the first shall be the last => how the stack works

function f1(){

};
function f2 (){
    f1();
}
function f3 (){
    f2()
}
f3(); //in the call stack, f1 is executed once then f2 then f3. but f3 gets in first then f2 then f3

//Recursion
//A function that refers or calls itself

// function foo(){
//     console.log('foo')
//     foo()
// }
// foo()


const fooi = function buz(){
    //foi();
    buz()
}

//Ensure you have a base condition when using recursion
function rec (){
    if(baseCondition){
        //do something
    }
    rec();
}

function fetchWater(count){
    if(count === 0){
        console.log("No more water left");
        return;
    }
    console.log("Fetching water")
    fetchWater(count -1);
}
fetchWater(5)
































