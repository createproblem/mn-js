'use strict';

var mnjsControllers = angular.module('mnjsControllers', []);

mnjsControllers.controller('MainCtrl', ['$scope',
  function($scope) {
  }]);

mnjsControllers.controller('AuthCtrl', ['$scope',
  function($scope) {
    $scope.login = function() {
      var credentials = {
        username: this.username,
        password: this.password
      };

      console.log(credentials);
    };
  }]);

mnjsControllers.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }]);
