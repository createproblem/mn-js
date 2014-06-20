'use strict';

angular.module('controllers.movie', ['services.movie'])

.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }]);
