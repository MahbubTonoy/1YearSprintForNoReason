/**
* Project Name: Route Handler
* Author: Mahbub Tonoy
* Description: Route Handler for this project
* Date: 17-01-2021
*/

// dependencies
const {test} = require("./routes/test");
const {notFound} = require("./routes/404");



// module scaffolding
let routes = {
 test,
 notFound
}

module.exports = routes;