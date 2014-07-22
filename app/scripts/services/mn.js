'use strict';

angular.module('mnJsApp.services').factory('mnService', ['$rootScope', 'configuration',
  function($rootScope, configuration) {
    $rootScope.authorizationResult = false;

    $rootScope.connectMovieNightmare = function() {
      OAuth.popup(configuration.oauth_service, {cache: true}, function(error, result) {
        if (!error) {
          $rootScope.authorizationResult = result;
          if (!$rootScope.$$phase) {
            $rootScope.$apply();
          }
        }
      });
    };

    $rootScope.signOut = function() {
      OAuth.clearCache(configuration.oauth_service);
      $rootScope.authorizationResult = false;
    };

    return {
      initialize: function() {
        OAuth.initialize(configuration.oauth_api_key, {cache: true});
        $rootScope.authorizationResult = OAuth.create(configuration.oauth_service);
      },
      isReady: function() {
        return $rootScope.authorizationResult;
      }
    };
  }]);
