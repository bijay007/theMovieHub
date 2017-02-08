(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, movieHubFactory) {
    this.categoryName = $routeParams.name
    this.categoryID = parseInt(this.categoryName)
    this.movies = movieHubFactory.getMovieList(this.categoryID)
    console.log(this.movies.$$state)
  }
})()
