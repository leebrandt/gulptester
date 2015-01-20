angular.module('kcdc', ['ui.router', 'core'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    'use strict';

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'modules/core/views/home.html'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'modules/core/views/about.html'
      });

    $urlRouterProvider.otherwise('/');

  }])
  .run(function(){});
