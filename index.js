// ON the server side we use:
const express = require("express");
// using common JS modules !!!! Sharing code between files
//  On the back end use:
// import express from 'express';

const mongoose = require("mongoose");
// make use of the cookie-session
const cookieSession = require("cookie-session");
const passport = require("passport");
// require bodyParser to process token for Stripe:
const bodyParser = require("body-parser");
const keys = require("./config/keys");
// must import the user class before using it
// below in the passport to create instances !!!
require("./models/user");
// const passportConfig = require("./services/passport");
// but this is nor returning anything =>
require("./services/passport");

// pass the credentials
mongoose.connect(keys.mongoURI);

// // import auth routes file as
// // the function that handles both routes !!!
// const authRoutes = require("./routes/authRoutes");

// Create a new app:
const app = express();
// will listen for request and route them

// wire up bodyParser middleware:
app.use(bodyParser.json());

// use cookies config object:
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    keys: [keys.cookieKey] // key to encrypt the cookie inside the keys.js
  })
);

app.use(passport.initialize());
app.use(passport.session());

// // call authRouts with the app object:
// authRoutes(app);
// ****** BUT there's a better way of writing it, as BINDING !!!!
require("./routes/authRoutes")(app);
// returns a function and immediately call it with the app object

// route for billing:
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // 1. making sure express will serve up prod assets
  // like => main.ja or main.css files:
  // if any request comes thru for a route that we currently
  // do NOT have (like the 2 above), go into "client/build"
  // and find any file that matched up the request
  app.use(express.static("client/build"));

  // 2. Otherwise, will serve up the index.html file
  // if it doesn't recognize the route
  // just serve the html document:
  // CATCH ALL CASE
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// express will inject an environment variable:
const PORT = process.env.PORT || 5000; // locallhost:5000
// if there isn't defiend var from Heroku use 5000 (prod vs dev environment)

app.listen(PORT);
