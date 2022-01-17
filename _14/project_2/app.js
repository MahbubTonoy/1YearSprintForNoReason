/**
* Project Name: URL Uptime checker
* Author: Mahbub Tonoy
* Description: As same as Project Name
* Date: 17/01/2022
*/

// dependencies
const http = require("http");
const fs = require("fs");

const {handle} = require("./modules/reqResHandler");

//module scaffoldings
let app = {};

//app configurations
app.config = {
 port: 3000
}

//start the server
let server = http.createServer(handle);
server.listen(app.config.port, ()=>{
 console.log(`Server has been started in port: ${app.config.port}`)
});