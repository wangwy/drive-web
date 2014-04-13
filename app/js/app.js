'use strict';

// Declare app level module which depends on filters, and services
angular.module('goodow', ['ngRoute','ngTouch','goodow.controllers','goodow.services','goodow.directives','goodow.filters','goodow.ui.svg'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
//  $locationProvider.html5Mode(true).hashPrefix('');
  $routeProvider.when('/helloworld1', {templateUrl: 'partials/helloworld1.html',controller:'Ctrl1'})
      .when('/helloworld2', {templateUrl: 'partials/helloworld2.html',controller:'Ctrl2'})
      .otherwise({'redirectTo':'/index.html' });
}])
//
.run(['$templateCache',function($templateCache){
    $templateCache.put('partials/helloworld1.html',"<h1 style='color:blue;'>{{helloworld1}}</h1>");
}]);
