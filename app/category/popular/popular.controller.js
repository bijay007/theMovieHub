/* eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('PopularController', PopularController)

  function PopularController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.filterName = 'Popular'
    movieHubFactory.getPopular()
    .then(function (data) {
      vm.movies = data
    })
  }
})()

