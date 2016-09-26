const mongo = require("mongojs")
      , db = mongo("ecommerce", ["products"])
module.exports = {
   getProducts(req,res){
    let query = req.query;
    db.products.find(query, function(err, suc){
      if (err){ res.status(500).json("error: " + err)}
      else {
        res.status(200).json(suc)
      }
    })
  },
   getProductsById(req,res){
    db.products.find(mongo.ObjectId(req.params.id), function(err,suc){
      if (err){ res.status(500).json(err) };
        res.status(200).json(suc)
    })
  },
   postToProducts(req,res){
    db.products.save(req.body, function(err, suc){
      if (!err){
        res.status(200).json(suc)
      }
      else {
        res.status(500).json("Error: " + err)
      }
    })
  },
   putProducts(req,res){

  },
   deleteProducts(req,res){
    console.log("DELETE!!")
  }

}
