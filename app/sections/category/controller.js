(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, MovieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.categoryName = vm.categoryName.match(/[a-zA-Z]/g).join('')
    vm.query = ''
    MovieHubFactory.getMoviesByCategory(this.categoryID)
    .then(function (data) {
      vm.movies = data
    })
  }
})()

