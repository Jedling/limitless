const express = require("express");
const encryptPassword = require("../config/encryptPassword");
const User = require("../schemas/User");

const router = express.Router();

router.get("/api/users", async (req, res) => {
  let allUsers = await User.find();
  res.status(200).send(allUsers);
});

router.get("/api/users/id/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  res.status(200).send(user);
});

router.get("/api/active/:username", async (req, res) => {
  let user = await User.findOne({ username: req.params.username });
  console.log(user);
  if (user) {
    res.status(200).send(user);
  } else {
    res.send({ error: "error" });
  }
});

router.get("/api/email/:email", async (req, res) => {
  let user = await User.find({ email: req.params.email });
  res.status(200).send(user);
});

router.post("/api/users", async (req, res) => {
  if (typeof req.body.password !== "string" || req.body.password.length < 6) {
    res.json({ error: "Password too short" });
    return;
  }
  let role = "user";
  if (req.session.user && req.session.user.role === "admin");
  role = req.body.role || "user";

  let user = new User({
    ...req.body,
    password: encryptPassword(req.body.password),
    role
  });
  let error;
  let resultFromSave = await user.save().catch(err => (error = err + ""));
  res.json(error ? { error } : { success: "User created" });
  console.log(error);
});

module.exports = router;
