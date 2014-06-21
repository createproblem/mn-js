/* jshint camelcase: false */
'use strict';

angular.module('controllers.movie', ['services.movie', 'services.message'])

.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }
])

.controller('MovieNewCtrl', ['$scope', 'Movie', 'message',
  function($scope, Movie, message) {
        message.add('success', 'Could not add movie.');
        message.add('success', 'Could not add movie.');

    $scope.addMovie = function(movieData) {
      var movie = new Movie({
        tmdbId: movieData.id
      });

      var success = function() {
      };

      var error = function() {
        message.add('success', 'Could not add movie.');
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
