/**
* Project Name: Data CRUD file
* Author: Mahbub Tonoy
* Description: this file will do all the CRUD operation for data. no database will use
* Date: 17/01/2022
*/ 

// dependencies
const fs = require("fs");
const path = require("path");

//module scaffolding
const lib = {}

//file open operations
lib.workingPath = path.join(__dirname,"/../.data");

lib.create = (dir, file, data, callback)=>{
 if(!fs.existsSync(lib.workingPath+dir)) {
  fs.mkdir(lib.workingPath+dir);
 }
 fs.open(lib.workingPath+dir+"/"+file+".json", 'wx', (err,fileDescriptor)=>{
  if(!err && fileDescriptor) {
   let stringifiedData = JSON.stringify(data);
   fs.writeFile(fileDescriptor, stringifiedData, (err)=>{
    if(!err) {
     fs.close(fileDescriptor, (err)=>{
      if(!err) {
       callback(false);
      } else {
       callback("Error Closing The New File");
      }
     })
    } else {
     callback("Error Writing the file");
    }
   })
  } else {
   callback("failed");
  }
 });
}

module.exports = lib;