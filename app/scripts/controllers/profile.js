'use strict';

angular.module('controllers.profile', [])

.controller('ProfileCtrl', ['$scope', 'UserApi',
  function($scope, UserApi) {
    $scope.user = UserApi.get();
  }]);
