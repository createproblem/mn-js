'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    oauth_host: "@@oauth_host",
    oauth_api_key: "@@oauth_api_key",
    oauth_service: "@@oauth_service",
    oauth_api_endpoint: "@@oauth_api_endpoint"
  });
