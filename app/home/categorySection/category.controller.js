
(function () {
  angular
      .module('app')
      .controller('CategoryHomeController', CategoryHomeController)

  function CategoryHomeController (movieHubFactory) {
    var vm = this

    vm.categoriesOne = [
      {
        name: 'Adventure',
        id: 12
      },
      {
        name: 'Action',
        id: 28
      },
      {
        name: 'Family',
        id: 10751
      },
      {
        name: 'Horror',
        id: 27
      }
    ]

    vm.categoriesTwo = [
      {
        name: 'Animation',
        id: 16
      },
      {
        name: 'Comedy',
        id: 35
      },
      {
        name: 'Thriller',
        id: 53
      },
      {
        name: 'Romance',
        id: 10749
      }]

    vm.openCategory = function openCategory (categoryID) {
      console.log(movieHubFactory.getList(categoryID))
    }
  }
})()
