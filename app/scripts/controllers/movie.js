/* jshint camelcase: false */
'use strict';

angular.module('mnJsApp.controllers').controller('MovieCtrl', ['$scope', 'Movie', '$anchorScroll', 'ngProgress', '$timeout',
  function($scope, Movie, $anchorScroll, ngProgress, $timeout) {
    $scope.movies = [];
    $scope.labelData = {};
    $scope.labelBox = {};
    ngProgress.start();
    $scope.fLabels = [];
    $scope.movies = Movie.query(function(movies) {
      $.each(movies, function(i, v) {
        var labelNames = [];
        $.each(v.labels, function(j, k) {
          labelNames.push(k.name);
        });
        $scope.labelData[v.id] = labelNames.join(',');
      });
      ngProgress.complete();
    });

    $scope.toogleSelection = function(val) {
      var idx = $scope.fLabels.indexOf(val);

      if (idx > -1) {
        $scope.fLabels.splice(idx, 1);
      } else {
        $scope.fLabels.push(val);
      }
    }

    $scope.toggleTagBox = function(movieId) {
      if ($scope.labelBox[movieId] === undefined || $scope.labelBox[movieId] === false) {
        $scope.labelBox[movieId] = true;
      } else {
        $scope.labelBox[movieId] = false;
      }
    };

    $scope.save = function(movie) {
      movie.labels = [];
      var labels = $scope.labelData[movie.id].split(',');
      $.each(labels, function(k, v) {
        movie.labels.push({
          name: v
        });
      });
      movie.$update({id: movie.id});
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
