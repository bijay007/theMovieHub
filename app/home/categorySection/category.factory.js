/* eslint no-undef: 'off' */

(function () {
  angular
    .module('app')
    .factory('movieHubFactory', movieHubFactory)

  function movieHubFactory ($http) {
    var apiKey = '0ea733e6e9ff0120779fcfb8e7b9439d'

    var objectReturn = {
      getMoviesByCategory: getMoviesByCategory,
      // getMovie: getMovie,
      getPopular: getPopular,
      getTopRated: getTopRated,
      getNowPlaying: getNowPlaying,
      getPopularGenre: getPopularGenre,
      getUpcomingGenre: getUpcomingGenre,
      getLatestGenre: getLatestGenre,
      getTopRatedGenre: getTopRatedGenre,
      getNowPlayingGenre: getNowPlayingGenre,
      getInfoMovie: getInfoMovie,
      getIdByCategoryName: getIdByCategoryName
    }

    function getMoviesByCategory (categoryID) {
      var url = 'https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US'
      return $http.get(url)
        .then(function (response) {
          return response.data.results
        })
    }

    // function getMovie (categoryID) {
    //   return $http.get('https://api.themoviedb.org/3/genre/' + categoryID + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc')
    //     .then(function (response) {
    //       return response.data.results
    //     })
    // }
// ****** get most popular, upcoming and toprated of all movies for Carrusel in home page ***//
    function getPopular () {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US'
      return $http.get(url)
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

//* ** popular movies of genre having id 'categoryID' for page 2 **//
    function getPopularGenre (categoryID) {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US'
      return $http.get(url)
              .then(function (response) {
                return response.data.results
              })
      .then(function (response) {
        return response.filter(function (movie) {
          return movie.genre_ids.indexOf(categoryID) !== -1
        })
      })
    }

    function getUpcomingGenre (categoryID) {
      return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1')
        .then(function (response) {
          return response.data.results
        })
      .then(function (response) {
        return response.filter(function (movie) {
          return movie.genre_ids.indexOf(categoryID) !== -1
        })
      })
    }

    function getLatestGenre (categoryID) {
      return $http.get('https://api.themoviedb.org/3/movie/latest?api_key=' + apiKey + '&language=en-US')
      .then(function (response) {
        return response.data.results
      })
      .then(function (response) {
        return response.filter(function (movie) {
          return movie.genre_ids.indexOf(categoryID) !== -1
        })
      })
    }

    function getTopRatedGenre (categoryID) {
      return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1')
      .then(function (response) {
        return response.data.results
      })
      .then(function (response) {
        return response.filter(function (movie) {
          return movie.genre_ids.indexOf(categoryID) !== -1
        })
      })
    }

    function getNowPlayingGenre (categoryID) {
      return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '')
      .then(function (response) {
        return response.data.results
      })
      .then(function (response) {
        return response.filter(function (movie) {
          return movie.genre_ids.indexOf(categoryID) !== -1
        })
      })
    }

    function getInfoMovie (filmID) {
      return $http.get('https://api.themoviedb.org/3/movie/' + filmID + '?api_key=' + apiKey + '&language=en-US')
      .then(function (response) {
        return response.data
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
      console.log(categoryID + ' is ID returned')
      return categoryID
    }

    return objectReturn
  }
})()

