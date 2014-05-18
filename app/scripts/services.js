'use strict';

var mnjsServices = angular.module('mnjsServices', ['ngResource']);

mnjsServices.factory('Movie', ['$resource',
  function($resource) {
    return $resource('movies/:movieId.json', {}, {
      query: {method: 'GET', params:{movieId: 'movies'}, isArray: true}
    });
  }]);
