'use strict';

var mnjsProfileController = angular.module('mnjsProfileController', []);

mnjsProfileController.controller('ProfileCtrl', ['$scope',
  function($scope) {
    console.log('message');
  }]);
