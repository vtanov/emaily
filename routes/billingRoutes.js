// must require the js file to access keys:
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // watch for post req made to stripe:
  // requireLogin - second argument, to assure user
  // is loggedin. It's a reference to a function that express
  // will run whenever a request comes in:
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // this where we need to handle the token
    // after charge is finilized we update credits:
    // install npm module (this is on the back-end)
    //console.log(req.body);

    const charge = await stripe.charges.create({
      // confirming the amount of money to bill:
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      // specify the id from the token we just
      // passed into this route handler:
      source: req.body.id
    });

    // after above charge completed
    // add credits => get reference to the current User model
    // (use req.user provided by passport) and persist the user:
    req.user.credits += 5;
    // save (persist) the user:
    const user = await req.user.save();

    // respond the the request back to the browser:
    res.send(user);
  });
};
