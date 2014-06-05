'use strict';

angular.module('mnjsUser', ['ngResource']).factory('UserApi', ['$resource', '$cookieStore',
  function($resource, $cookieStore) {
    var access_token = function() {
      var token = $cookieStore.get('token') || {};
      return token.access_token;
    };

    return $resource('http://localhost:8000/api/me.json', {'access_token': access_token}, {
    });
  }]);
