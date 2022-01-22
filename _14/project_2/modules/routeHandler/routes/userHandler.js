/**
* Project Name: handler for userActions
* Author: Mahbub Tonoy
* Description: ASAPN
* Date: 21 Jan 2022
*/

// module scaffoldings
let user = {};

user.user = (reqData, callback) => {
  const acceptedRequest = ['post','put','get','delete'];
  let method = reqData.method;
  if(acceptedRequest.indexOf(method) !== -1) {
    user._users[method](reqData, callback);
  } else {
    callback(405, {message:"Go Away Idiot! you are not allowed!"});
  }
};

user._users = {};

user._users.get = (requestProperties, callback) => {
  callback(200, {message: "muri khao"});
  console.log(requestProperties.body);
}
user._users.post = (requestProperties, callback) => {

}
user._users.put = (requestProperties, callback) => {

}
user._users.delete = (requestProperties, callback) => {

}

module.exports = user;
