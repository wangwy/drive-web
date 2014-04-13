'use strict';

/* Services */



angular.module('goodow.services', [])
  .factory('helloworldService', function(){
        return function(){
            return 'helloworld by service';
        }
  });
