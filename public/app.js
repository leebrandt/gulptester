angular.module('kcdc', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    'use strict';

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'modules/home/home.html'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'modules/about/about.html'
      });

    $urlRouterProvider.otherwise('/');

  }])
  .run(function(){});
