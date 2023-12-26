//Ternary operators => shorthand for if-else statement
//syntax

//condition ? ifTrue : ifFalse; // ':' is like else

let soup = "Chicken soup";

let response = soup ? "Yes we have soup" : "Sorry, no soup today";

console.log(response);//Yes we have soup

let isCustonerBanned = false;
let soupAccess = isCustonerBanned
    ? "Sorry, no soup for you"
    : soup
    ? `Yes, we have ${soup} today`
    : "Sorry! No soup today.";

console.log(soupAccess);//Yes, we have Chicken soup today

let finalScore = 79;
let myGrade = finalScore > 89 ? "A"
: finalScore > 79 ? "B"
: finalScore > 69 ? "C"
: finalScore > 59 ? "D"
: finalScore > 49 ? "E"
: "F";

console.log(`Your mid exam grade is ${myGrade}`);

//Rock Paper scissors Game
let playerOne = "paper";
let computer = "scissors";

let result = 
    playerOne === computer
    ? "Tie game"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    :playerOne === "paper" && computer === "scissors"
    ? "Computer wins"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "PlayerOne wins!"

console.log(result);//Computer wins
    






