'use strict';

var mnjsApp = angular.module('mnjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mnjsControllers',
  'mnjsAuthControllers',
  'mnjsProfileController',
  'mnjsServices',
  'mnjsUser',
  'mnjsAuth'
]);

mnjsApp.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .when('/login', {templateUrl: 'views/auth.html', controller: 'AuthCtrl'})
    .when('/movies', {templateUrl: 'views/movie-list.html', controller: 'MovieListCtrl'})
    .when('/profile', {templateUrl: 'views/profile.html', controller: 'ProfileCtrl'})
    .otherwise({redirectTo: '/'});

  $httpProvider.responseInterceptors.push('httpInterceptor');
});
