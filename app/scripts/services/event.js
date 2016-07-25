'use strict';

/**
 * @ngdoc service
 * @name labadeeClientApp.Event
 * @description
 * # Event
 * Factory in the labadeeClientApp.
 */

angular.module('labadeeClientApp')
  .factory('Event', ['$resource', 'configuration',
    function($resource, configuration){
      // console.log("* Hello world [debug]: ", configuration);
      return {
        getEvent: $resource(configuration.backend.baseUrl + 'events/:eventId', {}, {
          query: {method:'GET', params:{thing_id:'@eventId'}, isArray:false}
        }),
        getAll: $resource(configuration.backend.baseUrl + 'events', {}, {
          query: {method:'GET', params:{}, isArray:true}
        }),
        createEvent: $resource(configuration.backend.baseUrl + 'events', {}, {
          go: {method:'POST', params:{}, isArray:false}
        })
      };
    }
  ]);
