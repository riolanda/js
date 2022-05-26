var numbers = ['1','2','3','4','5','6']
//             0   1   2   3   4   5 
for (let i=2; i<=5; i++){
console.log(numbers[i])
}

for (let i=3; i<=10; i++){
   console.log(i*2)
   
}

var prompt = require('prompt-sync')()
var asknumber = parseInt(prompt("enter a number"))
if (asknumber < 10){
    console.log(asknumber*5)
}
else if (asknumber < 20 && asknumber > 10){
    console.log(asknumber)
}
else {
    console.log(asknumber + 15)
}