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
      getTopRanked: getTopRanked,
      getIdByCategoryName: getIdByCategoryName
    }

    function getCategoryList () {
      var url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US)'
      var categories = $http.get(url)
      console.log(categories)
      return categories
    }

    function getMovieList (categoryID) {
      var movies = $http.get('https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc')
      return movies
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

    function getIdByCategoryName (categoryName) {
      var categories = []
      var categoryID

      // categories = getCategoryList()

      // categories.forEach(function (elem, index) {
      //   if (elem.name === categoryName) {
      //     categoryID = elem.id
      //   }
      // })

      return categoryID
    }

    return objectReturn
  }
})()

