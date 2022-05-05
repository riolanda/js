// make a number guessing game 
// have the calculator choose a random number
// if cant figure out how to make random number give a random number yourself
// user needs to guess the random number 
// tell user if the number is higher or lower than the random number
// keep asking user to guess until gets rigt answer
// hint while loo


var prompt = require("prompt-sync")()

var randint = 50
// var randint = Math.random();

// var guess = prompt("guess a number bewtween 0 and 20")
var guess = 10
function numguess(){


    while (guess != randint ){
        console.log("i am in while loop" + "guess: " + guess + 'randit: ' + randint)

        if( guess === randint){
        console.log("well done you foiund the number"+ randint + guess)
        return 
        }
        
        
        if (guess > randint){
            console.log("Guess is higher than randint")
        }
        else if (guess < randint) {
            console.log("Guess is smaller than randint")
        }
        guess = prompt("guess a number bewtween 0 and 20")
    }
}
numguess()

    

