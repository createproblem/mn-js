/* jshint camelcase: false */
'use strict';

angular.module('mnJsApp.controllers').controller('MovieCtrl', ['$scope', 'Movie', '$anchorScroll', 'ngProgress', '$timeout',
  function($scope, Movie, $anchorScroll, ngProgress, $timeout) {
    $scope.totalMovies = 0;
    $scope.moviesPerPage = 25;
    $scope.config = {};
    $scope.myOptions = [];
    $scope.config = {
      create: true
    };
    $scope.myModel = "";
    getResultPage(1);

    $scope.pagination = {
      current: 1
    };

    // sel stuff
    $scope.tagBox = {};
    $scope.tagData = {};
    $scope.toggleTagBox = function(movieId) {
      if ($scope.tagBox[movieId] === undefined || $scope.tagBox[movieId] === false) {
        $scope.tagBox[movieId] = true;
      } else {
        $scope.tagBox[movieId] = false;
      }
    };

    $scope.saveLabels = function(movieId) {
      var labels = $scope.tagData[movieId];
      var movie = new Movie({
        labels: labels
      });
      movie.$update({id: movieId});
    }

    $scope.pageChanged = function(newPage) {
      getResultPage(newPage);
    };

    function getResultPage(page) {
      ngProgress.start();
      Movie.paginated({
        'page': page,
        'max': $scope.moviesPerPage
      }, function(response) {
        $scope.totalMovies = response.total_results;
        $scope.movies = response.movies;
        // $timeout(function() {ngProgress.complete()});
        ngProgress.complete();

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
