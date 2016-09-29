const userCtrl = require("./userCtrl.js")
module.exports = app => {
  app.post("/api/users", userCtrl.postUser);
}
