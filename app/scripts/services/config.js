'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    oauth_host: "http://localhost:8000",
    oauth_api_key: "H1PwfA3J3bTlgp2AeigdnMyCkPs",
    oauth_service: "movie_nightmare_dev",
    oauth_api_endpoint: "/api"
  });
