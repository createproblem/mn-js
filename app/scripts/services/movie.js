/* jshint camelcase: false */
'use strict';

angular.module('mnJsApp.services').factory('Movie', ['$resource', 'mnService', 'configuration',
  function($resource, mnService, configuration) {

    var access_token = function() {
      mnService.initialize();
      var authorizationResult = mnService.isReady();
      if (authorizationResult) {
        return authorizationResult.access_token;
      } else {
        return null;
      }
    };

    var url = function() {
      return configuration.oauth_host + configuration.oauth_api_endpoint;
    }

    return $resource(url() + '/movies/:id.json', {'access_token': access_token}, {
      'search': {method: 'GET', url: url() + '/tmdb/search.json'},
      'paginated':  {method:'GET', isArray: false},
      'labels': {method: 'GET', url: url() + '/labels.json', isArray: true},
      'update': {method: 'PUT'},
    });
  }]);
