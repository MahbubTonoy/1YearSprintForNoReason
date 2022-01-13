const fs = require('fs');

let readStream = fs.createReadStream("video.mp4");
let writeStream = fs.createWriteStream("test.mp4");
readStream.on("data", (chunk)=>{
 writeStream.write(chunk);
})