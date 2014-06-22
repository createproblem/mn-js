'use strict';

angular.module('directives.ngLoading', []).directive('ngLoading', ['$rootScope',
  function($rootScope) {
    $rootScope.loading = false;

    return {
      restrict: 'A',
      link: function(scope, element) {
        $rootScope.$watch('loading', function(loading) {
          if (loading === false) {
            element.css('display', 'none');
          } else {
            element.css('display', 'block');
          }
        });
      }
    };
  }]);
