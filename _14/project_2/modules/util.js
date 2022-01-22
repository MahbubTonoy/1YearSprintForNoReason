/**
* Project Name: Utilities for multiple task
* Author: Mahbub Tonoy
* Description: ASAPN
* Date: 22 Jan 2022
*/

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


module.exports = util;
