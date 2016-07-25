'use strict';

/**
 * @ngdoc service
 * @name labadeeClientApp.User
 * @description
 * # User
 * Factory in the labadeeClientApp.
 */

angular.module('labadeeClientApp')
  .factory('User', ['$resource', 'configuration',
    function($resource, configuration){
      return {
        sign_in: $resource(configuration.backend.baseUrl + 'users/sign_in', {}, {
          go: {method:'POST', isArray:false}
        }),
        sign_up: $resource(configuration.backend.baseUrl + 'users', {}, {
          go: {method:'POST', isArray:false}
        })
      }
    }
  ]);
