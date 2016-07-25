'use strict';

angular.module('servicesConfig', [])
  .constant('configuration', {
    backend: JSON.parse('@@backend')
  });
