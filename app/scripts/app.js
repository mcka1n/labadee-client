'use strict';

/**
 * @ngdoc overview
 * @name labadeeClientApp
 * @description
 * # labadeeClientApp
 *
 * Main module of the application.
 */
angular
  .module('labadeeClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'LocalStorageModule',
    'servicesConfig'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard/_list.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($httpProvider){
  // Intercepts every http request.  If the response is success, pass it through.
  // If the response is an
  // error, and that error is 401 (unauthorised) then the user isn't logged in,
  // redirect to the login page =).
  var interceptor = function($q, $location, localStorageService, configuration) {
    return {
      'request': function(config) {
        if(config.url.indexOf("views") > -1){
          // Do nothing because it's a local call
          console.log("[interceptor][info] inside views if!", config.url);
        }else{
          var token = localStorageService.get('token');
          console.log("[interceptor][debug] habemus token? ", token);
          if (token) {
            config.url = config.url + '?key=' + configuration.backend.key + "&token=" + token;
            console.log("[interceptor] config: ", config.url);
          }else{
            config.url = config.url + '?key=' + configuration.backend.key;
            console.log("[interceptor] config with just key: ", config.url);
          }
        }

        return config;
      },
      'responseError': function(response) {
          if(response.status === 401 || response.status === 403) {
              localStorageService.set('token', '');
              $location.path('/signin');
          }
          return $q.reject(response);
      }
    };
  };
  $httpProvider.interceptors.push(interceptor);
  });
