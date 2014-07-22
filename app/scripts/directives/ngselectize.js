'use strict';

angular.module('selectize', [])
  .value('selectizeConfig', {})
  .directive("selectize", ['selectizeConfig', '$timeout', function(selectizeConfig, $timeout) {

  return {
    restrict: 'A',
    require: '^ngModel',
    template: '<input>',
    replace: true,
    scope: {
      ngShow: "="
    },
    link: function($scope, $element, attr, ngModel) {
      var show = function(value) {
        if (value) {
          $element.show();
          $timeout(function() {
            $element.selectize({
              create: true,
              labelField: "value",
              valueField: "value",
              searchField: "value",
              options: [
                {id: 1, value: "Laser Pointer"},
                {id: 2, value: "Destroy"}
              ]
            });
            $element[0].selectize.setValue("");
          });
        } else {
          if ($element[0].selectize !== undefined) {
            $element[0].selectize.destroy();
          }
          $element.hide();
        }
      };

      if (attr.hasOwnProperty("ngShow")) {
        $scope.$watch('ngShow', show);
      }
    }
  };
}]);

