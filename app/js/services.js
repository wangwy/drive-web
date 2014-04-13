'use strict';

/* Services */



angular.module('drive.services', [])
  .factory('helloworldService', function(){
        return function(){
            return 'helloworld by service';
        }
  });
