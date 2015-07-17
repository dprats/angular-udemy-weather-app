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
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})


});

//SERVICES

myApp.service('cityService', function(){

	this.city = 'Boston';

});




// CONTROLLERS

myApp.controller('mainController', ['$scope','$resource','cityService', function($scope,$resource, cityService){

	$scope.city = cityService.city;
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});



}]);

myApp.controller('forecastController', ['$scope','$resource','$routeParams', 'cityService', function($scope,$resource, $routeParams, cityService){


	$scope.city = cityService.city;

	// console.log('cityService.city in forecast is: ' + $scope.city);

	$scope.days = $routeParams.days || 2;

		//ng-resource weaps up the $http service in angularJS
	$scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
		callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

	$scope.weatherResults = $scope.weatherApi.get({
		q: $scope.city, cnt: $scope.days
	});

	console.log("days: " + $scope.days);

	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK - 273)) + 32);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);//because API returns answer in milliseconds

	}


}]);


