const express = require("express");

const app = express();

app.get("/", (req,res)=> {
 console.log("nothing");
})

app.listen(3000);