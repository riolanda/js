//make a list of random words
// choose a random word from the list
//tell player how letters word has
//ask user to guess leter
//if letter is correct display on screen in the right order
// continue until user guesses the word

function randomWord(
  arr = ["rio", "likes", "chicken", "chorizo", " jambalaya"]
) {
  randnum = Math.floor(Math.random() * arr.length);
  return arr[randum];
}

console.log(randomWord());
