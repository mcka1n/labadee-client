'use strict';

/**
 * @ngdoc function
 * @name labadeeClientApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the labadeeClientApp
 */
angular.module('labadeeClientApp')
  .controller('UsersCtrl', function ($scope, $rootScope, User, localStorageService) {
    $scope.current_user = localStorageService.get('token');

    $scope.signin = function() {
       User.sign_in.go({user: {email: $scope.email, password: $scope.password}} ,function(data){
         console.log("sign in sent: ", data, data.auth_token);
         if(data.success == true){
           localStorageService.set('token', data.auth_token);
           window.location = "/";
         }else{
           $rootScope.error = 'Failed to signin';
         }
       });
     };

     $scope.signup = function() {
        User.sign_up.go({user: {email: $scope.email, password: $scope.password}} ,function(data){
          console.log("sign up sent: ", data, data.auth_token);
          if(data.auth_token){
            localStorageService.set('token', data.auth_token);
            window.location = "/";
          }else{
            $rootScope.error = 'Failed to signup';
          }
        });
      };
  });
