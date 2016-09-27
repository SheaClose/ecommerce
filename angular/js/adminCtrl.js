angular.module("app")
.controller("adminCtrl", function($scope, mainService){
  $scope.postedData = [];

  $scope.createNewProduct = function(){
    let newProduct = {
      title: $scope.description
      , description: $scope.size
      , price: $scope.price
    };
    mainService.createNewProduct(newProduct).then(function(response){
      $scope.postedData.push(response.data);
      getProducts()
    })
  }

  $scope.modifyProduct = function(){
    let newProduct = {}
      if ($scope.editdescription){
        newProduct.title =  $scope.editdescription
      }
      if ($scope.editsize) {
        newProduct.description = $scope.editsize
      }
      if ($scope.editprice) {
        newProduct.price =  $scope.editprice
      };
      // console.log(newProduct);
    mainService.modifyProduct(newProduct, $scope.editproductId).then(function(response){
      getProducts();
      $scope.editdescription = "";
      $scope.editsize = "";
      $scope.editprice = "";
      $scope.editproductId = "";
    })
  }
  $scope.deleteProduct = function(id){
    mainService.deleteProduct(id).then(function(){
      getProducts()
    })
  }

  function getProducts() {
    mainService.getProducts().then(function(response){
      $scope.postedData = response;
    })
  };

  getProducts();

})
