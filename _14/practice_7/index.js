const express = require("express");
const cookie = require("cookie-parser");

const app = express();
app.use(cookie());
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/Fira_Code.zip");
}); 

app.listen(3000);