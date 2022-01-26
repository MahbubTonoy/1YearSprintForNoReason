/**
 * Project Name: URL Uptime checker server
 * Author: Mahbub Tonoy
 * Description: As same as Project Name
 * Date: 17/01/2022
 */

// dependencies
const http = require("http");

const { handle } = require("./reqResHandler");
const environment = require("./environment");

//project server scaffolding
const server = {};

//start the server
server.start = () => {
  let serv = http.createServer(handle);
  serv.listen(environment.port, () => {
    console.log(`Server has been started in port: ${environment.port}`);
  });
};

module.exports = server;