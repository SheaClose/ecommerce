const mongoose = require("mongoose")
const Product = require("./features/Product.js")

const Order = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true} //57ec92bdcb8f8811ec1308af
  , products : [{
        item     : {type: Product}
      , quantity : {type: Number, required: true, min 1}
    }]
  , ordered : {type: Date, default: new Date()}
})

module.exports = mongoose.model("Order", Order);
