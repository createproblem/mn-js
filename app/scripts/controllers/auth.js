'use strict';

var mnjsAuthControllers = angular.module('mnjsAuthControllers', []);

mnjsAuthControllers.controller('AuthCtrl', ['$scope', 'Auth', '$location',
  function($scope, Auth, $location) {
    $scope.login = function(isValid) {
      if (isValid) {
        var credentials = {
          username: this.username,
          password: this.password
        };

        var success = function() {
          $location.path('/profile');
        };

        var error = function() {
          $scope.authError = true;
        }

        Auth.login(credentials, success, error);
      }
    };
  }]);
