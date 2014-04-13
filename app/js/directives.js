'use strict';

/* Directives */


angular.module('goodow.directives', ['goodow.controllers'])
.directive('helloworld', function() {
    return {
        restrict:'E',
        controller:'Ctrl2',
        replace:'true',
        templateUrl:'partials/helloworldDirective.html'
    }
  });
