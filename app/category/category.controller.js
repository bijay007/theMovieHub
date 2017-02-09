(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    movieHubFactory.getMoviesByCategory(this.categoryID)
    .then(function (data) {
      vm.movies = data
    })
  }
})()

