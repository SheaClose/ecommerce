angular.module("app", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url : "/"
    , templateUrl : "../views/homeTmpl.html"
  })
  .state("Products", {
    url: "/products"
    , templateUrl: "../views/productsTmpl.html"
    , controller: "productsCtrl"
  })
  .state("Admin", {
    url: "/admin"
    , templateUrl: "../views/adminTmpl.html"
    , controller: "adminCtrl"
  })
})
