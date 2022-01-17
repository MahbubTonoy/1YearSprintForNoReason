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
console.log(path.join(__dirname,"/../.data"));
// fs.open()