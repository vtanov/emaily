// requiring the original npm passport
const passport = require("passport");

// create a new arrow function:
// and will call this function with the app object
module.exports = app => {
  // request to google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"] // what access we want to have
    })
  );

  // taking the code form google
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    // handle where the req is sent to
    // agter this middleware has authenticated the user:
    (req, res) => {
      // redirect to:
      res.redirect("/surveys");
    }
  );

  // to logout an user:
  app.get("/api/logout", (req, res) => {
    req.logout(); // kills the token that carry all usere's info
    res.redirect("/");
  });

  // when get req to the app:
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
