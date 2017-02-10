
/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('PopularController', PopularController)

  function PopularController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(vm.categoryName)
    vm.filterName = 'Popular'
    vm.query = ''

    movieHubFactory.getPopularGenre(vm.categoryID)
    .then(function (response) {
      vm.movies = response
    })
  }
})()

