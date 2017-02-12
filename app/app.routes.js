angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/sections/home/home.template.html',
        controller: 'CategoryHomeController',
        controllerAs: 'vm'
      })
      .when('/category/:name', {
        templateUrl: 'app/sections/category/category.template.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .when('/info_movie/:name', {
        templateUrl: 'app/sections/info_movie/info.movie.template.html',
        controller: 'InfoMovieController',
        controllerAs: 'vm'
      })
      .otherwise('/home')
  })
