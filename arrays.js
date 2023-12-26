//Arrays

let numbers = [1,3,4,5];

numbers[3]
numbers[4] = 8 //to add another array element


numbers.push(34,23,35,21,232,3423) //add items at the end
numbers.unshift(0) //to insert value at the beginning

let lastNumber = numbers.pop() //opposite of push => to remove the last item


let firstNumber = numbers.shift() //to remove the first element in the array


numbers.splice(4,2) //4 is index, 2 is no. of items we want to remove


//console.log(numbers[4])
console.log(numbers)
//console.log(lastNumber)
//console.log(firstNumber)

//Using 'for' and 'while loops' 

let list = [
    {text: 'milk', cost: 4, need: false},
    {text:'eggs', cost: 10, need: true},
    {text: 'butter', cost: 5, need: false},
    {text: 'bread', cost: 3, need: true},
    {text: 'bacon', cost: 12, need: true}

];
//For loop
// let html = '';
// let total = 0; 
// for (let index = 0; index < list.length; index++){
//    // html += `<li>${list[index].text}</li>`;
//    let item = list[index]; 
//    if (item.need){
//         html += `<li>${item.text}</li>`;
//         total += item.cost;
//     }
// }

//while loop
//let index = 0;
// let item = list[index]; 

// while (item){
//     if (item.need){
//         html += `<li>${item.text}</li>`;
//         total += item.cost;
//     }
//     item = list[index++];
// }


// document.getElementById("list").innerHTML = html
// document.getElementById("cost").innerHTML = `$${total}`


//Simplelearn Arrays Tutorials
/**
 * Array is an object that let you store multiple values in a single variable
 * Length of array and the types of its elements are not fixed
 * Array can only use integers as element indexes
 *  
 */

let cars = ["BMW", "Volvo", "Honda"]
document.getElementById("demo").innerHTML = cars;

let BMW = cars[0]
document.getElementById("demo").innerHTML = BMW;

//checking the length of the array
let len = cars.length;
document.getElementById("demo").innerHTML = len;

// Accessing the last array element
let lastCar = cars[cars.length -1]
document.getElementById("demo").innerHTML = lastCar;

//loop over an array item

cars.forEach((item, index, array) => {console.log(item, index)});

//Array method
// toString(): convert an array into a string
document.getElementById("demo").innerHTML = cars.toString();

//pop(): Removes the last element of an array
let last1 = cars.pop()
document.getElementById("demo").innerHTML = last1;

//to display the last element => Volvo
let last2 = cars[cars.length -1] //array now has two elements => BMW and Volvo
console.log(last2)

// push(): add new elements at the end of the array
cars.push("Audi")
console.log(cars) //['BMW', 'Volvo', 'Audi']

//shift(): Removes the first element of an array
cars.shift()
console.log(cars) // ['Volvo', 'Audi']

//unshift(): Add an element at the beginning of an array
cars.unshift("Benz")
console.log(cars) // ['Benz', 'Volvo', 'Audi']

//concat(): Create a new array by merging two existing arrays

let bikes = ["Yamaha", "Suzuki", "Kawasaki"]
let vehicles = cars.concat(bikes)
console.log(vehicles) //['Benz', 'Volvo', 'Audi', 'Yamaha', 'Suzuki', 'Kawasaki']

//sort(): Sort an array in ascending order
vehicles.sort()
console.log(vehicles) // ['Audi', 'Benz', 'Kawasaki', 'Suzuki', 'Volvo', 'Yamaha']

// reverse(): Reverse the elements of an array
vehicles.reverse()
console.log(vehicles) //['Yamaha', 'Volvo', 'Suzuki', 'Kawasaki', 'Benz', 'Audi']

//Maps, Reduce and Filter

// Array.map()
//The map() method creates a new array and performs a function on each array element

let num1 = [2,3,4,5,6,7]

let num2 = num1.map(multiply); //multiply is a function

function multiply(value){ //Here we define multiply function
    return value * 2
}

console.log(num2); // [4, 6, 8, 10, 12, 14]


//Array.filter()

//The filter() takes each element in an array and it applies a conditional statement against it

let num3 = num1.filter(comp) //comp is a function

function comp(value){ // Here we difine comp function
    return value > 4;
}

console.log(num3); //[5, 6, 7]

//Array.reduce()
//The reduce() method reduces an array of values down to just one value using a function

let num4 = num1.reduce(sum) //sum is a function

function sum(total, value){ //Here we are difining a function
    return total + value;
}

console.log(num4) // 27 (2 + 3 + 4 + 5 +6 +7)