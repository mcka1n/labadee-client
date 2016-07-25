'use strict';

/**
 * @ngdoc function
 * @name labadeeClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the labadeeClientApp
 */
angular.module('labadeeClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.sampleText = 'Im a beautiful text!';

    $scope.awesomeThings2 = [
        'HTML5 Boilerplate',
        'AngularJS',
        'At&T'
      ];
  });
