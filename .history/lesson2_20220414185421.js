var numbers = [1, 22, 3, 14, 5, 6,100]

var max = 100;

for (var number = 0; number <= 6; number++)
{
   if (max > numbers[number] ){
       max = numbers[number]

   } 
}
console.log(max)



for (var i = 0; i<= 6; i=i+2){
    console.log(numbers[i])
}

var fs = require('fs')
var data = fs.readFileSync("file1.json")
console.log(data)

var translated_data = JSON.parse(data)
console.log(translated_data)

console.log(translated_data.age)