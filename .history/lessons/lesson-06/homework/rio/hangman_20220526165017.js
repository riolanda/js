var words = ["apple", "pear"]
//picks the first word  in words
var word = words[1]
var guesses = 0
const prompt = require('prompt-sync')();
//TODO:rl test
var  guess_letter = prompt('What letter is your guess? ');

//loop while the guesses are less than 4
while (guesses < 4){
  let wordlength = words[1].length
  for (let i=0;   wordlength; i++)
    if (guess_letter == wordlength ){
        console.log("you found a letter")
        guesses++ 
    }
 
}