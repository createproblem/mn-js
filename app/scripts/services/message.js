'use strict';

angular.module('services.message', []).factory('message', ['$rootScope',
  function($rootScope) {
    $rootScope.messages = [];

    return {
      add: function(type, msg) {
        $rootScope.messages.push({'type': type, 'msg': msg});
      },
      remove: function(index) {
        $rootScope.messages.splice(index, 1);
      }
    };
  }]);
