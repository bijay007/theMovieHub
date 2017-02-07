(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, movieHubFactory) {
    this.categoryName = $routeParams.name
  }
})()
