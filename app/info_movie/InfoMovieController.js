

function () {
  angular.module('app')
    .controller('InfoMovieController', InfoMovieController)

  function InfoMovieController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.movieName = $routeParams.name
    vm.movieID = parseInt(vm.movieName)
    console.log(vm.movieID)
    vm.query = ''
    movieHubFactory.getMovies(vm.movieID)
    .then(function (data) {
      vm.movies = data
      
    })
  }
})()

