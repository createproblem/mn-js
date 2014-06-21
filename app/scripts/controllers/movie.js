/* jshint camelcase: false */
'use strict';

angular.module('controllers.movie', ['services.movie'])

.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }
])

.controller('MovieNewCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.addMovie = function(movieData) {
      var movie = new Movie({
        tmdbId: movieData.id
      });

      var success = function() {
        $scope.success = true;
      };

      var error = function() {
        $scope.error = true;
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
