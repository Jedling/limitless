const express = require("express");
const encryptPassword = require("../config/encryptPassword");
const User = require("../schemas/User");

const router = express.Router();

router.get("/api/users", async (req, res) => {
  console.log("running");
  let allUsers = await User.find();
  res.status(200).send(allUsers);
});

router.get("/api/users/id/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  res.status(200).send(user);
});

router.get("/api/email/:email", async (req, res) => {
  let user = await User.find({ email: req.params.email });
  res.status(200).send(user);
});

router.post("/api/users", async (req, res) => {
  let user = new User({
    ...req.body,
    password: encryptPassword(req.body.password)
  });
  await user.save();
  res.json(user);
});

module.exports = router;
