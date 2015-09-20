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
            title: '10k',
            url: 'three.tpl.html'
    	},{
            title: '5k',
            url: 'four.tpl.html'
        },{
            title: 'Race Fees',
            url: 'five.tpl.html'
        },{
            title: 'Lodging',
            url: 'six.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
