const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: String
  , address: String
  , email: String
})
module.exports = mongoose.model("User", User)
