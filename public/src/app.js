angular.module('MainApp',['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider){
	$routeProvider	
		.when('/',{
			templateUrl:'views/home.html',
			contorller: 'HomeController'
		})	
		.when('/course', {
			templateUrl: 'views/course.html',
			controller: 'CourseController'
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