/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('TopRatedController', TopRatedController)

  function TopRatedController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(vm.categoryName)
    vm.filterName = 'Top Rated'
    vm.query = ''

    movieHubFactory.getTopRatedGenre(vm.categoryID)
    .then(function (data) {
      vm.movies = data
    })
  }
})()

