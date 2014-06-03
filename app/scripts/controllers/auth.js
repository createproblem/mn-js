'use strict';

var mnjsAuthControllers = angular.module('mnjsAuthControllers', []);

mnjsAuthControllers.controller('AuthCtrl', ['$scope', 'Auth', '$location',
  function($scope, Auth, $location) {
    $scope.login = function() {
      var credentials = {
        username: this.username,
        password: this.password
      };

      var success = function() {
        $location.path('/profile');
      };

      Auth.login(credentials, success);
    };
  }]);
