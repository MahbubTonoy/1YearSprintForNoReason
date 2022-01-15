/**
* Project Name: Request Handler For This project
* Author: Mahbub Tonoy
* Description: As same as project name
* Date: 15 Jan 2022
*/

//dependencies

const fs = require("fs");
const url = require("url");
const { StringDecoder } = require("string_decoder");

//module scaffolding
let reqResHandler = {};


//the main handler function
reqResHandler.handler = (req, res) => {

 let parsedUrl = url.parse(req.url, true);
 let path = parsedUrl.path.replace(/^\/+|\/+$/g, "");
 let method = req.method.toUpperCase();
 let queries = parsedUrl.query;
 let headers = req.headers;
 let decoder = new StringDecoder("utf-8");
 let data = "";


 req.on("data", (chunk) => {
   data += decoder.write(chunk);
 });
 req.on("end", () => {
   decoder.end();
   console.log(data);
   res.end();
 });
}


//exporting the modules
module.exports = reqResHandler;