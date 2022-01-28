const express = require('express');

const app = express();

app.all("/", (req,res)=>{
 res.send("home page");
})

app.listen(3000);