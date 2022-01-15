const fs = require('fs');

let readStream = fs.createReadStream("app.js", "utf-8");
let writeStream = fs.createWriteStream("test.js");

readStream.pipe(writeStream);