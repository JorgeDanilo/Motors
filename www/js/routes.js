angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
    abstract: true
  })
  .state('app.home', {
    url : '/home',
    views : {
      'menuContent' : {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })
  
  //$urlRouterProvider.otherwise('/app/home');

});
