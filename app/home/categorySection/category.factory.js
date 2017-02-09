/* eslint no-undef: 'off' */

(function () {
  angular
    .module('app')
    .factory('movieHubFactory', movieHubFactory)

  function movieHubFactory ($http) {
    var apiKey = '0ea733e6e9ff0120779fcfb8e7b9439d'

    var objectReturn = {
      getMoviesByCategory: getMoviesByCategory,
      getMovie: getMovie,
      getPopular: getPopular,
      getLatest: getLatest,
      getTopRated: getTopRated,
      getNowPlaying: getNowPlaying,
      getUpcoming: getUpcoming,
      getIdByCategoryName: getIdByCategoryName
    }

    function getMoviesByCategory (categoryID) {
      var url = 'https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US'
      return $http.get(url)
        .then(function (response) {
          return response.data.results
        })
    }

    function getMovie (categoryID) {
      return $http.get('https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc')
    }

    function getPopular () {
      return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '')
      .then(function (response) {
        return response.data.results
      })
    }

    function getUpcoming () {
      return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1')
        .then(function (response) {
          return response.data.results
        })
    }

    function getLatest () {
      return $http.get('https://api.themoviedb.org/3/movie/latest?api_key=' + apiKey + '&language=en-US')
      .then(function (response) {
        return response.data.results
      })
    }

    function getTopRated () {
      return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1')
      .then(function (response) {
        return response.data.results
      })
    }

    function getNowPlaying () {
      return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '')
      .then(function (response) {
        return response.data.results
      })
    }

    function getIdByCategoryName (categoryName) {
      var categories = []
      var categoryID

    //   // categories = getCategoryList()

    //   // categories.forEach(function (elem, index) {
    //   //   if (elem.name === categoryName) {
    //   //     categoryID = elem.id
    //   //   }
    //   // })

      return categoryID
    }

    return objectReturn
  }
})()

