(function () {
  angular.module('app')
    .controller('NowPlayingController', NowPlayingController)

  function NowPlayingController ($routeParams, movieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.categoryName = $routeParams.name
    vm.categoryID = parseInt(vm.categoryName)
    vm.filterName = 'Now Playing'
    vm.query = ''

    movieHubFactory.getNowPlayingGenre(vm.categoryID)
    .then(function (data) {
      vm.movies = data
    })
  }
})()

