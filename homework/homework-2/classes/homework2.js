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

  const myMonster01 = new monster("Amar","5'10", "84KG");
  document.getElementById("demo").innerHTML =
  myMonster01.name  + " " +  myMonster01.height  + " " + myMonster01.weight

  const myMonster02 = new monster("Rio","6'4", "94KG");
  document.getElementById("demo2").innerHTML =
 myMonster02.name  + " " +  myMonster02.height  + " " + myMonster02.weight

