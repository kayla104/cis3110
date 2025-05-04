var app = angular.module('healthApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/detail/:doctorId', {
      templateUrl: 'views/detail.html',
      controller: 'DetailController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
