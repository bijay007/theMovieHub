(function () {
  angular.module('app')
    .controller('InfoMovieController', InfoMovieController)

  function InfoMovieController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.movieName = $routeParams.name
    vm.movieID = parseInt(vm.movieName)
    vm.query = ''
    movieHubFactory.getInfoMovie(vm.movieID)
    .then(function (data) {
      vm.movie = data
    })
  }
})()

