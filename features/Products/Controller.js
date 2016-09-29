const Product = require("./Product.js")

module.exports = {
   getProducts(req,res){
    let query = req.query;
    Product.find(query, function(err, suc){
      if (err){ res.status(500).json("error: " + err)}
      else {
        res.status(200).json(suc)
      }
    })
  },
   getProductsById(req,res){
    Product.findById(req.params.id, function(err,suc){
      if (err){ res.status(500).json(err) };
        res.status(200).json(suc)
    })
  },
   postToProducts(req,res){
    new Product(req.body).save(function(err, suc){
      if (!err){
        return res.status(200).json(suc)
      }
      else {
        return res.status(500).json("Error: " + err)
      }
    })
  },
   putProducts(req,res){
     const query = {
       _id: req.params.id
     }
     Product.findByIdAndUpdate(query, {$set: req.body}, function(err, suc){
       if (err) {res.status(500).json(err)}
       else{
         res.status(200).json(suc)
       }
     })
  },
   deleteProducts(req,res){
    Product.findByIdAndRemove({_id: req.params.id}, function(err, suc){
      if (err){ res.status(500).json("Error: " + err)}
      else{
        res.status(200).json(suc)
      }
    })
  }

}
