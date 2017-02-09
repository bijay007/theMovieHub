angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/app/home/home.template.html',
        controller: 'CategoryHomeController',
        controllerAs: 'vm'
      })
      .when('/category/:name', {
        templateUrl: '/app/category/category.template.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .when('/category/:name/popular', {
        templateUrl: '/app/category/popular/popular.template.html',
        controller: 'PopularController',
        controllerAs: 'vm'
      })
      .when('/category/:name/upcoming', {
        templateUrl: '/app/category/upcoming/upcoming.template.html',
        controller: 'UpcomingController',
        controllerAs: 'vm'
      })
      .when('/category/:name/latest', {
        templateUrl: '/app/category/latest/latest.template.html',
        controller: 'LatestController',
        controllerAs: 'vm'
      })
      .when('/category/:name/toprated', {
        templateUrl: '/app/category/toprated/toprated.template.html',
        controller: 'TopRatedController',
        controllerAs: 'vm'
      })
      .when('/category/:name/nowplaying', {
        templateUrl: '/app/category/nowplaying/nowplaying.template.html',
        controller: 'NowPlayingController',
        controllerAs: 'vm'
      })
       .when('/info_movie/:name', {
         templateUrl: '/app/info_movie/info.movie.template.html',
         controller: 'InfoMovieController',
         controllerAs: 'vm'
       })

      .otherwise('/home')
  })
