const  express = require("express")
     , {json} = require("body-parser")
     , app = express()
     , port = 4000
     , mongo = require("mongojs")
     , db = mongo("ecommerce", ["products"])
     , cors = require("cors")
app.use(json())
app.use(cors())


app.get("/api/products", function(req,res){
  let query = req.query;
  db.products.find(query, function(err, suc){
    if (err){ res.status(500).json("error: " + err)}
    else {
      res.status(200).json(suc)
    }
  })
})
app.get("/api/products/:id", function(req,res){
  db.products.find(mongo.ObjectId(req.params.id), function(err,suc){
    if (err){ res.status(500).json(err) };
      res.status(200).json(suc)
  })
})
app.post("/api/products", function(req,res){
  db.products.save(req.body, function(err, suc){
    if (!err){
      res.status(200).json(suc)
    }
    else {
      res.status(500).json("Error: " + err)
    }
  })
})
app.put("/api/products/:id", function(req,res){
  console.log("PUT!!")
})
app.delete("/api/products/:id", function(req,res){
  console.log("DELETE!!")
})





app.listen(port, function(){
  console.log("This is Dr. Crane... I'm listening.");
})
