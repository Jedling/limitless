const express = require("express");
const encryptPassword = require("../config/encryptPassword");
const User = require("../schemas/User");

const router = express.Router();

router.post("/api/login", async (req, res) => {
  let { username, password } = req.body;
  password = encryptPassword(password);
  let user = await User.findOne({ username, password })
    .select("username firstName role lastName email phone active")
    .exec();
  if (user && user.active) {
    req.session.user = user;
    res.json(user);
  } else if (user && !user.active) {
    res.json({ error: "not active", email: user.email });
  }
});

// check if/which user is logged in
router.get("/api/login", (req, res) => {
  res.json(req.session.user ? req.session.user : { status: "not logged in" });
});

router.delete("/api/login", (req, res) => {
  delete req.session.user;
  res.json({ status: "logged out" });
});

module.exports = router;
