
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

    // generate random num from 1 to 19

    var randomIndex
    vm.imgUrl = 'http://image.tmdb.org/t/p/w500/'
    vm.generateRandom = function () {
      return Math.floor(Math.random() * 20)
    }

    // show random movie image from the three categories below

    movieHubFactory.getNowPlaying()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgNowPlaying = vm.imgUrl + response[randomIndex].poster_path
        vm.titleNowPlaying = response[randomIndex].title
        vm.descNowPlaying = response[randomIndex].overview
      })
    movieHubFactory.getPopular()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgGetPopular = vm.imgUrl + response[randomIndex].poster_path
        vm.titleGetPopular = response[randomIndex].title
        vm.descGetPopular = response[randomIndex].overview
      })
    movieHubFactory.getTopRated()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgTopRated = vm.imgUrl + response[randomIndex].poster_path
        vm.titleTopRated = response[randomIndex].title
        vm.descTopRated = response[randomIndex].overview
      })
  }
})()
