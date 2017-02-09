/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('LatestController', LatestController)

  function LatestController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(vm.categoryName)
    vm.filterName = 'Latest'
    vm.query = ''

    movieHubFactory.getLatestGenre(vm.categoryID)
    .then(function (response) {
      vm.movies = response
    })
  }
})()
