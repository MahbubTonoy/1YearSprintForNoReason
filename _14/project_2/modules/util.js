/**
* Project Name: Utilities for multiple task
* Author: Mahbub Tonoy
* Description: ASAPN
* Date: 22 Jan 2022
*/

//dependencies
const crypto = require("crypto");
const env = require("./environment");

// module scaffoldings
let util = {};

util.jsonCheck = (json) => {
 let filteredJSON;
 try {
  filteredJSON = JSON.parse(json);
 } catch {
  filteredJSON = {};
 }
 return filteredJSON;
}

util.hash = (string) => {
 if(typeof string === 'string' && string.length !== 0) {
  const hash = crypto
     .createHmac('sha256', env.secreateKey)
     .update(string)
     .digest('hex');

  return hash;
 }
 return false;
}

module.exports = util;
