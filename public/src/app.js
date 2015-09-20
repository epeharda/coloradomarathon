angular.module('MainApp',['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider){
	$routeProvider	
		.when('/',{
			templateUrl:'views/home.html',
			controller: 'HomeController'
		})	
		.when('/raceinfo', {
			templateUrl: 'views/raceinfo.html',
			controller: 'TabsCtrl'
		})
		.when('/results',{
			templateUrl: 'views/results.html',
			controller: 'ResultsController'
		})
		.when('/photos',{
			templateUrl: 'views/photos.html',
			controller: 'ResultsController'
		})
		.when('/contact',{
			templateUrl: 'views/contact.html',
			controller: 'EmailController'
		})	
		//this is incase we need to add the #!
	$locationProvider.html5Mode(
	true);
});




