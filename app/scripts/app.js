'use strict';

var mnjsApp = angular.module('mnjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mnjsControllers',
  'mnjsServices'
]);

mnjsApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .when('/login', {templateUrl: 'views/auth.html', controller: 'AuthCtrl'})
    .when('/movies', {templateUrl: 'views/movie-list.html', controller: 'MovieListCtrl'})
    .otherwise({redirectTo: '/'});
});
