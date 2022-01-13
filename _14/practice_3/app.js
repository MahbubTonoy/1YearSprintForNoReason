const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      fs.readFile("index.html", "utf-8", (err, data) => {
        if (!err) {
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/submit" && req.method === "POST") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        // body = htmlDecode(body);
        body = `{"${body}"}`;
        body = body
          .replace(/=/g, `":"`)
          .replace(/&/g, `","`)
          .replace(/\+/g, ` `);
        let user = JSON.parse(body);
        fs.writeFile(`${user.name}.json`, body, (err) => {
          if (!err) {
            res.write("Thanks For Submitting<br/>");
            res.end();
          }
        });
      });
    }
  })
  .listen(8080);
