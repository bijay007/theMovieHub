(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, movieHubFactory) {
  	vm = this
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    movieHubFactory.getMoviesByCategory(this.categoryID)
    .then(function (data) {
      vm.movies = data
          	console.log(vm.movies)
    })
  }
})()
