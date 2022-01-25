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
  maxCheck: 5
};
environment.production = {
  port: 5000,
  envName: "production",
  secreateKey: "idiot",
  maxCheck: 5
};

let processEnv =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

let environmentToExport =
  typeof environment[processEnv] === "object"
    ? environment[processEnv]
    : environment.staging;

//export environment object
module.exports = environmentToExport;