(function () {
  angular.module('app')
    .controller('CategoryController', CategoryController)

  function CategoryController ($routeParams, MovieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.genreName = $routeParams.name
    vm.genreID = parseInt(this.genreName)
    vm.genreName = vm.genreName.match(/[a-zA-Z]/g).join('')
    vm.query = ''

    MovieHubFactory.getMoviesByGenre(this.genreID)
      .then(function (data) {
        vm.movies = data
        console.log(vm.movies)
      })

    vm.sortReleasedDate = function(movie) {
      console.log(movie)
    }

  }

})()

