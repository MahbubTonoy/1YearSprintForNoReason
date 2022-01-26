/**
* Project Name: URL Uptime checker
* Author: Mahbub Tonoy
* Description: As same as Project Name
* Date: 17/01/2022
*/

// dependencies
const server = require("./modules/server");
const workers = require("./modules/workers");

//modules scaffoldings
const app = {};

app.init = () => {
 //start the server
 server.start();

 //start the workers
 workers.start();
}

//start the app
app.init();