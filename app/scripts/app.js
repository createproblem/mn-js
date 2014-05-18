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
    .when('/movies', {templateUrl: 'views/movie-list.html', controller: 'MovieListCtrl'})
    .otherwise({redirectTo: '/movies'});
});
