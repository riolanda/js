//make a list of random words
// choose a random word from the list 
//tell player how letters word has
//ask user to guess leter
//if letter is correct display on screen in the right order
// continue until user guesses the word

//create a mnster class
//name for monster
//damage monster does
//how much hp monster has 
//create 1 monster
// let user create a monster
//display who won in a battle

class monster {
    constructor(name, height, year) {
      this.name = name;
      this.height = height;
      this.weight = year;
    }
  }

  const myMonster = new monster("Amar","5'9", "84KG");
  document.getElementById("demo").innerHTML =
  myMonster.height + " " + myMonster.weight;

