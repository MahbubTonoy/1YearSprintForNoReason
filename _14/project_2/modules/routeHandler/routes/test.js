/**
 * Project Name: Testing route
 * Author: Mahbub Tonoy
 * Description: A route handler for testing purpose
 * Date: 17-01-2022
 */

// module scaffoldings
let test = {};

test.test = (req, res, callback) => {
  callback(200, {
   message: "Connection Estableshed Successfully!"
  });
};

module.exports = test;
