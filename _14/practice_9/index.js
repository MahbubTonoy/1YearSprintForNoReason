const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
const storage = multer.diskStorage({
 filename: (err, file, callback) => {
  let fileFormat = path.extname(file.originalname);
  let fileName = file.originalname
                 .replace(" ", "_")
                 .replace(fileFormat, "") +
                 "-"+
                 Date.now() +
                 fileFormat;
  callback(null, fileName);
 },
 destination: (err, file, callback)=> {
  callback(null, "./uploads/");
 }
});

const uploader = multer({
 storage,
})

app.get("/", (req,res)=> {
 res.render("index");
});

app.post("/upload", uploader.single("uploadedFile"), (req,res) => {
 res.send("Files Uploaded!");
})

app.listen(3000, ()=>{
 console.log("Server Started at 3000");
});

//