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
		.when('/registration',{
			templateUrl: 'views/registration.html',
			controller: 'ResultsController'
		})
		.when('/map',{
			templateUrl: 'views/map.html',
			controller: 'ResultsController'
		})
		.when('/history',{
			templateUrl: 'views/history.html',
			controller: 'ResultsController'
		})
		.when('/pastresults',{
			templateUrl: 'views/pastresults.html',
			controller: 'ResultsController'
		})		
		//this is incase we need to add the #!
	$locationProvider.html5Mode(
	true);
});

/*
angular.module('TabsApp',['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider){
	$routeProvider	

		.when('/raceinfo', {
			templateUrl: 'views/raceinfo.html',
			controller: 'TabsCtrl'
		})
	
		//this is incase we need to add the #!
	$locationProvider.html5Mode(
	true);
});*/


