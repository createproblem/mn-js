/* jshint camelcase: false */
'use strict';

angular.module('mnJsApp.controllers').controller('MovieCtrl', ['$scope', 'Movie', '$anchorScroll', 'ngProgress', 'Label',
  function($scope, Movie, $anchorScroll, ngProgress, Label) {
    ngProgress.start();

    $scope.movies = [];
    $scope.labels = [];
    $scope.labelData = {};
    $scope.labelBox = {};
    $scope.sLabels = [];

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

    $scope.labels = Label.query();

    $scope.toggleSelection = function(val) {
      var idx = $scope.sLabels.indexOf(val);

      if (idx > -1) {
        $scope.sLabels.splice(idx, 1);
      } else {
        $scope.sLabels.push(val);
      }
    };

    $scope.resetLabelSelection = function() {
      $scope.sLabels.splice(0, $scope.labels.length);
    };

    $scope.toggleLabelBox = function(movieId) {
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
