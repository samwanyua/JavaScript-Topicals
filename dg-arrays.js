//Dave Gray - Arrays

/**
 *  it's like a shelf to store things on
 */

const emptyArray = []; //This is an empty array

const myArray = [];

//To add elements to an array
myArray[0] = "Dace";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array
console.log(myArray);//['Dace', 1001, false]

//length property
console.log(myArray.length); //3

//last element in an array;
console.log(myArray[myArray.length-1]); //false

//any item in the array
console.log(myArray[1]);//1001

//To add elements to an array to the last
myArray.push("school");
console.log(myArray);//['Dace', 1001, false, 'school']

//to remove the last element
myArray.pop();
console.log(myArray);//['Dace', 1001, false]

//to add an element to the start of the array
myArray.unshift("Wikipedia")
console.log(myArray);//['Wikipedia', 'Dace', 1001, false]

//to remove the first item of the array
myArray.shift()
console.log(myArray);//['Dace', 1001, false]

//to remove element in the middle of the array
delete myArray[1]
console.log(myArray); //['Dace', empty, false] //leaves undefined data

//splice to delete
myArray.splice(1,1); // the first '1' is index, the second one is how many elements do you want to delete
console.log(myArray); //['Dace', false]

//using splice to replace
myArray.splice(1,1,345); //the '345' is the replacer value
console.log(myArray);//['Dace', 345]

//splice without delete
myArray.splice(1,0,"Volkswagen");
console.log(myArray); //['Dace', 'Volkswagen', 345]

//slice()
const inArray = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArray = inArray.slice(2,5); //'5' is where to stop - not inclusive
console.log(newArray)//  ['C', 'D', 'E']

//reverse()
inArray.reverse()
console.log(inArray);// ['F', 'E', 'D', 'C', 'B', 'A']

//join()
const newString = inArray.join();
console.log(newString); //F,E,D,C,B,A

//split()
const x = newString.split(",")
console.log(x);//['F', 'E', 'D', 'C', 'B', 'A']


const myArrayA = ['A', 'B', 'C']
const myArrayB = ['D', 'E', 'F'];

const y = myArrayA.concat(myArrayB);
console.log(y);//['A', 'B', 'C', 'D', 'E', 'F']

//spread operator
const z = [...myArrayA, ...myArrayB]
console.log(z); // ['A', 'B', 'C', 'D', 'E', 'F']

//Nested arrays

const equipShelfA = ["baseball","football","volleyball"];
const equipShelfB = ["basketball","golf-balls","tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts","jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants","hoodies"];

console.log(equipShelfA[2]);//volleyball

const equipDept = [equipShelfA,equipShelfB]; //This is a 2-Dimension array
const clothesDept = [clothesShelfA,clothesShelfB];

console.log(equipDept[0][2])//vollyball //2d arrays


const sportsStore = [equipDept,clothesDept] //3d arrays

console.log(sportsStore[1][1][2])//hoodies







































