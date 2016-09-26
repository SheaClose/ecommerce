const  express = require("express")
     , {json} = require("body-parser")
     , app = express()
     , port = 4000
     , cors = require("cors")
     , routes = require("./features/routes.js")
app.use(json())
app.use(cors())

routes(app)






app.listen(port, function(){
  console.log("This is Dr. Crane... I'm listening.");
})
