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
const { randomStr } = require('../../util');
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
       let tokenExpires = Date.now() + (60*60*1000);
       let tokenObject = {
        phone,
        id: tokenID,
        tokenExpires
       }
       dataCRUD.create('tokens', tokenID, tokenObject, (err)=>{
        if(!err) {
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
 typeof requestProperties.queries.token === "string" &&
 requestProperties.queries.token.length === 20
   ? requestProperties.queries.token
   : false;
  
 let extend = typeof requestProperties.queries.extend === "boolean"
   ? requestProperties.queries.extend
   : false;

   if(token && extend) {

   } else {
    callback(400, { error: "you have a problem in your request" });
   }

};
token._token.delete = (requestProperties, callback) => {};

module.exports = token;
