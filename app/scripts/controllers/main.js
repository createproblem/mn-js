'use strict';

/**
 * @ngdoc function
 * @name mnJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnJsApp
 */
angular.module('mnJsApp.controllers').controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.myModel = 1;

    $scope.myOptions = [
      {value: 1, text: 'Spectrometer'},
      {value: 2, text: 'Star Chart'},
      {value: 3, text: 'Laser Pointer'}
    ];

    $scope.config = {
      create: true
    }
  }]);
