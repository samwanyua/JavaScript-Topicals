//Dave Gray on functions
/**
 *  Methods are built in functions
 * examples: 
    * student.lowercase();
    * Math.random()
  Functions provide reusable code
 */

//Function declarations

function sum(num1, num2){
    if(num2 === undefined){
        return num1 + num1;
    }
    return num1 + num2;

}
sum(34) //68

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("wanyuasamuel@student.moringaschool.com"));//wanyuasamuel


//Anonymous function
const gtUserNameFromEmail = function(email){
    return email.slice(0, email.indexOf("@"));
}

console.log(gtUserNameFromEmail("wanyuasamuel@student.moringaschool.com"));//wanyuasamuel

//Arrow function

const gtUsrNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(gtUsrNameFromEmail("wanyuasam@student.moringaschool.com"));//wayuasam


const toPropercase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

toPropercase("sSaDeV");//'Ssadev'



















