/**
* Project Name: URL Uptime checker
* Author: Mahbub Tonoy
* Description: As same as Project Name
* Date: 17/01/2022
*/

// dependencies
const http = require("http");

const {handle} = require("./modules/reqResHandler");
const environment = require("./modules/environment");
const data = require("./lib/dataCRUD");


//start the server
let server = http.createServer(handle);
server.listen(environment.port, ()=>{
 console.log(`Server has been started in port: ${environment.port}`);
});