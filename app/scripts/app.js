'use strict';

var mnjsApp = angular.module('mnjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'controllers'
]);

mnjsApp.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
    .when('/login', {templateUrl: 'views/auth.html', controller: 'AuthCtrl'})
    .when('/movies', {templateUrl: 'views/movie-list.html', controller: 'MovieListCtrl'})
    .when('/profile', {templateUrl: 'views/profile.html', controller: 'ProfileCtrl'})
    .when('/register', {templateUrl: 'views/register.html', controller: 'RegisterCtrl'})
    .when('/logout', { templateUrl: 'views/empty.html', controller: 'LogoutCtrl'})
    .otherwise({redirectTo: '/'});

  var interceptor = ['$location', '$q',
    function($location, $q) {
      var success = function(response) {
        return response;
      };

      var error = function(response) {
        if (response.status === 401) {
          $location.path('/login');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      };

      return function(promise) {
        return promise.then(success, error);
      };
    }];

  $httpProvider.responseInterceptors.push(interceptor);
});
