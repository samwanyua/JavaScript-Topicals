// Simply learn - Functions
/**
 * A function is a group of reusable code which can be called anywhere in 
 * a program
 * 
 * This eliminate the need of writing the same code again
 * 
 * It helps programmers write modular codes
 * 
 * syntax:
 * 
 * function function_name(parameter_list){
 *      function_body
 * }
 * 
 */

//function definition
function myFunction(value){
    return value + 100;
}
myFunction(5) //105

//Function expression
/**
 * let x = function(a,b) { return a * b}; //function expression syntax
 */

// let x = function(){
//     alert("Hello")
// }
// document.getElementById("demo").innerHTML = x()

//function constructor
//Js functions are defined by the keyword 'function'
// Functions can also be defined using the built-in Javascript function called Function()


/**
 * syntax
 * 
 * const myFunction = new Function("a","b","return a + b")
 * let x = myFunction(4,3);
 */


const myFunction = function(a,b) {
    return a + b}
 let x = myFunction(4,3);
console.log(x); //7



const myfunct = function(a, b){
    return a + b
} 
const y = myfunct(45,534)
console.log(y) //579

//Self-invoking functions
/**
 * It is invoked automatically without being called
 * 
 * Function expressions will execute automatically if the expression is followed by ()
 * 
 */

(function(){
    functionBody
})(); //This is a self-invoked function


(function (){
    alert("Hello")
})()

//functions as values

/**
 * In Javascript a function is a value so we can deal with it as a value
 * We first define the function and then assign it to a variable unlike in expressions
 */

function functionName(paremeterList){
    function_body
}

//Code example
let t = functionName;

function product (a,b){
    return a*b;
}

let ans = product(23,12)
console.log(ans) // 276

//functions as objets
/**
 * A function object includes a string which holds the actual code
 * ie the function body of a function
 */

//general syntax

let body = "function body"

let fnName = new Function("ParList", body);
console.log(fnName(argValue));


//example code
let area = "return Math.PI * rad * rad";

let circle = new Function("rad", area)
console.log(circle(5)) //78.53981633974483

//Arrow functions
/**
 * These are functions written more concisely
 * They are ill suited as methods and they cannot be used as constructors
 */

//general syntax

const fuction = (arg1,arg2, ...argN) => {return expression}

const myF = (a,b,c) => {return a*b*c}
let cube = myF(34,23,254);
console.log(cube); //198628

//Generator function
/**
 * Regular function returns only one, single value (or nothing)
 * Generators can return or yield multiple values, one after another on demand
 * 
 * to create a generator we use syntax 'function*'
 * 
 * 
 */

//general syntax
function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}

/**
 * next() method returns two properties:
 *      value: the value yielded
 *      done: True if the function code is finished, false if otherwise
 */

function* genfunct(){
    yield 1;
    yield 2;
    return 3;
}
let gen = genfunct();
let one = gen.next();
let two = gen.next();
let three = gen.next();



console.log(JSON.stringify(one))
console.log(JSON.stringify(two))
console.log(JSON.stringify(three))


//predefined function in JavaScript
/**
 * eval(): evaluates a string and returns a value
 * 
 * parseInt(): parses a string argument and returns an integer of the specified radix or base
 * 
 * parseFloat(): parses a string argument and returns a floating point number
 * 
 * escape(): Returns a hexadecimal encoding of an argument
 * 
 * unescape(): Returns the ASCII string for the specified value
 * 
 * 
 */

//eval syntax
eval(expression)

let r = 4;
let d = 5;
let z = 6;

console.log(eval(r+d)) //9
console.log(eval(r)) //4
console.log(eval(d)) //5
console.log(eval(z)) //6

//parseInt()
let zw = "wanyua";
console.log(parseInt(zw)) //NaN

//parseFloat()
let we = 65;
console.log(parseFloat(we)) //65

//escape()
let zwe = "wanyua";
console.log(escape(zwe)) //wanyua

let zwi = "wanyua";
console.log(unescape(zwi)) //wanyua