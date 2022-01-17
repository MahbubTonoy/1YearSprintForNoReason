/**
 * Project Name: Request Response Handler
 * Author: Mahbub Tonoy
 * Description: A reqRes handler for current project
 * Date: 17/12/2022
 */

// dependencies

const url = require("url");

const routeHandler = require("./routeHandler");
const { notFound } = require("./routeHandler/routes/404");

// module scaffolding
let reqResHandler = {};

reqResHandler.handle = (req, res) => {
  let path = url.parse(req.url, true).pathname.replace(/^\/+|\/+$/g, "");
  let route = routeHandler[path]
    ? routeHandler[path]
    : routeHandler["notFound"];

  let data = [];
  req.on("data", (buffer) => {
    data.push(buffer);
  });
  req.on("end", () => {
    route(data, res, (statusCode, payLoad) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payLoad = typeof payLoad === "object" ? payLoad : {};
      res.writeHead(statusCode);
      console.log(data.toString());
      res.write(JSON.stringify(payLoad));
    });
    res.end();
  });
};

module.exports = reqResHandler;
