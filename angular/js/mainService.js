angular.module("app")
.service("mainService", function($http){
  const url = "http://localhost:4000/api/products/";

  this.getProducts = function(){
    return $http.get(url).then(function(response){
      return response.data;
    })
  }
  this.createNewProduct = function(obj){
    return $http.post(url, obj).then(function(response){
      return response.data;
    })
  }
  this.modifyProduct = function(obj, id){
    return $http.put(url + id, obj).then(function(response){
      return response.data
    })
  }
  this.deleteProduct = function(id){
    console.log(url + id);
    return $http.delete(url + id)
  }
})
