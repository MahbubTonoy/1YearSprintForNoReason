/**
 * Project Name: handler for userActions
 * Author: Mahbub Tonoy
 * Description: ASAPN
 * Date: 21 Jan 2022
 */

//dependencies
const dataCRUD = require("../../../lib/dataCRUD");
const { hash } = require("../../util");
const { jsonCheck } = require("../../util");
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

user._users.post = (requestProperties, callback) => {
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

  if ((firstName, lastName, phone, tosAgreement, password)) {
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
              message: "User has been created successfully",
            });
          } else {
            callback(500, {
              error: "internal server error",
            });
          }
        });
      } else {
        callback(403, { error: "User Already Exist" });
      }
    });
  } else {
    callback(400, { error: "you have a problem in your request" });
  }
};
user._users.get = (requestProperties, callback) => {
  let phone =
    typeof requestProperties.queries.phone === "string" &&
    requestProperties.queries.phone.length === 11
      ? requestProperties.queries.phone
      : false;
  if (phone) {
    dataCRUD.read("users", phone, (err, data) => {
      if (!err && data) {
        data = jsonCheck(data);
        delete data.password;
        callback(200, data);
      } else {
        callback(404, { error: "Requested User Not Found" });
      }
    });
  } else {
    callback(404, { error: "Requested User Not Found" });
  }
};
user._users.put = (requestProperties, callback) => {
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
  if (phone) {
    if (firstName || lastName || password) {
      dataCRUD.read("users", phone, (err, data) => {
        if (!err && data) {
          let userData = JSON.parse(data);
          if (firstName) {
            userData.firstName = firstName;
          }
          if (lastName) {
            userData.lastName = lastName;
          }
          if (password) {
            userData.password = hash(password);
          }
          dataCRUD.update("users", phone, userData, (err) => {
            if (!err) {
              callback(200, { message: "Successfully Updated New Data" });
            } else {
              callback(500, {
                error: "something went wrong, please try again",
              });
            }
          });
        } else {
          callback(400, { error: "your requested phone number not found" });
        }
      });
    } else {
      callback(400, { error: "You have problem on your request" });
    }
  } else {
    callback(400, { error: "invalid phone number, try again" });
  }
};
user._users.delete = (requestProperties, callback) => {
  let phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone.trim()
      : false;
  let password =
    typeof requestProperties.body.password === "string"
      ? requestProperties.body.password.trim()
      : false;
  dataCRUD.read('users', phone, (err, data) => {
    if(!err && data) {
      let userData = jsonCheck(data);
      if(hash(password) === userData.password) {
        dataCRUD.delete('users', phone, (err)=>{
          if(!err) {
            callback(200, {message: "user deleted successfully"});
          } else {
            callback(500, {error: "something went wrong, please try again"});
          }
        })
      } else {
        callback(400, {error: "Password Doesn't matched"});
      }
    } else {
      callback(404, {error: "your requested user not found"});
    }
  })
};

module.exports = user;
