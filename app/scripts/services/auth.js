'use strict';

angular.module('mnjsAuth', ['mnjsConfig']).factory('Auth', ['$http', '$cookieStore', '$rootScope', 'OAUTH_CONFIG',
  function($http, $cookieStore, $rootScope, OAUTH_CONFIG) {
    $rootScope.loggedIn = false;

    return {
      login: function(credentials, callback) {
        var url = OAUTH_CONFIG.HOST + OAUTH_CONFIG.TOKEN_ENDPOINT;
        url += '?client_id=' + OAUTH_CONFIG.CLIENT_ID;
        url += '&client_secret=' + OAUTH_CONFIG.CLIENT_SECRET;
        url += '&grant_type=password';
        url += '&username=' + credentials.username;
        url += '&password=' + credentials.password;

        $http.get(url).then(function(response) {
          $cookieStore.put('token', response.data);
          $rootScope.loggedIn = true;
          callback();
        });
      },
      refresh: function() {
        var refreshToken = $cookieStore.get('token').refresh_token;

        var url = OAUTH_CONFIG.HOST + OAUTH_CONFIG.TOKEN_ENDPOINT;
        url += '?client_id=' + OAUTH_CONFIG.CLIENT_ID;
        url += '&client_secret=' + OAUTH_CONFIG.CLIENT_SECRET;
        url += '&grant_type=refresh_token';
        url += '&refresh_token=' + refreshToken;

        $http.get(url).then(function(response) {
          $cookieStore.put('token', response.data);
        });
      }
    };
  }])
  .directive('authRequired', ['$rootScope', 'Auth',
    function($rootScope, Auth) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var prevDisp = element.css('display');
          $rootScope.$watch('loggedIn', function(loggedIn) {
            if (loggedIn === true) {
              element.css('display', prevDisp);
            } else {
              element.css('display', 'none');
            }
          });
        }
      }
    }]);
