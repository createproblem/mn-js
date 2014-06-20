'use strict';

angular.module('directives.ngMatch', []).directive('ngMatch', ['$parse',
  function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        var password = $parse(attrs['ng.Match']);
        var validator = function(value) {
          var tmp = password(scope),
          isValid = tmp === value;

          ctrl.$setValidity('match', isValid);

          return value;
        };

        ctrl.$parsers.unshift(validator);
        ctrl.$formatters.push(validator);

        scope.$watch(attrs['ng.Match'], function() {
          validator(ctrl.$viewValue);
        });
      }
    };
  }]);
