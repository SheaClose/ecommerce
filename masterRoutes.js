const routes = require("./features/Products/routes.js");
// const orders = require("./features/orders/orderRoutes.js")
// const cart = require("./features/cart/cartRoutes.js")
const userRoutes = require("./features/User/userRoutes.js")
module.exports = app => {
  routes(app);
  // orders(app);
  // cart(app);
  userRoutes(app);
}
