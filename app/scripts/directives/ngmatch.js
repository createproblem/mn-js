'use strict';

angular.module('directives.ngMatch', []).directive('ngMatch', ['$parse',
  function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        var password = $parse(attrs['ngMatch']);
        var validator = function(value) {
          var tmp = password(scope),
          isValid = tmp === value;

          ctrl.$setValidity('match', isValid);

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
