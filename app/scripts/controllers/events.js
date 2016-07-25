'use strict';

/**
 * @ngdoc function
 * @name labadeeClientApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the labadeeClientApp
 */
angular.module('labadeeClientApp')
  .controller('EventsCtrl', function ($scope, $log, $rootScope, $routeParams, User, Event) {
    $scope.events_default = [
        'Event Name #1',
        'Event Name #2',
        'Event Name #3'
      ];

    $scope.event = Event.getEvent.query({eventId: $routeParams.event});
    // $scope.eventsAttendees = Attendee.getAttendees.go({eventId: $routeParams.event});
    $scope.allEvents = Event.getAll.query();

  });
