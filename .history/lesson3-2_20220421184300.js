var fs = require('fs')

var readdata  = fs.readFileSync("file1.json")
var parseddata = JSON.parse(readdata)

console.log(parseddata)
console.log(parseddata[0].name)

