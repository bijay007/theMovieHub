/*eslint no-undef: 'off' */

(function () {
  angular.module('app')
    .controller('LatestController', LatestController)

  function LatestController ($routeParams, movieHubFactory) {
    vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.filterName = 'Popular'
    movieHubFactory.getPopular()
    .then(function (data) {
      vm.movies = data.results
      console.log(vm.movies)
  }
})