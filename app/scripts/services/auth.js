'use strict';

angular.module('mnjsAuth', ['mnjsConfig']).factory('Auth', ['$http', '$cookieStore', '$rootScope', 'OAUTH_CONFIG',
  function($http, $cookieStore, $rootScope, OAUTH_CONFIG) {
    $rootScope.loggedIn = false;

    var token = $cookieStore.get('token');
    if (token !== undefined) {
      var now = new Date();
      var expiresAt = new Date(token.expires_at);
      if (now < expiresAt) {
        $rootScope.loggedIn = true;
      }
    }

    var calcExpireDate = function(expiresIn) {
      var date = new Date();
      date.setSeconds(date.getSeconds() + expiresIn);
      return date;
    }

    return {
      login: function(credentials, successCallback, errorCallback) {
        var url = OAUTH_CONFIG.HOST + OAUTH_CONFIG.TOKEN_ENDPOINT;
        url += '?client_id=' + OAUTH_CONFIG.CLIENT_ID;
        url += '&client_secret=' + OAUTH_CONFIG.CLIENT_SECRET;
        url += '&grant_type=password';
        url += '&username=' + credentials.username;
        url += '&password=' + credentials.password;

        $http.get(url).then(function(response) {
          var token = response.data;
          token.expires_at = calcExpireDate(token.expires_in);

          $cookieStore.put('token', token);
          $rootScope.loggedIn = true;

          successCallback();
        }, function(response) {
          errorCallback();
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
          var token = response.data;
          token.expires_at = calcExpireDate(token.expires_in);
          $cookieStore.put('token', token);
          $rootScope.loggedIn = true;
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
    }])
  .directive('authAnonymouse', ['$rootScope', 'Auth',
    function($rootScope, Auth) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var prevDisp = element.css('display');
          $rootScope.$watch('loggedIn', function(loggedIn) {
            if (loggedIn === false) {
              element.css('display', prevDisp);
            } else {
              element.css('display', 'none');
            }
          });
        }
      }
    }]);
