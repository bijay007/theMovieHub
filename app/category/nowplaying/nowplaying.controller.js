(function () {
  angular.module('app')
    .controller('NowPlayingController', NowPlayingController)

  function NowPlayingController ($routeParams, movieHubFactory) {
    vm = this
  }
})

