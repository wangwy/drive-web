'use strict';

/* Controllers */

angular.module('drive.controllers',[])
    .controller('MenuCtrl',['$scope',function($scope){
        var li1 = {"url":'#/attachment',"name":'文档管理'};
        var li2 = {"url":'#/attachmentActivity',"name":'文档行为管理'};
        var li3 = {"url":'#/device',"name":'设备管理'};
        var li4 = {"url":'#/deviceActivity',"name":'设备行为管理'};
        var menuList = [];
        menuList.push(li1);
        menuList.push(li2);
        menuList.push(li3);
        menuList.push(li4);
        $scope.menuList = menuList;

        $scope.setMenu = function(index) {
            menuList.forEach(function(item){
                item.className_ = '';
            });
            $scope.menuList[index].className_ = 'active';
        }
    }])
    .controller('AttachmentCtrl',['$scope',function($scope){
        $scope.index  = 'goodow';
        $scope.type = 'attachment';
        $scope.url = 'http://test.goodow.com:8080/eventbus';
    }])
    .controller('AttachmentActivityCtrl',['$scope',function($scope){
        $scope.index  = 'goodow';
        $scope.type = 'attachmentActivity';
        $scope.url = 'http://test.goodow.com:8080/eventbus';
    }])
    .controller('DeviceCtrl',['$scope',function($scope){
        $scope.index  = 'goodow';
        $scope.type = 'device';
        $scope.url = 'http://test.goodow.com:8080/eventbus';
    }])
    .controller('DeviceActivityCtrl',['$scope',function($scope){
        $scope.index  = 'goodow';
        $scope.type = 'deviceActivity';
        $scope.url = 'http://test.goodow.com:8080/eventbus';
    }]);
