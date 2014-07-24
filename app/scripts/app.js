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
    'ngProgress',
    'angularSmoothscroll',
    'selectize',
    'services.config',
    'mnJsApp.services',
    'mnJsApp.directives',
    'mnJsApp.controllers',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MovieCtrl',
        authRequired: true
      })
      .when('/movies/new', {
        templateUrl: 'views/movie-new.html',
        controller: 'MovieNewCtrl',
        authRequired: true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', 'mnService', '$location',
    function($rootScope, mnService, $location) {
      $rootScope.$on('$routeChangeStart', function(event, next) {
        if (next.authRequired) {
          if (!mnService.isReady()) {
            $location.path('/');
          }
        }
      });
  }]);
