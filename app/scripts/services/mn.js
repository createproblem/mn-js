'use strict';

angular.module('mnJsApp.services', []).factory('mnService', ['$rootScope',
  function($rootScope) {
    $rootScope.authorizationResult = false;

    $rootScope.connectMovieNightmare = function() {
      OAuth.popup('movie_nightmare_dev', {cache: true}, function(error, result) {
        if (!error) {
          $rootScope.authorizationResult = result;
          if (!$rootScope.$$phase) {
            $rootScope.$apply();
          }
        }
      });
    };

    $rootScope.signOut = function() {
      OAuth.clearCache('movie_nightmare_dev');
      $rootScope.authorizationResult = false;
    };

    return {
      initialize: function() {
        OAuth.initialize('H1PwfA3J3bTlgp2AeigdnMyCkPs', {cache: true});
        $rootScope.authorizationResult = OAuth.create('movie_nightmare_dev');
      },
      isReady: function() {
        return $rootScope.authorizationResult;
      }
    };
  }]);
