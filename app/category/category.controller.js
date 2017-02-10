(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.categoryName = vm.categoryName.match(/[a-zA-Z]/g).join('')
    vm.query = ''
    movieHubFactory.getMoviesByCategory(this.categoryID)
    .then(function (data) {
      vm.movies = data
    })
  }
})()

