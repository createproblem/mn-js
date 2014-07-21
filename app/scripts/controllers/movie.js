/* jshint camelcase: false */
'use strict';

angular.module('mnJsApp.controllers').controller('MovieCtrl', ['$scope', 'Movie', '$anchorScroll',
  function($scope, Movie, $anchorScroll) {
    $scope.totalMovies = 0;
    $scope.moviesPerPage = 25;

    getResultPage(1);

    $scope.pagination = {
      current: 1
    };

    $scope.pageChanged = function(newPage) {
      getResultPage(newPage);
    };

    function getResultPage(page) {
      Movie.paginated({
        'page': page,
        'max': $scope.moviesPerPage
      }, function(response) {
        $scope.totalMovies = response.total_results;
        $scope.movies = response.movies;

        $anchorScroll();
      });
    };
  }])
.controller('MovieNewCtrl', ['$scope', 'Movie', 'Message',
  function($scope, Movie, Message) {
    $scope.addMovie = function(movieData) {
      var movie = new Movie({
        tmdbId: movieData.id
      });

      var success = function(movie) {
        var releaseDate = new Date(movie.release_date);
        var msg = movie.title + ' (' + releaseDate.getFullYear() + ') added';
        Message.add('success', msg);
      };

      var error = function(response) {
        Message.add('error', response.data[0].message);
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
