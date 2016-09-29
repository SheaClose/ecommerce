const mongoose = require("mongoose")
const Product = new mongoose.Schema({
  title: {type: String, unique: true, required: true}
  , description: {type: String, required: true}
  , price: {type: Number, required: true, Minimum: 0 }



})

module.exports = mongoose.model("Product", Product)
