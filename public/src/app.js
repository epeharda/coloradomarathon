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
			controller: ''
		})
		.when('/photos',{
			templateUrl: 'views/photos.html',
			controller: ''
		})
		.when('/contact',{
			templateUrl: 'views/contact.html',
			controller: 'EmailController'
		})
		.when('/lodging',{
			templateUrl: 'views/lodging.html',
			controller: ''
		})
		.when('/givingback',{
			templateUrl: 'views/givingBack.html',
			controller: ''
		})
		.when('/gb2017',{
			templateUrl: 'views/gb2017.html',
			controller: ''
		})
		.when('/sponsors',{
			templateUrl: 'views/sponsors.html',
			controller: ''
		})
		.when('/blog',{
			templateUrl: 'views/blog.html',
			controller: ''
		})
		.when('/faq',{
			templateUrl: 'views/faq.html',
			controller: ''
		})
		//this is incase we need to add the #!
	$locationProvider.html5Mode(
	true);
});
