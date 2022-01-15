const http = require("http");
const fs = require("fs");
fs.readFile("index.html", "utf-8", (err, data) => {
  if (!err) {
    const server = http.createServer((req, res) => {
      res.write(data);
      res.end();
    });
    server.listen(8080);
  }
});
