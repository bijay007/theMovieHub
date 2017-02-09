(function () {
  angular.module('app')
    .controller('NowPlayingController', NowPlayingController)

  function NowPlayingController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'http://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(this.categoryName)
    vm.filterName = 'Now Playing'
    vm.query = ''
    movieHubFactory.getNowPlaying()
    .then(function (data) {
      vm.movies = data
    })
  }
})()

