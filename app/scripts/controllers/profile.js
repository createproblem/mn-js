'use strict';

var mnjsProfileController = angular.module('mnjsProfileController', []);

mnjsProfileController.controller('ProfileCtrl', ['$scope', 'UserApi',
  function($scope, UserApi) {
    $scope.user = UserApi.get();
  }]);
