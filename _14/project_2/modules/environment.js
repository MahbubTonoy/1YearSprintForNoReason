/**
 * Project Name: Environment Setup
 * Author: Mahbub Tonoy
 * Description: Setting up the environment process.
 * Date: 17/01/2022
 */

// module scaffolding
let environment = {};

environment.staging = {
  port: 3000,
  envName: "staging",
  secreateKey: "stupid",
  maxCheck: 5,
  twilioData: {
    from: "+16067557034",
    accountSid: 'ACeb4badf4997355b69b7f577b19201490',
    authToken: 'c309c5c4e6067f74d27f2e3d3bedef49'
  }
};
environment.production = {
  port: 5000,
  envName: "production",
  secreateKey: "idiot",
  maxCheck: 5,
  twilioData: {
    from: "+16067557034",
    accountSid: 'ACeb4badf4997355b69b7f577b19201490',
    authToken: '196fd97637a6b0c2fe31ea4e3814821f'
  }
};

let processEnv =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

let environmentToExport =
  typeof environment[processEnv] === "object"
    ? environment[processEnv]
    : environment.staging;

//export environment object
module.exports = environmentToExport;