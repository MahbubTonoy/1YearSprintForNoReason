/**
 * Project Name: handler for userActions
 * Author: Mahbub Tonoy
 * Description: ASAPN
 * Date: 21 Jan 2022
 */

//dependencies
const dataCRUD = require("../../../lib/dataCRUD");
const { hash } = require("../../util");

// module scaffoldings
let user = {};

user.user = (reqData, callback) => {
  const acceptedRequest = ["post", "put", "get", "delete"];
  let method = reqData.method;
  if (acceptedRequest.indexOf(method) !== -1) {
    user._users[method](reqData, callback);
  } else {
    callback(405, { message: "Go Away Idiot! you are not allowed!" });
  }
};

user._users = {};

user._users.get = (requestProperties, callback) => {
  let firstName =
    typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName.trim()
      : false;
  let lastName =
    typeof requestProperties.body.lastName === "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName.trim()
      : false;
  let phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone.trim()
      : false;
  let password =
    typeof requestProperties.body.password === "string"
      ? requestProperties.body.password.trim()
      : false;
  let tosAgreement =
    typeof requestProperties.body.tosAgreement === "boolean"
      ? requestProperties.body.tosAgreement
      : false;
  if (firstName, lastName, phone, tosAgreement, password) {
    dataCRUD.read("users", phone, (err) => {
      if (err) {
        let userObj = {
          firstName,
          lastName,
          phone,
          tosAgreement,
          password: hash(password),
        };
        dataCRUD.create("users", phone, userObj, (err) => {
          if (!err) {
            callback(200, {
              message: "kam hoia gese",
            });
          } else {
            callback(500, {
              message: "internal server error",
            });
          }
        });
      } else {
        callback(403, { message: "User Already Exist" });
      }
    });
  } else {
    callback(400, { message: "you have a problem in your request" });
    console.log(firstName, lastName, phone, password, tosAgreement);
  }
};
user._users.post = (requestProperties, callback) => {};
user._users.put = (requestProperties, callback) => {};
user._users.delete = (requestProperties, callback) => {};

module.exports = user;
