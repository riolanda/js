var fs = require('fs')

var readdata  = fs.readFileSync("file1.json")
var parseddata = JSON.parse(readdata)

console.log(parseddata)
console.log(parseddata[0].score)

var highestscore = 0

for (i = 0; i<=3; i++){
    if (highestscore < parseddata[i].score){
        highestscore = parseddata[i].score
        var winnername = parseddata[i].name

    }
    

}

var query = require('cli-interact')

console.log(highestscore,"the winners name is " + winnername)

function addnumbers(number1, number2){

    return number1 + number2
}

var firstnumber = query.getInteger("Give me a random number")
var secondnumber = query.getInteger("Give me a random number")
console.log(addnumbers(firstnumber, secondnumber))

function createstring(string1, string2, string3){
    var name = "rio"
    var number = "1"
    console.log(string1 + string2 + string3)
}

createstring("1","2","3")
