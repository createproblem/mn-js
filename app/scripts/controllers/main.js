'use strict';

/**
 * @ngdoc function
 * @name mnJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnJsApp
 */
angular.module('mnJsApp').controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.login = function() {
      OAuth.initialize('LOftudjnlI49JuNEnI8P6drvYEk');
      OAuth.popup('movie_nightmare').done(function(mn) {
        console.log(mn);
        mn.me().done(function(me) {
          console.log(me.email);
          console.log(me);
        });
      });
    };
  }]);
