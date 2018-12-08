// keys.js - figure out what set of credentials to return:
// DO COMMIT !!!
if (process.env.NODE_ENV === "production") {
  //        this happens automatically in Heroku
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // in development - return dev keys
  module.exports = require("./dev");
}
