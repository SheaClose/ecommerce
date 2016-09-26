const ctrl = require("./controller.js")
module.exports = app => {
  app.get("/api/products", ctrl.getProducts);
  app.get("/api/products/:id", ctrl.getProductsById);
  app.post("/api/products", ctrl.postToProducts);
  app.put("/api/products/:id", ctrl.putProducts);
  app.delete("/api/products/:id", ctrl.deleteProducts);
}
