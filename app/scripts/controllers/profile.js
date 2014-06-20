'use strict';

angular.module('controllers.profile', ['services.user'])

.controller('ProfileCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.user = User.get();
  }]);
