angular.module("app")
.controller("productsCtrl", function($scope, mainService){
  function getProducts() {
    mainService.getProducts().then(function(response){
      console.log(response);
      $scope.products = response
    })
  };
  getProducts();
})
