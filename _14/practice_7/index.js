const express = require("express");
const cookie = require("cookie-parser");

const app = express();
app.use(cookie());

app.get("*", (req, res) => {
 console.log(req.cookies);
  res.send("Hello World");
}); 

app.listen(3000);
