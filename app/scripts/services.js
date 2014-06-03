'use strict';

var mnjsServices = angular.module('mnjsServices', ['ngResource', 'ngCookies', 'mnjsConfig']);

mnjsServices.factory('Movie', ['$resource',
  function($resource) {
    return $resource('movies/:movieId.json', {}, {
      query: {method: 'GET', params:{movieId: 'movies'}, isArray: true}
    });
  }]);

mnjsServices.factory('httpInterceptor',
  function httpInterceptor($q) {
    return function(promise) {
      var success = function(response) {
        return response;
      };

      var error = function(response) {
        if (response.status === 401) {
          console.log('Auth invalid');
        }
        return $q.reject(response);
      };

      return promise.then(success, error);
    };
  });
