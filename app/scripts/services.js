'use strict';

var mnjsServices = angular.module('mnjsServices', ['ngResource', 'ngCookies', 'mnjsConfig']);

mnjsServices.factory('Movie', ['$resource',
  function($resource) {
    return $resource('movies/:movieId.json', {}, {
      query: {method: 'GET', params:{movieId: 'movies'}, isArray: true}
    });
  }]);

mnjsServices.factory('Authorization', ['$http', '$cookieStore', 'OAUTH_CONFIG',
  function($http, $cookieStore, OAUTH_CONFIG) {
    return {
      login: function(credentials, callback) {
        var url = OAUTH_CONFIG.HOST + OAUTH_CONFIG.TOKEN_ENDPOINT;
        url += '?client_id=' + OAUTH_CONFIG.CLIENT_ID;
        url += '&client_secret=' + OAUTH_CONFIG.CLIENT_SECRET;
        url += '&grant_type=password';
        url += '&username=' + credentials.username;
        url += '&password=' + credentials.password;

        $http.get(url).then(function(response) {
          $cookieStore.put('token', response.data);
          callback();
        });
      },
      refresh: function() {
        var refreshToken = $cookieStore.get('token').refresh_token;

        var url = OAUTH_CONFIG.HOST + OAUTH_CONFIG.TOKEN_ENDPOINT;
        url += '?client_id=' + OAUTH_CONFIG.CLIENT_ID;
        url += '&client_secret=' + OAUTH_CONFIG.CLIENT_SECRET;
        url += '&grant_type=refresh_token';
        url += '&refresh_token=' + refreshToken;

        $http.get(url).then(function(response) {
          $cookieStore.put('token', response.data);
        });
      }
    };
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
        return q.reject(response);
      };

      return promise.then(success, error);
    };
  });
