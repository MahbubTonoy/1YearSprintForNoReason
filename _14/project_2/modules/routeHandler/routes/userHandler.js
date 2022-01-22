/**
* Project Name: handler for userActions
* Author: Mahbub Tonoy
* Description: ASAPN
* Date: 21 Jan 2022
*/

// module scaffoldings
let user = {};

user.user = (req, res, callback) => {
  // console.log(req.method);
  callback(200, {
   message: "User Route"
  });
};

module.exports = user;
