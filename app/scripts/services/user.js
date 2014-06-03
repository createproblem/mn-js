'use strict';

angular.module('mnjsUser', ['ngResource']).factory('UserApi', ['$resource', '$cookieStore',
  function($resource, $cookieStore) {
    var token = $cookieStore.get('token');
    if (token === undefined) {
      return false;
    }
    var access_token = token.access_token;
    return $resource('http://localhost:8000/api/me.json', {'access_token': access_token}, {
    });
  }]);
