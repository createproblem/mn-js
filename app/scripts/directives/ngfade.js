'use strict';

angular.module('directives.ngFade', []).directive('ngFade', [
  function() {
    return {
      link: function(scope, element) {
        element['fadeOut'](2000);
      }
    };
  }]);
