/**
 * Project Name: Uptime checking tool
 * Author: Mahbub Tonoy
 * Description: as like as the project name
 * Date: 15 Jan 2022
 */

// dependencies
const http = require("http");

const reqResHandler = require("./modules/reqResHandler");

//modules scaffolding
const app = {};

//app configuration
app.config = {
  port: 3000,
};

//server method
app.createServer = () => {
  //starting the server
  let server = http.createServer(reqResHandler.handler);
  server.listen(app.config.port, () => {
    console.log(`Server is running on port ${app.config.port}`);
  });
};

//invoke the application to start
app.createServer();
