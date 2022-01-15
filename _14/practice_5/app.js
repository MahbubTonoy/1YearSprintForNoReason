const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/about" && req.method === "POST") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        let query = url.parse("?" + body.toString(), true).query;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          `Hello ${query.name}, Thanks for your response,<br/>We will send confirmation message in your email <b>${query.email}</b>.`
        );
        res.end();
      });
    }
  })
  .listen(8080);
