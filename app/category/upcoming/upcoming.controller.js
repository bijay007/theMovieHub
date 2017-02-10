
/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('UpcomingController', UpcomingController)

  function UpcomingController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(vm.categoryName)
    vm.filterName = 'Upcoming'
    vm.query = ''

    movieHubFactory.getUpcomingGenre(vm.categoryID)
    .then(function (data) {
      vm.movies = data
    })
  }
})()

