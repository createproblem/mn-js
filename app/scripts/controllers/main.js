'use strict';

var mnjsControllers = angular.module('mnjsControllers', []);

mnjsControllers.controller('MovieListCtrl', ['$scope',
  function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
