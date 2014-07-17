'use strict';

angular.module('mnJsApp.controllers').controller('MovieCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }])
.controller('MovieNewCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.addMovie = function(movieData) {
      var movie = new Movie({
        tmdbId: movieData.id
      });

      var success = function(movie) {
        console.log(movie);
      };

      var error = function(response) {
        console.log(response);
      };

      movie.$save(null, success, error);
    };

    $scope.search = function(isValid) {
      if (isValid) {
        Movie.search({query: this.query}, function(response) {
          $scope.movies = response.movies;
          $scope.totalResults = response.total_results;
        });
      }
    };
  }]);
