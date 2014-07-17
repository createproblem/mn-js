'use strict';

/**
 * @ngdoc overview
 * @name mnJsApp
 * @description
 * # mnJsApp
 *
 * Main module of the application.
 */
angular
  .module('mnJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mnJsApp.services',
    'mnJsApp.directives',
    'mnJsApp.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MovieCtrl'
      })
      .when('/movies/new', {
        templateUrl: 'views/movie-new.html',
        controller: 'MovieNewCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
