angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/app/home/home.template.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .when('/category/:name', {
        templateUrl: '/app/category/category.template.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .otherwise('/home')
  })
