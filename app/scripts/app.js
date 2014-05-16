'use strict';

var mnjsApp = angular.module('mnjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mnjsControllers'
]);

mnjsApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MovieListCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
