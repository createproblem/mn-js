'use strict';

angular.module('mnJsApp.directives').directive('ngFade', ['$timeout',
  function($timeout) {
    return {
      link: function(scope, element) {
        $timeout(function() {
          element.fadeOut(1000);
        }, 2000);
      }
    };
  }]);
