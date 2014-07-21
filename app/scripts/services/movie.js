/* jshint camelcase: false */
'use strict';

angular.module('mnJsApp.services').factory('Movie', ['$resource', 'mnService',
  function($resource, mnService) {

    var access_token = function() {
      mnService.initialize();
      var authorizationResult = mnService.isReady();
      if (authorizationResult) {
        return authorizationResult.access_token;
      } else {
        return null;
      }
    };
    access_token();
    return $resource('http://localhost:8000/api/movies.json', {'access_token': access_token}, {
      'search': {method: 'GET', url: 'http://localhost:8000/api/tmdb/search.json'}
    });
  }]);
