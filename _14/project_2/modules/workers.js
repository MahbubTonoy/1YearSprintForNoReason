/**
 * Project Name: URL Uptime checker worker module
 * Author: Mahbub Tonoy
 * Description: As same as Project Name
 * Date: 26/01/2022
 */

// dependencies
const url = require("url");
const http = require("http");
const https = require("https");

const dataCRUD = require("../lib/dataCRUD");
const { jsonCheck } = require("./util");
const notification = require("./notifications");

//module scaffolding
const worker = {};

//send notification to user
worker.alertUserToStatusChange = (newCheckData)=> {
 let message = `Alert: Your Check For ${newCheckData.method.toUpperCase()} ${newCheckData.protocol}://${newCheckData.url} is currently ${newCheckData.state}.`;
 notification.sendNotifications(newCheckData.phone, message, (err, msg)=>{
  if(!err) {
   console.log(msg);
  }
 });
}

worker.processCheckOutcome = (originalCheckData, checkoutcome) => {
  let state =
    !checkoutcome.error &&
    checkoutcome.responseCode &&
    originalCheckData.successCodes.indexOf(checkoutcome.responseCode) > -1
      ? "up"
      : "down";

  let alertWanted =
    originalCheckData.lastCheck && originalCheckData.state !== state
      ? true
      : false;

  let newCheckData = originalCheckData;

  newCheckData.state = state;
  newCheckData.lastCheck = Date.now();

  //update the check to storage
  dataCRUD.update('checks', newCheckData.id, newCheckData, (err)=> {
   if(!err) {
    if(alertWanted) {
     worker.alertUserToStatusChange(newCheckData);
    } else {
     console.log("alert is not needed");
    }
   } else {
    console.log("Error trying to save checkdata one of the checks");
   }
  })
};

worker.performCheck = (validatedData) => {
  let checkOutCome = {
    error: false,
    response: false,
  };
  let outcomeSent = false;

  let parsedUrl = url.parse(
    validatedData.protocol + "://" + validatedData.url,
    true
  );
  let hostname = parsedUrl.hostname;
  const path = parsedUrl.path;

  const requestDetails = {
    protocol: validatedData.protocol + ":",
    hostname,
    method: validatedData.method.toUpperCase(),
    path,
    timeout: validatedData.timeOut * 1000,
  };

  const protocolToUse = validatedData.protocol === "http" ? http : https;

  let req = protocolToUse.request(requestDetails, (res) => {
    //grab the status code
    let status = res.statusCode;
    if (!outcomeSent) {
      checkOutCome.responseCode = status;
      worker.processCheckOutcome(validatedData, checkOutCome);
      outcomeSent = true;
    }
  });
  req.on("error", (e) => {
    checkOutCome = {
      error: true,
      value: e,
    };
    if (!outcomeSent) {
      checkOutCome = {
        error: false,
        value: "timeout",
      };
      worker.processCheckOutcome(validatedData, checkOutCome);
      outcomeSent = true;
    }
  });
  req.on("timeout", (e) => {
    if (!outcomeSent) {
      worker.processCheckOutcome(validatedData, checkOutCome);
      outcomeSent = true;
    }
  });

  req.end();
};

worker.validateCheckedData = (data) => {
  if (data && data.id) {
    data.state =
      typeof data.state === "string" && ["up", "down"].indexOf(data.state) > -1
        ? data.state
        : "down";
    data.lastCheck =
      typeof data.lastCheck === "number" && data.lastCheck > 0
        ? data.lastCheck
        : false;
    worker.performCheck(data);
  } else {
    console.log("Error, Check was Invalid or not properly formated");
  }
};
worker.getAllChecks = () => {
 dataCRUD.list("checks", (err, data) => {
    if (!err && data && data.length > 0) {
      data.forEach((check) => {
       dataCRUD.read("checks", check, (err, checkData) => {
          if (!err && checkData) {
            worker.validateCheckedData(jsonCheck(checkData));
          } else {
            console.log("Error Reading Check Data");
          }
        });
      });
    } else {
      console.log("Could Not Find any Checks to Process");
    }
  });
};

worker.loop = () => {
  setInterval(() => {
    worker.getAllChecks();
  }, 5000);
};

worker.start = () => {
  //get all checks

  //loop through the checks
  worker.loop();
};

module.exports = worker;
