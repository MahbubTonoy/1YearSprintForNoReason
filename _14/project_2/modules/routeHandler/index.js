/**
* Project Name: Route Handler
* Author: Mahbub Tonoy
* Description: Route Handler for this project
* Date: 17-01-2021
*/

// dependencies
const {test} = require("./routes/test");
const {notFound} = require("./routes/404");
const {user} = require("./routes/userHandler.js");
const {token} = require("./routes/tokenHandler.js");



// module scaffolding
let routes = {
 test,
 notFound,
 user,
 token
}

module.exports = routes;