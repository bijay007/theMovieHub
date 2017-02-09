/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('TopRatedController', TopRatedController)

  function TopRatedController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.filterName = 'Top Rated'
    movieHubFactory.getTopRated()
    .then(function (data) {
      vm.movies = data
    })
  }
})()

