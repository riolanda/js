var fs = require('fs')
var data = {
    name: "Rio",
    score: 5
}

var translated_data = JSON.stringify(data, null, 1)

fs.writeFileSync("file1.json", translated_data)