'use strict';

angular.module('mnJsApp.services').factory('Label', ['$resource', 'mnService', 'configuration',
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

    return $resource(url() + '/labels/:id.json', {'access_token': access_token}, {});
  }]);
