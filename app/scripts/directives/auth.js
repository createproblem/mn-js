'use strict';

angular.module('mnJsApp.directives').directive('authRequired', ['$rootScope', 'mnService',
  function($rootScope, mnService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        mnService.initialize();
        var prevDisp = element.css('display');
        $rootScope.$watch('authorizationResult', function(loggedIn) {
          if (loggedIn) {
            element.css('display', prevDisp);
          } else {
            element.css('display', 'none');
          }
        });
      }
    };
  }])
.directive('authNotRequired', ['$rootScope', 'mnService',
  function($rootScope, mnService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        mnService.initialize();
        var prevDisp = element.css('display');
        $rootScope.$watch('authorizationResult', function(loggedIn) {
          if (!loggedIn) {
            element.css('display', prevDisp);
          } else {
            element.css('display', 'none');
          }
        });
      }
    };
  }]);
