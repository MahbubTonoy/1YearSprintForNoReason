/**
 * Project Name: Data CRUD file
 * Author: Mahbub Tonoy
 * Description: this file will do all the CRUD operation for data. no database will use
 * Date: 17/01/2022
 */

// dependencies
const fs = require("fs");
const path = require("path");

//module scaffolding
const lib = {};

//file open operations
lib.workingPath = path.join(__dirname, "/../.data/");

lib.create = (dir, file, data, callback) => {

  fs.open(
    lib.workingPath + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        let stringifiedData = JSON.stringify(data);
        fs.writeFile(fileDescriptor, stringifiedData, (err) => {
          if (!err) {
            fs.close(fileDescriptor, (err) => {
              if (!err) {
                callback(false);
              } else {
                callback("Error Closing The New File");
              }
            });
          } else {
            callback("Error Writing the file");
          }
        });
      } else {
        callback("Failed To Open File.");
        console.log(err);
      }
    }
  );
};

//read file
lib.read = (dir, file, callback) => {
  fs.readFile(
    lib.workingPath + dir + "/" + file + ".json",
    "utf-8",
    (err, data) => {
      callback(err, data);
    }
  );
};

//update file
lib.update = (dir, file, data, callback) => {
  fs.open(
    lib.workingPath + dir + "/" + file + ".json",
    "r+",
    (err, fileDescriptor) => {
      if (!err) {
        fs.ftruncate(fileDescriptor, (err) => {
          if (!err) {
            fs.writeFile(fileDescriptor, JSON.stringify(data), (err) => {
              if (!err) {
                callback(false);
              } else {
                callback(err);
              }
            });
          } else {
            callback(err);
          }
        });
      } else {
        callback(err);
      }
    }
  );
};

lib.delete = (dir, file, callback) => {
  fs.unlink(lib.workingPath + dir + "/" + file + ".json", (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("Failed To Delete The File");
    }
  });
};

module.exports = lib;
