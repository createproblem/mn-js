'use strict';

var mnjsControllers = angular.module('mnjsControllers', []);

mnjsControllers.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }]);
