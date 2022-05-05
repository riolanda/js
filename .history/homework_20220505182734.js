// make a number guessing game 
// have the calculator choose a random number
// if cant figure out how to make random number give a random number yourself
// user needs to guess the random number 
// tell user if the number is higher or lower than the random number
// keep asking user to guess until gets rigt answer
// hint while loo


var prompt = require("prompt-sync")()
var randint = 0
var count = 0
var gamemode = prompt("What gamemode do you wantt to use, easy - hard ")
if (gamemode = "easy"){
    randint = Math.floor(Math.random()*20)+1;

}
else if (gamemode = "hard"){
    randint = Math.floor(Math.random()*50)+1;

}
// var randint = 50

// var guess =prompt("guess a number bewtween 0 and 20")
var guess = 0
function numguess(){


    while (guess != randint ){
        console.log("i am in while loop" + "guess: " + guess + 'randit: ' + randint)

        if( guess === randint){
        console.log("well done you foiund the number"+ randint + guess)
        return 
        }
        
        
        else if (guess > randint){
            console.log("Guess is higher than randint")
        }
        else if (guess < randint) {
            console.log("Guess is smaller than randint")
        }

        guess =  parseInt( prompt("guess a number bewtween 0 and 20"))

    count++
    }
}
numguess()

    

