const User = require("./User.js")
module.exports = {
  postUser(req, res){
    new User(req.body).save((err, suc)=>{
      if (err){return res.status(500).json(err)}
      else{
        return res.status(200).json(suc)
      }
    })
  }
}
