'use strict';

angular.module('services.loading', []).factory('loading', ['$rootScope',
  function($rootScope) {

    return {
      show: function(show) {
        $rootScope.loading = show;
      }
    };
  }]);
