/**
 * Project Name: tokenHandler
 * Author: Mahbub Tonoy
 * Description: A handler file for token authentication
 * Date: 24 jan 2022
 */

//dependencies
const dataCRUD = require("../../../lib/dataCRUD");
const { hash } = require("../../util");
const { jsonCheck } = require("../../util");
const { randomStr } = require("../../util");
// module scaffoldings
let token = {};

token.token = (reqData, callback) => {
  const acceptedRequest = ["post", "put", "get", "delete"];
  let method = reqData.method;
  if (acceptedRequest.indexOf(method) !== -1) {
    token._token[method](reqData, callback);
  } else {
    callback(405, { message: "Go Away Idiot! you are not allowed!" });
  }
};

token._token = {};

token._token.post = (requestProperties, callback) => {
  let phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone.trim()
      : false;
  let password =
    typeof requestProperties.body.password === "string"
      ? requestProperties.body.password.trim()
      : false;
  if (phone && password) {
    dataCRUD.read("users", phone, (err, data) => {
      let userData = jsonCheck(data);
      if (userData.password === hash(password)) {
        let tokenID = randomStr(20);
        let tokenExpires = Date.now() + 60 * 60 * 1000;
        let tokenObject = {
          phone,
          id: tokenID,
          tokenExpires,
        };
        dataCRUD.create("tokens", tokenID, tokenObject, (err) => {
          if (!err) {
            callback(200, tokenObject);
          } else {
            callback(500, { error: "Failed To Generate Token Object" });
          }
        });
      } else {
        callback(400, { error: "Password isn't valid" });
      }
    });
  } else {
    callback(400, { error: "you have a problem in your request" });
  }
};
token._token.get = (requestProperties, callback) => {
  let token =
    typeof requestProperties.queries.token === "string" &&
    requestProperties.queries.token.length === 20
      ? requestProperties.queries.token
      : false;
  if (token) {
    dataCRUD.read("tokens", token, (err, data) => {
      if (!err && data) {
        data = jsonCheck(data);
        callback(200, data);
      } else {
        callback(404, { error: "Requested Token Not Found" });
      }
    });
  } else {
    callback(404, { error: "Requested Token Not Found" });
  }
};

token._token.put = (requestProperties, callback) => {
  let token =
    typeof requestProperties.body.token === "string" &&
    requestProperties.body.token.length === 20
      ? requestProperties.body.token
      : false;

  let extend =
    typeof requestProperties.body.extend === "boolean"
      ? requestProperties.body.extend
      : false;

  if (token && extend) {
    dataCRUD.read("tokens", token, (err, data) => {
      if (!err) {
        let tokenData = jsonCheck(data);
        if (tokenData.tokenExpires > Date.now()) {
          tokenData.tokenExpires += Date.now() + 60 * 60 * 1000;
          dataCRUD.update("tokens", token, tokenData, (err) => {
            if (!err) {
              callback(200, { message: "Expiry Date Has Been Updated" });
            } else {
              callback(500, { error: "something went wrong" });
            }
          });
        } else {
          callback(400, { error: "token validity has been over" });
        }
      } else {
        callback(400, { error: "Token Not Found" });
      }
    });
  } else {
    callback(400, { error: "you have a problem in your request" });
  }
};
token._token.delete = (requestProperties, callback) => {
  let token =
    typeof requestProperties.queries.token === "string" &&
    requestProperties.queries.token.trim().length === 20
      ? requestProperties.queries.token.trim()
      : false;
  dataCRUD.read("tokens", token, (err, data) => {
    if (!err && data) {
      dataCRUD.delete("tokens", token, (err) => {
        if (!err) {
          callback(200, { message: "token deleted successfully" });
        } else {
          callback(500, { error: "something went wrong, please try again" });
        }
      });
    } else {
      callback(404, { error: "your requested token not found" });
    }
  });
};

token._token.verify = (token, phone, callback) => {
  dataCRUD.read('tokens', token, (err, data)=> {
    if(!err && data) {
      if(jsonCheck(data).phone === phone && jsonCheck(data).tokenExpires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
}

module.exports = token;
