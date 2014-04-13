'use strict';

/* Controllers */

angular.module('drive.controllers',['drive.services'])
.controller('Ctrl1', ['$scope',function($scope) {
       $scope.helloworld1 = 'helloworld1';
    }])
.controller('Ctrl2', ['$scope','helloworldService',function($scope,helloworldService) {
        $scope.helloworld2 = helloworldService();
    }]);
