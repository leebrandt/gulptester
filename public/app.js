angular.module('kcdc', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    'use strict';

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'components/home/home.html'
      });

    $urlRouterProvider.otherwise('/');

  }])
  .run(function(){});
