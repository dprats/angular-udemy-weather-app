
// CONTROLLERS

myApp.controller('mainController', ['$scope','$location','$resource','cityService', function($scope,$location, $resource, cityService){

	$scope.city = cityService.city;
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

	//move us to the forecast page
	$scope.submit = function(){
		$location.path("/forecast");

	}


}]);

myApp.controller('forecastController', ['$scope','$routeParams', 'cityService','weatherService', function($scope, $routeParams, cityService,weatherService){


	$scope.city = cityService.city;

	// console.log('cityService.city in forecast is: ' + $scope.city);

	$scope.days = $routeParams.days || 2;

	//used WeatherService to call the API
	$scope.weatherResults = weatherService.GetWeather($scope.city, $scope.days);

	console.log("days: " + $scope.days);

	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK - 273)) + 32);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);//because API returns answer in milliseconds

	}


}]);

