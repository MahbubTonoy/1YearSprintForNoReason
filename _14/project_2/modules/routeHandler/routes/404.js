/**
 * Project Name: 404 route
 * Author: Mahbub Tonoy
 * Description: A route handler for 404
 * Date: 17-01-2022
 */

// module scaffoldings
let _404 = {};

_404.notFound = (req, res, callback) => {
  callback(404, {
   message: "Route Not Found"
  });
};

module.exports = _404;
