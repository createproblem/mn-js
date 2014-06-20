'use strict';

angular.module('directives.ngmatch', []).directive('ngMatch', ['$parse',
  function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        var password = $parse(attrs['ngMatch']);
        var validator = function(value) {
          var tmp = password(scope),
          valid = tmp === value;

          ctrl.$setValidity('match', valid);

          return value;
        };

        ctrl.$parsers.unshift(validator);
        ctrl.$formatters.push(validator);

        scope.$watch(attrs['ngMatch'], function() {
          validator(ctrl.$viewValue);
        });
      }
    };
  }]);
