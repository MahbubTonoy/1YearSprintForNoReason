const express = require("express");

const app = express();

const middleWireWithData = (data) => {
 return (req,res,next) => {
  res.send(data);
  next();
 }
}

app.use(middleWireWithData("পেয়াজ"));

app.get("/", (req,res)=> {
 console.log("nothing");
})

app.listen(3000);