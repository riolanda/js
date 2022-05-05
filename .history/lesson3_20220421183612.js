var fs = require('fs')
var data = {
    name: "Bob",
    score: 10
}
var readdata  = fs.readFileSync("file1.json")
var parseddata = JSON.parse(readdata)
parseddata.push(data)
var translated_data = JSON.stringify(parseddata, null, 1)

fs.writeFileSync("file1.json", translated_data)

