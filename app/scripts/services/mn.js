'use strict';

angular.module('mnJsApp.services', []).factory('mnService', ['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.authorizationResult = false;

    $rootScope.connectMovieNightmare = function() {
      OAuth.popup('movie_nightmare', {cache: true}, function(error, result) {
        if (!error) {
          $rootScope.authorizationResult = result;
          if (!$rootScope.$$phase) {
            $rootScope.$apply();
          }
        }
      });
    };

    $rootScope.signOut = function() {
      OAuth.clearCache('movie_nightmare');
      $rootScope.authorizationResult = false;
    };

    return {
      initialize: function() {
        OAuth.initialize('LOftudjnlI49JuNEnI8P6drvYEk', {cache: true});
        $rootScope.authorizationResult = OAuth.create('movie_nightmare');
      },
      isReady: function() {
        return $rootScope.authorizationResult;
      }
    };
  }]);
