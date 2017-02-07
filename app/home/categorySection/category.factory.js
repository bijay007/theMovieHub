(function () {
  angular
    .module('app')
    .factory('movieHubFactory', movieHubFactory)

  function movieHubFactory ($http) {
    var apiKey = '0ea733e6e9ff0120779fcfb8e7b9439d'

    var objectReturn = {
      getCategoryList: getCategoryList,
      getMovieList: getMovieList,
      getMovie: getMovie,
      getPopular: getPopular,
      getNewest: getNewest,
      getTopRanked: getTopRanked
    }

    function getCategoryList (categoryID) {
      return $http.get('https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc')
    }

    function getMovieList (categoryID) {
      return $http.get('https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc')
    }

    function getMovie (categoryID) {
      return $http.get('https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc')
    }

    function getPopular () {

    }

    function getNewest () {

    }

    function getTopRanked () {

    }

    return objectReturn
  }
})()

