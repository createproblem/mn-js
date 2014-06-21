'use strict';

angular.module('services.message', []).factory('message', ['$rootScope', '$q', '$timeout',
  function($rootScope, $q, $timeout) {
    $rootScope.messages = [];

    var autoRemove = function() {
      $rootScope.messages.shift();
    };

    return {
      add: function(type, msg) {
        $rootScope.messages.push({'type': type, 'msg': msg});
        // $timeout(autoRemove, 2000);
      },
      remove: function(index) {
        $rootScope.messages.splice(index, 1);
      }
    };
  }]);
