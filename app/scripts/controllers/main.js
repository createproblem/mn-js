'use strict';

var mnjsControllers = angular.module('mnjsControllers', []);

mnjsControllers.controller('MainCtrl', ['$scope',
  function($scope) {
  }]);

mnjsControllers.controller('AuthCtrl', ['$scope', 'Authorization', '$location',
  function($scope, Authorization, $location) {
    $scope.login = function() {
      var credentials = {
        username: this.username,
        password: this.password
      };

      var success = function() {
        $location.path('/');
      };

      Authorization.login(credentials, success);
    };

    $scope.refresh = function() {
      Authorization.refresh();
    };
  }]);

mnjsControllers.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }]);
