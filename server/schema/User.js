const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  personId: { type: String, unique: true, required: true },
  username: { type: String, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  active: { type: Boolean, default: false },
  role: { type: String, default: "user" }
});

module.export = mongoose.model("User", userSchema);
