var color = "red"
var mylocation = "sydney"

if (color == "blue" && mylocation == "sydney"){
    console.log("all conditions are correct")

}
else{
    console.log("one of the conditions is false")
}

var prompt = require("prompt-sync")()
var firstnumber = parseInt(prompt("Enter a random number "))

if (firstnumber > 10 && firstnumber < 20){
    
    console.log("the number is between 10  and 20 ")
}

if (firstnumber < 10 && firstnumber < 20){
console.log("The number is not between 10 and 20")
}