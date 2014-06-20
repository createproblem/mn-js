'use strict';

angular.module('config', [])
  .constant('OAUTH_CONFIG', {
    'HOST': 'http://localhost:8000',
    'TOKEN_ENDPOINT': '/oauth/v2/token',
    'API_ENDPOINT': '/api',
    'CLIENT_ID': '53a1afc5554e833e208b4568_3mu5p08srp8gs8g8wcwwc48s44ocwo8wkwg40gogkg4ww0o8sg',
    'CLIENT_SECRET': '6a3hu1midm04o00kk8w0wc4s4cw4sc8skws00ww44sgwo8cg08'
  });
