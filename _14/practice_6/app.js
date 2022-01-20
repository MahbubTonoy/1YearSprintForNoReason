let fs = require("fs");

let file = "test.txt";
fs.open(file, "r+", (err, fd)=>{
 console.log(fd);
 fs.close(fd);
})