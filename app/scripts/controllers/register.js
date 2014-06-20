'use strict';

angular.module('controllers.register', ['directives']).controller('RegisterCtrl', ['$scope',
  function($scope) {
    $scope.register = function(isValid) {
      if (isValid) {
        var user = {
          email: this.email,
          password: this.password
        };

        $scope.registerError = true;
      }
    };
  }]);
