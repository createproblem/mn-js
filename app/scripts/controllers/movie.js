/* jshint camelcase: false */
'use strict';

angular.module('controllers.movie', ['services.movie', 'services.message', 'services.loading'])

.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }
])

.controller('MovieNewCtrl', ['$scope', 'Movie', 'message', 'loading',
  function($scope, Movie, message, loading) {
    $scope.addMovie = function(movieData) {
      loading.show(true);
      var movie = new Movie({
        tmdbId: movieData.id
      });

      var success = function(movie) {
        loading.show(false);
        var releaseDate = new Date(movie.release_date);
        var msg = movie.title + ' (' + releaseDate.getFullYear() + ') added';
        message.add('success', msg);
      };

      var error = function(response) {
        loading.show(false);
        message.add('error', response.data[0].message);
      };

      movie.$save(null, success, error);
    };

    $scope.search = function(isValid) {
      if (isValid) {
        loading.show(true);
        Movie.search({query: this.query}, function(response) {
          loading.show(false);
          $scope.movies = response.movies;
          $scope.totalResults = response.total_results;
        });
      }
    };
  }]);
