angular.module('kcdc')
  .controller('HomeCtrl', ['$scope', function($scope){
    'use strict';
    console.log('homeCtrl');
    
    $scope.message = 'I am in your home page';

  }]);
