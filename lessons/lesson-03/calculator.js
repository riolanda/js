

function addiotion(number1, number2){
    return number1 + number2
}

function multiplication(number1, number2){
    return number1* number2
}

function subtraction(number1, number2){
    return number1 - number2
}

function divison(number1,number2){
    return number1 / number2
}

var prompt = require('prompt-sync')()

var firstnumber = prompt("Enter a random number " )
var secondnumber = prompt("Enter a second number ")
var operator = prompt("What operation do you want to do? ")

if (operator == "+" || operator == "addition"){
    console.log(addiotion(parseInt(firstnumber),parseInt(secondnumber)))
}
else if (operator == "-" || operator == "subtraction"){
    console.log(subtraction(parseInt(firstnumber), parseInt(secondnumber)))
}
else if (operator == "*" || operator == "multiplication"){
    console.log(multiplication(parseInt(firstnumber), parseInt(secondnumber)))
}
else if (operator == "/" || operator == "division"){
    console.log(divison(parseInt(firstnumber), parseInt(secondnumber)))
}

