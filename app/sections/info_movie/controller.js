(function () {
  angular.module('app')
    .controller('InfoMovieController', InfoMovieController)

  function InfoMovieController ($routeParams, MovieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.movieName = $routeParams.name
    vm.movieID = parseInt(vm.movieName)
    vm.query = ''
    MovieHubFactory.getInfoMovie(vm.movieID)
    .then(function (data) {
      vm.movie = data
    })
  }
})()

