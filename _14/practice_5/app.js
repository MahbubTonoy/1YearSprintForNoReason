const http = require("http");
const fs = require('fs');
const url = require("url");

http.createServer((req, res)=>{
 res.write("test");
}).listen(8080);