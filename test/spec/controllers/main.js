'use strict';

describe('mnjs controllers', function () {

  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.quals(this.actual, expected);
      }
    });
  });

  beforeEach(module('mnjsApp'));

  describe('MovieListCtrl', function() {
    var scope, ctrl

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MovieListCtrl', {$scope: scope});
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
