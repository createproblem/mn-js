'use strict';

angular.module('controllers.movie', ['services.movie'])

.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }
])

.controller('MovieNewCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.search = function(isValid) {
      if (isValid) {
        Movie.search({query: this.query});
      }
    };
}]);
