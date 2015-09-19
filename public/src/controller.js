angular.module('MainApp')
.controller('ResultsController', function($scope){
	$scope.message = "Hello Results!";
})
.controller('HomeController', function($scope){
	$scope.message = "Hello Home!";
})
.controller('CourseController', function($scope){
	$scope.message = "Hello Course!";
})
.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Marathon',
            url: 'one.tpl.html'
        }, {
            title: 'Half Marathon',
            url: 'two.tpl.html'
        }, {
            title: '5k',
            url: 'three.tpl.html'
    	},{
            title: '10k',
            url: 'four.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
