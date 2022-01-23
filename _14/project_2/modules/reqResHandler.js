/**
 * Project Name: Request Response Handler
 * Author: Mahbub Tonoy
 * Description: A reqRes handler for current project
 * Date: 17/12/2022
 */

// dependencies

const url = require("url");

const routeHandler = require("./routeHandler");
const util = require("./util");

// module scaffolding
let reqResHandler = {};

reqResHandler.handle = (req, res) => {
  let path = url.parse(req.url, true).pathname.replace(/^\/+|\/+$/g, "");
  let route = routeHandler[path]
    ? routeHandler[path]
    : routeHandler["notFound"];
  let method = (req.method).toLowerCase();
  let reqBody = '';
  let queries = url.parse(req.url, true).query;

  let reqData = {
    path,
    route,
    reqBody,
    method,
    queries
  }
  req.on("data", (buffer) => {
    reqBody += buffer;
  });
  req.on("end", () => {
    reqData.body = util.jsonCheck(reqBody);
    route(reqData, (statusCode, payLoad) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payLoad = typeof payLoad === "object" ? payLoad : {};
      res.writeHead(statusCode, {'Content-Type':'text/json'});
      res.write(JSON.stringify(payLoad));
      res.end();
    });
  });
};

module.exports = reqResHandler;
