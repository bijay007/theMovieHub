/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('UpcomingController', UpcomingController)

  function UpcomingController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.filterName = 'Upcoming'
    movieHubFactory.getUpcoming()
    .then(function (data) {
      vm.movies = data
    })
  }
})()

