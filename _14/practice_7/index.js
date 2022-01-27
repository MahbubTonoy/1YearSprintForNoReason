const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
 res.send("Hello world");
 console.log(req.body)
});

app.listen(3000);