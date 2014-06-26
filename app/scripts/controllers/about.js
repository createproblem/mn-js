'use strict';

/**
 * @ngdoc function
 * @name mnJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mnJsApp
 */
angular.module('mnJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
