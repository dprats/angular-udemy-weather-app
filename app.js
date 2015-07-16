// MODULE
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// ROUTES
myApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: '/pages/main.html',
		controller: 'mainController'

	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})


});


// CONTROLLERS

weatherApp.controller('mainController', ['$scope', function($scope){

	console.log('Hello from mainController');

}]);

weatherApp.controller('forecastController', ['$scope', function($scope){

	console.log('Hello from forecastController');

}]);