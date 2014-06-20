'use strict';

angular.module('services.movie', ['ngResource', 'mnjsConfig']).factory('Movie', ['$resource', '$cookieStore', 'OAUTH_CONFIG',
  function($resource, $cookieStore, OAUTH_CONFIG) {
    var access_token = function() {
      var token = $cookieStore.get('token') || {};
      return token.access_token;
    };

    return $resource(OAUTH_CONFIG.HOST+'/api/movies.json', {'access_token': access_token}, {});
  }]);
