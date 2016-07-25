'use strict';

/**
 * @ngdoc function
 * @name labadeeClientApp.controller:AdminsCtrl
 * @description
 * # AdminsCtrl
 * Controller of the labadeeClientApp
 */
angular.module('labadeeClientApp')
  .controller('AdminsCtrl', function ($scope, $log, $rootScope, $routeParams, User, Event, localStorageService) {
    var current_email = localStorageService.get('email');

    if(current_email == 'admin@admin.com'){
      $scope.event = Event.getEvent.query({eventId: $routeParams.event});
      // $scope.eventsAttendees = Attendee.getAttendees.go({eventId: $routeParams.event});
      $scope.allEvents = Event.getAll.query();
    }else{
     window.location = "/";
    }
  });
