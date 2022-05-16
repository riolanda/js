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
    constructor(name, height, colour) {
      this.name = name;
      this.height = height;
      this.colour = colour;
    }
  }

class tier_two_monster extends monster {
    constructor(power,name, height, colour ) {
      super(name, height, colour);
      this.power = power;
    }
}

var myMonster01 = new monster("Amar","5'10", "red", "fire");
document.getElementById("demo").innerHTML =
myMonster01.name  + " " +  myMonster01.height  + " " + myMonster01.colour  + " " + myMonster01.power

var myMonster02 = new monster("Rio","7'2", "blue", "ice");
document.getElementById("demo2").innerHTML =
myMonster02.name  + " " +  myMonster02.height  + " " + myMonster02.colour  + " " + myMonster02.power

var myMonster03 = new tier_two_monster("fire","Amar","5'10", "red");
document.getElementById("demo").innerHTML =
myMonster03.name  + " " +  myMonster03.height  + " " + myMonster03.colour  + " " + myMonster03.power
