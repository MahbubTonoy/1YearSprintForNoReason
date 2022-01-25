/**
 * Project Name: Uptime Checker
 * Author: Mahbub Tonoy
 * Description: ALAPN
 * Date: 25 Jan 2022
 */

//dependencies
const dataCRUD = require("../../../lib/dataCRUD");
const tokenHandler = require("./tokenHandler");
const { maxCheck } = require("../../environment");
const { jsonCheck, randomStr } = require("../../util");
// module scaffoldings
let check = {};

check.check = (reqData, callback) => {
  const acceptedRequest = ["post", "put", "get", "delete"];
  let method = reqData.method;
  if (acceptedRequest.indexOf(method) !== -1) {
    check._check[method](reqData, callback);
  } else {
    callback(405, { message: "Go Away Idiot! you are not allowed!" });
  }
};

check._check = {};

check._check.post = (requestProperties, callback) => {
  let protocol =
    typeof requestProperties.body.protocol === "string" &&
    ["http", "https"].indexOf(requestProperties.body.protocol) > -1
      ? requestProperties.body.protocol
      : false;

  let url =
    typeof requestProperties.body.url === "string" &&
    requestProperties.body.url.length > 0
      ? requestProperties.body.url
      : false;

  let method =
    typeof requestProperties.body.method === "string" &&
    ["get", "post", "put", "delete"].indexOf(
      requestProperties.body.method.toLowerCase()
    ) > -1
      ? requestProperties.body.method.toLowerCase()
      : false;

  let successCodes =
    typeof requestProperties.body.successCodes === "object" &&
    requestProperties.body.successCodes instanceof Array
      ? requestProperties.body.successCodes
      : false;

  let timeOut =
    typeof requestProperties.body.timeOut === "number" &&
    requestProperties.body.timeOut % 1 === 0 &&
    requestProperties.body.timeOut > 0 &&
    requestProperties.body.timeOut <= 5
      ? requestProperties.body.timeOut
      : false;
  if (protocol && url && method && successCodes && timeOut) {
    let token =
      typeof requestProperties.reqHead.token === "string" &&
      requestProperties.reqHead.token.length === 20
        ? requestProperties.reqHead.token
        : false;
    dataCRUD.read("tokens", token, (err, data) => {
      if (!err && data) {
        let tokenData = jsonCheck(data);
        let userPhone = tokenData.phone;
        dataCRUD.read("users", userPhone, (err, data) => {
          if (!err && data) {
            tokenHandler._token.verify(token, userPhone, (tokenStatus) => {
              if (tokenStatus) {
                let userData = jsonCheck(data);
                let userChecks =
                  typeof userData.checks === "object" &&
                  userData.checks instanceof Array
                    ? userData.check
                    : [];
                if (userChecks.length < maxCheck) {
                  let checkId = randomStr(20);
                  let checkObj = {
                    id: checkId,
                    phone: userPhone,
                    protocol,
                    url,
                    method,
                    successCodes,
                    timeOut,
                  };
                  dataCRUD.create("checks", checkId, checkObj, (err) => {
                    if (!err) {
                      userData.check = userChecks;
                      userData.check.push(checkId);
                      dataCRUD.update("users", userPhone, userData, (err) => {
                        if (!err) {
                          callback(200, checkObj);
                        } else {
                          callback(500, {
                            error:
                              "There was a problem on this operation, please try again",
                          });
                        }
                      });
                    } else {
                      callback(500, {
                        error:
                          "There was a problem on this operation, please try again",
                      });
                    }
                  });
                } else {
                  callback(401, { error: "you have reached max check limit" });
                }
              } else {
                callback(403, { error: "Authentication Failed" });
              }
            });
          } else {
            callback(404, { error: "User Not Found" });
          }
        });
      } else {
        callback(403, { error: "Authentication Failed" });
      }
    });
  } else {
    callback(400, { error: "you have a problem on your request" });
  }
};
check._check.get = (requestProperties, callback) => {
  let id =
    typeof requestProperties.queries.id === "string" &&
    requestProperties.queries.id.length === 20
      ? requestProperties.queries.id
      : false;
  if (id) {
    dataCRUD.read("checks", id, (err, data) => {
      if (!err && data) {
        let checkedData = jsonCheck(data);
        let token =
          typeof requestProperties.reqHead.token === "string" &&
          requestProperties.reqHead.token.length === 20
            ? requestProperties.reqHead.token
            : false;
        tokenHandler._token.verify(token, checkedData.phone, (tokenStatus) => {
          if (tokenStatus) {
            callback(200, checkedData);
          } else {
            callback(403, { error: "Authentication Error" });
          }
        });
      } else {
        callback(500, { error: "something went wrong" });
      }
    });
  } else {
    callback(400, { error: "you have a problem on your request" });
  }
};
check._check.put = (requestProperties, callback) => {
  let id =
    typeof requestProperties.body.id === "string" &&
    requestProperties.body.id.trim().length === 20
      ? requestProperties.body.id
      : false;
  let protocol =
    typeof requestProperties.body.protocol === "string" &&
    ["http", "https"].indexOf(requestProperties.body.protocol) > -1
      ? requestProperties.body.protocol
      : false;

  let url =
    typeof requestProperties.body.url === "string" &&
    requestProperties.body.url.length > 0
      ? requestProperties.body.url
      : false;

  let method =
    typeof requestProperties.body.method === "string" &&
    ["get", "post", "put", "delete"].indexOf(
      requestProperties.body.method.toLowerCase()
    ) > -1
      ? requestProperties.body.method.toLowerCase()
      : false;

  let successCodes =
    typeof requestProperties.body.successCodes === "object" &&
    requestProperties.body.successCodes instanceof Array
      ? requestProperties.body.successCodes
      : false;

  let timeOut =
    typeof requestProperties.body.timeOut === "number" &&
    requestProperties.body.timeOut % 1 === 0 &&
    requestProperties.body.timeOut > 0 &&
    requestProperties.body.timeOut <= 5
      ? requestProperties.body.timeOut
      : false;
  if (id) {
    if (protocol || url || method || successCodes || timeOut) {
      dataCRUD.read("checks", id, (err, data) => {
        if (!err && data) {
          let checkObj = jsonCheck(data);
          let token =
            typeof requestProperties.reqHead.token === "string" &&
            requestProperties.reqHead.token.length === 20
              ? requestProperties.reqHead.token
              : false;
          tokenHandler._token.verify(token, checkObj.phone, (tokenStatus) => {
            if (tokenStatus) {
              if (protocol) {
                checkObj.protocol = protocol;
              }
              if (url) {
                checkObj.url = url;
              }
              if (method) {
                checkObj.method = method;
              }
              if (successCodes) {
                checkObj.successCodes = successCodes;
              }
              if (timeOut) {
                checkObj.timeOut = timeOut;
              }
              dataCRUD.update("checks", id, checkObj, (err) => {
                if (!err) {
                  callback(200, { message: "Successfully Done" });
                } else {
                  callback(500, { error: "something went wrong" });
                }
              });
            } else {
              callback(403, { error: "Authentication Error" });
            }
          });
        } else {
          callback(500, { error: "something went wrong" });
        }
      });
    } else {
      callback(400, {
        error:
          "You have a problem with your request, provide at least one field to change",
      });
    }
  } else {
    callback(400, { error: "You have a problem with your request" });
  }
};
check._check.delete = (requestProperties, callback) => {
  let id =
    typeof requestProperties.queries.id === "string" &&
    requestProperties.queries.id.length === 20
      ? requestProperties.queries.id
      : false;
  if (id) {
    dataCRUD.read("checks", id, (err, data) => {
      if (!err && data) {
        let checkedData = jsonCheck(data);
        let token =
          typeof requestProperties.reqHead.token === "string" &&
          requestProperties.reqHead.token.length === 20
            ? requestProperties.reqHead.token
            : false;
        tokenHandler._token.verify(token, checkedData.phone, (tokenStatus) => {
          if (tokenStatus) {
            dataCRUD.delete("checks", id, (err) => {
              if (!err) {
                dataCRUD.read("users", checkedData.phone, (err, data) => {
                  if (!err && data) {
                    let userObj = jsonCheck(data);
                    let userChecks =
                    typeof userObj.check === "object" &&
                    userObj.check instanceof Array
                    ? userObj.check
                    : [];
                    console.log(userChecks);
                    let position = userChecks.indexOf(id);
                    if (position != -1) {
                      userChecks.splice(position, 1);
                      userObj.check = userChecks;
                      dataCRUD.update(
                        "users",
                        userObj.phone,
                        userObj,
                        (err) => {
                          if (!err) {
                            callback(200, { message: "Successfully Deleted!" });
                          } else {
                            callback(500, { error: "something went wrong" });
                          }
                        }
                      );
                    } else {
                      callback(400, {error: "The Check id that you are looking for doesn't exist!"})
                    }
                  } else {
                    callback(500, { error: "something went wrong" });
                  }
                });
              } else {
                callback(500, { error: "something went wrong" });
              }
            });
          } else {
            callback(403, { error: "Authentication Error" });
          }
        });
      } else {
        callback(500, { error: "something went wrong" });
      }
    });
  } else {
    callback(400, { error: "you have a problem on your request" });
  }
};

module.exports = check;
