/**
 * Project Name: URL Uptime checker worker module
 * Author: Mahbub Tonoy
 * Description: As same as Project Name
 * Date: 26/01/2022
 */

// dependencies
const data = require("../lib/dataCRUD");
const { jsonCheck } = require("./util");

//module scaffolding
const worker = {};
worker.validateCheckedData = (data) => {
 if(data && data.id) {
  
 } else {
  console.log("Error, Check was Invalid or not properly formated");
 }
}
worker.getAllChecks = () => {
 data.list('checks', (err, data)=> {
  if(!err && data && data.length > 0) {
   data.forEach(check=>{
    data.read('checks', check, (err, checkData)=>{
     if(!err && checkData) {
      worker.validateCheckedData(jsonCheck(checkData));
     } else {
      console.log("Error Reading Check Data");
     }
    });
   });
  } else {
   console.log("Could Not Find any Checks to Process");
  }
 });
}

worker.loop = () => {
 setInterval(()=>{
  worker.getAllChecks();
 }, 1000*60);
}

worker.start = () => {
 //get all checks

 //loop through the checks
 worker.loop()
}

module.exports = worker;