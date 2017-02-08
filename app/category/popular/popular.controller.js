(function () {
  angular.module('app')
    .controller('PopularController', PopularController)

  function PopularController ($routeParams, movieHubFactory) {
    vm = this
  }
})

