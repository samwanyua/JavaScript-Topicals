// let student={
//     officialName: "Mark John",
//     age: 21,
//     studies: "Software Engineering"
// };

//************************************************************* */

/**
 * key values are in {}
 */

const mybj ={
    name: "Dave",
    own: "Mercedes Benz"
}
console.log(mybj) //{name: 'Dave', own: 'Mercedes Benz'}
console.log(mybj.own) //Mercedes Benz

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced-tea"

    },
    action: function(){//object methods
    //return "Hello world";
    return `Time for ${this.beverage.morning}` //keyword 'this' refers to the object
}


}
console.log(anotherObj.action()) //Hello world
console.log(anotherObj.action()) //Time for Coffee



console.log(anotherObj.alive) //true
console.log(anotherObj["alive"]) //true

console.log(anotherObj.answer) //42
console.log(anotherObj.hobbies) //  ['Eat', 'Sleep', 'Code']

console.log(anotherObj["beverage"])//{morning: 'Coffee', afternoon: 'Iced-tea'}


const vehicle ={
    wheels: 4,
    engine: function(){
        return "Vroooom!!!!!"
    }
}

// const truck = Object.create(vehicle);
// truck.doors =2
// console.log(truck) //{doors: 2}
// console.log(truck.wheels) //4 => Inheritance
// console.log(truck.engine())//Vroooom!!!!! => inheritance

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "whooosh!"
}

// console.log(car.engine()) //whooosh!
// console.log(car.wheels) //4
// console.log(car) //{doors: 4, engine: ƒ}

const tesla = Object.create(car);
//console.log(tesla)//{}
console.log(tesla.wheels)//4
console.log(tesla.engine())//whooosh!
tesla.engine = function(){
    return "Shhhhhhhhhhhhhhh!"
}

console.log(tesla.engine())//Shhhhhhhhhhhhhhh!


const band ={
    vocals: "Conery",
    guitar: "Alexander Ivy",
    bass: "Nick Kerrah",
    drums: "Dante Chops"
};


// console.log(Object.keys(band)) //['vocals', 'guitar', 'bass', 'drums']
// console.log(Object.values(band))//['Conery', 'Alexander Ivy', 'Nick Kerrah', 'Dante Chops']

// for(let job in band){
//     console.log(band[job]) //Conery  Alexander Ivy  Nick Kerrah  Dante Chops
    
// }
//using    `...` Backticks => template literals >> you insert values in a string
// for(let job in band){
//     console.log(`On ${job}, it's ${band[job]}`) /**On vocals, it's Conery
//     VM10101:18 On guitar, it's Alexander Ivy
//     VM10101:18 On bass, it's Nick Kerrah
//     VM10101:18 On drums, it's Dante Chops */
    
// }
//To add properties in an object
// band.keyboard = "Steve Kimwele"
// console.log(Object.keys(band)) //['vocals', 'guitar', 'bass', 'drums', 'keyboard']

//to add a method
// band.start = function(){
//     return "Make some noise for the baaaaaaaaaaaaaand!!!!!!"
// }

// console.log(Object.keys(band))// ['vocals', 'guitar', 'bass', 'drums', 'keyboard', 'start']

//to delete an existing property or method
// delete band.vocals;
// console.log(band.hasOwnProperty("vocals")); //false
// console.log(Object.keys(band))// ['guitar', 'bass', 'drums', 'keyboard', 'start']

//destructuring objects
// const {guitar: myVariable} = band;
// console.log(myVariable)//Alexander Ivy

// const {drums, guitar, bass} = band; //creating 3 new variables named the exact way as in the object
// console.log(guitar); //Alexander Ivy
// console.log(drums)// Dante Chops
// console.log(bass); //Nick Kerrah


function sings({bass}){
    return  `${bass} slaps!`
}

console.log(sings(band))//Nick Kerrah slaps!
