//make a list of random words
// choose a random word from the list
//tell player how letters word has
//ask user to guess leter
//if letter is correct display on screen in the right order
// continue until user guesses the word

var arr = ["rio", "likes", "chicken", "chorizo", " jambalaya"];
var guess_ammount = 4;
var do_nothing = void(0) //this does nothing


function randomWord(arr) {
  randnum = Math.floor(Math.random() * arr.length);
  return arr[randum];
}

function rules() {
  console.log(
    "Welcome to the game of hangman,please type one letter at a time," +
      " before you are hanged! -:)"
  );
}

function main() {
  rules();
  let randomword = randomWord(arr);

}

function checkword(randomword){
    while (guess_ammount < 4){
    for (let i = 0; i < randomword.length; i++) {
        if (randomword[i] === guess_letter) {
        return
        }
        if (!(randomword[i] === guess_letter)){
            do_nothing
        }
        if (!(randomword[i] === guess_letter))&& (randomword.length === guess_letter){
        guesses_amount ++
        }
        
        } else if (dArray[i] === undefined) {
        dArray[i] = '_';
        }
    }

    }


