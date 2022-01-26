/**
 * Project Name: Notifications Library
 * Author: Mahbub Tonoy
 * Description: ALAPN
 * Date: 26 Jan 2022
 */

//dependencies
const { twilioData } = require("./environment");
const twilio = require('twilio');
const client = new twilio(twilioData.accountSid, twilioData.authToken);

//module scaffoldings
let notifications = {};

//send notifications to twilio api
notifications.sendNotifications = (phone, msg, callback) => {
  client.messages
  .create({
    body: msg,
    to: `+88${phone}`, // Text this number
    from: twilioData.from, // From a valid Twilio number
  })
  .then((message) => {
    callback(false, message.sid);
  });
};

module.exports = notifications;
