// next = funciton called when the middleware finishes
// ready to pass the request:
module.exports = (req, res, next) => {
  if (!req.res) {
    return res.status(403).send({ error: "You MUST LogIn!" });
  }
  // if logged in move to next:
  next();
};
