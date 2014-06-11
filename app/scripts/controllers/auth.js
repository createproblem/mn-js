'use strict';

var mnjsAuthControllers = angular.module('mnjsAuthControllers', []);

mnjsAuthControllers.controller('AuthCtrl', ['$scope', 'Auth', '$location',
  function($scope, Auth, $location) {
    $scope.login = function(isValid) {
      if (isValid) {
        console.log(isValid);
        var credentials = {
          username: this.username,
          password: this.password
        };

        var success = function() {
          $location.path('/profile');
          $scope.authError = false;
        };

        var error = function() {
          $scope.errorMessage = 'Login failed';
          $scope.authError = true;
        }

        Auth.login(credentials, success, error);
      }
    };
  }]);
