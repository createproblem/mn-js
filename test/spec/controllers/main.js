'use strict';

describe('mnjs controllers', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('mnjsApp'));
  beforeEach(module('mnjsServices'));

  describe('MovieListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expect('GET', 'movies/movies.json').respond([
        {id: 1, title: '28 Weeks Later'},
        {id: 2, title: 'Underworld'}
      ]);

      scope = $rootScope.$new();
      ctrl = $controller('MovieListCtrl', {$scope: scope});
    }));

    it('should create "movies" model with 2 movies fetched from xhr', function () {
      expect(scope.movies).toEqualData([]);
      $httpBackend.flush();

      expect(scope.movies).toEqualData([
        {id: 1, title: '28 Weeks Later'},
        {id: 2, title: 'Underworld'}
      ]);
    });
  });
});
