//how to print to stdout
console.log("Hello world");

// variable delcarations
/// var -> global scope
/// let -> block scope

var myname = "rio";
let lastname = "Landa";

// this is an exmaple of a for lop that loops 10 times and print my name
for (let i = 0; i <= 9; i = i + 1){
  console.log(myname);
}

//var = keyword for global variables
//let = keyword for local variables

var number = 5;

while (number < 15){
  console.log(number);
  number = number + 1;
}

//break point?
console.log(number);

if (number == 15) {
  console.log("number is 15");


} else if (number == 16){
  console.log("number is 16");

} else{
  console.log("number is bigger than 16");
} 

function saygoodbye(){
  console.log("this is my first javascript code");
}

saygoodbye();
//function is the keyword to declare a function
// to use a function type name of the fucntion and use round brackets
//if function doesnt have return you cant print it or put it in a variable

var list = ["london", "washington"];
console.log(list[0]);
