'use strict';

/**
 * @ngdoc function
 * @name mnJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnJsApp
 */
angular.module('mnJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
