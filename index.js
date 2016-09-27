const  express = require("express")
     , {json} = require("body-parser")
     , app = express()
     , port = 4000
     , cors = require("cors")
     , routes = require("./features/routes.js")
     , mongoose = require("mongoose")
     , mongoUri = "mongodb://localhost:27017/ecommerce"
app.use(json())
app.use(cors())
app.use(express.static("angular"))
routes(app)

mongoose.connect(mongoUri);
mongoose.connection.once("open", function(){console.log(`connected to MongoDb @ ${mongoUri}`)})

app.listen(port, function(){
  console.log("This is Dr. Crane... I'm listening.");
})
