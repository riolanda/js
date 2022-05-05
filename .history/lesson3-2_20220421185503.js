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
console.log(highestscore,"the winners name is " + winnername)