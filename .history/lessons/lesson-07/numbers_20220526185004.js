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

function check(a){
    if (a < 10){
        console.log(a*5)
    }
    else if (a < 20 && a > 10){
        console.log(a)
    }
    else {
        console.log(a + 15)
    }
}
check(asknumber)