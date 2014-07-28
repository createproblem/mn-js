'use strict';

angular.module('mnJsApp.filters').filter('selectedLabels', [
  function() {
    return function(movies, labels) {
      if (labels.length === 0) {
        return movies;
      }

      return movies.filter(function(movie) {
        if (labels.indexOf('-no-labels-') !== -1) {
          if (movie.labels.length === 0) {
            return true;
          }
        }

        for (var i in movie.labels) {
          if (labels.indexOf(movie.labels[i].name) !== -1) {
            return true;
          }
        }
        return false;
      });
    };
}]);
